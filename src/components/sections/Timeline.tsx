import { ARRIVAL_NOTE, ITINERARY_DAYS } from "@/content/itinerary";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function Timeline() {
  return (
    <section
      id="timeline"
      className="scroll-mt-[72px] border-y border-ink/[0.07] bg-parchment px-[clamp(20px,6vw,64px)] py-[clamp(72px,9vw,120px)]"
    >
      <div className="mx-auto max-w-[880px]">
        <SectionIntro
          eyebrow="The journey"
          heading="Suggested itinerary"
          lead="Seven days, two cities, one celebration. Arrive early, fall for Mumbai, then join us in Bhopal."
          leadClassName="max-w-[560px]"
        />

        <div className="mt-12">
          {ITINERARY_DAYS.map((day) => (
            <div key={day.date} className="grid grid-cols-[56px_1fr] gap-x-[clamp(14px,3vw,28px)]">
              <div className="flex flex-col items-center">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-[13px] w-[13px] flex-none rounded-full border-[3px] border-parchment"
                  style={{ background: day.dotColor, boxShadow: `0 0 0 1.5px ${day.dotColor}` }}
                />
                <span className="my-1.5 w-[1.5px] flex-1 bg-ink/[0.16]" />
              </div>
              <div className="pb-[clamp(32px,5vw,48px)]">
                <p className="m-0 mb-1.5 text-[11px] font-bold tracking-[0.22em] text-taupe uppercase">
                  {day.date}
                </p>
                <h3 className="m-0 mb-2 font-serif text-[clamp(23px,3vw,29px)] font-semibold text-ink">
                  {day.title}
                </h3>
                <p className="m-0 max-w-[600px] text-[15px] leading-[1.7] text-muted">
                  {day.description}
                </p>
                {day.moments && day.moments.length > 0 ? (
                  <div className="mt-[18px] flex max-w-[600px] flex-col gap-2.5">
                    {day.moments.map((moment) => (
                      <div
                        key={`${day.date}-${moment.name}`}
                        className="grid grid-cols-[88px_1fr] items-baseline gap-3.5 rounded-xl border border-ink/[0.09] bg-cream px-[18px] py-3.5"
                      >
                        <span className="text-[11.5px] font-bold tracking-[0.08em] text-accent">
                          {moment.time}
                        </span>
                        <span className="text-[14.5px] leading-[1.55] text-ink/85">
                          <strong className="font-bold text-ink">{moment.name}</strong> — {moment.note}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <p className="m-0 mt-2 text-[13px] text-taupe italic">{ARRIVAL_NOTE}</p>
      </div>
    </section>
  );
}
