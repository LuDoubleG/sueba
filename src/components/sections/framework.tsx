"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Building2, Coins, HandCoins, Landmark, ShieldCheck, Sparkles } from "lucide-react";
import { framework, solutions } from "@/lib/data";
import { MagneticButton } from "@/components/ui/magnetic-button";

const ease = [0.2, 0.7, 0.2, 1] as const;
const solutionIcons = [Building2, HandCoins, ShieldCheck, Landmark, Coins, Sparkles];

const differentiators = [
  "400+ Banken im strukturierten Vergleich — nicht nur Hausbank",
  "Schufa-neutrale Konditionsabfrage vor Erstantrag",
  "KfW-Förderung & Landesprogramme integriert geprüft",
  "Tilgungs-, Sondertilgungs- & Forward-Strategien individuell",
  "Konditions-Stresstest für Anschlussfinanzierung",
  "Persönliche Begleitung bis Auszahlung — keine Lead-Maschine"
];

export function Framework() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const headlineY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="framework" ref={ref} className="section relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 blueprint opacity-30" />
      </div>

      <div className="shell relative">
        <div className="mb-12 flex items-center justify-between font-mono text-[10px] uppercase tracking-wide3 text-ash md:mb-16">
          <div className="flex items-center gap-3">
            <span className="dot" />
            <span>03 — Ansatz</span>
          </div>
          <span>Unsere Finanzierungs-Logik</span>
        </div>

        {/* huge editorial headline split across rows */}
        <motion.div style={{ y: headlineY }} className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <h2 className="headline text-[13vw] text-bone sm:text-[10vw] lg:text-[7.4vw] xl:text-[120px]">
              Vier Hebel.
              <br />
              <span className="italic text-gradient-warm">Eine Kondition.</span>
            </h2>
          </div>
          <div className="lg:col-span-3 lg:pt-8">
            <p className="text-balance text-base leading-relaxed text-bone/70">
              Jede Finanzierung wird entlang dieser vier Faktoren strukturiert, damit Bestzins, Tilgungslogik und Risikopuffer
              wirklich zu Ihrer Lebenssituation passen — bevor die erste Bank angefragt wird.
            </p>
          </div>
        </motion.div>

        {/* Pillars: large numbered grid */}
        <div className="mt-20 grid gap-px border border-bone/10 bg-bone/[0.04] sm:grid-cols-2 lg:grid-cols-4">
          {framework.map((item, i) => (
            <PillarCard key={item.title} index={i} title={item.title} text={item.text} />
          ))}
        </div>

        {/* Differentiators + Solutions split */}
        <div className="mt-28 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">Differenzierung</p>
            <h3 className="headline text-4xl text-bone md:text-5xl lg:text-6xl">
              Nicht jeder Zins<br />
              <span className="italic text-gradient-warm">ist Bestzins.</span>
            </h3>
            <p className="mt-6 max-w-md text-bone/70">
              Unser Ansatz trennt Verkauf von Vergleich. Wir prüfen zuerst, welche Bank zu Ihrer Bonität, Ihrem Vorhaben und Ihrer Lebensplanung passt — bevor ein Antrag rausgeht.
            </p>
            <ul className="mt-10 space-y-4">
              {differentiators.map((d, i) => (
                <motion.li
                  key={d}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: i * 0.05, duration: 0.5, ease }}
                  className="group flex items-start gap-4 text-bone/85"
                >
                  <span className="relative mt-2 inline-flex h-2 w-2 shrink-0 rounded-full bg-gold">
                    <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" />
                  </span>
                  <span className="text-[15px] leading-relaxed">{d}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-10 space-y-3">
              <MagneticButton href="#kontakt">Strategiegespräch sichern</MagneticButton>
              <p className="font-mono text-[10px] uppercase tracking-wide3 text-bone/50">
                Kostenlos · ohne Verpflichtung · persönlich
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">Was wir leisten</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {solutions.map((s, i) => {
                const Icon = solutionIcons[i % solutionIcons.length];
                return (
                  <motion.article
                    key={s.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: (i % 2) * 0.08, duration: 0.55, ease }}
                    whileHover={{ y: -4 }}
                    className="group surface relative p-6"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-bone/15 bg-bone/[0.04]">
                        <Icon className="h-4 w-4 text-gold" />
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wide3 text-ash">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h4 className="headline mt-6 text-2xl text-bone">{s.title}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-bone/70">{s.text}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarCard({ index, title, text }: { index: number; title: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.06, duration: 0.7, ease }}
      whileHover={{ y: -2 }}
      className="group relative overflow-hidden bg-coal p-8 transition-colors hover:bg-graphite md:p-10"
    >
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[10px] uppercase tracking-wide3 text-ash">Säule {String(index + 1).padStart(2, "0")}</span>
        <span className="font-mono text-[10px] uppercase tracking-wide3 text-bone/30 transition group-hover:text-gold">●</span>
      </div>
      <h3 className="headline mt-12 text-5xl text-bone md:text-6xl">{title}</h3>
      <p className="mt-6 max-w-xs text-sm leading-relaxed text-bone/65">{text}</p>
      <div className="mt-10 h-px w-full bg-bone/10">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.1, duration: 1, ease }}
          className="h-full origin-left bg-gradient-to-r from-gold via-bone to-transparent"
        />
      </div>
    </motion.div>
  );
}
