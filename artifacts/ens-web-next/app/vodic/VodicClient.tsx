"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, Shield, Calculator, Star, Download, Phone } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  ime: z.string().min(2, { message: "Unesite ime i prezime (min. 2 karaktera)." }),
  email: z.string().email({ message: "Unesite validnu email adresu." }),
  tipFirme: z.string().min(1, { message: "Odaberite tip firme." }),
});

type FormValues = z.infer<typeof formSchema>;

const benefits = [
  {
    icon: Calendar,
    title: "Tačni rokovi za 2026.",
    desc: "Nikada više ne propustite deadline za PDV, porez na dobit ili finansijske izvještaje. Sve na jednom listu.",
  },
  {
    icon: Shield,
    title: "12 grešaka koje koštaju novac",
    desc: "Saznajte koje greške porezna uprava najčešće pronalazi — i kako ih izbjeći prije nego inspektor pokuca na vrata.",
  },
  {
    icon: Calculator,
    title: "Legalni načini za smanjenje poreza",
    desc: "Amortizacija, dubiozna potraživanja, doprinosi — koliki potencijal vaša firma ne koristi?",
  },
];

const reviews = [
  {
    text: "ENS nam je uštedjeo više od 3.000 KM samo optimizacijom amortizacije. Preporučujem svima koji žele plaćati zakonski minimum poreza.",
    author: "Amir H.",
    role: "direktor građevinske firme, Sarajevo",
  },
  {
    text: "Konačno računovođa koji odgovori na poruku istog dana. Godinama sam imala probleme s prijavama — od kad sam prešla na ENS, sve ide glatko.",
    author: "Selma K.",
    role: "vlasnica kozmetičkog salona, Zenica",
  },
  {
    text: "Prošle godine smo imali poreznu kontrolu. ENS je sve dokumentovao da smo prošli bez ijedne primjedbe. To nije slučajnost.",
    author: "Miroslav P.",
    role: "vlasnik transportne firme, Mostar",
  },
];

const stats = [
  { value: "120+", label: "zadovoljnih klijenata" },
  { value: "8 godina", label: "iskustva" },
  { value: "0 KM", label: "kazni za naše klijente u 2025." },
];

const tipFirmeOptions = [
  { value: "", label: "Odaberite tip firme..." },
  { value: "d.o.o.", label: "d.o.o." },
  { value: "obrt", label: "Obrt" },
  { value: "dioničko društvo", label: "Dioničko društvo" },
  { value: "udruženje", label: "Udruženje" },
  { value: "ostalo", label: "Ostalo" },
];

const whatYouGet = [
  "Kompletan kalendar poreznih obaveza za 2026. (PDV, porez na dobit, dohodak, FIA izvještaji)",
  "Checklist dokumenata koje trebate pripremiti",
  "5 grešaka koje najčešće dovode do poreznih kazni",
  "Šta možete, a šta ne možete odbiti kao PDV",
  "Tačne procente doprinosa na plate za 2026.",
  "Legalne strategije za smanjenje porezne osnovice",
  "Kako preživjeti poreznu kontrolu bez stresa",
];

export default function VodicClient() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { ime: "", email: "", tipFirme: "" },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("server error");
      router.push("/vodic/hvala");
    } catch {
      toast.error("Greška pri slanju forme.", {
        description: "Molimo pokušajte ponovo ili nas kontaktirajte na info@ens.ba.",
      });
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/logo.png')] bg-center bg-no-repeat bg-[length:600px]" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-6xl pt-32 pb-20 lg:pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5 text-sm text-red-300 mb-6">
                <Download className="w-4 h-4" />
                Besplatni PDF vodič
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Vodič za poreznu prijavu 2026 —{" "}
                <span className="text-red-400">12 stvari koje svaki vlasnik firme u BiH mora znati</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Izbjegnite kazne, propuštene rokove i skupljene greške. Saznajte tačno šta trebate
                pripremiti — u jednom besplatnom PDF-u.
              </p>

              {/* Benefits row */}
              <div className="grid sm:grid-cols-3 gap-4">
                {benefits.map(({ icon: Icon, title }) => (
                  <div key={title} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-red-400" />
                    </div>
                    <span>{title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-gray-900">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Preuzmite vodič odmah — besplatno</h2>
              <p className="text-sm text-gray-500 mb-6">Ispunite formu i dobijate PDF odmah.</p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="ime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Ime i prezime</FormLabel>
                        <FormControl>
                          <Input placeholder="Vaše ime i prezime" className="h-12 rounded-xl bg-gray-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Email adresa</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="vas@email.com" className="h-12 rounded-xl bg-gray-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tipFirme"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Tip firme</FormLabel>
                        <FormControl>
                          <select
                            className="flex h-12 w-full rounded-xl border border-input bg-gray-50 px-3 py-2 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            {...field}
                          >
                            {tipFirmeOptions.map((opt) => (
                              <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 text-base font-bold bg-red-600 hover:bg-red-700 text-white rounded-xl mt-2"
                  >
                    {isSubmitting ? "Šaljemo..." : "PREUZMI BESPLATNI VODIČ"}
                  </Button>

                  <p className="text-xs text-center text-gray-400 mt-2">
                    Bez spama. Vaše podatke koristimo samo za slanje vodiča i korisnih savjeta.
                    Možete se odjaviti u svakom trenutku.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit blocks */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            U vodiču ćete pronaći
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            Šta tačno dobijate u vodiču?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {whatYouGet.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-red-600" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
            Šta kažu naši klijenti
          </h2>
          <p className="text-center text-gray-500 mb-12">Google recenzije</p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {reviews.map(({ text, author, role }) => (
              <div key={author} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">&ldquo;{text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">— {author}</p>
                  <p className="text-gray-500 text-xs">{role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-center bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl md:text-4xl font-bold text-red-600 mb-1">{value}</p>
                <p className="text-gray-600 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O ENS-u */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">O ENS-u</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            <strong>ENS Knjigovodstvo d.o.o.</strong> je računovodstvena agencija s dugogodišnjim iskustvom u radu
            s preduzećima svih veličina u Bosni i Hercegovini. Specijalizovani smo za PDV, porez na dobit i
            kompletno finansijsko izvještavanje.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mt-4">
            Naš tim prati sve izmjene zakonodavstva kako biste vi mogli pratiti posao.
          </p>
        </div>
      </section>

      {/* Second CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-red-900 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Još niste sigurni?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Zakažite <strong>besplatnu 20-minutnu konsultaciju</strong> — bez obaveza, bez prodajnog pritiska.
            Samo razgovor o tome kako možemo pomoći vašoj firmi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-base transition-colors"
            >
              ZAKAŽI BESPLATNU KONSULTACIJU
            </a>
            <a
              href="tel:+38761158271"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors"
            >
              <Phone className="w-4 h-4" />
              +387 61 158 271
            </a>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <div className="py-6 bg-gray-900 text-center">
        <p className="text-gray-500 text-xs">
          ENS Knjigovodstvo d.o.o. | Vodič je informativnog karaktera i ne zamjenjuje individualni računovodstveni savjet.
        </p>
      </div>
    </div>
  );
}
