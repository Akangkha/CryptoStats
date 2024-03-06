import axios from "axios";

export const fetchBitcoinData = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&market_data=true&sparkline=true"
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching bitcoin data: ${error}`);
    return null;
  }
};
