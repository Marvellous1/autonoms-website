"use client";

import { motion } from "framer-motion";
import { MessageSquare, User, Inbox } from "lucide-react";
import {
  staggerContainer,
  fadeUp,
  slideFromLeft,
  slideFromRight,
  viewportOnce,
} from "@/lib/animations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

function InboxMockup() {
  const messages = [
    {
      type: "agent" as const,
      agent: "Prospector Agent",
      text: "Found 12 new leads matching your ICP in the last hour.",
      time: "2m ago",
    },
    {
      type: "agent" as const,
      agent: "Outreach Agent",
      text: "Sent personalised emails to 8 of those leads.",
      time: "1m ago",
    },
    {
      type: "hil" as const,
      agent: "Human Operator",
      text: "I reviewed the draft for Acme Corp — adjusted tone to be more formal before sending.",
      time: "just now",
    },
  ];

  return (
    <div className="rounded-xl border border-line bg-surface overflow-hidden shadow-card-hover">
      {/* Header */}
      <div className="border-b border-line bg-overlay px-4 py-3 flex items-center gap-2">
        <Inbox size={15} className="text-t3" />
        <span className="text-sm font-medium text-t2">Inbox</span>
        <span className="ml-auto flex items-center gap-1 text-xs text-success">
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" />
          Live
        </span>
      </div>

      {/* Messages */}
      <div className="p-4 flex flex-col gap-3">
        {messages.map((msg, i) => {
          const isHil = msg.type === "hil";
          return (
            <div
              key={i}
              className={`rounded-xl overflow-hidden ${
                isHil
                  ? "border-l-4 border-warning bg-warning-sub pl-0"
                  : "border border-line bg-subtle"
              }`}
            >
              <div className={`px-4 py-3 ${isHil ? "pl-3" : ""}`}>
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-xs font-semibold ${
                      isHil ? "text-warning" : "text-accent-text"
                    }`}
                  >
                    {isHil ? "🧑 Human Operator" : msg.agent}
                  </span>
                  <span className="text-xs text-t4">{msg.time}</span>
                </div>
                <p className="text-sm text-t2 leading-relaxed">{msg.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function InboxCallout() {
  return (
    <SectionWrapper className="bg-surface">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left — text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-6"
        >
          <motion.h2
            variants={slideFromLeft}
            className="text-2xl md:text-3xl font-semibold text-t1 leading-tight"
          >
            Talk to your team.{" "}
            <span className="text-t3">Get answers instantly.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-t2 text-lg leading-relaxed">
            Chat directly with any agent, give tasks on the fly, and see your
            Human Operator&apos;s messages to your agents — all in one inbox.
            You always know who said what.
          </motion.p>

          <motion.div variants={staggerContainer} className="flex flex-col gap-4 mt-2">
            {[
              {
                icon: MessageSquare,
                title: "Agent messages",
                desc: "Clean, instant, task-aware",
                accent: "accent",
              },
              {
                icon: User,
                title: "Human in Loop",
                desc: "Amber-flagged, always distinct",
                accent: "warning",
              },
            ].map((point) => {
              const Icon = point.icon;
              const isWarning = point.accent === "warning";
              return (
                <motion.div
                  key={point.title}
                  variants={fadeUp}
                  className="flex items-start gap-4"
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isWarning ? "bg-warning-sub" : "bg-accent-sub"
                    }`}
                  >
                    <Icon
                      size={16}
                      className={isWarning ? "text-warning" : "text-accent-text"}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-t1">{point.title}</p>
                    <p className="text-sm text-t3">{point.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right — inbox mockup */}
        <motion.div
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <InboxMockup />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
