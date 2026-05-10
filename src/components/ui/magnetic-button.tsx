"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  arrow?: boolean;
  pulse?: boolean;
  size?: "md" | "lg";
};

export function MagneticButton({ href, children, variant = "primary", className = "", arrow = true, pulse = false, size = "md" }: Props) {
  const variantCls = variant === "primary" ? "cta-primary" : "cta-ghost";
  const sizeCls = size === "lg" ? "px-7 py-4 text-[14px] md:text-[15px]" : "px-6 py-3.5 text-[13px] md:text-[14px]";
  const pulseCls = pulse && variant === "primary" ? "cta-pulse" : "";

  return (
    <a
      href={href}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full font-semibold tracking-tight ${sizeCls} ${variantCls} ${pulseCls} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {arrow ? (
        <span className="relative z-10 inline-flex h-7 w-7 items-center justify-center">
          <span className={`absolute inset-0 rounded-full ${variant === "primary" ? "bg-ink/15" : "bg-gold/20"}`} />
          <ArrowUpRight className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      ) : null}
    </a>
  );
}

// minimal styled inline link (kept for backward compat)
export function MagneticLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`link inline-flex items-center gap-1 text-bone/80 transition hover:text-bone ${className}`}>
      {children}
    </Link>
  );
}
