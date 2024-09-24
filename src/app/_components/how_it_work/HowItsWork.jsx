import React from "react";
import img_1 from "../../../../public/images/how_its_work_sect/count_1.svg";
import img_2 from "../../../../public/images/how_its_work_sect/count_2.svg";
import img_3 from "../../../../public/images/how_its_work_sect/count_3.svg";
import Image from "next/image";

function HowItsWork() {
  return (
    <div className="mt-24 max-w-6xl mx-auto">
      <h1 className="text-white text-5xl font-semibold text-center px-7">How it works</h1>
      <div className="flex lg:flex-row flex-col mt-12 justify-center  lg:gap-5 gap-10">
        <Data
          img={img_1}
          title="Tell us what you want"
          description="Hit the “Start Hiring” button to tell us about the videos you want to
          make and what you’re looking for in a video editor."
        />
        <Data
          img={img_2}
          title="Review samples"
          description="We screen portfolios and find the top editors for you. We’ll send you the best portfolios and samples for your editing description so you can decide who your favorite editor is."
        />
        <Data
          img={img_3}
          title="Hire your editor"
          description="If you love your editor, we’ll help place them full-time on your team! Our support continues as long as you need."
        />
      </div>
    </div>
  );
}

const Data = ({ img, title, description }) => {
  return (
    <div className="flex lg:flex-row sm:flex-row flex-col   items-start lg:gap-7 gap-5 px-7">
      <Image src={img} alt="How it works" className="flex-1 max-w-20" />
      <div className="text-white lg:max-w-[20rem] w-full">
        <h1 className="text-2xl font-semibold ">{title}</h1>
        <p className="lg:mt-3 mt-2 font-medium">{description}</p>
      </div>
    </div>
  );
};
export default HowItsWork;
