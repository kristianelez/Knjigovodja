import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-600 py-16 border-t border-gray-200" id="kontakt">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="mb-6">
              <img
                src="/logo.png"
                alt="ENS računovodstvo i consulting d.o.o."
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-gray-500">
              Pouzdano knjigovodstvo za mala i srednja preduzeća. Vaš partner za stabilan rast i finansijsku sigurnost.
            </p>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-gray-500">Lužansko polje 7,<br />Sarajevo, Bosna i Hercegovina</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+38733123456" className="text-sm text-gray-500 hover:text-primary transition-colors">+387 33 123 456</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@ens.ba" className="text-sm text-gray-500 hover:text-primary transition-colors">info@ens.ba</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-6">Brzi linkovi</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-gray-500 hover:text-primary transition-colors">Početna</Link></li>
              <li><Link href="/usluge" className="text-sm text-gray-500 hover:text-primary transition-colors">Usluge</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-500 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/kontakt" className="text-sm text-gray-500 hover:text-primary transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-6">Radno vrijeme</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex justify-between border-b border-gray-100 pb-2">
                <span>Ponedjeljak – Petak</span>
                <span className="text-gray-900 font-medium">08:00 – 16:00</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Subota i Nedjelja</span>
                <span className="text-primary font-medium">Zatvoreno</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>&copy; {currentYear} ENS d.o.o. Sva prava zadržana.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-primary transition-colors">Uslovi korištenja</span>
            <span className="cursor-pointer hover:text-primary transition-colors">Politika privatnosti</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
