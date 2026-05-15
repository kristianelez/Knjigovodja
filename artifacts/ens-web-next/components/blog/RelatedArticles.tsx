import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import type { BlogPostDB } from "@/lib/posts.server";

export function RelatedArticles({
  posts,
  currentSlug,
  category,
}: {
  posts: BlogPostDB[];
  currentSlug: string;
  category: string;
}) {
  const related = posts
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-16 pt-10 border-t border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Slični članci</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group block bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                {post.category}
              </span>
              <h3 className="mt-1 text-base font-bold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                <Clock className="w-3 h-3" /> {post.readTime}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
