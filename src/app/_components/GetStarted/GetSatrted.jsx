import React from "react";

import { Carouseles } from "./Slider";

function GetSatrted() {
  return (
    <div className="px-10 mx-auto">
      <div className="bg p-2 rounded-2xl mt-28  mx-auto max-w-7xl">
        <div className=" bg-black bg-opacity-50 border rounded-2xl  border-white border-opacity-25">
          <div className="text-white max-w-2xl mx-auto text-center px-10 flex flex-col mt-16 justify-center items-center">
            <h1 className="text-5xl font-semibold">Ready to get started?</h1>
            <p className="max-w-md mt-5">
              We find you the best overseas video editors for 70% less than US
              employees
            </p>
            <div className="background w-full max-w-xs p-[4px] rounded-lg mt-5 hover:scale-105 transition-all duration-500">
              <button className="px-4 rounded-lg w-full bg-black bg-opacity-90 py-3 md:text-3xl text-2xl uppercase">
                Start Hiring
              </button>
            </div>
          </div>
          <div className="w-full">
            <Carouseles />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetSatrted;
