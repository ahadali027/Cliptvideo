import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import NavData from "../../data/nav.json";

const NavLinks = () => {
  return (
    <nav className="lg:block hidden text-white">
      <ul className="flex gap-7">
        {NavData.map((props, ind) => (
          <ListItems {...props} key={ind} />
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;

const ListItems = ({ title, path, dropdown }) => {
  return (
    <li className="relative h-full py-3 group cursor-pointer ">
      <span className="flex gap-2 items-center">
        {path ? <Link href={path}>{title}</Link> : title}{" "}
        {dropdown && (
          <ChevronDown
            className="text-white group-hover:rotate-180 transition-all "
            size={16}
          />
        )}
      </span>
      {dropdown && (
        <ul className="absolute  hidden group-hover:block   top-full transition-all duration-500 bg-black/25 border border-white/20 rounded-lg shadow-md  backdrop-blur-xl">
          {dropdown.map(({ title, path }, ind) => (
            <li key={ind} className="w-full px-5 py-2 ">
              <Link href={path} className="inline-block w-full">{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
