"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Marquee } from "@/components/ui/marquee";
import { MagneticButton } from "@/components/ui/magnetic-button";

const ease = [0.2, 0.7, 0.2, 1] as const;

const tickerWords = [
  "Strategie vor Objekt",
  "Substanz vor Versprechen",
  "Standort · Mietmarkt · Finanzierung",
  "Kein Verkaufsdruck",
  "Chancen-Risiko-Bewertung",
  "Renditepotenzial statt Renditeversprechen"
];

export function Voices() {
  return (
    <section className="relative overflow-hidden border-t border-bone/10 bg-ink py-24">
      {/* big marquee word band */}
      <div className="border-y border-bone/10 py-6">
        <Marquee speed="slow">
          {tickerWords.map((w, i) => (
            <span key={i} className="mx-8 inline-flex items-center gap-10 text-5xl text-bone/15 md:text-7xl" style={{ fontFamily: "var(--font-display)", lineHeight: 1.1 }}>
              <span>{w}</span>
              <span className="text-gold">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="shell mt-24">
        <div className="mb-12 flex items-center justify-between font-mono text-[10px] uppercase tracking-wide3 text-ash">
          <div className="flex items-center gap-3">
            <span className="dot" />
            <span>06 — Voices</span>
          </div>
          <span>Vertrauen durch Substanz</span>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="headline text-5xl text-bone md:text-6xl lg:text-[72px]">
              Was Anlegerinnen<br />
              <span className="italic text-gradient-warm">und Anleger sagen.</span>
            </h2>
            <p className="mt-6 max-w-md text-bone/70">
              Unsere Kundinnen und Kunden schätzen vor allem Struktur, Ehrlichkeit und klare Chancen-Risiko-Abwägung.
            </p>
          </div>

          <div className="grid gap-5 lg:col-span-7">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.6, ease }}
                className={`surface p-7 md:p-9 ${i === 1 ? "lg:ml-12" : i === 2 ? "lg:ml-24" : ""}`}
              >
                <span className="mb-4 block text-5xl text-gold" style={{ fontFamily: "var(--font-display)", lineHeight: 0.7 }}>{'\u201C'}</span>
                <blockquote className="text-bone md:text-3xl text-2xl" style={{ fontFamily: "var(--font-display)", lineHeight: 1.2, letterSpacing: "-0.015em" }}>{t.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-wide3 text-ash">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-bone/15 bg-bone/[0.04] text-bone">
                    {t.name.split(" ")[0]?.[0] ?? "·"}
                  </span>
                  <span className="text-bone/85">{t.name}</span>
                  <span className="text-bone/30">·</span>
                  <span>{t.role}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

        {/* CTA bar — psychologisch verstärkt mit social-proof teaser */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="relative mt-16 overflow-hidden rounded-[28px] border border-gold/25 bg-gradient-to-br from-gold/[0.08] via-bone/[0.02] to-ember/[0.06] p-6 shadow-[0_30px_80px_-20px_rgba(217,183,121,0.25)] md:mt-20 md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-[1.2fr_auto] md:items-center md:gap-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wide3 text-gold">Bereit für die nächste Stufe?</p>
              <h3 className="mt-3 text-3xl text-bone md:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-display)", lineHeight: 1.05, letterSpacing: "-0.015em" }}>
                Sichern Sie Ihren <span className="italic text-gradient-warm">kostenlosen Investment-Check.</span>
              </h3>
              <p className="mt-3 text-sm text-bone/65 md:text-base">
                In 60 Sekunden anfragen. Persönliche Antwort innerhalb von 24 Stunden — ohne Verkaufsdruck.
              </p>
            </div>
            <div className="flex flex-col items-stretch gap-3 md:items-end">
              <MagneticButton href="#kontakt" size="lg" pulse>
                Jetzt kostenlos sichern
              </MagneticButton>
              <a
                href="tel:+4962139993141"
                className="cta-ghost inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm"
              >
                <Phone className="h-3.5 w-3.5 text-gold" />
                0621 3999 3141
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
