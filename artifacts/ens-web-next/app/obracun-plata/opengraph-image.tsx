import { generateServiceOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "Obračun Plata Sarajevo — ENS d.o.o.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateServiceOgImage(
    "Obračun Plata i Doprinosa",
    "Tačan obračun zarada za zaposlenike u FBiH · ENS d.o.o."
  );
}
