import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string[];
}

export function generateMetadata({
  title,
  description,
  canonical = "https://studio-perla.cz",
  ogImage = "https://studio-perla.cz/og-image.jpg",
  ogType = "website",
  keywords = [],
}: SEOProps): Metadata {
  const siteName = "Studio Perla";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  const defaultKeywords = [
    "kadeřnictví Praha 8",
    "kosmetika Kobylisy",
    "manikúra Praha",
    "masáže Praha 8",
    "nehtové studio Kobylisy",
    "beauty salon Praha",
  ];

  const allKeywords = [...new Set([...keywords, ...defaultKeywords])];

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: "Studio Perla" }],
    creator: "Studio Perla",
    publisher: "Studio Perla",
    metadataBase: new URL("https://studio-perla.cz"),
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "cs_CZ",
      type: ogType as any,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "google-site-verification-code", // To be replaced with actual code
    },
  };
}

// JSON-LD structured data for LocalBusiness
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Studio Perla",
    description: "Profesionální kadeřnictví, kosmetika, masáže a nehtové studio v Praze 8 - Kobylisy",
    image: "https://studio-perla.cz/og-image.jpg",
    "@id": "https://studio-perla.cz",
    url: "https://studio-perla.cz",
    telephone: "+420774031001",
    email: "studioperla@email.cz",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Anglický dvůr",
      addressLocality: "Praha 8 - Kobylisy",
      postalCode: "182 00",
      addressCountry: "CZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.1173,
      longitude: 14.4571,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:00",
        closes: "19:00",
        description: "Dle objednání",
      },
    ],
    priceRange: "$$",
    servesCuisine: null,
    acceptsReservations: true,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
    sameAs: [
      // Add social media links when available
      // "https://www.facebook.com/studioperla",
      // "https://www.instagram.com/studioperla",
    ],
  };
}

// Service schema for individual services
export function generateServiceSchema(serviceName: string, serviceDescription: string, serviceUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "BeautySalon",
      name: "Studio Perla",
      url: "https://studio-perla.cz",
    },
    areaServed: {
      "@type": "City",
      name: "Praha",
    },
    url: serviceUrl,
  };
}
