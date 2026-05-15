import Link from "next/link";
import { Phone } from "lucide-react";

export function BlogCta() {
  return (
    <div className="mt-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-white text-center">
      <h2 className="text-2xl font-bold mb-3">Trebate pomoć sa knjigovodstvom?</h2>
      <p className="text-white/90 mb-6 max-w-lg mx-auto">
        ENS d.o.o. nudi besplatne konsultacije. Razgovarajte s našim stručnjacima o vašem poslovanju —
        bez obaveza.
      </p>
      <Link
        href="/kontakt"
        className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
      >
        <Phone className="w-4 h-4" />
        Zakažite besplatni poziv
      </Link>
    </div>
  );
}
