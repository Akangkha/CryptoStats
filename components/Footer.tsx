"use client";
import React, { useState, useEffect } from "react";
import { fetchTrendingCoins } from "@/app/api/trending";
import { Coin } from "@/app/types/Coin";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Change from "./ui/Change";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Footer: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 235;
    }
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 235;
    }
  };
  const slideLeft1 = () => {
    let slider1 = document.getElementById("slider1");
    if (slider1) {
      slider1.scrollLeft = slider1.scrollLeft - 235;
    }
  };

  const slideRight1 = () => {
    let slider1 = document.getElementById("slider1");
    if (slider1) {
      slider1.scrollLeft = slider1.scrollLeft + 235;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingCoins = await fetchTrendingCoins();
        setCoins(trendingCoins);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchData();
  }, []);
  console.log(coins);
  return (
    <div className=" bg-gray-100">
      <div className="container mx-auto px-4 py-16 ">
        <h3 className="text-4xl font-bold mb-4">Trending</h3>
        <div className="title-btns flex justify-between">
          <button className=" px-4 py-2 rounded-md">
            <AiOutlineArrowLeft onClick={slideLeft} />
          </button>
          <div
            className="row-container flex overflow-x-hidden overflow-y-hidden whitespace-nowrap pb-4  "
            style={{
              transition: "transform 0.5s ease",
              scrollBehavior: "smooth",
            }}
            id="slider"
          >
            {coins.map((coin, index) => (
              <div
                key={index}
                className="border shadow-lg mr-8 p-6 rounded-md flex flex-col h-[180px]"
              >
                <div className="flex  gap-3">
                  <img
                    src={coin.item.small}
                    alt={coin.item.name}
                    width={20}
                    height={20}
                  />
                  <h2>{coin.item.symbol}</h2>
                  <Change
                    value={parseFloat(
                      coin.item.data.price_change_percentage_24h?.usd || 0
                    ).toFixed(2)}
                  />
                </div>
                <div className="font-bold">{coin.item.data.price}</div>

                <Image
                  src={coin.item.data.sparkline}
                  alt="graph not visible due to security restrictions in coingecko"
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </div>

          <button className=" px-4 py-2 rounded-md">
            <AiOutlineArrowRight onClick={slideRight} />
          </button>
        </div>

        <div className="title-btns flex justify-between">
          <button className=" px-4 py-2 rounded-md">
            <AiOutlineArrowLeft onClick={slideLeft1} />
          </button>
          <div
            className="row-container flex overflow-x-hidden overflow-y-hidden whitespace-nowrap pb-4"
            id="slider1"
            style={{
              transition: "transform 0.5s ease",
              scrollBehavior: "smooth",
            }}
          >
            {coins.map((coin, index) => (
              <div
                key={index}
                className="border shadow-lg mr-8 p-6 rounded-md flex flex-col h-[180px]"
              >
                <div className="flex  gap-3">
                  <img
                    src={coin.item.small}
                    alt={coin.item.name}
                    width={20}
                    height={20}
                  />
                  <h2>{coin.item.symbol}</h2>
                  <Change
                    value={parseFloat(
                      coin.item.data.price_change_percentage_24h?.usd || 0
                    ).toFixed(2)}
                  />
                </div>
                <div className="font-bold">{coin.item.data.price}</div>

                <Image
                  src={coin.item.data.sparkline}
                  alt="graph not visible due to security restrictions in coingecko"
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </div>

          <button className=" px-4 py-2 rounded-md">
            <AiOutlineArrowRight onClick={slideRight1} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
