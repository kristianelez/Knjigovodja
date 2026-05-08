import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Početna", path: "/" },
    { name: "Usluge", path: "/usluge" },
    { name: "Blog", path: "/blog" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${
        scrolled ? "shadow-sm py-3" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <img
            src="/logo.png"
            alt="ENS računovodstvo i consulting d.o.o."
            className="h-12 w-auto object-contain group-hover:opacity-90 transition-opacity"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.path ? "text-primary" : "text-gray-700"
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
            <SheetContent side="right" className="bg-white flex flex-col pt-16">
              <nav className="flex flex-col gap-6 text-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium ${
                      location === link.path ? "text-primary" : "text-gray-800"
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
