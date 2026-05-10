"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const ease = [0.2, 0.7, 0.2, 1] as const;

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  loanAmount: string;
  monthlyCapital: string;
  goals: string[];
  employment: string;
  message: string;
  privacy: boolean;
};

const initialState: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  loanAmount: "",
  monthlyCapital: "",
  goals: [],
  employment: "",
  message: "",
  privacy: false
};

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const goals = useMemo(
    () => [
      "Hauskauf / Erstfinanzierung",
      "Anschlussfinanzierung",
      "Forward-Darlehen",
      "Modernisierung / Sanierung",
      "Privatkredit",
      "Konditions-Check Bestand"
    ],
    []
  );

  const validate = () => {
    const next: Partial<Record<keyof FormValues, string>> = {};
    if (!values.firstName.trim()) next.firstName = "Bitte Vornamen angeben.";
    if (!values.lastName.trim()) next.lastName = "Bitte Nachnamen angeben.";
    if (!/\S+@\S+\.\S+/.test(values.email)) next.email = "Bitte gültige E-Mail eintragen.";
    if (!values.phone.trim()) next.phone = "Bitte Telefonnummer angeben.";
    if (values.goals.length === 0) next.goals = "Bitte mindestens ein Vorhaben wählen.";
    if (!values.privacy) next.privacy = "Bitte stimmen Sie der Datenverarbeitung zu.";
    return next;
  };

  const toggleGoal = (g: string) => {
    setValues((prev) => ({
      ...prev,
      goals: prev.goals.includes(g) ? prev.goals.filter((x) => x !== g) : [...prev.goals, g]
    }));
    if (errors.goals) setErrors((prev) => ({ ...prev, goals: undefined }));
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSuccess(true);
    setValues(initialState);
  };

  return (
    <section id="kontakt" className="relative overflow-hidden border-t border-bone/10 bg-coal">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 blueprint opacity-30" />
        <div className="absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-electric/15 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-gold/15 blur-[120px]" />
      </div>

      <div className="shell section relative">
        <div className="mb-12 flex items-center justify-between font-mono text-[10px] uppercase tracking-wide3 text-ash md:mb-16">
          <div className="flex items-center gap-3">
            <span className="dot" />
            <span>07 — Kontakt</span>
          </div>
          <span>Konditions-Check · kostenlos</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/[0.08] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide3 text-gold">
              <span className="dot" />
              Kostenlos · unverbindlich · in 60 Sek
            </span>
            <h2 className="mt-5 headline text-5xl text-bone md:text-6xl lg:text-[80px]">
              Sichern Sie Ihren<br />
              <span className="italic text-gradient-warm">kostenlosen Konditions-Check.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-bone/75 md:text-lg">
              Süba Dragon Wohnbau aus Mannheim meldet sich für ein unverbindliches Erstgespräch — und vergleicht für Sie
              <strong className="font-medium text-bone"> Konditionen aus über 400 Banken deutschlandweit</strong>, abgestimmt auf
              Ihre Bonität und Ihr Vorhaben.
            </p>

            <ul className="mt-10 space-y-1">
              {[
                ["01", "100 % kostenlos & unverbindlich", "Vergütung über die Bank"],
                ["02", "Schufa-neutrale Konditionsabfrage", "vor jeder Bank-Anfrage"],
                ["03", "400+ Banken im Vergleich", "inkl. KfW & Landesförderung"],
                ["04", "Antwort innerhalb 24 Stunden", "auch am Wochenende"]
              ].map(([k, v, sub]) => (
                <li key={k} className="flex items-start gap-4 border-b border-bone/10 py-4 text-bone/85">
                  <span className="mt-1 font-mono text-[10px] uppercase tracking-wide3 text-gold">{k}</span>
                  <span className="flex flex-col">
                    <span className="text-[15px] text-bone">{v}</span>
                    <span className="text-[12px] text-bone/55">{sub}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid gap-3">
              <a
                href="tel:+4962139993141"
                className="cta-ghost group flex items-center justify-between rounded-2xl px-5 py-4"
              >
                <span className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-wide3 text-gold/85">Direkt anrufen</span>
                  <span className="mt-1 text-lg text-bone">0621 3999 3141</span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wide3 text-gold">→ tap to call</span>
              </a>
              <a
                href="mailto:info@sueba-wohnbau.de"
                className="cta-ghost group flex items-center justify-between rounded-2xl px-5 py-4"
              >
                <span className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-wide3 text-gold/85">E-Mail</span>
                  <span className="mt-1 text-base text-bone">info@sueba-wohnbau.de</span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wide3 text-gold">→</span>
              </a>
              <p className="px-1 font-mono text-[10px] uppercase tracking-wide3 text-bone/45">Mannheim · Deutschland</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form onSubmit={submit} noValidate className="surface space-y-6 p-6 md:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Vorname" value={values.firstName} onChange={(v) => setValues({ ...values, firstName: v })} error={errors.firstName} />
                <Field label="Nachname" value={values.lastName} onChange={(v) => setValues({ ...values, lastName: v })} error={errors.lastName} />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="E-Mail" type="email" value={values.email} onChange={(v) => setValues({ ...values, email: v })} error={errors.email} />
                <Field label="Telefon" value={values.phone} onChange={(v) => setValues({ ...values, phone: v })} error={errors.phone} />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Darlehenssumme" placeholder="z.B. 350.000 EUR" value={values.loanAmount} onChange={(v) => setValues({ ...values, loanAmount: v })} />
                <Field label="Monatliche Wunschrate" placeholder="z.B. 1.400 EUR" value={values.monthlyCapital} onChange={(v) => setValues({ ...values, monthlyCapital: v })} />
              </div>

              <div>
                <div className="flex items-baseline justify-between gap-3">
                  <Label>Vorhaben <span className="text-bone/40">(Mehrfachauswahl möglich)</span></Label>
                  {values.goals.length > 0 ? (
                    <span className="font-mono text-[10px] uppercase tracking-wide3 text-gold">
                      {values.goals.length} ausgewählt
                    </span>
                  ) : null}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {goals.map((g) => {
                    const active = values.goals.includes(g);
                    return (
                      <button
                        type="button"
                        key={g}
                        onClick={() => toggleGoal(g)}
                        aria-pressed={active}
                        className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[12.5px] font-medium tracking-tight transition-all duration-200 ${
                          active
                            ? "border-gold bg-gold text-coal shadow-[0_8px_24px_-8px_rgba(217,183,121,0.55)]"
                            : "border-bone/15 bg-bone/[0.02] text-bone/75 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-bone/[0.05] hover:text-bone"
                        }`}
                      >
                        <span
                          aria-hidden
                          className={`inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border transition ${
                            active
                              ? "border-coal/30 bg-coal/15"
                              : "border-bone/20 bg-transparent group-hover:border-gold/50"
                          }`}
                        >
                          {active ? <Check className="h-2.5 w-2.5 text-coal" strokeWidth={3.5} /> : null}
                        </span>
                        {g}
                      </button>
                    );
                  })}
                </div>
                {errors.goals ? <p className="mt-2 text-[11px] text-ember">{errors.goals}</p> : null}
              </div>

              <Field label="Beschäftigungsverhältnis" placeholder="z.B. Angestellt seit 2018, unbefristet" value={values.employment} onChange={(v) => setValues({ ...values, employment: v })} />

              <div>
                <Label>Nachricht</Label>
                <textarea
                  rows={4}
                  value={values.message}
                  onChange={(e) => setValues({ ...values, message: e.target.value })}
                  className="mt-2.5 w-full rounded-2xl border border-bone/12 bg-bone/[0.02] px-4 py-3.5 text-[16px] text-bone outline-none transition placeholder:text-ash/70 focus:border-gold/50 md:text-[14px]"
                />
              </div>

              <label className="flex items-start gap-3 text-[12px] leading-relaxed text-bone/70">
                <input
                  type="checkbox"
                  checked={values.privacy}
                  onChange={(e) => setValues({ ...values, privacy: e.target.checked })}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-gold"
                />
                <span>
                  Ich stimme der Verarbeitung meiner Daten zur Kontaktaufnahme zu und habe die{" "}
                  <a
                    href="/datenschutz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold underline decoration-gold/40 underline-offset-2 transition hover:decoration-gold"
                  >
                    Datenschutzhinweise
                  </a>{" "}
                  gelesen. Es gelten unsere{" "}
                  <a
                    href="/agb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold underline decoration-gold/40 underline-offset-2 transition hover:decoration-gold"
                  >
                    AGB
                  </a>
                  .
                </span>
              </label>
              {errors.privacy ? <p className="text-[11px] text-ember">{errors.privacy}</p> : null}

              <button
                type="submit"
                disabled={loading}
                className="cta-primary cta-pulse group relative w-full overflow-hidden rounded-full px-5 py-5 text-[14px] font-semibold tracking-tight disabled:cursor-not-allowed disabled:opacity-80 md:text-[16px]"
              >
                <span className="relative z-10 inline-flex items-center justify-center text-center">
                  {loading ? (
                    <>
                      <span className="mr-2 inline-block h-3 w-3 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />
                      Wird vorbereitet…
                    </>
                  ) : (
                    <>
                      <span className="md:hidden">Konditions-Check kostenlos sichern</span>
                      <span className="hidden md:inline">Jetzt kostenlosen Konditions-Check sichern</span>
                    </>
                  )}
                </span>
              </button>
              <p className="text-center font-mono text-[10px] uppercase tracking-wide3 text-bone/55">
                ✦ 100 % kostenlos · ✦ keine Verkaufsgespräche · ✦ Antwort &lt; 24 h
              </p>
              {success ? (
                <p className="rounded-2xl border border-gold/35 bg-gold/10 p-4 text-[13px] text-bone">
                  Vielen Dank. Wir melden uns innerhalb der nächsten 24 Stunden mit einer ersten Konditionsindikation — unverbindlich und kostenfrei.
                </p>
              ) : null}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="font-mono text-[10px] uppercase tracking-wide3 text-ash">{children}</label>;
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  error
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2.5 w-full rounded-2xl border border-bone/12 bg-bone/[0.02] px-4 py-3.5 text-[16px] text-bone outline-none transition placeholder:text-ash/70 focus:border-gold/50 md:text-[14px]"
      />
      {error ? <p className="mt-1.5 text-[12px] text-ember">{error}</p> : null}
    </div>
  );
}
