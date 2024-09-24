import React from "react";
import Image from "next/image";
import img_1 from "../../../../public/about_imgs/img_1.webp";

const About_Main = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-6xl justify-evenly items-center m-auto mt-10 px-10 py-20 ">
      <div className="text-white lg:max-w-[40%] text-center lg:text-left">
        <p className="text-4xl lg:text-6xl leading-tight font-semibold">
          Hey, we’re the Clipt bros!
        </p>
        <p className="text-[1.125rem] py-8 max-w-2xl font-medium text-white/80">
          The duo that gained 2,000,000 YouTube subscribers in 1 year while
          leading our 50-person creative team overseas.
        </p>
        <div className="bg mx-auto lg:mx-0 hover:animate-pulse transition-all ease-in-out hover:scale-[1.03] rounded-xl p-1 max-w-[10rem] sm:max-w-[13rem] md:max-w-fit">
          <div className="bg-black py-[10px] sm:px-3 sm:py-2 rounded-lg text-center">
            <a href="#" className="text-white text-sm font-semibold">
              START HIRING
            </a>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 lg:mt-auto lg:w-auto py-4 flex justify-center">
        <Image
          src={img_1}
          alt="Clipt bros"
          className="w-full h-auto max-w-[100%]"
        />
      </div>
    </div>
  );
};

export default About_Main;
