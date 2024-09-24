import React from "react";
import Image from "next/image";
// import img_26 from "../../../../public/about_imgs/img_26.webp";
import img_27 from "../../../../public/about_imgs/img_27.webp";
import img_28 from "../../../../public/about_imgs/img_28.webp";
import img_29 from "../../../../public/about_imgs/img_29.webp";
import img_30 from "../../../../public/about_imgs/img_30.webp";
import img_31 from "../../../../public/about_imgs/img_31.webp";
import img_32 from "../../../../public/about_imgs/img_32.webp";
import img_33 from "../../../../public/about_imgs/img_33.webp";
const Podcasts = () => {
  return (
    <div className=" max-w-3xl m-auto">
      <p className="text-white font-semibold text-xl  py-1  sm:py-4  md:py-3">
        And spun up Clipt.co – a staffing agency that helps creators, agencies,
        and startups hire overseas video editors to save tons of money too.
      </p>
      <p className="text-white font-semibold text-xl  py-1  sm:py-4  md:py-3">
        Our editors made…
      </p>
      <p className="text-white font-semibold text-xl  py-1  sm:py-4  md:py-3">
        Videos for the My First Million Podcast:
      </p>

      <div className="relative  m-auto py-5 aspect-square">
        <Image
          src={"/about_imgs/img_26.webp"}
          alt="Podcasts"
          fill
          className="w-full object-cover"
        />
      </div>
      <p className="text-white font-semibold text-xl  py-1  sm:py-4  md:py-3">
        Clips for the All-In guys:
      </p>
      <Image
        src={img_27}
        alt="Podcasts"
        className="w-full  m-auto py-5"
      />
      <p className="text-white font-semibold text-xl  py-1  sm:py-4  md:py-3">
        A Netflix special for Hasan Minhaj:
      </p>
      <Image
        src={img_28}
        alt="Podcasts"
        className="w-full  m-auto py-5"
      />
      <p className="text-white font-semibold text-xl  py-1  sm:py-4  md:py-3">
        Animations for Naval Ravikant:
      </p>
      <Image
        src={img_29}
        alt="Podcasts"
        className="w-full  m-auto py-5"
      />
      <p className="text-white font-semibold text-xl  py-1  sm:py-4  md:py-3">
        Book quotes for Will Smith:
      </p>
      <Image
        src={img_30}
        alt="Podcasts"
        className="w-full  m-auto py-5"
      />
      <p className="text-white font-semibold text-xl  py-1  sm:py-4  md:py-3">
        Product releases for Jimmy Fallon:
      </p>
      <Image
        src={img_31}
        alt="Podcasts"
        className="w-full  m-auto py-5"
      />
      <p className="text-white font-semibold text-xl  py-1  sm:py-4  md:py-3">
        YouTube Shorts for Ali Abdaal:
      </p>
      <Image
        src={img_32}
        alt="Podcasts"
        className="w-full  m-auto py-5"
      />
      <p className="text-white font-semibold text-xl  py-1  sm:py-4  md:py-3">
        Lessons on life for Tim Ferriss:
      </p>
      <Image
        src={img_33}
        alt="Podcasts"
        className="w-full  m-auto py-5"
      />
    </div>
  );
};

export default Podcasts;
