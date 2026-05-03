import { useEffect } from "react";

const SITE_URL = "https://ens.ba";
const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph.jpg`;

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  publishedTime?: string;
  author?: string;
}

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [, key, val] = selector.match(/^meta\[(name|property)="([^"]+)"\]$/) ?? [];
    if (key && val) el.setAttribute(key, val);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id: string, data: Record<string, unknown> | Record<string, unknown>[]) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
}

export function SEO({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  keywords,
  jsonLd,
  publishedTime,
  author,
}: SEOProps) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;

    setMeta('meta[name="description"]', "content", description);
    if (keywords) setMeta('meta[name="keywords"]', "content", keywords);

    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", type);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[property="og:locale"]', "content", "bs_BA");
    setMeta('meta[property="og:site_name"]', "content", "ENS d.o.o.");

    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", image);

    setMeta('meta[name="robots"]', "content", "index, follow, max-image-preview:large");

    setLink("canonical", url);

    if (publishedTime) {
      setMeta('meta[property="article:published_time"]', "content", publishedTime);
    }
    if (author) {
      setMeta('meta[property="article:author"]', "content", author);
    }

    if (jsonLd) {
      setJsonLd("page-jsonld", jsonLd);
    } else {
      const existing = document.getElementById("page-jsonld");
      if (existing) existing.remove();
    }
  }, [title, description, path, image, type, keywords, publishedTime, author, jsonLd]);

  return null;
}

export const SITE = {
  url: SITE_URL,
  name: "ENS d.o.o.",
  defaultImage: DEFAULT_OG_IMAGE,
};
