import TradingView from "@/components/GraphStats";
import Team from "@/components/Team";
import Subscription from "@/components/Subscription";
import Trending from "@/components/Trending";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
    <div className="flex max-w-[120rem] gap-10 m-10 ">
      <div className="p-0 m-0  w-[60vw]"  >
        <span className="text-gray-700 p-0 m-0 ">
          Cryptocurrencies <KeyboardDoubleArrowRightIcon />
        </span>
        <span className="text-black font-medium p-0 m-0">Bitcoin</span>
        {/* <TradingView />  */}
        <Team/>
      </div>
      <div className="md:flex flex-col pt-20 gap-5 hidden">
        <Subscription />
        <Trending />
      </div>
    </div>
    <Footer/>
 
    
    </>
  );
}
