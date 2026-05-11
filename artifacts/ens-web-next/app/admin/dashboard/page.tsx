import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPosts } from "@/lib/posts.server";
import PostsTable from "@/components/admin/PostsTable";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const posts = await getPosts();

  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog postovi</h1>
          <p className="text-gray-500 text-sm mt-1">{posts.length} ukupno</p>
        </div>
        <Link href="/admin/posts/new">
          <Button className="bg-[#c0392b] hover:bg-[#a93226] text-white gap-2">
            <Plus className="w-4 h-4" />
            Novi post
          </Button>
        </Link>
      </div>

      <Card className="border border-gray-200 shadow-sm">
        <CardHeader className="pb-0">
          <CardTitle className="text-base font-semibold text-gray-700">Svi postovi</CardTitle>
        </CardHeader>
        <CardContent className="pt-4 px-0">
          <PostsTable initialPosts={posts} />
        </CardContent>
      </Card>
    </div>
  );
}
