import { fetchBitcoinData } from "@/app/api/informatics";
import TradingView from "@/components/ui/GraphStats";
import Team from "@/components/Team";
import Subscription from "@/components/Subscription";
import Trending from "@/components/Trending";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Footer from "@/components/Footer";
import Tokenomics from "@/components/Tokenomics";
import Performance from "@/components/Performance";
import About from "@/components/About";
import Sentiment from "@/components/Sentiment";
import { useEffect } from "react";
export default async function Home() {
  const title = "Bitcoin";
  const information =
    "Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.";

  const data = await fetchBitcoinData();
  // console.log(data);

  return (
    <>
      <div className="flex md:flex-row max-w-[120rem] gap-2 m-10 flex-col">
        <div className="p-0 m-0  w-[95%] md:w-[60vw] flex flex-col gap-2">
          <div>
            <span className="text-gray-700 p-0 m-0 ">
              Cryptocurrencies <KeyboardDoubleArrowRightIcon />
            </span>
            <span className="text-black font-medium p-0 m-0">Bitcoin</span>
          </div>
          <TradingView /> 
          {data && (
            <>
              <Performance
                name={data?.name}
                low24={data?.market_data.low_24h.btc}
                high24={data?.market_data.high_24h.btc}
                low54={
                  data?.market_data.current_price.btc -
                  (data?.market_data.current_price.btc *
                    data?.market_data.price_change_percentage200d) /
                    100
                }
                high54={
                  data?.market_data.current_price.btc +
                  (data?.market_data.current_price.btc *
                    data?.market_data.price_change_percentage_200d) /
                    100
                }
                price={data?.market_data.current_price.btc}
                low7={
                  data?.market_data.current_price.btc -
                  (data?.market_data.current_price.btc *
                    data?.market_data.price_change_percentage_7d) /
                    100
                }
                high7={
                  data?.market_data.current_price.btc +
                  (data?.market_data.current_price.btc *
                    data?.market_data.price_change_percentage_7d) /
                    100
                }
                vol={data?.market_data.total_volume.btc}
                rank={data?.market_data.market_cap_rank}
                cap={data?.market_data.market_cap.btc}
                cap_dominance={
                  data?.market_data.market_cap_change_percentage_24h_in_currency
                    .btc
                }
                ath={data?.market_data.ath.btc}
                atl={data?.market_data.ath.btc}
                ath_date={data?.market_data.ath_date.btc}
                ath_change_percentage={
                  data?.market_data.ath_change_percentage.btc
                }
                atl_date={data?.market_data.atl_date.btc}
                atl_change_percentage={
                  data?.market_data.atl_change_percentage.btc
                }
              />
              <Sentiment value1={76} value2={8} value3={16} />
              <About title={data?.name} information={data?.description.en} />
              <Tokenomics />{" "}
            </>
          )}{" "}
          <Team />
        </div>
        <div className="flex flex-col m-auto mt-0 gap-10 ">
          <Subscription />
          <Trending />
        </div>
      </div>
      <Footer />
    </>
  );
}
