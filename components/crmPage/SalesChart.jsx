"use client";
import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function SalesChart() {
  const data = {
    series: [
      {
        name: "Sales",
        data: [70, 50, 10, 90, 70, 50],
      },
      {
        name: "Visits",
        data: [20, 30, 40, 80, 20, 70],
      },
    //   {
    //     name: "Series 3",
    //     data: [44, 76, 78, 13, 43, 10],
    //   },
    ],
    options: {
      chart: {
        height: 350,
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
    //   title: {
    //     text: "Radar Chart - Multi Series",
    //   },
      stroke: {
        width: 2,
      },
      colors: ['#7367F0','#11BFE9'],
      fill: {
        opacity: 1,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
    },
  };

  return (
    <div className="bg-white rounded shadow-sm">
      {/* Salse headings */}
      <div className="flex justify-between items-center p-6">
        <div>
          <h4 className="text-xl font-semibold mt-2 text-[#5D596C]">Sales</h4>
          <h5 className="text-[#A5A3AE] text-xs font-semibold">
            Last 6 months
          </h5>
        </div>

        {/* Ellipsis dotted/more option */}
        <div className="relative">
          <button>
            <svg
              className="cursor-pointer text-[#A9A7B1] w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Sales chart */}
      <div className="mb-20"></div>
      <div className="max-h-[400px] overflow-hidden mb-20">
          <div className="-ml-[10px] -mr-[20px] -mt-[20px] overflow-hidden max-h-[500px] pr-2 flex justify-center">
        <Chart options={data.options} type="radar" series={data.series} height={300} width={280} />
      </div>
      </div>
    </div>
  );
}
