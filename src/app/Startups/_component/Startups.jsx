import React from "react";
import img1 from "../../../../public/images/Startups/img1.gif";
import img2 from "../../../../public/images/Startups/img2.webp";
import img3 from "../../../../public/images/Startups/img3.webp";
import img4 from "../../../../public/images/Startups/img4.webp";
import img5 from "../../../../public/images/Startups/img5.webp";
import img6 from "../../../../public/images/Startups/img6.webp";
import img7 from "../../../../public/images/Startups/img7.webp";
import img8 from "../../../../public/images/Startups/img8.webp";
import img12 from "../../../../public/images/Podcast page/img12.webp";
import img13 from "../../../../public/images/Podcast page/img13.webp";
import img14 from "../../../../public/images/Startups/img13.webp";
import img15 from "../../../../public/images/media/img3.webp";
import img16 from "../../../../public/images/media/img4.webp";
import img17 from "../../../../public/images/media/img5.webp";
import img18 from "../../../../public/images/Startups/img14.webp";
import img19 from "../../../../public/images/Podcast page/img19 (1).webp";
import img20 from "../../../../public/images//Podcast page/img20.webp";
import img21 from "../../../../public/images/Podcast page/img21.webp";
import img22 from "../../../../public/images/media/img7.webp";
import img23 from "../../../../public/images/Startups/img15.webp";
import Image from "next/image";

function Startups() {
  return (
    <div>
      <div className="max-w-3xl mx-auto text-white mt-20 px-10">
        <div className="text-white">
          <p className="text-xl">
            I mean, look. You wanna be the next Steve Jobs:
          </p>
          <Image src={img1} />
          <div className="text-xl  font-medium mt-10">
            <p>But building Apple is kinda hard.</p>
            <br />
            <p>Why?</p>
            <br />
            <p>
              Because a great product isn’t enough…you need great marketing.
            </p>
            <br />
            <p>But marketing agencies do this:</p>
          </div>
          <Image src={img2} className="mt-10" />
          <Image src={img3} className="mt-10" />
          <Image src={img4} className="mt-10" />
          <Image src={img5} className="mt-10" />
          <Image src={img6} className="mt-10" />
          <Image src={img7} className="mt-10" />
          <Image src={img8} className="mt-10" />

          <p className="text-xl font-semibold">
            Don’t burn to death. <br /> <br />
            You just need videos that people LOVE.
            <br />
            <br />
            Ads like this:
          </p>
          <video
            src="/images/Startups/img10.mp4"
            loop
            autoPlay
            muted
            className="mt-10"
          />

          <p className="text-xl font-medium mt-14">Product demos like this…</p>
          <video
            src="/images/Startups/img11.mp4"
            loop
            autoPlay
            muted
            className="mt-10"
          />
          <p className="text-xl font-medium mt-14">Testimonials like this…</p>
          <video
            src="/images/Startups/img12.mp4"
            loop
            autoPlay
            muted
            className="mt-10"
          />
        </div>
        <p className="text-xl font-medium mt-14">
          How do we do this?
          <br /> <br />
          Well, we already saw how an agency will kill your startup.
          <br /> <br />
          So let’s go in-house.
          <br /> <br />2 options:
        </p>
        <div className="flex w-full lg:flex-nowrap flex-wrap  justify-center mt-5">
          {/* <Image src={img12} className="max-w-xs" /> */}
          <Image src={img13} className="max-w-md" />
          <Image src={img14} className="max-w-md" />
        </div>
        <p className="text-white mt-10 text-xl">
          So who do you pick?
          <br /> <br />
          Well, let’s just look at costs…
        </p>
        <Image src={img15} className="mt-5" />
        <br />
        <p className="text-xl font-medium">Wait…where’s Karen?</p>

        <div>
          <Image src={img16} className="mt-10" />

          <Image src={img17} className="mt-8" />
          <p className="text-xl mt-10 font-medium">
            JESUS.
            <br />
            <br />
            She’s in orbit.
            <br />
            <br />
            Because these are the costs after 5 years:
            <br />
            <span className="list-disc px-5">
              <li>$430,000 – Karen</li>
              <li>$180,000 – Kris</li>
            </span>
            <br />
            Kris costs $180k for 5 years…$180K FOR 5 YEARS!
            <br />
            <br />
            Aka 2x the runway.
          <br /><br />
          </p>
          <Image src={img18} className="mt-8" />
         
          
          <p className="text-xl font-medium mt-10">
            Ya for every 1 Karen you could hire 2 Krisses.
            <br /> <br />
            But don’t worry, Karen.
            <br /> <br />
            Because you can promote her to creative director – to oversee your
            overseas army.
            <br /> <br />
            WIN-WIN.
            <br /> <br />
            The same strategy as other Clipt creators & companies:
          </p>
          <Image src={img23} className="mt-8" />
          <p className="text-xl font-medium mt-16 text-center">
            Now who do you want to hire?
          </p>

          <div className="flex w-full lg:flex-nowrap flex-wrap gap-7 justify-center mt-16">
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
    </div>
  );
}

export default Startups;
