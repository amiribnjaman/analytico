"use client";
import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function RevenueGrowth() {
  const data = {
    series: [
      {
        data: [
          
          {
            x: "Category B",
            y: 3.1,

            // strokeColor: '#C23829'
          },
          {
            x: "Category B",
            y: 4.4,

            // strokeColor: '#C23829'
          },
          {
            x: "Category C",
            y: 6.6,
          },
          {
            x: "Category C",
            y: 7.9,
          },
          {
            x: "Category C",
            y: 10.0,
            fillColor: "#48CF84",
          },
          {
            x: "Category C",
            y: 8.7,
          },
          {
            x: "Category A",
            y: 6.5,
          },
        ],
      },
    ],

    // {
    //   name: "Inflation",
    //   data: [3.0, 3.8, 4.4, 6.6, 7.9, 10.0, 8.7],
    // },
    // ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      colors: ['#DCF6E8'],
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: "45%",
          dataLabels: {
            enabled: true,
            position: "bottom", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -50,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      tooltip: {
        enabled: false,
      },
      grid: {
        show: false,
      },

      xaxis: {
        labels: {
          show: true,
          colors: ['#A5A3AE'],
          color: '#A5A3AE',
        },
        enabled: true,
        // show: false,
        categories: [ "M", "T", "W", "T", "F", "S","S",],
        position: "bottom",
        
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },

        // crosshairs: {
        //   fill: {
        //     type: "gradient",
        //     gradient: {
        //       colorFrom: "#D8E3F0",
        //       colorTo: "#BED1E6",
        //       stops: [0, 100],
        //       opacityFrom: 0.4,
        //       opacityTo: 0.5,
        //     },
        //   },
        // },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      title: {
        text: "Monthly Inflation in Argentina, 2002",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444",
        },
      },
    },
  };

  return (
    <div className="bg-white rounded shadow-sm">
      {/* Revenue growth heading */}
      <div className="p-6 pt-3 pb-3">
        <h4 className="text-[19px] font-[500] mt-2 text-[#5D596C]">
          Revenue Growth
        </h4>
        <h5 className="text-[#6F6B7D] text-[13px]">Weekly Report</h5>
      </div>

      {/* Revenue growth bottom with chart */}
      <div className="flex p-6 pt-0 items-end justify-between">
        <div className="">
          <h4 className="text-2xl flex items-center text-[#5D596C] font-semibold mt-2">
          <svg
              className="w-6 h-6 mt-[1px] rounded px-[3px] py-[2px]"
              fill="currentColor"
              strokeWidth={0.5}
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
            </svg>
            <span className="-ml-[3px]">4,673</span>
            </h4>
          <h5 className="text-[#2EC973] text-center px-.5 py-2 rounded bg-[#DFF7E9] text-sm mt-2">+15.2%</h5>
        </div>

        {/* Chart */}
        <div className="max-h-[180px] overflow-hidden">
          <div className="-mr-[20px] -mt-[48px] overflow-hidden max-h-[180px] pr-2 flex justify-center">
            <Chart
              options={data.options}
              series={data.series}
              type="bar"
              height={185}
              width={160}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
