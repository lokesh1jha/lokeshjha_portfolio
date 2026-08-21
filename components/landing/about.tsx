import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import { founderConfig } from "@/config/founder";

const facts = [
  { icon: Icons.globe, label: "Co-Founder & CEO, GetCollab" },
  { icon: Icons.work, label: "6+ years in engineering" },
  { icon: Icons.user, label: "Hyderabad, India" },
];

export function About() {
  return (
    <section id="about" className="container py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <AnimatedSection direction="right">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            {founderConfig.about.eyebrow}
          </p>
          <h2 className="mt-4 font-heading text-display-sm tracking-tight text-balance">
            {founderConfig.about.title}
          </h2>
          <div className="mt-8 flex flex-col gap-3">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-card"
              >
                <fact.icon className="h-5 w-5 text-brand-600" />
                <span className="text-sm font-medium">{fact.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="flex flex-col justify-center">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {founderConfig.about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <blockquote className="mt-8 rounded-2xl border-l-4 border-brand-500 bg-accent/60 p-6 font-heading text-xl leading-snug tracking-tight">
            &ldquo;The best marketplaces make serendipity systematic.&rdquo;
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  );
}
