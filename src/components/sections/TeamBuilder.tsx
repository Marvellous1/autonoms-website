"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Bot, CheckCircle2 } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

const QA = [
  {
    question: "What do you want to accomplish?",
    answer: "Book more qualified sales calls",
  },
  {
    question: "What's your company website?",
    answer: "acme.com",
  },
  {
    question: "Who are you trying to reach?",
    answer: "SaaS founders in West Africa, 10–200 employees",
  },
];

const agentCards = [
  {
    name: "Prospector Agent",
    role: "Finds matching leads on LinkedIn + Apollo",
    color: "accent",
  },
  {
    name: "Outreach Agent",
    role: "Sends personalised cold emails",
    color: "teal",
  },
  {
    name: "Qualifier Agent",
    role: "Scores responses against your ICP",
    color: "purple",
  },
  {
    name: "Scheduler Agent",
    role: "Books calls automatically",
    color: "success",
  },
];

function AgentCard({
  name,
  role,
  delay,
}: {
  name: string;
  role: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="gradient-border-wrap"
    >
      <div className="rounded-[14px] bg-surface px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-accent-sub flex items-center justify-center flex-shrink-0">
          <Bot size={15} className="text-accent-text" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-t1">{name}</p>
          <p className="text-xs text-t3 truncate">{role}</p>
        </div>
        <span className="flex items-center gap-1 text-xs text-success flex-shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" />
          Active
        </span>
      </div>
    </motion.div>
  );
}

function TypedText({ text, onDone }: { text: string; onDone?: () => void }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        onDone?.();
      }
    }, 28);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return <span>{displayed}</span>;
}

function WizardMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!inView) return;
    // Sequence: Q1 → A1 → Q2 → A2 → Q3 → A3 → cards
    const timings = [300, 1800, 2600, 4200, 5000, 6800, 7600];
    const timers = timings.map((t, i) =>
      setTimeout(() => setPhase(i + 1), t)
    );
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  return (
    <div ref={ref} className="flex flex-col gap-4">
      {QA.map((item, i) => {
        const qPhase = i * 2 + 1;
        const aPhase = i * 2 + 2;
        return (
          <div key={i} className="flex flex-col gap-2">
            {/* Question bubble */}
            <AnimatePresence>
              {phase >= qPhase && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="self-start max-w-[85%] bg-surface border border-line rounded-xl rounded-tl-sm px-4 py-3"
                >
                  <p className="text-sm text-t2">{item.question}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Answer bubble */}
            <AnimatePresence>
              {phase >= aPhase && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="self-end max-w-[85%] bg-accent-sub border border-accent/20 rounded-xl rounded-tr-sm px-4 py-3"
                >
                  <p className="text-sm text-accent-text font-medium">
                    {phase === aPhase ? (
                      <TypedText text={item.answer} />
                    ) : (
                      item.answer
                    )}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      {/* Result card */}
      <AnimatePresence>
        {phase >= 7 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3"
          >
            <div className="bg-surface border border-line rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={16} className="text-success" />
                <p className="text-sm font-semibold text-t1">Your recommended team</p>
              </div>
              <div className="flex flex-col gap-2 mb-4">
                {agentCards.map((agent, i) => (
                  <AgentCard
                    key={agent.name}
                    name={agent.name}
                    role={agent.role}
                    delay={i * 0.12}
                  />
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-3 p-3 rounded-xl bg-subtle border border-line-sub"
              >
                <p className="text-xs text-t3 leading-relaxed">
                  Based on your goal, we recommend a 4-agent SDR team targeting Series A SaaS
                  founders. Estimated{" "}
                  <span className="text-success font-semibold">
                    15–20 qualified calls per month
                  </span>
                  .
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function TeamBuilder() {
  return (
    <SectionWrapper className="bg-subtle">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Left — text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-5 md:sticky md:top-28"
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-accent-text">
            Team Builder
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-[1.75rem] md:text-3xl font-semibold text-t1 leading-tight">
            Tell us what you need.{" "}
            <span className="text-t3">We&apos;ll build your team.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-t2 text-lg leading-relaxed">
            Answer a few questions about your goal and your business. Autonoms
            analyses your needs and recommends the exact agents, tools, and
            strategy to get you there.
          </motion.p>
          <motion.ul variants={fadeUp} className="flex flex-col gap-3 mt-2">
            {[
              "No technical knowledge required",
              "Personalised team in under 2 minutes",
              "Adjust and iterate any time",
            ].map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-t3">
                <CheckCircle2 size={15} className="text-success flex-shrink-0" />
                {point}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right — wizard mockup */}
        <div className="bg-surface border border-line rounded-2xl p-5 shadow-card-hover">
          <div className="border-b border-line pb-3 mb-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse-dot" />
            <p className="text-xs font-semibold text-t3 uppercase tracking-wider">
              Team Builder
            </p>
          </div>
          <WizardMockup />
        </div>
      </div>
    </SectionWrapper>
  );
}
