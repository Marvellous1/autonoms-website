"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOCS_NAV } from "@/lib/docs";
import { cn } from "@/lib/utils";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-8">
      {DOCS_NAV.map((section) => (
        <div key={section.title} className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-t4">
            {section.title}
          </p>
          <div className="flex flex-col gap-1">
            {section.items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block w-full text-sm rounded-lg px-2.5 py-2 transition-colors border",
                    active
                      ? "bg-surface text-t1 border-line-strong"
                      : "text-t2 border-transparent hover:text-t1 hover:bg-hover hover:border-line"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}

