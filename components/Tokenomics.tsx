"use client";
import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";

const Tokenomics: React.FC = () => {
  useEffect(() => {
    // Create chart instance
    const root = am5.Root.new("chartdiv");
    const chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalHorizontal,
        radius: am5.percent(95),
        innerRadius: am5.percent(50),
      })
    );

    // Define data
    const data = [
      {
        distribution: "Crowdsale investor",
        share: 80,
      },
      { distribution: "Foundation", share: 20 },
    ];

    const series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: "Series",
        valueField: "share",
        categoryField: "distribution",
      })
    );
    series.data.setAll(data);

    series.labels.template.set("visible", false);
    series.ticks.template.set("visible", false);


    return () => {
      // Clean up
      root.dispose();
    };
  }, []);

  return (
    <div className="p-8 rounded-xl flex flex-col gap-4 bg-white">
      <div className="font-bold text-2xl">Tokenomics</div>
      <div className="font-bold text-xl">Initial Distribution</div>
      <div className="flex justify-left">
      <div id="chartdiv" style={{ width: "50%", height: "150px" }}></div>
      <div>
        <div className="flex gap-3 items-center"><div className="w-4 h-4 rounded-full  bg-[#0082FF] "></div> Crowdsale investor</div>
        <div className="flex gap-3 items-center"><div className="w-4 h-4 rounded-full bg-[#FAA002]"></div> Foundation</div>
      </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
        felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </div>
    </div>
  );
};

export default Tokenomics;
