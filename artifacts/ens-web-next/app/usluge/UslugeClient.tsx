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
} from "lucide-react";

const allServices = [
  { title: "Vođenje poslovnih knjiga", description: "Nudimo kompletno vođenje finansijskog i robno-materijalnog knjigovodstva za privredna društva (d.o.o.) i samostalne preduzetnike. Naš pristup osigurava da svaka transakcija bude evidentirana tačno, na vrijeme i u skladu sa važećim međunarodnim računovodstvenim standardima (MRS) i domaćim propisima.", icon: Briefcase },
  { title: "Obračun plata i naknada", description: "Preuzimamo cjelokupan proces obračuna plata za vaše zaposlene. Ovo uključuje obračun poreza, doprinosa, bolovanja, godišnjih odmora i drugih naknada. Redovno izrađujemo i predajemo sve propisane obrasce nadležnim institucijama, garantujući potpunu tajnost podataka.", icon: Calculator },
  { title: "Porezno savjetovanje", description: "Zakonodavstvo se stalno mijenja. Naš tim prati sve izmjene i pruža vam pravovremene savjete o poreznoj optimizaciji. Pomažemo vam da iskoristite sve zakonski dozvoljene olakšice i poticaje, te da izbjegnete nepotrebne troškove i kazne.", icon: TrendingUp },
  { title: "PDV prijave i evidencije", description: "Za firme u sistemu PDV-a vodimo propisane knjige ulaznih i izlaznih faktura (KUF i KIF), te vršimo mjesečni obračun i elektronsko podnošenje PDV prijava. Zastupamo vas i prilikom kontrola od strane Uprave za indirektno oporezivanje.", icon: FileText },
  { title: "Osnivanje firme (d.o.o. / s.p.)", description: "Olakšavamo vam prvi korak u poslovanju. Pružamo savjete o optimalnom pravnom obliku organizovanja, pripremamo neophodnu dokumentaciju i vodimo vas kroz cijeli proces registracije kod nadležnih sudova i drugih institucija.", icon: Building2 },
  { title: "Elektronsko poslovanje", description: "Uvodimo vas u svijet digitalnog poslovanja. Pomažemo u implementaciji elektronske fiskalizacije, povezivanju sa e-servisima Porezne uprave i UIO, te obučavamo vaš tim za rad u savremenom poslovnom okruženju.", icon: Laptop },
  { title: "Finansijski izvještaji (Završni račun)", description: "Stručno izrađujemo godišnje i polugodišnje finansijske izvještaje (Bilans stanja, Bilans uspjeha, Izvještaj o novčanim tokovima). Ovi izvještaji vam daju jasnu sliku o zdravlju vašeg biznisa i obavezni su za predaju nadležnim agencijama.", icon: ShieldCheck },
  { title: "Konsalting i analize", description: "Treba vam kredit od banke ili planirate novu investiciju? Izrađujemo biznis planove, analize isplativosti i projektujemo novčane tokove kako biste donosili informisane i sigurne poslovne odluke.", icon: Users },
];

export default function UslugeClient() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sveobuhvatne računovodstvene usluge
          </h1>
          <p className="text-xl text-gray-600">
            Pružamo potpunu finansijsku podršku vašem poslovanju. Fokusirajte se na rast, a papirologiju i zakonske obaveze prepustite nama.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {allServices.map((service, index) => (
            <Card key={index} className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 bg-red-50 text-primary rounded-xl flex items-center justify-center">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 pt-2">{service.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed pl-16">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-primary rounded-3xl p-10 md:p-16 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Trebate uslugu koja nije na listi?</h3>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto text-lg">
            Svaki biznis je specifičan. Kontaktirajte nas kako bismo kreirali paket usluga koji savršeno odgovara vašim potrebama.
          </p>
          <Button size="lg" className="rounded-full h-14 px-8 bg-white text-primary hover:bg-gray-100 text-base font-semibold" asChild>
            <Link href="/kontakt">Zatražite besplatnu konsultaciju</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
