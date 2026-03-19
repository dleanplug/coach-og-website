import { cn } from "@/lib/utils";

interface IndustryItemProps {
  icon: string;
  name: string;
  sub: string;
  className?: string;
}

export function IndustryItem({ icon, name, sub, className }: IndustryItemProps) {
  return (
    <div
      className={cn(
        "group relative px-6 py-[30px] border border-white/6 bg-white/2 overflow-hidden transition-all hover:bg-accent/6 cursor-default",
        className,
      )}
    >
      {/* Animated bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0 bg-primary transition-[height] duration-300 ease-out group-hover:h-[3px]" />

      <div className="text-2xl mb-3">{icon}</div>
      <div className="text-[0.88rem] font-semibold text-white/80 mb-1.5">{name}</div>
      <div className="text-[0.75rem] text-white/30 leading-normal">{sub}</div>
    </div>
  );
}
