// PLACEHOLDER PRODUCTION URL — replace with the real deployed domain before launch.
// Used for metadataBase, Open Graph/Twitter absolute URLs, robots.ts and sitemap.ts.
export const SITE_URL = "https://sush-and-david-wedding.vercel.app/";

export const SITE_TITLE = "David & Sushmeena | India Wedding Guide";

export const SITE_DESCRIPTION =
  "Wedding schedule, ceremony guidance, travel information and practical advice for David and Sushmeena's celebration in India.";

export const COUPLE_NAMES = {
  bride: "Sushmeena",
  groom: "David",
};

export const WEDDING_DATE_LABEL = "November 2026";
export const WEDDING_LOCATIONS_LABEL = "Mumbai · Bhopal · India";

// Theme tokens carried over from the Claude Design file's editable props
// (accent, photoTone). Static here since this build has no CMS/editor.
export const THEME = {
  accent: "#5E1F28",
  photoTone: "natural" as "natural" | "warm" | "mono",
};

export function photoToneFilter(tone: typeof THEME.photoTone): string {
  if (tone === "mono") return "grayscale(1) contrast(1.05)";
  if (tone === "warm") return "sepia(.18) saturate(1.08)";
  return "none";
}
