import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sueba-dragon-wohnbau.de"),
  title: {
    default:
      "Immobilien als Kapitalanlage — Mannheim, Frankfurt & deutschlandweit | Süba Dragon Wohnbau",
    template: "%s | Süba Dragon Wohnbau"
  },
  applicationName: "Süba Dragon Wohnbau GmbH",
  description:
    "Anlageimmobilien strategisch geprüft: Standort, Finanzierung, Mietpotenzial. Süba Dragon Wohnbau vermittelt Immobilien als Kapitalanlage in Mannheim, Frankfurt, Stuttgart, München, Berlin, Hamburg & deutschlandweit. Kostenloser Investment-Check — kein Verkaufsdruck.",
  keywords: [
    "Immobilien als Kapitalanlage",
    "Anlageimmobilien",
    "Anlageimmobilien Deutschland",
    "Renditeobjekte",
    "Investment-Check Immobilie",
    "Immobilieninvestment Mannheim",
    "Immobilieninvestment Frankfurt",
    "Immobilieninvestment Stuttgart",
    "Immobilieninvestment München",
    "Immobilieninvestment Berlin",
    "Immobilieninvestment Hamburg",
    "Kapitalanlage Wohnung kaufen",
    "Mehrfamilienhaus Kapitalanlage",
    "Neubau Kapitalanlage",
    "Bestandsimmobilie Rendite",
    "Denkmalimmobilie AfA",
    "Vermögensaufbau Immobilien",
    "Eigenkapitalrendite Immobilien",
    "Mietrendite berechnen",
    "Standortanalyse Immobilien",
    "Immobilienfinanzierung Beratung",
    "Süba Dragon Wohnbau",
    "Süba Dragon Wohnbau GmbH",
    "Immobilienvermittlung Mannheim"
  ],
  authors: [{ name: "Süba Dragon Wohnbau GmbH", url: "https://sueba-dragon-wohnbau.de" }],
  creator: "Süba Dragon Wohnbau GmbH",
  publisher: "Süba Dragon Wohnbau GmbH",
  category: "Immobilien · Kapitalanlage",
  alternates: {
    canonical: "/",
    languages: { "de-DE": "/" }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    title:
      "Immobilien als Kapitalanlage — Mannheim, Frankfurt & deutschlandweit | Süba Dragon Wohnbau",
    description:
      "Strategische Anlageimmobilien für Privatinvestoren — Standort, Finanzierung & Mietpotenzial vorab geprüft. Deutschlandweit. Kostenloser Investment-Check, kein Verkaufsdruck.",
    type: "website",
    locale: "de_DE",
    siteName: "Süba Dragon Wohnbau GmbH",
    url: "https://sueba-dragon-wohnbau.de",
    images: [
      {
        url: "/sueba-dragon-logo-white.png",
        width: 1200,
        height: 630,
        alt: "Süba Dragon Wohnbau — Immobilien als Kapitalanlage"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Anlageimmobilien deutschlandweit — strategisch geprüft",
    description:
      "Kostenloser Investment-Check für Anlageimmobilien in Mannheim, Frankfurt, Stuttgart, München, Berlin, Hamburg & deutschlandweit. Strategie vor Objekt.",
    images: ["/sueba-dragon-logo-white.png"]
  },
  verification: {
    other: { "msvalidate.01": "" }
  },
  other: {
    "geo.region": "DE-BW",
    "geo.placename": "Mannheim",
    "geo.position": "49.4875;8.466",
    ICBM: "49.4875, 8.466"
  }
};

export const viewport = {
  themeColor: "#0a0807",
  colorScheme: "dark" as const,
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="de-DE" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
