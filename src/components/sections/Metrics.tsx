"use client";

import { motion } from "framer-motion";
import { Network, Bot, Zap, TrendingDown } from "lucide-react";
import { staggerContainer, cardItem, viewportOnce } from "@/lib/animations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const metrics = [
  {
    icon: Network,
    label: "3× more qualified meetings booked",
    iconBg: "bg-accent-sub",
    iconColor: "text-accent-text",
  },
  {
    icon: Bot,
    label: "20+ hours saved per rep, every week",
    iconBg: "bg-purple-sub",
    iconColor: "text-purple",
  },
  {
    icon: Zap,
    label: "Go live in under 48 hours",
    iconBg: "bg-teal-sub",
    iconColor: "text-teal",
  },
  {
    icon: TrendingDown,
    label: "Up to 60% lower cost than hiring",
    iconBg: "bg-success-sub",
    iconColor: "text-success",
  },
];

export function Metrics() {
  return (
    <SectionWrapper className="py-8 md:py-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.label}
              variants={cardItem}
              className="flex flex-col justify-between gap-10 p-5 rounded-2xl bg-surface border border-line min-h-[148px]"
            >
              <div className={`w-10 h-10 rounded-xl ${m.iconBg} flex items-center justify-center`}>
                <Icon size={18} className={m.iconColor} />
              </div>
              <p className="text-base md:text-[1.125rem] font-medium text-t1 leading-snug">{m.label}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
