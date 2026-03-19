import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatCard } from "@/components/shared/StatCard";

export function AboutSection() {
  return (
    <section
      id="about"
      className="reveal grid grid-cols-2 gap-20 px-20 py-[100px] bg-card items-start max-lg:grid-cols-1 max-lg:gap-12 max-lg:px-6 max-lg:py-[72px]"
    >
      {/* Text column */}
      <div>
        <SectionHeading
          tag="Who Is Coach OG"
          title={<>A Man Built from the <em className="italic text-primary">Inside Out</em></>}
        />

        <div className="mt-6 space-y-5 text-base leading-[1.9] text-text-muted font-light">
          <p>
            Coach Obafemi Samson Ogunyoye, widely known as{" "}
            <strong className="text-text-dark font-semibold">Coach OG</strong>, is not simply a professional with credentials. He is a man with a mission: to see every person he encounters leave better, clearer, and more capable than they arrived.
          </p>
          <p>
            A lover of God, a devoted family man, a servant-leader, and a systems thinker. He believes that whatever you express on the outside begins with a conversation within. This inside-out approach shapes everything he does: every session, every strategy, every word.
          </p>

          {/* Blockquote */}
          <blockquote className="border-l-[3px] border-primary pl-6 py-[18px] my-7 bg-primary/4">
            <p className="font-playfair text-xl italic leading-[1.6] text-text-dark m-0">
              &ldquo;You cannot be around Coach Obafemi and not think of getting better at what you do.&rdquo;
            </p>
          </blockquote>

          <p>
            With over{" "}
            <strong className="text-text-dark font-semibold">500 individuals trained</strong>{" "}
            across business and career, he has helped entrepreneurs move from idea to full business setup, guided career professionals through transitions, and coached leaders to unlock the fullest version of themselves across{" "}
            <strong className="text-text-dark font-semibold">11+ industries</strong>.
          </p>
        </div>
      </div>

      {/* Stats column */}
      <div className="grid grid-cols-2 gap-3.5">
        <StatCard number="500+" label="Individuals Coached and Trained" variant="dark" colSpan />
        <StatCard number="300+" label="SMEs Supported" />
        <StatCard number="200+" label="Career Professionals Helped" />
        <StatCard number="11+" label="Industries of Experience" variant="red" />
        <StatCard number="9+" label="Coaching Disciplines" />
      </div>
    </section>
  );
}
