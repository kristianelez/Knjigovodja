import { generateServiceOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "FAQ: Računovodstvo i PDV u BiH — ENS d.o.o.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateServiceOgImage(
    "Pitanja o Računovodstvu u BiH",
    "Stručni odgovori o PDV-u, platama i osnivanju firme · ENS d.o.o."
  );
}
