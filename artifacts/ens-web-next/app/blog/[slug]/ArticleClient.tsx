"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

function parseContent(raw: string) {
  const segments = raw.split("\n\n").filter((s) => s.trim() !== "");
  const headings: Heading[] = [];

  segments.forEach((seg) => {
    if (seg.startsWith("## ")) {
      const text = seg.slice(3).trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      headings.push({ id, text, level: 2 });
    } else if (seg.startsWith("### ")) {
      const text = seg.slice(4).trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      headings.push({ id, text, level: 3 });
    }
  });

  return { segments, headings };
}

interface Props {
  content: string;
  sidebarOnly?: boolean;
}

export default function ArticleClient({ content, sidebarOnly = false }: Props) {
  const { segments, headings } = parseContent(content);
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (sidebarOnly || headings.length === 0) return;
    const ids = headings.map((h) => h.id);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [headings, sidebarOnly]);

  // Sidebar TOC only
  if (sidebarOnly) {
    if (headings.length === 0) return null;
    return (
      <div className="sticky top-24 space-y-4">
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Sadrzaj clanka</p>
          <nav className="space-y-1">
            {headings.map((h) => (
              <a
                key={h.id}
                href={`#${h.id}`}
                className={`block text-sm py-1 transition-colors ${
                  h.level === 3 ? "pl-3 text-gray-500 hover:text-primary" : "text-gray-700 hover:text-primary font-medium"
                } ${activeId === h.id ? "text-primary" : ""}`}
              >
                {h.text}
              </a>
            ))}
          </nav>
        </div>
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
          <p className="text-sm font-bold text-gray-900 mb-2">Trebate pomoc?</p>
          <p className="text-xs text-gray-600 mb-4">ENS d.o.o. je ovdje za vas.</p>
          <Link
            href="/kontakt"
            className="block text-center text-sm font-semibold text-white bg-primary rounded-full py-2 px-4 hover:bg-primary/90 transition-colors"
          >
            Kontaktirajte nas
          </Link>
        </div>
      </div>
    );
  }

  // Main content renderer
  return (
    <>
      {segments.map((seg, i) => {
        if (seg.startsWith("## ")) {
          const text = seg.slice(3).trim();
          const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
          return <h2 key={i} id={id}>{text}</h2>;
        }
        if (seg.startsWith("### ")) {
          const text = seg.slice(4).trim();
          const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
          return <h3 key={i} id={id}>{text}</h3>;
        }
        const lines = seg.split("\n").filter((l) => l.trim());
        if (lines.length > 1 && lines.every((l) => l.trim().startsWith("- "))) {
          return (
            <ul key={i}>
              {lines.map((line, j) => <li key={j}>{line.trim().slice(2)}</li>)}
            </ul>
          );
        }
        if (lines.length > 1 && lines.every((l) => /^\d+\.\s/.test(l.trim()))) {
          return (
            <ol key={i}>
              {lines.map((line, j) => <li key={j}>{line.trim().replace(/^\d+\.\s/, "")}</li>)}
            </ol>
          );
        }
        return <p key={i}>{seg}</p>;
      })}
    </>
  );
}
