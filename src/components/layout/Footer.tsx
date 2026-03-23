import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin } from "lucide-react";

const productLinks = [
  { label: "Overview",  href: "#" },
  { label: "Features",  href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing",   href: "#pricing" },
  { label: "Changelog", href: "#" },
];

const companyLinks = [
  { label: "About",   href: "#" },
  { label: "Blog",    href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy",   href: "#" },
  { label: "Terms of Service", href: "#" },
];

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-t4 mb-4">
        {heading}
      </p>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-t3 hover:text-t1 transition-colors duration-150"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-accent/20">
      <div
        className="mx-auto px-6 md:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-10"
        style={{ maxWidth: "var(--width-site)" }}
      >
        {/* Brand col */}
        <div className="col-span-2 md:col-span-1">
          <Image
            src="/autonoms-logo.svg"
            alt="Autonoms AI"
            width={110}
            height={26}
            className="mb-4"
          />
          <p className="text-sm text-t3 leading-relaxed max-w-[200px]">
            Assemble AI agent teams for any business workflow.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="X / Twitter"
              className="text-t4 hover:text-t2 transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-t4 hover:text-t2 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <FooterColumn heading="Product" links={productLinks} />
        <FooterColumn heading="Company" links={companyLinks} />
        <FooterColumn heading="Legal" links={legalLinks} />
      </div>

      {/* Bottom bar */}
      <div
        className="mx-auto px-6 md:px-10 py-5 border-t border-line"
        style={{ maxWidth: "var(--width-site)" }}
      >
        <p className="text-xs text-t4">© 2026 Autonoms AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
