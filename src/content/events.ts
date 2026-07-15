export type DressRow = {
  label: string;
  text: string;
};

export type EventCard = {
  name: string;
  day: string;
  tagline: string;
  participation: string;
  swatchHexes: string[];
  rows: DressRow[];
};

export const EVENTS: EventCard[] = [
  {
    name: "Welcome Lunch",
    day: "Day One · 12:30–2 PM",
    tagline: "Ease in over a long lunch — everyone’s first hello",
    participation: "Everyone welcome",
    swatchHexes: ["#FFFFFF14","#FFFFFF14", "#FFFFFF14"],
    rows: [
      { label: "Wear", text: "Casual — comfortable, travel-friendly clothes" },
      { label: "Feet", text: "Whatever you landed in" },
      {
        label: "Comfort",
        text: "Drop your bags at reception and come straight in — check-in starts at 2 PM",
      },
      { label: "Avoid", text: "Overdressing — this one is easy" },
    ],
  },
  {
    name: "Haldi · Mehndi · Chai Adda",
    day: "Day One · 3–6 PM",
    tagline: "The turmeric ceremony — messy, golden and full of laughter",
    participation: "Guests take part",
    swatchHexes: ["#D9A441", "#C46A2B", "#E8B84B", "#F4E9C8"],
    rows: [
      {
        label: "Wear",
        text: "Light, washable clothing in yellows and oranges — a simple kurta or smart casual",
      },
      { label: "Feet", text: "Comfortable sandals" },
      {
        label: "Comfort",
        text: "Turmeric stains and fresh henna needs a free hand — relaxed and outdoorsy",
      },
      { label: "Avoid", text: "Expensive outfits and tight cuffs over henna" },
    ],
  },
  {
    name: "Sangeet",
    day: "Day One · 8 PM onwards",
    tagline: "Cocktails, dinner, performances and dancing into the night",
    participation: "Everyone dances",
    swatchHexes: ["#3B2A55", "#1F2A44", "#2E5950", "#C99A4E", "#C46A2B"],
    rows: [
      {
        label: "Wear",
        text: "Colourful Indo-Western — cocktail attire with an Indian twist",
      },
      {
        label: "Feet",
        text: "Comfortable footwear is non-negotiable — you will dance",
      },
      { label: "Comfort", text: "Pick something with movement in it" },
      { label: "Avoid", text: "Anything you can’t last hours of dancing in" },
    ],
  },
  {
    name: "Baraat & Phere",
    day: "Day Two · 4–6 PM",
    tagline: "The procession, then vows around the sacred fire",
    participation: "Dance in the Baraat, witness the Phere",
    swatchHexes: [
      "#2E6B47", // Emerald Green
      "#2F5FD0", // Royal Blue
      "#D4A32A", // Mustard Yellow
      "#E83E8C", // Vibrant Pink
      "#7A3DB8", // Royal Purple
    ],
    rows: [
      {
        label: "Wear",
        text: "Traditional Indian encouraged — sherwani or suit; saree or lehenga",
      },
      { label: "Details", text: "Elegant jewellery welcome" },
      {
        label: "Comfort",
        text: "You’ll be outdoors and dancing for the Baraat — modest and respectful for the Phere",
      },
      {
        label: "Avoid",
        text: "Very revealing outfits; shoes come off near the mandap",
      },
    ],
  },
  {
    name: "Reception",
    day: "Day Two · 8 PM onwards",
    tagline: "The grand finale — dinner, toasts and dancing",
    participation: "Everyone celebrates",
    swatchHexes: ["#1F2A44", "#221B15", "#5E1F28", "#C99A4E", "#EBDDC3"],
    rows: [
      { label: "Wear", text: "Formal — black tie optional" },
      {
        label: "Details",
        text: "Indian or Western evening wear both perfect — navy, black and jewel tones shine",
      },
      {
        label: "Comfort",
        text: "Evenings in Bhopal are cooler — a shawl or jacket is handy",
      },
      { label: "Avoid", text: "Nothing — this is the night to go all out" },
    ],
  },
];
