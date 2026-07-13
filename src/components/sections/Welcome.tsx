export function Welcome() {
  return (
    <section className="px-[clamp(20px,6vw,64px)] py-[clamp(72px,9vw,120px)]">
      <div className="mx-auto grid max-w-[1160px] grid-cols-[repeat(auto-fit,minmax(290px,1fr))] items-start gap-[clamp(28px,5vw,72px)]">
        <div>
          <p className="m-0 mb-3.5 text-[11px] font-bold tracking-[0.24em] text-accent uppercase">
            Welcome
          </p>
          <h2 className="m-0 font-serif text-[clamp(30px,4vw,44px)] leading-[1.12] font-medium text-ink">
            Everything you need, thoughtfully prepared
          </h2>
        </div>
        <div className="text-[16px] leading-[1.75] text-body">
          <p className="m-0 mb-[18px]">
            We are so excited to celebrate with you in India. For many of you this will be your
            first visit — and your first Indian wedding — so we have put everything you could
            possibly need in one place.
          </p>
          <p className="m-0 mb-[18px]">
            Think of this as your travel companion: a suggested itinerary, a guide to every
            ceremony, what to wear, how to get around, and the small practical things that make a
            big difference.
          </p>
          <p className="m-0">
            Keep it bookmarked on your phone — it is designed to be just as useful mid-trip as it
            is while you plan. And if anything is unclear, we are only ever a message away.
          </p>
        </div>
      </div>
    </section>
  );
}
