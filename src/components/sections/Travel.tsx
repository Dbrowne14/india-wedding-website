import { TRAVEL_STEPS } from "@/content/travel";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Accordion, type AccordionItemData } from "@/components/ui/Accordion";

export function Travel() {
  const items: AccordionItemData[] = TRAVEL_STEPS.map((step, index) => ({
    id: `travel-${index}`,
    trigger: (
      <span className="flex w-full items-center gap-4 text-left">
        <span className="w-[26px] flex-none font-serif text-lg text-accent italic">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1">
          <span className="block font-serif text-[22px] font-semibold text-ink">{step.title}</span>
          <span className="mt-0.5 block text-[12.5px] tracking-[0.06em] text-taupe">
            {step.subtitle}
          </span>
        </span>
        <span
          aria-hidden="true"
          className="flex h-[30px] w-[30px] flex-none rotate-0 items-center justify-center rounded-full border border-ink/[0.18] text-base font-normal text-ink transition-transform duration-200 group-aria-expanded:rotate-45"
        >
          +
        </span>
      </span>
    ),
    content: (
      <div className="flex flex-col gap-3.5 border-t border-ink/[0.07] px-[clamp(18px,3vw,28px)] pt-[18px] pb-6">
        {step.rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[minmax(120px,180px)_1fr] items-baseline gap-x-[18px] gap-y-2.5"
          >
            <p className="m-0 text-[11px] font-bold tracking-[0.14em] text-accent uppercase">
              {row.label}
            </p>
            <p className="m-0 text-[14.5px] leading-[1.7] text-body">{row.text}</p>
          </div>
        ))}
      </div>
    ),
  }));

  return (
    <section
      id="travel"
      className="scroll-mt-[72px] px-[clamp(20px,6vw,64px)] py-[clamp(72px,9vw,120px)]"
    >
      <div className="mx-auto max-w-[880px]">
        <SectionIntro
          eyebrow="Getting there"
          heading="Travel guide"
          lead="London to Mumbai, Mumbai to Bhopal — here is the route we recommend, step by step. Your stay during the wedding (check-in 24th, check-out 26th) is taken care of by us."
          leadClassName="max-w-[600px]"
        />

        <Accordion
          items={items}
          defaultOpenId="travel-0"
          className="mt-10 flex flex-col gap-3"
          itemClassName="overflow-hidden rounded-2xl border border-ink/10 bg-cream"
          triggerClassName="group flex w-full cursor-pointer items-center gap-4 bg-transparent px-[clamp(18px,3vw,28px)] py-5 text-left font-sans hover:bg-parchment"
        />

        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[18px]">
          <figure className="m-0">
            <ImagePlaceholder
              src="/images/site/mumbai.jpg"
              alt="Placeholder for a Mumbai photograph"
              className="h-[240px] rounded-2xl"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
            <figcaption className="mt-2 text-center font-serif text-[13px] text-taupe italic">
              View from Bandra Fort, Mumbai
            </figcaption>
          </figure>
          <figure className="m-0">
            <ImagePlaceholder
              src="/images/site/bhopal.jpg"
              alt="Placeholder for a Bhopal photograph"
              className="h-[240px] rounded-2xl"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
            <figcaption className="mt-2 text-center font-serif text-[13px] text-taupe italic">
              Taj-ul-Masajid, Bhopal
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
