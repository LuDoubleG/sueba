"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { LocalTime } from "@/components/effects/local-time";

const ease = [0.2, 0.7, 0.2, 1] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-bone/10 bg-coal">
      {/* Conversion banner — kompakter */}
      <div className="relative border-b border-bone/10 bg-gradient-to-br from-bone/[0.06] via-coal to-coal">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-0 h-[320px] w-[320px] rounded-full bg-gold/15 blur-[100px]" />
          <div className="absolute -right-16 bottom-0 h-[280px] w-[280px] rounded-full bg-electric/15 blur-[100px]" />
          <div className="absolute inset-0 blueprint opacity-25" />
        </div>

        <div className="shell relative py-10 md:py-14">
          <div className="grid items-center gap-7 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/[0.08] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide3 text-gold">
                <span className="dot" />
                Kostenlos · unverbindlich · in 60 Sek
              </span>
              <h2
                className="mt-4 text-bone"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(34px, 6vw, 72px)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.025em",
                  paddingBottom: "0.12em"
                }}
              >
                Bereit für Ihren <span className="italic text-gradient-warm">Investment-Check?</span>
              </h2>
              <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-bone/75 md:mt-4 md:text-[15.5px]">
                Ein 30-Minuten-Erstgespräch klärt, ob eine Anlageimmobilie zu Ihrer Situation passt — kein
                Verkaufsgespräch, keine versteckten Kosten.
              </p>
              <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-wide3 text-bone/55">
                <span className="inline-flex items-center gap-1.5"><span className="text-gold">✦</span> 100 % kostenlos</span>
                <span className="inline-flex items-center gap-1.5"><span className="text-gold">✦</span> unverbindlich</span>
                <span className="inline-flex items-center gap-1.5"><span className="text-gold">✦</span> Antwort &lt; 24 h</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="grid gap-2.5"
            >
              <a
                href="#kontakt"
                className="cta-primary cta-pulse group relative flex items-center justify-between overflow-hidden rounded-2xl px-5 py-4"
              >
                <span className="relative z-10 flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-wide3 text-ink/55">Hauptaktion</span>
                  <span className="mt-0.5 text-base font-semibold leading-tight md:text-lg">Jetzt kostenlos prüfen lassen</span>
                </span>
                <span
                  className="relative z-10 ml-3 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-gold transition-transform duration-300 group-hover:rotate-[12deg]"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.16), rgba(15,12,10,0.96) 65%)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 0 0 1px rgba(217,183,121,0.45), 0 0 18px -6px rgba(217,183,121,0.6)"
                  }}
                >
                  <ArrowUpRight className="h-[17px] w-[17px]" strokeWidth={2.5} />
                </span>
              </a>
              {/* Phone + Email kompakt nebeneinander */}
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="tel:+4962139993141"
                  className="cta-ghost group flex flex-col gap-0.5 rounded-2xl px-4 py-3.5"
                >
                  <span className="flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-wide3 text-gold/85">
                    <Phone className="h-3 w-3" /> Anrufen
                  </span>
                  <span className="text-[14px] font-semibold leading-tight text-bone md:text-[15px]">0621 3999 3141</span>
                </a>
                <a
                  href="mailto:info@sueba-wohnbau.de"
                  className="cta-ghost group flex flex-col gap-0.5 rounded-2xl px-4 py-3.5"
                >
                  <span className="flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-wide3 text-gold/85">
                    <Mail className="h-3 w-3" /> E-Mail
                  </span>
                  <span className="truncate text-[13px] leading-tight text-bone md:text-[14px]">info@sueba-wohnbau.de</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee divider — kompakter */}
      <div className="border-b border-bone/10 py-3">
        <Marquee speed="slow" reverse>
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="mx-6 inline-flex items-center gap-6 text-2xl text-bone/10 md:text-4xl"
              style={{ fontFamily: "var(--font-display)", lineHeight: 1.1 }}
            >
              <span>Süba Dragon Wohnbau</span>
              <span className="text-gold">★</span>
              <span className="italic">Strategie vor Objekt</span>
              <span className="text-gold">★</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* footer body — kompakter */}
      <div className="shell pb-6 pt-10 md:pt-14">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand — kompakt */}
          <div className="md:col-span-2 lg:col-span-4">
            <div className="relative h-11 w-[180px]">
              <Image src="/sueba-dragon-logo-white.png" alt="Süba Dragon Wohnbau GmbH — Immobilien als Kapitalanlage" fill className="object-contain object-left" />
            </div>
            <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-bone/65">
              Strategische Vermittlung von Anlageimmobilien — deutschlandweit. Mit Fokus auf Standort,
              Finanzierung und Mietpotenzial. Kein Verkaufsdruck.
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {["Strategie vor Objekt", "Geprüfte Standorte", "Persönliche Analyse"].map((b) => (
                <li
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full border border-bone/12 bg-bone/[0.02] px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-wide3 text-bone/70"
                >
                  <span className="text-gold">✦</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <FooterCol title="Navigation">
            <FooterLink href="#manifest">Manifest</FooterLink>
            <FooterLink href="#framework">Ansatz</FooterLink>
            <FooterLink href="#portfolio">Beispiele</FooterLink>
            <FooterLink href="#prozess">Prozess</FooterLink>
            <FooterLink href="#faq">FAQ</FooterLink>
          </FooterCol>

          {/* Standorte — 2-spaltig auf Mobile/Desktop für kompakteres Layout */}
          <div className="md:col-span-1 lg:col-span-3">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-wide3 text-ash">Standorte</p>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-[13px]">
              {[
                "Mannheim",
                "Frankfurt",
                "Stuttgart",
                "Heidelberg",
                "München",
                "Hamburg",
                "Berlin",
                "Köln",
                "Düsseldorf",
                "Leipzig"
              ].map((s) => (
                <li key={s}>
                  <a href="#kontakt" className="text-bone/75 transition hover:text-bone">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterCol title="Kontakt">
            <li>
              <a href="tel:+4962139993141" className="inline-block text-bone transition hover:text-gold">
                0621 3999 3141
              </a>
            </li>
            <li>
              <a href="mailto:info@sueba-wohnbau.de" className="inline-block text-bone transition hover:text-gold">
                info@sueba-wohnbau.de
              </a>
            </li>
            <li className="flex items-center gap-1.5 text-bone/65">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-ash" />
              <span>Mannheim · DE</span>
            </li>
          </FooterCol>

          <FooterCol title="Rechtliches">
            <FooterLink href="/datenschutz">Datenschutz</FooterLink>
            <FooterLink href="/impressum">Impressum</FooterLink>
            <FooterLink href="/agb">AGB</FooterLink>
          </FooterCol>
        </div>

        {/* Klappbares SEO-Feld — versteckt Tätigkeitsfeld-Text per details/summary */}
        <details className="group mt-8 rounded-2xl border border-bone/10 bg-bone/[0.02]">
          <summary className="flex cursor-pointer items-center justify-between gap-3 px-4 py-3 font-mono text-[10px] uppercase tracking-wide3 text-ash transition hover:text-bone md:px-5">
            <span>Tätigkeitsfeld & Standorte (Details)</span>
            <span className="text-bone/40 transition group-open:rotate-180">▾</span>
          </summary>
          <div className="border-t border-bone/10 px-4 py-3 text-[11.5px] leading-relaxed text-bone/55 md:px-5 md:py-4 md:text-[12px]">
            Süba Dragon Wohnbau GmbH vermittelt <strong className="text-bone/80">Immobilien als Kapitalanlage</strong> für
            Privatinvestoren in Deutschland. Schwerpunkte: Anlageimmobilien & Renditeobjekte, Bestandsimmobilien,
            Neubau-Kapitalanlagen, Denkmalimmobilien (AfA-Sonderabschreibung). Beratungsleistung: Standortanalyse,
            Mietrendite-Berechnung, Eigenkapitalrendite, Cashflow-Prüfung, Finanzierungs-Sparring, steuerliche Einordnung.
            Aktive Vermittlung in <strong className="text-bone/80">Mannheim, Heidelberg, Ludwigshafen, Frankfurt am Main,
            Stuttgart, Karlsruhe, Worms, Mainz, Wiesbaden, Köln, Düsseldorf, Hamburg, Berlin, München, Leipzig, Dresden,
            Nürnberg, Hannover, Bremen, Bonn</strong> sowie weiteren A-, B- und C-Standorten.
          </div>
        </details>

        {/* Risk disclaimer — kompakt */}
        <p className="mt-4 rounded-2xl border border-bone/10 bg-bone/[0.02] px-4 py-3 text-[11px] leading-relaxed text-bone/55 md:px-5">
          <strong className="font-medium text-bone/75">Hinweis:</strong> Diese Website stellt keine Anlage-, Rechts- oder Steuerberatung dar.
          Immobilieninvestitionen sind mit Risiken verbunden (Leerstand, Zinsänderung, Wertentwicklung, Instandhaltung).
          Individuelle Prüfung Ihrer Situation erforderlich.
        </p>

        {/* Bottom strip — extra kompakt */}
        <div className="mt-5 flex flex-col items-start justify-between gap-2 border-t border-bone/10 pt-4 font-mono text-[9.5px] uppercase tracking-wide3 text-ash md:flex-row md:items-center">
          <div className="flex items-center gap-2.5">
            <span className="dot" />
            <span>MA · DE</span>
            <span className="text-bone/30">/</span>
            <LocalTime />
          </div>
          <p>© {new Date().getFullYear()} Süba Dragon Wohnbau GmbH</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="md:col-span-1 lg:col-span-2">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-wide3 text-ash">{title}</p>
      <ul className="flex flex-col gap-2 text-[13px]">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="group relative inline-flex w-fit items-center text-bone/75 transition hover:text-bone"
      >
        <span className="relative">
          {children}
          <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </span>
      </a>
    </li>
  );
}
