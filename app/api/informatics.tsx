import axios from "axios";


  export const fetchcryptoinfo = async (params:string) => {
    try {
      const currencies = ['usd', 'inr'];
      console.log(params);
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${params}?vs_currency=${currencies.join(',')}&include_market_cap=true&include_24hr_change=true&precision=2`);
      return response.data;
    } catch (err) {
      console.log("Error fetching currency data");
      return null;
    }
  };



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
