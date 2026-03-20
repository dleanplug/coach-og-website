import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag: string;
  title: React.ReactNode;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  center = false,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-0", className)}>
      <div
        className={cn(
          "flex items-center gap-3 text-[0.65rem] tracking-[4px] uppercase text-accent mb-3.5",
          center ? "justify-center" : "",
        )}>
        {!center && (
          <span className='w-7 h-px bg-accent shrink-0' aria-hidden='true' />
        )}
        {tag}
      </div>
      <h2
        className={cn(
          "font-playfair text-[clamp(2rem,3.2vw,3.4rem)] font-bold leading-[1.15]",
          light ? "text-white" : "text-text-dark",
          center ? "text-center" : "",
        )}>
        {title}
      </h2>
    </div>
  );
}
