import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  ArrowRight,
  Award,
  Users,
  TrendingUp,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "O nama — ENS d.o.o. | Računovodstvena agencija Sarajevo",
  description:
    "ENS d.o.o. je iskusna računovodstvena agencija u Sarajevu. Saznajte ko smo, šta nas pokreće i zašto nam više od 75 preduzetnika u BiH vjeruje vođenje svojih finansija.",
  keywords: [
    "o nama ENS računovodstvo",
    "računovodstvena agencija Sarajevo",
    "Sedada Ejupović računovođa",
    "ENS d.o.o. Sarajevo tim",
    "iskusno knjigovodstvo FBiH",
    "pouzdano računovodstvo BiH",
  ],
  alternates: { canonical: "https://ens.ba/o-nama" },
  openGraph: {
    url: "https://ens.ba/o-nama",
    type: "website",
    title: "O nama — ENS d.o.o. | Računovodstvena agencija Sarajevo",
    description:
      "Upoznajte tim ENS d.o.o. — iskusne računovođe iz Sarajeva koji brinu o finansijama malih i srednjih preduzeća u BiH.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: "https://ens.ba" },
    { "@type": "ListItem", position: 2, name: "O nama", item: "https://ens.ba/o-nama" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sedada Ejupović",
  jobTitle: "Osnivačica i ovlaštena računovođa",
  worksFor: {
    "@type": "AccountingService",
    name: "ENS d.o.o.",
    url: "https://ens.ba",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sarajevo",
    addressCountry: "BA",
  },
};

const values = [
  {
    icon: Shield,
    title: "Povjerljivost",
    description:
      "Vaši finansijski podaci su strogo zaštićeni. Ne dijelimo informacije trećim stranama i čuvamo ih u skladu sa GDPR regulativom.",
  },
  {
    icon: CheckCircle2,
    title: "Tačnost i preciznost",
    description:
      "Svaka cifra prolazi kroz višestruku provjeru. Greška u knjigama košta vas novca i mira — mi to ne dopuštamo.",
  },
  {
    icon: TrendingUp,
    title: "Proaktivno savjetovanje",
    description:
      "Ne čekamo da se problem pojavi. Pratimo zakonske izmjene i pravovremeno vas obavještavamo o svemu što utiče na vaše poslovanje.",
  },
  {
    icon: Users,
    title: "Dostupnost",
    description:
      "Odgovaramo brzo — i na telefon i na email. Naši klijenti nikad ne čekaju danima na odgovor na hitno pitanje.",
  },
];

const milestones = [
  { year: "2019.", label: "Osnivanje ENS d.o.o.", detail: "Sedada Ejupović osniva agenciju s jasnom misijom: pružiti malim preduzećima računovodstvo dostojanstva većih firmi." },
  { year: "2020.", label: "Digitalizacija procesa", detail: "Uvođenje elektronske fiskalizacije i cloud računovodstvenih alata za brži i preciznije vođenje knjiga." },
  { year: "2022.", label: "50+ aktivnih klijenata", detail: "Organski rast temeljen isključivo na preporukama zadovoljnih klijenata — bez plaćenog marketinga." },
  { year: "2024.", label: "75+ klijenata i širenje tima", detail: "Uspješna ekspanzija na nova tržišta u Kantonu Sarajevo uz povećanje tima stručnih saradnika." },
];

export default function ONamaPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-primary transition-colors">Početna</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">O nama</span>
          </nav>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold tracking-wider uppercase mb-4 text-sm">
                Ko smo mi
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
                Vaš računovodstveni partner u Sarajevu
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                ENS d.o.o. je računovodstvena i knjigovodstvena agencija osnovana u Sarajevu
                s jedinom svrhom: da preduzetnicima u Bosni i Hercegovini oslobodi glavu od
                papirologije i zakonskih obaveza — kako bi se fokusirali na ono što vole raditi.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Više od <strong>75 firmi i obrta</strong> iz Kantona Sarajevo svakodnevno nam
                vjeruje vođenje svojih poslovnih knjiga, obračun plata, PDV prijave i
                porezno savjetovanje. Svaki od njih ima jednu tačku kontakta, brz odgovor i
                računovođu koji razumije specifičnosti njihove branše.
              </p>
              <Button size="lg" className="rounded-full h-14 px-8 bg-primary hover:bg-primary/90 text-white text-base" asChild>
                <Link href="/kontakt">
                  Kontaktirajte nas <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative w-full aspect-[3/4] max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/sedada.jpg"
                alt="Sedada Ejupović, osnivačica i ovlaštena računovođa ENS d.o.o. Sarajevo"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Naša priča */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Naša priča
          </h2>
          <div className="prose prose-gray max-w-none text-lg leading-relaxed space-y-6 text-gray-600">
            <p>
              ENS d.o.o. je osnovana <strong>2019. godine</strong> u Sarajevu, u doba kada je
              digitalizacija u bosanskohercegovačkom računovodstvu bila u povojima. Osnivačica
              <strong> Sedada Ejupović</strong>, licencirana računovođa s višegodišnjim iskustvom
              u domaćim i međunarodnim kompanijama, prepoznala je jaz između onoga što mali
              preduzetnici trebaju i onoga što su tada mogli priuštiti.
            </p>
            <p>
              Vizija je bila jednostavna: <em>pružiti maloj firmi računovodstvenu stručnost
              velikog poduzeća — bez kompromisa na kvalitetu, ali po razumnoj cijeni.</em>
            </p>
            <p>
              Za razliku od anonimnih birokratskih agencija, ENS je od prvog dana gradio
              odnose na povjerenju i dostupnosti. Svaki klijent ima direktan kontakt s
              računovođom koji poznaje specifičnosti njihovog sektora — od ugostiteljstva i
              građevinarstva do IT usluga i rent-a-car biznisa.
            </p>
            <p>
              Danas, više od jedne decenije kasnije, ENS opsluživati više od 75 aktivnih
              klijenata u Kantonu Sarajevo i Federaciji BiH. Rastemo organski — svaki novi
              klijent dolazi preporukom prethodnog. To nam je najveća nagrada i
              potvrda da radimo pravu stvar.
            </p>
          </div>
        </div>
      </section>

      {/* Vrijednosti */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Naše vrijednosti
            </h2>
            <p className="text-gray-600 text-lg">
              Računovodstvo je posao povjerenja. Evo principa koji nas vode svakog radnog dana.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 bg-red-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <v.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{v.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ključni trenuci u razvoju ENS-a
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-8 items-start relative">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm z-10 shadow-lg">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="pt-3">
                    <span className="text-primary font-bold text-sm uppercase tracking-wider">{m.year}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{m.label}</h3>
                    <p className="text-gray-600 leading-relaxed">{m.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zašto ENS — lista benefita */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Zašto 75+ preduzetnika bira ENS?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Nismo samo servis koji prima fakture i puni obrasce. Partneri smo koji razumiju
                  vaš biznis i proaktivno brinu o vašim finansijama.
                </p>
                <ul className="space-y-4">
                  {[
                    "Direktan kontakt s računovođom — bez call centra i anonimnih posrednika",
                    "Odgovor na upit u roku od 4 sata radnog vremena",
                    "Praćenje svih izmjena zakonodavstva FBiH i RS-a",
                    "Iskustvo s više od 15 različitih industrija i djelatnosti",
                    "Digitalna arhiva — uvijek dostupni vaši dokumenti online",
                    "Transparentna cijena — bez skrivenih troškova",
                    "Besplatna prva konsultacija za sve nove klijente",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary rounded-3xl p-10 text-white text-center">
                <div className="space-y-8">
                  {[
                    { number: "75+", label: "Aktivnih klijenata" },
                    { number: "12+", label: "Godina iskustva" },
                    { number: "100%", label: "Klijenata po preporuci" },
                    { number: "15+", label: "Branši i sektora" },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="text-4xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-red-200 text-sm font-medium uppercase tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BiH kontekst */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Razumijemo BiH poresko i pravno okruženje
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-600">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Federacija BiH</h3>
              <ul className="space-y-3">
                {[
                  "Zakon o porezu na dohodak FBiH i aktuelne izmjene",
                  "Zakon o računovodstvu i reviziji FBiH",
                  "PDV sistem i UIO (Uprava za indirektno oporezivanje)",
                  "Doprinos PIO/MIO, zdravstvo i nezaposlenost u FBiH",
                  "Fiskalizacija i elektronske fakture FBiH",
                  "Registracija poslovnih subjekata u FBiH",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lokalni kontekst</h3>
              <p className="mb-4">
                Sve što radimo prilagođeno je <strong>specifičnostima bosanskohercegovačkog
                pravnog sistema</strong> — dvoentitetskom ustrojstvu, valutnom odboru KM/BAM,
                te posebnostima kantonalne i entitetske administracije.
              </p>
              <p className="mb-4">
                Imate firmu u Sarajevu koja izvozi usluge ili robu? Možemo vam pomoći s
                pravilnim evidentiranjem PDV-a na međunarodne transakcije i usklađivanjem
                s propisima UIO-a.
              </p>
              <p>
                Osnivate novu firmu? Vodimo vas kroz cjelokupan proces registracije kod
                nadležnog suda, Porezne uprave FBiH i JIB/PDV registracije.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Upoznajmo se uz besplatnu konsultaciju
          </h2>
          <p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto">
            Pozovite nas, pošaljite email ili nas posjetite u Sarajevu. Razgovor ne košta ništa,
            a informacije koje dobijete mogu vam uštedjeti i novac i živce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full text-base h-14 px-10 bg-white text-primary hover:bg-gray-100 shadow-xl"
              asChild
            >
              <Link href="/kontakt">Zakažite konsultaciju</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-base h-14 px-10 border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href="/usluge">Pogledajte naše usluge</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
