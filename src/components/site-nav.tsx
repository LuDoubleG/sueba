"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LocalTime } from "@/components/effects/local-time";

const links = [
  { href: "#manifest", label: "Manifest", index: "01" },
  { href: "#framework", label: "Ansatz", index: "02" },
  { href: "#portfolio", label: "Beispiele", index: "03" },
  { href: "#prozess", label: "Prozess", index: "04" },
  { href: "#kontakt", label: "Kontakt", index: "05" }
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
      >
        <div className="shell flex items-center justify-between gap-4">
          <Link href="#top" className="group inline-flex items-center gap-3 shrink-0" aria-label="Süba Dragon Wohnbau — Startseite">
            <div className="relative h-9 w-[140px] md:h-10 md:w-[160px]">
              <Image src="/sueba-dragon-logo-white.png" alt="Süba Dragon Wohnbau GmbH" fill className="object-contain object-left" priority />
            </div>
          </Link>

          {/* Center nav — Desktop only */}
          <nav className="hidden items-center gap-1 rounded-full border border-bone/10 bg-coal/60 px-2 py-2 backdrop-blur-xl lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] tracking-tight text-bone/70 transition hover:text-bone"
              >
                <span className="font-mono text-[10px] tracking-wide3 text-ash group-hover:text-gold">{l.index}</span>
                <span>{l.label}</span>
              </a>
            ))}
          </nav>

          {/* Right cluster — CTA + Burger immer zusammen rechts gruppiert */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* LocalTime — XL only */}
            <div className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-wide3 text-ash xl:flex">
              <span className="dot" />
              MA — DE <span className="text-bone/60">·</span> <LocalTime />
            </div>

            {/* Phone link — Desktop only */}
            <a
              href="tel:+4962139993141"
              className="cta-ghost hidden items-center gap-2 rounded-full px-3.5 py-2 text-[12px] lg:inline-flex"
              aria-label="Anrufen"
            >
              <span className="font-mono text-[10px] text-gold">↗</span>
              <span>0621 3999 3141</span>
            </a>

            {/* Primary CTA — Tablet + Desktop (versteckt auf Mobile, da dort Burger reicht) */}
            <a
              href="#kontakt"
              className="cta-primary group hidden items-center gap-2 rounded-full px-4 py-2.5 text-[12px] font-semibold tracking-tight md:inline-flex"
            >
              <span className="relative z-10">Kostenlos prüfen</span>
              <span className="relative z-10 font-mono text-[10px]">→</span>
            </a>

            {/* Burger — Mobile + Tablet */}
            <button
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-bone/15 bg-coal/70 text-bone backdrop-blur lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Menü öffnen"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.header>

      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[80] bg-ink/95 backdrop-blur-2xl lg:hidden"
        >
          <div className="shell flex h-full flex-col">
            <div className="flex items-center justify-between py-5">
              <div className="relative h-10 w-[160px]">
                <Image src="/sueba-dragon-logo-white.png" alt="Süba Dragon Wohnbau GmbH" fill className="object-contain object-left" />
              </div>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 bg-coal/70 text-bone"
                onClick={() => setOpen(false)}
                aria-label="Menü schließen"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="mt-12 flex flex-1 flex-col justify-center gap-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.05, duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
                  className="flex items-baseline gap-4 text-5xl text-bone"
                  style={{ fontFamily: "var(--font-display)", lineHeight: 1.05 }}
                >
                  <span className="font-mono text-xs tracking-wide3 text-ash">{l.index}</span>
                  <span>{l.label}</span>
                </motion.a>
              ))}
            </nav>
            <div className="mb-8 space-y-3">
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="cta-primary cta-pulse block rounded-full py-4 text-center text-[15px] font-semibold"
              >
                <span className="relative z-10">Jetzt kostenlos prüfen lassen →</span>
              </a>
              <a
                href="tel:+4962139993141"
                onClick={() => setOpen(false)}
                className="cta-ghost block rounded-full py-4 text-center text-[14px]"
              >
                ↗ 0621 3999 3141
              </a>
              <p className="text-center font-mono text-[10px] uppercase tracking-wide3 text-bone/50">
                100 % kostenlos · unverbindlich · Antwort &lt; 24 h
              </p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </>
  );
}
