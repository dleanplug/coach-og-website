import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  text: string;
  by: string;
  className?: string;
}

export function TestimonialCard({
  text,
  by,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "group relative px-10 py-10 bg-white border border-border transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.05)]",
        className,
      )}
    >
      <p className="relative font-playfair text-[0.95rem] italic leading-[1.8] text-text-muted mb-6">
        <span className="absolute -top-4 -left-6 text-[3rem] text-brand-gold-pale pointer-events-none select-none">
          &ldquo;
        </span>
        {text}
      </p>

      <div className="text-[0.68rem] tracking-[2px] uppercase text-brand-gold font-semibold">
        {by}
      </div>
    </div>
  );
}
