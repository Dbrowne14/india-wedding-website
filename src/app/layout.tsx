import type { Metadata } from "next";
import { Cormorant_Garamond, Karla } from "next/font/google";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL, THEME, photoToneFilter } from "@/content/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: "Sushmeena & David",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sushmeena and David — Wedding in Bhopal, India, November 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${karla.variable}`}
      style={
        {
          "--accent": THEME.accent,
          "--pf": photoToneFilter(THEME.photoTone),
        } as React.CSSProperties
      }
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
