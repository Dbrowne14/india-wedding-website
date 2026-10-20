# Implement the "Gifts" section on the wedding website

Add a new **Gifts** section to our existing wedding website (Sushmeena & David, India, November 2026). The site is a single long editorial scroll with a sticky nav. Match the existing code conventions, components and styling. Do not add new fonts, colours or libraries.

Before writing code, inspect the existing sections (especially Timeline, Travel, India Guide, FAQ and Contact) and reuse their tokens, card styles, button styles and section patterns. Where a shared component or token already exists (section wrapper, eyebrow label, H2, card, pill button), use it instead of duplicating the styles.

---

## 1. Placement

- Insert the section **between FAQ and Contact**.
- Section anchor id: `gifts`
- Add **"Gifts"** to the sticky nav, between "FAQ" and "Contact".
- Add `gifts` to the scroll-spy list so the nav item highlights when the section is in view (same behaviour as the other items).

---

## 2. Design tokens (from the existing site)

| Token | Value |
|---|---|
| Page background | `#FBF7F0` |
| Alt band background | `#F4EDE1` |
| Ink | `#221B15` |
| Body text | `#4A4138` |
| Secondary text | `#5A4F44` |
| Muted / labels | `#8A7C6C` |
| Accent (theme var) | `var(--ac, #5E1F28)` |
| Card white | `#FFFFFF` |
| Hairline border | `rgba(34,27,21,.09)` to `rgba(34,27,21,.1)` |
| Display font | `'Cormorant Garamond', serif` |
| Body font | `'Karla', sans-serif` |

Section padding: `clamp(72px,9vw,120px) clamp(20px,6vw,64px)`, the same as the other sections.

---

## 3. Section layout

- Background `#F4EDE1`, with `border-top: 1px solid rgba(34,27,21,.07)`. This gives an alternating band between the cream FAQ and the dark Contact section.
- Inner container: `max-width: 880px; margin: 0 auto`. Everything inside is **left-aligned**. No centred text: we tried it and it was hard to read.
- Body copy spans the full container width.

### Content order (top to bottom)

1. **Eyebrow**: `Gifts`. 11px, weight 700, letter-spacing .24em, uppercase, accent colour, margin-bottom 14px.
2. **H2**: `Our Next Chapter`. Cormorant Garamond 500, `clamp(30px,4vw,44px)`, margin-bottom 24px.
3. **Body copy**: three paragraphs, Karla 16px, line-height 1.75, colour `#4A4138`, `text-wrap: pretty`, 16px gap between paragraphs.
4. 40px spacer.
5. **Two option cards** (UK / International).
6. **Details panel**, shown only when a card is selected.
7. **Questions line**.
8. **"Thank you ❤️"** sign-off.

### Copy: use verbatim, do not edit

> Having you celebrate with us in India is more than enough, and we don't expect gifts from anyone.
>
> For those who have asked, rather than having a traditional wedding registry, we'd love for any contributions to go towards something especially meaningful to us — Sushmeena's next UK visa application and the associated legal costs, helping us continue to build our married life together in London.
>
> It might not be the most traditional wedding gift, but it's something that genuinely means a huge amount to us — and something we'll remember your contribution towards for a long time.

Sign-off: `Thank you ❤️`. Cormorant Garamond italic, `clamp(22px,3vw,28px)`, colour `#5A4F44`, margin-top 36px. It sits **last** in the section, below the questions line.

Questions line: `Questions about gifts? davidandsush@gmail.com`. 13px, colour `#8A7C6C`, margin-top 28px. The email is a `mailto:` link in the accent colour.

---

## 4. Option cards

Bank details are **not shown by default** (privacy). Guests choose a route first.

- Grid: `repeat(auto-fit, minmax(min(100%, 280px), 1fr))`, gap 16px. Two columns on desktop, stacked on mobile.
- Each card is a `<button>` with `aria-expanded` and `aria-controls="gift-details"`.
- Card style (same as the India Guide cards):
  - background `#FBF7F0`, border `1px solid rgba(34,27,21,.09)`, radius 16px, padding `22px 22px 20px`
  - hover: `translateY(-3px)` and `box-shadow: 0 14px 30px -18px rgba(34,27,21,.35)`, transition .3s
  - **selected**: background `#FFFFFF`, border colour = accent
- Contents, laid out horizontally with a 16px gap:
  - 38px circular icon: background `rgba(94,31,40,.08)`, accent-coloured glyph in Cormorant 19px/600. Glyphs: UK `£`, International `↔`.
  - Title: Cormorant 600, 22px
  - Subtitle: Karla 14px, `#5A4F44`
  - CTA label: 11px/700, .14em tracking, uppercase, accent colour. Text reads `View details`, or `Showing details` when selected.

| Card | Title | Subtitle |
|---|---|---|
| UK | UK bank transfer | For guests transferring from a UK bank account. |
| International | International transfer | For guests transferring from outside the UK. |

Behaviour: only one card can be open at a time. Clicking the selected card again closes it.

---

