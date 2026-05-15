"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect, useRef } from "react";

const serviceLinks = [
  { name: "Sve usluge", path: "/usluge" },
  { name: "Knjigovodstvo", path: "/knjigovodstvo" },
  { name: "PDV prijave", path: "/pdv-prijave" },
  { name: "Obračun plata", path: "/obracun-plata" },
  { name: "Osnivanje firme", path: "/osnivanje-firme" },
];

const navLinks = [
  { name: "Početna", path: "/" },
  { name: "O nama", path: "/o-nama" },
  { name: "Blog", path: "/blog" },
  { name: "Kontakt", path: "/kontakt" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isServiceActive = serviceLinks.some((l) => pathname === l.path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${
        scrolled ? "shadow-sm py-3" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="ENS računovodstvo i consulting d.o.o."
            width={180}
            height={48}
            className="h-12 w-auto object-contain group-hover:opacity-90 transition-opacity"
            style={{ width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/" ? "text-primary" : "text-gray-700"
            }`}
          >
            Početna
          </Link>

          {/* Usluge dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen((o) => !o)}
              onMouseEnter={() => setServicesOpen(true)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                isServiceActive ? "text-primary" : "text-gray-700"
              }`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Usluge
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                onMouseLeave={() => setServicesOpen(false)}
              >
                {serviceLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setServicesOpen(false)}
                    className={`block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-red-50 hover:text-primary ${
                      pathname === link.path ? "text-primary bg-red-50" : "text-gray-700"
                    } ${link.path === "/usluge" ? "border-b border-gray-100 mb-1" : ""}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.path ? "text-primary" : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Button asChild className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white font-medium border-none">
            <Link href="/kontakt">Zatražite ponudu</Link>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-900">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Otvori meni</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white flex flex-col pt-16 overflow-y-auto">
              <nav className="flex flex-col gap-1">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium py-3 text-center ${
                    pathname === "/" ? "text-primary" : "text-gray-800"
                  }`}
                >
                  Početna
                </Link>

                {/* Mobile: Usluge section */}
                <div className="py-3 text-center">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                    Usluge
                  </p>
                  <div className="flex flex-col gap-2">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.path}
                        href={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-base py-1.5 font-medium transition-colors ${
                          pathname === link.path ? "text-primary" : "text-gray-700"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium py-3 text-center ${
                      pathname === link.path ? "text-primary" : "text-gray-800"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="mt-4">
                  <Button asChild className="rounded-full w-full bg-primary hover:bg-primary/90 text-white">
                    <Link href="/kontakt" onClick={() => setIsOpen(false)}>
                      Zatražite ponudu
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
