"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import type { BlogPostDB } from "@/lib/posts.server";

const ALL = "Sve teme";
const POSTS_PER_PAGE = 6;

export default function BlogClient({ posts }: { posts: BlogPostDB[] }) {
  const categories = Array.from(new Set(posts.map((post) => post.category)));
  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const filteredPosts =
    activeCategory === ALL ? posts : posts.filter((p) => p.category === activeCategory);

  const displayedPosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(POSTS_PER_PAGE);
  }, [activeCategory]);

  // Auto-load on scroll near bottom (intersection observer)
  useEffect(() => {
    if (!hasMore) return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((c) => c + POSTS_PER_PAGE);
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, visibleCount]);

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Stručni savjeti i novosti</h1>
          <p className="text-xl text-gray-600 mb-10">
            Budite u toku sa najnovijim poreznim izmjenama, zakonima i savjetima za optimizaciju vašeg poslovanja.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory(ALL)}
              className={`px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-colors border ${
                activeCategory === ALL ? "bg-primary text-white border-primary" : "bg-white text-gray-600 hover:text-primary border-gray-200"
              }`}
            >
              {ALL}
            </button>
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-colors border ${
                  activeCategory === cat ? "bg-primary text-white border-primary" : "bg-white text-gray-600 hover:text-primary border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post, index) => (
            <Card key={post.id} className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white flex flex-col group">
              <div className="relative h-56 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={70}
                  loading={index < 3 ? "eager" : "lazy"}
                  priority={index < 3}
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2 flex-grow">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors mt-auto">
                  Pročitaj više <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sentinel for auto-loading on scroll, and manual "Load More" button as fallback */}
        {hasMore && (
          <>
            <div ref={sentinelRef} aria-hidden="true" className="h-1" />
            <div className="mt-12 text-center">
              <Button
                onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-8 border-gray-300 hover:bg-white"
              >
                Učitaj još
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Prikazano {displayedPosts.length} od {filteredPosts.length} postova
              </p>
            </div>
          </>
        )}

        {!hasMore && filteredPosts.length > POSTS_PER_PAGE && (
          <p className="text-center text-sm text-gray-500 mt-12">
            Prikazani su svi postovi ({filteredPosts.length})
          </p>
        )}
      </div>
    </div>
  );
}
