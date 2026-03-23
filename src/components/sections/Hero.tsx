"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { wordStagger, staggerContainer } from "@/lib/animations";

const LINE_ONE = ["The", "team", "that"];
const LINE_TWO = ["never", "stops", "working."];

const tabs = [
  { id: "agent-teams", label: "Agent Teams" },
  { id: "live-activity", label: "Live Activity" },
  { id: "human-in-loop", label: "Human in Loop" },
  { id: "structured-results", label: "Structured Results" },
];

// Placeholder video poster colours (replace with real screenshots)
const tabColors: Record<string, string> = {
  "agent-teams": "#0f1a2e",
  "live-activity": "#0a1a18",
  "human-in-loop": "#1a150a",
  "structured-results": "#0f0f1a",
};

function BrowserMockup({ activeTab }: { activeTab: string }) {
  return (
    <div className="relative rounded-xl border border-line overflow-hidden shadow-[0_0_80px_rgba(74,143,224,0.1)] bg-page">
      {/* Chrome bar */}
      <div className="bg-overlay border-b border-line h-9 flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-line" />
        <div className="w-3 h-3 rounded-full bg-line" />
        <div className="w-3 h-3 rounded-full bg-line" />
        <div className="mx-auto flex-1 max-w-xs h-5 rounded-md bg-subtle border border-line-sub" />
      </div>
      {/* Screen area */}
      <div
        className="relative aspect-video overflow-hidden transition-colors duration-500"
        style={{ backgroundColor: tabColors[activeTab] }}
      >
        {/* Placeholder content showing app UI mockup */}
        <div className="absolute inset-0 flex flex-col">
          {/* Sidebar strip */}
          <div className="flex h-full">
            <div className="w-14 bg-page border-r border-line flex flex-col items-center py-4 gap-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-lg bg-surface" />
              ))}
            </div>
            {/* Main content area */}
            <div className="flex-1 p-4 flex flex-col gap-3">
              <div className="h-8 w-48 rounded-lg bg-surface/60" />
              <div className="grid grid-cols-3 gap-3 mt-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-24 rounded-xl bg-surface/40 border border-line/40" />
                ))}
              </div>
              <div className="flex-1 rounded-xl bg-surface/40 border border-line/40 mt-1" />
            </div>
          </div>
        </div>
        {/* Active tab label overlay */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1.5 rounded-full bg-accent-sub border border-accent/30 text-accent-text text-xs font-medium">
            {tabs.find((t) => t.id === activeTab)?.label}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startProgress = useCallback((tabId: string) => {
    setProgress(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
    const duration = 4000; // 4s per tab
    const step = 100 / (duration / 50);
    let current = 0;
    intervalRef.current = setInterval(() => {
      current += step;
      if (current >= 100) {
        clearInterval(intervalRef.current!);
        setProgress(100);
        setTimeout(() => {
          setActiveTab((prev) => {
            const idx = tabs.findIndex((t) => t.id === prev);
            return tabs[(idx + 1) % tabs.length].id;
          });
        }, 100);
      } else {
        setProgress(current);
      }
    }, 50);
  }, []);

  useEffect(() => {
    startProgress(activeTab);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const handleTabClick = (id: string) => {
    if (id === activeTab) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActiveTab(id);
  };

  const words = [...LINE_ONE, ...LINE_TWO];

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-accent/5 blur-[140px]" />
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-purple/3 blur-[120px]" />
      </div>

      {/* Hero text */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-10 pt-40 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-sub border border-accent/20 text-accent-text text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" />
            Now in early access
          </span>
        </motion.div>

        {/* Staggered headline */}
        <motion.h1
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-t1 leading-[1.08] max-w-3xl mb-6"
        >
          {/* Line 1 */}
          <span className="block">
            {LINE_ONE.map((word, i) => (
              <motion.span
                key={`l1-${i}`}
                custom={i}
                variants={wordStagger}
                className="inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
          </span>
          {/* Line 2 */}
          <span className="block">
            {LINE_TWO.map((word, i) => (
              <motion.span
                key={`l2-${i}`}
                custom={LINE_ONE.length + i}
                variants={wordStagger}
                className="inline-block mr-[0.2em] last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="text-lg md:text-xl text-t2 max-w-xl leading-relaxed mb-8"
        >
          Autonoms lets you assemble AI agent teams for any business workflow.
          Built for SDR teams. Ready for anything.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center gap-4 mb-10"
        >
          <Button size="lg">Get Started →</Button>
          <Button size="lg" variant="ghost">See it in action</Button>
        </motion.div>

        {/* Social proof */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-sm text-t4"
        >
          Trusted by teams at Flutterwave, Paystack, and 40+ companies
        </motion.p>
      </div>

      {/* Product showcase */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full px-6 md:px-10 pb-0"
        style={{ maxWidth: "var(--width-site)", margin: "0 auto" }}
      >
        {/* Tab strip */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 p-1 rounded-full bg-surface border border-line">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={cn(
                    "relative flex flex-col items-center px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 overflow-hidden",
                    isActive
                      ? "bg-accent text-white"
                      : "text-t3 hover:text-t2"
                  )}
                >
                  <span className="relative z-10">{tab.label}</span>
                  {/* Progress bar */}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 h-0.5 bg-white/40 transition-none"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Browser mockup */}
        <BrowserMockup activeTab={activeTab} />
      </motion.div>
    </section>
  );
}
