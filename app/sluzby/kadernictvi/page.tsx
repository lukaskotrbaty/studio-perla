import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Star, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Kadeřnictví | Studio Perla",
  description: "Profesionální kadeřnické služby v Praze 8 - střihy, barvení, stylingu, pečující procedury a moderní techniky.",
};

const prices = [
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
];

export default function HaircareServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-perla-cream relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-64 h-64 rounded-full bg-perla-pink/10 filter blur-3xl"></div>
        <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-perla-champagne/30 filter blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-perla-textDark mb-6">
                Kadeřnictví
              </h1>
              <p className="text-lg text-perla-textLight mb-8">
                Naše kadeřnice jsou specialistky na moderní techniky střihu, barvení a stylingu. 
                Atť potřebujete nový účes, barvu nebo jen ozdravit vaše vlasy, jsme tu pro vás. 
                Vše s důrazem na zdraví vašich vlasů a s použitím kvalitních produktu značek Matrix a BES.
              </p>
              <Link href="/kontakt#rezervace">
                <Button className="pearl-btn">Rezervovat návštěvu</Button>
              </Link>
            </div>
            
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/_vNbi6vcCTSxlFgUqWeGr/tmpsroarh76.webp"
                alt="Kadeřnictví Studio Perla"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">
            <span className="relative z-10">Naše kadeřnické služby</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-perla-champagne/30 -z-10"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 mb-12">
            <div className="flex items-start">
              <div className="bg-perla-champagne/30 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-6">
                <Scissors className="text-perla-gold h-7 w-7" />
              </div>
              <div>
                <h3 className="section-subtitle mb-4">Dámské střihy a styling</h3>
                <p className="text-perla-textLight mb-4">
                  Profesionální dámské střihy včetně konzultace, mytí, střihu a finálního stylingu. 
                  Každý účes je navržen individuálně podle typu obličeje, struktury vlasů a vašeho životního stylu.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-perla-gold mr-2" />
                    <span>Konzultace zdarma</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-perla-gold mr-2" />
                    <span>Mytí vlasů s masáží hlavy</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-perla-gold mr-2" />
                    <span>Přesný střih dle vašich požadavků</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-perla-gold mr-2" />
                    <span>Finální styling a úprava</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-perla-champagne/30 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-6">
                <Star className="text-perla-gold h-7 w-7" />
              </div>
              <div>
                <h3 className="section-subtitle mb-4">Barvení a koloristika</h3>
                <p className="text-perla-textLight mb-4">
                  Od klasického barvení po speciální techniky jako je balayage, ombré, AirTouch nebo melkování. 
                  Používáme pouze kvalitní barvy, které pečují o vaše vlasy a zajišťují dlouhotrvající výsledek.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-perla-gold mr-2" />
                    <span>Moderní techniky barvení</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-perla-gold mr-2" />
                    <span>Kvalitní barvy šetrné k vlasům</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-perla-gold mr-2" />
                    <span>Oživení a obnovení odstní</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-perla-gold mr-2" />
                    <span>Po barvení ošetření pro maximální trvanlivost</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-perla-champagne/30 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-6">
                <img 
                  src="https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/ABvM1hXTN4s9V_yvJ1yr_/tmp0su9woih.webp" 
                  alt="Studio Perla Logo" 
                  className="h-9 w-9 object-contain"
                />
              </div>
              <div>
                <h3 className="section-subtitle mb-4">Regenerační ošetření</h3>
                <p className="text-perla-textLight mb-4">
                  Speciální ošetření pro zpevnění, hydrataci a výživu vlasů. Ideální pro poškozené, suché nebo barvené vlasy. 
                  Výsledkem je zdravý vzhled, lesk a snadnejší úprava vlasů.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-perla-gold mr-2" />
                    <span>Keratin Smooth ošetření</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-perla-gold mr-2" />
                    <span>Hydrtační kúry</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-perla-gold mr-2" />
                    <span>Výživné a restaurační zábaly</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-perla-gold mr-2" />
                    <span>Ošetření konečků</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-perla-champagne/30 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-perla-gold h-7 w-7">
                  <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1" />
                  <path d="M17 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
                  <path d="M12 12v9" />
                  <path d="m8 16 4-4 4 4" />
                </svg>
              </div>
              <div>
                <h3 className="section-subtitle mb-4">Společenské a svatební účesy</h3>
                <p className="text-perla-textLight mb-4">
                  Speciální účesy pro výjimečné příležitosti jako jsou svatby, plesy, večírky nebo jiné společenské události. 
                  Možnost zkušebního účesu pro vaši jistotu v den D.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-perla-gold mr-2" />
                    <span>Svatební účesy</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-perla-gold mr-2" />
                    <span>Večerní a plesové účesy</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-perla-gold mr-2" />
                    <span>Účesy pro druačky a svatební hosty</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-perla-gold mr-2" />
                    <span>Ozdoby do vlasů dle výběru</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-perla-textLight italic mb-6">
              "Naším cílem je, abyste odcházeli nejen s krásným účesem, ale také s úsmněvem a dobrou náladou."
            </p>
            <Link href="/kontakt#rezervace">
              <Button className="pearl-btn">Rezervovat návštěvu</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Price List */}
      <section className="py-16 bg-perla-cream">
        <div className="container-custom max-w-3xl">
          <h2 className="section-title text-center mb-12">
            <span className="relative z-10">Ceník kadeřnických služeb</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-perla-pink/40 -z-10"></span>
          </h2>
          
          <Card className="bg-white rounded-lg shadow-sm border-none">
            <CardContent className="p-6">
              <div className="space-y-4">
                {prices.map((item, index) => (
                  <div key={index} className="flex justify-between items-center pb-2 border-b border-perla-champagne/20 last:border-0">
                    <span className="font-medium">{item.service}</span>
                    <span className="font-semibold text-perla-textDark">{item.price}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-perla-cream/30 p-4 rounded-md">
                <p className="text-sm text-perla-textLight">
                  Uvedené ceny jsou orientační a mohou se lišit v závislosti na délce, hustotě a stavu vlasů. 
                  Přesnou cenu vám rádi sdělíme při konzultaci.
                </p>
              </div>
              
              <div className="mt-6 text-center">
                <Link href="/cenik">
                  <Button variant="outline" className="border-perla-gold text-perla-gold hover:bg-perla-gold hover:text-white">
                    Kompletní ceník všech služeb
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Brands We Use */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">
            <span className="relative z-10">Značky, se kterými pracujeme</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-perla-champagne/30 -z-10"></span>
          </h2>
          
          <div className="flex justify-center flex-wrap gap-12 mb-12">
            <div className="text-center">
              <div className="h-16 w-32 mb-4 mx-auto flex items-center justify-center bg-perla-champagne/10 rounded-md">
                <span className="font-playfair text-xl font-semibold text-perla-textDark">MATRIX</span>
              </div>
              <p className="text-sm text-perla-textLight max-w-xs">Profesionální vlasová kosmetika s inovativními produkty pro barvení a péči o vlasy.</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-32 mb-4 mx-auto flex items-center justify-center bg-perla-champagne/10 rounded-md">
                <span className="font-playfair text-xl font-semibold text-perla-textDark">BES</span>
              </div>
              <p className="text-sm text-perla-textLight max-w-xs">Italská značka specializující se na profesionální vlasovou péči s důrazem na přírodní složky.</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-32 mb-4 mx-auto flex items-center justify-center bg-perla-champagne/10 rounded-md">
                <span className="font-playfair text-xl font-semibold text-perla-textDark">CHI</span>
              </div>
              <p className="text-sm text-perla-textLight max-w-xs">Přírodní produkty pro narovnávání vlasů a speciální ošetření postavené na biotechnologii.</p>
            </div>
          </div>
          
          <p className="text-center text-perla-textLight">
            Vybráme jen to nejlepší pro vaše vlasy. Naše produkty jsou šetrné k vlasům i životnímu prostředí.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-perla-champagne/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">Přijďte si odpočinout a zkrášlit se</h2>
            <p className="text-perla-textLight mb-8">
              Doporučujeme předem rezervovat termín, abychom se vám mohli plně věnovat.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/kontakt#rezervace">
                <Button className="pearl-btn w-full sm:w-auto">Rezervovat návštěvu</Button>
              </Link>
              <a href="tel:+420774031001">
                <Button variant="outline" className="border-perla-gold text-perla-gold hover:bg-perla-gold hover:text-white w-full sm:w-auto">
                  +420 774 031 001
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}