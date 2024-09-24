import React from "react";
import Image from "next/image";
import img_41 from "../../../../public/about_imgs/img_41.webp";
import img_42 from "../../../../public/about_imgs/img_42.webp";

const Analytics = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col justify-center items-center gap-16 mt-5">
        <Image
          src={img_41}
          alt="Analytics"
          className="w-full"
        />
        <Image
          src={img_42}
          alt="Analytics"
          className="w-full"
        />
      </div>
      <div className="mt-5 max-w-3xl mx-auto">
        <p className="text-white font-semibold text-xl py-2 sm:py-4 md:py-4 lg:py-3">
          We got 1 billion views in 1 year.
        </p>
        <p className="text-white font-semibold text-xl py-2 sm:py-4 md:py-4 lg:py-3">
          Now it’s your turn to create…
        </p>
        <p className="text-white font-semibold text-xl py-2 sm:py-4 md:py-4 lg:py-3">
          We’re giving you everything we’ve learned from:
        </p>
        <ul className="text-white font-semibold text-xl py-2 sm:py-4 md:py-422rem] lg:py-3 list-disc">
          <li className="p-2">10 years of editing</li>
          <li className="p-2">4 years of hiring</li>
          <li className="p-2">3,000+ applicants screened</li>
          <li className="p-2">100+ editors trained</li>
        </ul>
        <p className="text-white font-semibold text-xl py-2 sm:py-4 md:py-4 lg:py-3">
          So we can find you an amazing editor.
        </p>
      </div>
    </div>
  );
};

export default Analytics;
