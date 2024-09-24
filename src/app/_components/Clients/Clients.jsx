import Image from "next/image";
import React from "react";
import WhoWeAre from "./WhoWeAre.svg";
import ClientCards from "./ClientCards";

const Clients = () => {
  return (
    <div className="max-w-screen-2xl py-20 mx-auto text-white flex items-center flex-col">
      <Image src={WhoWeAre} alt="Client-Cards" />
      <div className="text-base relative bg-white/[0.08] mt-8 rounded-md z-20 border px-2 py-1 animate-bounce-slow repeat-infinite border-white/[0.19]">
        Click on a person 👇
      </div>
      <ClientCards />
    </div>
  );
};

export default Clients;
