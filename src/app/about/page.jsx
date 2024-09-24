import React from "react";
import About_Main from "./_components/About_Main";
import About_Stats from "./_components/About_Stats";
import Idea from "./_components/Idea";
import Solution from "./_components/Solution";
import Surprise from "./_components/Surprise";
import No_Views from "./_components/No_Views";
import One_View from "./_components/One_View";
import Podcasts from "./_components/Podcasts";
import Intervention from "./_components/Intervention";
import Analytics from "./_components/Analytics";
import Hiring from "./_components/Hiring";
import "./about.css"

const page = () => {
  return (
    <div className="px-10 lg:px-0 about-page">
      <About_Main />
      <About_Stats />
      <Idea />
      <Solution />
      <Surprise />
      <No_Views />
      <One_View />
      <Podcasts />
      <Intervention />
      <Analytics />
      <Hiring />
    </div>
  );
};

export default page;
