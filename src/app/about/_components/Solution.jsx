import React from "react";
import Image from "next/image";
import img_8 from "../../../../public/about_imgs/img_8.webp";
import img_9 from "../../../../public/about_imgs/img_9.webp";
import img_10 from "../../../../public/about_imgs/img_10.webp";
import img_11 from "../../../../public/about_imgs/img_11.webp";
import img_12 from "../../../../public/about_imgs/img_12.webp";

const Solution = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Image
        src={img_8}
        alt="Solution"
        className="w-full m-auto py-5"
      />
      <p className="text-white font-semibold text-xl  py-1  sm:py-4  md:py-3">
        It turns out, these were the best video editors in the world.
      </p>
      <p className="text-white font-semibold text-xl  py-1  sm:py-4  md:py-3">
        Filipinos.
      </p>
      <p className="text-white font-semibold text-xl  py-1  sm:py-4  md:py-3">
        And nobody knew it.
      </p>
      <p className="text-white font-semibold text-xl  py-1  sm:py-4  md:py-3">
        So we took the $2,470/mo we were receiving in unemployment checks, set
        aside the bare minimum for food, and invested every last cent into
        building an overseas content-editing-battalion:
      </p>
      <Image
        src={img_9}
        alt="Solution"
        className="w-full m-auto py-5"
      />
      <Image
        src={img_10}
        alt="Solution"
        className="w-full m-auto py-5"
      />
      <Image
        src={img_11}
        alt="Solution"
        className="w-full m-auto py-5"
      />
      <Image
        src={img_12}
        alt="Solution"
        className="w-full m-auto py-5"
      />
    </div>
  );
};

export default Solution;
