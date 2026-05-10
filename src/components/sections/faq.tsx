"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus, Phone, ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";

const ease = [0.2, 0.7, 0.2, 1] as const;
const MOBILE_VISIBLE = 5;

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section id="faq" className="relative border-t border-bone/10 bg-ink section" itemScope itemType="https://schema.org/FAQPage">
      <div className="shell">
        <div className="mb-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-wide3 text-ash md:mb-16">
          <div className="flex items-center gap-3">
            <span className="dot" />
            <span>08 — FAQ</span>
          </div>
          <span>Baufinanzierung &amp; Kredite · FAQ</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="headline text-4xl text-bone sm:text-5xl md:text-6xl lg:text-[72px]">
              Klare Antworten<br />
              <span className="italic text-gradient-warm">auf wichtige Fragen.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-bone/75">
              Die wichtigsten Fragen rund um <strong className="font-medium text-bone">Baufinanzierung,
              Anschlussfinanzierung und Privatkredite</strong> — Bauzinsen, KfW-Förderung, Tilgung,
              Forward-Darlehen und Eigenkapital. Ehrlich beantwortet von Süba Dragon Wohnbau aus Mannheim.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-bone/55">
              Frage nicht dabei? Ruf direkt an oder schreib uns — wir antworten persönlich, nicht aus dem Bausteinkasten.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+4962139993141"
                className="cta-ghost inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm"
              >
                <Phone className="h-3.5 w-3.5 text-gold" />
                0621 3999 3141
              </a>
              <a href="#kontakt" className="cta-primary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">
                <span className="relative z-10">Bestzins kostenlos sichern →</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="border-t border-bone/10">
              {faqs.map((item, i) => {
                const isOpen = open === i;
                const isHiddenOnMobile = !showAllMobile && i >= MOBILE_VISIBLE;
                return (
                  <li
                    key={item.q}
                    className={`border-b border-bone/10 ${isHiddenOnMobile ? "hidden lg:block" : ""}`}
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-start gap-3 py-4 text-left transition md:gap-6 md:py-6"
                    >
                      <span className="mt-1 font-mono text-[10px] uppercase tracking-wide3 text-ash group-hover:text-gold md:text-[11px]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3
                        itemProp="name"
                        className="flex-1 text-[15px] text-bone md:text-2xl"
                        style={{ fontFamily: "var(--font-display)", lineHeight: 1.25, letterSpacing: "-0.015em" }}
                      >
                        {item.q}
                      </h3>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.4, ease }}
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-bone/15 bg-bone/[0.02] text-bone group-hover:bg-bone group-hover:text-ink md:h-9 md:w-9"
                      >
                        <Plus className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      </motion.span>
                    </button>
                    {/* Hidden answer for SEO crawlers — always rendered */}
                    {!isOpen ? (
                      <div className="sr-only" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <span itemProp="text">{item.a}</span>
                      </div>
                    ) : null}
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.36, ease }}
                          className="overflow-hidden"
                          itemScope
                          itemProp="acceptedAnswer"
                          itemType="https://schema.org/Answer"
                        >
                          <p
                            itemProp="text"
                            className="pb-5 pl-7 pr-2 text-[14px] leading-relaxed text-bone/75 md:pb-7 md:pl-12 md:pr-12 md:text-base"
                          >
                            {item.a}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>

            {/* Show-more on mobile only */}
            {!showAllMobile && faqs.length > MOBILE_VISIBLE ? (
              <button
                onClick={() => setShowAllMobile(true)}
                className="mt-5 inline-flex w-full items-center justify-between gap-3 rounded-2xl border border-bone/15 bg-bone/[0.02] px-5 py-4 text-[13px] text-bone transition hover:border-gold/40 hover:bg-bone/5 lg:hidden"
              >
                <span className="font-mono text-[10px] uppercase tracking-wide3 text-ash">FAQ</span>
                <span className="flex-1 text-left">
                  + {faqs.length - MOBILE_VISIBLE} weitere Fragen anzeigen
                </span>
                <ChevronDown className="h-4 w-4 text-gold" />
              </button>
            ) : null}

            <div className="mt-8 rounded-2xl border border-gold/25 bg-gold/[0.06] p-4 text-[13px] leading-relaxed text-bone/85 md:mt-10 md:p-5 md:text-sm">
              <p>
                <span className="font-medium text-gold">Wichtiger Hinweis:</span> Diese FAQ ersetzt keine
                individuelle Finanzierungs-, Steuer- oder Rechtsberatung. Süba Dragon Wohnbau ist
                Immobiliardarlehensvermittler nach § 34 i GewO und prüft Ihre persönliche Situation im
                kostenlosen Konditions-Check. Konditionen sind tagesabhängig und bonitätsabhängig.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
