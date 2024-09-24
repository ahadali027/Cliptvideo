import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" mx-12">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="text-base font-semibold flex md:flex-row flex-col justify-center items-center gap-5  sm:text-center ">
          <p className="text-[#ffffff99]">© 2024 Clipt. All rights reserved.</p>
          <a href="#" className="underline text-[#ffffffbf]">
            Terms of service
          </a>
        </span>
        <span className="text-base font-semibold flex justify-center items-center md:pt-14 pt-7 pb-1 gap-2 sm:text-center">
          <p className="text-[#ffffff99]">Powered by</p>
          <a href="#" className="underline text-[#ffffffbf]">
            IR Media
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Footer;
