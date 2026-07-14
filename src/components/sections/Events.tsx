import { EVENTS } from "@/content/events";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ColorSwatch } from "@/components/ui/ColorSwatch";

export function Events() {
  return (
    <section
      id="events"
      className="scroll-mt-[72px] bg-ink px-[clamp(20px,6vw,64px)] py-[clamp(72px,9vw,120px)] text-parchment"
    >
      <div className="mx-auto max-w-[1160px]">
        <SectionIntro
          tone="dark"
          eyebrow="The celebration"
          heading="Events & what to wear"
          lead="Every event with its dress code and suggested colours, in one place. Indian clothing is warmly encouraged but never required — you will look wonderful either way, and Mumbai and Bhopal are both great places to pick something up."
          leadClassName="max-w-[640px]"
        />

        <div className="mt-11 grid grid-cols-[repeat(auto-fit,minmax(min(100%,330px),1fr))] gap-5">
          {EVENTS.map((event) => (
            <article
              key={event.name}
              className="rounded-[18px] border border-cream/[0.13] bg-cream/[0.05] px-[26px] py-7 transition-[background,transform] duration-300 hover:-translate-y-1 hover:bg-cream/[0.09]"
            >
              <div className="mb-[18px] flex flex-wrap gap-3">
                {event.swatchHexes.map((hex, index) => (
                  <ColorSwatch
                    key={`${event.name}-${hex}-${index}`}
                    hex={hex}
                    tone="light"
                  />
                ))}
              </div>
              <p className="m-0 mb-1 text-[10.5px] font-bold tracking-[0.2em] text-parchment/55 uppercase">
                {event.day}
              </p>
              <h3 className="m-0 mb-1.5 font-serif text-[27px] font-semibold text-cream">
                {event.name}
              </h3>
              <p className="m-0 mb-3.5 font-serif text-[17.5px] leading-[1.4] text-gold italic">
                {event.tagline}
              </p>
              <p className="m-0 mb-5">
                <span className="inline-block rounded-full border border-cream/30 px-[13px] py-1.5 text-[11px] font-bold tracking-[0.08em] text-parchment uppercase">
                  {event.participation}
                </span>
              </p>
              <div className="flex flex-col gap-3">
                {event.rows.map((row) => (
                  <div key={row.label}>
                    <p className="m-0 mb-0.5 text-[10px] font-bold tracking-[0.18em] text-parchment/50 uppercase">
                      {row.label}
                    </p>
                    <p className="m-0 text-[13.5px] leading-[1.6] text-parchment/90">
                      {row.text}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
