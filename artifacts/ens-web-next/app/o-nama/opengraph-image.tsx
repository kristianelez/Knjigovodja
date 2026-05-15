import { generateServiceOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "O nama — ENS d.o.o. Sarajevo";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateServiceOgImage(
    "O ENS d.o.o.",
    "Iskusna računovodstvena agencija u Sarajevu od 2012."
  );
}
