import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Scissors, Star, Sparkles, MapPin, Users, Clock, Phone, Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image 
              src="https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/_vNbi6vcCTSxlFgUqWeGr/tmpsroarh76.webp" 
              alt="Studio Perla" 
              fill 
              priority
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          </div>
        </div>
        
        <div className="container-custom relative z-10 mt-10">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold text-white mb-6">
              Vaše oáza krásy a relaxace v&nbsp;srdci Kobylis
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Dopřejte si profesionální péči od hlavy až k&nbsp;patě. Komplexní služby pod jednou střechou.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/sluzby">
                <Button className="pearl-btn text-base w-full sm:w-auto">
                  Prohlédnout služby
                </Button>
              </Link>
              <Link href="/kontakt#rezervace">
                <Button variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 hover:text-white text-base w-full sm:w-auto">
                  Rezervovat návštěvu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title relative inline-block">
              <span className="relative z-10">Vitejte ve Studio Perla</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-perla-champagne/30 -z-10"></span>
            </h2>
            <p className="text-perla-textLight text-lg mt-6">
              Naše studio je místem, kde se snoubí profesionalita s příjemnou atmosférou. 
              Nabízíme komplexní služby v oblasti kadeřnictví, kosmetiky, masáží a nehtového designu.
              Vše pod jednou střechou, v příjemném prostředí Anglického dvora v Kobylisích.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="pearl-card">
              <CardContent className="p-6">
                <div className="bg-perla-champagne/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="text-perla-gold h-6 w-6" />
                </div>
                <h3 className="section-subtitle">Profesionální péče</h3>
                <p className="text-perla-textLight">
                  Naši odborníci sledují nejnovější trendy a používají kvaliní značkové produkty pro maximální spokojenost klientů.
                </p>
              </CardContent>
            </Card>

            <Card className="pearl-card">
              <CardContent className="p-6">
                <div className="bg-perla-champagne/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="text-perla-gold h-6 w-6" />
                </div>
                <h3 className="section-subtitle">Skvělá dostupnost</h3>
                <p className="text-perla-textLight">
                  Nacházíme se jen pár kroků od stanice metra Kobylisy v příjemném prostředí Anglického dvora.
                </p>
              </CardContent>
            </Card>

            <Card className="pearl-card lg:col-span-1 md:col-span-2">
              <CardContent className="p-6">
                <div className="bg-perla-champagne/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-perla-gold h-6 w-6" />
                </div>
                <h3 className="section-subtitle">Osobní přístup</h3>
                <p className="text-perla-textLight">
                  Každý klient je pro nás jedinečný. Proto přizpůsobujeme naše služby vašim individuálním potřebám a přáním.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-perla-cream">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">
            <span className="relative z-10">Naše služby</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-perla-pink/40 -z-10"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Kadeřnictví */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <Image 
                  src="https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/_vNbi6vcCTSxlFgUqWeGr/tmpsroarh76.webp"
                  alt="Kadeřnictví"
                  width={600}
                  height={400}
                  className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-playfair font-medium text-white">
                  Kadeřnictví
                </h3>
              </div>
              <p className="text-perla-textLight mb-4">
                Dámské, pánské a dětské střihy. Barvení, melír, trvalá. Speciální techniky ošetření vlasů. Používáme produkty Matrix a BES.
              </p>
              <Link href="/sluzby/kadernictvi" className="flex items-center text-perla-gold font-medium hover:opacity-80 transition-opacity">
                <span>Zjistit více</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Kosmetika */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <Image 
                  src="https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/QgAB00LLqZPBQxmr2MmgB/tmpm0vp9v5b.webp"
                  alt="Kosmetika"
                  width={600}
                  height={400}
                  className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-playfair font-medium text-white">
                  Kosmetika
                </h3>
              </div>
              <p className="text-perla-textLight mb-4">
                Komplexní péče o pleť, čištění pleti, masky, masáže obličeje. Specializace v oblasti permanentního make-upu. Používáme produkty GERMAINE de CAPUCCINI a Casmara.
              </p>
              <Link href="/sluzby/kosmetika" className="flex items-center text-perla-gold font-medium hover:opacity-80 transition-opacity">
                <span>Zjistit více</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Masáže */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <Image 
                  src="https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/EVKkgiss4fpY2SDlZx1xh/tmpq55zxhr0.webp"
                  alt="Masáže"
                  width={600}
                  height={400}
                  className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-playfair font-medium text-white">
                  Masáže
                </h3>
              </div>
              <p className="text-perla-textLight mb-4">
                Rekondiční masáže pro odpočinek a regeneraci. Uvolnění napětí a stresu. Zlepšení krevního oběhu a celkové podpory zdravotního stavu.
              </p>
              <Link href="/sluzby/masaze" className="flex items-center text-perla-gold font-medium hover:opacity-80 transition-opacity">
                <span>Zjistit více</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Nehty */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <Image 
                  src="https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/jO43i0Dymi5PdlM4Kv05L/tmpewnkjek7.webp"
                  alt="Manikúra & Nehtová Modeláž"
                  width={600}
                  height={400}
                  className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-playfair font-medium text-white">
                  Manikúra & Nehtová Modeláž
                </h3>
              </div>
              <p className="text-perla-textLight mb-4">
                Klasická manikúra, modeláž nehtů, gel lak, akryl. Pestrá škála barev a možností zdobení. Profesionální péče o vaše ruce a nehty.
              </p>
              <Link href="/sluzby/nehty" className="flex items-center text-perla-gold font-medium hover:opacity-80 transition-opacity">
                <span>Zjistit více</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/sluzby">
              <Button className="pearl-btn text-base px-8">Všechny naše služby</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote/Testimonial */}
      <section className="py-20 bg-perla-champagne/30 relative overflow-hidden">
        <div className="absolute -right-16 top-0 w-64 h-64 rounded-full bg-perla-pink/20 mix-blend-multiply blur-3xl"></div>
        <div className="absolute -left-16 bottom-0 w-64 h-64 rounded-full bg-perla-champagne/50 mix-blend-multiply blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-perla-gold fill-perla-gold" />
                ))}
              </div>
            </div>
            <blockquote className="text-2xl md:text-3xl font-playfair italic mb-8">
              "ÚDasný zážitek a profesionální přístup. Odcházím vždy spokojenná a s krásným účesem. Vřele doporučuji!"
            </blockquote>
            <div className="mb-4">
              <p className="font-medium">Petra Nováková</p>
              <p className="text-perla-textLight">Spokojenná klientka</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours and CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-title mb-8">
                <span className="relative z-10">Otevírací doba</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-perla-champagne/30 -z-10"></span>
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-perla-champagne/20">
                  <span className="font-medium">Pondělí</span>
                  <span>9:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-perla-champagne/20">
                  <span className="font-medium">Úterý</span>
                  <span>9:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-perla-champagne/20">
                  <span className="font-medium">Středa</span>
                  <span>9:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-perla-champagne/20">
                  <span className="font-medium">Čtvrtek</span>
                  <span>9:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-perla-champagne/20">
                  <span className="font-medium">Pátek</span>
                  <span>9:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-perla-champagne/20">
                  <span className="font-medium">Sobota</span>
                  <span>Dle objednání</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-perla-champagne/20">
                  <span className="font-medium">Neděle</span>
                  <span>Dle objednání</span>
                </div>
              </div>
              
              <div className="mt-8 flex items-center text-perla-textLight">
                <Clock className="h-5 w-5 mr-2 text-perla-gold" />
                <span>Pro rezervaci mimo otvírací dobu nás prosím kontaktujte telefonicky.</span>
              </div>
            </div>
            
            <div className="bg-perla-cream p-8 md:p-10 rounded-lg">
              <h2 className="section-title mb-6">
                <span className="relative z-10">Rezervujte návštěvu</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-perla-pink/40 -z-10"></span>
              </h2>
              <p className="text-perla-textLight mb-8">
                Rezervujte si návštěvu u nás telefonicky, emailem nebo přes rezervační formulář. Těšíme se na vás!
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm mr-4">
                    <Phone className="text-perla-gold h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-perla-textLight">+420 774 031 001</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm mr-4">
                    <Mail className="text-perla-gold h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">E-mail</p>
                    <p className="text-perla-textLight">studioperla@email.cz</p>
                  </div>
                </div>
              </div>
              
              <Link href="/kontakt#rezervace">
                <Button className="pearl-btn text-base w-full">Rezervovat on-line</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}