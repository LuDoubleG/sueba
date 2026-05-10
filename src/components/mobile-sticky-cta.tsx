"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Phone } from "lucide-react";

export function MobileStickyCta() {
  const [shown, setShown] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setShown(y > 280));

  return (
    <motion.div
      initial={{ y: 130, opacity: 0 }}
      animate={shown ? { y: 0, opacity: 1 } : { y: 130, opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
      className="fixed inset-x-3 bottom-3 z-50 lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="overflow-hidden rounded-[28px] border border-bone/15 bg-coal/90 shadow-[0_22px_70px_-15px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
        <div className="flex items-center gap-2 px-2.5 pb-2.5 pt-2.5">
          <a
            href="tel:+4962139993141"
            aria-label="Anrufen 0621 3999 3141"
            className="cta-ghost flex h-12 w-12 shrink-0 items-center justify-center rounded-full active:scale-95"
          >
            <Phone className="h-4 w-4 text-gold" />
          </a>
          <a
            href="#kontakt"
            className="cta-primary group flex flex-1 items-center justify-between rounded-full px-4 py-3.5 text-[14px] font-semibold active:scale-[0.99]"
          >
            <span className="relative z-10 flex flex-col leading-tight">
              <span>Jetzt kostenlos prüfen</span>
              <span className="font-mono text-[9px] font-normal uppercase tracking-wide3 text-ink/55">
                unverbindlich · Antwort &lt; 24 h
              </span>
            </span>
            {/* Coin-Style Token */}
            <span
              className="relative z-10 ml-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-gold transition-transform duration-300 group-hover:rotate-[12deg]"
              style={{
                background:
                  "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.18), rgba(15,12,10,0.96) 65%)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 0 0 1px rgba(217,183,121,0.45), 0 0 16px -4px rgba(217,183,121,0.55)"
              }}
            >
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
