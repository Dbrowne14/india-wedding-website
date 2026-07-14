export type ContactCard = {
  role: string;
  name: string;
  note: string;
};

export const CONTACT_EMAIL = "davidandsush@gmail.com";

export const CONTACTS: ContactCard[] = [
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
  {
    role: "Wedding contact",
    name: "Animesh (Sush's dad)",
    note: "Our local emergency contact throughout the celebrations.\nContact number: ‭+91 99201 46508‬",
  },
  {
    role: "Emergency",
    name: "While in India",
    note: "Dial 112 for all emergencies in India. We’ll also share a 24/7 contact before you fly.",
  },
];
