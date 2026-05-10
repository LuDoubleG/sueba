"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Building2, Phone } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CityRotator } from "@/components/effects/city-rotator";

const lines: { kind: "sans" | "serif"; text: string; align?: "left" | "right" | "center" }[] = [
  { kind: "sans", text: "Konditionen", align: "left" },
  { kind: "serif", text: "ohne Aufschlag.", align: "left" },
  { kind: "sans", text: "Strategie", align: "right" },
  { kind: "serif", text: "ohne Bankendruck.", align: "right" }
];

const ease = [0.2, 0.7, 0.2, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yPanel = useTransform(scrollY, [0, 800], [0, -60]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden pb-3 pt-14 md:min-h-0 md:pb-10 md:pt-16 lg:pb-16 lg:pt-20"
    >
      {/* aurora background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="aurora-blob h-[380px] w-[380px] -left-32 top-12 bg-electric/40 animate-breathe" />
        <div className="aurora-blob h-[480px] w-[480px] -right-32 top-20 bg-ember/30 animate-drift" />
        <div className="aurora-blob h-[320px] w-[320px] left-1/2 bottom-0 -translate-x-1/2 bg-gold/25 animate-breathe" />
        <div className="absolute inset-0 blueprint opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" />
      </div>

      {/* meta strip — top (desktop only, spart vertikalen Platz auf Mobile) */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease }}
        className="shell relative z-10 hidden flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[10px] font-mono uppercase tracking-wide3 text-ash md:flex lg:justify-between lg:gap-3"
      >
        <div className="flex items-center gap-3">
          <span className="dot" />
          <span>Süba Dragon Wohnbau GmbH</span>
          <span className="text-bone/30">/</span>
          <span>Baufinanzierung &amp; Kredite — deutschlandweit</span>
        </div>
        <div className="hidden items-center gap-6 lg:flex">
          <span className="inline-flex items-center gap-2">
            <span>Bestzins für</span>
            <CityRotator />
          </span>
        </div>
      </motion.div>

      {/* main grid — Mobile: flex-1 + center für 100svh-Fill. Tablet/Desktop: content-driven */}
      <div className="shell relative z-10 flex flex-1 items-center pt-1 md:flex-none md:items-start md:pt-3 lg:pt-6">
        <div className="grid w-full items-center gap-5 md:gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10 xl:gap-14">
          {/* LEFT — Eyebrow + Headline (Desktop) | Eyebrow + Headline + PropertyCard + Action (Mobile/Tablet)
              Tablet: alles in zentriertem Container, ausbalanciert. Desktop: linksbündig in LEFT col. */}
          <div className="relative md:mx-auto md:max-w-2xl md:text-center lg:mx-0 lg:max-w-none lg:text-left">
            {/* MOBILE eyebrow */}
            <div className="mb-2 flex items-center gap-2 md:hidden">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/[0.08] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide3 text-gold">
                <Building2 className="h-3 w-3" />
                Baufinanzierung · Deutschlandweit
              </span>
            </div>

            {/* DESKTOP eyebrow with property thumbnails */}
            <div className="mb-3 hidden items-center gap-3 md:flex md:justify-center lg:mb-4 lg:justify-start">
              <div className="flex -space-x-1.5">
                {[
                  {
                    src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=140&q=80",
                    alt: "Modernes Einfamilienhaus — Erstfinanzierung"
                  },
                  {
                    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=140&q=80",
                    alt: "Bestandsimmobilie — Anschlussfinanzierung"
                  },
                  {
                    src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=140&q=80",
                    alt: "Energetische Sanierung — Modernisierungskredit mit KfW-Förderung"
                  }
                ].map((m, i) => (
                  <div key={i} className="relative h-6 w-6 overflow-hidden rounded-full border-2 border-ink ring-1 ring-bone/15">
                    <Image src={m.src} alt={m.alt} fill className="object-cover" sizes="24px" />
                  </div>
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide3 text-bone/70">
                <Building2 className="h-3 w-3 text-gold" />
                Baufinanzierung · 400+ Banken · Deutschlandweit
              </span>
            </div>

            <h1
              aria-label="Baufinanzierung, Anschlussfinanzierung und Privatkredite — neutral verglichen aus über 400 Banken in Mannheim, Frankfurt, Stuttgart, München, Berlin, Hamburg und deutschlandweit. Süba Dragon Wohnbau GmbH."
              className="relative text-bone text-[clamp(38px,10vw,52px)] md:text-[clamp(48px,6.4vw,72px)] lg:text-[clamp(56px,7.2vw,104px)]"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-0.025em",
                lineHeight: 1.02
              }}
            >
              {/* Mobile: stacked single col. Tablet (md): 2x2 grid zentriert. Desktop (lg+): stacked mit Alternation. */}
              <span className="block md:grid md:grid-cols-[auto_auto] md:items-baseline md:justify-center md:gap-x-3 md:gap-y-0 lg:block">
                {lines.map((line, i) => (
                  <KineticLine key={i} index={i} {...line} />
                ))}
              </span>
            </h1>

            {/* SEO-relevanter Untertitel für Crawler */}
            <p className="sr-only">
              Süba Dragon Wohnbau GmbH — unabhängige Vermittlung von Baufinanzierung, Anschlussfinanzierung,
              Forward-Darlehen, KfW-Förderung, Modernisierungskrediten und Privatkrediten. Vergleich aus über
              400 Banken, Sparkassen, Versicherern und Bausparkassen. Kostenlose persönliche Beratung in
              Mannheim, Heidelberg, Ludwigshafen, Frankfurt am Main, Stuttgart, Karlsruhe, Köln, Düsseldorf,
              Hamburg, Berlin, München, Leipzig, Dresden, Nürnberg, Hannover und deutschlandweit.
            </p>

            {/* MOBILE Property Visual Card — UNTER Headline */}
            <MobilePropertyCard />

            {/* MOBILE-only Action Block. Desktop hat eigenen Block in rechter Spalte. */}
            <div className="lg:hidden">
              <HeroActionBlock />
            </div>
          </div>

          {/* RIGHT — Property Showcase Card + ActionBlock (lg+ only) */}
          <motion.div
            style={{ y: yPanel }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7, ease }}
            className="relative ml-auto hidden w-full max-w-[520px] lg:block"
          >
            <div className="surface relative overflow-hidden">
              {/* Image header — kompakter, damit ActionBlock drunter passt */}
              <div className="relative h-[240px] overflow-hidden xl:h-[280px]">
                <Image
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=88"
                  alt="Modernes Einfamilienhaus in Deutschland — Beispielrechnung Baufinanzierung mit 15-jähriger Zinsbindung, 400+ Banken im Vergleich, KfW-Förderung integriert. Süba Dragon Wohnbau."
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 32rem, 0px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/30 to-transparent" />

                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-coal/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide3 text-gold backdrop-blur">
                  <Building2 className="h-3 w-3" />
                  Beispielrechnung
                </div>
                <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-bone/15 bg-coal/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide3 text-bone backdrop-blur">
                  <span className="dot" />
                  Bestzins-Indikation
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wide3 text-bone/70">Zinsbindung 15 Jahre</p>
                    <p
                      className="text-[30px] leading-none text-bone"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      ab <span className="italic text-gold">3,12 % eff.</span>
                    </p>
                  </div>
                  <div className="rounded-xl border border-bone/15 bg-coal/75 px-2.5 py-1.5 text-right backdrop-blur">
                    <p className="font-mono text-[9px] uppercase tracking-wide3 text-ash">Stand</p>
                    <p className="font-mono text-[13px] text-bone">live</p>
                  </div>
                </div>
              </div>

              {/* Data section — extra kompakt */}
              <div className="p-3.5 xl:p-4">
                <div className="flex items-center justify-between border-b border-bone/10 pb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wide3 text-ash">Konditions-Monitor</span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide3 text-bone/80">
                    <span className="dot" /> tagesaktuell
                  </span>
                </div>
                <div className="mt-2.5 space-y-2">
                  {[
                    { k: "Banken im Vergleich", v: 92 },
                    { k: "KfW-Förderprüfung", v: 100 },
                    { k: "Bonitätsstrukturierung", v: 88 }
                  ].map((b, i) => (
                    <div key={b.k}>
                      <div className="mb-1 flex items-center justify-between font-mono text-[10px] uppercase tracking-wide3 text-ash">
                        <span>{b.k}</span>
                        <span className="text-bone">{b.v}</span>
                      </div>
                      <div className="h-[3px] w-full overflow-hidden rounded-full bg-bone/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${b.v}%` }}
                          transition={{ delay: 1.1 + i * 0.12, duration: 1.2, ease }}
                          className="h-full bg-gradient-to-r from-gold via-bone to-ember"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* DESKTOP Action Block — direkt unter der Property Card */}
            <div className="mt-5 hidden lg:block">
              <HeroActionBlock />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroActionBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.85, duration: 0.6, ease }}
      className="mt-3 max-w-xl md:mx-auto md:mt-5 md:text-center lg:mx-0 lg:mt-0 lg:max-w-none lg:text-left"
    >
      {/* Mobile: kürzer. Desktop: prägnante Subline (Stadt-Mentions sind in sr-only + JSON-LD). */}
      <p className="hidden text-[15px] leading-snug text-bone/85 lg:block">
        <strong className="font-medium text-bone">Kostenloser Konditions-Check</strong> — neutrale
        Bestzins-Indikation aus 400+ Banken, abgestimmt auf Ihre Bonität.
        <span className="italic text-bone"> Kein Verkaufsdruck.</span>
      </p>
      <p className="text-balance text-[15.5px] leading-snug text-bone/85 md:text-[16px] lg:hidden">
        <strong className="font-medium text-bone">Konditionen vergleichen</strong> aus 400+ Banken — neutral
        und Schufa-neutral. <span className="italic text-bone">Bestzins, nicht Hausbankzins.</span>
      </p>

      {/* CTA-Group */}
      <div className="mt-3.5 flex items-stretch gap-2.5 md:mt-4 md:flex-wrap md:items-center md:justify-center md:gap-3 lg:justify-start">
        <a
          href="tel:+4962139993141"
          aria-label="0621 3999 3141 anrufen"
          className="cta-ghost group inline-flex aspect-square h-[56px] w-[56px] shrink-0 items-center justify-center rounded-2xl md:hidden"
        >
          <Phone className="h-5 w-5 text-gold" strokeWidth={2.2} />
        </a>
        <div className="flex-1 md:flex-none">
          <MagneticButton href="#kontakt" size="lg" pulse>
            <span className="md:hidden">Bestzins kostenlos prüfen</span>
            <span className="hidden md:inline">Jetzt Bestzins kostenlos prüfen</span>
          </MagneticButton>
        </div>
        <a
          href="tel:+4962139993141"
          className="cta-ghost group hidden items-center gap-2.5 rounded-full px-5 py-3.5 text-[14px] md:inline-flex"
        >
          <Phone className="h-3.5 w-3.5 text-gold" />
          <span>0621 3999 3141</span>
        </a>
      </div>

      <p className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10.5px] uppercase tracking-wide3 text-bone/60 md:mt-3 md:justify-center md:text-[10px] lg:justify-start">
        <span className="inline-flex items-center gap-1.5"><span className="text-gold">✦</span> 100 % kostenlos</span>
        <span className="inline-flex items-center gap-1.5"><span className="text-gold">✦</span> unverbindlich</span>
        <span className="inline-flex items-center gap-1.5"><span className="text-gold">✦</span> Antwort &lt; 24 h</span>
      </p>
    </motion.div>
  );
}

function MobilePropertyCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.35, duration: 0.7, ease }}
      className="relative mt-4 text-left md:mx-auto md:mt-5 md:max-w-2xl lg:hidden"
    >
      <div
        aria-hidden
        className="absolute -bottom-1.5 left-3 right-3 h-3 rounded-b-2xl border-x border-b border-bone/10 bg-bone/[0.03] md:-bottom-2 md:h-4"
      />

      <div className="surface relative overflow-hidden rounded-2xl shadow-[0_18px_60px_-18px_rgba(0,0,0,0.6),0_0_60px_-20px_rgba(217,183,121,0.35)] md:rounded-3xl">
        <div className="relative h-[148px] overflow-hidden md:h-[260px]">
          <Image
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=88"
            alt="Modernes Einfamilienhaus — Beispiel Baufinanzierung mit Bestzins aus über 400 Banken, KfW-Förderung und 15-jähriger Zinsbindung deutschlandweit"
            fill
            priority
            sizes="(min-width: 768px) 720px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/55 to-coal/0" />
          <div className="absolute inset-0 bg-gradient-to-r from-coal/50 via-transparent to-transparent" />

          {/* Top row */}
          <div className="absolute left-2.5 right-2.5 top-2.5 flex items-start justify-between md:left-4 md:right-4 md:top-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-coal/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide3 text-gold backdrop-blur md:px-3 md:py-1.5">
              <Building2 className="h-3 w-3" />
              Beispielrechnung
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-bone/20 bg-coal/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide3 text-bone backdrop-blur md:px-3 md:py-1.5">
              <span className="dot" />
              Bestzins
            </span>
          </div>

          {/* Bottom row — Konditions-Indikation */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-end justify-between gap-3 md:bottom-4 md:left-4 md:right-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wide3 text-bone/70 md:text-[11px]">Zinsbindung 15 Jahre</p>
              <p
                className="text-[26px] leading-none text-bone md:text-[40px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ab <span className="italic text-gold">3,12 %</span>
              </p>
            </div>
            <div className="rounded-xl border border-bone/15 bg-coal/80 px-2.5 py-1.5 text-right backdrop-blur md:px-3 md:py-2">
              <p className="font-mono text-[9px] uppercase tracking-wide3 text-ash md:text-[10px]">Stand</p>
              <p className="font-mono text-[12px] leading-tight text-bone md:text-[14px]">live</p>
            </div>
          </div>
        </div>

        {/* Info bar darunter */}
        <div className="flex items-center justify-between border-t border-bone/10 px-3 py-2 md:px-4 md:py-3">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex -space-x-1.5">
              {[
                {
                  src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=120&q=80",
                  alt: "Eigenheim Erstfinanzierung"
                },
                {
                  src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=120&q=80",
                  alt: "Bestand Anschlussfinanzierung"
                },
                {
                  src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=120&q=80",
                  alt: "Modernisierungskredit & KfW-Sanierung"
                }
              ].map((m, i) => (
                <div
                  key={i}
                  className="relative h-5 w-5 overflow-hidden rounded-full border-2 border-coal ring-1 ring-bone/15 md:h-6 md:w-6"
                >
                  <Image src={m.src} alt={m.alt} fill className="object-cover" sizes="24px" />
                </div>
              ))}
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wide3 text-bone/70 md:text-[11px]">
              400+ Banken · Deutschlandweit
            </span>
          </div>
          <span className="font-mono text-[11px] text-gold md:text-[13px]">→</span>
        </div>
      </div>
    </motion.div>
  );
}

