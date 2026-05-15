import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Calculator,
  Shield,
  Clock,
  Users,
  FileText,
  Lock,
} from "lucide-react";

const SITE_URL = "https://ens.ba";

export const metadata: Metadata = {
  title: "Obračun Plata Sarajevo — Platni Promet FBiH | ENS d.o.o.",
  description:
    "Tačan obračun plata, poreza i doprinosa za zaposlenike u Sarajevu. ENS d.o.o. osigurava ispravne isplate i zakonsku usklađenost za sve poslovne subjekte u FBiH.",
  keywords: [
    "obračun plata Sarajevo",
    "platni promet FBiH",
    "plate zaposlenika BiH",
    "doprinosi za zaposlenike FBiH",
    "porez na plaću BiH",
    "obračun zarade Sarajevo",
    "ENS obračun plata",
  ],
  openGraph: {
    url: `${SITE_URL}/obracun-plata`,
    type: "website",
    title: "Obračun Plata Sarajevo — Platni Promet FBiH | ENS d.o.o.",
    description:
      "Tačan obračun plata i doprinosa za zaposlenike u FBiH. ENS d.o.o. — ispravne isplate, zakonska usklađenost, potpuna diskrecija.",
  },
  alternates: { canonical: `${SITE_URL}/obracun-plata` },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Obračun plata i platni promet — Sarajevo FBiH",
  description:
    "Profesionalni obračun bruto i neto plata, poreza na dohodak i doprinosa za zaposlenike, priprema platnih lista i uplata na račune zaposlenika u skladu sa zakonodavstvom FBiH.",
  provider: {
    "@type": "AccountingService",
    name: "ENS d.o.o.",
    url: SITE_URL,
    telephone: "+387 61 158 271",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lužansko polje 7",
      addressLocality: "Sarajevo",
      addressCountry: "BA",
      postalCode: "71000",
    },
  },
  areaServed: [
    { "@type": "City", name: "Sarajevo" },
    { "@type": "AdministrativeArea", name: "Kanton Sarajevo" },
    { "@type": "AdministrativeArea", name: "Federacija Bosne i Hercegovine" },
  ],
  serviceType: "Payroll Processing",
  url: `${SITE_URL}/obracun-plata`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Obračun Plata", item: `${SITE_URL}/obracun-plata` },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koje su stope doprinosa za zaposlenike u FBiH 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "U FBiH 2026. doprinosi na teret zaposlenika iznose 31% (PIO 17%, zdravstvo 12,5%, nezaposlenost 1,5%), a doprinosi na teret poslodavca 10,5% (PIO 6%, zdravstvo 4%, nezaposlenost 0,5%). ENS d.o.o. prati sve izmjene stopa i primjenjuje ih automatski.",
      },
    },
    {
      "@type": "Question",
      name: "Šta uključuje obračun plate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Obračun plate uključuje: izračun bruto plate, odbitak poreza na dohodak i svih doprinosa (PIO, zdravstvo, nezaposlenost), pripremu platne liste za svakog zaposlenika, uplatu na bankovne račune zaposlenika, te pripremu izvještaja za Poreznu upravu FBiH.",
      },
    },
    {
      "@type": "Question",
      name: "Kada je rok za isplatu plaće u BiH?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prema Zakonu o radu FBiH, plata mora biti isplaćena najkasnije do 30. u tekućem mjesecu za prethodni mjesec. ENS d.o.o. priprema sve obračune unaprijed kako bi isplate uvijek bile na vrijeme.",
      },
    },
    {
      "@type": "Question",
      name: "Čuvate li povjerljive podatke zaposlenika?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, podaci o platama zaposlenika su strogo povjerljivi. ENS d.o.o. poštuje propise o zaštiti ličnih podataka (GDPR i lokalne regulative) i garantira potpunu diskreciju u rukovanju platnim informacijama.",
      },
    },
    {
      "@type": "Question",
      name: "Radite li sa firmama koje imaju sezonske radnike?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, imamo iskustvo sa firmama koje imaju promjenljivi broj zaposlenika, uključujući sezonske radnike, radnike na određeno i neodređeno, part-time i ugovore o djelu. Prilagođavamo se specifičnostima vašeg poslovanja.",
      },
    },
  ],
};

