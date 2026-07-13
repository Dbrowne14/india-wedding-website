// Named swatch colours used across the Events & Dress cards, the itinerary
// timeline dots, and the accent theme options. Keeping names alongside hex
// values lets swatches render an accessible, human-readable label.

export type NamedColor = {
  hex: string;
  name: string;
};

export const COLOR_NAMES: Record<string, string> = {
  "#EBDDC3": "Champagne",
  "#FBF7F0": "Ivory",
  "#8A7C6C": "Warm Taupe",
  "#D9A441": "Marigold",
  "#C46A2B": "Burnt Sienna",
  "#E8B84B": "Golden Yellow",
  "#F4E9C8": "Vanilla Cream",
  "#3B2A55": "Deep Plum",
  "#1F2A44": "Midnight Navy",
  "#2E5950": "Forest Green",
  "#C99A4E": "Antique Gold",
  "#33503E": "Deep Emerald",
  "#221B15": "Espresso Black",
  "#5E1F28": "Deep Maroon",
  "#9C5A1F": "Amber Brown",
};

export function namedColor(hex: string): NamedColor {
  return { hex, name: COLOR_NAMES[hex] ?? hex };
}
