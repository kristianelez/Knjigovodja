import { generateServiceOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "Osnivanje Firme Sarajevo — ENS d.o.o.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateServiceOgImage(
    "Osnivanje Firme u FBiH",
    "Registracija d.o.o. i obrta u Sarajevu · ENS d.o.o."
  );
}
