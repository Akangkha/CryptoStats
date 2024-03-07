import React from "react";
import Image from "next/image";
import Change from "./ui/Change";
import { Coin } from "@/app/types/Coin";
import { fetchTrendingCoins } from "@/app/api/trending";

const Trending = async () => {
  const data = await fetchTrendingCoins();
  const top3 = data.slice(0, 3);

  return (
    <div className="bg-white p-6 shadow-md rounded-lg w-[95%] md:w-full">
      <div className="text-xl font-bold">Trending Coins (24h)</div>
      {top3 &&
        top3.map((coin: Coin, index: number) => (
          <div
            className="flex items-center justify-between gap-3 mt-4"
            key={index}
          >
            <div className="flex gap-4">
              {" "}
              <Image
                src={coin.item.small}
                alt="trendint_item"
                width={25}
                height={25}
              />
              {coin.item.name}({coin.item.symbol})
            </div>
            <Change
              value={parseFloat(
                coin.item.data.price_change_percentage_24h?.usd || 0
              ).toFixed(2)}
            />
          </div>
        ))}
    </div>
  );
};

export default Trending;
