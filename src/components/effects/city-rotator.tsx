"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  cities?: string[];
  intervalMs?: number;
  className?: string;
};

const defaultCities = [
  "Mannheim",
  "Frankfurt",
  "Heidelberg",
  "Stuttgart",
  "München",
  "Hamburg",
  "Berlin",
  "Köln",
  "Düsseldorf",
  "Leipzig"
];

export function CityRotator({ cities = defaultCities, intervalMs = 1800, className = "" }: Props) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % cities.length), intervalMs);
    return () => clearInterval(id);
  }, [cities.length, intervalMs]);

  return (
    <span className={`relative inline-grid items-baseline overflow-hidden align-baseline ${className}`} style={{ minWidth: "5.5ch" }}>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={cities[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
          className="row-start-1 col-start-1 text-gold"
        >
          {cities[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