function KineticLine({ index, kind, text, align = "left" }: { index: number; kind: "sans" | "serif"; text: string; align?: "left" | "right" | "center" }) {
  const isSerif = kind === "serif";
  // Mobile: linksbündig stacked. Tablet: in 2x2 Grid platziert (justify spielt keine Rolle).
  // Desktop (lg+): alternierendes Layout für visuelle Spannung in der LEFT column.
  const alignCls =
    align === "right"
      ? "justify-start lg:justify-end"
      : align === "center"
        ? "justify-start lg:justify-center"
        : "justify-start";
  // w-full auf Mobile + Desktop (block layout). Auf Tablet (md) → inline-flex mit auto-width für 2x2 Grid.
  return (
    <span
      className={`flex w-full overflow-hidden md:inline-flex md:w-auto lg:flex lg:w-full ${alignCls}`}
      style={{ paddingTop: "0.1em", paddingBottom: isSerif ? "0.4em" : "0.2em" }}
    >
      <motion.span
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ delay: 0.15 + index * 0.1, duration: 0.95, ease }}
        className={`block ${isSerif ? "italic text-gradient-warm" : "tracking-crisp text-bone"}`}
        style={{
          fontFamily: isSerif ? "var(--font-display)" : "var(--font-sans)",
          fontWeight: isSerif ? 400 : 500,
          lineHeight: isSerif ? 1.18 : 1.0
        }}
      >
        {text}
      </motion.span>
    </span>
  );
}
