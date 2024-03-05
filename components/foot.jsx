"use client";
import React, { useState, useEffect } from "react";
import { fetchTrendingCoins } from "@/app/api/trending";
import { Coin } from "@/app/types/Coin";

const Footer = () => {
  const [coins, setCoins] = useState([]);

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
    <div>
      {coins.map((coin, index) => (
        
        <div key={index}>
          <img src={coin.logo} alt={coin.name} />
          {console.log(coin.item.id)}
          <h2>{coin.name}</h2>
          <p>{coin.symbol}</p>
          <p>Price: {coin.price}</p>
          <p>Price Change: {coin.price_change}</p>
          <img src={coin.price_graph} alt={`Price graph of ${coin.name}`} />
        </div>
      ))}
    </div>
  );
};

export default Footer;
