"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FaqData from "../../../data/accordion.json";

const Faq = () => {
  return (
    <div  className="mt-20" id="faqs">
      <p className="text-white text-center pb-5 text-5xl font-semibold">FAQs</p>
      <div className="lg:px-0 px-10  lg:w-[58%] w-full m-auto">
        {FaqData.map((faq, index) => (
          <Accordion
            type="single"
            collapsible
            key={index}
            className="text-white  bg-[#ffffff1f] shadow-inner shadow-[#ffffff14] rounded-xl "
          >
            <AccordionItem value={faq.question}>
              <AccordionTrigger className="sm:text-xl text-sm">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="sm:text-xl text-sm pt-2 font-semibold">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faq;
