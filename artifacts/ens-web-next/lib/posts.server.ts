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

const DB_PATH = path.join(process.cwd(), "data", "posts-db.json");

function readDB(): BlogPostDB[] {
  try {
    const raw = fs.readFileSync(DB_PATH, "utf-8");
    return JSON.parse(raw) as BlogPostDB[];
  } catch {
    return [];
  }
}

function writeDB(posts: BlogPostDB[]): void {
  fs.writeFileSync(DB_PATH, JSON.stringify(posts, null, 2), "utf-8");
}

export function getPosts(): BlogPostDB[] {
  return readDB();
}

export function getPost(id: string): BlogPostDB | undefined {
  return readDB().find((p) => p.id === id);
}

export function savePost(post: BlogPostDB): BlogPostDB {
  const posts = readDB();
  const idx = posts.findIndex((p) => p.id === post.id);
  if (idx >= 0) {
    posts[idx] = post;
  } else {
    posts.push(post);
  }
  writeDB(posts);
  return post;
}

export function deletePost(id: string): void {
  const posts = readDB().filter((p) => p.id !== id);
  writeDB(posts);
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
