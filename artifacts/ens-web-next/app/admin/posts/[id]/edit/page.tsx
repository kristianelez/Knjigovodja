import { notFound } from "next/navigation";
import { getPost } from "@/lib/posts.server";
import PostForm from "@/components/admin/PostForm";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditPostPage({ params }: Props) {
  const { id } = await params;
  const post = getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Uredi post</h1>
        <p className="text-gray-500 text-sm mt-1 line-clamp-1">{post.title}</p>
      </div>
      <PostForm post={post} />
    </div>
  );
}
