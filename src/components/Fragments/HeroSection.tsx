import HeroBackground from "../../assets/images/HeroBackground.svg";
import HeroText from "../../assets/images/HeroText.svg";
import ArrowRight from "../../assets/images/ArrowBendUpRight.svg";
import Button from "../Elements/Button";
import FadeUp from "../Elements/FadeUp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${HeroBackground})`,
        }}
        aria-hidden="true"
      />

      <div className="mx-auto flex pt-24 lg:pt-32 max-w-7xl flex-col items-center justify-center px-6 sm:px-8 lg:px-12 text-center">
        <FadeUp>
          <div className="w-full flex justify-center">
            <img
              src={HeroText}
              alt="Bring Your Learning More Explosive"
              className="w-full pl-6 max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-xl lg:pl-16 object-contain"
            />
          </div>
        </FadeUp>
        <FadeUp delay={200}>
          <p className="mt-8 max-w-xl md:max-w-2xl lg:max-w-3xl text-base sm:text-lg md:text-xl text-black-lighter leading-relaxed px-4">
            Splace Classroom helps educators and institutions transform learning
            materials into engaging, AI-powered learning experiences. Faster,
            smarter, and more effective.
          </p>
        </FadeUp>
        <FadeUp delay={400}>
          <Button
            className="mt-10 text-base lg:text-xl bg-primary text-white hover:bg-primary-dark py-4 px-6 lg:py-5 lg:px-8"
            iconPosition="right"
            icon={ArrowRight}
          >
            Explore
          </Button>
        </FadeUp>
      </div>
    </section>
  );
};

export default HeroSection;
