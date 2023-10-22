"use client";
import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const data = {
  series: [
    {
      data: [4.5, 3.8, 3.3, 4.0, 2.6, 3.0,],
    },
    {
      data: [-1.8, -4.05, -2.06, -1.4,-1.4,-1.4, ],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 500,
      stacked: true,
    },
    colors: ["#887EF2", "#48CF84"],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "100%",
        borderRadius: 4,
        columnWidth: "45%",
        borderRadiusApplication: "around",
        borderRadiusWhenStacked: "all",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

export default function Sessions() {
  return (
    //
    <div className="bg-white rounded shadow-sm">
      {/* Sales card heading */}
      <div className="p-6 pt-3 pb-0">
        <h4 className="text-xl font-semibold mt-2 text-[#5D596C]">Sessions</h4>
        <h5 className="text-[#6F6B7D] text-sm">Last Year</h5>
      </div>

      {/* charts */}
      <div className="max-h-[180px] overflow-hidden">
        <div className="-ml-[45px] -mt-[35px] overflow-hidden max-h-[130px] pr-2 flex justify-center">
          <Chart
            options={data.options}
            series={data.series}
            type="bar"
            height={185}
            width={180}
          />
        </div>
      </div>

{/* Sessions card bottom */}
      <div className="px-4 py-6 pt-[7px]">
        <div className="flex justify-between items-center">
          <h4 className="text-2xl text-[#5D596C] font-semibold mt-2">45.1k</h4>
          <h5 className="text-[#29C770] text-sm mt-2">-16.2%</h5>
        </div>
      </div>
    </div>
  );
}
