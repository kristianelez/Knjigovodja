import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts.server";

const BASE_URL = "https://ens.ba";

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: BASE_URL,
    lastModified: new Date("2026-05-15"),
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    url: `${BASE_URL}/usluge`,
    lastModified: new Date("2026-05-01"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/kontakt`,
    lastModified: new Date("2026-05-01"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/blog`,
    lastModified: new Date("2026-05-15"),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  // Service landing pages
  {
    url: `${BASE_URL}/knjigovodstvo`,
    lastModified: new Date("2026-05-15"),
    changeFrequency: "monthly",
    priority: 0.95,
  },
  {
    url: `${BASE_URL}/pdv-prijave`,
    lastModified: new Date("2026-05-15"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/obracun-plata`,
    lastModified: new Date("2026-05-15"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/osnivanje-firme`,
    lastModified: new Date("2026-05-15"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  // Informational pages
  {
    url: `${BASE_URL}/faq`,
    lastModified: new Date("2026-05-15"),
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    url: `${BASE_URL}/o-nama`,
    lastModified: new Date("2026-05-01"),
    changeFrequency: "yearly",
    priority: 0.6,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogRoutes: MetadataRoute.Sitemap = [];

  try {
    const posts = await getPosts();
    blogRoutes = posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch {
    // Graceful fallback if Redis unavailable at build time
  }

  return [...staticRoutes, ...blogRoutes];
}
