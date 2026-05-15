import { generateServiceOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "Računovodstvene Usluge Sarajevo — ENS d.o.o.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateServiceOgImage(
    "Računovodstvene Usluge",
    "Kompletna finansijska podrška za vaše preduzeće · ENS d.o.o."
  );
}
