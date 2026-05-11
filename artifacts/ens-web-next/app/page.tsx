import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calculator,
  Briefcase,
  FileText,
  Building2,
  TrendingUp,
  Laptop,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Računovodstvo i Knjigovodstvo Sarajevo | ENS d.o.o.",
  description:
    "ENS d.o.o. — računovodstvena agencija u Sarajevu. Vođenje knjiga, obračun plata, PDV prijave, porezno savjetovanje i osnivanje firmi. Besplatna konsultacija.",
  alternates: { canonical: "https://ens.ba" },
  openGraph: {
    url: "https://ens.ba",
    title: "Računovodstvo i Knjigovodstvo Sarajevo | ENS d.o.o.",
    description:
      "ENS d.o.o. — računovodstvena agencija u Sarajevu. Vođenje knjiga, obračun plata, PDV prijave, porezno savjetovanje i osnivanje firmi. Besplatna konsultacija.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["AccountingService", "LocalBusiness"],
  name: "ENS d.o.o.",
  alternateName: "ENS računovodstvo i consulting d.o.o.",
  url: "https://ens.ba",
  logo: "https://ens.ba/logo.png",
  image: "https://ens.ba/opengraph.jpg",
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
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.8476,
    longitude: 18.3564,
  },
  hasMap: "https://maps.google.com/?q=Lužansko+polje+7,+71000+Sarajevo",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:30",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Sarajevo" },
    { "@type": "AdministrativeArea", name: "Kanton Sarajevo" },
    { "@type": "AdministrativeArea", name: "Federacija Bosne i Hercegovine" },
  ],
  priceRange: "$$",
  currenciesAccepted: "BAM",
  paymentAccepted: "Cash, Bank Transfer",
  description:
    "Profesionalna računovodstvena i knjigovodstvena agencija u Sarajevu. Vođenje poslovnih knjiga, obračun plata, PDV, porezno savjetovanje i osnivanje firmi u FBiH.",
  sameAs: ["https://ens.ba"],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 43.8476, longitude: 18.3564 },
    geoRadius: "50000",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kolika je cijena knjigovodstvenih usluga u Sarajevu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cijena knjigovodstvenih usluga u Sarajevu zavisi od veličine firme i obima poslovanja. ENS d.o.o. nudi transparentne pakete prilagođene obrtima, d.o.o. i srednje velikim preduzećima. Kontaktirajte nas za besplatnu procjenu.",
      },
    },
    {
      "@type": "Question",
      name: "Da li nudite besplatne konsultacije?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, prva konsultacija je potpuno besplatna. Možete nas kontaktirati na +387 61 158 271 ili info@ens.ba. Uredujemo u Sarajevu na adresi Lužansko polje 7, radnim danima od 08:00 do 16:30.",
      },
    },
    {
      "@type": "Question",
      name: "Koje usluge nudi ENS d.o.o. Sarajevo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ENS d.o.o. nudi: vođenje poslovnih knjiga, obračun plata i doprinosa, PDV prijave, porezno savjetovanje, osnivanje firmi (d.o.o. i s.p.), finansijske izvještaje (završni račun) i podršku u elektronskom poslovanju i fiskalizaciji.",
      },
    },
    {
      "@type": "Question",
      name: "Da li radite sa obrtima i malim preduzećima?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, specijalizirani smo upravo za obrte, mala i srednja preduzeća u Sarajevu i Kantonu Sarajevo. Razumijemo specifičnosti malih biznisa i nudimo prilagođene usluge po povoljnim cijenama.",
      },
    },
    {
      "@type": "Question",
      name: "Kako se mogu javiti ENS d.o.o.?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Možete nas kontaktirati telefonom na +387 61 158 271, emailom na info@ens.ba, ili posjetite nas u Sarajevu na adresi Lužansko polje 7. Radno vrijeme: ponedjeljak–petak, 08:00–16:30.",
      },
    },
  ],
};

