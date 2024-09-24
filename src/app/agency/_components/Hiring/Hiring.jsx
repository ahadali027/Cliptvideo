import React from "react";
import Img from "../../../../../public/agency/iphone.gif";
import Imgg from "../../../../../public/agency/img2.webp";
import Image from "next/image";

const Hiring = () => {
  return (
    <div className="max-w-3xl m-auto pt-16 text-white md:px-0 px-7">
      <p className="md:text-3xl text-2xl max-w-2xl m-auto  text-center font-semibold">
        Agency owners, your profit margins are shrinking.
      </p>
      <p className="md:text-3xl text-2xl text-center font-semibold mt-6">
        Invest in an overseas editor.
      </p>
      <p className="text-center mt-8 font-semibold max-w-3xl m-auto">
        Investing in a Clipt editor can unlock 70% better profit margins –
        forever. We are a staffing agency for finding and embedding top overseas
        video editors on your team.
      </p>
      <div className="bg hover:animate-pulse transition-all ease-in-out hover:scale-[1.03] ... m-auto mt-8 rounded-xl p-1 md:max-w-72 sm:max-w-52 max-w-40">
        <div className="bg-black sm:px-7 sm:py-3 py-[10px] rounded-lg">
          <a href="#" className="text-white md:text-3xl">
            START HIRING
          </a>
        </div>
      </div>
      <p className="mt-14 font-semibold text-lg">
        I mean, look. You wanna be the next Gary Vee:
      </p>
      <Image
        src={Img}
        width={450}
        height={450}
        alt="image"
        className="m-auto mt-6"
      />
      <p className="mt-7 font-semibold text-lg">
        But building a profitable agency like Vayner Media is HARD.
      </p>
      <p className="mt-4 font-semibold text-lg">Why?</p>
      <p className="mt-4 font-semibold text-lg">
        Because your American editors are squeezing your margins:
      </p>
      <Image
        src={Imgg}
        width={900}
        height={900}
        alt="image"
        className="m-auto mt-6"
      />
      <p className="mt-4 font-semibold text-lg">So let’s look overseas… </p>
      <p className="mt-4 font-semibold text-lg">
        Here are your two editor options:
      </p>
    </div>
  );
};

export default Hiring;
