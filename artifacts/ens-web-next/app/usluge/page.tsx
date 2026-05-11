import type { Metadata } from "next";
import UslugeClient from "./UslugeClient";

export const metadata: Metadata = {
  title: "Usluge računovodstva i knjigovodstva Sarajevo | ENS",
  description: "Kompletne računovodstvene usluge u Sarajevu: vođenje knjiga, obračun plata, PDV prijave, porezno savjetovanje, osnivanje d.o.o. i obrta u FBiH. ENS d.o.o.",
  keywords: [
    "računovodstvene usluge Sarajevo", "vođenje poslovnih knjiga Sarajevo",
    "obračun plata FBiH", "PDV prijava Sarajevo", "osnivanje doo Sarajevo",
    "porezno savjetovanje FBiH", "knjigovodstvo obrta Sarajevo",
  ],
  openGraph: {
    url: "https://ens.ba/usluge",
    type: "website",
    title: "Usluge računovodstva i knjigovodstva Sarajevo | ENS",
    description: "Kompletne računovodstvene usluge u Sarajevu: vođenje knjiga, obračun plata, PDV, osnivanje firmi. Kontaktirajte ENS d.o.o.",
  },
  alternates: { canonical: "https://ens.ba/usluge" },
};

export default function UslugePage() {
  return <UslugeClient />;
}
