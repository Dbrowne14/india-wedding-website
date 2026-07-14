import { Nav } from "@/components/Nav";
import { BackToTop } from "@/components/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { Welcome } from "@/components/sections/Welcome";
import { Timeline } from "@/components/sections/Timeline";
import { Events } from "@/components/sections/Events";
import { Travel } from "@/components/sections/Travel";
import { IndiaGuide } from "@/components/sections/IndiaGuide";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="min-w-[320px]">
        <Hero />
        <Welcome />
        <Timeline />
        <Events />
        <Travel />
        <IndiaGuide />
        <Faq />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}
