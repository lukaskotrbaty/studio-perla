import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Studio Perla | Vaše oáza krásy a relaxace v srdci Kobylis",
  description: "Profesionální kadeřnictví, kosmetika, masáže a nehtové studio v Praze 8 - Kobylisy. Dopřejte si péči od hlavy až k patě pod jednou střechou.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}