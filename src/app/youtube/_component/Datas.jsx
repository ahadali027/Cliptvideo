import React from "react";
import img1 from "../../../../public/images/Youtube/img1.gif";
import img2 from "../../../../public/images/Youtube/img2.webp";
import img3 from "../../../../public/images/Youtube/img3.webp";
import img4 from "../../../../public/images/Youtube/img4.webp";
import img5 from "../../../../public/images/Youtube/img5.webp";
import img6 from "../../../../public/images/Youtube/img6.webp";
import img7 from "../../../../public/images/Youtube/img7.webp";
import img8 from "../../../../public/images/Youtube/img8.webp";
import img12 from "../../../../public/images/Podcast page/img12.webp";
import img13 from "../../../../public/images/Podcast page/img13.webp";
import img14 from "../../../../public/images/Youtube/img9.webp";
import img15 from "../../../../public/images/Podcast page/img15.webp";
import img16 from "../../../../public/images/Podcast page/img16.webp";
import img17 from "../../../../public/images/Podcast page/img17.webp";
import img18 from "../../../../public/images/Podcast page/img18.webp";
import img19 from "../../../../public/images/Podcast page/img19 (1).webp";
import img20 from "../../../../public/images//Podcast page/img20.webp";
import img21 from "../../../../public/images/Tiktok/img16.png";
import Image from "next/image";

function Datas() {
  return (
    <div className="max-w-3xl mx-auto text-white mt-20 px-10">
      <div className="text-white">
        <p className="text-xl">
          I mean, look. You wanna be the next Mr. Beast:
        </p>
        <Image src={img1} />
        <div className="flex flex-col gap-4 text-xl mt-6">
          <p>But…</p>
          <p>Growing a YouTube channel is hard.</p>
          <p>
            You’ve already tried posting lifestyle vlogs to your channel with
            117 subscribers:
          </p>
        </div>
        <Image src={img2} />
        <Image src={img3} className="mt-5" />
        <Image src={img4} className="mt-5" />
        <Image src={img5} className="mt-5" />
        <Image src={img6} className="mt-5" />
        <Image src={img7} className="mt-5" />
        <Image src={img8} className="mt-5" />
        <div className="flex flex-col gap-4 text-white text-xl font-medium">
          <p>
            Ya, nobody cares about you yet.
            <br /> <br /> So what’s the secret?
            <br /> <br />{" "}
            <span className="w-full text-center mx-auto inline-block">
              {" "}
              SUCCESS = QUALITY * QUANTITY * TIME{" "}
            </span>
            ‍ <br /> <br /> Aka you gotta make tons of great podcast <br />{" "}
            <br />
            But you’re already the set designer, screenwriter, director, talent,
            and producer.
            <br /> <br /> Now you’re the editor too?
            <br /> <br /> NOPE.
            <br /> <br /> That’s another full-time job – you need a sidekick.
            <br /> <br /> So let’s compare your 3 options:
          </p>
        
         
        </div>
      </div>
      <div className="flex w-full lg:flex-nowrap flex-wrap  justify-center mt-10">
        <Image src={img12} className="max-w-xs" />
        <Image src={img13} className="max-w-xs" />
        <Image src={img14} className="max-w-xs" />
      </div>
      <p className="text-white mt-10 text-xl">
        So who do you pick?
        <br /> <br />
        Well, let’s just look at costs…
      </p>
      <Image src={img15} className="mt-5" />
      <div className="font-medium">
        <p className="text-xl">Here are the costs after 5 years:</p>
        <ul className="text-xl mt-9 list-disc pl-7">
          <li>$1,200,000 – Black Box Agency</li> <br />
          <li>$430,000 – Karen</li> <br />
          <li>$180,000 – Kris</li> <br />
        </ul>
        <p className="text-xl mt-5">
          Now the box is in orbit, so we’re just gonna ignore that.
          <br /> <br />
          But you see the bottom?
          <br /> <br />
          Kris costs $180k for 5 years…
          <br /> <br />
          ‍$180K FOR 5 YEARS!
          <br /> <br />
          You save $250k over Karen. So which life do you want?
        </p>
      </div>
      <div>
        <Image src={img16} className="mt-10" />
        <p className="text-xl mt-10 font-medium">
          But that’s just from costs…
          <br />
          <br />
          Never mind that Kris grinds like Goggins and time travels.
          <br /> <br />
          Or at least it feels like he time travels because he’s overseas. So
          you go to bed with raw footage and wake up with edited bangers.
          <br /> <br />
          It’s like Christmas morning…EVERY. SINGLE. MORNING.
        </p>
        <Image src={img17} className="mt-8" />
        <p className="text-xl mt-10 font-medium">
          Do you want Christmas every morning?
          <br />
          <br />
          Me too.
          <br />
          <br />
          So use Clipt overseas editors just like these top creators &
          companies:
        </p>
        <Image src={img18} className="mt-8" />
        <div className="flex w-full lg:flex-nowrap flex-wrap gap-7  justify-center mt-10">
          <div className="border-8 border-white border-opacity-15 rounded-3xl">
            <Image src={img19} className="max-w-xs rounded-xl" />
          </div>
          <div className="border-8 border-white border-opacity-15 rounded-3xl">
            <Image src={img20} className="max-w-xs rounded-xl" />
          </div>
          <div className="border-8 border-white border-opacity-15 rounded-3xl">
            <Image src={img21} className="max-w-xs rounded-xl" />
          </div>
        </div>
        <div className="background w-full max-w-xs mx-auto p-[6px]  rounded-lg mt-16 hover:scale-105 transition-all  duration-500">
          <button className="px-5 w-full rounded-lg text-3xl uppercase bg-black bg-opacity-90 py-4">
            Start Hiring
          </button>
        </div>
      </div>
    </div>
  );
}

export default Datas;
