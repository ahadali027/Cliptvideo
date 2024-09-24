import React from "react";
import { CarouselPlugin } from "./Slides";


function MeetyourEdtor() {
  return (
    <div className="grid md:grid-cols-2 lg:flex justify-between items-center lg:flex-row md:flex-row flex-col max-w-6xl mx-auto  px-10 mt-36">
      <div className="text-white flex flex-col lg:items-start md:items-start items-center lg:max-w-lg md:max-w-lg max-w-full">
        <h1 className="text-5xl font-semibold lg:text-left md:text-left text-center ">
          Meet your future video editor
        </h1>
        <p className="text-lg mt-8 lg:text-left md:text-left text-center">
          Scroll through the top 1% of video editors that apply to Clipt. Your
          editor will have the skills, expertise, and creativity to support all
          your video needs.
        </p>
        <div className="background w-max p-[3px] rounded-lg mt-6 hover:scale-105 transition-all duration-500">
          <button className="px-5 rounded-lg bg-black bg-opacity-90 py-2">
            Start Hiring
          </button>
        </div>
      </div>
      <div className="lg:max-w-md sm:max-w-md relative lg:mt-0 sm:mt-10  mt-6 ">
        <CarouselPlugin />
      </div>
    </div>
  );
}

export default MeetyourEdtor;
