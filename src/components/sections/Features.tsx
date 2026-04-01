"use client";

import React from "react";
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
  headline: React.ReactNode;
  body: string;
  image: string;
};

const features: FeatureRow[] = [
  {
    headline: <>Agents that work<br />as a team.</>,
    body: "Your agents don't work in isolation. They pass context to each other, avoid duplication, and keep the whole workflow moving — without you having to manage any of it.",
    image: "/features/agents.png",
  },
  {
    headline: "See every action your agents take, as it happens.",
    body: "Every action your agents take is logged live. Filter by agent, event type, or time. Know exactly what's happening at any moment.",
    image: "/features/activity.png",
  },
  {
    headline: "When AI isn't enough, a real human steps in.",
    body: "Your dedicated Human Operator monitors your agents, handles edge cases, and communicates with your team when AI isn't enough. You see every message they send.",
    image: "/features/human.png",
  },
  {
    headline: "Every result in one place, ready to use.",
    body: "Everything your agents produce lands in a clean, filterable table. Prospect profiles, emails sent, meetings booked — all in one place, ready to export.",
    image: "/features/outputs.png",
  },
];

/* ─── Features section ───────────────────────────────────────────── */
export function Features() {
  return (
    <SectionWrapper id="features" className="py-20 md:py-32">
      <div className="flex flex-col gap-24 md:gap-36">
        {features.map((feature, i) => {
          const isEven = i % 2 === 0; // 0-based: even = text left, odd = text right

          return (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
            >
              {/* Text side */}
              <motion.div
                variants={isEven ? slideFromLeft : slideFromRight}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className={`flex flex-col gap-5 max-w-sm ${isEven ? "" : "md:order-2 md:justify-self-end"
                  }`}
              >
                <h2 className="text-[1.75rem] md:text-[2rem] font-semibold text-t1 leading-tight">
                  {feature.headline}
                </h2>
                <p className="text-t2 text-lg leading-relaxed">{feature.body}</p>
              </motion.div>

              {/* Image side */}
              <motion.div
                variants={isEven ? slideFromRight : slideFromLeft}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className={`self-start ${isEven ? "" : "md:order-1"}`}
              >
                <motion.div variants={screenshotEntry}>
                  <img
                    src={feature.image}
                    alt={typeof feature.headline === "string" ? feature.headline : ""}
                    className="w-full rounded-2xl bg-surface border border-line shadow-[0_2px_40px_rgba(74,143,224,0.08)]"
                  />
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
