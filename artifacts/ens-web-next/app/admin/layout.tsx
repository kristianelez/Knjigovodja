import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FileText, Plus, LogOut, Home } from "lucide-react";

const TOKEN_COOKIE = "ens_admin_token";
const VALID_TOKEN = "ens-admin-2026";

async function LogoutButton() {
  async function logout() {
    "use server";
    const { cookies: getCookies } = await import("next/headers");
    const cookieStore = await getCookies();
    cookieStore.set(TOKEN_COOKIE, "", { maxAge: 0, path: "/" });
    redirect("/admin");
  }

  return (
    <form action={logout}>
      <button
        type="submit"
        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors text-sm font-medium"
      >
        <LogOut className="w-4 h-4 shrink-0" />
        <span>Odjava</span>
      </button>
    </form>
  );
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get(TOKEN_COOKIE)?.value;
  const isLoggedIn = token === VALID_TOKEN;

  // On the login page we just render children without the sidebar
  if (!isLoggedIn) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 bg-gray-950 text-white flex-col fixed inset-y-0 left-0 z-40">
        <div className="flex items-center gap-3 px-5 py-5 border-b border-gray-800">
          <div className="relative w-24 h-10">
            <Image
              src="/logo.png"
              alt="ENS Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-sm font-semibold text-gray-300">Admin</span>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors text-sm font-medium"
          >
            <Home className="w-4 h-4 shrink-0" />
            <span>Blog postovi</span>
          </Link>
          <Link
            href="/admin/posts/new"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors text-sm font-medium"
          >
            <Plus className="w-4 h-4 shrink-0" />
            <span>Novi post</span>
          </Link>
          <Link
            href="/blog"
            target="_blank"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors text-sm font-medium"
          >
            <FileText className="w-4 h-4 shrink-0" />
            <span>Pogledaj blog</span>
          </Link>
        </nav>

        <div className="px-3 py-4 border-t border-gray-800">
          <LogoutButton />
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-gray-950 text-white flex items-center justify-between px-4 py-3 border-b border-gray-800">
        <div className="relative w-20 h-8">
          <Image src="/logo.png" alt="ENS Logo" fill className="object-contain" />
        </div>
        <div className="flex items-center gap-2">
          <Link href="/admin/dashboard" className="p-2 text-gray-300 hover:text-white">
            <Home className="w-5 h-5" />
          </Link>
          <Link href="/admin/posts/new" className="p-2 text-gray-300 hover:text-white">
            <Plus className="w-5 h-5" />
          </Link>
          <LogoutButton />
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 md:ml-64 pt-0 md:pt-0">
        <div className="md:hidden h-14" />
        {children}
      </main>
    </div>
  );
}
