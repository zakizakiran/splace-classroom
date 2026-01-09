import React, { useState } from "react";
import FAQItem from "./FAQItem";
import Card from "../Elements/Card";
import Button from "../Elements/Button";

type FAQ = {
  question: string;
  answer: string;
};

const FAQSection: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question: "How do I get started with Splace Classroom?",
      answer:
        "Getting started with Splace Classroom is simple. Connect your Moodle-based LMS, select the courses you want to enhance, and activate the services you need. Once set up, Splace Classroom seamlessly integrates into your existing workflow, no complex configuration required.",
    },
    {
      question: "Does it work with my existing LMS?",
      answer:
        "Currently, our services are fully compatible with Moodle-based Learning Management Systems.We chose Moodle as our starting point due to its flexibility and wide adoption in educational institutions. In the future, we plan to expand our integrations to support other LMS platforms, allowing more institutions to seamlessly adopt our services as we continue to grow.",
    },
    {
      question: "Who can use our services?",
      answer:
        "Our services can be used by educational institutions and educators who utilize Moodle-based LMS platforms. This includes schools, universities, training centers, and instructors who want to enhance their teaching workflow with AI-powered tools. As we expand our integrations in the future, our services will become accessible to a wider range of LMS platforms and users.",
    },
    {
      question: "Is my course data secure?",
      answer:
        "We only store course-related data required for our services to function properly. Our system does not collect, access, or store any user or personal data from the LMS. All stored data is securely isolated and separated, ensuring privacy, data integrity, and compliance with best security practices.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="mt-8 text-2xl font-bold leading-tight lg:text-3xl">
            FAQs
          </h1>
          <p className="mx-auto mt-4 mb-8 max-w-xl px-4 text-base leading-relaxed text-black-lighter sm:text-lg md:max-w-2xl md:text-xl lg:mt-8 lg:max-w-3xl">
            Common questions about our features, integration, and pricing. We
            are here to help you modernize your teaching workflow
          </p>
          <div className="mx-auto mb-8 h-1 w-8 rounded-full bg-primary" />
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, index) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
        <Card className="mt-12 text-center lg:flex lg:justify-between lg:items-center lg:text-start bg-primary text-white py-12 px-6 w-full">
          <div className="">
            <p className="text-2xl mb-4 font-bold">Still got questions?</p>
            <p className="lg:w-1/2">
              Can’t find what you’re looking for? Let’s have a chat. Our team is
              ready to answer your questions and help you get started
            </p>
          </div>
          <Button
            as="a"
            href="mailto:classroomsplace@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 lg:mt-0 bg-white text-primary hover:bg-grey-light px-5 py-4 hover:bg-slate-200 transition-colors duration-300"
          >
            Get in Touch
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default FAQSection;
