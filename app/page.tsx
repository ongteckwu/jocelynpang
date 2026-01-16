import { Section } from "@/components/ui/Section";
import { Hero } from "@/components/sections/Hero";
import { HowIHelp } from "@/components/sections/HowIHelp";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Speaking } from "@/components/sections/Speaking";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Section variant="primary" id="hero">
        <Hero />
      </Section>

      <Section variant="surface" id="how-i-help">
        <HowIHelp />
      </Section>

      <Section variant="primary" id="about">
        <About />
      </Section>

      <Section variant="surface" id="work">
        <SelectedWork />
      </Section>

      <Section variant="primary" id="speaking">
        <Speaking />
      </Section>

      <Section variant="surface" id="contact">
        <Contact />
      </Section>

      <Footer />
    </main>
  );
}
