import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronUp, Info } from "lucide-react";
import sectionFaq from "@/assets/section-faq.png";
import { Link } from "react-router-dom";
import { Image } from "@nextui-org/react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "Registration & Account",
      answer:
        "Account registration details and information will be displayed here.",
    },
    {
      question: "How do I play the lottery online?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.",
    },
    {
      question: "Responsible Gaming",
      answer: "Information about responsible gaming practices and guidelines.",
    },
    {
      question: "Lottery Scams",
      answer:
        "Important information about identifying and avoiding lottery scams.",
    },
    {
      question: "Troubleshooting",
      answer: "Common issues and their solutions will be listed here.",
    },
    {
      question: "Quick Draws",
      answer: "Information about quick draw games and how to participate.",
    },
    {
      question: "Scratchcards",
      answer: "Details about available scratchcard games and how to play.",
    },
  ];

  return (
    <div id="faq" className="max-w-screen-xl 3xl:max-w-screen-2xl mx-auto mt-3 md:mt-36 py-28 md:py-20 px-6 sm:px-9 2xl:px-0 3xl:px-5">
      <div className="min-h-screen text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 md:gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              Frequently asked questions
            </h2>
            <p className="text-gray-400">
              We&apos;re here to help! If you can&apos;t find the answer
              you&apos;re looking for, please contact us via email at{" "}
              <Link
                href="demo@support.com"
                className="text-primary hover:underline"
              >
                lode@support.com
              </Link>{" "}
              or by phone at{" "}
              <Link
                href="tel:0123456789"
                className="text-primary hover:underline"
              >
                0123456789
              </Link>
            </p>
            <div className="relative mt-10 w-full h-[400px]">
              <Image
                src={sectionFaq}
                alt="Lottery ball cage"
                width={400}
                height={400}
                className="object-contain w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
              />
            </div>
          </div>

          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-none rounded-lg bg-[#1a1745] px-4 md:px-6 py-2 md:py-3"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#1a1745] flex items-center justify-center">
                        <Info className="w-5 h-5 text-primary shrink-0 transition-transform duration-200" />
                      </div>
                      <span className="text-sm md:text-medium font-medium">
                        {item.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pt-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
