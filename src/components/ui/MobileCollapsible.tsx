"use client";

import { useId, useState } from "react";

type MobileCollapsibleProps = {
  /** Noun used in the toggle button's accessible/visible label, e.g. "India Guide". */
  label: string;
  defaultOpen?: boolean;
  className?: string;
  children: React.ReactNode;
};

/**
 * Wraps `children` in a toggle that only exists below the `md` breakpoint —
 * at `md` and up the button is hidden and the content is forced open via
 * `md:grid-rows-[1fr]` (same "later utility wins" mechanism as `md:flex`
 * overriding `hidden`), so the desktop layout is untouched either way.
 */
export function MobileCollapsible({
  label,
  defaultOpen = false,
  className,
  children,
}: MobileCollapsibleProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group mb-5 flex w-full items-center justify-between gap-3 rounded-xl border border-ink/[0.09] bg-cream px-5 py-3.5 text-left text-[13px] font-bold tracking-[0.08em] text-ink uppercase transition-colors duration-200 hover:bg-parchment focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-parchment md:hidden"
      >
        <span>
          {open ? "Hide" : "Show"} {label}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="flex-none text-accent transition-transform duration-200 group-aria-expanded:rotate-180"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out md:grid-rows-[1fr] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
