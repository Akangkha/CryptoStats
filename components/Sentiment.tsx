import React, { FC } from "react";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { LinearProgress } from "@mui/material";
import { SentimentProps } from "@/app/types/Sentiment";
const Sentiment: FC<SentimentProps> = ({ value1, value2, value3 }) => {
  return (
    <div className="p-8 rounded-xl flex flex-col gap-4 bg-white">
      <div className="font-bold text-2xl">Sentiment</div>
      <div className="font-bold text-lg flex items-center gap-2">
        Key Events
        <Image
          src="/icons/information.png"
          alt="more information"
          width={25}
          height={25}
        />
      </div>
      <div className="flex ">
      <div className="flex gap-6 w-full   overflow-x-scroll text-sm">
        <div className="flex gap-5 w-full bg-[#E8F4FD] p-6 rounded-xl min-w-[500px] max-w-[700px]">
          <div className="w-[40%] ">
            <Image
              src="/icons/sentiment1.png"
              alt="Sentiment icon"
              width={50}
              height={20}
            />
          </div>
          <div className="flex flex-col ">
            <div className="font-bold">
              Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
              mattis enim tincidunt.
            </div>
            Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
            faucibus metus quis. Amet sapien quam viverra adipiscing
            condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
            sit nisi viverra natoque lacinia libero enim.{" "}
          </div>
        </div>

        <div className="flex gap-5 w-full bg-[#EBF9F4] p-6 rounded-xl min-w-[600px] max-w-[700px]">
          <div className="w-[40%]">
            <Image
              src="/icons/sentiment2.png"
              alt="Sentiment icon"
              width={50}
              height={20}
            />
          </div>
          <div className="flex flex-col ">
            <div className="font-bold">
              Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
              mattis enim tincidunt.
            </div>
            Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
            faucibus metus quis. Amet sapien quam viverra adipiscing
            condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
            sit nisi viverra natoque lacinia libero enim.{" "}
          </div>
        </div>
        
      </div>
      <div className="w-4 h-4 p-6 relative right-0 bg-white rounded-full z-10 m-auto shadow-xl border flex items-center justify-center ">
          <ArrowForwardIosIcon />
        </div>
      </div>
      <div className="font-bold text-lg flex items-center gap-2">
        Analyst Estimates
        <Image
          src="/icons/information.png"
          alt="more information"
          width={25}
          height={25}
        />
      </div>
      <div className="flex gap-10 items-center">
        <div className="bg-[#EBF9F4] rounded-full font-bold text-green-500 text-4xl w-[120px] shadow:lg h-[120px] p-10 flex items-center justify-center">
          76 <span className="text-lg">%</span>
        </div>
        <div className="flex flex-col gap-4 w-full ">
          {/* Linear Progress bars for Buy, Hold, and Sell */}
          <div className="flex gap-4 w-full items-center">
            Buy:{" "}
            <LinearProgress
              variant="determinate"
              value={value1}
              className="rounded-full bg-transparent"
              sx={{
                height: 10,
                width: "50%",
                backgroundColor: "#00B386",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#00B386",
                  borderRadius: "10px", // Set the color of the progress bar here
                },
              }}
            />
            <div className="text-gray-500">{value1} %</div>
          </div>
          <div className="flex gap-4 w-full items-center">
            Hold:{" "}
            <LinearProgress
              variant="determinate"
              value={value2}
              className="rounded-full bg-transparent"
              sx={{
                height: 10,
                width: "50%",
                backgroundColor: "#C7C8CE",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#C7C8CE",
                  borderRadius: "10px",
                },
              }}
            />
            <div className="text-gray-500">{value2} %</div>
          </div>
          <div className="flex gap-4 w-full items-center">
            Sell:{" "}
            <LinearProgress
              variant="determinate"
              value={value3}
              className="rounded-full bg-transparent"
              color="error"
              sx={{
                height: 10,
                width: "50%",
                "& .MuiLinearProgress-bar": {
                  borderRadius: "10px",
                },
              }}
            />
            <div className="text-gray-500">{value3} %</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
