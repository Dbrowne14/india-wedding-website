export type ItineraryMoment = {
  time: string;
  name: string;
  note: string;
};

export type ItineraryDay = {
  date: string;
  dotColor: string;
  title: string;
  description: string;
  moments?: ItineraryMoment[];
};

export const ARRIVAL_NOTE =
  "Arriving on the 24th? Drop your bags at reception and join us for lunch — check-in starts at 2:00 PM.";

export const ITINERARY_DAYS: ItineraryDay[] = [
  {
    date: "Fri–Sat · 20–21 Nov",
    dotColor: "#5E1F28",
    title: "Arrive in Mumbai",
    description:
      "Fly London → Mumbai and land in the big, beautiful birthplace of Sush. Arriving on the 20th or 21st gives you time to settle in and explore.",
    moments: [
      {
        time: "BA 199",
        name: "Recommended flight",
        note: "departs London 20:25, arrives Mumbai 11:05",
      },
      {
        time: "BA 135",
        name: "Alternative",
        note: "departs 16:15, arrives 06:40 — for early risers",
      },
      {
        time: "VS 354",
        name: "Another alternative",
        note: "departs London 18:10, arrives 08:45",
      },
    ],
  },
  {
    date: "Sat–Mon · 21–23 Nov",
    dotColor: "#9C5A1F",
    title: "Explore Mumbai",
    description:
      "Base yourself in South Mumbai — Colaba, Fort, Marine Drive, Nariman Point or Churchgate — close to the city’s most iconic landmarks and markets. Bandra West is a great alternative for cafés and bars.",
  },
  {
    date: "Mon–Tue · 23–24 Nov",
    dotColor: "#33503E",
    title: "Fly to Bhopal",
    description:
      "Three direct IndiGo flights daily (09:40, 15:15, 18:50 — about 1h 25m). Take the 09:40 on the 24th to make the welcome lunch, or fly in on the 23rd and explore Bhopal.",
  },
  {
    date: "Tue · 24 Nov — Day One",
    dotColor: "#5E1F28",
    title: "The celebrations begin",
    description:
      "Drop your bags at reception and come straight to lunch — check-in starts at 2:00 PM. Then an afternoon of colour, turmeric and music.",
    moments: [
      {
        time: "10–11 AM",
        name: "Ganesh Pujan",
        note: "an opening blessing (family only) — join us from lunch onwards",
      },
      {
        time: "12:30–2 PM",
        name: "Welcome lunch",
        note: "meet everyone, eat well, ease in",
      },
      {
        time: "3–6 PM",
        name: "Haldi · Mehndi · Chai Adda",
        note: "turmeric, henna and chai — wear shades of yellow or orange",
      },
      {
        time: "8 PM →",
        name: "Sangeet, cocktails & dinner",
        note: "performances and dancing — the loudest night of the week",
      },
    ],
  },
  {
    date: "Wed · 25 Nov — Day Two",
    dotColor: "#5E1F28",
    title: "The wedding day",
    description:
      "The heart of it all: blessings, the procession, the sacred ceremony — then a night of celebration.",
    moments: [
      {
        time: "7–10 AM",
        name: "Breakfast",
        note: "live counters — an easy start",
      },
      {
        time: "11–12",
        name: "Mamera",
        note: "a blessing ceremony from the maternal family",
      },
      {
        time: "12:30–2 PM",
        name: "Lunch",
        note: "veg and falahari",
      },
      {
        time: "3–3:30 PM",
        name: "Safa Bandhai",
        note: "turban tying, and everyone assembles for the procession",
      },
      {
        time: "4–4:45 PM",
        name: "Baraat",
        note: "the groom’s procession from the main gate — join in and dance",
      },
      {
        time: "5–6 PM",
        name: "Phere & Chai Adda",
        note: "the wedding ceremony around the sacred fire",
      },
      {
        time: "8 PM →",
        name: "Reception",
        note: "dinner, toasts and dancing — dress formal",
      },
    ],
  },
  {
    date: "Thu · 26 Nov",
    dotColor: "#8A7C6C",
    title: "Farewell & onward travel",
    description:
      "One last morning together before check-out. India is vast — tell us what kind of experiences you’re after and we’ll share tailored suggestions for the rest of your trip.",
    moments: [
      {
        time: "7–9 AM",
        name: "Breakfast",
        note: "smart casual, unhurried",
      },
      {
        time: "10–11 AM",
        name: "Pag Phera & Khilni",
        note: "gentle farewell rituals for the couple",
      },
      {
        time: "11 AM",
        name: "Check-out",
        note: "onward travels begin",
      },
    ],
  },
];
