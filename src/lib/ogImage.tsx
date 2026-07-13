import { ImageResponse } from "next/og";
import { COUPLE_NAMES, WEDDING_DATE_LABEL, WEDDING_LOCATIONS_LABEL } from "@/content/site";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";
export const ogImageAlt = `${COUPLE_NAMES.bride} & ${COUPLE_NAMES.groom} — India Wedding Guide`;

/** Shared generator for both opengraph-image and twitter-image route conventions. */
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#221B15",
          color: "#FBF7F0",
        }}
      >
        <div
          style={{
            fontSize: 20,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#C99A4E",
            marginBottom: 28,
          }}
        >
          {WEDDING_LOCATIONS_LABEL}
        </div>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 600 }}>
          {`${COUPLE_NAMES.bride} & ${COUPLE_NAMES.groom}`}
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#F4EDE1", marginTop: 30 }}>
          {`India Wedding Guide · ${WEDDING_DATE_LABEL}`}
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
