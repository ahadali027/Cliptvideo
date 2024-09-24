"use client";

import React, { useState } from "react";

const VideosTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Array of video sources, corresponding to each tab
  const videoSources = [
    "https://cdn.vidzflow.com/v/n031xTuHgD_1080p_1719892365.mp4",
    "https://cdn.vidzflow.com/v/2QE5IMooPv_1080p_1706624904.mp4",
    "https://cdn.vidzflow.com/v/2QE5IMooPv_1080p_1706624904.mp4https://cdn.vidzflow.com/v/5aAiOk1IZN_1080p_1705321905.mp4",
    "https://cdn.vidzflow.com/v/V164Cx0JYs_1080p_1706616885.mp4",
    "https://cdn.vidzflow.com/v/KXr4FS5Jp1_1080p_1705313059.mp4",
  ];

  // Array of tab names
  const tabNames = ["Ads", "Podcasts", "Clips", "Youtube", "Explainer"];

  // Function to handle tab click and set active tab index
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const videoSource = videoSources[activeTab];

  return (
    <div className="px-10 mx-auto">
      <div className=" mx-auto  mt-10 py-2 max-w-6xl lg:mx-auto rounded-2xl background">
        <div className="bg-black mx-2 bg-opacity-80 rounded-2xl border-opacity-10">
          <div className="rounded-2xl lg:px-0 px-2 lg:py-10 md:py-7 py-6">
            <h1 className="lg:text-5xl text-5xl   lg:mt-5 md:mt-4 font-semibold text-center text-white">
              To watch videos like these:
            </h1>
            <ul className="flex flex-wrap px-3 w-full  md:flex-row sm:flex-col mt-12 lg:gap-5 gap-3 items-center text-lg font-medium text-white justify-center">
              {tabNames.map((tabName, index) => (
                <li key={index} className="sm:w-full md:w-auto ">
                  <button
                    className={`${
                      index === activeTab
                        ? "bg-btn bg-btn-hvr bg-opacity-15"
                        : "bg-white bg-opacity-15"
                    } rounded-md  border border-gray-500/70 px-7 py-[2px] hover:bg-black/10 transition-colors duration-300 hover:border-gray-500/25`}
                    onClick={() => handleTabClick(index)}
                  >
                    {tabName}
                  </button>
                </li>
              ))}
            </ul>
            <div className="lg:mt-7  mt-5  rounded-2xl w-full h-full  ">
              <VideoPlayer url={videoSource} key={videoSource} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoPlayer = ({ url }) => {
  return (
    <video
      controls
      className="rounded-xl lg:max-w-[60rem]  mx-auto w-full px-3 aspect-[18/9] bg-black"
    >
      <source src={url} className="w-full" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideosTabs;
