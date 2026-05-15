import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  FileText,
  Calendar,
  AlertCircle,
  ClipboardCheck,
  Search,
  Landmark,
  BookOpen,
  Calculator,
  Building2,
} from "lucide-react";

const SITE_URL = "https://ens.ba";

export const metadata: Metadata = {
  title: "PDV Prijave Sarajevo — Porezne Prijave FBiH | ENS d.o.o.",
  description:
    "Stručna izrada i predaja PDV prijava u Sarajevu. ENS d.o.o. priprema sve porezne prijave tačno i pravovremeno — PDV, porez na dohodak, doprinos.",
  keywords: [
    "PDV prijava Sarajevo",
    "porezne prijave FBiH",
    "PDV u BiH",
    "porez na dohodak FBiH",
    "porezni savjetnik Sarajevo",
    "UIO prijava Sarajevo",
    "ENS PDV",
  ],
  openGraph: {
    url: `${SITE_URL}/pdv-prijave`,
    type: "website",
    title: "PDV Prijave Sarajevo — Porezne Prijave FBiH | ENS d.o.o.",
    description:
      "Stručna izrada i predaja PDV i poreznih prijava u Sarajevu. ENS d.o.o. — tačno, pravovremeno, bez grešaka.",
  },
  alternates: { canonical: `${SITE_URL}/pdv-prijave` },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "PDV prijave i porezno savjetovanje — Sarajevo",
  description:
    "Izrada i predaja PDV prijava Upravi za indirektno oporezivanje (UIO), porezno savjetovanje i zastupanje pred poreznim organima za pravna i fizička lica u FBiH.",
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
  serviceType: "Tax Advisory and VAT Filing",
  url: `${SITE_URL}/pdv-prijave`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "PDV Prijave", item: `${SITE_URL}/pdv-prijave` },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ko je obavezan biti u sistemu PDV-a u BiH?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "U BiH se mora registrovati za PDV svaki poslovni subjekt čiji prihodi od oporezivog prometa u prethodnih 12 mjeseci prelaze 50.000 KM. Moguće je i dobrovoljno registrovati se za PDV i prije dostizanja tog praga.",
      },
    },
    {
      "@type": "Question",
      name: "Kada je rok za predaju PDV prijave?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PDV prijava u BiH predaje se do 10. u tekućem mjesecu za prethodni mjesec (za miesečne obveznike) ili do 20. u tekućem kvartalu za tromjesečne obveznike. ENS d.o.o. prati sve rokove i predaje prijave na vrijeme.",
      },
    },
    {
      "@type": "Question",
      name: "Šta se dešava ako se PDV prijava ne preda na vrijeme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zakašnjenje u predaji PDV prijave povlači kazne UIO koje mogu biti od 500 do 10.000 KM za pravna lica, plus zatezna kamata. ENS d.o.o. garantira da vaše prijave budu predane u zakonskom roku.",
      },
    },
    {
      "@type": "Question",
      name: "Da li obavljate i povrat PDV-a?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, pomažemo pri zahtjevu za povrat PDV-a kada je ulazni PDV veći od izlaznog. Zastupamo klijente pred UIO u svim fazama postupka povrata.",
      },
    },
    {
      "@type": "Question",
      name: "Koje porezne prijave pored PDV-a vodite?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pored PDV-a, ENS d.o.o. priprema i predaje: godišnju prijavu poreza na dobit, prijave doprinosa za zaposlenike, porez na dohodak (za obrtnike), tromjesečne i godišnje izvještaje Poreznoj upravi FBiH.",
      },
    },
  ],
};

const features = [
  {
    icon: FileText,
    title: "Izrada PDV prijava",
    desc: "Priprema i elektronska predaja PDV prijava UIO-u, svaki mjesec bez iznimke.",
  },
  {
    icon: Calendar,
    title: "Praćenje rokova",
    desc: "Nikad nismo propustili rok za predaju. Vaša firma je uvijek u skladu sa zakonom.",
  },
  {
    icon: Search,
    title: "PDV analiza i optimizacija",
    desc: "Identificiramo zakonske mogućnosti za smanjenje PDV opterećenja vašeg poslovanja.",
  },
  {
    icon: AlertCircle,
    title: "Usklađenost sa UIO",
    desc: "Pratimo izmjene Zakona o PDV-u i osiguravamo da su vaše prijave uvijek ispravne.",
  },
  {
    icon: ClipboardCheck,
    title: "Povrat PDV-a",
    desc: "Pomažemo pri zahtjevu za povrat PDV-a i zastupamo vas pred UIO u cijelom postupku.",
  },
  {
    icon: Landmark,
    title: "Sve porezne prijave",
    desc: "Porez na dobit, doprinos, porez na dohodak — sve porezne obaveze na jednom mjestu.",
  },
];

export default function PdvPrijavePage() {
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
            <span className="text-gray-900 font-medium">PDV Prijave</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-primary font-semibold tracking-wider uppercase mb-4 text-sm">
              Porezne usluge
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
              PDV prijave i porezno savjetovanje u Sarajevu
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              Tačna i pravovremena izrada svih PDV i poreznih prijava za vaše preduzeće.
              ENS d.o.o. prati zakonske izmjene i osigurava da nikad ne plaćate kazne zbog
              zakašnjenja ili grešaka.
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
              Šta uključuje naša PDV i porezna usluga?
            </h2>
            <p className="text-gray-600 text-lg">
              Kompletna porezna podrška — od PDV prijava do godišnjih poreznih izvještaja.
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

      {/* PDV Info Block */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Zašto povjeriti PDV prijave ENS d.o.o.?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Greška u PDV prijavi ili propuštanje roka može koštati vašu firmu
                od 500 do 10.000 KM kazne plus zatezna kamata. Naš tim prati sve
                izmjene zakonodavstva i garantuje bezgrešne prijave svaki put.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Nikad propušten rok u istoriji poslovanja",
                  "Iskustvo sa svim oblicima poslovnih subjekata",
                  "Zastupanje pred UIO u slučaju provjere",
                  "Optimizacija PDV opterećenja u okviru zakona",
                  "Elektronska predaja u skladu sa eUIO sistemom",
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
              Pitanja o PDV prijavama
            </h2>
            <p className="text-gray-600 text-lg">
              Odgovori na najčešća pitanja o PDV-u i poreznim obavezama u FBiH.
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

      {/* Ostale usluge — interni linkovi */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Pogledajte i ostale usluge ENS d.o.o.</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/knjigovodstvo" className="block p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group">
              <BookOpen className="h-6 w-6 text-primary mb-3" />
              <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">Knjigovodstvo</div>
              <div className="text-sm text-gray-500 mt-1">Vođenje poslovnih knjiga za obrte i d.o.o.</div>
            </Link>
            <Link href="/obracun-plata" className="block p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group">
              <Calculator className="h-6 w-6 text-primary mb-3" />
              <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">Obračun plata</div>
              <div className="text-sm text-gray-500 mt-1">Bruto/neto plate i doprinosi zaposlenika</div>
            </Link>
            <Link href="/osnivanje-firme" className="block p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group">
              <Building2 className="h-6 w-6 text-primary mb-3" />
              <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">Osnivanje firme</div>
              <div className="text-sm text-gray-500 mt-1">Registracija d.o.o. i obrta u FBiH</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Nikad više ne propustite rok za PDV
          </h2>
          <p className="text-red-100 text-lg mb-10">
            Povjerite PDV prijave ENS d.o.o. i zaboravite na stres poreznih rokova.
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
