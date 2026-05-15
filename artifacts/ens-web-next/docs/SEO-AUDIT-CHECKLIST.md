# ENS Blog — SEO Audit Checklist

Koristite ovu listu prije objave svakog blog članka. Svaka stavka mora biti označena kao **✅ OK** ili **❌ Popraviti** uz napomenu.

---

## 1. Meta Tagovi

| # | Provjera | Kriterij | Status |
|---|----------|----------|--------|
| 1.1 | **Meta title** | ≤ 60 znakova, sadrži primarnu ključnu riječ, ne završava s \|ENS d.o.o. ako time premaši 60 znakova | ☐ |
| 1.2 | **Meta description** | ≤ 155 znakova, sažetak koji privlači klik, sadrži CTA ("Saznajte više", "Pročitajte vodič") | ☐ |
| 1.3 | **Canonical URL** | Postavljen, u formatu `https://ens.ba/blog/[slug]` | ☐ |
| 1.4 | **Open Graph title** | Identičan ili sličan meta title | ☐ |
| 1.5 | **Open Graph description** | Identična ili slična meta description | ☐ |
| 1.6 | **Open Graph slika** | Postoji, dimenzije 1200×630px, relevantna za sadržaj | ☐ |
| 1.7 | **Twitter Card** | `summary_large_image`, slika postavljena | ☐ |
| 1.8 | **hreflang / lang** | `inLanguage: "bs-BA"` u Article schema | ☐ |

---

## 2. URL i Slug

| # | Provjera | Kriterij | Status |
|---|----------|----------|--------|
| 2.1 | **Slug format** | Samo mala slova, bez ć/š/đ/č/ž (zamijenjeni sa c/s/dj/c/z), riječi razdvojene crticom | ☐ |
| 2.2 | **Dužina sluga** | ≤ 60 znakova, sadrži primarnu ključnu riječ | ☐ |
| 2.3 | **Nema trailing slasha** | URL ne završava sa `/` | ☐ |
| 2.4 | **Nema duplikata** | Slug jedinstven u `posts-db.json` | ☐ |

**Primjeri ispravnih slugova:**
- ✅ `obracun-plata-bih-2026-vodic-za-poslodavce`
- ❌ `Obračun-plata-BiH-2026` (velika slova, dijakritici)

---

## 3. Sadržaj i On-Page SEO

| # | Provjera | Kriterij | Status |
|---|----------|----------|--------|
| 3.1 | **H1 naslovna** | Sadrži primarnu ključnu riječ, jedinstven H1 po stranici | ☐ |
| 3.2 | **H2/H3 struktura** | Logična hijerarhija, min. 3 H2 sekcije za članke > 1000 riječi | ☐ |
| 3.3 | **Primarna ključna riječ** | Pojavljuje se u prvom paragrafu (do 100 riječi) | ☐ |
| 3.4 | **Gustoća ključnih riječi** | 1-2% (nije prepunjeno), prirodno ugrađena | ☐ |
| 3.5 | **Dužina sadržaja** | Min. 800 riječi za informativne članke, 1500+ za vodiče | ☐ |
| 3.6 | **Čitljivost** | Kratki paragrafi (3-4 rečenice), bullet liste tamo gdje je smisleno | ☐ |
| 3.7 | **FAQ sekcija** | Postoji za svaki članak (min. 3 pitanja), naslovi H3 format | ☐ |

---

## 4. Schema Markup

| # | Provjera | Kriterij | Status |
|---|----------|----------|--------|
| 4.1 | **Article schema** | `@type: Article`, sadrži headline, author, publisher, datePublished, dateModified, image, mainEntityOfPage | ☐ |
| 4.2 | **Author schema** | `@type: Organization`, `name: "ENS Računovodstvo"` | ☐ |
| 4.3 | **Publisher schema** | Logo URL postoji i dostupan | ☐ |
| 4.4 | **FAQPage schema** | Automatski generisan iz FAQ sekcija u sadržaju | ☐ |
| 4.5 | **BreadcrumbList schema** | Tačna putanja: Početna > Blog > Kategorija > Naziv članka | ☐ |
| 4.6 | **Google Rich Results Test** | Prolazi validaciju bez grešaka na [search.google.com/test/rich-results](https://search.google.com/test/rich-results) | ☐ |

---

## 5. Slike

| # | Provjera | Kriterij | Status |
|---|----------|----------|--------|
| 5.1 | **Alt tekst** | Svaka slika ima opisni alt tekst koji uključuje ključnu riječ gdje je smisleno | ☐ |
| 5.2 | **Format slike** | WebP ili PNG, max 200KB za blog slike | ☐ |
| 5.3 | **Dimenzije hero slike** | 1200×630px (isti fajl za OG + hero) | ☐ |
| 5.4 | **Next/Image komponenta** | Koristi `<Image>` iz Next.js (automatski optimizira) | ☐ |

---

## 6. Interne Veze

| # | Provjera | Kriterij | Status |
|---|----------|----------|--------|
| 6.1 | **Internal linkovi rade** | Svi `<Link href="">` vodi na postojeće stranice | ☐ |
| 6.2 | **Min. 2 interna linka** | Svaki članak linka na min. 2 druge relevantne stranice | ☐ |
| 6.3 | **Anchor text** | Opisni (ne "klikni ovdje"), sadrži ključnu frazu | ☐ |
| 6.4 | **Related articles** | Prikazani članci iz iste kategorije | ☐ |

---

## 7. Tehničke Provjere

| # | Provjera | Kriterij | Status |
|---|----------|----------|--------|
| 7.1 | **Mobile-friendly** | Stranica pregledna na mobile, font ≥ 16px, dugmad ≥ 44px | ☐ |
| 7.2 | **Page speed** | LCP < 2.5s, FID < 100ms, CLS < 0.1 (Google PageSpeed Insights) | ☐ |
| 7.3 | **HTTPS** | Canonical URL koristi HTTPS | ☐ |
| 7.4 | **Sitemap** | Novi slug pojavljuje se u `/sitemap.xml` (ISR revalidate=60) | ☐ |
| 7.5 | **Robots.txt** | Nema `Disallow` koji blokira blog | ☐ |

---

## 8. Socijalno Dijeljenje

| # | Provjera | Kriterij | Status |
|---|----------|----------|--------|
| 8.1 | **WhatsApp share** | Link generiše poruku s naslovom i URL-om | ☐ |
| 8.2 | **LinkedIn share** | Otvara LinkedIn share dialog s URL-om | ☐ |
| 8.3 | **Facebook share** | Otvara Facebook share dialog s URL-om | ☐ |
| 8.4 | **OG preview** | Provjeri preview na [opengraph.xyz](https://www.opengraph.xyz) ili Facebook Sharing Debugger | ☐ |

---

## Brza Referencija — Karakterni Limiti

```
Meta title:       ≤ 60 znakova
Meta description: ≤ 155 znakova
URL slug:         ≤ 60 znakova
OG slika:         1200 × 630 px
```

---

## Alati za Provjeru

- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Google PageSpeed Insights:** https://pagespeed.web.dev
- **OG Preview:** https://www.opengraph.xyz
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
- **Schema Validator:** https://validator.schema.org

---

*Checklist verzija: 1.0 | Ažuriran: Maj 2026 | ENS d.o.o. — Content Engine kampanja*
