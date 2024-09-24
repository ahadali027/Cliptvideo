import React from "react";
import Image from "next/image";
import img_18 from "../../../../public/about_imgs/img_18.webp";
import img_19 from "../../../../public/about_imgs/img_19.webp";
import img_20 from "../../../../public/about_imgs/img_20.webp";
import img_21 from "../../../../public/about_imgs/img_21.webp";
import img_22 from "../../../../public/about_imgs/img_22.webp";

const No_Views = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Image
        src={img_18}
        className="w-full m-auto py-5"
        alt="No views"
      />
      <Image
        src={img_19}
        className="w-full m-auto py-5"
        alt="No views"
      />
      <Image
        src={img_20}
        className="w-full py-5 m-auto"
        alt="No views"
      />
      <Image
        src={img_21}
        className="w-full py-5 m-auto"
        alt="No views"
      />
      <Image
        src={img_22}
        className="w-full m-auto py-5"
        alt="No views"
      />
    </div>
  );
};

export default No_Views;
