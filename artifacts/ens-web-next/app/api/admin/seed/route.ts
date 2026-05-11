/**
 * POST /api/admin/seed
 *
 * One-time migration: reads posts-db.json and writes all posts to Upstash Redis.
 * Protected by admin cookie. Call once after connecting Redis in Vercel.
 */
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import type { BlogPostDB } from "@/lib/posts.server";

const TOKEN_COOKIE = "ens_admin_token";
const VALID_TOKEN = "ens-admin-2026";
const REDIS_KEY = "ens_posts";

function isAuthed(request: NextRequest): boolean {
  return request.cookies.get(TOKEN_COOKIE)?.value === VALID_TOKEN;
}

export async function POST(request: NextRequest) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    return NextResponse.json(
      { error: "Redis not configured — connect Upstash for Redis to this project in Vercel Storage" },
      { status: 500 }
    );
  }

  // Read posts-db.json (bundled with the deployment)
  const dbPath = path.join(process.cwd(), "data", "posts-db.json");
  let posts: BlogPostDB[];
  try {
    posts = JSON.parse(fs.readFileSync(dbPath, "utf-8")) as BlogPostDB[];
  } catch {
    return NextResponse.json({ error: "Could not read posts-db.json" }, { status: 500 });
  }

  // Write all posts to Redis
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { Redis } = require("@upstash/redis") as typeof import("@upstash/redis");
  const redis = new Redis({
    url: process.env.KV_REST_API_URL!,
    token: process.env.KV_REST_API_TOKEN!,
  });
  await redis.set(REDIS_KEY, posts);

  return NextResponse.json({
    ok: true,
    seeded: posts.length,
    message: `Successfully migrated ${posts.length} posts to Redis`,
  });
}
