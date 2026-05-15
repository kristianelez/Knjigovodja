"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Calculator,
  Briefcase,
  FileText,
  Building2,
  TrendingUp,
  Laptop,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const SERVICE_PAGE_MAP: Record<string, string> = {
  "vodjenje-poslovnih-knjiga": "/knjigovodstvo",
  "obracun-plata": "/obracun-plata",
  "pdv-prijave": "/pdv-prijave",
  "osnivanje-firme": "/osnivanje-firme",
};

const allServices = [
  {
    title: "Vođenje poslovnih knjiga",
    slug: "vodjenje-poslovnih-knjiga",
    description:
      "Nudimo kompletno vođenje finansijskog i robno-materijalnog knjigovodstva za privredna društva (d.o.o.) i samostalne preduzetnike (obrte). Naš pristup osigurava da svaka transakcija bude evidentirana tačno, na vrijeme i u skladu sa važećim Zakonom o računovodstvu i reviziji FBiH, MRS-om i MSFI-jem.",
    includes: [
      "Vođenje dnevnika, glavne knjige i pomoćnih evidencija",
      "Robno-materijalno i finansijsko knjigovodstvo",
      "Evidencija osnovnih sredstava i obračun amortizacije",
      "Usklađivanje analitike i sintetike na kraju perioda",
      "Priprema i predaja finansijskih izvještaja (bilans stanja, bilans uspjeha)",
    ],
    icon: Briefcase,
    keywords: ["vođenje poslovnih knjiga Sarajevo", "finansijsko knjigovodstvo BiH"],
  },
  {
    title: "Obračun plata i naknada",
    slug: "obracun-plata",
    description:
      "Preuzimamo cjelokupan proces obračuna plata za vaše zaposlene u skladu sa Zakonom o radu FBiH i aktuelnim koeficijentima doprinosa. Ovo uključuje obračun poreza, PIO/MIO doprinosa, zdravstvenog i doprinosa za nezaposlenost, obračun bolovanja, godišnjih odmora i toplog obroka.",
    includes: [
      "Miesečni obračun bruto i neto plata",
      "Obračun poreza na dohodak i doprinosa za sve zaposlene",
      "Izrada platnih lista i specifikacija (JIOPPD obrazac)",
      "Predaja izvještaja Poreznoj upravi FBiH",
      "Savjetovanje o poreznoj optimizaciji troškova rada",
      "Obračun naknada: bolovanje, godišnji odmor, otpremnina",
    ],
    icon: Calculator,
    keywords: ["obračun plata FBiH", "plate zaposlenika BiH"],
  },
  {
    title: "Porezno savjetovanje",
    slug: "porezno-savjetovanje",
    description:
      "Zakonodavstvo u BiH se stalno mijenja. Naš tim prati sve izmjene Zakona o porezu na dohodak FBiH, Zakona o porezu na dobit FBiH i pravilnika UIO-a, te vam pruža pravovremene savjete. Pomažemo vam da iskoristite sve zakonski dozvoljene olakšice i izbjegnete nepotrebne kazne.",
    includes: [
      "Planiranje poreznih obaveza za tekuću fiskalnu godinu",
      "Savjeti o optimalnoj poslovnoj strukturi (obrt vs. d.o.o.)",
      "Porezna optimizacija troškova (reprezentacija, vozila, školovanje)",
      "Zastupanje u poreznim sporovima i tokom kontrola",
      "Savjeti o međunarodnom oporezivanju i ugovorima o izbjegavanju dvostrukog oporezivanja",
    ],
    icon: TrendingUp,
    keywords: ["porezno savjetovanje FBiH", "optimizacija poreza BiH"],
  },
  {
    title: "PDV prijave i evidencije",
    slug: "pdv-prijave",
    description:
      "Za firme u sistemu PDV-a vodimo propisane knjige ulaznih i izlaznih faktura (KUF i KIF), vršimo miesečni i tromjesečni obračun i elektronsko podnošenje PDV prijava Upravi za indirektno oporezivanje (UIO). Zastupamo vas i tokom inspekcija.",
    includes: [
      "Vođenje knjige ulaznih faktura (KUF) i izlaznih faktura (KIF)",
      "Miesečni i tromjesečni PDV obračun i elektronska prijava UIO-u",
      "Zahtjev za povrat PDV-a i praćenje statusa",
      "Savjeti o PDV registraciji — kada i kako postati PDV obveznik",
      "Zastupanje kod kontrole od strane UIO-a",
    ],
    icon: FileText,
    keywords: ["PDV prijava Sarajevo", "PDV obveznik BiH UIO"],
  },
  {
    title: "Osnivanje firme (d.o.o. i s.p.)",
    slug: "osnivanje-firme",
    description:
      "Olakšavamo vam prvi korak u poslovanju. Pružamo savjete o optimalnom pravnom obliku, pripremamo dokumentaciju i vodimo vas kroz cijeli proces registracije kod nadležnog suda i institucija. Od ideje do otvorenog žiro-računa — uz nas je to jednostavno.",
    includes: [
      "Savjeti o pravnom obliku: d.o.o., j.d.o.o. ili obrt",
      "Priprema osnivačkih akata i statuta",
      "Registracija kod Općinskog suda u Sarajevu",
      "Prijava kod Porezne uprave FBiH i UIO (JIB/PDV)",
      "Otvaranje poslovnog računa — koordinacija s bankom",
      "Prijava zaposlenika i osnivača u sistem socijalnog osiguranja",
    ],
    icon: Building2,
    keywords: ["osnivanje doo Sarajevo", "registracija firme FBiH"],
  },
  {
    title: "Finansijski izvještaji i završni račun",
    slug: "finansijski-izvjestaji",
    description:
      "Stručno izrađujemo godišnje i polugodišnje finansijske izvještaje u skladu sa Zakonom o računovodstvu FBiH. Bilans stanja, bilans uspjeha i izvještaj o novčanim tokovima daju vam jasnu sliku o zdravlju vašeg biznisa i obavezni su za predaju Agenciji za finansijsku i informatičku djelatnost (AFIP).",
    includes: [
      "Godišnji završni račun i predaja AFIP-u",
      "Bilans stanja i bilans uspjeha prema MRS-u",
      "Izvještaj o novčanim tokovima i promjenama kapitala",
      "Usaglašavanje analitike i sintetike pred zaključenje",
      "Popratna napomena uz finansijske izvještaje",
    ],
    icon: ShieldCheck,
    keywords: ["završni račun FBiH", "finansijski izvještaji AFIP"],
  },
  {
    title: "Elektronsko poslovanje i fiskalizacija",
    slug: "elektronsko-poslovanje",
    description:
      "Uvodimo vas u sistem elektronske fiskalizacije po Zakonu o fiskalnim sistemima FBiH. Pomažemo u odabiru i implementaciji fiskalne opreme, povezivanju sa e-servisima Porezne uprave i UIO, te obučavamo vaš tim za rad u savremenom digitalnom poslovnom okruženju.",
    includes: [
      "Implementacija elektronske fiskalizacije (POS uređaji)",
      "Registracija poslovnih prostora u sistemu e-Fiskalizacija",
      "Integracija s računovodstvenim softverom",
      "Elektronske fakture i e-PDV prijave",
      "Obuka zaposlenika za rad s fiskalnom opremom",
    ],
    icon: Laptop,
    keywords: ["elektronska fiskalizacija FBiH", "e-PDV Sarajevo"],
  },
  {
    title: "Biznis plan i finansijska analiza",
    slug: "biznis-plan",
    description:
      "Planirate ulaganje, tražite bankarski kredit ili razmišljate o proširenju poslovanja? Izrađujemo stručne biznis planove, analize isplativosti i projekcije novčanih tokova prilagođene zahtjevima domaćih banaka i investicionih fondova u BiH.",
    includes: [
      "Izrada biznis plana za banku ili investitore",
      "Analiza likvidnosti i rentabilnosti",
      "Projekcija novčanih tokova (cash flow) za 1–5 godina",
      "Analiza troška i prihoda za novu djelatnost",
      "Savjeti o sufinansiranju EU fondovima i Razvojnom bankom FBiH",
    ],
    icon: Users,
    keywords: ["biznis plan Sarajevo", "finansijska analiza FBiH"],
  },
];

