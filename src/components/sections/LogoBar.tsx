"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

// Text logos as placeholder — replace with actual SVG files in /public/logos/
const logos = [
  "Flutterwave",
  "Paystack",
  "Moniepoint",
  "Kuda",
  "PiggyVest",
];

export function LogoBar() {
  return (
    <SectionWrapper className="py-12 md:py-14 border-t border-b border-line-sub">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-col items-center gap-8"
      >
        <motion.p
          variants={fadeUp}
          className="text-xs font-semibold uppercase tracking-widest text-t4"
        >
          Used by teams at
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {logos.map((name) => (
            <motion.span
              key={name}
              variants={fadeUp}
              className="text-sm font-semibold text-t4 opacity-40 hover:opacity-70 transition-opacity duration-300 tracking-wide"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
