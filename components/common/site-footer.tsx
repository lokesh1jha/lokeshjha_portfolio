import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { SocialLinks } from "@/config/socials";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("border-t border-border/70", className)}>
      <div className="container flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="flex max-w-xs flex-col gap-3">
          <Link href="#top" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 font-heading text-lg text-primary-foreground">
              G
            </span>
            <span className="font-heading text-lg tracking-tight">
              {siteConfig.authorName}
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Co-Founder &amp; CEO of GetCollab - a global creator marketplace
            connecting brands with creators.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Connect
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {SocialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                target={item.link.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={item.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-brand-500 hover:text-brand-500"
              >
                <item.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Get in touch
          </span>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href={siteConfig.links.email}
              className="inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-brand-600"
            >
              <Icons.gmail className="h-4 w-4 text-brand-500" />
              lokesh.jha@getcollab.in
            </a>
            <span className="inline-flex items-center gap-2 text-foreground/80">
              <Icons.contact className="h-4 w-4 text-brand-500" />
              +91 70139 26656
            </span>
            <span className="inline-flex items-center gap-2 text-foreground/80">
              <Icons.user className="h-4 w-4 text-brand-500" />
              Hyderabad, India
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-center text-xs text-muted-foreground md:flex-row md:text-left">
          <span>
            © {year} {siteConfig.authorName}. All rights reserved.
          </span>
          <span className="inline-flex items-center gap-1.5">
            Built with <Icons.arrowRight className="h-3 w-3 rotate-180" />
            <Link
              href={siteConfig.links.getcollab}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-brand-600 hover:underline"
            >
              getcollab.in
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
