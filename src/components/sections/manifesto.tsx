"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { problemItems } from "@/lib/data";
import { MagneticButton } from "@/components/ui/magnetic-button";

const ease = [0.2, 0.7, 0.2, 1] as const;

const phrase = ["Hausbankzins", "ist", "fast", "nie", "Bestzins."];

function PhraseWord({ word, index, progress }: { word: string; index: number; progress: MotionValue<number> }) {
  const start = 0.05 + index * 0.07;
  const end = start + 0.18;
  const op = useTransform(progress, [start, end], [0.18, 1]);
  const blurPx = useTransform(progress, [start, end], [6, 0]);
  const filter = useTransform(blurPx, (v) => `blur(${v}px)`);
  const isItalic = word === "fast";
  return (
    <motion.span
      style={{ opacity: op, filter }}
      className={`mr-4 inline-block ${isItalic ? "italic text-gradient-warm" : "text-bone"}`}
    >
      {word}
    </motion.span>
  );
}

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const blockY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="manifest" ref={ref} className="section relative overflow-hidden border-y border-bone/10 bg-coal">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-electric/15 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-ember/15 blur-[140px]" />
      </div>

      <div className="shell relative">
        <div className="mb-12 flex items-center justify-between font-mono text-[10px] uppercase tracking-wide3 text-ash md:mb-20">
          <div className="flex items-center gap-3">
            <span className="dot" />
            <span>02 — Manifest</span>
          </div>
          <span>Konditionsklarheit</span>
        </div>

        <motion.div style={{ y: blockY }} className="max-w-[1200px]">
          <p className="eyebrow mb-8">Warum jetzt</p>
          <h2 className="headline text-[12vw] text-bone sm:text-[9vw] lg:text-[7vw] xl:text-[110px]">
            {phrase.map((w, i) => (
              <PhraseWord key={i} word={w} index={i} progress={scrollYProgress} />
            ))}
          </h2>
        </motion.div>

        {/* asymmetric problem grid */}
        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-4 lg:col-start-1"
          >
            <p className="text-balance text-base leading-relaxed text-bone/75 md:text-lg">
              Banken vergleichen ihre eigenen Konditionen nicht ehrlich. Schon 0,2 % Zinsdifferenz machen über
              20 Jahre Laufzeit fünfstellige Beträge aus. Wer das erste Hausbank-Angebot unterschreibt, zahlt
              fast immer drauf.
            </p>
          </motion.div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="divide-y divide-bone/10 border-y border-bone/10">
              {problemItems.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: i * 0.06, duration: 0.55, ease }}
                  className="group grid grid-cols-[40px_1fr_auto] items-baseline gap-4 py-6 transition-colors hover:bg-bone/[0.02]"
                >
                  <span className="font-mono text-[11px] uppercase tracking-wide3 text-ash group-hover:text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-relaxed text-bone/85 md:text-lg">{item}</p>
                  <span className="font-mono text-[10px] uppercase tracking-wide3 text-ash opacity-0 transition group-hover:opacity-100">
                    fact
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* inline CTA — converts mid-scroll */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease }}
              className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-gold/20 bg-gold/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between md:p-6"
            >
              <p className="text-[15px] leading-snug text-bone/90">
                <span className="font-medium text-bone">Was zahlen Sie heute zu viel?</span> Wir prüfen es kostenlos und neutral.
              </p>
              <MagneticButton href="#kontakt">Konditionen kostenlos prüfen</MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
