"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      className="rounded-full"
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
    >
      {mounted && resolvedTheme === "dark" ? (
        <Icons.sun className="h-5 w-5" />
      ) : (
        <Icons.moon className="h-5 w-5" />
      )}
    </Button>
  );
}
