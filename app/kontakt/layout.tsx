import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Studio Perla",
  description: "Kontaktujte nás nebo si rezervujte termín v Studiu Perla v Praze 8 - Kobylisy. Kadeřnictví, kosmetika, masáže a nehtové studio.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
