import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  BookOpen,
  FileText,
  TrendingUp,
  Shield,
  Clock,
  Users,
  Calculator,
  Building2,
} from "lucide-react";

const SITE_URL = "https://ens.ba";

export const metadata: Metadata = {
  title: "Knjigovodstvo Sarajevo — Vođenje Poslovnih Knjiga | ENS",
  description:
    "Profesionalno knjigovodstvo u Sarajevu za obrte i d.o.o. ENS d.o.o. vodi vaše poslovne knjige tačno, na vrijeme i po zakonu FBiH. Besplatna konsultacija.",
  keywords: [
    "knjigovodstvo Sarajevo",
    "vođenje poslovnih knjiga Sarajevo",
    "knjigovođa Sarajevo",
    "računovodstvo za obrte Sarajevo",
    "računovodstvo za doo Sarajevo",
    "finansijsko računovodstvo FBiH",
    "ENS knjigovodstvo",
  ],
  openGraph: {
    url: `${SITE_URL}/knjigovodstvo`,
    type: "website",
    title: "Knjigovodstvo Sarajevo — Vođenje Poslovnih Knjiga | ENS",
    description:
      "Profesionalno knjigovodstvo u Sarajevu. ENS d.o.o. vodi vaše poslovne knjige tačno, brzo i u skladu sa zakonom. Besplatna prva konsultacija.",
  },
  alternates: { canonical: `${SITE_URL}/knjigovodstvo` },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Vođenje poslovnih knjiga — Knjigovodstvo Sarajevo",
  description:
    "Profesionalno vođenje poslovnih knjiga za obrte, d.o.o. i mala preduzeća u Sarajevu i Kantonu Sarajevo. Uključuje knjiženje prometa, evidenciju osnovnih sredstava, finansijske izvještaje i poreznu dokumentaciju.",
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
  serviceType: "Accounting and Bookkeeping",
  url: `${SITE_URL}/knjigovodstvo`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Knjigovodstvo", item: `${SITE_URL}/knjigovodstvo` },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koliko košta vođenje poslovnih knjiga u Sarajevu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cijena knjigovodstva u Sarajevu zavisi od vrste poslovnog subjekta (obrt ili d.o.o.), broja zaposlenika i obima transakcija. ENS d.o.o. nudi pakete počev od 100 KM/mj za jednostavne obrte. Kontaktirajte nas za besplatnu procjenu.",
      },
    },
    {
      "@type": "Question",
      name: "Šta uključuje usluga vođenja poslovnih knjiga?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usluga uključuje: knjiženje svih poslovnih promjena (prihodi, rashodi, imovina), evidenciju kupaca i dobavljača, obračun i prijavu PDV-a, pripremu finansijskih izvještaja (bilans stanja i uspjeha), evidenciju osnov sredstava i amortizacije, te podršku u poreznoj dokumentaciji.",
      },
    },
    {
      "@type": "Question",
      name: "Mogu li promijeniti knjigovođu usred poslovne godine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, u BiH je moguće promijeniti knjigovođu u bilo kom trenutku tokom godine. ENS d.o.o. preuzima kompletnu dokumentaciju od prethodnog knjigovođe i osigurava kontinuitet bez zastoja u poslovanju.",
      },
    },
    {
      "@type": "Question",
      name: "Radite li sa obrtima koji su u sistemu PDV-a?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, imamo iskustvo sa svim poslovnim oblicima: obrtima u sistemu PDV-a i van njega, d.o.o. kompanijama, neprofitnim organizacijama i udruženjima. Naša stručnost pokriva sve specifičnosti računovodstva u FBiH.",
      },
    },
    {
      "@type": "Question",
      name: "Da li se dokumenti mogu predavati digitalno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, podržavamo digitalno predavanje dokumentacije putem emaila, cloud servisa ili aplikacija. Naše radno mjesto je u Sarajevu na Lužanskom polju 7, ali sarađujemo sa klijentima širom Kantona Sarajevo i FBiH.",
      },
    },
  ],
};

const features = [
  {
    icon: BookOpen,
    title: "Knjiženje poslovnih promjena",
    desc: "Precizno evidentiranje svih prihoda, rashoda i transakcija u skladu sa standardima računovodstva FBiH.",
  },
  {
    icon: FileText,
    title: "Finansijski izvještaji",
    desc: "Izrada bilansa stanja, bilansa uspjeha i novčanih tokova za svaki obračunski period.",
  },
  {
    icon: TrendingUp,
    title: "Analiza poslovanja",
    desc: "Redovni izvještaji o finansijskoj situaciji firme uz komentare i preporuke za optimizaciju.",
  },
  {
    icon: Shield,
    title: "Porezna usklađenost",
    desc: "Garancija da su sve prijave predane na vrijeme i u skladu sa aktuelnim zakonodavstvom.",
  },
  {
    icon: Clock,
    title: "Poštovanje rokova",
    desc: "Nikad nismo propustili zakonski rok. Vaše prijave su uvijek predane pravovremeno.",
  },
  {
    icon: Users,
    title: "Podrška za sve veličine firmi",
    desc: "Od obrta sa jednim zaposlenikom do d.o.o. sa desetinama radnika — prilagođavamo se vama.",
  },
];

export default function KnjigovodstvoPage() {
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
            <span className="text-gray-900 font-medium">Knjigovodstvo</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-primary font-semibold tracking-wider uppercase mb-4 text-sm">
              Profesionalna usluga
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Knjigovodstvo i vođenje poslovnih knjiga u Sarajevu
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              Prepustite nam brigu o poslovnim knjigama vaše firme. ENS d.o.o. osigurava tačnost,
              zakonsku usklađenost i pravovremene prijave — dok se vi fokusirate na rast biznisa.
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
              Šta uključuje naše knjigovodstvo?
            </h2>
            <p className="text-gray-600 text-lg">
              Kompletna računovodstvena podrška prilagođena specifičnostima vašeg poslovanja.
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

      {/* Kome je namijenjeno */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Kome je namijenjeno naše knjigovodstvo?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Pružamo usluge vođenja poslovnih knjiga poslovnim subjektima svih veličina
                u Sarajevu i Kantonu Sarajevo:
              </p>
              <ul className="space-y-3">
                {[
                  "Obrtnici i samostalni poduzetnici",
                  "Društva sa ograničenom odgovornošću (d.o.o.)",
                  "Mala i srednja preduzeća",
                  "Novoosnovane firme (startupi)",
                  "Neprofitne organizacije i udruženja",
                  "Firme koje mijenjaju računovođu",
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
              Često postavljana pitanja o knjigovodstvu
            </h2>
            <p className="text-gray-600 text-lg">
              Odgovori na najčešća pitanja naših klijenata.
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
            Prepustite nam brigu o poslovnim knjigama
          </h2>
          <p className="text-red-100 text-lg mb-10">
            Zakažite besplatnu konsultaciju i dobijte ponudu prilagođenu vašoj firmi.
            Bez skrivenih troškova.
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
