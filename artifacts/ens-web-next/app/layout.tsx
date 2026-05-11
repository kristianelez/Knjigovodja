import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--app-font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#c0392b",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ens.ba"),
  title: {
    default: "Računovodstvo Sarajevo | ENS d.o.o. — Knjigovodstvo",
    template: "%s | ENS d.o.o.",
  },
  description: "Profesionalna knjigovodstvena agencija u Sarajevu. Vođenje poslovnih knjiga, obračun plata, PDV, porezno savjetovanje i osnivanje firmi u FBiH.",
  keywords: [
    "knjigovođa Sarajevo", "računovodstvo Sarajevo", "knjigovodstvo Sarajevo",
    "računovodstvena agencija Sarajevo", "porezno savjetovanje Sarajevo",
    "obračun plata FBiH", "PDV prijava Sarajevo", "osnivanje firme Sarajevo",
    "ENS doo Sarajevo", "Lužansko polje Sarajevo",
  ],
  openGraph: {
    siteName: "ENS d.o.o.",
    locale: "bs_BA",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "ENS d.o.o. - Knjigovodstvena agencija Sarajevo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knjigovođa Sarajevo - ENS d.o.o.",
    description: "Profesionalna knjigovodstvena agencija u Sarajevu. Vođenje poslovnih knjiga, obračun plata, PDV, porezno savjetovanje.",
    images: ["/opengraph.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large" } },
  other: {
    "geo.region": "BA-BIH",
    "geo.placename": "Sarajevo, Kanton Sarajevo",
    "geo.position": "43.8476;18.3564",
    "ICBM": "43.8476, 18.3564",
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    apple: { url: "/logo.png", type: "image/png" },
    shortcut: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bs" className={inter.variable}>
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
