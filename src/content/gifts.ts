export type GiftRow = {
  label: string;
  value: string;
  /** What actually gets copied, when it differs from `value` (spaces/dashes stripped). */
  copyValue?: string;
};

export type GiftRoute = {
  title: string;
  glyph: string;
  sub: string;
  note?: string;
  // wiseUrl?: string; // reserved for a future Wise payment link
};

export type GiftRouteId = "uk" | "intl";

/** Response shape of GET /api/gift-details?route=<GiftRouteId>. */
export type GiftDetailsResponse = { rows: GiftRow[] };

export const GIFTS_PARAGRAPHS = [
  "Having you celebrate with us in India is more than enough, and we truly don't expect gifts from anyone.",
  "For those who have asked, rather than having a traditional wedding registry, we wanted to share something that feels a little more personal to us. As we build our life together in London, Sushmeena has to renew her UK visa every two and a half years, with the next application coming up in 2027. It's a significant process, both personally and financially, and an important part of being able to continue the life we're building together here in London.",
  "So, for anyone who would like to give us a wedding gift, helping us towards that next chapter would mean more to us than anything we could put on a traditional registry.",
  "It's perhaps an unusual wedding gift, but it's one that represents something very simple and very important to us — being able to keep building our home and our future together."
];

export const GIFT_REFERENCE_NOTE = "Please use your name as the reference, so we know who to thank.";

// Client-safe card content only. The bank details themselves are server-only:
// see src/lib/giftDetails.ts, served by src/app/api/gift-details/route.ts.
export const GIFT_ROUTES: Record<GiftRouteId, GiftRoute> = {
  uk: {
    title: "UK bank transfer",
    glyph: "£",
    sub: "For guests transferring from a UK bank account.",
  },
  intl: {
    title: "International transfer",
    glyph: "↔",
    sub: "For guests transferring from outside the UK.",
    note: "Sending from abroad? Services such as Wise often offer better exchange rates and lower fees than a bank transfer.",
  },
};

export function isGiftRouteId(value: string | null): value is GiftRouteId {
  return value !== null && Object.hasOwn(GIFT_ROUTES, value);
}
