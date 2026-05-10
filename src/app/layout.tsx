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
      "Baufinanzierung & Kredite — Bestzins aus 400+ Banken | Süba Dragon Wohnbau",
    template: "%s | Süba Dragon Wohnbau"
  },
  applicationName: "Süba Dragon Wohnbau GmbH",
  description:
    "Unabhängige Baufinanzierung, Anschlussfinanzierung, Forward-Darlehen & Privatkredite — neutraler Vergleich aus über 400 Banken. KfW-Förderung integriert. Kostenloser Konditions-Check in Mannheim, Frankfurt, Stuttgart, München, Berlin, Hamburg & deutschlandweit. Kein Verkaufsdruck.",
  keywords: [
    "Baufinanzierung",
    "Baufinanzierung Vergleich",
    "Baufinanzierung deutschlandweit",
    "Anschlussfinanzierung",
    "Forward-Darlehen",
    "Hauskredit Vergleich",
    "Immobilienfinanzierung",
    "KfW Förderung Baufinanzierung",
    "KfW 124",
    "KfW 261 Klimafreundlicher Neubau",
    "KfW 300 Wohneigentum für Familien",
    "Modernisierungskredit",
    "Bauspardarlehen",
    "Volltilgerdarlehen",
    "Privatkredit Vergleich",
    "Ratenkredit",
    "Konsumentenkredit",
    "Bauzinsen aktuell",
    "Bestzins Baufinanzierung",
    "Baufinanzierung Mannheim",
    "Baufinanzierung Frankfurt",
    "Baufinanzierung Stuttgart",
    "Baufinanzierung München",
    "Baufinanzierung Berlin",
    "Baufinanzierung Hamburg",
    "Immobiliardarlehensvermittler",
    "§ 34i GewO",
    "Süba Dragon Wohnbau",
    "Süba Dragon Wohnbau GmbH"
  ],
  authors: [{ name: "Süba Dragon Wohnbau GmbH", url: "https://sueba-dragon-wohnbau.de" }],
  creator: "Süba Dragon Wohnbau GmbH",
  publisher: "Süba Dragon Wohnbau GmbH",
  category: "Baufinanzierung · Kredite · Finanzdienstleistung",
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
      "Baufinanzierung & Kredite — Bestzins aus 400+ Banken | Süba Dragon Wohnbau",
    description:
      "Unabhängiger Konditionsvergleich aus über 400 Banken — Baufinanzierung, Anschlussfinanzierung, Forward-Darlehen, KfW-Förderung & Privatkredite. Deutschlandweit. Kostenloser Konditions-Check, kein Verkaufsdruck.",
    type: "website",
    locale: "de_DE",
    siteName: "Süba Dragon Wohnbau GmbH",
    url: "https://sueba-dragon-wohnbau.de",
    images: [
      {
        url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "Süba Dragon Wohnbau — Baufinanzierung & Kredite, Bestzins aus 400+ Banken in Deutschland"
      },
      {
        url: "/sueba-dragon-logo-white.png",
        width: 600,
        height: 315,
        alt: "Süba Dragon Wohnbau GmbH — Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Baufinanzierung deutschlandweit — Bestzins aus 400+ Banken",
    description:
      "Kostenloser Konditions-Check für Baufinanzierung, Anschluss- & Forward-Darlehen sowie Privatkredite in Mannheim, Frankfurt, Stuttgart, München, Berlin, Hamburg & deutschlandweit. Bestzins, kein Hausbankzins.",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&h=630&q=85"
    ]
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
