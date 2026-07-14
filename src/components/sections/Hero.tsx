import {
  COUPLE_NAMES,
  WEDDING_DATE_LABEL,
  WEDDING_LOCATIONS_LABEL,
} from "@/content/site";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function Hero() {
  return (
    <header
      id="home"
      className="animate-rise px-[clamp(20px,6vw,64px)] pt-[clamp(64px,10vw,140px)] pb-0 text-center"
    >
      <p className="m-0 mb-5 text-[11px] font-bold tracking-[0.3em] text-accent uppercase">
        {WEDDING_LOCATIONS_LABEL}
      </p>
      <h1 className="m-0 font-serif text-[clamp(44px,8.5vw,108px)] leading-[1.02] font-medium tracking-[-0.01em] text-ink">
        {COUPLE_NAMES.bride} <span className="text-accent italic">&amp;</span> {COUPLE_NAMES.groom}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl font-serif text-[clamp(19px,2.6vw,26px)] text-muted italic">
        A celebration across two unforgettable days
      </p>
      <p className="mt-3 text-xs font-bold tracking-[0.26em] text-taupe uppercase">
        {WEDDING_DATE_LABEL}
      </p>

      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <a
          href="#events"
          className="inline-block rounded-full bg-accent px-7 py-[15px] text-[12.5px] font-bold tracking-[0.14em] text-cream uppercase transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(60,25,30,0.22)]"
        >
          Explore the celebration
        </a>
        <a
          href="#travel"
          className="inline-block rounded-full border border-ink/25 px-7 py-[15px] text-[12.5px] font-bold tracking-[0.14em] text-ink uppercase transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-ink"
        >
          Travel guide
        </a>
      </div>

      <div className="mx-auto mt-[clamp(48px,7vw,84px)] h-[clamp(260px,44vw,520px)] max-w-[1160px]">
        <ImagePlaceholder
          src="/images/site/hero_alt.jpg"
          alt="Placeholder for the couple's hero photograph"
          className="h-full w-full rounded-[20px]"
          sizes="(min-width: 1160px) 1160px, 100vw"
          priority
        />
      </div>
    </header>
  );
}
