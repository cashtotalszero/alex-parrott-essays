"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

const SCROLL_THRESHOLD = 8;

export default function Header() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 0) {
        setVisible(true);
      } else if (delta > SCROLL_THRESHOLD) {
        setVisible(false);
      } else if (delta < -SCROLL_THRESHOLD) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (ticking.current) {
        return;
      }

      ticking.current = true;
      requestAnimationFrame(update);
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur transition-transform duration-300 ease-in-out motion-reduce:transition-none dark:border-zinc-800 dark:bg-zinc-950/90 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          Alex Parrott
        </Link>
        <nav className="flex gap-6">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-zinc-900 dark:text-zinc-50"
                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
