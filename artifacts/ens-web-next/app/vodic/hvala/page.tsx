import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Download, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Hvala — Vaš vodič je spreman | ENS Knjigovodstvo",
  description: "Preuzmite vaš besplatni PDF vodič za poreznu prijavu 2026.",
  robots: { index: false, follow: false },
};

const downloadToken = process.env.VODIC_DOWNLOAD_TOKEN || "ens-vodic-2026";

export default function HvalaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 flex items-center justify-center px-4 py-32">
      <div className="max-w-xl w-full">
        {/* Success card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Hvala! Vaš vodič je spreman.
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Provjerite i inbox i spam folder — poslali smo vam email s linkom za preuzimanje.
            Možete preuzeti vodič odmah i putem dugmeta ispod.
          </p>

          {/* Download CTA */}
          <a
            href={`/api/lead-magnet/download?token=${downloadToken}`}
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-base transition-colors w-full mb-4"
          >
            <Download className="w-5 h-5" />
            PREUZMI VODIČ (PDF)
          </a>

          <p className="text-xs text-gray-400 mb-8">
            Vodič za poreznu prijavu 2026 — ENS Knjigovodstvo d.o.o.
          </p>

          <hr className="border-gray-100 mb-8" />

          {/* Consultation CTA */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-6">
            <h2 className="font-bold text-gray-900 mb-2">Sljedeći korak</h2>
            <p className="text-gray-600 text-sm mb-4">
              Zakažite <strong>besplatnu 20-minutnu konsultaciju</strong> i razgovarajmo o tome
              kako konkretno možemo pomoći vašoj firmi.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="flex-1 bg-gray-900 hover:bg-gray-800 text-white rounded-xl">
                <Link href="/kontakt">
                  <Calendar className="w-4 h-4 mr-2" />
                  Zakaži konsultaciju
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex-1 border-gray-200 rounded-xl"
              >
                <a href="tel:+38761158271">
                  <Phone className="w-4 h-4 mr-2" />
                  +387 61 158 271
                </a>
              </Button>
            </div>
          </div>

          <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
            ← Nazad na početnu stranicu
          </Link>
        </div>
      </div>
    </div>
  );
}
