"use client";

import { motion } from "framer-motion";
import { Bot, CheckCircle2 } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { Button } from "@/components/ui/Button";

const floatingAgents = [
  { name: "Prospector Agent",  color: "bg-accent-sub text-accent-text",  delay: 0 },
  { name: "Outreach Agent",    color: "bg-teal-sub text-teal",           delay: 0.1 },
  { name: "Qualifier Agent",   color: "bg-purple-sub text-purple",       delay: 0.2 },
  { name: "Scheduler Agent",   color: "bg-success-sub text-success",     delay: 0.3 },
];

export function FinalCTA() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Animated gradient background */}
      <div className="banner-gradient-animated absolute inset-0" />

      {/* Accent glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-accent/8 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-teal/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-purple/5 blur-[100px]" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(74,143,224,0.5) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative z-10 px-6 md:px-10 py-24 md:py-36 flex flex-col items-center text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center gap-6 max-w-2xl mx-auto"
        >
          {/* Floating agent cards */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 mb-2">
            {floatingAgents.map((agent, i) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: agent.delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/60 border border-line backdrop-blur-sm"
              >
                <div className={`w-5 h-5 rounded-full ${agent.color.split(" ")[0]} flex items-center justify-center`}>
                  <Bot size={10} className={agent.color.split(" ")[1]} />
                </div>
                <span className="text-xs font-medium text-t2">{agent.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" />
              </motion.div>
            ))}
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-t1 leading-tight"
          >
            Your AI team is waiting.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-t2 text-lg md:text-xl">
            Set up in minutes. No engineers needed.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col items-center gap-4 mt-2">
            <Button
              size="lg"
              className="bg-white! text-accent! hover:bg-white/90! hover:shadow-[0_4px_40px_rgba(74,143,224,0.6)]! min-w-[220px] transition-all duration-300"
            >
              Get started free →
            </Button>
            <div className="flex items-center gap-4 text-xs text-t4">
              <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-success" />No credit card</span>
              <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-success" />Live in minutes</span>
              <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-success" />Cancel anytime</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
