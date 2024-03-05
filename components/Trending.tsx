import React from "react";
import Image from "next/image";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Trending = () => {
  return (
    <div className="bg-white p-6 shadow-md">
      <div className="text-xl font-bold">Trending Coins (24h)</div>
      <div className="flex items-center gap-3 mt-4">
        <Image
          src="/icons/ethereum.png"
          alt="ethereum"
          width={25}
          height={25}
        />
        Ethereum(ETH)
        <div className="text-[#14B079] font-medium bg-[#EBF9F4]">
          <ArrowDropUpIcon />
          8.21%
        </div>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <Image
          src="/icons/ethereum.png"
          alt="ethereum"
          width={25}
          height={25}
        />
        Ethereum(ETH)
        <div className="text-[#14B079] font-medium bg-[#EBF9F4]">
          <ArrowDropUpIcon />
          8.21%
        </div>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <Image
          src="/icons/ethereum.png"
          alt="ethereum"
          width={25}
          height={25}
        />
        Ethereum(ETH)
        <div className="text-[#14B079] font-medium bg-[#EBF9F4]">
          <ArrowDropUpIcon />
          8.21%
        </div>
      </div>
    </div>
  );
};

export default Trending;
