import Image from "next/image";

type ImagePlaceholderProps = {
  /** Path under /public, e.g. "/images/placeholders/hero.svg". Swap for a real photo later. */
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Stands in for the Claude Design `<image-slot>` placeholders. Swap the
 * `src` for a real photo later — the surrounding layout/aspect ratio is
 * controlled by the parent, and `--pf` (photo tone) still applies.
 */
export function ImagePlaceholder({
  src,
  alt,
  className,
  sizes = "100vw",
  priority,
}: ImagePlaceholderProps) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`} style={{ filter: "var(--pf, none)" }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
