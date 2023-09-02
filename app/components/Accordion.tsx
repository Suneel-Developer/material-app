import React, { useState } from "react";
import { BiCaretDown } from "react-icons/bi";

interface AccordionProps {
  title: string;
  children: React.ReactNode
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="rounded-md overflow-hidden w-full">
      <div
        className="flex items-center justify-between p-3 w-full cursor-pointer bg-primary rounded-md border-0"
        onClick={toggleAccordion}
      >
        <h2 className="text-base font-normal text-white">{title}</h2>
        <BiCaretDown
          className={`w-6 h-6 text-white transition-transform transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>
      {isExpanded && <div className="p-4 bg-white rounded-b-md shadow-custom">{children}</div>}
    </div>
  );
};

export default Accordion;
