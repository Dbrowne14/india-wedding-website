import { FAQS } from "@/content/faq";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Accordion, type AccordionItemData } from "@/components/ui/Accordion";

export function Faq() {
  const items: AccordionItemData[] = FAQS.map((faq, index) => ({
    id: `faq-${index}`,
    trigger: (
      <span className="flex w-full items-center gap-4 text-left">
        <span className="flex-1 text-[16.5px] leading-[1.4] font-semibold text-ink">
          {faq.question}
        </span>
        <span
          aria-hidden="true"
          className="w-[22px] flex-none rotate-0 text-center font-serif text-[22px] text-accent transition-transform duration-200 group-aria-expanded:rotate-45"
        >
          +
        </span>
      </span>
    ),
    content: (
      <p className="m-0 py-0 pr-10 pb-[22px] pl-1 text-[15px] leading-[1.75] text-body">
        {faq.answer}
      </p>
    ),
  }));

  return (
    <section id="faq" className="scroll-mt-[72px] px-[clamp(20px,6vw,64px)] py-[clamp(72px,9vw,120px)]">
      <div className="mx-auto max-w-[760px]">
        <SectionIntro eyebrow="Questions" heading="Asked & answered" />

        <Accordion
          items={items}
          defaultOpenId={null}
          className="mt-10 border-t border-ink/[0.12]"
          itemClassName="border-b border-ink/[0.12]"
          triggerClassName="group flex w-full cursor-pointer items-center gap-4 bg-transparent px-1 py-5 text-left font-sans hover:bg-ink/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        />
      </div>
    </section>
  );
}
