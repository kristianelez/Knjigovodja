import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Building2,
  FileText,
  Landmark,
  ClipboardCheck,
  Clock,
  BadgeCheck,
  BookOpen,
  Calculator,
} from "lucide-react";

const SITE_URL = "https://ens.ba";

export const metadata: Metadata = {
  title: "Osnivanje Firme Sarajevo — Registracija d.o.o. | ENS d.o.o.",
  description:
    "Registracija firme u Sarajevu uz stručnu podršku. ENS d.o.o. vodi cijeli postupak osnivanja d.o.o. i obrta u FBiH — od dokumentacije do registracije.",
  keywords: [
    "osnivanje firme Sarajevo",
    "registracija doo Sarajevo",
    "osnivanje doo FBiH",
    "registracija obrta Sarajevo",
    "kako osnovati firmu Sarajevo",
    "osnivanje privrednog društva BiH",
    "ENS osnivanje firme",
  ],
  openGraph: {
    url: `${SITE_URL}/osnivanje-firme`,
    type: "website",
    title: "Osnivanje Firme Sarajevo — Registracija d.o.o. | ENS d.o.o.",
    description:
      "Registracija firme i obrta u Sarajevu uz stručnu podršku ENS d.o.o. Brzo, jednostavno i bez grešaka. Besplatna konsultacija.",
  },
  alternates: { canonical: `${SITE_URL}/osnivanje-firme` },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Osnivanje firme i registracija privrednog društva — Sarajevo",
  description:
    "Stručna podrška pri osnivanju d.o.o. i obrta u FBiH: priprema osnivačke dokumentacije, notarska ovjera, registracija u sudu, upis u Poreznu upravu i otvaranje poslovnog računa.",
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
  serviceType: "Business Registration and Formation",
  url: `${SITE_URL}/osnivanje-firme`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Osnivanje Firme", item: `${SITE_URL}/osnivanje-firme` },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koliko traje postupak osnivanja d.o.o. u FBiH?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Uz stručnu podršku, osnivanje d.o.o. u FBiH traje 7 do 14 radnih dana. Postupak uključuje pripremu osnivačkog akta, notarsku ovjeru, registraciju u Općinskom sudu, upis u PDV i upis u Poreznu upravu FBiH. ENS d.o.o. koordinira cijeli proces.",
      },
    },
    {
      "@type": "Question",
      name: "Koliki je minimalni osnovni kapital za d.o.o. u FBiH?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimalni osnovni kapital za osnivanje d.o.o. u FBiH iznosi 2.000 BAM (konvertibilnih maraka). Kapital se mora uplatiti na privremeni račun banke prije notarske ovjere osnivačkog akta.",
      },
    },
    {
      "@type": "Question",
      name: "Šta je razlika između d.o.o. i obrta u BiH?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Obrt je jednostavniji oblik poslovanja za fizička lica, pogodniji za jednočlane poduzetnike s manjim prometom. D.o.o. je pravno lice s ograničenom odgovornošću — preporučuje se za veće poslovne aktivnosti, partnerstva i planove rasta. ENS d.o.o. će vam pomoći odabrati pravi oblik.",
      },
    },
    {
      "@type": "Question",
      name: "Koje dokumente treba pripremiti za osnivanje firme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Za osnivanje d.o.o. potrebni su: važeća lična karta ili pasoš osnivača, potvrda o uplati temeljnog kapitala, odluka o osnivanju i statut (koje priprema ENS d.o.o.), te adresa sjedišta firme. Sve ostalo koordiniramo mi.",
      },
    },
    {
      "@type": "Question",
      name: "Da li pomažete i sa PDV registracijom novoosnovane firme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, osim registracije u sudu, ENS d.o.o. pomaže pri upisu u Poreznu upravu FBiH, dobivanju JIB broja (jedinstveni identifikacioni broj), PDV registraciji (ako je primjenljivo) i otvaranju poslovnog bankovnog računa.",
      },
    },
  ],
};

const steps = [
  {
    number: "01",
    title: "Konsultacija i odabir oblika",
    desc: "Razgovaramo o vašim poslovnim planovima i preporučujemo optimalan oblik — obrt ili d.o.o.",
  },
  {
    number: "02",
    title: "Priprema dokumentacije",
    desc: "Izrađujemo osnivački akt, statut i sve potrebne obrasce u skladu sa zakonodavstvom FBiH.",
  },
  {
    number: "03",
    title: "Notarska ovjera",
    desc: "Koordiniramo termin kod notara i prisustvujemo ovjeri osnivačke dokumentacije.",
  },
  {
    number: "04",
    title: "Registracija u sudu",
    desc: "Predajemo dokumentaciju Općinskom sudu u Sarajevu i pratimo status registracije.",
  },
  {
    number: "05",
    title: "Porezni upis i JIB",
    desc: "Upisujemo firmu u Poreznu upravu FBiH i pribavljamo JIB i ostale identifikacione brojeve.",
  },
  {
    number: "06",
    title: "Firma je operativna",
    desc: "Vaša firma je registrovana i spremna za poslovanje. Nudimo i nastavak saradnje kroz računovodstvo.",
  },
];

