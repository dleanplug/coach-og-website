import { cn } from "@/lib/utils";

interface ServiceCardProps {
  number: string;
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export function ServiceCard({
  number,
  icon,
  title,
  description,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-card px-8 py-10 border border-accent/20 overflow-hidden transition-all hover:bg-warm-white hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]",
        className,
      )}
    >
      {/* Animated left border accent */}
      <div className="absolute left-0 top-0 bottom-0 w-0 bg-primary transition-[width] duration-300 ease-out group-hover:w-[3px]" />

      {/* Watermark number */}
      <div className="absolute top-5 right-5 font-display text-[3.5rem] text-primary/6 tracking-[2px] leading-none pointer-events-none select-none">
        {number}
      </div>

      <div className="text-[1.6rem] mb-4">{icon}</div>
      <h3 className="font-playfair text-[1.3rem] font-semibold text-text-dark mb-3">
        {title}
      </h3>
      <p className="text-[0.88rem] leading-[1.8] text-text-muted font-light">
        {description}
      </p>
    </div>
  );
}
