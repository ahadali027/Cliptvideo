import React from "react";
import Card1 from "../../../../../publiC/agency/card1.webp";
import Card2 from "../../../../../public/agency/card2.webp";
import Stat1 from "../../../../../public/agency/stat1.webp";
import Stat2 from "../../../../../public/agency/stat2.webp";
import Stat3 from "../../../../../public/agency/stat3.webp";
import Image from "next/image";

const Cost = () => {
  return (
    <div className="max-w-5xl m-auto pt-4 text-white md:px-0 px-7">
      <div className="flex justify-center items-center md:flex-row flex-col gap-14 ">
        <div>
          <Image src={Card1} width={470} height={470} alt="image" />
        </div>{" "}
        <div>
          <Image src={Card1} width={470} height={470} alt="image" />
        </div>{" "}
      </div>
      <p className="mt-4 lg:ml-32 md:ml-5 font-semibold md:text-lg text-base">
        So who do you pick?{" "}
      </p>
      <p className="mt-4 lg:ml-32 md:ml-5 font-semibold md:text-lg text-base ">
        Well, let’s just look at costs…
      </p>
      <div className="flex flex-col justify-center items-center">
        <div>
          <Image
            src={Stat1}
            alt="image"
            width={760}
            height={760}
            className="mt-9"
          />
          <p className="mt-4  font-semibold md:text-lg text-base ">
            Wait…where’s Karen?
          </p>
        </div>
        <Image
          src={Stat2}
          alt="image"
          width={760}
          height={760}
          className="mt-5"
        />
        <div>
          <Image
            src={Stat3}
            alt="image"
            width={760}
            height={760}
            className="mt-5"
          />
          <p className="mt-4  font-semibold md:text-lg text-base ">JESUS.</p>
          <p className="mt-4  font-semibold md:text-lg text-base ">
            She’s in orbit.
          </p>
          <p className="mt-4  font-semibold md:text-lg text-base ">
            Because these are the costs after 5 years:
          </p>
          <ul className="list-disc ml-5 mt-4 font-semibold">
            <li>$430,000 – Karen</li>
            <li>$180,000 – Kris</li>
          </ul>
          <p className="mt-4  font-semibold md:text-lg text-base ">
            Kris costs $180k for 5 years…$180K FOR 5 YEARS!
          </p>{" "}
          <p className="mt-4  font-semibold md:text-lg text-base ">
            You save $250,000 over Karen.
          </p>{" "}
          <p className="mt-4  font-semibold md:text-lg text-base ">
            So which life do you want?
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default Cost;
