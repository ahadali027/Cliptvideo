import Image from "next/image";
import React from "react";

import "./Clients.css";
import Link from "next/link";

const cards = [
  { link: "/podcast", name: "Podcaster" },
  { link: "/youtube", name: "Youtuber" },
  { link: "/tiktok", name: "Tiktoker" },
  { link: "/agency", name: "Agency" },
  { link: "/media", name: "Media" },
  { link: "/Startups", name: "StartUp" },
].map(({ name, link }) => {
  return {
    url: `/images/Character_imgs/${name
      .split(" ")
      .join("")
      .toLowerCase()}.webp`,
    name,
    link,
  };
});

const ClientCards = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full gap-5 lg:gap-0 mt-5">
      {cards.map(({ url, name, link }, ind) => (
        <Link href={link} key={ind}>
          <Card url={url} name={name} />
        </Link>
      ))}
    </div>
  );
};

const Card = ({ url, name }) => {
  return (
    <div className="who-client-card flex-1 flex flex-col relative items-center">
      <div className="w-full aspect-square relative">
        <Image src={url} alt="ClientCards" fill className=" object-contain" />
      </div>
      <div className="px-3 mt-2 py-1 bg-btn-hover rounded-md border shadow shadow-white border-white/20 font-bold text-lg">
        {name}
      </div>
    </div>
  );
};

export default ClientCards;
