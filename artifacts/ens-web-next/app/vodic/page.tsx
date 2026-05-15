import type { Metadata } from "next";
import VodicClient from "./VodicClient";

export const metadata: Metadata = {
  title: "Besplatni vodič: Porezna prijava 2026 — ENS Knjigovodstvo",
  description:
    "Preuzmite besplatni PDF vodič: 12 stvari koje svaki vlasnik firme u BiH mora znati o poreznoj prijavi 2026. Rokovi, greške, legalne uštede.",
  keywords: [
    "porezna prijava 2026 BiH",
    "vodič porez BiH",
    "PDV prijava 2026",
    "porez na dobit FBiH",
    "računovodstvo vodič",
    "ENS knjigovodstvo vodič",
  ],
  openGraph: {
    url: "https://ens.ba/vodic",
    type: "website",
    title: "Besplatni vodič: Porezna prijava 2026 — ENS Knjigovodstvo",
    description:
      "12 stvari koje svaki vlasnik firme u BiH mora znati. Preuzmite besplatni PDF — rokovi, greške, legalne uštede.",
  },
  alternates: { canonical: "https://ens.ba/vodic" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Besplatni vodič za poreznu prijavu 2026",
  url: "https://ens.ba/vodic",
  description:
    "Preuzmite besplatni PDF vodič o poreznoj prijavi 2026 za preduzetnike u BiH.",
  publisher: {
    "@type": "Organization",
    name: "ENS Knjigovodstvo d.o.o.",
    url: "https://ens.ba",
  },
};

export default function VodicPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VodicClient />
    </>
  );
}
