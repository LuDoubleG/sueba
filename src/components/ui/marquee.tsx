"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  speed?: "normal" | "slow";
  reverse?: boolean;
};

export function Marquee({ children, speed = "normal", reverse = false }: Props) {
  const cls = speed === "slow" ? "animate-marquee-slow" : "animate-marquee";
  return (
    <div className="marquee-mask relative w-full overflow-hidden">
      <div className={`flex w-max ${cls}`} style={{ animationDirection: reverse ? "reverse" : "normal" }}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
