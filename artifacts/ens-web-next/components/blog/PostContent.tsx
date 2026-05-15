function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[šđčćž]/g, (c) => ({ š: "s", đ: "dj", č: "c", ć: "c", ž: "z" }[c] ?? c))
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function PostContent({ content }: { content: string }) {
  const segments = content.split("\n\n").filter((s) => s.trim() !== "");

  return (
    <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 prose-li:text-gray-600">
      {segments.map((segment, i) => {
        if (segment.startsWith("## ")) {
          const text = segment.slice(3).trim();
          return <h2 key={i} id={slugify(text)}>{text}</h2>;
        }
        if (segment.startsWith("### ")) {
          const text = segment.slice(4).trim();
          return <h3 key={i} id={slugify(text)}>{text}</h3>;
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
  );
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export function extractFaq(content: string): FaqEntry[] {
  const segments = content.split("\n\n").filter((s) => s.trim());
  const faqs: FaqEntry[] = [];
  let inFaq = false;
  let currentQuestion = "";

  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    const headingText = seg.startsWith("## ") ? seg.slice(3).toLowerCase() : "";
    if (headingText.includes("faq") || headingText.includes("pitanj") || headingText.includes("česta")) {
      inFaq = true;
      continue;
    }
    if (inFaq && seg.startsWith("## ") && !headingText.includes("faq")) {
      inFaq = false;
    }
    if (inFaq && seg.startsWith("### ")) {
      currentQuestion = seg.slice(4).trim();
    } else if (inFaq && currentQuestion && !seg.startsWith("##")) {
      faqs.push({ question: currentQuestion, answer: seg.trim() });
      currentQuestion = "";
    }
  }
  return faqs;
}
