import PostForm from "@/components/admin/PostForm";

export default function NewPostPage() {
  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Novi blog post</h1>
        <p className="text-gray-500 text-sm mt-1">Popunite sva polja i kliknite Spremi</p>
      </div>
      <PostForm />
    </div>
  );
}
