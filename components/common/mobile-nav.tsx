"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { routesConfig } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { useLockBody } from "@/hooks/use-lock-body";

interface MobileNavProps {
  onClose: () => void;
}

export function MobileNav({ onClose }: MobileNavProps) {
  useLockBody();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-x-0 top-16 z-50 h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
    >
      <nav className="container flex flex-col py-4">
        {routesConfig.mainNav.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * index, duration: 0.25 }}
          >
            <Link
              href={item.href}
              onClick={onClose}
              className="flex items-center justify-between border-b border-border/60 py-4 font-heading text-2xl tracking-tight"
            >
              {item.title}
              <Icons.arrowRight className="h-5 w-5 text-muted-foreground" />
            </Link>
          </motion.div>
        ))}

        <div className="mt-6 flex flex-col gap-3">
          <Link
            href={siteConfig.links.getcollab}
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
            className="flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-4 text-base font-semibold text-primary-foreground"
          >
            <Icons.globe className="h-5 w-5" />
            Visit getcollab.in
          </Link>
          <a
            href={siteConfig.links.email}
            className="flex items-center justify-center gap-2 rounded-full border border-border px-6 py-4 text-base font-semibold"
          >
            <Icons.gmail className="h-5 w-5" />
            {siteConfig.links.email.replace("mailto:", "")}
          </a>
        </div>
      </nav>
    </motion.div>
  );
}
