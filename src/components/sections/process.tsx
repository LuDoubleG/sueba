"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/lib/data";
import { MagneticButton } from "@/components/ui/magnetic-button";

const ease = [0.2, 0.7, 0.2, 1] as const;

const stepDetails = [
  "Ein offener Erstdialog. Wir hören zu, ordnen ein und zeigen, ob ein nächster Schritt überhaupt sinnvoll ist.",
  "Wir prüfen Ziele, Bonität, Liquidität und Steuersituation — als Grundlage für eine tragfähige Strategie.",
  "Aus geprüften Objekten wählen wir nur die aus, die zu Ihrer Strategie passen — mit klarer Chancen-Risiko-Sicht.",
  "Vom Notar bis zur Übergabe begleiten wir den Prozess und vernetzen mit Finanzierung, Steuern und Verwaltung."
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="prozess" ref={ref} className="relative border-t border-bone/10 bg-coal">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-1/3 h-[420px] w-[420px] rounded-full bg-gold/15 blur-[120px]" />
      </div>
      <div className="shell relative section">
        <div className="mb-12 flex items-center justify-between font-mono text-[10px] uppercase tracking-wide3 text-ash md:mb-16">
          <div className="flex items-center gap-3">
            <span className="dot" />
            <span>05 — Prozess</span>
          </div>
          <span>So arbeiten wir</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
            <p className="eyebrow mb-6">Vorgehen</p>
            <h2 className="headline text-5xl text-bone md:text-6xl lg:text-7xl">
              Vom Gespräch <br />
              <span className="italic text-gradient-warm">zur Übergabe.</span>
            </h2>
            <p className="mt-8 max-w-md text-bone/70">
              Klarer Ablauf, realistische Einordnung und Begleitung bis zur Umsetzung. Nichts wird übersprungen, nichts wird beschönigt.
            </p>
            <div className="mt-10 space-y-3">
              <MagneticButton href="#kontakt" size="lg" pulse>
                Jetzt Termin sichern
              </MagneticButton>
              <p className="font-mono text-[10px] uppercase tracking-wide3 text-bone/50">
                Antwort innerhalb 24 h · keine Verkaufsgespräche
              </p>
            </div>
            <a
              href="tel:+4962139993141"
              className="cta-ghost mt-8 inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm"
            >
              <span className="font-mono text-[10px] text-gold">↗</span>
              <span>0621 3999 3141 — direkt anrufen</span>
            </a>
          </div>

          <div className="relative lg:col-span-7">
            {/* timeline base + animated line */}
            <div className="absolute left-5 top-0 h-full w-px bg-bone/10 md:left-7" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-5 top-0 w-px origin-top bg-gradient-to-b from-gold via-bone to-transparent md:left-7"
            />

            <ol className="space-y-14">
              {processSteps.map((step, i) => (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: i * 0.06, duration: 0.7, ease }}
                  className="relative pl-16 md:pl-20"
                >
                  <span className="absolute left-0 top-1 inline-flex h-11 w-11 items-center justify-center rounded-full border border-bone/15 bg-graphite font-mono text-[11px] tabular text-bone md:left-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-bone md:text-3xl text-2xl" style={{ fontFamily: "var(--font-display)", lineHeight: 1.15, letterSpacing: "-0.015em" }}>{step}</h3>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-bone/65">{stepDetails[i]}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
