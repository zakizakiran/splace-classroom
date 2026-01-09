import BenefitSection from "../components/Fragments/BenefitSection";
import FaqSection from "../components/Fragments/FAQSection";
import HeroSection from "../components/Fragments/HeroSection";
import HowSection from "../components/Fragments/HowSection";
import PartnerSection from "../components/Fragments/PartnerSection";
import TechSection from "../components/Fragments/TechSection";
import TestimonialSection from "../components/Fragments/TestimonialSection";
import FadeUp from "../components/Elements/FadeUp";

const HomePage = () => {
  return (
    <>
      <div id="about">
        <FadeUp>
          <HeroSection />
        </FadeUp>
        <FadeUp delay={150}>
          <PartnerSection />
        </FadeUp>
      </div>
      <div id="how-it-works">
        <FadeUp delay={200}>
          <HowSection />
        </FadeUp>
      </div>
      <FadeUp delay={200}>
        <TechSection />
      </FadeUp>
      <div id="benefit">
        <FadeUp delay={200}>
          <BenefitSection />
        </FadeUp>
      </div>
      <div id="testimonials">
        <FadeUp delay={200}>
          <TestimonialSection />
        </FadeUp>
      </div>
      <div id="faqs">
        <FadeUp delay={200}>
          <FaqSection />
        </FadeUp>
      </div>
    </>
  );
};

export default HomePage;
