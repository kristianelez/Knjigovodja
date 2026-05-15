"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function parseToc(content: string): TocItem[] {
  return content
    .split("\n\n")
    .filter((s) => s.startsWith("## ") || s.startsWith("### "))
    .map((s) => {
      const isH3 = s.startsWith("### ");
      const text = s.slice(isH3 ? 4 : 3).trim();
      const id = text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/[šđčćž]/g, (c) => ({ š: "s", đ: "dj", č: "c", ć: "c", ž: "z" }[c] ?? c))
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      return { id, text, level: isH3 ? 3 : 2 };
    });
}

export function TableOfContents({ content }: { content: string }) {
  const toc = parseToc(content);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-20% 0% -70% 0%" }
    );
    toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [toc]);

  if (toc.length < 3) return null;

  return (
    <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
      <h2 className="flex items-center gap-2 text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">
        <List className="w-4 h-4" /> Sadržaj
      </h2>
      <ol className="space-y-2">
        {toc.map(({ id, text, level }) => (
          <li key={id} className={level === 3 ? "pl-4" : ""}>
            <a
              href={`#${id}`}
              className={`text-sm transition-colors hover:text-primary ${
                activeId === id ? "text-primary font-semibold" : "text-gray-600"
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export { parseToc };
