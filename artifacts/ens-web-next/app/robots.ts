import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/_next/", "/static/"],
      },
      {
        // Allow AI crawlers for brand visibility
        userAgent: ["GPTBot", "Anthropic-ai", "ClaudeBot", "PerplexityBot"],
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
    ],
    sitemap: "https://ens.ba/sitemap.xml",
    host: "https://ens.ba",
  };
}
