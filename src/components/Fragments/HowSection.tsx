import { useState, useRef } from "react";
import Badges from "../Elements/Badges";
import Card from "../Elements/Card";
import SectionLayout from "../Layouts/SectionLayout";
import FadeUp from "../Elements/FadeUp";

import UploadUI from "../../assets/images/Upload.png";
import AIPreview from "../../assets/images/AI.png";
import ChatbotPreview from "../../assets/images/Chatbot.png";
import BlockPreview from "../../assets/images/Block.png";

import CardContent from "./CardContent";

const HowSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      number: 1,
      title: "Upload & Select Learning Materials",
      description:
        "Lecturers upload modules or select existing course materials from the LMS.",
      image: UploadUI,
      imageAlt: "Upload Course Preview",
      bgColor: "bg-grey-lighter",
    },
    {
      number: 2,
      title: "AI Understands the Content",
      description:
        "Splace Classroom analyzes the materials using AI to understand concepts, context, and learning objectives.",
      image: AIPreview,
      imageAlt: "AI Content Preview",
      bgColor: "bg-grey-lighter",
    },
    {
      number: 3,
      title: "Smart Learning Assistance",
      description:
        "Students chat with AI, teachers create quizzes, and visually impaired learners access spoken image-to-text support.",
      image: ChatbotPreview,
      imageAlt: "Chatbot Preview",
      bgColor: "bg-grey-lighter",
    },
    {
      title: "Seamless LMS Integration",
      description:
        "All interactions work directly inside the LMS, supporting learning without changing existing systems.",
      image: BlockPreview,
      imageAlt: "LMS Integration Preview",
      bgColor: "bg-primary",
      titleColor: "text-white",
      descriptionColor: "text-white",
      fadeColor: "from-primary",
    },
  ];

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / cards.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      setCurrentSlide(index);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / cards.length;
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      setCurrentSlide(newIndex);
    }
  };

  return (
    <SectionLayout>
      <FadeUp>
        <Badges text="How Does it Work?" />
      </FadeUp>
      <FadeUp delay={100}>
        <h1 className="mt-8 text-2xl font-bold leading-tight lg:text-3xl">
          Streamline Your Teaching Workflow
        </h1>
      </FadeUp>
      <FadeUp delay={200}>
        <p className="mt-4 mb-8 max-w-xl px-4 text-base leading-relaxed text-black-lighter sm:text-lg md:max-w-2xl md:text-xl lg:mt-8 lg:max-w-3xl">
          A simple and efficient workflow designed to support modern learning,
          no complex setup, no technical barriers.
        </p>
      </FadeUp>
      <div className="mb-8 h-1 w-8 rounded-full bg-primary" />
      <div className="sm:hidden w-full">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-4 -mx-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cards.map((card, index) => (
            <div key={index} className="shrink-0 w-[85vw] snap-center">
              <Card
                className={`
                  h-70
                  overflow-hidden rounded-[20px]
                  ${card.bgColor}
                `}
              >
                <CardContent
                  number={card.number}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  imageAlt={card.imageAlt}
                  titleColor={card.titleColor}
                  descriptionColor={card.descriptionColor}
                  fadeColor={card.fadeColor}
                />
              </Card>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-4 bg-primary" : "w-2 bg-grey"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="hidden sm:flex flex-wrap justify-center gap-4 sm:gap-8">
        <Card
          className="
            grow basis-85
            sm:basis-105
            lg:basis-130
            h-70 sm:h-75 lg:h-85
            overflow-hidden rounded-[20px] sm:rounded-3xl
            bg-grey-lighter
          "
        >
          <CardContent
            number={1}
            title="Upload & Select Learning Materials"
            description="Lecturers upload modules or select existing course materials from the LMS."
            image={UploadUI}
            imageAlt="Upload Course Preview"
          />
        </Card>

        <Card
          className="
            grow basis-85
            sm:basis-105
            lg:basis-130
            h-70 sm:h-75 lg:h-85
            overflow-hidden rounded-[20px] sm:rounded-3xl
            bg-grey-lighter
          "
        >
          <CardContent
            number={2}
            title="AI Understands the Content"
            description="Splace Classroom analyzes the materials using AI to understand concepts, context, and learning objectives."
            image={AIPreview}
            imageAlt="AI Content Preview"
          />
        </Card>

        <Card
          className="
            grow basis-85
            sm:basis-105
            lg:basis-130
            h-70 sm:h-75 lg:h-85
            overflow-hidden rounded-[20px] sm:rounded-3xl
            bg-grey-lighter
          "
        >
          <CardContent
            number={3}
            title="Smart Learning Assistance"
            description="Students chat with AI, teachers create quizzes, and visually impaired learners access spoken image-to-text support."
            image={ChatbotPreview}
            imageAlt="Chatbot Preview"
          />
        </Card>

        <Card
          className="
            grow basis-85
            sm:basis-70
            lg:basis-70
            h-70 sm:h-75 lg:h-85
            overflow-hidden rounded-[20px] sm:rounded-3xl
            bg-primary
          "
        >
          <CardContent
            title="Seamless LMS Integration"
            titleColor="text-white"
            descriptionColor="text-white"
            fadeColor="from-primary"
            description="All interactions work directly inside the LMS, supporting learning without changing existing systems."
            image={BlockPreview}
            imageAlt="LMS Integration Preview"
          />
        </Card>
      </div>
    </SectionLayout>
  );
};

export default HowSection;
