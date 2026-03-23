"use client";

import { motion } from "framer-motion";
import {
  slideFromLeft,
  slideFromRight,
  screenshotEntry,
  viewportOnce,
} from "@/lib/animations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

type FeatureRow = {
  headline: string;
  body: string;
  imageSrc?: string;
  imageAlt: string;
  accentColor: string;
  flip: boolean;
};

const features: FeatureRow[] = [
  {
    headline: "Not just agents. A team.",
    body: "Each agent has a role, a goal, and a live status. They coordinate, hand off tasks, and report progress — just like a real team.",
    imageSrc: "/screenshots/feature-agents.png",
    imageAlt: "Agent roster and agent detail panel",
    accentColor: "rgba(74, 143, 224, 0.08)",
    flip: false,
  },
  {
    headline: "Watch your team work in real time.",
    body: "Every action your agents take is logged live. Filter by agent, event type, or time. Know exactly what's happening at any moment.",
    imageSrc: "/screenshots/feature-activity.png",
    imageAlt: "Live activity feed with pulse indicator",
    accentColor: "rgba(45, 212, 191, 0.08)",
    flip: true,
  },
  {
    headline: "A human always in your corner.",
    body: "Your dedicated Human Operator monitors your agents, handles edge cases, and communicates with your team when AI isn't enough. You see every message they send.",
    imageSrc: "/screenshots/feature-inbox.png",
    imageAlt: "Inbox showing Human in Loop thread",
    accentColor: "rgba(251, 191, 36, 0.08)",
    flip: false,
  },
  {
    headline: "Structured outputs, not scattered logs.",
    body: "Everything your agents produce lands in a clean, filterable table. Prospect profiles, emails sent, meetings booked — all in one place, ready to export.",
    imageSrc: "/screenshots/feature-results.png",
    imageAlt: "Results table with filter bar",
    accentColor: "rgba(52, 211, 153, 0.08)",
    flip: true,
  },
];

function FeatureMockup({
  headline,
  accentColor,
}: {
  headline: string;
  accentColor: string;
}) {
  return (
    <div
      className="relative rounded-xl border border-line overflow-hidden shadow-card-hover"
      style={{ background: accentColor }}
    >
      {/* Chrome bar */}
      <div className="bg-overlay border-b border-line h-9 flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-line" />
        <div className="w-3 h-3 rounded-full bg-line" />
        <div className="w-3 h-3 rounded-full bg-line" />
        <div className="mx-auto flex-1 max-w-xs h-5 rounded-md bg-subtle border border-line-sub" />
      </div>
      {/* Placeholder screen */}
      <div className="p-5 min-h-[260px] flex flex-col gap-3">
        <div className="h-5 w-40 rounded-md bg-surface" />
        <div className="grid grid-cols-2 gap-3 mt-1">
          <div className="h-20 rounded-lg bg-surface border border-line/50" />
          <div className="h-20 rounded-lg bg-surface border border-line/50" />
        </div>
        <div className="flex-1 rounded-lg bg-surface border border-line/50 min-h-[80px]" />
        <p className="absolute bottom-4 right-4 text-xs text-t4 italic">{headline}</p>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <SectionWrapper id="features" className="py-20 md:py-32">
      <div className="flex flex-col gap-24 md:gap-32">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ${
              feature.flip ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Text side */}
            <motion.div
              variants={feature.flip ? slideFromRight : slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col gap-5"
            >
              <h2 className="text-[1.625rem] md:text-3xl font-semibold text-t1 leading-tight">
                {feature.headline}
              </h2>
              <p className="text-t2 text-lg leading-relaxed">{feature.body}</p>
            </motion.div>

            {/* Screenshot / mockup side */}
            <motion.div
              variants={feature.flip ? slideFromLeft : slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.div variants={screenshotEntry}>
                <FeatureMockup
                  headline={feature.headline}
                  accentColor={feature.accentColor}
                />
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
