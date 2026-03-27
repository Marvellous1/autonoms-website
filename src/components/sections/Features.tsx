"use client";

import { motion } from "framer-motion";
import {
  slideFromLeft,
  slideFromRight,
  screenshotEntry,
  viewportOnce,
} from "@/lib/animations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
/* ─── Feature rows data ──────────────────────────────────────────── */
type FeatureRow = {
  headline: string;
  body: string;
  image: string;
};

const features: FeatureRow[] = [
  {
    headline: "Not just agents. A team.",
    body: "Each agent has a role, a goal, and a live status. They coordinate, hand off tasks, and report progress — just like a real team.",
    image: "/features/agents.png",
  },
  {
    headline: "Watch your team work in real time.",
    body: "Every action your agents take is logged live. Filter by agent, event type, or time. Know exactly what's happening at any moment.",
    image: "/features/activity.png",
  },
  {
    headline: "A human always in your corner.",
    body: "Your dedicated Human Operator monitors your agents, handles edge cases, and communicates with your team when AI isn't enough. You see every message they send.",
    image: "/features/human.png",
  },
  {
    headline: "Structured outputs, not scattered logs.",
    body: "Everything your agents produce lands in a clean, filterable table. Prospect profiles, emails sent, meetings booked — all in one place, ready to export.",
    image: "/features/outputs.png",
  },
];

/* ─── Features section ───────────────────────────────────────────── */
export function Features() {
  return (
    <SectionWrapper id="features" className="py-20 md:py-32">
      <div className="flex flex-col gap-24 md:gap-36">
        {features.map((feature, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-center"
          >
            {/* Text side */}
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col gap-5 max-w-sm"
            >
              <h2 className="text-[1.75rem] md:text-[2rem] font-semibold text-t1 leading-tight">
                {feature.headline}
              </h2>
              <p className="text-t2 text-lg leading-relaxed">{feature.body}</p>
            </motion.div>

            {/* Image side */}
            <motion.div
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="self-start"
            >
              <motion.div variants={screenshotEntry}>
                <img
                  src={feature.image}
                  alt={feature.headline}
                  className="w-full rounded-2xl border border-line shadow-[0_2px_40px_rgba(74,143,224,0.08)]"
                />
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
