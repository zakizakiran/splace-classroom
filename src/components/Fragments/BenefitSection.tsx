import Badges from "../Elements/Badges";
import Button from "../Elements/Button";
import BenefitItem from "./BenefitItem";
import {
  BookIcon,
  ClockIcon,
  UserIcon,
  HandIcon,
  MonitorIcon,
} from "../Elements/BenefitIcons/Icons";
import BenefitImage from "../../assets/images/LaptopHand.png";
import SectionLayout from "../Layouts/SectionLayout";
import FadeUp from "../Elements/FadeUp";

const benefits = [
  {
    icon: <BookIcon />,
    title: "Enhance Learning, Not Just Manage Courses",
    description:
      "Move beyond administrative LMS functions with AI that actively supports the learning process.",
  },
  {
    icon: <ClockIcon />,
    title: "Save Time for Educators",
    description:
      "Automatically generate quizzes and reduce manual work in preparing assessments.",
  },
  {
    icon: <UserIcon />,
    title: "Focused & Reliable Learning for Students",
    description:
      "Students ask questions through an AI chatbot that responds strictly based on course materials.",
  },
  {
    icon: <HandIcon />,
    title: "Inclusive Learning for All",
    description:
      "Visually impaired students access image-based content through descriptive text read aloud by TalkBack.",
  },
  {
    icon: <MonitorIcon />,
    title: "Seamless LMS Integration",
    description:
      "Works directly inside your existing LMS without changing workflows or systems.",
  },
];

const BenefitSection = () => {
  return (
    <>
      <SectionLayout>
        <div className="justify-center ">
          <Badges text="Benefit" />
        </div>
        <h1 className="mt-8 text-center lg:max-w-1/2 text-2xl font-bold leading-tight lg:text-3xl mb-6">
          Intelligent content generation for{" "}
          <span className="text-primary">smarter learning</span>
        </h1>

        <div className="mb-8 lg:mb-0 h-1 w-8 rounded-full mx-auto bg-primary" />
      </SectionLayout>
      <div className="relative overflow-hidden mx-auto flex flex-col-reverse lg:flex-row pb-12 lg:pt-20 lg:pb-20 max-w-7xl px-6 sm:px-8 lg:px-12 items-center justify-center gap-8 lg:gap-16">
        <FadeUp className="flex-1 w-full lg:max-w-lg flex flex-col items-center lg:items-start">
          <div className="space-y-6 mb-8 w-full">
            {benefits.map((benefit, index) => (
              <FadeUp key={index} delay={index * 100}>
                <BenefitItem
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              </FadeUp>
            ))}
          </div>

          <Button
            as="a"
            href="http://103.155.224.67:8080/login/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary w-full lg:max-w-fit hover:bg-primary-dark text-white px-8 py-3"
          >
            Try Now!
          </Button>
        </FadeUp>

        <FadeUp
          delay={200}
          className="flex-1 w-full lg:max-w-md flex justify-center"
        >
          <img
            src={BenefitImage}
            alt="Learning benefits illustration"
            className="w-full h-auto object-contain rounded-3xl"
          />
        </FadeUp>
      </div>
    </>
  );
};

export default BenefitSection;
