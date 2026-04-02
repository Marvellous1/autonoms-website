import Link from "next/link";
import type { TocItem } from "@/lib/docs";

export function DocsToc({ items }: { items: TocItem[] }) {
  if (!items.length) return null;

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-widest text-t4">
        On this page
      </p>
      <div className="flex flex-col gap-1.5">
        {items.map((it) => (
          <Link
            key={it.id}
            href={`#${it.id}`}
            className="text-sm text-t3 hover:text-t1 transition-colors"
          >
            {it.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

