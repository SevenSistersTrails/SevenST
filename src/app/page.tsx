import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { OfferingsSection } from "@/components/landing/offerings-section";
import { RegionsSection } from "@/components/landing/regions-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OfferingsSection />
      <HowItWorksSection />
      <RegionsSection />
    </>
  );
}
