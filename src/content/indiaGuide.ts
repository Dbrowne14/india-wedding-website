import type { IconName } from "@/components/icons";

export type IndiaGuideCard = {
  title: string;
  icon: IconName;
  points: string[];
};

export const INDIA_GUIDE: IndiaGuideCard[] = [
  {
    title: "Water & hygiene",
    icon: "drop",
    points: [
      "Drink sealed bottled water only — never tap",
      "Skip ice, raw salads and cut fruit from street vendors",
      "Carry hand sanitiser and tissues",
    ],
  },
  {
    title: "Vaccinations",
    icon: "cross",
    points: [
      "Check NHS travel guidance or a travel clinic",
      "Commonly suggested: Hep A, typhoid, tetanus, flu",
      "We’re in major cities — risk is lower, but do what feels right",
    ],
  },
  {
    title: "Medication kit",
    icon: "pill",
    points: [
      "Anti-diarrhoea medication (e.g. Imodium)",
      "Oral rehydration salts & paracetamol",
      "Any personal prescriptions",
    ],
  },
  {
    title: "Mosquito protection",
    icon: "shield",
    points: ["Bring insect repellent", "Cover up in the evenings"],
  },
  {
    title: "Toilets",
    icon: "tissue",
    points: [
      "Carry tissues — jet sprays are the norm, paper isn’t",
      "Hand sanitiser is your best friend",
    ],
  },
  {
    title: "Language",
    icon: "chat",
    points: [
      "English is widely spoken in hotels & restaurants",
      "Mumbai: very common · Bhopal: more Hindi",
      "Download offline Hindi in a translation app",
    ],
  },
  {
    title: "Dress & culture",
    icon: "hanger",
    points: [
      "Cities are relaxed; temples need shoulders & knees covered",
      "Shoes off at temples — a light scarf is very useful",
      "When in doubt, dress modestly",
    ],
  },
  {
    title: "Weather · November",
    icon: "sun",
    points: [
      "Mumbai: 25–33°C, warm and slightly humid",
      "Bhopal: 18–30°C, warm days, cooler dry evenings",
      "One of the best months to visit India",
    ],
  },
  {
    title: "Packing list",
    icon: "case",
    points: [
      "Light, breathable fabrics — cotton and linen",
      "A light jacket or shawl for Bhopal evenings",
      "Sunglasses, sunscreen, hat, comfy shoes",
    ],
  },
  {
    title: "Money",
    icon: "note",
    points: [
      "Carry some cash (Indian rupees)",
      "Essential for small shops, rickshaws and markets",
    ],
  },
  {
    title: "Payments",
    icon: "card",
    points: [
      "Cards widely accepted in hotels & restaurants",
      "Mobile payments are huge locally — but foreign cards often don’t work in those apps",
    ],
  },
  {
    title: "Getting around",
    icon: "car",
    points: [
      "Uber works well in Mumbai; Ola is popular too",
      "Auto-rickshaws are fun for short hops — bookable via apps",
      "Save your destination on your phone; choose app rides at night",
    ],
  },
  {
    title: "Food & street food",
    icon: "bowl",
    points: [
      "Eat at busy, well-reviewed places — fresh & hot is safest",
      "Street food: hot, freshly cooked, high-turnover stalls",
      "Avoid cold or water-based items unless confident",
    ],
  },
  {
    title: "SIM & connectivity",
    icon: "sim",
    points: [
      "Roam, or grab a local SIM at the airport",
      "Data unlocks maps, rides, translation and payments",
    ],
  },
  {
    title: "Tipping",
    icon: "coin",
    points: [
      "Restaurants: ~5–10% if not included",
      "Round up fares; small tips for hotel staff",
    ],
  },
  {
    title: "Safety",
    icon: "eye",
    points: [
      "India is generally safe — expect friendly curiosity",
      "A polite, confident “no” works; skip unofficial guides",
      "Trusted transport at night; valuables secure",
    ],
  },
  {
    title: "Visa",
    icon: "pass",
    points: [
      "Most nationals need an eVisa — usually quick",
      "Apply at indianvisaonline.gov.in",
    ],
  },
];
