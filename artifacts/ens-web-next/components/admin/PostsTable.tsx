"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PenSquare, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { BlogPostDB } from "@/lib/posts.server";

interface PostsTableProps {
  initialPosts: BlogPostDB[];
}

export default function PostsTable({ initialPosts }: PostsTableProps) {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPostDB[]>(initialPosts);
  const [deleting, setDeleting] = useState<string | null>(null);

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Obrisati post "${title}"?`)) return;

    setDeleting(id);
    try {
      const res = await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p.id !== id));
        router.refresh();
      } else {
        alert("Greška pri brisanju.");
      }
    } catch {
      alert("Greška pri brisanju.");
    } finally {
      setDeleting(null);
    }
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500">
        <p className="text-lg">Nema blog postova.</p>
        <Link href="/admin/posts/new">
          <Button className="mt-4 bg-[#c0392b] hover:bg-[#a93226] text-white">
            Dodaj prvi post
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="text-left px-4 py-3 font-semibold text-gray-600">Naslov</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden sm:table-cell">Kategorija</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden md:table-cell">Datum</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden lg:table-cell">Autor</th>
            <th className="text-right px-4 py-3 font-semibold text-gray-600">Akcije</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr
              key={post.id}
              className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <td className="px-4 py-3">
                <span className="font-medium text-gray-900 line-clamp-1">{post.title}</span>
              </td>
              <td className="px-4 py-3 hidden sm:table-cell">
                <Badge variant="secondary" className="text-xs">
                  {post.category}
                </Badge>
              </td>
              <td className="px-4 py-3 text-gray-500 hidden md:table-cell">
                {post.date}
              </td>
              <td className="px-4 py-3 text-gray-500 hidden lg:table-cell">
                {post.author}
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-end gap-2">
                  <Link href={`/admin/posts/${post.id}/edit`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Uredi"
                    >
                      <PenSquare className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                    title="Obriši"
                    disabled={deleting === post.id}
                    onClick={() => handleDelete(post.id, post.title)}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
