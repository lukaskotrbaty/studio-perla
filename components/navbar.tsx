"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navItems = [
  { title: "Úvod", href: "/" },
  { title: "Kadeřnictví", href: "/sluzby/kadernictvi" },
  { title: "Ceník", href: "/cenik" },
  { title: "O nás", href: "/o-nas" },
  { title: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
          : "bg-white/30 backdrop-blur-md py-5"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <h1 className="text-2xl font-playfair font-semibold tracking-tight text-perla-gold">
            Studio <span className="text-perla-textDark">Perla</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-base font-inter font-medium text-perla-textDark hover:text-perla-gold transition-colors"
                  >
                    {item.title}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href="/kontakt#rezervace"
            className="ml-4 pearl-btn"
          >
            Rezervovat
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-perla-textDark hover:text-perla-gold transition-colors focus-visible-custom"
          aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-white/95 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden pt-20`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigační menu"
      >
        <nav className="container-custom flex flex-col space-y-4 p-4" aria-label="Mobilní navigace">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block py-2 text-lg font-medium hover:text-perla-gold focus-visible-custom rounded"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <Link
            href="/kontakt#rezervace"
            className="pearl-btn text-center mt-4"
            onClick={() => setIsOpen(false)}
            aria-label="Rezervovat návštěvu"
          >
            Rezervovat
          </Link>
        </nav>
      </div>
    </nav>
  );
}