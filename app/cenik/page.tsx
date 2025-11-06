import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Info } from "lucide-react";

export const metadata = {
  title: "Ceník | Studio Perla",
  description: "Kompletní ceník kadeřnických služeb v Praze 8 - Kobylisy. Střihy, barvení, styling a speciální ošetření.",
};

const priceList = [
  { service: "Dámský střih včetně mytí a stylingu", price: "450 - 600 Kč" },
  { service: "Pánský střih", price: "250 - 350 Kč" },
  { service: "Dětský střih (do 10 let)", price: "200 - 300 Kč" },
  { service: "Mytí, foukaná, styling", price: "300 - 500 Kč" },
  { service: "Barvení - krátké vlasy", price: "800 - 1000 Kč" },
  { service: "Barvení - středně dlouhé vlasy", price: "1000 - 1300 Kč" },
  { service: "Barvení - dlouhé vlasy", price: "1300 - 1800 Kč" },
  { service: "Melír - krátké vlasy", price: "900 - 1200 Kč" },
  { service: "Melír - středně dlouhé vlasy", price: "1200 - 1500 Kč" },
  { service: "Melír - dlouhé vlasy", price: "1500 - 2000 Kč" },
  { service: "Společenský účes", price: "od 800 Kč" },
  { service: "Svatební účes", price: "od 1500 Kč" },
  { service: "Keratin Smooth - krátké vlasy", price: "2000 Kč" },
  { service: "Keratin Smooth - středně dlouhé vlasy", price: "2500 Kč" },
  { service: "Keratin Smooth - dlouhé vlasy", price: "3000 Kč" },
  { service: "Regenerační kúra", price: "250 - 500 Kč" },
];

export default function PriceListPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-perla-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-perla-textDark mb-6">
              Ceník
            </h1>
            <p className="text-lg text-perla-textLight">
              Kompletní přehled cen kadeřnických služeb. Pro aktuální akce a slevy sledujte náš
              Facebook nebo nás kontaktujte telefonicky.
            </p>
          </div>
        </div>
      </section>

      {/* Price List */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-perla-champagne/20">
            <div className="bg-perla-cream/30 p-4 rounded-md mb-8 flex items-start gap-3">
              <Info className="h-5 w-5 text-perla-gold flex-shrink-0 mt-0.5" />
              <p className="text-sm text-perla-textLight">
                Uvedené ceny jsou orientační a mohou se lišit v závislosti na délce, hustotě vlasů, použitém materiálu a času potřebném k provedení služby. Přesnou cenu vám rádi sdělíme při konzultaci.
              </p>
            </div>
            
            <h2 className="section-subtitle mb-8">
              <span className="relative z-10">Kadeřnické služby</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-perla-champagne/30 -z-10"></span>
            </h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-3/4">Služba</TableHead>
                  <TableHead className="text-right">Cena</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {priceList.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.service}</TableCell>
                    <TableCell className="text-right font-medium whitespace-nowrap">{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-8 text-center">
              <Link href="/sluzby/kadernictvi">
                <Button variant="outline" className="border-perla-gold text-perla-gold hover:bg-perla-gold hover:text-white">
                  Více o kadeřnických službách
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-perla-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">Chcete si rezervovat termín?</h2>
            <p className="text-perla-textLight mb-8">
              Zavolejte nám na číslo +420 774 031 001 a rádi s vámi probereme detaily.
            </p>
            <Link href="/kontakt#rezervace">
              <Button className="pearl-btn">Rezervovat termín</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}