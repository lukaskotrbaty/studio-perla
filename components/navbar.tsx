"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const servicesItems = [
  { title: "Kadeřnictví", href: "/sluzby/kadernictvi" },
  { title: "Kosmetika", href: "/sluzby/kosmetika" },
  { title: "Masáže", href: "/sluzby/masaze" },
  { title: "Manikúra & Nehtová Modeláž", href: "/sluzby/nehty" },
];

const navItems = [
  { title: "Úvod", href: "/" },
  { title: "Služby", href: "/sluzby", hasSubmenu: true },
  { title: "Ceník", href: "/cenik" },
  { title: "Galerie", href: "/galerie" },
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
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
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
              {navItems.map((item) =>
                item.hasSubmenu ? (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent font-inter font-medium">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-2 p-4">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-perla-champagne/50 to-perla-cream p-6 no-underline outline-none focus:shadow-md"
                            >
                              <div className="mb-2 mt-4 text-lg font-playfair font-medium">
                                Všechny služby
                              </div>
                              <p className="text-sm text-perla-textLight">
                                Kompletní nabídka našich služeb pro vaši krásu a relaxaci.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        {servicesItems.map((service) => (
                          <li key={service.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={service.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-perla-cream hover:text-perla-textDark focus:bg-perla-cream focus:text-perla-textDark"
                              >
                                <div className="text-sm font-medium">
                                  {service.title}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.title}>
                    <Link 
                      href={item.href} 
                      className="px-3 py-2 text-base font-inter font-medium text-perla-textDark hover:text-perla-gold transition-colors"
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuItem>
                )
              )}
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
          className="md:hidden text-perla-textDark hover:text-perla-gold transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden pt-20`}
      >
        <div className="container-custom flex flex-col space-y-4 p-4">
          {navItems.map((item) =>
            item.hasSubmenu ? (
              <div key={item.title} className="space-y-2">
                <button
                  onClick={(e) => {
                    e.currentTarget.nextElementSibling?.classList.toggle(
                      "hidden"
                    );
                  }}
                  className="flex w-full justify-between items-center py-2 text-lg font-medium"
                >
                  {item.title}
                  <ChevronDown size={20} />
                </button>
                <div className="hidden pl-4 space-y-2 border-l-2 border-perla-champagne">
                  <Link
                    href={item.href}
                    className="block py-2 hover:text-perla-gold"
                    onClick={() => setIsOpen(false)}
                  >
                    Všechny služby
                  </Link>
                  {servicesItems.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="block py-2 hover:text-perla-gold"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.title}
                href={item.href}
                className="block py-2 text-lg font-medium hover:text-perla-gold"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            )
          )}
          <Link
            href="/kontakt#rezervace"
            className="pearl-btn text-center mt-4"
            onClick={() => setIsOpen(false)}
          >
            Rezervovat
          </Link>
        </div>
      </div>
    </nav>
  );
}