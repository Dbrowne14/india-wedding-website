"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL } from "@/content/contacts";
import {
  GIFT_REFERENCE_NOTE,
  GIFT_ROUTES,
  GIFTS_PARAGRAPHS,
  type GiftRouteId,
} from "@/content/gifts";
import { SectionIntro } from "@/components/ui/SectionIntro";

const COPIED_RESET_MS = 1800;

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Fall through to the execCommand fallback below.
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    document.body.removeChild(textarea);
  }
}

/**
 * Bank details stay hidden until a guest picks a route (UK / international).
 * Only one route is open at a time; clicking the open card again closes it.
 */
export function Gifts() {
  const [selected, setSelected] = useState<GiftRouteId | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  async function handleCopy(key: string, text: string) {
    const ok = await copyText(text);
    if (!ok) return;
    if (resetTimer.current) clearTimeout(resetTimer.current);
    setCopiedKey(key);
    resetTimer.current = setTimeout(() => setCopiedKey(null), COPIED_RESET_MS);
  }

  const route = selected ? GIFT_ROUTES[selected] : null;

  // On mobile (single column) the panel sits directly under the card that
  // opened it; from `sm` up `order-last` moves it below both cards.
  const details =
    route && selected ? (
      <div
        key={selected}
        id="gift-details"
        role="region"
        aria-label={`${route.title} details`}
        className="col-span-full animate-[rise_0.5s_ease_both] sm:order-last rounded-[18px] border border-ink/[0.1] bg-white p-[clamp(22px,4vw,34px)]"
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <h3 className="m-0 font-serif text-[clamp(23px,3vw,28px)] leading-[1.2] font-semibold text-ink">
            {route.title}
          </h3>
          <button
            type="button"
            onClick={() => setSelected(null)}
            className={`mt-1.5 flex-none cursor-pointer rounded-sm bg-transparent text-[11px] font-bold tracking-[0.14em] text-[#8a7c6c] uppercase transition-colors duration-200 hover:text-ink ${focusRing} focus-visible:ring-offset-white`}
          >
            Hide details
          </button>
        </div>

        <dl className="m-0 border-t border-ink/[0.1]">
          {route.rows.map((row) => {
            const key = `${selected}:${row.label}`;
            const isCopied = copiedKey === key;
            return (
              <div
                key={row.label}
                className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1.5 border-b border-ink/[0.1] py-3.5 sm:grid-cols-[130px_1fr_auto]"
              >
                <dt className="col-start-1 row-start-1 text-[10.5px] font-bold tracking-[0.2em] text-[#8a7c6c] uppercase">
                  {row.label}
                </dt>
                <dd className="col-start-1 row-start-2 m-0 min-w-0 text-base font-semibold tracking-[0.04em] break-words text-ink tabular-nums sm:col-start-2 sm:row-start-1">
                  {row.value}
                </dd>
                <button
                  type="button"
                  onClick={() => handleCopy(key, row.copyValue ?? row.value)}
                  aria-label={`Copy ${row.label}`}
                  className={`col-start-2 row-span-2 row-start-1 min-w-[84px] cursor-pointer sm:col-start-3 sm:row-span-1 rounded-full border px-4 py-2 text-[11px] font-bold tracking-[0.12em] uppercase transition-colors duration-200 ${focusRing} focus-visible:ring-offset-white ${
                    isCopied
                      ? "border-ink bg-ink text-cream"
                      : "border-ink/25 bg-transparent text-ink hover:border-ink"
                  }`}
                >
                  {isCopied ? "Copied" : "Copy"}
                </button>
              </div>
            );
          })}
        </dl>

        <div className="mt-[22px] rounded-xl bg-cream px-[18px] py-4">
          <p className="m-0 mb-1 text-[10.5px] font-bold tracking-[0.2em] text-accent uppercase">
            Payment reference
          </p>
          <p className="m-0 text-[14.5px] leading-[1.6] text-body">{GIFT_REFERENCE_NOTE}</p>
        </div>

        {route.note ? (
          <p className="m-0 mt-4 text-[13.5px] leading-[1.6] text-muted">{route.note}</p>
        ) : null}
      </div>
    ) : null;

  return (
    <section
      id="gifts"
      className="scroll-mt-[72px] border-t border-ink/[0.07] bg-parchment px-[clamp(20px,6vw,64px)] py-[clamp(72px,9vw,120px)]"
    >
      <div className="mx-auto max-w-[880px] text-left">
        <SectionIntro eyebrow="Gifts" heading="Our Next Chapter" />

        <div className="mt-6 flex flex-col gap-4">
          {GIFTS_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="m-0 text-base leading-[1.75] text-pretty text-body">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {(Object.keys(GIFT_ROUTES) as GiftRouteId[]).map((id) => {
            const option = GIFT_ROUTES[id];
            const isSelected = selected === id;
            return (
              <Fragment key={id}>
                <button
                  type="button"
                  onClick={() => setSelected(isSelected ? null : id)}
                  aria-expanded={isSelected}
                  aria-controls="gift-details"
                  className={`flex cursor-pointer items-start gap-4 rounded-2xl border px-[22px] pt-[22px] pb-5 text-left font-sans transition-[transform,box-shadow,background-color,border-color] duration-300 hover:-translate-y-[3px] hover:shadow-[0_14px_30px_-18px_rgba(34,27,21,0.35)] ${focusRing} focus-visible:ring-offset-parchment ${
                    isSelected ? "border-accent bg-white" : "border-ink/[0.09] bg-cream"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-full bg-accent/[0.08] font-serif text-[19px] font-semibold text-accent"
                  >
                    {option.glyph}
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="font-serif text-[22px] leading-[1.2] font-semibold text-ink">
                      {option.title}
                    </span>
                    <span className="text-sm leading-[1.5] text-muted">{option.sub}</span>
                    <span className="mt-2 text-[11px] font-bold tracking-[0.14em] text-accent uppercase">
                      {isSelected ? "Showing details" : "View details"}
                    </span>
                  </span>
                </button>
                {isSelected ? details : null}
              </Fragment>
            );
          })}
        </div>

        <p aria-live="polite" className="sr-only">
          {copiedKey ? "Copied" : ""}
        </p>

        <p className="m-0 mt-7 text-[13px] text-[#8a7c6c]">
          Questions about gifts?{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={`rounded-sm text-accent underline-offset-2 hover:underline ${focusRing} focus-visible:ring-offset-parchment`}
          >
            {CONTACT_EMAIL}
          </a>
        </p>

        <p className="m-0 mt-9 font-serif text-[clamp(22px,3vw,28px)] text-muted italic">
          Thank you ❤️
        </p>
      </div>
    </section>
  );
}
