"use client";
import React, { useState, useEffect } from "react";
import { fetchTrendingCoins } from "@/app/api/trending";
import { Coin } from "@/app/types/Coin";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Change from "./Change";

const Footer: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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

  return (
    <div className="relative p-8 bg-white overflow-x-hidden flex flex-col">
      <div className="text-2xl font-bold">You May Also Like</div>
      <div className="slider-container">
        {coins && (
          <Slider {...settings}>
            {/* {coins.map((coin, index) => (
              <div
                key={index}
                className="border shadow-lg  p-6 rounded-md flex flex-col "
              >
                <div className="flex  gap-3">
                  <img
                    src={coin.item.small}
                    alt={coin.item.name}
                    width={20}
                    height={20}
                  />
                  <h2>{coin.item.symbol}</h2>
                  <Change />
                </div>
                <div className="font-bold">{coin.item.data.price}</div>
                <Image
                  src={coin.item.data.sparkline}
                  alt="graph"
                  width={200}
                  height={200}
                />
              </div>
            ))} */}

            <div className="w-50 h-50 bg-blue-400">eee </div>
            <div className="w-50 h-50 bg-blue-400">eee </div>
          </Slider>
        )}
      </div>
      {/* <div className="text-2xl font-bold">Trending Coins</div>
      <div className="mr-10 ml-10 ">
        {coins && (
          <Slider {...settings}>
            {coins.map((coin, index) => (
              <div
                key={index}
                className="slider-item border shadow-lg m-2 mb-0 p-6 rounded-md flex flex-col !important h-[180px] min-w-fit"
              >
                <div className="flex  gap-3">
                  <img
                    src={coin.item.small}
                    alt={coin.item.name}
                    width={20}
                    height={20}
                  />
                  <h2>{coin.item.symbol}</h2>
                  <Change />
                </div>
                <div className="font-bold">{coin.item.data.price}</div>
                <Image
                  src={coin.item.data.sparkline}
                  alt="graph"
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </Slider>
        )}
      </div> */}
    </div>
  );
};

export default Footer;
