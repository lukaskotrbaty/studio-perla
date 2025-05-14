"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cs } from "date-fns/locale";
import { CalendarIcon, Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { toast } from "sonner";

const times = [
  "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", 
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", 
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30"
];

export default function ContactPage() {

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-perla-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-perla-textDark mb-6">
              Kontakt
            </h1>
            <p className="text-lg text-perla-textLight">
              Kontaktujte nás s jakýmkoliv dotazem nebo si rezervujte návštěvu v našem studiu. Těšíme se na vás!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title mb-8">
                <span className="relative z-10">Náš kontakt</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-perla-champagne/30 -z-10"></span>
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-perla-champagne/30 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="text-perla-gold h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Adresa</h3>
                    <p className="text-perla-textLight">Studio Perla</p>
                    <p className="text-perla-textLight">Služská 1865/15</p>
                    <p className="text-perla-textLight">Praha 8 - Kobylisy, 182 00</p>
                    <p className="text-perla-textLight mt-1">(v areálu Anglický dvůr)</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-perla-champagne/30 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-perla-gold h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Telefon</h3>
                    <a href="tel:+420774031001" className="text-perla-textLight hover:text-perla-gold transition-colors">+420 774 031 001</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-perla-champagne/30 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-perla-gold h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">E-mail</h3>
                    <a href="mailto:studioperla@email.cz" className="text-perla-textLight hover:text-perla-gold transition-colors">studioperla@email.cz</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-perla-champagne/30 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="text-perla-gold h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Otevírací doba</h3>
                    <p className="text-perla-textLight">Pondělí - Pátek: 9:00 - 19:00</p>
                    <p className="text-perla-textLight">Sobota - Neděle: Dle objednání</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-perla-champagne/30 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Facebook className="text-perla-gold h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Sociální sítě</h3>
                    <div className="flex items-center space-x-3">
                      <a
                        href="https://www.facebook.com/studioperla1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-perla-textLight hover:text-perla-gold transition-colors"
                      >
                        Facebook
                      </a>
                      <span>&bull;</span>
                      <a
                        href="#"
                        className="text-perla-textLight hover:text-perla-gold transition-colors"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-[450px] relative rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.902327584764!2d14.45651987688182!3d50.12361491462136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470beaf37a4cbc8d%3A0x2f59bad2dad15f90!2sAnglick%C3%BD%20dv%C5%AFr!5e0!3m2!1sen!2scz!4v1714825854825!5m2!1sen!2scz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="rezervace" className="py-16 bg-perla-cream scroll-mt-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-8">
              <span className="relative z-10">Rezervace návštěvy</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-perla-pink/40 -z-10"></span>
            </h2>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex flex-col items-center gap-6">
                <div className="bg-perla-champagne/30 w-16 h-16 rounded-full flex items-center justify-center">
                  <Phone className="text-perla-gold h-7 w-7" />
                </div>
                
                <h3 className="font-playfair text-2xl">Rezervujte si termín</h3>
                
                <p className="text-perla-textLight max-w-lg mx-auto">
                  Pro rezervaci termínu nás prosím kontaktujte telefonicky. Rádi vám poradíme s výběrem služby a naplánujeme vhodný termín návštěvy.
                </p>
                
                <a href="tel:+420774031001" className="mt-4">
                  <Button className="pearl-btn px-8 py-6 text-lg flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    +420 774 031 001
                  </Button>
                </a>
                
                <p className="text-sm text-perla-textLight mt-2">
                  V případě nedostupnosti nám můžete zanechat zprávu na záznamníku nebo nás kontaktovat e-mailem.
                </p>
              </div>
            </div>
            
            <div className="mt-10 bg-white p-6 rounded-lg shadow-sm text-left">
              <h3 className="font-playfair text-xl mb-4">Důležité informace k rezervaci</h3>
              <ul className="space-y-2 text-perla-textLight">
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-perla-gold mr-2 mt-2"></div>
                  <p>Rezervaci je možné provést nejméně 24 hodin před požadovaným termínem.</p>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-perla-gold mr-2 mt-2"></div>
                  <p>V případě, že nemůžete dorazit, prosím informujte nás nejméně 24 hodin předem.</p>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-perla-gold mr-2 mt-2"></div>
                  <p>Pro jakoukoli změnu nebo zrušení rezervace nás kontaktujte telefonicky.</p>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-perla-gold mr-2 mt-2"></div>
                  <p>Telefonní rezervace přijímáme v otevírací době: Pondělí - Pátek: 9:00 - 19:00</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}