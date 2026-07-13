type SectionIntroProps = {
  eyebrow: string;
  heading: string;
  lead?: string;
  tone?: "light" | "dark";
  leadClassName?: string;
};

/** Eyebrow + heading (+ optional lead paragraph) repeated at the top of every section. */
export function SectionIntro({
  eyebrow,
  heading,
  lead,
  tone = "light",
  leadClassName = "max-w-xl",
}: SectionIntroProps) {
  const eyebrowColor = tone === "dark" ? "text-gold" : "text-accent";
  const headingColor = tone === "dark" ? "text-cream" : "text-ink";
  const leadColor = tone === "dark" ? "text-parchment/75" : "text-muted";

  return (
    <>
      <p className={`m-0 mb-3.5 text-[11px] font-bold uppercase tracking-[0.24em] ${eyebrowColor}`}>
        {eyebrow}
      </p>
      <h2
        className={`m-0 font-serif text-[clamp(30px,4vw,44px)] font-medium leading-[1.12] ${headingColor} ${
          lead ? "mb-3" : ""
        }`}
      >
        {heading}
      </h2>
      {lead ? (
        <p className={`mt-0 text-[15.5px] leading-[1.7] ${leadColor} ${leadClassName}`}>{lead}</p>
      ) : null}
    </>
  );
}
