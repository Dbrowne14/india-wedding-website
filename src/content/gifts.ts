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
  rows: GiftRow[];
  note?: string;
  // wiseUrl?: string; // reserved for a future Wise payment link
};

export type GiftRouteId = "uk" | "intl";

export const GIFTS_PARAGRAPHS = [
  "Having you celebrate with us in India is more than enough, and we truly don't expect gifts from anyone.",
  "For those who have asked, rather than having a traditional wedding registry, we wanted to share something that feels a little more personal to us. As we build our life together in London, Sushmeena has to renew her UK visa every two and a half years, with the next application coming up in 2027. It's a significant process, both personally and financially, and an important part of being able to continue the life we're building together here in London.",
  "So, for anyone who would like to give us a wedding gift, helping us towards that next chapter would mean more to us than anything we could put on a traditional registry.",
  "It's perhaps an unusual wedding gift, but it's one that represents something very simple and very important to us — being able to keep building our home and our future together."
];

export const GIFT_REFERENCE_NOTE = "Please use your name as the reference, so we know who to thank.";

// Bank details come from env vars so they stay out of this public repo (see
// .env.example). NEXT_PUBLIC_ values are inlined into the client bundle at
// build time, so they are hidden from git, not from site visitors. Each one
// must be referenced literally for Next.js to inline it.
const NOT_SET = "[not set]";

function envRow(label: string, value: string | undefined): GiftRow {
  const shown = value?.trim() || NOT_SET;
  // Strip spaces/dashes so sort codes and IBANs paste cleanly into banking apps.
  const compact = shown.replace(/[\s-]/g, "");
  return compact === shown ? { label, value: shown } : { label, value: shown, copyValue: compact };
}

const ACCOUNT_NAME = process.env.NEXT_PUBLIC_GIFT_ACCOUNT_NAME;

export const GIFT_ROUTES: Record<GiftRouteId, GiftRoute> = {
  uk: {
    title: "UK bank transfer",
    glyph: "£",
    sub: "For guests transferring from a UK bank account.",
    rows: [
      envRow("Account name", ACCOUNT_NAME),
      envRow("Sort code", process.env.NEXT_PUBLIC_GIFT_UK_SORT_CODE),
      envRow("Account number", process.env.NEXT_PUBLIC_GIFT_UK_ACCOUNT_NUMBER),
    ],
  },
  intl: {
    title: "International transfer",
    glyph: "↔",
    sub: "For guests transferring from outside the UK.",
    rows: [
      envRow("Account name", ACCOUNT_NAME),
      envRow("IBAN", process.env.NEXT_PUBLIC_GIFT_INTL_IBAN),
      envRow("BIC / SWIFT", process.env.NEXT_PUBLIC_GIFT_INTL_BIC),
    ],
    note: "Sending from abroad? Services such as Wise often offer better exchange rates and lower fees than a bank transfer.",
  },
};
