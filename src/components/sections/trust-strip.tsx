"use client";

import { Marquee } from "@/components/ui/marquee";

const cities = [
  "Mannheim",
  "Heidelberg",
  "Ludwigshafen",
  "Frankfurt am Main",
  "Stuttgart",
  "Karlsruhe",
  "Worms",
  "Mainz",
  "Wiesbaden",
  "Köln",
  "Düsseldorf",
  "Hamburg",
  "Berlin",
  "München",
  "Leipzig",
  "Dresden",
  "Nürnberg",
  "Hannover",
  "Bremen",
  "Bonn"
];

export function TrustStrip() {
  return (
    <section
      aria-label="Standorte und Vertrauenssignale"
      className="relative border-y border-bone/10 bg-ink py-5"
    >
      <Marquee>
        {cities.map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-6 px-6 font-mono text-[11px] uppercase tracking-wide3 text-bone/70"
          >
            <span className="text-gold">✦</span>
            <span>Anlageimmobilien in {c}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
