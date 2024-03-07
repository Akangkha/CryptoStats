"use client";
import React, { useState } from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="w-full text-sm flex justify-between pr-8 pl-8 shadow-lg items-center">
      <Image
        src="/images/companylogo.svg"
        alt="company_Logo"
        width={100}
        height={100}
      />
      <div className="md:flex gap-4 cursor-pointer items-center justify-center font-medium text-md hidden">
        <div>Crypto Taxes</div>
        <div>Free Tools</div>
        <div>Resource Center</div>
        <button className="pl-3 pr-3 pt-2 pb-2 bg-primary rounded-xl text-white">
          Get Started
        </button>
      </div>
      <MenuIcon className="w-10 h-10 md:hidden" onClick={openMenu} />
      <div
        className={`top-0 right-0 w-[56vw] bg-blue-900 md:hidden pb-10   text-white fixed h-full z-40 ease-in-out duration-300 ${
          open ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <CloseIcon onClick={openMenu} className="m-5" />
        <div className="flex flex-col  justify-between font-medium text-md mt-32  w-full ">
          <div className="hover:bg-blue-800  p-4 pr-10 pl-10 border border-t-0 border-l-0 border-r-0 border-gray-400">
            Crypto Taxes
          </div>
          <div className="hover:bg-blue-800 p-4  pr-10 pl-10 border border-t-0 border-l-0  border-r-0 border-gray-400">
            Free Tools
          </div>
          <div className="hover:bg-blue-800 p-4  mb-4 pr-10 pl-10 border border-t-0 border-l-0  border-r-0 border-gray-400">
            Resource Center
          </div>
        </div>
        <button className=" pt-2 pb-2 w- bg-primary absolute bottom-6 w-[80%] rounded-xl  text-white mr-[10%] ml-[10%] mb-4">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
