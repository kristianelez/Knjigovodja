import { NextRequest, NextResponse } from "next/server";

const VALID_USERNAME = "admin";
const VALID_PASSWORD = "adminsedada";
const TOKEN_VALUE = "ens-admin-2026";
const COOKIE_NAME = "ens_admin_token";

export async function POST(request: NextRequest) {
  let body: { username?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  if (body.username !== VALID_USERNAME || body.password !== VALID_PASSWORD) {
    return NextResponse.json({ ok: false, error: "Pogrešni podaci" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, TOKEN_VALUE, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });
  return response;
}
