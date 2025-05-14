import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Scissors, Sparkle, Feather, Paintbrush } from "lucide-react";

export const metadata = {
  title: "Služby | Studio Perla",
  description: "Kompletní nabídka služeb studia Perla - kadeřnictví, kosmetika, masáže a nehtové studio v Praze 8 - Kobylisy",
};

const serviceCategories = [
  {
    id: "kadernictvi",
    title: "Kadeřnictví",
    description: "Dámské, pánské a dětské střihy. Barvení, melír, trvalá. Speciální techniky ošetření vlasů. Používáme produkty Matrix a BES.",
    icon: Scissors,
    image: "https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/_vNbi6vcCTSxlFgUqWeGr/tmpsroarh76.webp",
    highlights: [
      "Dámské střihy a styling",
      "Pánské střihy",
      "Dětské střihy",
      "Barvení vlasů",
      "Melírování různými technikami",
      "Společenské účesy",
      "Speciální ošetření vlasů",
      "Přírodní narovnávání vlasů CHI"
    ]
  },
  {
    id: "kosmetika",
    title: "Kosmetika",
    description: "Komplexní péče o pleť, čištění pleti, masky, masáže obličeje. Specializace v oblasti permanentního make-upu. Používáme produkty GERMAINE de CAPUCCINI a Casmara.",
    icon: Sparkle,
    image: "https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/QgAB00LLqZPBQxmr2MmgB/tmpm0vp9v5b.webp",
    highlights: [
      "Hloubkové čištění pleti",
      "Masáže obličeje a dekoltu",
      "Péče o oční okolí",
      "Speciální ošetření problematické pleti",
      "Hydratační a výživné masky",
      "Úprava a barvení obočí a řas",
      "Permanentní make-up",
      "Anti-aging procedury"
    ]
  },
  {
    id: "masaze",
    title: "Masáže",
    description: "Rekondiční masáže pro odpočinek a regeneraci. Uvolnění napětí a stresu. Zlepšení krevního oběhu a celkové podpory zdravotního stavu.",
    icon: Feather,
    image: "https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/EVKkgiss4fpY2SDlZx1xh/tmpq55zxhr0.webp",
    highlights: [
      "Klasická relaxační masáž",
      "Sportovní a rekondiční masáž",
      "Masáž zad a šíje",
      "Masáž horních a dolních končetin",
      "Anticelulitidní masáž",
      "Lymfatická masáž",
      "Reflexní masáž chodidel",
      "Baňkování"
    ]
  },
  {
    id: "nehty",
    title: "Manikúra & Nehtová Modeláž",
    description: "Klasická manikúra, modeláž nehtů, gel lak, akryl. Pestrá škála barev a možností zdobení. Profesionální péče o vaše ruce a nehty.",
    icon: Paintbrush,
    image: "https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/jO43i0Dymi5PdlM4Kv05L/tmpewnkjek7.webp",
    highlights: [
      "Klasická manikúra",
      "P-shine japonská manikúra",
      "Parafínový zábal rukou",
      "Lakování nehtů",
      "Gel lak a shellac",
      "Modeláž nehtů gelem",
      "Modeláž nehtů akrylem",
      "Zdobení nehtů, nail art"
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-perla-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-perla-textDark mb-6">
              Naše služby
            </h1>
            <p className="text-lg text-perla-textLight">
              V našem studiu najdete komplexní služby pro vaši krásu a pohodu. Věnujeme se vám s osobním přístupem a profesionální péčí, abyste odcházeli spokojení a odpočatí.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 gap-x-12">
            {serviceCategories.map((category) => (
              <div key={category.id} className="flex flex-col h-full">
                <div className="relative overflow-hidden rounded-lg mb-8 h-[300px]">
                  <Image 
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                    <div className="p-6">
                      <h2 className="text-3xl font-playfair font-semibold text-white mb-2">
                        {category.title}
                      </h2>
                    </div>
                  </div>
                </div>
                
                <p className="text-perla-textLight mb-6">
                  {category.description}
                </p>
                
                <div className="bg-perla-cream/50 p-6 rounded-lg mb-6 flex-grow">
                  <h3 className="text-lg font-medium mb-4">Co nabízíme:</h3>
                  <ul className="space-y-2">
                    {category.highlights.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-perla-gold mr-2"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href={`/sluzby/${category.id}`} className="pearl-btn text-center inline-block mt-auto">
                  Podrobnosti a ceník
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-perla-champagne/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">
              Máte dotazy ke službám?
            </h2>
            <p className="text-perla-textLight mb-8">
              Neváhejte nás kontaktovat s jakýmkoliv dotazem ohledně našich služeb. Rádi vám pomůžeme vybrat proceduru, která bude nejvíce vyhovovat vašim potřebám.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/kontakt">
                <Button className="pearl-btn w-full sm:w-auto">
                  Kontaktujte nás
                </Button>
              </Link>
              <Link href="/cenik">
                <Button variant="outline" className="border-perla-gold text-perla-gold hover:bg-perla-gold hover:text-white w-full sm:w-auto">
                  Přejít na ceník
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}