const features = [
  {
    icon: Calculator,
    title: "Obračun bruto/neto plate",
    desc: "Precizni izračun plate, poreza na dohodak i svih doprinosa za svakog zaposlenika.",
  },
  {
    icon: FileText,
    title: "Platne liste",
    desc: "Priprema individualnih platnih listi za svakog zaposlenika u zakonskom formatu.",
  },
  {
    icon: Clock,
    title: "Pravovremene isplate",
    desc: "Obračuni su gotovi uvijek prije zakonskog roka, bez kašnjenja i stresa.",
  },
  {
    icon: Shield,
    title: "Zakonska usklađenost",
    desc: "Pratimo sve izmjene stopa doprinosa i poreznih propisa FBiH automatski.",
  },
  {
    icon: Lock,
    title: "Potpuna diskrecija",
    desc: "Podaci o platama su strogo povjerljivi i zaštićeni u skladu sa GDPR standardima.",
  },
  {
    icon: Users,
    title: "Svi oblici ugovora",
    desc: "Ugovori o radu, ugovori o djelu, honorari — sve vrste radnih angažmana.",
  },
];

export default function ObracunPlataPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Početna</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Obračun Plata</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-primary font-semibold tracking-wider uppercase mb-4 text-sm">
              Platni promet
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Obračun plata i platni promet za firme u Sarajevu
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              Tačan, pravovremen i diskretan obračun plata za vaše zaposlenike.
              ENS d.o.o. preuzima brigu o cijelom platnom procesu — od obračuna do
              isplate i poreznih izvještaja.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-full text-base h-14 px-8 bg-primary hover:bg-primary/90 text-white"
                asChild
              >
                <Link href="/kontakt">
                  Besplatna konsultacija
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-base h-14 px-8 border-gray-300"
                asChild
              >
                <a href="tel:+38761158271">
                  <Phone className="mr-2 h-5 w-5" />
                  +387 61 158 271
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Šta uključuje obračun plata?
            </h2>
            <p className="text-gray-600 text-lg">
              Kompletan platni promet od obračuna do isplate i poreznih prijava.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <Card key={i} className="border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-red-50 text-primary rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prednosti */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Zašto prepustiti obračun plata ENS d.o.o.?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Pogrešan obračun doprinosa ili zakasnjela isplata mogu koštati vašu
                firmu kazni i loše volje zaposlenika. Naš tim poznaje svaku detalj
                zakona o radu i poreznim propisima FBiH.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Automatsko praćenje izmjena stopa doprinosa",
                  "Elektronska prijava u Poreznu upravu FBiH",
                  "Isplatne liste za sve zaposlenike",
                  "Iskustvo sa firmama od 1 do 100+ zaposlenika",
                  "Podrška pri inspekcijama radne i porezne inspekcije",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Kontaktirajte nas odmah</h3>
              <div className="space-y-4">
                <a
                  href="tel:+38761158271"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-red-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Pozovite nas</p>
                    <p className="font-semibold text-gray-900">+387 61 158 271</p>
                  </div>
                </a>
                <a
                  href="mailto:info@ens.ba"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-red-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Pošaljite upit</p>
                    <p className="font-semibold text-gray-900">info@ens.ba</p>
                  </div>
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 text-sm text-gray-500">
                <p>Radno vrijeme: pon–pet, 08:00–16:30</p>
                <p className="mt-1">Lužansko polje 7, 71000 Sarajevo</p>
              </div>
              <Button className="w-full mt-6 rounded-full bg-primary hover:bg-primary/90 text-white" asChild>
                <Link href="/kontakt">Pošaljite upit putem forme</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pitanja o obračunu plata
            </h2>
            <p className="text-gray-600 text-lg">
              Odgovori na najčešća pitanja o platama i doprinosima u FBiH.
            </p>
          </div>
          <div className="divide-y divide-gray-100">
            {faqJsonLd.mainEntity.map((item, i) => (
              <div key={i} className="py-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Vaši zaposlenici zaslužuju tačnu isplatu na vrijeme
          </h2>
          <p className="text-red-100 text-lg mb-10">
            Prepustite obračun plata ENS d.o.o. i fokusirajte se na rast svog tima.
            Besplatna prva konsultacija.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full text-base h-14 px-10 bg-white text-primary hover:bg-gray-100"
              asChild
            >
              <Link href="/kontakt">Zatražite ponudu</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-base h-14 px-10 border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="tel:+38761158271">
                <Phone className="mr-2 h-5 w-5" />
                Pozovite odmah
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
