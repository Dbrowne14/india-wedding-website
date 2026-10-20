export type NavItem = {
  id: string;
  label: string;
  /** Shows a small accent dot after the label. Remove once the section is no longer new. */
  isNew?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "timeline", label: "Timeline" },
  { id: "events", label: "Events & Dress" },
  { id: "travel", label: "Travel" },
  { id: "india", label: "India Guide" },
  { id: "faq", label: "FAQ" },
  { id: "gifts", label: "Gifts", isNew: true },
  { id: "contact", label: "Contact" },
];
