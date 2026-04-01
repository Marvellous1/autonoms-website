"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Features", href: "#features" },
  { label: "Agents", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-page/85 backdrop-blur-md border-b border-line"
            : "bg-transparent"
        )}
      >
        <div
          className="mx-auto px-6 md:px-10 h-16 flex items-center justify-between"
          style={{ maxWidth: "var(--width-site)" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/autonoms-logo.svg"
              alt="Autonoms AI"
              width={120}
              height={28}
              priority
            />
          </Link>

          {/* Center nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-t2 hover:text-t1 transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-t2 hover:text-t1 transition-colors duration-150"
            >
              Sign in
            </Link>
            <Button size="sm">Get Started →</Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-t3 hover:text-t1 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-40 bg-surface border-b border-line px-6 pb-6 pt-4 flex flex-col gap-4 md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-t2 hover:text-t1 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <Link href="#" className="text-sm text-t3 hover:text-t1 transition-colors">
                Sign in
              </Link>
              <Button size="md" className="w-full">
                Get Started →
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
