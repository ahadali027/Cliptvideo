import Image from "next/image";
import React from "react";
import img_2 from "../../../../public/about_imgs/img_2.webp";
import img_3 from "../../../../public/about_imgs/img_3.webp";
import img_4 from "../../../../public/about_imgs/img_4.webp";
import img_5 from "../../../../public/about_imgs/img_5.webp";
import img_6 from "../../../../public/about_imgs/img_6.webp";
import img_7 from "../../../../public/about_imgs/img_7.webp";

const Idea = () => {
  return (
    <div className="m-auto px-20 max-w-4xl">
      <Image
        src={img_2}
        className="w-full m-auto py-5"
        alt="Ideas"
      />
      <Image
        src={img_3}
        className="w-full m-auto py-5"
        alt="Ideas"
      />
      <Image
        src={img_4}
        className="w-full m-auto py-5"
        alt="Ideas"
      />
      <Image
        src={img_5}
        className="w-full m-auto py-5"
        alt="Ideas"
      />
      <Image
        src={img_6}
        className="w-full m-auto py-5"
        alt="Ideas"
      />
      <p className="text-white font-semibold text-xl  py-5 sm:py-10  md:py-10">
        The only problem?
      </p>
      <Image
        src={img_7}
        className="w-full m-auto py-5"
        alt="Ideas"
      />
      <p className="text-white font-semibold text-xl  py-1  sm:py-4  md:py-3">
        Ya, we were broke as sh*t.
      </p>
      <p className="text-white font-semibold text-xl  py-1  sm:py-4  md:py-3">
        But luckily for us, it was the COVID pandemic.
      </p>
      <p className="text-white font-semibold text-xl  py-1  sm:py-4  md:py-3">
        So Uncle Sam was giving out free money to anyone with a pulse.
      </p>
      <p className="text-white font-semibold text-xl  py-1  sm:py-4  md:py-3">
        And because we were broke and nobody was allowed to work together
        in-person, we started looking for our video editing team overseas.
      </p>
    </div>
  );
};

export default Idea;
