import { cn } from "@/lib/utils";

type BadgeVariant = "success" | "muted" | "accent" | "warning";

const variants: Record<BadgeVariant, string> = {
  success: "bg-success-sub text-success border border-success/20",
  muted:   "bg-subtle text-t3 border border-line",
  accent:  "bg-accent-sub text-accent-text border border-accent/20",
  warning: "bg-warning-sub text-warning border border-warning/20",
};

export function Badge({
  children,
  variant = "muted",
  className,
}: {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
