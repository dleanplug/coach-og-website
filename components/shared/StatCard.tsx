import { cn } from "@/lib/utils";

interface StatCardProps {
  number: string;
  label: string;
  variant?: "default" | "dark" | "red";
  className?: string;
  colSpan?: boolean;
}

export function StatCard({
  number,
  label,
  variant = "default",
  className,
  colSpan = false,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "px-[22px] py-7 rounded-[2px] border transition-transform hover:-translate-y-[3px]",
        variant === "default" && "bg-warm-white border-accent/20",
        variant === "dark" && "bg-secondary border-white/10",
        variant === "red" && "bg-primary border-primary",
        colSpan && "col-span-2",
        className,
      )}
    >
      <div
        className={cn(
          "font-playfair text-5xl font-black leading-none mb-1.5",
          variant === "default" && "text-primary",
          variant === "dark" && "text-brand-gold-light",
          variant === "red" && "text-white/90",
        )}
      >
        {number}
      </div>
      <div
        className={cn(
          "text-[0.7rem] tracking-[1.5px] uppercase",
          variant === "default" && "text-text-muted",
          variant === "dark" && "text-white/40",
          variant === "red" && "text-white/65",
        )}
      >
        {label}
      </div>
    </div>
  );
}
