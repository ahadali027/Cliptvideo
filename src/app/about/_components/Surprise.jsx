import React from "react";
import Image from "next/image";
import img_13 from "../../../../public/about_imgs/img_13.webp";
import img_14 from "../../../../public/about_imgs/img_14.webp";
import img_15 from "../../../../public/about_imgs/img_15.webp";
import img_16 from "../../../../public/about_imgs/img_16.webp";
const Surprise = () => {
  return (
    <div className="max-w-3xl m-auto">
      <p className="text-white font-semibold text-xl  py-1  sm:py-4  md:py-3">
        And to our surprise…!
      </p>
      <Image
        src={img_13}
        alt="Surprise"
        className="w-full m-auto py-5"
      />
      <Image
        src={img_14}
        alt="Surprise"
        className="w-full m-auto py-5"
      />
      <Image
        src={img_15}
        alt="Surprise"
        className="w-full m-auto py-5"
      />
      <Image
        src={img_16}
        alt="Surprise"
        className="w-full m-auto py-5"
      />
    </div>
  );
};

export default Surprise;
