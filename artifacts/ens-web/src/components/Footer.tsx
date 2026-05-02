import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300 py-16 border-t border-gray-800" id="kontakt">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                E
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                ENS d.o.o.
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-gray-400">
              Pouzdano knjigovodstvo za mala i srednja preduzeća. Vaš partner za stabilan rast i finansijsku sigurnost.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-gray-400">Lužansko polje 7,<br />Sarajevo, Bosna i Hercegovina</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+38733123456" className="text-sm text-gray-400 hover:text-white transition-colors">+387 33 123 456</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@ens.ba" className="text-sm text-gray-400 hover:text-white transition-colors">info@ens.ba</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Brzi linkovi</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-gray-400 hover:text-primary transition-colors">Početna</Link></li>
              <li><Link href="/usluge" className="text-sm text-gray-400 hover:text-primary transition-colors">Usluge</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-400 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/kontakt" className="text-sm text-gray-400 hover:text-primary transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Radno vrijeme</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Ponedjeljak – Petak</span>
                <span className="text-white">08:00 – 16:00</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Subota i Nedjelja</span>
                <span className="text-primary">Zatvoreno</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} ENS d.o.o. Sva prava zadržana.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white transition-colors">Uslovi korištenja</span>
            <span className="cursor-pointer hover:text-white transition-colors">Politika privatnosti</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
