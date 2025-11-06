import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ThumbsUp, Heart } from "lucide-react";

export const metadata = {
  title: "O nás | Studio Perla",
  description: "Poznejte náš kadeřnický salon a profesionální kadeřnici v Studiu Perla v Praze 8 - Kobylisy",
};

const team = [
  {
    name: "Klára Novotná",
    position: "Kadeřnice",
    image: "https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/_vNbi6vcCTSxlFgUqWeGr/tmpsroarh76.webp",
    description: "Klára má více než 10 let zkušeností v oboru kadeřnictví. Specializuje se na střihy, barvení a speciální techniky jako je melírování, balayage a regenerační ošetření vlasů. Její přístup kombinuje odbornost s individuální péčí o každého klienta.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-perla-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-perla-textDark mb-6">
              O nás
            </h1>
            <p className="text-lg text-perla-textLight">
              Poznejte náš příběh a kadeřnici, která se stará o vaši krásu v našem stylovém studiu v Kobylisích.
            </p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-8">
                <span className="relative z-10">Naše historie a filosofie</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-perla-champagne/30 -z-10"></span>
              </h2>
              
              <div className="space-y-6">
                <p>
                  Studio Perla vzniklo z vášně pro krásu a touhy vytvořit místo, kde se klienti budou cítit výjimečně a odpočatí. Od svého založení se zaměřujeme na poskytování vysoce kvalitních kadeřnických služeb s důrazem na individuální přístup.
                </p>
                <p>
                  Naší filozofií je osobní péče o každého klienta. Věříme, že každý člověk je jedinečný a zaslouží si pozornost, která je šitá na míru právě jemu. Proto nasloucháme vašim přáním a nabízíme řešení, která nejlépe vyhovují vašim potřebám a stylu.
                </p>
                <p>
                  Neustále sledujeme nejnovější trendy v kadeřnictví. Naše kadeřnice se pravidelně vzdělává na školeních a seminářích, aby vám mohla nabídnout to nejlepší. Používáme výhradně kvalitní a ověřené produkty značek Matrix, BES a CHI.
                </p>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/sluzby/kadernictvi">
                  <Button className="pearl-btn">Naše služby</Button>
                </Link>
                <Link href="/kontakt">
                  <Button variant="outline" className="border-perla-gold text-perla-gold hover:bg-perla-gold hover:text-white">
                    Kontaktujte nás
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/_vNbi6vcCTSxlFgUqWeGr/tmpsroarh76.webp"
                  alt="Studio Perla"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 h-64 w-64 bg-perla-pink/20 rounded-full -z-10"></div>
              <div className="absolute -top-8 -right-8 h-64 w-64 bg-perla-champagne/30 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-perla-cream">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">
            <span className="relative z-10">Naše hodnoty</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-perla-pink/40 -z-10"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="pearl-card text-center">
              <CardContent className="p-8">
                <div className="bg-perla-champagne/40 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="text-perla-gold h-8 w-8" />
                </div>
                <h3 className="text-xl font-playfair font-medium mb-4">Kvalita</h3>
                <p className="text-perla-textLight">
                  Dbáme na vysokou úroveň našich kadeřnických služeb a používáme pouze kvalitní přípravky. Každý detail je pro nás důležitý.
                </p>
              </CardContent>
            </Card>
            
            <Card className="pearl-card text-center">
              <CardContent className="p-8">
                <div className="bg-perla-champagne/40 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ThumbsUp className="text-perla-gold h-8 w-8" />
                </div>
                <h3 className="text-xl font-playfair font-medium mb-4">Profesionalita</h3>
                <p className="text-perla-textLight">
                  Naše kadeřnice má bohaté zkušenosti a neustále se vzdělává v nejnovějších trendech a technikách. Pracuje vždy s maximálním nasazením.
                </p>
              </CardContent>
            </Card>
            
            <Card className="pearl-card text-center">
              <CardContent className="p-8">
                <div className="bg-perla-champagne/40 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="text-perla-gold h-8 w-8" />
                </div>
                <h3 className="text-xl font-playfair font-medium mb-4">Péče</h3>
                <p className="text-perla-textLight">
                  Péče o klienta je naší prioritou. Vytváříme příjemné prostředí, kde se budete cítit výjimečně a kde můžete relaxovat a odpočinout si.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">
            <span className="relative z-10">Naše kadeřnice</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-perla-champagne/30 -z-10"></span>
          </h2>

          <div className="max-w-3xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-playfair font-medium mb-2">{member.name}</h3>
                  <p className="text-perla-gold text-lg mb-4">{member.position}</p>
                  <p className="text-perla-textLight text-lg leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-perla-champagne/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">Přijďte se k nám podívat</h2>
            <p className="text-perla-textLight mb-8">
              Rádi vás přivítáme v našem studiu v Kobylisích. Doporučujeme předem si rezervovat termín, abychom se vám mohli plně věnovat.
            </p>
            <Link href="/kontakt">
              <Button className="pearl-btn text-base">Kontaktujte nás</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}