import { SectionHeading } from "@/components/shared/SectionHeading";
import { metricsList } from "@/lib/constants";

export function ROISection() {
  return (
    <section className="reveal flex bg-white max-lg:flex-col-reverse">
      {/* Left column — Red block */}
      <div className="flex-1 bg-primary text-white p-20 flex flex-col justify-center  max-lg:py-16">
        <SectionHeading
          tag="Metrics of Transformation"
          title={<>The Real <em className="italic text-accent shrink-0">ROI</em> of Coaching</>}
          light
          className="mb-8"
        />
        
        <p className="text-white/80 leading-[1.8] font-light max-w-[440px] mb-12">
          Hiring Coach OG is not an expense; it is the most crucial investment you will make in your personal architecture. Here is what you walk away with:
        </p>

        <ul className="list-none space-y-5">
          {metricsList.map((item, index) => (
            <li key={index} className="flex gap-4 items-center">
              <span
                aria-hidden="true"
                className="flex items-center justify-center w-7 h-7 rounded-full bg-accent text-secondary text-[0.6rem] font-bold shrink-0"
              >
                ✓
              </span>
              <span className="font-playfair text-lg text-white font-medium">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right column — Image placeholder */}
      <div
        className="flex-1 bg-warm-white relative min-h-[400px]"
        style={{
          background: "linear-gradient(rgba(240,237,235,0.7), rgba(240,237,235,0.7)), url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[120px] h-[120px] rounded-full border border-primary/20 flex items-center justify-center scale-animation">
            <div className="w-[90px] h-[90px] rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm">
              <span className="text-3xl text-primary">✓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
