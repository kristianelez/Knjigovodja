import { NextRequest, NextResponse } from "next/server";
import { getPosts, savePost, generateId, generateSlug, BlogPostDB } from "@/lib/posts.server";

const TOKEN_COOKIE = "ens_admin_token";
const VALID_TOKEN = "ens-admin-2026";

function isAuthed(request: NextRequest): boolean {
  return request.cookies.get(TOKEN_COOKIE)?.value === VALID_TOKEN;
}

export async function GET(request: NextRequest) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const posts = await getPosts();
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: Partial<BlogPostDB>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const post: BlogPostDB = {
    id: body.id || generateId(),
    slug: body.slug || generateSlug(body.title ?? ""),
    title: body.title ?? "",
    excerpt: body.excerpt ?? "",
    category: body.category ?? "",
    author: body.author ?? "",
    date: body.date ?? "",
    readTime: body.readTime ?? "",
    image: body.image ?? "",
    content: body.content ?? "",
    ...(body.focalPoint ? { focalPoint: body.focalPoint } : {}),
  };

  await savePost(post);
  return NextResponse.json(post, { status: 201 });
}
