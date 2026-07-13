import { INDIA_GUIDE } from "@/content/indiaGuide";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Icon } from "@/components/icons";

export function IndiaGuide() {
  return (
    <section
      id="india"
      className="scroll-mt-[72px] border-y border-ink/[0.07] bg-parchment px-[clamp(20px,6vw,64px)] py-[clamp(72px,9vw,120px)]"
    >
      <div className="mx-auto max-w-[1160px]">
        <SectionIntro
          eyebrow="Know before you go"
          heading="India guide"
          lead="India can feel intense at first — it is also vibrant, welcoming and unforgettable. A little preparation goes a very long way. Everything practical, at a glance."
          leadClassName="max-w-[620px]"
        />

        <div className="mt-11 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
          {INDIA_GUIDE.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-ink/[0.09] bg-cream px-[22px] pt-[22px] pb-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(34,27,21,0.08)]"
            >
              <div className="mb-3.5 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-accent/[0.08] text-accent">
                <Icon name={card.icon} />
              </div>
              <h3 className="m-0 mb-2.5 font-serif text-[21px] font-semibold text-ink">
                {card.title}
              </h3>
              <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
                {card.points.map((point) => (
                  <li key={point} className="grid grid-cols-[10px_1fr] gap-2 text-[13.5px] leading-[1.55] text-body">
                    <span aria-hidden="true" className="text-xs leading-[1.7] text-accent">
                      ·
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
