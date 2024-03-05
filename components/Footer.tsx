"use client";
import React, { useState, useEffect } from "react";
import { fetchTrendingCoins } from "@/app/api/trending";
import { Coin } from "@/app/types/Coin";
import Image from "next/image";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
const Footer: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchData = () => {
      fetchTrendingCoins()
        .then((trendingCoins) => {
          setCoins(trendingCoins);
        })
        .catch((error) => {
          // Handle the error here
          console.error("Error fetching trending coins:", error);
        });
    };

    fetchData();
  }, []);

  console.log(coins);
  return (
    <div className="flex flex-col gap-5 p-8 bg-white overflow-x-scroll ">
      <div className="text-2xl font-bold">You May Also Like</div>
      <div className="flex gap-5">
        {coins.map((coin, index) => (
          <div
            key={index}
            className="max-w-400 h-[150px] p-8 shadow  flex flex-col  "
          >
            <div className="flex items-center justify-center gap-3">
              <img
                src={coin.item.small}
                alt={coin.item.name}
                width={20}
                height={20}
              />
              <h2>{coin.item.symbol}</h2>
            </div>
            <div className="font-bold">{coin.item.data.price}</div>
            <Image
              src={coin.item.data.sparkline}
              alt={`Price graph of ${coin.item.data.sparkline}`}
              width={400}
              height= {400}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
