import "server-only";

import type { GiftRouteId, GiftRow } from "@/content/gifts";

// Bank details live in server-only env vars (see .env.example) so they stay out
// of this public repo and out of the client bundle. They are read at request
// time and only sent to a browser when a guest opens a transfer route.
const NOT_SET = "[not set]";

/**
 * `compact` strips spaces/dashes from the copied value so sort codes and IBANs
 * paste cleanly into banking apps. Leave it off for names, which need spaces.
 */
function envRow(label: string, value: string | undefined, compact = false): GiftRow {
  const shown = value?.trim() || NOT_SET;
  const copyValue = compact ? shown.replace(/[\s-]/g, "") : shown;
  return copyValue === shown ? { label, value: shown } : { label, value: shown, copyValue };
}

export function getGiftRows(id: GiftRouteId): GiftRow[] {
  const accountName = envRow("Account name", process.env.GIFT_ACCOUNT_NAME);

  if (id === "uk") {
    return [
      accountName,
      envRow("Sort code", process.env.GIFT_UK_SORT_CODE, true),
      envRow("Account number", process.env.GIFT_UK_ACCOUNT_NUMBER, true),
    ];
  }

  return [
    accountName,
    envRow("IBAN", process.env.GIFT_INTL_IBAN, true),
    envRow("BIC / SWIFT", process.env.GIFT_INTL_BIC, true),
  ];
}
