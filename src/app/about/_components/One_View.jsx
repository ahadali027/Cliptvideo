import React from "react";
import Image from "next/image";
import img_23 from "../../../../public/about_imgs/img_23.webp";
import img_24 from "../../../../public/about_imgs/img_24.webp";
import img_25 from "../../../../public/about_imgs/img_25.webp";
const One_View = () => {
  return (
    <div className="max-w-3xl m-auto">
      <p className="text-white font-semibold text-xl  py-1 sm:py-4 md:py-3">
        Okay, sh*t.
      </p>
      <p className="text-white font-semibold text-xl  py-1 sm:py-4 md:py-3">
        This is going to take 10 years…
      </p>
      <p className="text-white font-semibold text-xl  py-1 sm:py-4 md:py-3">
        And now the Pandemic’s over, so no more free Government cash.
      </p>
      <Image
        src={img_23}
        alt="One View"
        className="w-full m-auto py-5"
      />
      <Image
        src={img_24}
        alt="One View"
        className="w-full m-auto py-5"
      />
      <p className="text-white font-semibold text-xl  py-1 sm:py-4 md:py-3">
        Think, we did.
      </p>
      <p className="text-white font-semibold text-xl  py-1 sm:py-4 md:py-3">
        We took everything we learned about finding, training, and screening our
        overseas video editing team.
      </p>
      <Image
        src={img_25}
        alt="One View"
        className="w-full m-auto py-5"
      />
    </div>
  );
};

export default One_View;
