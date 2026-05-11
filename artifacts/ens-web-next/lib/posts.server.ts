import fs from "fs";
import path from "path";

export interface BlogPostDB {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
  focalPoint?: { x: number; y: number };
}

const REDIS_KEY = "ens_posts";
const DB_PATH = path.join(process.cwd(), "data", "posts-db.json");

// Use Upstash Redis in production (when Vercel env vars are set), file-based locally
// Vercel Upstash for Redis integration provides KV_REST_API_URL + KV_REST_API_TOKEN
const useRedis = !!(
  process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
);

// ─── File-based (local dev) ────────────────────────────────────────────────────

function readFromFile(): BlogPostDB[] {
  try {
    return JSON.parse(fs.readFileSync(DB_PATH, "utf-8")) as BlogPostDB[];
  } catch {
    return [];
  }
}

function writeToFile(posts: BlogPostDB[]): void {
  fs.writeFileSync(DB_PATH, JSON.stringify(posts, null, 2), "utf-8");
}

// ─── Redis-based (Vercel production) ──────────────────────────────────────────

async function getRedis() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { Redis } = require("@upstash/redis") as typeof import("@upstash/redis");
  return new Redis({
    url: process.env.KV_REST_API_URL!,
    token: process.env.KV_REST_API_TOKEN!,
  });
}

async function readFromRedis(): Promise<BlogPostDB[]> {
  const redis = await getRedis();
  const posts = (await redis.get(REDIS_KEY)) as BlogPostDB[] | null;
  return posts ?? [];
}

async function writeToRedis(posts: BlogPostDB[]): Promise<void> {
  const redis = await getRedis();
  await redis.set(REDIS_KEY, posts);
}

// ─── Public API ────────────────────────────────────────────────────────────────

export async function getPosts(): Promise<BlogPostDB[]> {
  return useRedis ? readFromRedis() : readFromFile();
}

export async function getPost(id: string): Promise<BlogPostDB | undefined> {
  const posts = await getPosts();
  return posts.find((p) => p.id === id);
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPostDB | undefined> {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug);
}

export async function savePost(post: BlogPostDB): Promise<BlogPostDB> {
  const posts = await getPosts();
  const idx = posts.findIndex((p) => p.id === post.id);
  if (idx >= 0) {
    posts[idx] = post;
  } else {
    posts.push(post);
  }
  if (useRedis) {
    await writeToRedis(posts);
  } else {
    writeToFile(posts);
  }
  return post;
}

export async function deletePost(id: string): Promise<void> {
  const posts = (await getPosts()).filter((p) => p.id !== id);
  if (useRedis) {
    await writeToRedis(posts);
  } else {
    writeToFile(posts);
  }
}

export function generateId(): string {
  return crypto.randomUUID();
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[šđčćž]/g, (c) =>
      ({ š: "s", đ: "dj", č: "c", ć: "c", ž: "z" }[c] ?? c)
    )
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
