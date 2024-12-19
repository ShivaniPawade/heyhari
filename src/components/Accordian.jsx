import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';

const Accordian = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0); // First question is active by default

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle accordion open/close
  };

  return (
    <div className="space-y-4 w-[85vw] md:w-[75vw] lg:w-[60vw] 2xl:w-[50vw] mx-auto">
      {data.map((item, index) => (
        <div key={index} className=" rounded-lg overflow-hidden">
          {/* Accordion Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center px-4 py-3 text-lg font-medium text-gray-700 bg-primary1 transition duration-200 text-start"
          >
            {item.title}
            <span
              className={`transform transition-transform ${
                index === activeIndex ? 'rotate-180' : 'rotate-0'
              } text-xl font-extrabold w-4 h-4 flex justify-center items-center`} // Added size and styling
            >
              {index === activeIndex ? <Minus/> :  <Plus />} {/* Toggle '+' and '-' */}
            </span>
          </button>

          {/* Accordion Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              index === activeIndex ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <p className="px-4 py-3 text-gray-500 text-base !m-0">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
