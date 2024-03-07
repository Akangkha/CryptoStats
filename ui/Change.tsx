import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Change = ({ value }: { value: string }) => {
  return (
    <div className="text-[#14B079] font-medium bg-[#EBF9F4] w-[90px] flex p-auto">
      <ArrowDropUpIcon />
      {value}%
    </div>
  );
};

export default Change;