function ServiceCard({ service }: { service: (typeof allServices)[0] }) {
  const [open, setOpen] = useState(false);
  const landingPage = SERVICE_PAGE_MAP[service.slug];

  return (
    <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
      <CardContent className="p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 shrink-0 bg-red-50 text-primary rounded-xl flex items-center justify-center">
            <service.icon className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 pt-2">{service.title}</h2>
        </div>
        <p className="text-gray-600 leading-relaxed pl-16 mb-4">{service.description}</p>

        <div className="pl-16 flex items-center gap-4 flex-wrap">
          <button
            onClick={() => setOpen((p) => !p)}
            className="flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary/80 transition-colors"
            aria-expanded={open}
          >
            {open ? "Sakrij detalje" : "Šta je uključeno"}
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
          </button>
          {landingPage && (
            <Link
              href={landingPage}
              className="flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-primary transition-colors"
            >
              Saznajte više
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>

        {open && (
          <ul className="mt-4 pl-16 space-y-2">
            {service.includes.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

export default function UslugeClient() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 pt-8">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">
            Računovodstvene usluge Sarajevo
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sveobuhvatne računovodstvene i knjigovodstvene usluge
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Pružamo potpunu finansijsku podršku vašem poslovanju u skladu s propisima FBiH i UIO-a.
            Fokusirajte se na rast — papirologiju i zakonske obaveze prepustite ENS timu.
          </p>
        </div>

        {/* Trust bar */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { number: "75+", label: "Aktivnih klijenata" },
            { number: "12+", label: "Godina iskustva" },
            { number: "100%", label: "Zakonska usklađenost" },
            { number: "4h", label: "Maks. odziv na upit" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {allServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* Paketi cijena — poziv na akciju */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-lg border border-gray-100 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Koliko košta računovodstvo u Sarajevu?</h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
              Cijena ovisi o veličini firme, broju zaposlenika, obimu prometa i vrsti djelatnosti.
              Nudimo transparentne pakete bez skrivenih troškova — od jednostavnih obrta do
              srednjih d.o.o. kompanija.
            </p>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              <strong>Zatražite besplatnu procjenu</strong> — javite nam se, reći ćemo vam
              okvirnu cijenu odmah u prvom razgovoru.
            </p>
            <Button size="lg" className="rounded-full h-14 px-8 bg-primary hover:bg-primary/90 text-white text-base font-semibold" asChild>
              <Link href="/kontakt">
                Zatražite besplatnu konsultaciju <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-12 max-w-4xl mx-auto bg-primary rounded-3xl p-10 md:p-16 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Trebate uslugu koja nije na listi?</h3>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto text-lg">
            Svaki biznis je specifičan. Kontaktirajte nas kako bismo kreirali paket usluga
            koji savršeno odgovara vašim potrebama i budžetu.
          </p>
          <Button size="lg" className="rounded-full h-14 px-8 bg-white text-primary hover:bg-gray-100 text-base font-semibold" asChild>
            <Link href="/kontakt">Kontaktirajte nas danas</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
