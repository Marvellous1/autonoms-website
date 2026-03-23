"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Animated gradient background */}
      <div className="banner-gradient-animated absolute inset-0" />

      {/* Accent glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent/8 blur-[100px]" />
      </div>

      <div className="relative z-10 px-6 md:px-10 py-24 md:py-32 flex flex-col items-center text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center gap-6 max-w-2xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-t1 leading-tight"
          >
            Your AI team is waiting.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-t2 text-lg md:text-xl">
            Set up in minutes. No engineers needed.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col items-center gap-3 mt-2">
            <Button
              size="lg"
              className="bg-white! text-accent! hover:bg-white/90! hover:shadow-[0_4px_28px_rgba(74,143,224,0.5)]! min-w-[200px]"
            >
              Get Started →
            </Button>
            <p className="text-xs text-t4">No credit card required</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
