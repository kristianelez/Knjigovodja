import type { Metadata } from "next";
import UslugeClient from "./UslugeClient";

export const metadata: Metadata = {
  title: "Računovodstvene Usluge Sarajevo — Knjigovodstvo | ENS d.o.o.",
  description:
    "Vođenje poslovnih knjiga, obračun plata, PDV prijave, porezno savjetovanje i osnivanje d.o.o. ENS d.o.o. Sarajevo — 12+ godina iskustva, 75+ klijenata.",
  keywords: [
    "računovodstvene usluge Sarajevo",
    "vođenje poslovnih knjiga Sarajevo",
    "obračun plata FBiH",
    "PDV prijava UIO Sarajevo",
    "osnivanje doo Sarajevo",
    "porezno savjetovanje FBiH",
    "knjigovodstvo obrta Sarajevo",
    "završni račun FBiH",
    "fiskalizacija FBiH",
    "finansijski izvještaji AFIP",
  ],
  openGraph: {
    url: "https://ens.ba/usluge",
    type: "website",
    title: "Računovodstvene Usluge Sarajevo — Knjigovodstvo | ENS d.o.o.",
    description:
      "Vođenje poslovnih knjiga, obračun plata, PDV prijave, porezno savjetovanje i osnivanje d.o.o. ENS d.o.o. Sarajevo — 12+ godina iskustva, 75+ klijenata.",
  },
  alternates: { canonical: "https://ens.ba/usluge" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: "https://ens.ba" },
    { "@type": "ListItem", position: 2, name: "Usluge", item: "https://ens.ba/usluge" },
  ],
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Računovodstvene usluge ENS d.o.o.",
  url: "https://ens.ba/usluge",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Vođenje poslovnih knjiga", url: "https://ens.ba/usluge#vodjenje-poslovnih-knjiga" },
    { "@type": "ListItem", position: 2, name: "Obračun plata i naknada", url: "https://ens.ba/usluge#obracun-plata" },
    { "@type": "ListItem", position: 3, name: "Porezno savjetovanje", url: "https://ens.ba/usluge#porezno-savjetovanje" },
    { "@type": "ListItem", position: 4, name: "PDV prijave i evidencije", url: "https://ens.ba/usluge#pdv-prijave" },
    { "@type": "ListItem", position: 5, name: "Osnivanje firme", url: "https://ens.ba/usluge#osnivanje-firme" },
    { "@type": "ListItem", position: 6, name: "Finansijski izvještaji i završni račun", url: "https://ens.ba/usluge#finansijski-izvjestaji" },
    { "@type": "ListItem", position: 7, name: "Elektronsko poslovanje i fiskalizacija", url: "https://ens.ba/usluge#elektronsko-poslovanje" },
    { "@type": "ListItem", position: 8, name: "Biznis plan i finansijska analiza", url: "https://ens.ba/usluge#biznis-plan" },
  ],
};

export default function UslugePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <UslugeClient />
    </>
  );
}
