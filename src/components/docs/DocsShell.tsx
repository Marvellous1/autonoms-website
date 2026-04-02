import type { TocItem } from "@/lib/docs";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { DocsToc } from "@/components/docs/DocsToc";

export function DocsShell({
  toc,
  children,
}: {
  toc: TocItem[];
  children: React.ReactNode;
}) {
  return (
    <div
      className="mx-auto w-full px-6 md:px-10 py-12 md:py-16"
      style={{ maxWidth: "var(--width-site)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_220px] gap-10">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <DocsSidebar />
          </div>
        </aside>

        {/* Content */}
        <article className="min-w-0">
          <div className="prose prose-invert prose-headings:scroll-mt-28 prose-a:text-accent-text prose-a:no-underline hover:prose-a:underline prose-code:text-t1 prose-pre:bg-overlay prose-pre:border prose-pre:border-line prose-pre:rounded-xl max-w-none">
            {children}
          </div>
        </article>

        {/* TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <DocsToc items={toc} />
          </div>
        </aside>
      </div>
    </div>
  );
}

