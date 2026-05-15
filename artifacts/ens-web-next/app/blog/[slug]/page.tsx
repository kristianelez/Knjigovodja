import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { getPosts } from "@/lib/posts.server";

export const revalidate = 60;

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

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category.toLowerCase(), "knjigovodstvo BiH", "ENS d.o.o.", post.title.toLowerCase()],
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      images: [{ url: `${SITE_URL}${post.image}`, width: 1200, height: 630, alt: post.title }],
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      locale: "bs_BA",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
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

  const paragraphs = post.content.split("\n\n").filter((p) => p.trim() !== "");

  const relatedPosts = posts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3)
    .concat(
      posts
        .filter((p) => p.slug !== slug && p.category !== post.category)
        .slice(0, Math.max(0, 3 - posts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3).length))
    )
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}${post.image}`,
      width: 1200,
      height: 630,
    },
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
      { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };

  return (
    <article className="pt-24 pb-20 bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="w-full h-[40vh] md:h-[50vh] relative">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center">
            <span className="px-4 py-1.5 bg-primary text-white text-sm font-bold rounded-full uppercase tracking-wider mb-6 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-8 relative z-10 max-w-4xl">
        <div className="bg-white rounded-t-3xl shadow-sm p-8 md:p-12 border-t border-x border-gray-100">
          <div className="mb-10 pb-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-primary transition-colors">
              <ArrowLeft className="mr-2 w-4 h-4" /> Nazad na blog
            </Link>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2"><User className="w-4 h-4 text-primary" />{post.author}</div>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" />{post.date}</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" />{post.readTime}</div>
            </div>
          </div>

          <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80">
            <p className="text-xl text-gray-800 font-medium mb-8 leading-relaxed">{post.excerpt}</p>
            {paragraphs.map((segment, i) => {
              if (segment.startsWith("## ")) {
                return <h2 key={i}>{segment.slice(3)}</h2>;
              }
              if (segment.startsWith("### ")) {
                return <h3 key={i}>{segment.slice(4)}</h3>;
              }
              const lines = segment.split("\n").filter((l) => l.trim());
              if (lines.length > 1 && lines.every((l) => l.trim().startsWith("- "))) {
                return (
                  <ul key={i}>
                    {lines.map((line, j) => (
                      <li key={j}>{line.trim().slice(2)}</li>
                    ))}
                  </ul>
                );
              }
              if (lines.length > 1 && lines.every((l) => /^\d+\.\s/.test(l.trim()))) {
                return (
                  <ol key={i}>
                    {lines.map((line, j) => (
                      <li key={j}>{line.trim().replace(/^\d+\.\s/, "")}</li>
                    ))}
                  </ol>
                );
              }
              return <p key={i}>{segment}</p>;
            })}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
            <p className="text-gray-500 italic">Podijelite ovaj članak sa saradnicima.</p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">in</button>
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">f</button>
            </div>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="bg-gray-50 rounded-b-3xl border-b border-x border-gray-100 p-8 md:p-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Pročitajte i ove članke</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="relative h-32 w-full">
                    <img src={rp.image} alt={rp.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">{rp.category}</span>
                    <p className="mt-1 text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">{rp.title}</p>
                    <p className="mt-1 text-xs text-gray-500">{rp.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
