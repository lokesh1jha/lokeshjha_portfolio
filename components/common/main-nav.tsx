"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { routesConfig } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function MainNav() {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const [scrolled, setScrolled] = React.useState<boolean>(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled || showMobileMenu
          ? "border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href="#top"
          onClick={() => setShowMobileMenu(false)}
          className="flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500 font-heading text-xl text-primary-foreground shadow-glow">
            G
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-base tracking-tight md:text-lg">
              {siteConfig.authorName}
            </span>
            <span className="mt-1 hidden text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:block">
              Co-Founder &amp; CEO · GetCollab
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {routesConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={siteConfig.links.getcollab}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-full bg-brand-500 px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-400 sm:inline-flex"
          >
            getcollab.in
            <Icons.externalLink className="h-4 w-4" />
          </Link>
          <ModeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setShowMobileMenu((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-accent md:hidden"
          >
            {showMobileMenu ? (
              <Icons.close className="h-5 w-5" />
            ) : (
              <Icons.menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showMobileMenu && (
          <MobileNav onClose={() => setShowMobileMenu(false)} />
        )}
      </AnimatePresence>
    </header>
  );
}
