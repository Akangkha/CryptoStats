import React from "react";
import Image from "next/image";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Subscription = () => {
  return (
    <div className="bg-primary rounded-3xl flex flex-col gap-8 items-center text-center text-white p-10 w-[24vw]">
      <div className="text-2xl font-bold ">
        Get Started with KoinX
        <br /> for FREE
      </div>
      <div className="text-[#F2F2F2] text-sm">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </div>
      <Image src="/images/subscription.svg" alt="subscription" width={200} height={200}/>
      <button className="text-black font-bold bg-white p-2 pr-8 pl-8 rounded-lg">Get Started for FREE <ArrowForwardIcon/></button>
    </div>
  );
};

export default Subscription;
