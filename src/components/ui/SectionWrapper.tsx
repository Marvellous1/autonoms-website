import { cn } from "@/lib/utils";

export function SectionWrapper({
  children,
  className,
  id,
  as: Tag = "section",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
}) {
  return (
    <Tag id={id} className={cn("w-full px-6 md:px-10 py-20 md:py-28", className)}>
      <div className="mx-auto w-full" style={{ maxWidth: "var(--width-site)" }}>
        {children}
      </div>
    </Tag>
  );
}
