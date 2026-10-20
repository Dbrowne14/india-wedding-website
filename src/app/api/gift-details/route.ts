import type { NextRequest } from "next/server";
import { isGiftRouteId, type GiftDetailsResponse } from "@/content/gifts";
import { getGiftRows } from "@/lib/giftDetails";

/**
 * Returns the bank details for one gift route, fetched by the Gifts section
 * only when a guest opens that route. Route Handlers aren't cached by default;
 * the headers also keep the response out of shared caches and search indexes.
 */
export function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("route");
  if (!isGiftRouteId(id)) {
    return Response.json({ error: "Unknown gift route" }, { status: 400 });
  }

  const body: GiftDetailsResponse = { rows: getGiftRows(id) };
  return Response.json(body, {
    headers: {
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}
