import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-perla-textDark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-playfair font-semibold mb-4 text-perla-champagne">
              Studio Perla
            </h3>
            <p className="text-sm opacity-90 max-w-xs">
              Profesionální péče o vaši krásu a pohodu pod jednou střechou.
              Kadeřnictví, kosmetika, masáže a nehtové studio.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.facebook.com/studioperla1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-perla-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-perla-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4 text-perla-champagne">
              Rychlé odkazy
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-perla-champagne transition-colors"
                >
                  Úvod
                </Link>
              </li>
              <li>
                <Link
                  href="/sluzby"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-perla-champagne transition-colors"
                >
                  Služby
                </Link>
              </li>
              <li>
                <Link
                  href="/cenik"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-perla-champagne transition-colors"
                >
                  Ceník
                </Link>
              </li>
              <li>
                <Link
                  href="/galerie"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-perla-champagne transition-colors"
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  href="/o-nas"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-perla-champagne transition-colors"
                >
                  O nás
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-perla-champagne transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4 text-perla-champagne">
              Služby
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sluzby/kadernictvi"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-perla-champagne transition-colors"
                >
                  Kadeřnictví
                </Link>
              </li>
              <li>
                <Link
                  href="/sluzby/kosmetika"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-perla-champagne transition-colors"
                >
                  Kosmetika
                </Link>
              </li>
              <li>
                <Link
                  href="/sluzby/masaze"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-perla-champagne transition-colors"
                >
                  Masáže
                </Link>
              </li>
              <li>
                <Link
                  href="/sluzby/nehty"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-perla-champagne transition-colors"
                >
                  Manikúra & Nehtová Modeláž
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4 text-perla-champagne">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-perla-gold" />
                <span className="text-sm opacity-90">
                  Služská 1865/15, Praha 8 - Kobylisy, 182 00 (Anglický dvůr)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0 text-perla-gold" />
                <a
                  href="tel:+420774031001"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-perla-champagne transition-colors"
                >
                  +420 774 031 001
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0 text-perla-gold" />
                <a
                  href="mailto:studioperla@email.cz"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-perla-champagne transition-colors"
                >
                  studioperla@email.cz
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="mt-0.5 flex-shrink-0 text-perla-gold" />
                <div>
                  <p className="text-sm opacity-90">Po-Pá: 9:00 - 19:00</p>
                  <p className="text-sm opacity-90">So-Ne: Dle objednání</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm opacity-70">
          <p>
            &copy; {new Date().getFullYear()} Studio Perla. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
}