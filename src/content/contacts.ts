export type ContactCard = {
  role: string;
  name: string;
  note: string;
  phone?: {
    label: string;
    href: string;
  };
};

export const CONTACT_EMAIL = "davidandsush@gmail.com";

export const WEDDING_CONTACTS: ContactCard[] = [
  {
    role: "Father of the bride",
    name: "Animesh",
    note: "Your host on the ground — for anything to do with the venue, schedule or arrangements.",
    phone: {
      label: "+91 99201 46508",
      href: "tel:+919920146508",
    },
  },
  {
    role: "Sush's sister",
    name: "Nibha",
    note: "Close to every detail of the celebrations — a warm first port of call.",
    phone: {
      label: "+1 (437) 987-6314",
      href: "tel:+14379876314",
    },
  },
  {
    role: "Emergency contact",
    name: "Dial 112",
    note: "India's all-in-one emergency number. We'll also share a 24/7 contact before you fly.",
  },
];

export const GENERAL_CONTACTS: ContactCard[] = [
  {
    role: "The bride",
    name: "Sushmeena",
    note: "Mumbai-born, your unofficial city guide. Happy to share local recommendations, food favourites and hidden gems.",
  },
  {
    role: "The groom",
    name: "David",
    note: "Been in your shoes and happy to answer any questions about travelling to India or what to expect.",
  },
];
