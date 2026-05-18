"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, Search, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { BlogPostDB } from "@/lib/posts.server";

const ALL = "Sve teme";
const POSTS_PER_PAGE = 6;

export default function BlogClient({ posts }: { posts: BlogPostDB[] }) {
  const categories = Array.from(new Set(posts.map((p) => p.category)));
  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const featured = posts[0];
  const rest = posts.slice(1);

  const filtered = (activeCategory === ALL ? rest : rest.filter((p) => p.category === activeCategory)).filter(
    (p) =>
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  const displayed = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  useEffect(() => {
    setVisibleCount(POSTS_PER_PAGE);
  }, [activeCategory, search]);

  useEffect(() => {
    if (!hasMore) return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setVisibleCount((c) => c + POSTS_PER_PAGE); },
      { rootMargin: "300px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, visibleCount]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4 uppercase tracking-wider">
            ENS Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Blog o računovodstvu i porezima u BiH
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Stručni savjeti za poduzetnike od ENS d.o.o. Sarajevo — porezi, plate, PDV i osnivanje firmi.
          </p>
          <a
            href="#newsletter"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Pretplatite se na newsletter
          </a>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      {featured && (
        <section className="container mx-auto px-4 md:px-6 py-12 max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Izdvojeni članak</p>
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow">
              <div className="relative h-64 md:h-auto md:min-h-[360px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  quality={80}
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4 inline-block w-fit">
                  {featured.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {featured.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center font-semibold text-primary gap-2 transition-all">
                  Pročitaj više <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* STICKY FILTER + SEARCH BAR */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-3 max-w-6xl flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(ALL)}
              className={`px-4 py-1.5 text-sm font-medium rounded-full cursor-pointer transition-colors border ${
                activeCategory === ALL
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-600 hover:text-primary border-gray-200"
              }`}
            >
              {ALL}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full cursor-pointer transition-colors border ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-600 hover:text-primary border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-60">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Pretraži..."
              className="pl-9 h-9 rounded-full border-gray-300 text-sm"
            />
          </div>
        </div>
      </div>

      {/* POSTS GRID */}
      <section className="container mx-auto px-4 md:px-6 py-12 max-w-6xl">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg font-medium">Nema rezultata za &ldquo;{search}&rdquo;</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory(ALL); }}
              className="mt-4 text-primary underline text-sm"
            >
              Prikaži sve postove
            </button>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayed.map((post, index) => (
                <Card
                  key={post.id}
                  className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white flex flex-col group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
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
                    <div className="flex items-center text-sm text-gray-500 mb-3 gap-4">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-5 line-clamp-2 flex-grow text-sm">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors mt-auto text-sm"
                    >
                      Pročitaj više <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

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
                    Učitaj još <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-sm text-gray-500 mt-4">
                    Prikazano {displayed.length} od {filtered.length} postova
                  </p>
                </div>
              </>
            )}

            {!hasMore && filtered.length > POSTS_PER_PAGE && (
              <p className="text-center text-sm text-gray-500 mt-12">
                Prikazani su svi postovi ({filtered.length})
              </p>
            )}
          </>
        )}
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" className="container mx-auto px-4 md:px-6 pb-20 max-w-6xl">
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
          <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Budite prvi koji saznaju o poreznim izmjenama
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Jednom sedmično — samo relevantne vijesti o porezima, računovodstvu i zakonima u BiH.
          </p>
          {subscribed ? (
            <p className="text-primary font-semibold text-lg">✓ Hvala! Uspješno ste se pretplatili.</p>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }}
              className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Vaša email adresa..."
                required
                className="rounded-full border-gray-300 h-11"
              />
              <Button type="submit" className="rounded-full h-11 px-6 bg-primary hover:bg-primary/90 text-white whitespace-nowrap">
                Pretplatite se
              </Button>
            </form>
          )}
          <p className="text-xs text-gray-400 mt-4">Bez spama. Odjava u jednom kliku.</p>
        </div>
      </section>
    </div>
  );
}
