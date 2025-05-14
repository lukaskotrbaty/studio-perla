import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Facebook } from "lucide-react";

export const metadata = {
  title: "Galerie | Studio Perla",
  description: "Prohlédněte si galerii našich prací a prostory studia - kadeřnictví, kosmetika, masáže a nehtové studio v Praze 8",
};

interface GalleryItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const galleries = {
  studio: [
    {
      src: "https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/_vNbi6vcCTSxlFgUqWeGr/tmpsroarh76.webp",
      alt: "Interiér studia Perla",
      width: 600,
      height: 400,
    },
    {
      src: "https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/QgAB00LLqZPBQxmr2MmgB/tmpm0vp9v5b.webp",
      alt: "Kosmetický salon",
      width: 600,
      height: 400,
    },
    {
      src: "https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/EVKkgiss4fpY2SDlZx1xh/tmpq55zxhr0.webp",
      alt: "Masážní místnost",
      width: 600,
      height: 400,
    },
    {
      src: "https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/jO43i0Dymi5PdlM4Kv05L/tmpewnkjek7.webp",
      alt: "Manikúra a nehtové studio",
      width: 600,
      height: 400,
    },
  ],
  haircare: [
    {
      src: "https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/_vNbi6vcCTSxlFgUqWeGr/tmpsroarh76.webp",
      alt: "Dámský střih",
      width: 600,
      height: 400,
    },
    {
      src: "https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/_vNbi6vcCTSxlFgUqWeGr/tmpsroarh76.webp",
      alt: "Barvení vlasů",
      width: 600,
      height: 400,
    },
    {
      src: "https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/_vNbi6vcCTSxlFgUqWeGr/tmpsroarh76.webp",
      alt: "Společenský účes",
      width: 600,
      height: 400,
    },
  ],
  cosmetics: [
    {
      src: "https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/QgAB00LLqZPBQxmr2MmgB/tmpm0vp9v5b.webp",
      alt: "Ošetření pleti",
      width: 600,
      height: 400,
    },
    {
      src: "https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/QgAB00LLqZPBQxmr2MmgB/tmpm0vp9v5b.webp",
      alt: "Maskovaní pleti",
      width: 600,
      height: 400,
    },
    {
      src: "https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/QgAB00LLqZPBQxmr2MmgB/tmpm0vp9v5b.webp",
      alt: "Permanentní make-up",
      width: 600,
      height: 400,
    },
  ],
  massage: [
    {
      src: "https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/EVKkgiss4fpY2SDlZx1xh/tmpq55zxhr0.webp",
      alt: "Masáž zad",
      width: 600,
      height: 400,
    },
    {
      src: "https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/EVKkgiss4fpY2SDlZx1xh/tmpq55zxhr0.webp",
      alt: "Relaxační masáž",
      width: 600,
      height: 400,
    },
  ],
  nails: [
    {
      src: "https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/jO43i0Dymi5PdlM4Kv05L/tmpewnkjek7.webp",
      alt: "Gel lak",
      width: 600,
      height: 400,
    },
    {
      src: "https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/jO43i0Dymi5PdlM4Kv05L/tmpewnkjek7.webp",
      alt: "Nehtová modeláž",
      width: 600,
      height: 400,
    },
    {
      src: "https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/jO43i0Dymi5PdlM4Kv05L/tmpewnkjek7.webp",
      alt: "Zdobení nehtů",
      width: 600,
      height: 400,
    },
  ],
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-perla-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-perla-textDark mb-6">
              Galerie
            </h1>
            <p className="text-lg text-perla-textLight">
              Prohlédněte si interiér našeho studia a ukázky naší práce. Inspirujte se a přijďte nás navštívit.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Tabs defaultValue="studio" className="space-y-8">
            <TabsList className="w-full flex justify-center flex-wrap gap-2 h-auto p-1">
              <TabsTrigger value="studio" className="text-sm px-6 py-2">Studio</TabsTrigger>
              <TabsTrigger value="haircare" className="text-sm px-6 py-2">Kadeřnictví</TabsTrigger>
              <TabsTrigger value="cosmetics" className="text-sm px-6 py-2">Kosmetika</TabsTrigger>
              <TabsTrigger value="massage" className="text-sm px-6 py-2">Masáže</TabsTrigger>
              <TabsTrigger value="nails" className="text-sm px-6 py-2">Nehty</TabsTrigger>
            </TabsList>
            
            {Object.entries(galleries).map(([key, images]) => (
              <TabsContent key={key} value={key} className="focus-visible:outline-none focus-visible:ring-0">
                <h2 className="section-title text-center mb-8">
                  <span className="relative z-10">
                    {key === "studio" && "Naše prostory"}
                    {key === "haircare" && "Kadeřnické práce"}
                    {key === "cosmetics" && "Kosmetické ošetření"}
                    {key === "massage" && "Masáže"}
                    {key === "nails" && "Nehtový design"}
                  </span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-perla-champagne/30 -z-10"></span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {images.map((image, index) => (
                    <div 
                      key={index} 
                      className="relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-64 group"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                        <div className="p-4 w-full">
                          <p className="text-white font-medium">{image.alt}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-perla-champagne/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">Chcete vidět více?</h2>
            <p className="text-perla-textLight mb-4">
              Navštivte naši Facebook stránku pro další fotografie a aktuální novinky. 
              Nebo nás navštivte osobně a přesvědčte se o kvalitě našich služeb sami.
            </p>
            <div className="flex items-center justify-center space-x-4 mt-8">
              <a
                href="https://www.facebook.com/studioperla1/"
                target="_blank"
                rel="noopener noreferrer"
                className="pearl-btn inline-flex items-center"
              >
                <Facebook className="mr-2 h-4 w-4" />
                Náš Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}