const services = [
  { title: "Vođenje poslovnih knjiga", description: "Precizno i tačno evidentiranje svih vaših poslovnih promjena u skladu sa aktuelnim zakonodavstvom.", icon: Briefcase },
  { title: "Obračun plata", description: "Brz i tačan obračun zarada, poreza i doprinosa za vaše zaposlene uz potpunu tajnost podataka.", icon: Calculator },
  { title: "Porezno savjetovanje", description: "Optimizacija poreznih obaveza i savjetovanje za zakonsko smanjenje poreznog opterećenja.", icon: TrendingUp },
  { title: "PDV prijave", description: "Redovna i pravovremena izrada i predaja PDV prijava, praćenje rokova i zastupanje pred UIO.", icon: FileText },
  { title: "Osnivanje firme", description: "Kompletna podrška pri registraciji društva sa ograničenom odgovornošću i pripremi dokumentacije.", icon: Building2 },
  { title: "Elektronsko poslovanje", description: "Uvođenje i podrška u sistemima elektronske fiskalizacije i digitalnog računovodstva.", icon: Laptop },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="ENS d.o.o. ured u Sarajevu"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold tracking-wider uppercase mb-4 text-sm md:text-base">Profesionalna agencija</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Računovodstvo i knjigovodstvo u Sarajevu
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              Pouzdano knjigovodstvo za obrte, mala i srednja preduzeća u Sarajevu.
              Vaš partner za stabilan rast, optimizaciju poreza i miran san.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full text-base h-14 px-8 bg-primary hover:bg-primary/90 text-white" asChild>
                <Link href="/kontakt">
                  Zatražite ponudu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8 border-gray-300 hover:bg-gray-50 text-gray-900" asChild>
                <Link href="/usluge">Naše usluge</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* O nama */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">O nama</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                ENS d.o.o. je renomirana računovodstvena agencija sa sjedištem u Sarajevu.
                Naša misija je pružiti preduzetnicima besprijekornu uslugu vođenja poslovnih knjiga,
                kako bi oni svoje vrijeme mogli posvetiti onome što najbolje rade – razvoju svog biznisa.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Sa stručnim timom koji konstantno prati zakonske promjene, garantujemo tačnost,
                sigurnost i potpunu tajnost podataka.
              </p>
              <ul className="space-y-3">
                {["Licencirani računovođe sa iskustvom", "Individualan pristup svakom klijentu", "Ažurnost i poštovanje rokova", "Savremeno elektronsko poslovanje"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-multiply" />
              <Image
                src="/images/hero.png"
                alt="ENS d.o.o. tim"
                fill
                className="object-cover object-left"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Usluge */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Naše usluge</h2>
            <p className="text-gray-600 text-lg">Sveobuhvatna finansijska podrška prilagođena potrebama vašeg preduzeća.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group bg-white">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-red-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="ghost" className="text-primary hover:text-primary/80 font-semibold" asChild>
              <Link href="/usluge">Sve usluge <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            {[{ number: "75+", label: "Zadovoljnih klijenata" }, { number: "100%", label: "Tačnost i preciznost" }, { number: "24/7", label: "Podrška klijentima" }].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium uppercase tracking-wide text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reference */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Naše reference</h2>
            <p className="text-gray-600 text-lg">Povjerenje se gradi godinama. Ponosni smo na saradnju sa renomiranim kompanijama.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {([
              {
                name: "Greentime",
                tag: "Agencija za čišćenje",
                logo: "/images/clients/greentime.png",
                href: "https://greentime.ba/pages/agencija-za-ciscenje-sarajevo",
                anchor: "Agencija za čišćenje Sarajevo",
                logoClass: "h-36 w-auto object-contain",
                logoWidth: 340,
              },
              {
                name: "Rotometal Alati",
                tag: "Industrija i alati",
                logo: "/images/clients/rotometal.jpg",
                href: "https://www.hoffmann-group.com/HR/hr/rotometal/hoffmann-group/locations-and-partners/rotometal/e/118618/",
                anchor: "Industrija i alati",
              },
              {
                name: "Reform",
                tag: "Građevinarstvo",
                logo: "/images/clients/reform.png",
                href: "https://www.reform.ba/",
                anchor: "Građevinarstvo",
              },
            ] as { name: string; tag: string; logo: string; href: string; anchor: string; logoClass?: string; logoWidth?: number }[]).map((client, i) => (
              <Card key={i} className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-8 flex flex-col items-center justify-center text-center min-h-[200px] gap-5">
                  <div className="h-36 flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={`${client.name} d.o.o. logo`}
                      width={client.logoWidth ?? 180}
                      height={80}
                      className={client.logoClass ?? "h-14 w-auto object-contain"}
                      style={{ maxWidth: client.logoWidth ?? 180 }}
                    />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900 tracking-tight">{client.name} d.o.o.</div>
                    <a
                      href={client.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary font-medium uppercase tracking-wider mt-1 hover:underline inline-block"
                    >
                      {client.anchor}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Često postavljana pitanja</h2>
            <p className="text-gray-600 text-lg">Odgovori na najčešća pitanja o računovodstvenim uslugama u Sarajevu.</p>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              {
                q: "Kolika je cijena knjigovodstvenih usluga u Sarajevu?",
                a: "Cijena zavisi od veličine firme i obima poslovanja. Nudimo transparentne pakete za obrte, d.o.o. i srednje firme. Kontaktirajte nas za besplatnu procjenu.",
              },
              {
                q: "Da li nudite besplatne konsultacije?",
                a: "Da — prva konsultacija je potpuno besplatna. Pozovite nas na +387 61 158 271 ili pošaljite upit na info@ens.ba.",
              },
              {
                q: "Koje usluge nudi ENS d.o.o.?",
                a: "Vođenje poslovnih knjiga, obračun plata, PDV prijave, porezno savjetovanje, osnivanje d.o.o. i obrta, finansijski izvještaji i podrška u fiskalizaciji.",
              },
              {
                q: "Da li radite sa obrtima i malim preduzećima?",
                a: "Da, specijalizirani smo upravo za obrte, mala i srednja preduzeća u Sarajevu i Kantonu Sarajevo.",
              },
            ].map(({ q, a }, i) => (
              <div key={i} className="py-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Spremni za unapređenje vašeg poslovanja?</h2>
          <p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto">
            Zakažite besplatne konsultacije i saznajte kako vam možemo pomoći da optimizirate finansije i fokusirate se na rast.
          </p>
          <Button size="lg" className="rounded-full text-base h-14 px-10 bg-white text-primary hover:bg-gray-100 border-none shadow-xl" asChild>
            <Link href="/kontakt">Kontaktirajte nas</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
