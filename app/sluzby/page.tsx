import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Služby | Studio Perla",
  description: "Profesionální kadeřnické služby v Praze 8 - Kobylisy. Střihy, barvení, styling a speciální ošetření vlasů.",
};

const serviceCategories = [
  {
    id: "kadernictvi",
    title: "Kadeřnictví",
    description: "Nabízíme kompletní škálu kadeřnických služeb pro ženy, muže i děti. Používáme kvalitní produkty Matrix, BES a CHI.",
    image: "https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/_vNbi6vcCTSxlFgUqWeGr/tmpsroarh76.webp",
    highlights: [
      "Dámské střihy a styling",
      "Pánské střihy",
      "Dětské střihy (do 10 let)",
      "Barvení vlasů všech délek",
      "Melírování různými technikami",
      "Společenské a svatební účesy",
      "Regenerační ošetření vlasů",
      "Přírodní narovnávání vlasů CHI",
      "Keratin Smooth ošetření",
      "Hydratační kúry"
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
              Nabízíme kompletní kadeřnické služby pro ženy, muže i děti. Věnujeme se vám s osobním přístupem a profesionální péčí.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {serviceCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-[400px]">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-playfair font-semibold text-perla-textDark mb-4">
                      {category.title}
                    </h2>
                    <p className="text-perla-textLight mb-6">
                      {category.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-4">Co nabízíme:</h3>
                      <ul className="space-y-2">
                        {category.highlights.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-perla-gold mr-3"></div>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={`/sluzby/${category.id}`} className="pearl-btn text-center inline-block">
                      Podrobnosti a ceník
                    </Link>
                  </div>
                </div>
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
              Máte dotazy k našim službám?
            </h2>
            <p className="text-perla-textLight mb-8">
              Neváhejte nás kontaktovat s jakýmkoliv dotazem ohledně kadeřnických služeb. Rádi vám pomůžeme vybrat vhodný střih nebo ošetření.
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