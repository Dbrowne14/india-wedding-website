"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/content/nav";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

/**
 * Sticky section nav. One client component covers both jobs the page needs
 * JS for here: scroll-spy active-link highlighting (IntersectionObserver)
 * and the small-screen menu toggle. The actual scrolling is left to the
 * browser via <a href="#id"> + CSS scroll-margin/scroll-behavior, so it
 * automatically respects prefers-reduced-motion.
 */
export function Nav() {
  const [activeId, setActiveId] = useState<string>(NAV_ITEMS[0]?.id ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActiveId(topMost.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <nav
      aria-label="Sections"
      className="sticky top-0 z-[60] border-b border-ink/[0.09] bg-cream/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-[1200px] items-center gap-6 px-[clamp(16px,4vw,40px)]">
        <a
          href="#home"
          aria-label="Top"
          className="flex-none rounded-sm py-3.5 font-serif text-[19px] font-semibold tracking-[0.06em] text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        >
          S&nbsp;·&nbsp;D
        </a>

        <div className="no-scrollbar hidden flex-1 justify-end gap-0.5 overflow-x-auto md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`flex-none rounded-sm px-[11px] py-4 text-xs tracking-[0.1em] uppercase transition-colors duration-200 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${
                  isActive ? "font-bold text-ink" : "font-semibold text-taupe"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="ml-auto flex-none rounded-sm p-2 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream md:hidden"
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      <div
        id="mobile-nav-panel"
        hidden={!mobileOpen}
        className="border-t border-ink/[0.09] bg-cream md:hidden"
      >
        <ul className="flex flex-col px-[clamp(16px,4vw,40px)] py-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={`block rounded-sm py-3 text-sm tracking-[0.08em] uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${
                    isActive ? "font-bold text-ink" : "font-semibold text-taupe"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
