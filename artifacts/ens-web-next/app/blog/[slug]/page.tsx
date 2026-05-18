import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, User, Calendar, ChevronRight, Linkedin, Facebook, Link2, Phone } from "lucide-react";
import { getPosts } from "@/lib/posts.server";
import ArticleClient from "./ArticleClient";

export const revalidate = 3600;

const SITE_URL = "https://ens.ba";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  const metaTitle = (post as any).metaTitle || post.title;
  const metaDescription = (post as any).metaDescription || post.excerpt;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [post.category.toLowerCase(), "knjigovodstvo BiH", "ENS d.o.o.", post.title.toLowerCase()],
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      title: metaTitle,
      description: metaDescription,
      images: [{ url: `${SITE_URL}${post.image}`, width: 1200, height: 630, alt: post.title }],
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      locale: "bs_BA",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [`${SITE_URL}${post.image}`],
    },
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const posts = await getPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: { "@type": "ImageObject", url: `${SITE_URL}${post.image}`, width: 1200, height: 630 },
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      worksFor: { "@type": "Organization", name: "ENS d.o.o." },
    },
    publisher: {
      "@type": "Organization",
      name: "ENS d.o.o.",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 200, height: 60 },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
    articleSection: post.category,
    inLanguage: "bs-BA",
    url: `${SITE_URL}/blog/${post.slug}`,
    isPartOf: { "@type": "Blog", name: "ENS Blog", url: `${SITE_URL}/blog` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Pocetna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };

  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const encodedUrl = encodeURIComponent(postUrl);
  const encodedTitle = encodeURIComponent(post.title);

  return (
    <article className="pt-24 pb-20 bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* HERO */}
      <div className="w-full h-[45vh] md:h-[55vh] relative">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container px-4 md:px-6 pb-10 max-w-5xl mx-auto">
            <span className="px-4 py-1.5 bg-primary text-white text-sm font-bold rounded-full uppercase tracking-wider mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* BREADCRUMB + META BAR */}
      <div className="border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl py-4">
          <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Pocetna</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-800 font-medium line-clamp-1">{post.title}</span>
          </nav>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-600">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-primary" />{post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" />{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 mr-1">Podijeli:</span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                aria-label="Podijeli na LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                aria-label="Podijeli na Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                aria-label="Podijeli na X"
              >
                <Link2 className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2-COLUMN CONTENT LAYOUT */}
      <div className="container mx-auto px-4 md:px-6 max-w-5xl py-12">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
          {/* MAIN CONTENT */}
          <div>
            <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 prose-li:text-gray-600">
              <p className="text-xl text-gray-800 font-medium mb-8 leading-relaxed not-prose border-l-4 border-primary pl-5 py-1">
                {post.excerpt}
              </p>
              <ArticleClient content={post.content} />
            </div>

            {/* AUTHOR BIO */}
            <div className="mt-16 p-6 md:p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-white border border-gray-200 p-2">
                <Image src="/logo.png" alt="ENS d.o.o." fill className="object-contain" sizes="80px" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-primary font-bold mb-1">Autor</p>
                <h3 className="text-lg font-bold text-gray-900 mb-1">ENS d.o.o. Sarajevo</h3>
                <p className="text-sm text-gray-600">
                  Profesionalne racunovodstvene usluge u BiH. Vise od 10 godina iskustva — porezi, plate, PDV i osnivanje firmi.
                </p>
              </div>
            </div>

            {/* RELATED ARTICLES */}
            
            {related.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Slicni clanci</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {related.map((r) => (
                    <Link key={r.id} href={`/blog/${r.slug}`} className="group block">
                      <div className="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="relative h-40">
                          <Image
                            src={r.image}
                            alt={r.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, 33vw"
                            quality={65}
                          />
                        </div>
                        <div className="p-4">
                          <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-1">{r.category}</p>
                          <h3 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors mb-2">
                            {r.title}
                          </h3>
                          <p className="text-xs text-gray-500">{r.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* BOTTOM CTA BOX */}
            <div className="mt-16 p-8 bg-primary rounded-2xl text-white">
              <Phone className="w-6 h-6 mb-3" />
              <h3 className="text-xl font-bold mb-2">Trebate pomoc s racunovodstvom i porezima?</h3>
              <p className="text-white/80 mb-6">
                ENS d.o.o. pruza strucne racunovodstvene usluge preduzecima i obrtima u BiH.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm"
                >
                  Kontaktirajte nas
                </Link>
                <Link
                  href="/usluge"
                  className="inline-flex items-center justify-center border border-white/50 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm"
                >
                  Pogledajte usluge
                </Link>
              </div>
            </div>
          </div>

          {/* STICKY SIDEBAR with TOC */}
          <aside className="hidden lg:block">
            <ArticleClient content={post.content} sidebarOnly />
          </aside>
        </div>
      </div>
    </article>
  );
}
