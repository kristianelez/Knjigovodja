import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import { getPosts } from "@/lib/posts.server";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog o računovodstvu i porezima u BiH | ENS d.o.o.",
  description: "Stručni savjeti o knjigovodstvu, porezima, obračunu plata i osnivanju firmi u BiH. Vodiči, zakoni i praktični primjeri od ENS d.o.o. Sarajevo.",
  keywords: ["blog knjigovodstvo", "porezi BiH", "obračun plata", "osnivanje firme", "savjeti za poduzetnike"],
  openGraph: {
    url: "https://ens.ba/blog",
    type: "website",
    title: "Blog o računovodstvu i porezima u BiH | ENS d.o.o.",
    description: "Stručni savjeti o knjigovodstvu, porezima i osnivanju firmi u BiH. Vodiči i praktični primjeri od ENS d.o.o. Sarajevo.",
  },
  alternates: { canonical: "https://ens.ba/blog" },
};

export default async function BlogPage() {
  const posts = await getPosts();
  return <BlogClient posts={posts} />;
}
