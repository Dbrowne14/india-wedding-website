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
    note: "Mumbai-born, your unofficial city guide. WhatsApp number to follow with the invitation.",
  },
  {
    role: "The groom",
    name: "David",
    note: "Fellow first-timer turned enthusiast. Ask him anything about the guest experience.",
  },
  {
    role: "Wedding contact",
    name: "On-the-ground help",
    note: "A dedicated contact in Bhopal for the wedding days — name and number to follow.",
  },
  {
    role: "Emergency",
    name: "While in India",
    note: "Dial 112 for all emergencies in India. We’ll also share a 24/7 contact before you fly.",
  },
];
