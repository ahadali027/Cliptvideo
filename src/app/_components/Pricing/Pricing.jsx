import { ArrowRight, Key } from "lucide-react";
import React from "react";
const Data_item = [
  "Elite video editing talent from the Philippines",
  "Full-time team member (40 hours per week)",
  "World-class editing, motion graphics, and animation",
  "Perfect fit: We find and vet the perfect editor for you",
];

function Pricing() {
  return (
    <div className="max-w-7xl mx-auto text-white mt-20 px-10" id="pricing">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-semibold max-w-md text-center">
          Simple pricing, exceptional value
        </h1>
        <div className="w-full lg:w-auto">
          <div className="flex lg:flex-row sm:flex-col  flex-col bg-gray-800 rounded-2xl  max-w-7xl mt-16 p-2  ">
            <div className="bg-gray-700 flex rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none  justify-center flex-col items-center py-12 px-[130px]  lg:max-w-2xl">
              <h1 className="text-4xl font-semibold">$2,995</h1>
              <h1 className="mt-2">per month</h1>
              <div className="background w-max p-[3px] rounded-lg mt-6 hover:scale-105 transition-all duration-500">
                <button className="px-5 rounded-lg bg-black bg-opacity-90 py-2">
                  Start Hiring
                </button>
              </div>
            </div>
            <ul className="w-full lg:max-w-2xl bg-slate-700/50 px-10 lg:rounded-r-xl md:rounded-bl-none sm:rounded-b-xl rounded-b-xl lg:py-0 sm:py-5 py-5 flex flex-col items-center justify-center ">
              {Data_item.map((title, index) => (
                <Data title={title} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const Data = ({ title }) => {
  return (
    <li className="flex mt-4 w-full text-left  items-center gap-3">
      <ArrowRight size={18} />
      <span className="text-base ">{title}</span>
    </li>
  );
};

export default Pricing;
