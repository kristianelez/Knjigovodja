import { Link } from "wouter";
import { motion } from "framer-motion";
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
  ArrowRight
} from "lucide-react";
import heroImg from "@/assets/images/hero.png";

const services = [
  {
    title: "Vođenje poslovnih knjiga",
    description: "Precizno i tačno evidentiranje svih vaših poslovnih promjena u skladu sa aktuelnim zakonodavstvom.",
    icon: Briefcase
  },
  {
    title: "Obračun plata",
    description: "Brz i tačan obračun zarada, poreza i doprinosa za vaše zaposlene uz potpunu tajnost podataka.",
    icon: Calculator
  },
  {
    title: "Porezno savjetovanje",
    description: "Optimizacija poreznih obaveza i savjetovanje za zakonsko smanjenje poreznog opterećenja.",
    icon: TrendingUp
  },
  {
    title: "PDV prijave",
    description: "Redovna i pravovremena izrada i predaja PDV prijava, praćenje rokova i zastupanje pred UIO.",
    icon: FileText
  },
  {
    title: "Osnivanje firme",
    description: "Kompletna podrška pri registraciji društva sa ograničenom odgovornošću i pripremi dokumentacije.",
    icon: Building2
  },
  {
    title: "Elektronsko poslovanje",
    description: "Uvođenje i podrška u sistemima elektronske fiskalizacije i digitalnog računovodstva.",
    icon: Laptop
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="ENS d.o.o. ured" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-primary font-semibold tracking-wider uppercase mb-4 text-sm md:text-base">Profesionalna agencija</h2>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
                Knjigovodja sarajevo
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                Pouzdano knjigovodstvo za mala i srednja preduzeća u Sarajevu. 
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">O nama</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                ENS d.o.o. je renomirana računovodstvena agencija sa sjedištem u Sarajevu. 
                Naša misija je pružiti preduzetnicima besprijekornu uslugu vođenja poslovnih knjiga, 
                kako bi oni svoje vrijeme mogli posvetiti onome što najbolje rade – razvoju svog biznisa.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Sa stručnim timom koji konstantno prati zakonske promjene, garantujemo tačnost, 
                sigurnost i potpunu tajnost podataka. Bilo da tek osnivate firmu ili tražite boljeg 
                partnera za svoje finansije, mi smo tu za vas.
              </p>
              <ul className="space-y-3">
                {[
                  "Licencirani računovođe sa iskustvom",
                  "Individualan pristup svakom klijentu",
                  "Ažurnost i poštovanje rokova",
                  "Savremeno elektronsko poslovanje"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-multiply"></div>
              <img 
                src={heroImg} 
                alt="ENS d.o.o. tim" 
                className="w-full h-full object-cover object-left"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Naše usluge</h2>
            <p className="text-gray-600 text-lg">
              Sveobuhvatna finansijska podrška prilagođena potrebama vašeg preduzeća.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group bg-white">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-red-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="ghost" className="text-primary hover:text-primary/80 font-semibold" asChild>
              <Link href="/usluge">
                Sve usluge <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { number: "15+", label: "Godina iskustva" },
              { number: "350+", label: "Zadovoljnih klijenata" },
              { number: "100%", label: "Tačnost i preciznost" },
              { number: "24/7", label: "Podrška klijentima" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium uppercase tracking-wide text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Šta kažu naši klijenti</h2>
            <p className="text-gray-600 text-lg">
              Povjerenje se gradi godinama. Ponosni smo na dugoročne saradnje sa našim klijentima.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Od kako smo prepustili računovodstvo ENS-u, poslovanje nam je znatno olakšano. Uvijek su dostupni za savjet i nikada ne kasne sa prijavama.",
                author: "Mirza K.",
                company: "IT Solutions d.o.o."
              },
              {
                text: "Stručnost i profesionalnost na najvišem nivou. Posebno cijenim njihov proaktivan pristup kod poreznog savjetovanja.",
                author: "Amina S.",
                company: "Design Studio"
              },
              {
                text: "Najbolja odluka koju smo donijeli pri osnivanju firme je angažovanje agencije ENS. Vode nas kroz sve zakonske procedure bez stresa.",
                author: "Kenan H.",
                company: "Logistika d.o.o."
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-md bg-white">
                  <CardContent className="p-8 relative">
                    <div className="text-6xl text-gray-200 absolute top-4 right-6 font-serif leading-none">"</div>
                    <p className="text-gray-700 leading-relaxed mb-6 relative z-10 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
