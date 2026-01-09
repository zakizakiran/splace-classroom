import SectionLayout from "../Layouts/SectionLayout";
import TestimonialCard from "./TestimonialCard";
import Badges from "../Elements/Badges";

const testimonials = [
  {
    id: 1,
    rating: 5,
    comment:
      "Splace Classroom has transformed how I create course materials. The AI-powered quiz generation saves me hours every week, and my students love the interactive chatbot that helps them study anytime.",
    avatar: "#8b5cf6",
    name: "Siti Cahyaningrum",
    role: "Computer Science Lecturer",
  },
  {
    id: 2,
    rating: 5,
    comment:
      "As a lecturer, I appreciate how seamlessly Splace integrates with our existing LMS. The AI understands our course content perfectly and provides accurate, context-aware responses to students.",
    avatar: "#3b82f6",
    name: "Ahmad Subroto",
    role: "Engineering Lecturer",
  },
  {
    id: 3,
    rating: 5,
    comment:
      "The accessibility features are outstanding! My visually impaired students can now access image-based content through descriptive text. Splace truly makes education inclusive for everyone.",
    avatar: "#10b981",
    name: "Rina Wijaya",
    role: "Special Education Teacher",
  },
  {
    id: 4,
    rating: 5,
    comment:
      "Splace Classroom has made learning so much easier for me. I can ask questions anytime through the chatbot and get instant answers based on our actual course materials. It's like having a tutor available 24/7!",
    avatar: "#f59e0b",
    name: "Budi Santoso",
    role: "University Student",
  },
  {
    id: 5,
    rating: 5,
    comment:
      "I love how the AI chatbot keeps me focused on the course content. Unlike searching online where I get distracted, this only gives me answers from what we're actually learning. My grades have improved significantly!",
    avatar: "#ec4899",
    name: "Dewi Lestari",
    role: "College Student",
  },
  {
    id: 6,
    rating: 5,
    comment:
      "Managing multiple courses used to be overwhelming, but Splace makes it effortless. The automated quiz creation and smart content organization help me focus more on teaching and less on admin work.",
    avatar: "#14b8a6",
    name: "Bambang Sutopo",
    role: "Department Head",
  },
];

const TestimonialSection = () => {
  const topRowTestimonials = [
    testimonials[0],
    testimonials[1],
    testimonials[2],
  ];
  const bottomRowTestimonials = [
    testimonials[3],
    testimonials[4],
    testimonials[5],
  ];

  return (
    <>
      <SectionLayout>
        <Badges text="What they say about us?" />

        <p className="mt-6 text-base sm:text-lg text-black-lighter max-w-2xl mx-auto mb-8">
          Feedback from educators and learners who have experienced smarter
          learning with Splace Classroom.
        </p>

        <div className="mb-12 h-1 w-8 rounded-full bg-primary mx-auto" />
      </SectionLayout>

      <div className="w-full bg-grey-lighter py-12">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="relative overflow-hidden py-2">
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-linear-to-r from-grey-lighter to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-linear-to-l from-grey-lighter to-transparent z-10 pointer-events-none"></div>
            <div className="flex animate-marquee-right hover:pause-marquee gap-6">
              {[...Array(8)].map((_, setIndex) =>
                topRowTestimonials.map((testimonial) => (
                  <div
                    key={`top-set${setIndex}-${testimonial.id}`}
                    className="shrink-0 w-70 sm:w-95"
                  >
                    <TestimonialCard
                      rating={testimonial.rating}
                      comment={testimonial.comment}
                      avatar={testimonial.avatar}
                      name={testimonial.name}
                      role={testimonial.role}
                    />
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="relative overflow-hidden py-2">
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-linear-to-r from-grey-lighter to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-linear-to-l from-grey-lighter to-transparent z-10 pointer-events-none"></div>
            <div className="flex animate-marquee-left hover:pause-marquee gap-6">
              {[...Array(8)].map((_, setIndex) =>
                bottomRowTestimonials.map((testimonial) => (
                  <div
                    key={`bottom-set${setIndex}-${testimonial.id}`}
                    className="shrink-0 w-60 sm:w-95"
                  >
                    <TestimonialCard
                      rating={testimonial.rating}
                      comment={testimonial.comment}
                      avatar={testimonial.avatar}
                      name={testimonial.name}
                      role={testimonial.role}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
