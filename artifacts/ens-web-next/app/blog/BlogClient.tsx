"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock } from "lucide-react";
import { useState } from "react";
import type { BlogPostDB } from "@/lib/posts.server";

const ALL = "Sve teme";

export default function BlogClient({ posts }: { posts: BlogPostDB[] }) {
  const categories = Array.from(new Set(posts.map((post) => post.category)));
  const [activeCategory, setActiveCategory] = useState<string>(ALL);

  const filteredPosts =
    activeCategory === ALL ? posts : posts.filter((p) => p.category === activeCategory);

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
          {filteredPosts.map((post) => (
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
                  quality={75}
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
      </div>
    </div>
  );
}
