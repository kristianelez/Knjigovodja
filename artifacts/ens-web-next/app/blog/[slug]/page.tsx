import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from "lucide-react";
import { getPosts } from "@/lib/posts.server";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { SocialShare } from "@/components/blog/SocialShare";
import { AuthorBox } from "@/components/blog/AuthorBox";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { BlogCta } from "@/components/blog/BlogCta";
import { PostContent, extractFaq } from "@/components/blog/PostContent";

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
    title: `${post.title} | ENS d.o.o.`,
    description: post.excerpt,
    keywords: [
      post.category.toLowerCase(),
      "knjigovodstvo BiH",
      "ENS d.o.o.",
      post.title.toLowerCase(),
    ],
    authors: [{ name: "ENS d.o.o." }],
    openGraph: {
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      images: [{ url: `${SITE_URL}${post.image}`, width: 1200, height: 630, alt: post.title }],
      publishedTime: post.date,
      authors: ["ENS d.o.o."],
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

  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const faqItems = extractFaq(post.content);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
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
      "@type": "Organization",
      name: "ENS Računovodstvo",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "ENS d.o.o.",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 200,
        height: 60,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    articleSection: post.category,
    inLanguage: "bs-BA",
    url: postUrl,
    isPartOf: { "@type": "Blog", name: "ENS Blog", url: `${SITE_URL}/blog` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.category, item: `${SITE_URL}/blog?category=${encodeURIComponent(post.category)}` },
      { "@type": "ListItem", position: 4, name: post.title, item: postUrl },
    ],
  };

  const faqJsonLd =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: {
              "@type": "Answer",
              text: answer,
            },
          })),
        }
      : null;

  return (
    <article className="pt-24 pb-20 bg-white min-h-screen">
      <ReadingProgress />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Hero image */}
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
        <div className="absolute inset-0 bg-black/50" />
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

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500 flex items-center gap-1 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Početna</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary font-medium">{post.category}</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-700 line-clamp-1">{post.title}</span>
          </nav>

          {/* Meta bar */}
          <div className="mb-10 pb-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 w-4 h-4" /> Nazad na blog
            </Link>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                {post.readTime}
              </div>
            </div>
          </div>

          {/* Excerpt lead */}
          <p className="text-xl text-gray-800 font-medium mb-8 leading-relaxed border-l-4 border-primary pl-5">
            {post.excerpt}
          </p>

          {/* Table of Contents */}
          <TableOfContents content={post.content} />

          {/* Main content */}
          <PostContent content={post.content} />

          {/* CTA */}
          <BlogCta />

          {/* Author box */}
          <AuthorBox author={post.author} />

          {/* Social share */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <SocialShare url={postUrl} title={post.title} />
          </div>
        </div>

        {/* Related articles — outside the white card */}
        <div className="bg-gray-50 px-8 md:px-12 pb-12 rounded-b-3xl border-b border-x border-gray-100">
          <RelatedArticles posts={posts} currentSlug={post.slug} category={post.category} />
        </div>
      </div>
    </article>
  );
}