## 5. Details panel

Rendered below the cards (margin-top 16px) only when a route is selected.

- `id="gift-details"`, `role="region"`, `aria-label="{title} details"`
- Background `#FFFFFF`, border `1px solid rgba(34,27,21,.1)`, radius 18px, padding `clamp(22px,4vw,34px)`
- Entrance: the existing `rise` keyframe animation, 0.5s ease. Respect `prefers-reduced-motion`.

**Header row:** the title on the left (Cormorant 600, `clamp(23px,3vw,28px)`) and a `Hide details` text button on the right (11px/700 uppercase, `#8A7C6C`, hover `#221B15`). The button closes the panel.

**Detail rows:** a list with a top border, each row with a bottom hairline (`rgba(34,27,21,.1)`) and 14px vertical padding. The row is a flex layout that wraps on mobile:
- Label: fixed 130px, 10.5px/700, .2em tracking, uppercase, `#8A7C6C`
- Value: Karla 16px/600, .04em tracking, `font-variant-numeric: tabular-nums`, `#221B15`, `word-break: break-word`
- **Copy button**: pill, min-width 84px, padding `8px 16px`, 11px/700 uppercase, .12em tracking
  - default: transparent background, ink text, border `rgba(34,27,21,.25)`. Hover: border `#221B15`.
  - copied state (1.8s): background `#221B15`, text `#FBF7F0`, label `Copied`
  - `aria-label="Copy {label}"`

**Reference note** (below the rows, margin-top 22px): a `#FBF7F0` box, radius 12px, padding `16px 18px`
- Label: `Payment reference` (10.5px/700 uppercase, accent)
- Text: `Please use your name as the reference, so we know who to thank.` (14.5px, `#4A4138`)

**International only**, an optional note below the reference box (13.5px, `#5A4F44`):
`Sending from abroad? Services such as Wise often offer better exchange rates and lower fees than a bank transfer.`

### Data (placeholders: keep these in one config object so the real details can be swapped in later)

```js
const GIFT_ROUTES = {
  uk: {
    title: 'UK bank transfer', glyph: '£',
    sub: 'For guests transferring from a UK bank account.',
    rows: [
      { label: 'Account name',   value: '[Account name]' },
      { label: 'Sort code',      value: '00-00-00', copyValue: '000000' },
      { label: 'Account number', value: '00000000' },
    ],
  },
  intl: {
    title: 'International transfer', glyph: '↔',
    sub: 'For guests transferring from outside the UK.',
    rows: [
      { label: 'Account name', value: '[Account name]' },
      { label: 'IBAN',         value: 'GB00 XXXX 0000 0000 0000 00', copyValue: 'GB00XXXX00000000000000' },
      { label: 'BIC / SWIFT',  value: 'XXXXGB00' },
    ],
    note: 'Sending from abroad? Services such as Wise often offer better exchange rates and lower fees than a bank transfer.',
    // wiseUrl: '' // reserved for a future Wise payment link
  },
};
```

`copyValue` (when present) is what gets copied. It strips spaces and dashes so the value pastes cleanly into banking apps. Otherwise copy `value`.

### Copy logic

- Use `navigator.clipboard.writeText`. Fall back to a hidden `<textarea>` + `document.execCommand('copy')` if the clipboard API is unavailable or rejects.
- Track a single `copiedKey` (e.g. `uk:Sort code`). Reset it after 1800ms and clear any pending timeout on each new copy.
- Announce "Copied" via an `aria-live="polite"` region for screen readers.

---

## 6. Navbar indicator

Gifts has a subtle "recently added" marker in the nav. **Do not use a "New" badge**: it draws attention to a request for money, which works against the low-pressure tone.

- Nav links become `display: flex; align-items: center; gap: 6px`.
- For the Gifts item only, render a **5×5px circle** after the label: `border-radius: 50%; background: var(--ac, #5E1F28)`, with `aria-label="Recently added"` (or a visually hidden "(recently added)" text).
- Drive it from a flag on the nav config (e.g. `{ id: 'gifts', label: 'Gifts', isNew: true }`) so it's easy to remove later.

---

## 7. Out of scope

- No authentication, payment processing or backend.
- No real banking details in the repo. Use the placeholders above and leave a clear TODO.

## 8. Acceptance checklist

- [ ] Section sits between FAQ and Contact; nav link scrolls to it with the sticky-nav offset and highlights on scroll
- [ ] All copy matches verbatim; text is left-aligned and full container width
- [ ] Bank details hidden until a card is selected; one route open at a time; "Hide details" closes it
- [ ] Copy buttons work (with fallback) and show "Copied" for ~1.8s; sort code / IBAN copy without spaces or dashes
- [ ] Cards stack on mobile; detail rows wrap cleanly at 360px width
- [ ] Keyboard accessible: cards and copy buttons focusable with visible focus styles; `aria-expanded` reflects state
- [ ] Accent dot appears next to "Gifts" in the nav
- [ ] Honours the existing accent-colour theme variable (`--ac`)
