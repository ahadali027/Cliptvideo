import React from "react";
import Paisa from "../../../../../public/agency/paisa.webp";
import Milio from "../../../../../public/agency/vs.webp";
import Vs from "../../../../../public/agency/millioners.webp";
import Boy from "../../../../../public/agency/boy.png";
import Girl1 from "../../../../../public/agency/girl1.png";
import Girl2 from "../../../../../public/agency/girl2.png";
import Image from "next/image";

const Comparison = () => {
  return (
    <div className="max-w-3xl m-auto pt-4 pb-16 text-white md:px-0 px-7">
      <Image
        src={Paisa}
        alt="image"
        width={760}
        height={760}
        className="mt-5 m-auto"
      />
      <p className="mt-14  font-semibold md:text-lg text-base ">
        plus you can invest those savings in more Krisses:
      </p>
      <Image
        src={Milio}
        alt="image"
        width={760}
        height={760}
        className="mt-5 m-auto"
      />
      <p className="mt-14  font-semibold md:text-lg text-base ">
        Ya for every 1 Karen you could hire 2 Krisses. <br />
        <br /> But don’t worry, Karen. <br />
        <br /> Because you can promote her to creative director – to oversee
        your overseas army. <br />
        <br /> WIN-WIN. <br />
        <br /> The same strategy as other Clipt creators & companies:
      </p>
      <Image
        src={Vs}
        alt="image"
        width={760}
        height={760}
        className="mt-9 m-auto"
      />
      <p className="text-center mt-6">Now who do you want to hire?</p>
      <div className="flex md:flex-row flex-col gap-5 mt-9">
        <div className="border-8 border-white/15 rounded-lg">
          <Image src={Boy} width={800} height={800} alt="image" />
        </div>
        <div className="border-8 border-white/15 rounded-lg">
          {" "}
          <Image src={Girl1} width={800} height={800} alt="image" />
        </div>
        <div className="border-8 border-white/15 rounded-lg">
          {" "}
          <Image src={Girl2} width={800} height={800} alt="image" />
        </div>
      </div>
      <div className="bg hover:animate-pulse transition-all ease-in-out hover:scale-[1.03] ... m-auto mt-10 rounded-xl p-1 md:max-w-72 sm:max-w-52 max-w-40">
        <div className="bg-black sm:px-7 sm:py-3 py-[10px] rounded-lg text-center">
          <a href="#" className="text-white md:text-3xl">
            START HIRING
          </a>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
