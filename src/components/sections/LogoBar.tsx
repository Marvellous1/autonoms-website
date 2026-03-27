"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";

const logos = [
  "Flutterwave",
  "Paystack",
  "Moniepoint",
  "Kuda",
  "PiggyVest",
  "Cowrywise",
  "Stears",
  "Risevest",
];

export function LogoBar() {
  return (
    <SectionWrapper className="py-10 md:py-12 overflow-hidden">
      <div className="flex flex-col items-center gap-7">
        <p className="text-xs font-semibold uppercase tracking-widest text-t4">
          Used by teams at
        </p>

        {/* Marquee */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div
            className="flex w-max gap-16"
            style={{ animation: "marquee 22s linear infinite" }}
          >
            {[...logos, ...logos].map((name, i) => (
              <span
                key={i}
                className="text font-semibold text-t3 opacity-35 hover:opacity-60 transition-opacity duration-300 tracking-wide whitespace-nowrap cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
