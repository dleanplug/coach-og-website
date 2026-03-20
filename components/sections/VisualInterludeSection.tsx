export function VisualInterludeSection() {
  return (
    <section className="reveal page-padding py-[72px] bg-accent flex gap-20 items-center max-lg:flex-col max-lg:gap-10 max-lg:py-14">
      <div className="font-playfair text-[clamp(1.8rem,2.8vw,2.8rem)] font-bold leading-[1.25] text-secondary flex-[2]">
        &ldquo;To be a person of high value is a responsibility.
        <em className="italic block mt-1">To pour that value into others is a calling.&rdquo;</em>
        <div className="mt-6 font-sans text-[0.75rem] tracking-[3px] uppercase text-secondary/50 font-medium">
          COACH OBAFEMI OGUNYOYE
        </div>
      </div>

      <div className="flex-[1] flex flex-col gap-6">
        <div className="border-l-2 border-secondary/20 pl-5">
          <div className="font-playfair text-[2.4rem] font-black text-secondary leading-none">
            500+
          </div>
          <div className="text-[0.7rem] tracking-[1.5px] uppercase text-secondary/60 mt-1">
            Individuals Transformed
          </div>
        </div>

        <div className="border-l-2 border-secondary/20 pl-5">
          <div className="font-playfair text-[2.4rem] font-black text-secondary leading-none">
            300+
          </div>
          <div className="text-[0.7rem] tracking-[1.5px] uppercase text-secondary/60 mt-1">
            SMEs Supported
          </div>
        </div>

        <div className="border-l-2 border-secondary/20 pl-5">
          <div className="font-playfair text-[2.4rem] font-black text-secondary leading-none">
            11+
          </div>
          <div className="text-[0.7rem] tracking-[1.5px] uppercase text-secondary/60 mt-1">
            Industries Served
          </div>
        </div>
      </div>
    </section>
  );
}
