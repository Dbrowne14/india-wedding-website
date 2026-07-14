import { namedColor } from "@/content/colors";

type ColorSwatchProps = {
  hex: string;
  /** Visual size in pixels. Defaults to the 22px dots used on event cards. */
  size?: number;
  tone?: "light" | "dark";
};

/**
 * A colour dot plus its written name (visually hidden by default, revealed
 * on small screens/hover) so colour meaning isn't conveyed by hue alone.
 */
export function ColorSwatch({ hex, size = 22, tone = "dark" }: ColorSwatchProps) {
  const { name } = namedColor(hex);
  return (
    <span className="inline-flex items-center gap-1.5" title={name}>
      <span
        aria-hidden="true"
        className={`inline-block rounded-full border ${
          tone === "dark" ? "border-black/10" : "border-cream/25"
        }`}
        style={{ width: size, height: size, background: hex }}
      />
      <span
        className={`text-[10px] font-semibold tracking-wide uppercase ${
          tone === "dark" ? "text-ink/55" : "text-cream/65"
        }`}
      >

      </span>
    </span>
  );
}
