import { generateServiceOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "Knjigovodstvo Sarajevo — ENS d.o.o.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateServiceOgImage(
    "Vođenje Poslovnih Knjiga",
    "Profesionalno knjigovodstvo u Sarajevu · ENS d.o.o."
  );
}
