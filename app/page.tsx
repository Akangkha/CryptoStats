import TradingView from "@/components/GraphStats";
import Team from "@/components/Team";
import Subscription from "@/components/Subscription";
import Trending from "@/components/Trending";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Footer from "@/components/Footer";
import Tokenomics from "@/components/Tokenomics";
import Performance from "@/components/Performance";
import About from "@/components/About";
import Sentiment from "@/components/Sentiment";
export default function Home() {
  const title = "Bitcoin";
  const information =
    "Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.";
  return (
    <>
      <div className="flex md:flex-row max-w-[120rem] gap-10 m-10 flex-col">
        <div className="p-0 m-0  w-[95%] md:w-[60vw] flex flex-col gap-2">
          <div>
            <span className="text-gray-700 p-0 m-0 ">
              Cryptocurrencies <KeyboardDoubleArrowRightIcon />
            </span>
            <span className="text-black font-medium p-0 m-0">Bitcoin</span>
          </div>
          <TradingView /> 
          <Performance />
          <Sentiment value1={76} value2={8} value3={16} />
          <About title={title} information={information} />
          <Tokenomics />
          <Team />
        </div>
        <div className="flex flex-col m-auto mt-0 gap-10 ">
          <Subscription />
          <Trending />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
