import { StatCard } from "@/components/shared/StatCard";

export function VisualInterludeSection() {
  return (
    <section className="reveal py-20 px-20 relative overflow-hidden bg-brand-red-dark flex items-center justify-center max-lg:px-6 max-lg:py-16">
      <div className="flex gap-[46px] items-center text-white/50 relative z-10 max-lg:flex-col max-lg:gap-8 max-lg:text-center">
        <h3 className="font-playfair text-[2rem] font-bold text-white mb-1.5 leading-[1.2]">
          Designed for Impact.<br />Built for Legacy.
        </h3>
        
        <div className="w-px h-[60px] bg-white/20 max-lg:w-12 max-lg:h-px" />
        
        <StatCard number="250+" label="Global Events Hosted/Spoken At" variant="red" className="border-none px-0 py-0 hover:translate-y-0" />
        
        <div className="w-px h-[60px] bg-white/20 max-lg:w-12 max-lg:h-px" />
        
        <StatCard number="7M+" label="Naira Generated in Revenue for Clients" variant="red" className="border-none px-0 py-0 hover:translate-y-0" />
      </div>
      
      {/* Background watermark */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[45%] font-display text-[22rem] text-white/2 tracking-[20px] select-none pointer-events-none whitespace-nowrap">
        IMPACT
      </div>
    </section>
  );
}
