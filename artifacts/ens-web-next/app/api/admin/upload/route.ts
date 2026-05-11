import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const TOKEN_COOKIE = "ens_admin_token";
const VALID_TOKEN = "ens-admin-2026";
const MAX_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];
const ALLOWED_EXT = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

function isAuthed(request: NextRequest): boolean {
  return request.cookies.get(TOKEN_COOKIE)?.value === VALID_TOKEN;
}

export async function POST(request: NextRequest) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const blob = file as File;

  if (!ALLOWED_TYPES.includes(blob.type)) {
    return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
  }

  if (blob.size > MAX_SIZE) {
    return NextResponse.json({ error: "File too large (max 10MB)" }, { status: 400 });
  }

  const originalName = blob.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const ext = path.extname(originalName).toLowerCase();

  if (!ALLOWED_EXT.includes(ext)) {
    return NextResponse.json({ error: "Invalid file extension" }, { status: 400 });
  }

  const timestamp = Date.now();
  const filename = `${timestamp}-${originalName}`;
  const uploadDir = path.join(process.cwd(), "public", "images", "uploads");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const filePath = path.join(uploadDir, filename);
  const arrayBuffer = await blob.arrayBuffer();
  fs.writeFileSync(filePath, Buffer.from(arrayBuffer));

  return NextResponse.json({ url: `/images/uploads/${filename}` });
}
