import React from "react";

const Hero = () => {
  return (
    <div className="md:py-32 p-[2.5rem] lg:pt-14 text-center ">
      <div className="font-semibold text-4xl md:text-6xl md:leading-[5rem]  lg:text-[4rem] text-white">
        <h1 className="flex flex-col lg:block">
          Hire{" "}
          <span className="gradient-text">
            amazing video editors
          </span>
        </h1>
        for 70% less than US employees
      </div>

      <div className="text-[1.375rem] font-medium leading-6 md:leading-8  max-w-3xl px-5 lg:px-0  m-auto pt-5 text-white">
        <p>
          We&apos;re a staffing agency for placing top overseas editors into
          your company. Build your content machine – faster, smarter, and more
          affordably.
        </p>
      </div>
      <div className="bg hover:animate-pulse transition-all ease-in-out hover:scale-[1.03] m-auto mt-10 rounded-xl p-1 md:max-w-72 sm:max-w-52 max-w-40">
        <div className="bg-black sm:px-7 sm:py-3 py-[10px] rounded-lg">
          <a href="#" className="text-white md:text-3xl">
            START HIRING
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
