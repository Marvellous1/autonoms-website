"use client";

import { motion } from "framer-motion";
import { Zap, User, Eye } from "lucide-react";
import { staggerContainer, cardItem, fadeUp, viewportOnce } from "@/lib/animations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const benefits = [
  {
    icon: Zap,
    headline: "Set up in minutes, not weeks",
    body: "Pick your agents, connect your tools, and launch. No engineers, no long onboarding.",
    iconBg: "bg-warning-sub",
    iconColor: "text-warning",
    glow: "rgba(251,191,36,0.06)",
    border: "hover:border-warning/25",
    accent: "bg-warning",
  },
  {
    icon: User,
    headline: "A human is always one message away",
    body: "Your dedicated Human Operator is on standby — monitoring, intervening, and keeping things on track.",
    iconBg: "bg-accent-sub",
    iconColor: "text-accent-text",
    glow: "rgba(74,143,224,0.06)",
    border: "hover:border-accent/25",
    accent: "bg-accent",
  },
  {
    icon: Eye,
    headline: "Full visibility into everything your AI does",
    body: "Every action is logged in real time. Nothing happens in the dark.",
    iconBg: "bg-success-sub",
    iconColor: "text-success",
    glow: "rgba(52,211,153,0.06)",
    border: "hover:border-success/25",
    accent: "bg-success",
  },
];

export function Benefits() {
  return (
    <SectionWrapper>
      {/* Heading */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center mb-16"
      >
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold text-t1 mb-4">
          Built for the way real teams work.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-t2 text-lg max-w-lg mx-auto leading-relaxed">
          Everything you need to ship AI workflows with confidence.
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <motion.div
              key={b.headline}
              variants={cardItem}
              className={`group relative flex flex-col gap-5 p-6 rounded-2xl bg-surface border border-line transition-all duration-300 ${b.border} hover:shadow-[0_0_32px_var(--glow-color)] cursor-default overflow-hidden`}
              style={{ "--glow-color": b.glow } as React.CSSProperties}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-6 right-6 h-px ${b.accent} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />

              <div className={`w-11 h-11 rounded-xl ${b.iconBg} flex items-center justify-center flex-shrink-0`}>
                <Icon size={20} className={b.iconColor} />
              </div>

              <div>
                <h3 className="text-base font-semibold text-t1 mb-2 leading-snug">{b.headline}</h3>
                <p className="text-sm text-t3 leading-relaxed">{b.body}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
