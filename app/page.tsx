import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import BenefitsSection from "./components/BenefitsSection";
import OfferSection from "./components/OfferSection";
import FaqSection from "./components/FaqSection";
import FinalCtaSection from "./components/FinalCtaSection";
import StickyBar from "./components/layout/StickyBar";
import NoiseOverlay from "./components/layout/NoiseOverlay";
import SectionDivider from "./components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <NoiseOverlay />
      <HeroSection />
      <SectionDivider />
      <ProblemSection />
      <SectionDivider />
      <SolutionSection />
      <SectionDivider />
      <BenefitsSection />
      <SectionDivider />
      <OfferSection />
      <SectionDivider />
      <FaqSection />
      <SectionDivider />
      <FinalCtaSection />
      <StickyBar />
    </main>
  );
}
