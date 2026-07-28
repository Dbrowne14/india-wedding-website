import { CONTACT_EMAIL, GENERAL_CONTACTS, WEDDING_CONTACTS, type ContactCard } from "@/content/contacts";
import { COUPLE_NAMES, WEDDING_DATE_LABEL } from "@/content/site";
import { SectionIntro } from "@/components/ui/SectionIntro";

function PhoneIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="flex-none"
    >
      <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
    </svg>
  );
}

function GroupHeading({ title, note }: { title: string; note: string }) {
  return (
    <div className="mb-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <h3 className="m-0 font-serif text-[clamp(22px,2.8vw,27px)] font-semibold text-cream">{title}</h3>
      <p className="m-0 font-serif text-[14px] text-parchment/50 italic">{note}</p>
    </div>
  );
}

function HighlightedCard({ contact }: { contact: ContactCard }) {
  return (
    <div className="rounded-2xl border border-gold/25 bg-accent/15 px-5.5 py-6">
      <p className="m-0 mb-1.5 text-[10.5px] font-bold tracking-[0.2em] text-gold uppercase">
        {contact.role}
      </p>
      <p className="m-0 mb-2 font-serif text-2xl font-semibold text-cream">{contact.name}</p>
      <p className="m-0 text-[13.5px] leading-[1.6] text-parchment/75">{contact.note}</p>
      {contact.phone ? (
        <a
          href={contact.phone.href}
          className="mt-3 inline-flex items-center gap-1.5 rounded-sm text-[13.5px] font-semibold text-gold hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          <PhoneIcon />
          {contact.phone.label}
        </a>
      ) : null}
    </div>
  );
}

function SecondaryCard({ contact }: { contact: ContactCard }) {
  return (
    <div className="rounded-2xl border border-cream/13 bg-cream/5 px-6 py-6.5">
      <p className="m-0 mb-1.5 text-[10.5px] font-bold tracking-[0.2em] text-gold uppercase">
        {contact.role}
      </p>
      <p className="m-0 mb-2 font-serif text-2xl font-semibold text-cream">{contact.name}</p>
      <p className="m-0 max-w-[420px] text-[13.5px] leading-[1.6] text-parchment/75">{contact.note}</p>
    </div>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-18 bg-ink px-[clamp(20px,6vw,64px)] pt-[clamp(72px,9vw,120px)] pb-[clamp(48px,6vw,72px)] text-parchment"
    >
      <div className="mx-auto max-w-290">
        <SectionIntro
          tone="dark"
          eyebrow="Here for you"
          heading="Contact"
          lead="Before the trip or in the middle of it — if you need anything at all, reach out. Nothing is too small."
          leadClassName="max-w-[560px]"
        />

        <div className="mt-12">
          <GroupHeading title="During the wedding" note="Your people on the ground in Bhopal" />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4">
            {WEDDING_CONTACTS.map((contact) => (
              <HighlightedCard key={contact.role} contact={contact} />
            ))}
          </div>
        </div>

        <div className="mt-11">
          <GroupHeading title="General questions" note="Before you travel" />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
            {GENERAL_CONTACTS.map((contact) => (
              <SecondaryCard key={contact.role} contact={contact} />
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-cream/13 p-7">
          <div>
            <p className="m-0 mb-1 text-[10.5px] font-bold tracking-[0.2em] text-parchment/55 uppercase">
              Email us anytime
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-sm font-serif text-[clamp(20px,3vw,27px)] font-semibold text-cream hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="rounded-full border border-cream/30 px-6 py-3.5 text-xs font-bold tracking-[0.14em] text-cream uppercase transition-colors duration-200 hover:border-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Write to us
          </a>
        </div>

        <footer>
          <p className="mx-auto mt-16 max-w-2xl text-center font-serif text-[clamp(22px,3.4vw,32px)] text-parchment/85 italic">
            We can&apos;t wait to celebrate with you.
          </p>
          <p className="mt-4 text-center text-[11px] font-bold tracking-[0.28em] text-parchment/40 uppercase">
            {COUPLE_NAMES.bride} &amp; {COUPLE_NAMES.groom} · India · {WEDDING_DATE_LABEL}
          </p>
        </footer>
      </div>
    </section>
  );
}
