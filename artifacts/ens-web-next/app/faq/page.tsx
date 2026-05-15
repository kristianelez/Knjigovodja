import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Često Postavljana Pitanja o Računovodstvu u BiH | ENS d.o.o.",
  description:
    "Odgovori na najčešća pitanja o PDV-u u BiH, obračunu plata, osnivanju firme, računovodstvenim uslugama i porezima. ENS d.o.o. Sarajevo — vaš stručni vodič kroz BiH propise.",
  keywords: [
    "pitanja o PDV-u BiH",
    "kako osnovati firmu u BiH",
    "obračun plata FBiH",
    "računovodstvo FAQ",
    "PDV obveznik uvjeti BiH",
    "porez na dohodak FBiH",
    "osnivanje doo FBiH koraci",
  ],
  alternates: { canonical: "https://ens.ba/faq" },
  openGraph: {
    url: "https://ens.ba/faq",
    type: "website",
    title: "Često Postavljana Pitanja o Računovodstvu u BiH | ENS d.o.o.",
    description:
      "Odgovori na pitanja o PDV-u, platama, osnivanju firme i računovodstvenim uslugama u BiH. Stručni odgovori ENS d.o.o. tima.",
  },
};

const faqs = [
  // PDV
  {
    category: "PDV i indirektni porezi",
    items: [
      {
        q: "Ko je PDV obveznik u Bosni i Hercegovini?",
        a: "PDV obveznikom postajete kada vaš ukupni promet u prethodnih 12 kalendarskih mjeseci dostigne ili premaši 50.000 KM. Registracija se vrši kod Uprave za indirektno oporezivanje (UIO). Možete se registrovati i dobrovoljno, i prije dostizanja praga — što ima smisla ako poslujete s PDV obveznicima i imate visoke ulazne PDV-e.",
      },
      {
        q: "Kada se predaje PDV prijava i koji su rokovi?",
        a: "Porezni period je kalendarski mjesec. PDV prijava (Obrazac PDV) predaje se elektronski Upravi za indirektno oporezivanje do 10. u mjesecu za prethodni mjesec. Plaćanje utvrđene obaveze vrši se do istog datuma. Zakašnjelo podnošenje povlači kazne.",
      },
      {
        q: "Mogu li kao novi PDV obveznik odmah odbiti ulazni PDV?",
        a: "Da — od datuma PDV registracije možete odbijati ulazni PDV na fakturama za nabavke koje koristite za PDV oporezive isporuke. Postoje izuzeci: reprezentacija, osobna vozila i određene ostale nabavke ne daju pravo na odbitak ulaznog PDV-a.",
      },
      {
        q: "Šta su knjige KUF i KIF i zašto su bitne?",
        a: "KUF (Knjiga ulaznih faktura) i KIF (Knjiga izlaznih faktura) su obavezne PDV evidencije koje svaki PDV obveznik mora voditi. One su osnova za obračun PDV-a u prijavi. ENS d.o.o. vodi ove evidencije za vas i osigurava da su usklađene s pravilnicima UIO-a.",
      },
      {
        q: "Šta ako u nekom mesecu ne ostvarim promet — moram li predati PDV prijavu?",
        a: "Da — PDV prijava se predaje i u periodu nultog prometa. Predaje se 'nulta' PDV prijava. Nepredavanje povlači administrativne kazne.",
      },
    ],
  },
  // Plate
  {
    category: "Plate zaposlenika i doprinosi",
    items: [
      {
        q: "Koje su obaveze poslodavca pri isplati plata u FBiH?",
        a: "Poslodavac iz bruto plate odračunava porez na dohodak (10%) i doprinose zaposlenika (PIO/MIO 17%, zdravstvo 12,5%, nezaposlenost 1,5%). Pored toga, poslodavac plaća i doprinose na teret poslodavca (PIO/MIO 6%, zdravstvo 4%, nezaposlenost 0,5%). Sve obaveze se izvještavaju obrazcem JIOPPD.",
      },
      {
        q: "Kolika je minimalna plata u FBiH u 2025. godini?",
        a: "Minimalna bruto plata u Federaciji BiH za 2025. godinu iznosi 1.000 KM (neto cca 632 KM). Napomena: iznos se može mijenjati izmjenama propisa — uvijek provjerite aktuelnu odluku Vlade FBiH.",
      },
      {
        q: "Kako se obračunavaju troškovi prijevoza i toplog obroka?",
        a: "Naknada za prijevoz na posao i sa posla isplaćuje se prema stvarnim troškovima ili fiksnom iznosu, te je oslobođena poreza do zakonskog praga. Topli obrok se isplaćuje do iznosa propisanog kolektivnim ugovorom — gornji limit oslobođen poreza iznosi 12 KM dnevno (u 2025). Iznosi iznad praga ulaze u oporezivi dohodak.",
      },
      {
        q: "Šta je JIOPPD obrazac i zašto je važan?",
        a: "JIOPPD (Jedinstveni izvještaj o obračunatim i plaćenim doprinosima i porezima) je mesečni izvještaj koji poslodavac predaje Poreznoj upravi FBiH. U njemu se iskazuju svi podaci o zaposlenim, platama, doprinosima i porezima. Predaje se elektronski, najkasnije do dana isplate plate.",
      },
    ],
  },
  // Osnivanje firme
  {
    category: "Osnivanje firme u FBiH",
    items: [
      {
        q: "Koji je najbrži način da osnujem firmu u Sarajevu?",
        a: "Najbrži put je registracija jednolanog d.o.o. (j.d.o.o.) kod Općinskog suda u Sarajevu. Osnivački ulog za j.d.o.o. može biti simboličan (1 KM). Postupak uključuje: ovjeru potpisa, uplatu upisnih taksi, predaju dokumentacije sudu i prijavu kod Porezne uprave i UIO. Sa ENS timom cijeli proces može trajati 5–7 radnih dana.",
      },
      {
        q: "Koja je razlika između d.o.o. i samostalnog preduzetnika (obrta) u BiH?",
        a: "Obrt je jednostavniji i jeftiniji za osnivanje i vođenje, ali vlasnik odgovara cijelom svojom imovinom. D.o.o. ograničava odgovornost na uloženi kapital i pogodniji je za rast i saradnju s poslovnim partnerima. ENS može procijeniti koji oblik bolje odgovara vašoj situaciji u besplatnoj konsultaciji.",
      },
      {
        q: "Koliko košta osnivanje d.o.o. u FBiH?",
        a: "Ukupni troškovi osnivanja d.o.o. u FBiH uključuju: sudske takse (cca 200–350 KM), notarsku obradu (cca 100–200 KM), trošak objave u Sl. novinama i administrativne pristojbe. Uz uslugu ENS-a za kompletno vođenje procesa — troškovi se mogu kretati između 600 i 900 KM ovisno o konkretnom slučaju.",
      },
      {
        q: "Mogu li nerezident ili strani državljanin osnovati firmu u BiH?",
        a: "Da — strani državljani mogu osnovati firmu u BiH pod istim uslovima kao i domaći osnivači. Potrebno je pribaviti određenu dokumentaciju (prijevod i apostile) te otvoriti račun u domaćoj banci. ENS vam može pomoći u koordinaciji ovog procesa.",
      },
      {
        q: "Kada moram registrovati firmu za PDV?",
        a: "Obavezna PDV registracija nastaje kada godišnji promet dostigne 50.000 KM. Registracija se vrši podnošenjem zahtjeva UIO-u. Dobrovoljna registracija je moguća i ranije — korisna je ako nabavljate robu ili usluge od PDV obveznika i želite odbijati ulazni PDV.",
      },
    ],
  },
  // Opšte računovodstvo
  {
    category: "Opšte o računovodstvenim uslugama",
    items: [
      {
        q: "Koliko košta računovodstvo za malu firmu u Sarajevu?",
        a: "Cijena računovodstvenih usluga u Sarajevu zavisi od broja zaposlenih, obima prometa i vrste djelatnosti. Orijentaciono, osnovni paket za jednostavni obrt ili mali d.o.o. kreće se od 150 do 300 KM miesečno. Kontaktirajte nas za personalizovanu ponudu.",
      },
      {
        q: "Šta je uključeno u uslugu vođenja poslovnih knjiga?",
        a: "Standardno uključuje: knjiženje svih ulaznih i izlaznih faktura, vođenje blagajne, knjiženje bankovnih izvoda, obračun amortizacije, vođenje analitičkih evidencija i pripremu za godišnji završni račun. Svi podaci su dostupni i vama u dogovorenom roku.",
      },
      {
        q: "Kako preći od dosadašnjeg računovođe na ENS d.o.o.?",
        a: "Prijelaz je jednostavan. Vi obavijestite prethodnog računovođu, a mi preuzimamo knjige i dokumentaciju. Koordiniramo direktno s prethodnom agencijom i osiguramo kontinuitet bez zastoja. Bez stresa za vas.",
      },
      {
        q: "Da li možete raditi za firme izvan Sarajeva?",
        a: "Da — radimo s klijentima širom Federacije BiH. Svu komunikaciju i razmjenu dokumenata organizujemo elektronski, uz periodične online sastanke. Za klijente u Sarajevu i Kantonu Sarajevo dostupni smo i za direktne posjete.",
      },
      {
        q: "Trebam li računovođu ako koristim računovodstveni software?",
        a: "Softver vam pomaže da pratite izdatke i fakture, ali ne zamjenjuje stručnjaka. Greška u knjiženju, neiskorišćena porezna olakšica ili zakašnjela prijava mogu koštati više od godišnje naknade računovođe. ENS se pobrine da sve bude tačno i usklađeno s važećim propisima.",
      },
      {
        q: "Koliko dugo morate čuvati računovodstvenu dokumentaciju u BiH?",
        a: "Prema Zakonu o računovodstvu FBiH, godišnji finansijski izvještaji čuvaju se trajno, a ostala računovodstvena dokumentacija najmanje 10 godina. Platne liste i dokumentacija vezana za zaposlene čuva se trajno. ENS nudi i uslugu digitalne arhivizacije dokumentacije.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: "https://ens.ba" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://ens.ba/faq" },
  ],
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-primary transition-colors">Početna</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">FAQ</span>
          </nav>
          <div className="text-center">
            <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">
              Odgovori na vaša pitanja
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Često postavljana pitanja o računovodstvu u BiH
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Jasni odgovori na najčešća pitanja o PDV-u, platama, osnivanju firme i
              računovodstvenim uslugama u Bosni i Hercegovini. Nema žargona —
              samo korisne informacije.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">

          {/* Quick nav */}
          <div className="flex flex-wrap gap-3 mb-14 justify-center">
            {faqs.map((cat, i) => (
              <a
                key={i}
                href={`#${cat.category.toLowerCase().replace(/\s+/g, "-").replace(/[čćžšđ]/g, (c) => ({ č: "c", ć: "c", ž: "z", š: "s", đ: "d" }[c] ?? c))}`}
                className="px-4 py-2 bg-gray-100 hover:bg-red-50 hover:text-primary text-gray-700 rounded-full text-sm font-medium transition-colors"
              >
                {cat.category}
              </a>
            ))}
          </div>

          {/* FAQ blocks */}
          <div className="space-y-16">
            {faqs.map((cat, ci) => (
              <div key={ci} id={cat.category.toLowerCase().replace(/\s+/g, "-")}>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
                  {cat.category}
                </h2>
                <div className="divide-y divide-gray-100">
                  {cat.items.map((item, qi) => (
                    <div key={qi} className="py-7">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {item.q}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nije odgovoreno? */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Niste pronašli odgovor?
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Računovodstveni propisi u BiH su složeni i specifični. Naš tim je dostupan za
            besplatnu konsultaciju — pozovite nas ili pošaljite upit i odgovorićemo u roku
            od 4 sata radnog vremena.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full h-14 px-8 bg-primary hover:bg-primary/90 text-white text-base" asChild>
              <Link href="/kontakt">
                Postavite pitanje <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 border-gray-300 text-gray-900" asChild>
              <a href="tel:+38761158271">Pozovite: +387 61 158 271</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <p className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-wide">Korisne stranice</p>
          <div className="flex flex-wrap gap-4">
            {[
              { href: "/usluge", label: "Sve računovodstvene usluge" },
              { href: "/o-nama", label: "O ENS d.o.o." },
              { href: "/kontakt", label: "Kontakt i lokacija" },
              { href: "/blog", label: "Blog: savjeti za preduzetnike" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-primary font-medium hover:underline text-sm flex items-center gap-1"
              >
                {link.label} <ArrowRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
