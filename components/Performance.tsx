// http://localhost:3000/?token=bitcoin&currency=usd
import React from "react";

import { PerformanceProps } from "@/app/types/PerformanceProps";
import Image from "next/image";
import { fetchcryptoinfo } from "@/app/api/informatics";

const Performance = ({
  name,
  low24,
  high24,
  low54,
  high54,
  price,
  low7,
  high7,
  vol,
  rank,
  cap,
  cap_dominance,
  ath,
  atl,
  atl_change_percentage,
  atl_date,
  ath_change_percentage,
  ath_date,
}: PerformanceProps) => {
  return (
    <div className="p-8 rounded-xl flex flex-col gap-4 bg-white">
      <div className="font-bold text-2xl">Performance</div>
      <div className="flex gap-10 text-sm justify-around items-center">
        <div className="flex flex-col justify-center items-center">
          <div className=" text-gray-600">Today's low</div>
          <div className="font-semibold">46,930.22</div>
        </div>
        <div>
          <Image
            src="/images/bar.png"
            alt="progress bar"
            width={600}
            height={60}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="font-md text-gray-600">Today's high</div>
          <div className="font-semibold">49,343.83</div>
        </div>
      </div>

      <div className="flex gap-10 items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="font-md text-gray-600">52W Low</div>
          <div className="font-semibold">16,930.22</div>
        </div>
        <div>
          <Image
            src="/images/bar.png"
            alt="progress bar"
            width={600}
            height={60}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className=" text-gray-600">52W High</div>
          <div className="font-semibold">49,743.83</div>
        </div>
      </div>
      <div className="font-bold text-lg flex items-center gap-2">
        Fundamentals
        <Image
          src="/icons/information.png"
          alt="more information"
          width={25}
          height={25}
        />
      </div>
      <div className="flex text-sm flex-col md:grid md:grid-cols-2 md:gap-5 gap-4 ">
        <div className="flex gap-2 items-center justify-between border-b pb-4 ">
          <div className="text-gray-600">{name} Price</div>
          <div className="font-bold">{price}</div>
        </div>
        <div className="flex gap-2 items-center justify-between border-b pb-4 ">
          <div className="text-gray-600">Market Cap</div>
          <div className="font-bold">{cap}</div>
        </div>
        <div className="flex gap-2 items-center justify-between border-b pb-4 ">
          <div className="text-gray-600">24h Low / 24h High</div>
          <div className="font-bold">
            {atl} / {ath}
          </div>
        </div>

        <div className="flex gap-2 items-center justify-between border-b pb-4 ">
          <div className="text-gray-600">Market Cap Dominance</div>
          <div className="font-bold">{cap_dominance}%</div>
        </div>
        <div className="flex gap-2 items-center justify-between border-b pb-4 ">
          <div className="text-gray-600">7d Low / 7d High</div>
          <div className="font-bold">
            {low7} / {high7}
          </div>
        </div>
        <div className="flex gap-2 items-center justify-between border-b pb-4 ">
          <div className="text-gray-600">Volume / Market Cap</div>
          <div className="font-bold">{vol / cap}</div>
        </div>
        <div className="flex gap-2 items-center justify-between border-b pb-4 ">
          <div className="text-gray-600">Trading Volume</div>
          <div className="font-bold">{vol}</div>
        </div>

        <div className="flex gap-2 items-center justify-between border-b pb-4 ">
          <div className="text-gray-600">All-Time High</div>
          <div className="flex flex-col ">
          <div className="font-bold flex gap-4">
            {ath} <div className="text-[#F7324C]">{ath_change_percentage}%</div>
          </div>
          <div className="text-gray-500">{ath_date}</div>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-between border-b pb-4 ">
          <div className="text-gray-600">Market Cap Rank</div>
          <div className="font-bold">#{rank}</div>
        </div>

        <div className="flex gap-2 items-center justify-between border-b pb-4 ">
          <div className="text-gray-600">All-Time Low</div>
          <div className="flex flex-col ">
          <div className="font-bold flex gap-4">
            {atl} <div className="text-[#0FBA83]">{atl_change_percentage}%</div>
          </div>
          <div className="text-gray-500">{atl_date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
