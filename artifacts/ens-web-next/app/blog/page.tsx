import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import { getPosts } from "@/lib/posts.server";

export const revalidate = 60;

const SITE_URL = "https://ens.ba";

export const metadata: Metadata = {
  title: "Blog o računovodstvu i porezima u BiH | ENS d.o.o.",
  description:
    "Stručni savjeti o knjigovodstvu, porezima, obračunu plata i osnivanju firmi u BiH. Vodiči, zakoni i praktični primjeri od ENS d.o.o. Sarajevo.",
  keywords: [
    "blog knjigovodstvo",
    "porezi BiH",
    "obračun plata",
    "osnivanje firme",
    "savjeti za poduzetnike",
  ],
  openGraph: {
    url: `${SITE_URL}/blog`,
    type: "website",
    title: "Blog o računovodstvu i porezima u BiH | ENS d.o.o.",
    description:
      "Stručni savjeti o knjigovodstvu, porezima i osnivanju firmi u BiH. Vodiči i praktični primjeri od ENS d.o.o. Sarajevo.",
    images: [{ url: `${SITE_URL}/images/og-blog.png`, width: 1200, height: 630, alt: "ENS Blog" }],
  },
  alternates: { canonical: `${SITE_URL}/blog` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
  ],
};

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogClient posts={posts} />
    </>
  );
}
