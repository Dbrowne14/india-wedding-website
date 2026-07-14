export type TravelRow = {
  label: string;
  text: string;
  /** Marks a row that needs a guest's attention/action — shows a small inline cue next to the label. */
  important?: boolean;
};

export type TravelStep = {
  title: string;
  subtitle: string;
  rows: TravelRow[];
};

export const TRAVEL_STEPS: TravelStep[] = [
  {
    title: "London → Mumbai",
    subtitle: "Arrive 20–21 November",
    rows: [
      {
        label: "Recommended",
        text: "BA 199 — departs London 20:25, arrives Mumbai 11:05 next morning. Our pick.",
      },
      {
        label: "Alternative",
        text: "BA 135 — departs 16:15, arrives 06:40. Good if you want a full first day.",
      },
      {
        label: "Another alternative",
        text: "VS 354 — departs London 18:10, arrives Mumbai 08:45",
      },
      {
        label: "Why arrive early",
        text: "Mumbai International is India’s second-busiest airport with direct flights from many international cities. Arriving on the 20th or 21st gives you time to explore before the wedding.",
      },
    ],
  },
  {
    title: "Exploring Mumbai",
    subtitle: "Where to stay & why",
    rows: [
      {
        label: "Stay in South Mumbai",
        text: "Fort, Colaba, Nariman Point, Marine Drive and Churchgate are the key areas — close to the city’s most iconic landmarks and markets, and they save you hours of Mumbai traffic.",
      },
      {
        label: "Also consider",
        text: "Bandra West — centrally placed between the suburbs and South Mumbai, home to some really cool cafés, bars and eateries.",
      },
      {
        label: "Hotels",
        text: "A wide range across every price point — pick your own adventure. We’re more than happy to look at your shortlist and give an opinion.",
      },
    ],
  },
  {
    title: "Mumbai → Bhopal",
    subtitle: "Three direct flights daily",
    rows: [
      {
        label: "Book IndiGo",
        text: "Direct flights depart 09:40, 15:15 and 18:50 — about 1h 25m in the air.",
      },
      {
        label: "Arriving on the 24th",
        text: "Take the 09:40 to make the welcome lunch (12:30 PM) and the Haldi at 3 PM. The 15:15 works only if you’re happy to miss the afternoon events.",
      },
      {
        label: "Arriving on the 23rd",
        text: "Fly in a day early and explore Bhopal at your own pace — see the hotels below.",
      },
      {
        label: "Domestic Flight Tips",
        text: "We recommend arriving at the airport at least 2 hours before your domestic flight. Please check your baggage allowance before travelling — most economy fares include 15 kg checked baggage and 7 kg cabin baggage, though allowances can vary depending on your airline and ticket type.",
      },
    ],
  },
  {
    title: "Staying in Bhopal",
    subtitle: "Your wedding stay is on us",
    rows: [
      {
        label: "Passport copy for hotel check-in",
        text: "Please send us a copy of your passport before you travel so we can help prepare the hotel registration in Bhopal and make check-in as smooth as possible.",
        important: true,
      },
      {
        label: "During the wedding",
        text: "Your stay is taken care of for the duration of the celebrations — check-in 24 November (rooms from 2:00 PM; drop your bags and join lunch), check-out 26 November at 11 AM.",
      },

      {
        label: "Arriving early?",
        text: "For the night of the 23rd we recommend Jehan Numa Retreat, Jehan Numa Palace, or Taj Lakefront.",
      },
    ],
  },
  {
    title: "Onward travel",
    subtitle: "After the 26th",
    rows: [
      {
        label: "Plan for the 26th",
        text: "Please plan your onward travel from Bhopal for the 26th.",
      },
      {
        label: "Make it a holiday",
        text: "India is vast. Tell us what kind of experiences you’re looking for — mountains, beaches, palaces, food — and we’ll share tailored suggestions.",
      },
    ],
  },
];
