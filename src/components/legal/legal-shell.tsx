import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { Footer } from "@/components/sections/footer";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: React.ReactNode;
};

export function LegalShell({ index, eyebrow, title, intro, updated, children }: Props) {
  return (
    <>
      <div className="grain" aria-hidden />
      <SiteNav />

      <main className="relative">
        {/* Header */}
        <section className="relative overflow-hidden border-b border-bone/10 bg-ink pt-32 pb-12 md:pt-40 md:pb-20">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="aurora-blob h-[420px] w-[420px] -left-32 top-12 bg-electric/30 animate-breathe" />
            <div className="aurora-blob h-[360px] w-[360px] -right-20 top-20 bg-gold/20 animate-drift" />
            <div className="absolute inset-0 blueprint opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" />
          </div>

          <div className="shell relative">
            <div className="mb-8 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-wide3 text-ash">
              <div className="flex items-center gap-3">
                <span className="dot" />
                <span>
                  {index} — {eyebrow}
                </span>
              </div>
              <span className="hidden md:inline">Aktualisiert: {updated}</span>
            </div>

            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide3 text-bone/55 transition hover:text-bone"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition group-hover:-translate-x-0.5" />
              Zurück zur Startseite
            </Link>

            <h1
              className="mt-6 max-w-4xl text-bone"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-0.025em",
                lineHeight: 1.04,
                fontSize: "clamp(40px, 7.4vw, 96px)"
              }}
            >
              {title}
            </h1>

            <p className="mt-6 max-w-3xl text-balance text-base leading-relaxed text-bone/70 md:text-lg">
              {intro}
            </p>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-bone/15 bg-bone/[0.03] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide3 text-bone/55 md:hidden">
              <span className="dot" /> Aktualisiert: {updated}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="relative bg-ink py-16 md:py-24">
          <div className="shell">
            <article className="legal-prose mx-auto max-w-3xl text-bone/85">{children}</article>

            {/* Footer-ähnliche Action-Bar */}
            <div className="mx-auto mt-16 flex max-w-3xl flex-col items-start gap-4 rounded-2xl border border-bone/10 bg-bone/[0.02] p-6 md:flex-row md:items-center md:justify-between">
              <div>
                  <p className="font-mono text-[10px] uppercase tracking-wide3 text-gold">Fragen zur Finanzierung?</p>
                  <p className="mt-1.5 text-[14px] text-bone/80">
                    Persönliches Erstgespräch — kostenlos & unverbindlich.
                  </p>
                </div>
                <Link
                  href="/#kontakt"
                  className="cta-primary group inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold tracking-tight"
                >
                  <span className="relative z-10">Konditions-Check sichern</span>
                <span className="relative z-10 font-mono text-[10px]">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
