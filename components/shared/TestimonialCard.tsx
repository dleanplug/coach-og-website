import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  text: string;
  by: string;
  variant?: "default" | "dark" | "red";
  className?: string;
}

export function TestimonialCard({
  text,
  by,
  variant = "default",
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "group relative px-7 py-8 rounded-[2px] border overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.07)]",
        variant === "default" && "bg-card border-accent/20",
        variant === "dark" && "bg-secondary border-white/10",
        variant === "red" && "bg-primary border-primary",
        className,
      )}
    >
      {/* Decorative open-quote */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-2 left-[18px] font-playfair text-[5rem] leading-none select-none pointer-events-none opacity-20",
          variant === "default" && "text-primary",
          variant === "dark" && "text-accent",
          variant === "red" && "text-white",
        )}
      >
        &ldquo;
      </span>

      <p
        className={cn(
          "font-playfair text-[1.1rem] italic leading-[1.7] mb-[18px]",
          variant === "default" && "text-text-dark",
          variant === "dark" && "text-white/85 text-[1.25rem]",
          variant === "red" && "text-white/85",
        )}
      >
        {text}
      </p>

      <div
        className={cn(
          "text-[0.68rem] tracking-[2px] uppercase",
          variant === "default" && "text-text-muted",
          variant === "dark" && "text-white/35",
          variant === "red" && "text-white/50",
        )}
      >
        {by}
      </div>
    </div>
  );
}
