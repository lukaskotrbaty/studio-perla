import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { generateMetadata, generateLocalBusinessSchema } from "@/components/seo-metadata";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#D4AF37",
};

export const metadata: Metadata = generateMetadata({
  title: "Studio Perla | Vaše oáza krásy a relaxace v srdci Kobylis",
  description: "Profesionální kadeřnictví, kosmetika, masáže a nehtové studio v Praze 8 - Kobylisy. Dopřejte si péči od hlavy až k patě pod jednou střechou.",
  canonical: "https://studio-perla.cz",
  keywords: [
    "Studio Perla",
    "kadeřnictví Praha 8",
    "kosmetika Kobylisy",
    "beauty salon Praha",
    "manikúra Praha",
    "masáže Praha 8",
    "nehtové studio",
    "permanentní make-up",
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="cs" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}