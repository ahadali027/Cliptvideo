import { ArrowRight } from "lucide-react";
import React from "react";

function FindEditor() {
  return (
    <div className="py-2 lg:px-8 md:6  mx-auto max-w-6xl  mt-9 flex-col items-center px-10 lg:mx-auto ">
      <div className="text-white text-center">
        <h1 className="lg:text-4xl text-3xl  font-medium text-center">
          ..but it&apos;s hard to find editor
        </h1>
        <p className="md:text-5xl px-10 lg:px-0  text-3xl mt-24 font-semibold">
          We place great editor FAST
        </p>
      </div>
      <div className="w-full gap-7 rounded-2xl py-2 grid lg:grid-cols-3 md:grid-cols-1 mt-10 ">
        <Card
          category="Better editng"
          percentage="Top 1%"
          p_1="We find you the best editor for your video style"
          p_2="We have 5+ years of experience editing our own content with overseas talent"
        />
        <Card
          category="Lowcost"
          percentage="Save over 70%"
          p_1="Use Clipt instead of entry-level US talent"
          p_2="Great editors start at $2,995/month"
        />
        <Card
          category="fast hiring"
          percentage="Hire within days"
          p_1="We find and place your editor within 2 weeks"
          p_2="We do all the sourcing, screening, and testing for you"
        />
      </div>
    </div>
  );
}
const Card = ({ category, percentage, p_1, p_2 }) => {
  return (
    <div className="p-2  bg-btn w-full  rounded-2xl">
      <div className="w-full h-full bg-black bg-opacity-80 rounded-2xl  py-6 px-6 ">
        <div className="text-white h-full flex flex-col justify-between">
          <h1 className="uppercase bg-btn w-max px-3 py-1 animate-pulse rounded-lg">
            {category}
          </h1>
          <h1 className="text-3xl font-semibold mt-5">{percentage}</h1>
          <div className="gap-3 flex flex-col  mt-5">
            <Card_Data title={p_1} />
            <Card_Data title={p_2} />
          </div>
          <div className="background w-max p-[3px] rounded-lg mt-5 hover:scale-105 transition-all duration-500">
            <button className="px-5 rounded-lg bg-black bg-opacity-90 py-2">
              Start Hiring
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Card_Data = ({ title }) => {
  return (
    <span className="flex justify-start">
      <span className="w-10 max-w-md shrink-0 aspect-square">
        <ArrowRight size={20} className="mt-1" />
      </span>
      <p className="flex-grow">{title}</p>
    </span>
  );
};

export default FindEditor;
