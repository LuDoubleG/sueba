import Script from "next/script";
import { SiteNav } from "@/components/site-nav";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { CursorSpotlight } from "@/components/effects/cursor-spotlight";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Manifesto } from "@/components/sections/manifesto";
import { Framework } from "@/components/sections/framework";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { Voices } from "@/components/sections/voices";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Closing } from "@/components/sections/closing";
import { Footer } from "@/components/sections/footer";
import { faqs } from "@/lib/data";

const SITE_URL = "https://sueba-dragon-wohnbau.de";

const SERVICE_CITIES = [
  "Mannheim",
  "Heidelberg",
  "Ludwigshafen",
  "Frankfurt am Main",
  "Stuttgart",
  "Karlsruhe",
  "Worms",
  "Mainz",
  "Wiesbaden",
  "Köln",
  "Düsseldorf",
  "Hamburg",
  "Berlin",
  "München",
  "Leipzig",
  "Dresden",
  "Nürnberg",
  "Hannover",
  "Bremen",
  "Bonn"
];

export default function Home() {
  const businessLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_URL}/#organization`,
    name: "Süba Dragon Wohnbau GmbH",
    legalName: "Süba Dragon Wohnbau GmbH",
    alternateName: ["Süba Dragon", "Süba Wohnbau", "Süba Dragon Wohnbau"],
    areaServed: [
      { "@type": "Country", name: "Deutschland" },
      ...SERVICE_CITIES.map((c) => ({ "@type": "City", name: c }))
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mannheim",
      addressRegion: "Baden-Württemberg",
      addressCountry: "DE"
    },
    email: "info@sueba-wohnbau.de",
    telephone: "+49 621 3999 3141",
    priceRange: "€€€",
    image: `${SITE_URL}/sueba-dragon-logo-white.png`,
    logo: `${SITE_URL}/sueba-dragon-logo-white.png`,
    description:
      "Süba Dragon Wohnbau GmbH — strategische Vermittlung von Immobilien als Kapitalanlage. Anlageimmobilien, Renditeobjekte, Neubau & Bestand. Standortprüfung, Finanzierungs-Sparring und Mietpotenzial-Analyse für Privatinvestoren in Mannheim, Frankfurt, Stuttgart, München, Berlin, Hamburg und deutschlandweit.",
    url: SITE_URL,
    sameAs: [SITE_URL],
    knowsAbout: [
      "Immobilien als Kapitalanlage",
      "Anlageimmobilien Deutschland",
      "Renditeobjekte",
      "Bestandsimmobilien",
      "Neubau Kapitalanlage",
      "Denkmalimmobilien",
      "AfA Sonderabschreibung",
      "Immobilienfinanzierung",
      "Mietrendite & Cashflow",
      "Standortanalyse",
      "Investment-Strategie für Privatinvestoren",
      "Eigenkapitalrendite",
      "Vermögensaufbau mit Immobilien",
      "Steuerliche Optimierung Immobilien"
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Kostenloser Investment-Check",
        description:
          "Strategische Erstprüfung Ihrer Investment-Situation — Standort, Eigenkapital, Finanzierung, Steuer und passendes Objektprofil. Unverbindlich, schriftlich, in 7 Tagen.",
        price: "0",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        areaServed: "DE"
      }
    ]
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/#service`,
    name: "Vermittlung von Anlageimmobilien & Investment-Strategie",
    serviceType: "Immobilien als Kapitalanlage",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: SERVICE_CITIES.map((c) => ({ "@type": "City", name: c })),
    audience: {
      "@type": "Audience",
      audienceType: "Privatinvestoren, Selbstständige, Angestellte mit Vermögensaufbau-Fokus"
    },
    description:
      "Strategische Vermittlung und Prüfung von Anlageimmobilien (Neubau, Bestand, Denkmal) — deutschlandweit. Inklusive Standort- und Mietpotenzial-Analyse, Finanzierungs-Sparring und steuerlicher Einordnung.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      url: `${SITE_URL}/#kontakt`
    }
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Anlageimmobilien", item: `${SITE_URL}/#objekte` },
      { "@type": "ListItem", position: 3, name: "Investment-Check", item: `${SITE_URL}/#kontakt` }
    ]
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a
      }
    }))
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SITE_URL,
    name: "Süba Dragon Wohnbau GmbH",
    inLanguage: "de-DE",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Script id="ld-business" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLd) }} />
      <Script id="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <Script id="ld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Script id="ld-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />

      <div className="grain" aria-hidden />
      <CursorSpotlight />
      <ScrollProgress />

      <SiteNav />

      <main className="relative">
        <Hero />
        <TrustStrip />
        <Manifesto />
        <Framework />
        <Portfolio />
        <Process />
        <Voices />
        <Contact />
        <Faq />
        <Closing />
      </main>

      <Footer />
      <MobileStickyCta />
    </>
  );
}
