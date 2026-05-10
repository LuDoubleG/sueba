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
    "@type": "FinancialService",
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
    priceRange: "€",
    image: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=88",
      `${SITE_URL}/sueba-dragon-logo-white.png`
    ],
    logo: `${SITE_URL}/sueba-dragon-logo-white.png`,
    description:
      "Süba Dragon Wohnbau GmbH — unabhängige Vermittlung von Baufinanzierung, Anschlussfinanzierung, Forward-Darlehen, KfW-Förderung, Modernisierungskrediten und Privatkrediten. Konditionsvergleich aus über 400 Banken, Sparkassen, Versicherern und Bausparkassen für Privatkund:innen in Mannheim, Frankfurt, Stuttgart, München, Berlin, Hamburg und deutschlandweit. Immobiliardarlehensvermittler nach § 34 i GewO.",
    url: SITE_URL,
    sameAs: [SITE_URL],
    knowsAbout: [
      "Baufinanzierung",
      "Anschlussfinanzierung",
      "Forward-Darlehen",
      "Volltilgerdarlehen",
      "Annuitätendarlehen",
      "Bauspardarlehen",
      "KfW-Förderung",
      "KfW Wohneigentumsprogramm 124",
      "KfW Wohneigentum für Familien 300",
      "KfW Klimafreundlicher Neubau 261",
      "Modernisierungskredit",
      "Sanierungskredit",
      "Privatkredit",
      "Ratenkredit",
      "Konsumentenkredit",
      "Bauzinsen Vergleich",
      "Bestzins Baufinanzierung",
      "Beleihungsauslauf",
      "Bonitätsanalyse",
      "Tilgungsstrategie"
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Kostenloser Konditions-Check Baufinanzierung",
        description:
          "Neutraler Konditionsvergleich aus über 400 Banken, Sparkassen, Versicherern und Bausparkassen — abgestimmt auf Bonität, Eigenkapital, Vorhaben und Lebensplanung. Inklusive KfW-Förderprüfung. Unverbindlich, kostenfrei, persönlich.",
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
    name: "Baufinanzierung & Kreditvermittlung",
    serviceType: "Vermittlung von Immobiliardarlehen und Verbraucherkrediten",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: SERVICE_CITIES.map((c) => ({ "@type": "City", name: c })),
    audience: {
      "@type": "Audience",
      audienceType:
        "Privatkund:innen, Erstkäufer:innen, Bauherren, Immobilieneigentümer:innen mit Anschlussbedarf, Modernisierer:innen"
    },
    description:
      "Unabhängige Vermittlung von Baufinanzierung, Anschlussfinanzierung, Forward-Darlehen, Modernisierungs- und Privatkrediten — deutschlandweit. Konditionsvergleich aus über 400 Banken, KfW-Förder-Integration, Schufa-neutrale Konditionsabfrage und persönliche Begleitung bis zur Auszahlung.",
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
      { "@type": "ListItem", position: 2, name: "Finanzierungs-Szenarien", item: `${SITE_URL}/#portfolio` },
      { "@type": "ListItem", position: 3, name: "Konditions-Check", item: `${SITE_URL}/#kontakt` }
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

  const imageObjectsLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#hero-image`,
        contentUrl:
          "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=88",
        url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=88",
        caption:
          "Modernes Einfamilienhaus in Deutschland — Beispielrechnung für eine Baufinanzierung mit 15-jähriger Zinsbindung, KfW-Förderung und Bestzins aus über 400 Banken",
        description:
          "Hero-Bild der Süba Dragon Wohnbau GmbH: Modernes Einfamilienhaus, das beispielhaft eine Baufinanzierung mit 15-jähriger Zinsbindung, integrierter KfW-Förderung (124, 261, 300) und tagesaktuellem Bestzinsvergleich aus über 400 Banken visualisiert.",
        width: 1600,
        height: 1067,
        creditText: "Unsplash",
        license: "https://unsplash.com/license",
        acquireLicensePage: "https://unsplash.com/license",
        creator: { "@type": "Organization", name: "Unsplash" },
        copyrightNotice: "Lizenzfrei zur kommerziellen Nutzung gemäß Unsplash-Lizenz",
        representativeOfPage: true
      },
      {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#scenario-erstfinanzierung`,
        contentUrl:
          "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=82",
        caption:
          "Erstfinanzierung Eigenheim — Beispiel modernes Einfamilienhaus mit KfW 300 Wohneigentum für Familien",
        width: 1400,
        height: 933
      },
      {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#scenario-anschlussfinanzierung`,
        contentUrl:
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=82",
        caption:
          "Anschlussfinanzierung & Forward-Darlehen — Beispiel etablierte Bestandsimmobilie mit auslaufender Zinsbindung",
        width: 1400,
        height: 933
      },
      {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#scenario-modernisierung`,
        contentUrl:
          "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1400&q=82",
        caption:
          "Modernisierung & energetische Sanierung — Beispiel Sanierungskredit kombiniert mit KfW 261 Klimafreundlicher Neubau und KfW 358 Bestandsförderung",
        width: 1400,
        height: 933
      }
    ]
  };

  return (
    <>
      <Script id="ld-business" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLd) }} />
      <Script id="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <Script id="ld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Script id="ld-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      <Script id="ld-images" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectsLd) }} />

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
