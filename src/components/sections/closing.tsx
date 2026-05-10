"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";

const ease = [0.2, 0.7, 0.2, 1] as const;

export function Closing() {
  return (
    <section className="relative overflow-hidden border-t border-bone/10 bg-coal py-32 md:py-44">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-aurora opacity-50" />
        <div className="absolute inset-0 blueprint opacity-30" />
      </div>
      <div className="shell relative">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease }}
          className="headline mx-auto max-w-[1200px] text-center text-[13vw] text-bone sm:text-[10vw] lg:text-[8vw] xl:text-[140px]"
        >
          Bestzins <br />
          <span className="italic text-gradient-warm">beginnt mit Vergleich.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
          className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-bone/75 md:mt-10 md:text-lg"
        >
          Starten Sie mit einem neutralen Konditionsvergleich aus 400+ Banken statt mit dem Hausbank-Bauchgefühl.
          Wir zeigen Ihnen kostenlos, welche Bank, welche Tilgung und welche Zinsbindung wirklich zu Ihnen passt —
          ohne Verkaufsdruck und ohne Verpflichtung.
        </motion.p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-3">
            <MagneticButton href="#kontakt" size="lg" pulse>
              Bestzins kostenlos sichern
            </MagneticButton>
            <MagneticButton href="tel:+4962139993141" variant="ghost" size="lg">
              0621 3999 3141
            </MagneticButton>
          </div>
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-wide3 text-bone/55">
            <span className="inline-flex items-center gap-1.5"><span className="text-gold">✦</span> 100 % kostenlos</span>
            <span className="inline-flex items-center gap-1.5"><span className="text-gold">✦</span> unverbindlich</span>
            <span className="inline-flex items-center gap-1.5"><span className="text-gold">✦</span> Antwort &lt; 24 h</span>
            <span className="inline-flex items-center gap-1.5"><span className="text-gold">✦</span> persönliches Gespräch</span>
          </p>
        </div>
      </div>
    </section>
  );
}
