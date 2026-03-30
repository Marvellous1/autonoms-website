"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { wordStagger, staggerContainer } from "@/lib/animations";

const LINE_ONE = ["Your", "AI", "team", "that"];
const LINE_TWO = ["never", "stops", "working."];

const tabs = [
  { id: "workspace-overview", label: "Workspace Overview", image: "/hero-section/workspace.png", video: "https://res.cloudinary.com/vello/video/upload/v1774877779/Work_Overview_Comp_uhou25.mp4" },
  { id: "data-hub", label: "Data Hub", image: "/hero-section/data-tables.png", video: null },
  { id: "direct-messaging", label: "Direct Messaging", image: "/hero-section/message.png", video: null },
  { id: "ai-team", label: "AI Team", image: "/hero-section/teams.png", video: null },
];

function BrowserMockup({
  activeTab,
  videoRef,
}: {
  activeTab: string;
  videoRef: React.RefObject<HTMLVideoElement | null>;
}) {
  return (
    <div className="relative rounded-xl border border-line overflow-hidden shadow-[0_0_80px_rgba(74,143,224,0.1)] bg-page mb-6">
      {/* Chrome bar */}
      <div className="bg-overlay border-b border-line h-9 flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-line" />
        <div className="w-3 h-3 rounded-full bg-line" />
        <div className="w-3 h-3 rounded-full bg-line" />
        <div className="mx-auto flex-1 max-w-xs h-5 rounded-md bg-subtle border border-line-sub" />
      </div>
      {/* Screen area */}
      <div className="relative aspect-video overflow-hidden bg-page">
        {/* Video — workspace overview */}
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/vello/video/upload/v1774877779/Work_Overview_Comp_uhou25.mp4"
          muted
          playsInline
          className={cn(
            "absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500",
            activeTab === "workspace-overview" ? "opacity-100" : "opacity-0"
          )}
        />
        {/* Images — all other tabs */}
        {tabs.filter((t) => !t.video).map((t) => (
          <img
            key={t.id}
            src={t.image}
            alt={t.label}
            className={cn(
              "absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500",
              t.id === activeTab ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
      </div>
    </div>
  );
}

function advanceTab(current: string) {
  const idx = tabs.findIndex((t) => t.id === current);
  return tabs[(idx + 1) % tabs.length].id;
}

export function Hero() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Start smooth interval progress — uses video's actual duration for the video tab
  const startProgress = useCallback((tabId: string) => {
    setProgress(0);
    if (intervalRef.current) clearInterval(intervalRef.current);

    const video = videoRef.current;
    const isVideoTab = tabId === "workspace-overview";

    const run = (durationMs: number) => {
      const step = 100 / (durationMs / 50);
      let current = 0;
      intervalRef.current = setInterval(() => {
        current += step;
        if (current >= 100) {
          clearInterval(intervalRef.current!);
          setProgress(100);
          setTimeout(() => setActiveTab((prev) => advanceTab(prev)), 100);
        } else {
          setProgress(current);
        }
      }, 50);
    };

    if (isVideoTab && video) {
      video.currentTime = 0;
      video.play().catch(() => {});

      // If duration already known, start immediately; otherwise wait for metadata
      if (video.duration && isFinite(video.duration)) {
        run(video.duration * 1000);
      } else {
        const onMeta = () => {
          run(video.duration * 1000);
          video.removeEventListener("loadedmetadata", onMeta);
        };
        video.addEventListener("loadedmetadata", onMeta);
      }
    } else {
      if (isVideoTab && video) video.pause();
      run(4000);
    }
  }, []);

  useEffect(() => {
    startProgress(activeTab);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (activeTab === "workspace-overview") videoRef.current?.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const handleTabClick = (id: string) => {
    if (id === activeTab) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActiveTab(id);
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-accent/5 blur-[140px]" />
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-purple/3 blur-[120px]" />
      </div>

      {/* Hero text */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-10 pt-40 pb-10">
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
          className="flex items-center gap-4 mb-0"
        >
          <Button size="lg">Get Started →</Button>
          <Button size="lg" variant="ghost">See it in action</Button>
        </motion.div>

      </div>

      {/* Product showcase */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full px-6 md:px-10 pb-0"
        style={{ maxWidth: "var(--width-site)", margin: "0 auto" }}
      >

        {/* Browser mockup */}
        <BrowserMockup activeTab={activeTab} videoRef={videoRef} />

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
      </motion.div>
    </section>
  );
}
