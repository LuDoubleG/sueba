"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Info, Phone } from "lucide-react";
import { properties } from "@/lib/data";
import { MagneticButton } from "@/components/ui/magnetic-button";

const ease = [0.2, 0.7, 0.2, 1] as const;

const cardMedia = [
  {
    src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=82",
    alt: "Modernes Einfamilienhaus mit heller Fassade — Beispiel Erstfinanzierung Eigenheim mit KfW 300 Wohneigentum für Familien"
  },
  {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=82",
    alt: "Etablierte Bestandsimmobilie im Abendlicht — Beispiel Anschlussfinanzierung und Forward-Darlehen bei auslaufender Zinsbindung"
  },
  {
    src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1400&q=82",
    alt: "Modernisierung und energetische Sanierung eines Wohngebäudes — Beispiel Modernisierungskredit kombiniert mit KfW 261 Klimafreundlicher Neubau"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section relative border-t border-bone/10 bg-ink">
      <div className="shell">
        <div className="mb-12 flex items-center justify-between font-mono text-[10px] uppercase tracking-wide3 text-ash md:mb-16">
          <div className="flex items-center gap-3">
            <span className="dot" />
            <span>04 — Beispiele</span>
          </div>
          <span>Beispielhafte Darstellungen — kein Bestand</span>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="headline text-[12vw] text-bone sm:text-[9vw] lg:text-[6.4vw] xl:text-[100px]">
              Drei Wege<br />
              <span className="italic text-gradient-warm">zur richtigen Rate.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-6">
            <p className="text-balance text-base leading-relaxed text-bone/70">
              Drei typische Finanzierungs-Szenarien, mit denen wir täglich arbeiten — von der Erstfinanzierung
              über Anschluss bis zur Modernisierung. Welche Struktur zu Ihrer Situation passt, klären wir
              im persönlichen Gespräch.
            </p>
          </div>
        </div>

        {/* Disclaimer-Banner — Konditionen sind nicht garantiert, hängen von Bonität & Markt ab */}
        <div className="mt-10 flex items-start gap-3 rounded-2xl border border-gold/25 bg-gold/[0.06] p-4 md:mt-12 md:items-center md:p-5">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-gold/15 text-gold">
            <Info className="h-4 w-4" strokeWidth={2.2} />
          </span>
          <p className="text-[13px] leading-relaxed text-bone/80 md:text-[14px]">
            <strong className="font-medium text-bone">Beispielhafte Szenarien.</strong> Konkrete Konditionen,
            Beleihungsausläufe und Förderfähigkeit hängen von Bonität, Eigenkapital, Objekt und Markt ab —{" "}
            <strong className="text-bone">individuelle Prüfung im kostenlosen Konditions-Check</strong>.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((p, i) => (
            <PortfolioCard
              key={p.title}
              index={i}
              title={p.title}
              focus={p.focus}
              locationType={p.locationType}
              risk={p.risk}
              horizon={p.horizon}
              hint={p.hint}
              image={cardMedia[i].src}
              imageAlt={cardMedia[i].alt}
            />
          ))}
        </div>

        {/* CTA bar after portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="mt-16 flex flex-col items-start gap-5 rounded-[28px] border border-bone/15 bg-coal p-6 md:flex-row md:items-center md:justify-between md:p-8"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wide3 text-gold">Welches Szenario passt zu Ihnen?</p>
            <p className="mt-2 max-w-xl text-[15px] leading-snug text-bone md:text-base">
              Wir prüfen kostenfrei und neutral, welche Bank, welche Tilgung und welche Zinsbindung zu Ihrer Bonität,
              Liquidität und Lebensplanung passen.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <MagneticButton href="#kontakt" size="lg">Konditionen kostenlos prüfen</MagneticButton>
            <a
              href="tel:+4962139993141"
              className="cta-ghost inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm"
            >
              <Phone className="h-3.5 w-3.5 text-gold" />
              0621 3999 3141
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PortfolioCard({
  index,
  title,
  focus,
  locationType,
  risk,
  horizon,
  hint,
  image,
  imageAlt
}: {
  index: number;
  title: string;
  focus: string;
  locationType: string;
  risk: string;
  horizon: string;
  hint: string;
  image: string;
  imageAlt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 140, damping: 14 });
  const sry = useSpring(ry, { stiffness: 140, damping: 14 });
  const rotateX = useTransform(srx, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(sry, [-0.5, 0.5], [-8, 8]);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    rx.set(py - 0.5);
    ry.set(px - 0.5);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.7, ease }}
      className="group surface relative flex h-full flex-col overflow-hidden p-3"
    >
      <div className="relative h-72 w-full overflow-hidden rounded-2xl">
        <motion.div className="absolute inset-0" whileHover={{ scale: 1.05 }} transition={{ duration: 0.8, ease }}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

        {/* Beispiel-Marker oben-links — eindeutig als illustrativ kenntlich */}
        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-coal/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide3 text-gold backdrop-blur">
          <span className="dot" />
          Beispiel · {focus}
        </div>

        <div className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-bone/15 bg-coal/70 text-bone backdrop-blur transition group-hover:bg-bone group-hover:text-ink">
          <ArrowUpRight className="h-4 w-4" />
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-bone md:text-[26px] text-2xl" style={{ fontFamily: "var(--font-display)", lineHeight: 1.1, letterSpacing: "-0.015em" }}>{title}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <dl className="grid grid-cols-2 gap-y-4 text-[12px] tracking-tight text-bone/80">
          <Spec label="Vorhaben" value={locationType} />
          <Spec label="Konditionsprofil" value={risk} />
          <Spec label="Empfehlung" value={horizon} />
          <Spec label="Szenario-Profil" value={String(index + 1).padStart(2, "0") + " / 03"} />
        </dl>
        <p className="mt-6 rounded-xl border border-bone/10 bg-bone/[0.02] px-3 py-2.5 text-[11px] leading-relaxed text-bone/65">
          {hint}
        </p>
      </div>

      {/* Footer-Disclaimer in der Card selbst — auch im Scroll sichtbar */}
      <p className="mx-3 mb-3 -mt-2 inline-flex items-center gap-1.5 rounded-lg bg-bone/[0.03] px-2.5 py-1.5 font-mono text-[9.5px] uppercase tracking-wide3 text-bone/55">
        <Info className="h-3 w-3 text-gold/70" strokeWidth={2.2} />
        Beispielszenario — Konditionen bonitätsabhängig
      </p>
    </motion.article>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[9px] uppercase tracking-wide3 text-ash">{label}</dt>
      <dd className="mt-1 text-[13px] text-bone/90">{value}</dd>
    </div>
  );
}
