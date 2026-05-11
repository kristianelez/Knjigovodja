import type { Metadata } from "next";
import KontaktClient from "./KontaktClient";

export const metadata: Metadata = {
  title: "Kontaktirajte ENS d.o.o. — Računovodstvo Sarajevo",
  description: "Kontaktirajte ENS d.o.o. — računovodstvenu agenciju u Sarajevu. Lužansko polje 7, +387 61 158 271. Besplatna konsultacija, pon–pet 08:00–16:30.",
  keywords: ["kontakt knjigovođa sarajevo", "ENS doo kontakt", "knjigovodstvena agencija lužansko polje"],
  openGraph: {
    url: "https://ens.ba/kontakt",
    type: "website",
    title: "Kontakt - Knjigovođa Sarajevo, Lužansko polje 7",
    description: "Kontaktirajte ENS d.o.o. za knjigovodstvene usluge u Sarajevu. Adresa: Lužansko polje 7, Sarajevo. Besplatna prva konsultacija.",
  },
  alternates: { canonical: "https://ens.ba/kontakt" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "ENS d.o.o.",
  url: "https://ens.ba/kontakt",
  telephone: "+387 61 158 271",
  email: "info@ens.ba",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lužansko polje 7",
    addressLocality: "Sarajevo",
    addressCountry: "BA",
    addressRegion: "Kanton Sarajevo",
    postalCode: "71000",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:30",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+387 61 158 271",
    contactType: "customer service",
    availableLanguage: ["Bosnian", "Croatian", "Serbian"],
  },
};

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <KontaktClient />
    </>
  );
}
