import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  text: string;
  by: string;
  variant?: "dark" | "red" | "light";
  className?: string;
}

export function TestimonialCard({
  text,
  by,
  variant = "light",
  className,
}: TestimonialCardProps) {
  const isDark = variant === "dark";
  const isRed = variant === "red";

  return (
    <div
      className={cn(
        "group relative px-7 py-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.07)]",
        isDark && "bg-secondary border-white/5",
        isRed && "bg-primary border-white/5",
        !isDark && !isRed && "bg-white border-border shadow-sm",
        className,
      )}
    >
      {/* Large Quote Mark */}
      <span
        className={cn(
          "absolute top-2 left-4 font-playfair text-[5rem] leading-none pointer-events-none select-none",
          isDark && "text-accent/20",
          isRed && "text-white/15",
          !isDark && !isRed && "text-primary/20",
        )}
      >
        &ldquo;
      </span>

      <p
        className={cn(
          "relative z-10 font-playfair text-[1.1rem] italic leading-[1.7] mb-6",
          (isDark || isRed) ? "text-white/80" : "text-text-dark",
        )}
      >
        {text}
      </p>

      <div
        className={cn(
          "text-[0.68rem] tracking-[2px] uppercase font-semibold",
          isDark && "text-white/35",
          isRed && "text-white/50",
          !isDark && !isRed && "text-text-muted",
        )}
      >
        {by}
      </div>
    </div>
  );
}
