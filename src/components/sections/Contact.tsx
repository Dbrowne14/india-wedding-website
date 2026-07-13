import { CONTACTS, CONTACT_EMAIL } from "@/content/contacts";
import { COUPLE_NAMES, WEDDING_DATE_LABEL } from "@/content/site";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-[72px] bg-ink px-[clamp(20px,6vw,64px)] pt-[clamp(72px,9vw,120px)] pb-[clamp(48px,6vw,72px)] text-parchment"
    >
      <div className="mx-auto max-w-[1160px]">
        <SectionIntro
          tone="dark"
          eyebrow="Here for you"
          heading="Contact"
          lead="Before the trip or in the middle of it — if you need anything at all, reach out. Nothing is too small."
          leadClassName="max-w-[560px]"
        />

        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4">
          {CONTACTS.map((contact) => (
            <div
              key={contact.role}
              className="rounded-2xl border border-cream/[0.13] bg-cream/[0.05] px-[22px] py-6"
            >
              <p className="m-0 mb-1.5 text-[10.5px] font-bold tracking-[0.2em] text-gold uppercase">
                {contact.role}
              </p>
              <p className="m-0 mb-2 font-serif text-2xl font-semibold text-cream">{contact.name}</p>
              <p className="m-0 text-[13.5px] leading-[1.6] text-parchment/75">{contact.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-cream/[0.13] p-7">
          <div>
            <p className="m-0 mb-1 text-[10.5px] font-bold tracking-[0.2em] text-parchment/55 uppercase">
              Email us anytime
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-serif text-[clamp(20px,3vw,27px)] font-semibold text-cream hover:text-gold"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="rounded-full border border-cream/30 px-6 py-3.5 text-xs font-bold tracking-[0.14em] text-cream uppercase transition-colors duration-200 hover:border-cream"
          >
            Write to us
          </a>
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-center font-serif text-[clamp(22px,3.4vw,32px)] text-parchment/85 italic">
          We can&apos;t wait to celebrate with you.
        </p>
        <p className="mt-4 text-center text-[11px] font-bold tracking-[0.28em] text-parchment/40 uppercase">
          {COUPLE_NAMES.bride} &amp; {COUPLE_NAMES.groom} · India · {WEDDING_DATE_LABEL}
        </p>
      </div>
    </section>
  );
}
