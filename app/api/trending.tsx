import axios from "axios";
import { Coin } from "@/app/types/Coin";

let cache: Coin[] = [];
let lastFetchTime: number = 0;
const cacheDuration = 60000; // 1 minute

export async function fetchTrendingCoins(): Promise<Coin[]> {
  const currentTime = Date.now();

  // Check if cache is valid
  if (currentTime - lastFetchTime < cacheDuration) {
    return cache;
  }

  // Throttle requests
  if (lastFetchTime !== 0) {
    const elapsedTime = currentTime - lastFetchTime;
    if (elapsedTime < cacheDuration) {
      const delay = cacheDuration - elapsedTime;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    cache = response.data.coins;
    lastFetchTime = Date.now();
    return cache;
  } catch (error) {
    console.error("Error fetching trending coins:", error);
    return [];
  }
}
