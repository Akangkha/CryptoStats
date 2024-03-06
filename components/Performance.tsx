import React from "react";
import Image from "next/image";
const Performance = () => {
  return (
    <div className="p-8 rounded-xl flex flex-col gap-4 bg-white">
      <div className="font-bold text-2xl">Performance</div>
      <div className="flex gap-10 items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="font-md text-gray-600">Today's low</div>
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
          <div className="font-md text-gray-600">52W High</div>
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
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-10 gap-4 text-base">
        <div className="flex gap-2 items-center justify-between border-b pb-4 ">
          <div className="text-gray-600">Bitcoin Price</div>
          <div className="font-bold">$16,815.46</div>
        </div>
        <div className="flex gap-2 items-center justify-between border-b pb-4 ">
          <div className="text-gray-600">24h Low / 24h High</div>
          <div className="font-bold">$16,382.07 / $16,874.12</div>
        </div>
        <div className="flex gap-2 items-center justify-between border-b pb-4 ">
          <div className="text-gray-600">7d Low / 7d High</div>
          <div className="font-bold">$16,382.07 / $16,874.12</div>
        </div>
        <div className="flex gap-2 items-center justify-between border-b pb-4 ">
          <div className="text-gray-600">Trading Volume</div>
          <div className="font-bold">$23,249,202,782</div>
        </div>
        <div className="flex gap-2 items-center justify-between border-b pb-4 ">
          <div className="text-gray-600">Market Cap Rank</div>
          <div className="font-bold">#1</div>
        </div>
        <div className="flex gap-2 items-center justify-between border-b pb-4 ">
          <div className="text-gray-600">Market Cap</div>
          <div className="font-bold">$323,507,290,047</div>
        </div>
        <div className="flex gap-2 items-center justify-between border-b pb-4 ">
          <div className="text-gray-600">Market Cap Dominance</div>
          <div className="font-bold">38.343%</div>
        </div>
        <div className="flex gap-2 items-center justify-between border-b pb-4 ">
          <div className="text-gray-600">Volume / Market Cap</div>
          <div className="font-bold">0.0718</div>
        </div>
        <div className="flex gap-2 items-center justify-between border-b pb-4 ">
          <div className="text-gray-600">All-Time High</div>
          <div className="font-bold">$16,815.46</div>
        </div>
        <div className="flex gap-2 items-center justify-between border-b pb-4 ">
          <div className="text-gray-600">All-Time Low</div>
          <div className="font-bold">$16,815.46</div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
