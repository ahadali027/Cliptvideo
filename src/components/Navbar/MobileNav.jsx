"use client";
import { Menu, X, Facebook, Instagram, Twitter, Handshake } from "lucide-react";
import navData from "../../data/nav.json";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center lg:hidden  z-20">
      <Menu
        className="h-10 w-10 self-center text-primary text-white cursor-pointer"
        strokeWidth={2}
        onClick={handleNavbar}
      />

      <aside className="">
        <div
          className={`min-h-full bg-black w-full text-white overflow-y-auto  absolute left-0 px-3 py-4 ${
            isOpen ? "top-28" : "-top-full"
          } transition-all duration-300 ease-in-out `}
        >
          <div>
            <Link href="/">
              <X
                className="h-9 w-9 self-center text-white cursor-pointer absolute top-9 right-5 z-10 "
                strokeWidth={4}
                onClick={handleNavbar}
              />
            </Link>
          </div>
          <ul className="flex flex-col items-center justify-center gap-5 text-center text-white w-full  mt-8 pl-3 overflow-y-auto">
            {navData.map((nav, index) => (
              <li
                className="relative w-full group  text-lg font-semibold  "
                key={index}
                onClick={handleNavbar}
              >
                <Link href={nav.path}>{nav.title}</Link>
              </li>
            ))}
            <div className="bg hover:animate-pulse transition-all ease-in-out hover:scale-[1.03] ... m-auto mt-7 max-w-sm rounded-xl p-1 w-full  ">
              <div className="bg-black px-2 sm:py-3 py-[10px] rounded-lg">
                <a href="#" className="text-white md:text-base">
                  START HIRING
                </a>
              </div>
            </div>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default MobileNav;
