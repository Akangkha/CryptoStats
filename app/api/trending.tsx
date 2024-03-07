import axios from 'axios';
import {Coin} from '@/app/types/Coin';
export async function fetchTrendingCoins(): Promise<Coin[]> {
  const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
  return response.data.coins;
}