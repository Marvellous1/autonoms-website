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
  },
  {
    icon: User,
    headline: "A human is always one message away",
    body: "Your dedicated Human Operator is on standby — monitoring, intervening, and keeping things on track.",
    iconBg: "bg-accent-sub",
    iconColor: "text-accent-text",
  },
  {
    icon: Eye,
    headline: "Full visibility into everything your AI does",
    body: "Every action is logged in real time. Nothing happens in the dark.",
    iconBg: "bg-success-sub",
    iconColor: "text-success",
  },
];

export function Benefits() {
  return (
    <SectionWrapper>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center mb-14"
      >
        <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-semibold text-t1 mb-4">
          Built for the way real teams work.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-t2 text-lg max-w-lg mx-auto">
          Everything you need to ship AI workflows with confidence.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14"
      >
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <motion.div key={b.headline} variants={cardItem} className="flex flex-col gap-4">
              <div
                className={`w-11 h-11 rounded-xl ${b.iconBg} flex items-center justify-center flex-shrink-0`}
              >
                <Icon size={20} className={b.iconColor} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-t1 mb-2">{b.headline}</h3>
                <p className="text-sm text-t3 leading-relaxed">{b.body}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
