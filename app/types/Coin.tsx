export interface Coin {
  item: {
    id: string;
    item?: string;
    name: string;
    logo: string;
    symbol: string;

    price_change: string;
    price_graph: string;
    small: string;
    data: {
      sparkline: string;
      price: string;
      price_change_percentage_24h: { bits: number };
    };
  };
}

export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  image: {
    large: string;
  };
  market_data: {
    market_cap: string;
    total_volume: string;
  };
}
