import { generateServiceOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "PDV Prijave Sarajevo — ENS d.o.o.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateServiceOgImage(
    "PDV Prijave i Porezno Savjetovanje",
    "Stručna izrada PDV prijava u Sarajevu · ENS d.o.o."
  );
}
