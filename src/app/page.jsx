import Clients from "./_components/Clients/Clients";
import FindEditor from "./_components/FindEditor/FindEditor";
import Hero from "./_components/Hero/Hero";
import HowItsWork from "./_components/how_it_work/HowItsWork";
import MeetyourEdtor from "./_components/MeetYourEditor/MeetyourEdtor";
import Pricing from "./_components/Pricing/Pricing";
import VideosTabs from "./_components/VideosTabs/VideosTabs";
import Faq from "./_components/Faq/Faq";
import GetSatrted from "./_components/GetStarted/GetSatrted";

export default function Home() {
  return (
    <>
      {/* Assigend to Tayyab */}
      <Hero />

      {/* Zain  */}
      <Clients />

      {/* Assigned to Ahad */}
      <VideosTabs />

      {/* Ahad's Task */}
      <FindEditor />
      {/* Ahad Task */}
      <HowItsWork />
      {/* Ahad's Work */}
      <MeetyourEdtor />
      {/* Ahad's Work */}
      <Pricing />
      {/* Assigned to Tayyab */}
      <Faq />
      {/* Ahad's Work */}
      <GetSatrted />
    </>
  );
}
