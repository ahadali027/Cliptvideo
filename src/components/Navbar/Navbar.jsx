"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex  m-auto lg:justify-evenly px-16 justify-between items-center mt-5 lg:py-3   transition-all duration-400 z-30">
      <Link href={"/"}>
        <Image
          className="text-3xl font-bold"
          src={"/images/Logo.svg"}
          width={110}
          height={110}
          alt="image"
        />
      </Link>
      <NavLinks />
      <div className="bg w-max hover:animate-pulse transition-all ease-in-out hover:scale-[1.03] rounded-xl p-1 lg:block hidden">
        <Button className="bg-black  rounded-lg">START HIRING</Button>
      </div>
      <MobileNav />
    </div>
  );
  n;
};

export default Navbar;
