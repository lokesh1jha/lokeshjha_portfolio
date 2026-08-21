import Link from "next/link";

import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import { ContactForm } from "@/components/forms/contact-form";
import { founderConfig } from "@/config/founder";
import { SocialLinks } from "@/config/socials";

const channels = [
  {
    icon: Icons.gmail,
    label: "Email",
    value: founderConfig.contact.email,
    href: `mailto:${founderConfig.contact.email}`,
  },
  {
    icon: Icons.contact,
    label: "Phone / WhatsApp",
    value: founderConfig.contact.phone,
    href: founderConfig.contact.phoneHref,
  },
  {
    icon: Icons.user,
    label: "Location",
    value: founderConfig.contact.location,
    href: founderConfig.contact.locationHref,
  },
  {
    icon: Icons.globe,
    label: "The platform",
    value: "getcollab.in",
    href: "https://www.getcollab.in",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="container py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <AnimatedSection direction="right">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            {founderConfig.contact.eyebrow}
          </p>
          <h2 className="mt-4 font-heading text-display-sm tracking-tight text-balance">
            {founderConfig.contact.title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            {founderConfig.contact.description}
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {channels.map((channel) => (
              <Link
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card transition-all hover:border-brand-500/60 hover:shadow-card-hover"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-brand-700 transition-colors group-hover:bg-brand-500 group-hover:text-primary-foreground">
                  <channel.icon className="h-5 w-5" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {channel.label}
                  </span>
                  <span className="truncate font-medium">{channel.value}</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2">
            {SocialLinks.filter((s) => s.name !== "GetCollab").map((item) => (
              <Link
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-brand-500 hover:text-brand-600"
              >
                <item.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-10">
            <h3 className="font-heading text-2xl tracking-tight">
              Send a message
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              For brand partnerships, creator collaborations, or anything else
             - I read everything.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
