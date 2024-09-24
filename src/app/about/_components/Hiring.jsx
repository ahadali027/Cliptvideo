import Image from "next/image";
import React from "react";
import img_43 from "../../../../public/about_imgs/img_43.webp";
import img_44 from "../../../../public/about_imgs/img_44.webp";
import img_45 from "../../../../public/about_imgs/img_45.webp";

const Hiring = () => {
  return (
    <div className="max-w-[100%] mt-10 mx-auto">
      <p className="text-white text-center font-semibold text-xl">
        Now who do you want to hire?
      </p>
      <div className="flex flex-wrap justify-center items-center gap-5 my-14">
        <div className="w-[90%] sm:w-[45%] md:w-[30%] lg:w-[23%] p-2 bg-[#ffffff0a] rounded-lg">
          <Image
            src={img_43}
            alt="Our-Editior"
            className="w-full object-cover rounded-lg"
          />
        </div>
        <div className="w-[90%] sm:w-[45%] md:w-[30%] lg:w-[23%] p-2 bg-[#ffffff0a] rounded-lg">
          <Image
            src={img_44}
            alt="Our-Editior"
            className="w-full object-cover rounded-lg"
          />
        </div>
        <div className="w-[90%] sm:w-[45%] md:w-[30%] lg:w-[23%] p-2 bg-[#ffffff0a] rounded-lg">
          <Image
            src={img_45}
            alt="Our-Editior"
            className="w-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="bg hover:animate-pulse transition-all ease-in-out hover:scale-[1.03] m-auto mt-7 rounded-xl p-1 max-w-max">
        <div className="bg-black py-[10px] rounded-lg text-center">
          <a href="#" className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl lg:px-14">
            START HIRING
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
