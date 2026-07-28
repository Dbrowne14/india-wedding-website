import { VENUE } from "@/content/destination";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function GiovanniVillage() {
  return (
    <section
      id="venue"
      className="scroll-mt-[72px] bg-cream px-[clamp(20px,6vw,64px)] py-[clamp(72px,9vw,120px)]"
    >
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-start gap-[clamp(32px,5vw,64px)] md:grid-cols-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
          <ImagePlaceholder
            src={VENUE.imageSrc}
            alt={VENUE.imageAlt}
            className="h-full w-full"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <span className="absolute bottom-4 left-4 rounded-full border border-ink/10 bg-cream/90 px-4 py-2 text-[11px] font-bold tracking-[0.14em] text-ink uppercase">
            {VENUE.badge}
          </span>
        </div>

        <div>
          <p className="m-0 mb-3.5 text-[11px] font-bold tracking-[0.24em] text-accent uppercase">
            {VENUE.eyebrow}
          </p>
          <h2 className="m-0 font-serif text-[clamp(30px,4vw,44px)] leading-[1.12] font-medium text-ink">
            {VENUE.name}
          </h2>
          <p className="m-0 mt-2 mb-5 font-serif text-[17px] text-taupe italic">
            {VENUE.location}
          </p>

          {VENUE.paragraphs.map((paragraph) => (
            <p key={paragraph} className="m-0 mb-4 max-w-[540px] text-[15.5px] leading-[1.7] text-body">
              {paragraph}
            </p>
          ))}

          <div className="mt-6 flex flex-col gap-4 border-t border-ink/10 pt-6">
            <div className="grid grid-cols-[minmax(0,110px)_minmax(0,1fr)] gap-x-[18px] gap-y-1">
              <p className="m-0 text-[11px] font-bold tracking-[0.14em] text-taupe uppercase">
                Address
              </p>
              <p className="m-0 max-w-[380px] text-[14.5px] leading-[1.6] whitespace-pre-line text-body">
                {VENUE.address}
              </p>
            </div>
            <div className="grid grid-cols-[minmax(0,110px)_minmax(0,1fr)] gap-x-[18px] gap-y-1">
              <p className="m-0 text-[11px] font-bold tracking-[0.14em] text-taupe uppercase">
                Getting there
              </p>
              <p className="m-0 max-w-[380px] text-[14.5px] leading-[1.6] text-body">
                {VENUE.gettingThere}
              </p>
            </div>
          </div>

          <a
            href={VENUE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-[15px] text-[12.5px] font-bold tracking-[0.14em] text-cream uppercase transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(60,25,30,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="flex-none"
            >
              <path d="M12 21s7-7.5 7-12.5A7 7 0 0 0 5 8.5C5 13.5 12 21 12 21Z" />
              <circle cx="12" cy="8.5" r="2.4" />
            </svg>
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
