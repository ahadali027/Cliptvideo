import React from "react";
import Image from "next/image";
import img_34 from "../../../../public/about_imgs/img_34.webp";
import img_35 from "../../../../public/about_imgs/img_35.webp";
import img_36 from "../../../../public/about_imgs/img_36.webp";
import img_37 from "../../../../public/about_imgs/img_37.webp";
import img_38 from "../../../../public/about_imgs/img_38.webp";
import img_39 from "../../../../public/about_imgs/img_39.webp";
import img_40 from "../../../../public/about_imgs/img_40.webp";

const Intervention = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <p className="text-white font-semibold text-xl py-2 sm:py-4 md:py-4 lg:py-5">
        Lessons on life for Tim Ferriss:
      </p>
      <div className="flex flex-col items-center space-y-5">
        <Image
          src={img_34}
          alt="Intervention"
          className="w-full"
        />
        <Image
          src={img_35}
          alt="Intervention"
          className="w-full"
        />
        <Image
          src={img_36}
          alt="Intervention"
          className="w-full"
        />
        <Image
          src={img_37}
          alt="Intervention"
          className="w-full"
        />
        <Image
          src={img_38}
          alt="Intervention"
          className="w-full"
        />
        <Image
          src={img_39}
          alt="Intervention"
          className="w-full"
        />
        <Image
          src={img_40}
          alt="Intervention"
          className="w-full"
        />
      </div>
      <p className="text-white font-semibold text-xl py-2 sm:py-4 md:py-4 lg:py-3">
        Great point, Alex.
      </p>
      <p className="text-white font-semibold text-xl py-2 sm:py-4 md:py-4 lg:py-3">
        In creating for other people, we had forgotten about our own content.
      </p>
      <p className="text-white font-semibold text-xl py-2 sm:py-4 md:py-4 lg:py-3">
        We weren’t practicing all the things we preached.
      </p>
      <p className="text-white font-semibold text-xl py-2 sm:py-4 md:py-4 lg:py-3">
        So we did that…
      </p>
    </div>
  );
};

export default Intervention;
