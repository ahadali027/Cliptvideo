import React from "react";

const About_Stats = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center m-auto mt-14 text-white w-full gap-10 md:gap-0">
        <div className="flex flex-col items-center md:flex-row gap-1">
          <span className="text-5xl md:text-7xl font-semibold">2</span>
          <div className="pt-1 md:pt-3 text-sm md:text-base text-center md:text-left">
            Million <br /> Subscribers
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row gap-1">
          <span className="text-5xl md:text-7xl font-semibold">1</span>
          <div className="pt-1 md:pt-3 text-sm md:text-base text-center md:text-left">
            Billion <br /> Views
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-1">
          <span className="text-5xl md:text-7xl font-semibold">50</span>
          <div className="pt-1 md:pt-3 text-sm md:text-base text-center md:text-left">
            Overseas <br /> Editors
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 text-lg font-semibold m-auto mt-14 text-white w-full ">
        <p>Well…</p>
        <p>Clipt isn’t our last name. And we’re not brothers.</p>
        <p>
          BUT we are good friends that were sleeping on a floor after college
          when we committed to making videos our life:
        </p>
      </div>
    </div>
  );
};

export default About_Stats;