const features = [
  { icon: FileText, title: "Priprema dokumentacije", desc: "Osnivački akt, statut i svi obrasci pripremljeni ispravno iz prvog pokušaja." },
  { icon: Landmark, title: "Registracija u sudu", desc: "Predaja i praćenje registracije u Općinskom sudu u Sarajevu." },
  { icon: ClipboardCheck, title: "Porezni upis i JIB", desc: "Upis u Poreznu upravu FBiH, pribavljanje JIB-a i PDV registracija." },
  { icon: Building2, title: "Obrt i d.o.o.", desc: "Imamo iskustvo sa svim oblicima poslovnih subjekata u FBiH." },
  { icon: Clock, title: "Brz postupak", desc: "Uz naš tim, firma je registrovana za 7-14 radnih dana." },
  { icon: BadgeCheck, title: "Podrška i nakon osnivanja", desc: "Nastavljamo saradnju kroz računovodstvo, PDV i obračun plata." },
];

export default function OsnivanjeFirePage() {
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
            <span className="text-gray-900 font-medium">Osnivanje Firme</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-primary font-semibold tracking-wider uppercase mb-4 text-sm">
              Registracija i osnivanje
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Osnivanje firme i registracija d.o.o. u Sarajevu
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              Otvorite svoju firmu bez stresa i gubljenja vremena po institucijama.
              ENS d.o.o. vodi cijeli postupak registracije od A do Ž — od dokumentacije
              do aktivne firme u 7–14 radnih dana.
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

      {/* Featured Snippet — Quick Answer */}
      <section className="py-8 bg-amber-50 border-y border-amber-100">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 mb-2">Brzi odgovor</p>
          <p className="text-gray-800 leading-relaxed">
            <strong>Kako osnovati d.o.o. u FBiH?</strong> Osnivanje d.o.o. uključuje: (1) pripremu osnivačke dokumentacije kod notara, (2) registraciju u Sudskom registru (5–15 dana), (3) dobivanje JIB-a od Porezne uprave, (4) otvaranje poslovnog računa. Ukupni troškovi: 1.500–3.000 KM. ENS vam pomaže u svakom koraku.
          </p>
        </div>
      </section>

      {/* Koraci */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kako teče postupak osnivanja firme?
            </h2>
            <p className="text-gray-600 text-lg">
              Korak po korak — od ideje do aktivne firme u Sarajevu.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-5xl font-bold text-gray-100 mb-2">{step.number}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 -mt-4">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Šta dobijate sa ENS d.o.o.?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <Card key={i} className="border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group bg-white">
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

      {/* Info + CTA Card */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Šta trebate pripremiti?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Potrebna dokumentacija je minimalna — ostalo preuzimamo mi:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Važeća lična karta ili pasoš svih osnivača",
                  "Naziv i djelatnost firme (pomažemo odabrati)",
                  "Adresa sjedišta (ugovor o poslovnom prostoru)",
                  "Temeljni kapital min. 2.000 KM (za d.o.o.)",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Sve ostalo — osnivački akt, statut, notarska ovjera, sudska registracija,
                JIB, PDV upis — radimo mi umjesto vas.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Kontaktirajte nas odmah</h3>
              <div className="space-y-4">
                <a
                  href="tel:+38761158271"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white hover:bg-red-50 transition-colors group"
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
                  className="flex items-center gap-4 p-4 rounded-xl bg-white hover:bg-red-50 transition-colors group"
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pitanja o osnivanju firme
            </h2>
            <p className="text-gray-600 text-lg">
              Odgovori na najčešća pitanja o registraciji firme u BiH.
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
            <Link href="/pdv-prijave" className="block p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group">
              <FileText className="h-6 w-6 text-primary mb-3" />
              <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">PDV prijave</div>
              <div className="text-sm text-gray-500 mt-1">Izrada i predaja PDV prijava UIO</div>
            </Link>
            <Link href="/obracun-plata" className="block p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group">
              <Calculator className="h-6 w-6 text-primary mb-3" />
              <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">Obračun plata</div>
              <div className="text-sm text-gray-500 mt-1">Bruto/neto plate i doprinosi zaposlenika</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Otvorite firmu u Sarajevu bez stresa
          </h2>
          <p className="text-red-100 text-lg mb-10">
            ENS d.o.o. vodi cijeli postupak registracije umjesto vas.
            Besplatna konsultacija, bez skrivenih troškova.
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
