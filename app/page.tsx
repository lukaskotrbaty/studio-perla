import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Scissors, Star, Sparkles, MapPin, Users, Clock, Phone, Mail } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ParallaxHero } from "@/components/hero-parallax";

export default function Home() {
  return (
    <>
      {/* Hero Section with Parallax */}
      <ParallaxHero imageUrl="https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/_vNbi6vcCTSxlFgUqWeGr/tmpsroarh76.webp">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold text-white mb-6 animate-in fade-in slide-in-from-left duration-700">
            Profesionální kadeřnictví v&nbsp;srdci Kobylis
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-in fade-in slide-in-from-left duration-700 delay-200">
            Dopřejte si profesionální péči o vaše vlasy. Střihy, barvení, styling a speciální ošetření.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-left duration-700 delay-300">
            <Link href="/sluzby" aria-label="Prohlédnout všechny služby">
              <Button className="pearl-btn text-base w-full sm:w-auto">
                Prohlédnout služby
              </Button>
            </Link>
            <Link href="/kontakt#rezervace" aria-label="Rezervovat návštěvu">
              <Button
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 hover:text-white text-base w-full sm:w-auto transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2"
              >
                Rezervovat návštěvu
              </Button>
            </Link>
          </div>
        </div>
      </ParallaxHero>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="section-title relative inline-block">
                <span className="relative z-10">Vítejte ve Studio Perla</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-perla-champagne/30 -z-10"></span>
              </h2>
              <p className="text-perla-textLight text-lg mt-6">
                Naše studio je místem, kde se snoubí profesionalita s příjemnou atmosférou.
                Nabízíme kompletní kadeřnické služby pro ženy, muže i děti.
                Střihy, barvení, styling a speciální ošetření vlasů v příjemném prostředí Anglického dvora v Kobylisích.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-up" delay={0}>
              <Card className="pearl-card h-full">
                <CardContent className="p-6">
                  <div className="bg-perla-champagne/30 w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110">
                    <Sparkles className="text-perla-gold h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="section-subtitle">Profesionální péče</h3>
                  <p className="text-perla-textLight">
                    Naši odborníci sledují nejnovější trendy a používají kvalitní značkové produkty pro maximální spokojenost klientů.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <Card className="pearl-card h-full">
                <CardContent className="p-6">
                  <div className="bg-perla-champagne/30 w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110">
                    <MapPin className="text-perla-gold h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="section-subtitle">Skvělá dostupnost</h3>
                  <p className="text-perla-textLight">
                    Nacházíme se jen pár kroků od stanice metra Kobylisy v příjemném prostředí Anglického dvora.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={200}>
              <Card className="pearl-card h-full lg:col-span-1 md:col-span-2 lg:md:col-span-1">
                <CardContent className="p-6">
                  <div className="bg-perla-champagne/30 w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110">
                    <Users className="text-perla-gold h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="section-subtitle">Osobní přístup</h3>
                  <p className="text-perla-textLight">
                    Každý klient je pro nás jedinečný. Proto přizpůsobujeme naše služby vašim individuálním potřebám a přáním.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-perla-cream">
        <div className="container-custom">
          <AnimateOnScroll animation="fade-up">
            <h2 className="section-title text-center mb-12">
              Naše služby
            </h2>
          </AnimateOnScroll>

          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-up" delay={0}>
              <article className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative h-[400px]">
                    <Image
                      src="https://assets.macaly-user-data.dev/gg8u98y9pbuu73m0ab9w3g49/nr7nq0uvs8lscahjx2oigjwq/_vNbi6vcCTSxlFgUqWeGr/tmpsroarh76.webp"
                      alt="Profesionální kadeřnické služby v Studio Perla"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-playfair font-medium text-perla-textDark mb-4">
                      Kompletní kadeřnické služby
                    </h3>
                    <p className="text-perla-textLight mb-6">
                      Nabízíme kompletní škálu kadeřnických služeb pro ženy, muže i děti.
                      Od klasických střihů až po moderní techniky barvení a speciální ošetření.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-perla-gold mr-3"></div>
                        <span>Dámské, pánské a dětské střihy</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-perla-gold mr-3"></div>
                        <span>Barvení, melírování, tónování</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-perla-gold mr-3"></div>
                        <span>Společenské a svatební účesy</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-perla-gold mr-3"></div>
                        <span>Regenerační ošetření vlasů</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-perla-gold mr-3"></div>
                        <span>Kvalitní produkty Matrix, BES a CHI</span>
                      </li>
                    </ul>
                    <Link
                      href="/sluzby/kadernictvi"
                      className="inline-flex items-center text-perla-gold font-medium hover:opacity-80 transition-all duration-300 hover:translate-x-1 focus-visible-custom"
                      aria-label="Zjistit více o kadeřnických službách"
                    >
                      <span>Zjistit více a ceník</span>
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          </div>

        </div>
      </section>

      {/* Quote/Testimonial */}
      <section className="py-20 bg-perla-champagne/30 relative overflow-hidden" aria-label="Recenze klientů">
        <div className="absolute -right-16 top-0 w-64 h-64 rounded-full bg-perla-pink/20 mix-blend-multiply blur-3xl animate-float" aria-hidden="true"></div>
        <div className="absolute -left-16 bottom-0 w-64 h-64 rounded-full bg-perla-champagne/50 mix-blend-multiply blur-3xl animate-float" style={{ animationDelay: "3s" }} aria-hidden="true"></div>

        <div className="container-custom relative z-10">
          <AnimateOnScroll animation="scale">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6" role="img" aria-label="5 z 5 hvězdiček">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-perla-gold fill-perla-gold" aria-hidden="true" />
                  ))}
                </div>
              </div>
              <blockquote className="text-2xl md:text-3xl font-playfair italic mb-8">
                "Úžasný zážitek a profesionální přístup. Odcházím vždy spokojenná a s krásným účesem. Vřele doporučuji!"
              </blockquote>
              <div className="mb-4">
                <p className="font-medium">Petra Nováková</p>
                <p className="text-perla-textLight">Spokojená klientka</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Opening Hours and CTA */}
      <section className="py-16 bg-white" aria-label="Otevírací doba a kontakt">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <AnimateOnScroll animation="fade-right">
              <div>
                <h2 className="section-title mb-8">
                  <span className="relative z-10">Otevírací doba</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-perla-champagne/30 -z-10"></span>
                </h2>

                <div className="space-y-4" role="table" aria-label="Otevírací hodiny">
                  {[
                    { day: "Pondělí", hours: "9:00 - 19:00" },
                    { day: "Úterý", hours: "9:00 - 19:00" },
                    { day: "Středa", hours: "9:00 - 19:00" },
                    { day: "Čtvrtek", hours: "9:00 - 19:00" },
                    { day: "Pátek", hours: "9:00 - 19:00" },
                    { day: "Sobota", hours: "Dle objednání" },
                    { day: "Neděle", hours: "Dle objednání" },
                  ].map(({ day, hours }) => (
                    <div
                      key={day}
                      className="flex justify-between items-center pb-3 border-b border-perla-champagne/20 hover:border-perla-gold/30 transition-colors duration-300"
                      role="row"
                    >
                      <span className="font-medium" role="rowheader">{day}</span>
                      <span role="cell">{hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-start text-perla-textLight bg-perla-cream/50 p-4 rounded-lg">
                  <Clock className="h-5 w-5 mr-3 text-perla-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Pro rezervaci mimo otevírací dobu nás prosím kontaktujte telefonicky.</span>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left">
              <div className="bg-perla-cream p-8 md:p-10 rounded-lg shadow-lg">
                <h2 className="section-title mb-6">
                  <span className="relative z-10">Rezervujte návštěvu</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-perla-pink/40 -z-10"></span>
                </h2>
                <p className="text-perla-textLight mb-8">
                  Rezervujte si návštěvu u nás telefonicky nebo emailem. Těšíme se na vás!
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href="tel:+420774031001"
                    className="flex items-center group hover:bg-white/50 p-3 rounded-lg transition-all duration-300 focus-visible-custom"
                    aria-label="Zavolat na +420 774 031 001"
                  >
                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm mr-4 group-hover:shadow-md transition-shadow">
                      <Phone className="text-perla-gold h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-perla-textLight group-hover:text-perla-gold transition-colors">+420 774 031 001</p>
                    </div>
                  </a>

                  <a
                    href="mailto:studioperla@email.cz"
                    className="flex items-center group hover:bg-white/50 p-3 rounded-lg transition-all duration-300 focus-visible-custom"
                    aria-label="Napsat email na studioperla@email.cz"
                  >
                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm mr-4 group-hover:shadow-md transition-shadow">
                      <Mail className="text-perla-gold h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium">E-mail</p>
                      <p className="text-perla-textLight group-hover:text-perla-gold transition-colors">studioperla@email.cz</p>
                    </div>
                  </a>
                </div>

                <a href="tel:+420774031001" aria-label="Zavolat na rezervaci">
                  <Button className="pearl-btn text-base w-full">Zavolat na rezervaci</Button>
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}