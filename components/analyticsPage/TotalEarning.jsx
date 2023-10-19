"use client";
import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function TotalEarning() {
  const data = {
    series: [
      {
        data: [4.5, 3.8, 3.3, 4.0, 2.6,3.0, 2.3,1.9,2.5],
      },
      {
        data: [-0.8, -4.05, -2.06, -1.4, -2.1, -2.2, -2.85, -3.7,-2.0],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 500,
        stacked: true,
      },
      colors: ["#887EF2", "#94909E"],
      plotOptions: {
        bar: {
          horizontal: false,
          barHeight: "80%",
          borderRadius: 5,
          columnWidth: "30%",
          borderRadiusApplication: 'around',
          borderRadiusWhenStacked: 'all',
          barHeight: "70%",
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

  return (
    <div className="bg-white rounded p-6 pb-0 shadow-sm overflow-hidden">
      <div className="flex justify-between items-center">
        {/* Total Earning heading */}
        <div>
          <h4 className="text-xl font-semibold mt-2 text-[#5D596C]">
            Total Earning
          </h4>
          <h2 className="text-[#5D596C] text-5xl font-normal mt-2">
            87% <span className="text-sm text-[#28c76f]">25.8%</span>{" "}
          </h2>
        </div>

        {/* Ellipsis dotted/more option */}
        <div className="relative">
          <button>
            <svg
              className="cursor-pointer text-[#A9A7B1] w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
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

      {/* Total earning charts */}
      <div className="max-h-[260px] overflow-hidden">
      <div className='-ml-[80px] -mt-[35px] overflow-hidden max-h-[260px]'>
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          height={300}
          width={350}
        />
      </div>
      </div>

      {/* Total earning bottom */}
      <div className="mt-8">
        <div className="mb-4 flex justify-between items-center gap-y-4">
          <div className="flex items-center gap-3">
          <svg
                className="bg-[#EAE8FD] w-9 h-9 rounded text-[#7367F0] p-2"
                fill="currentColor"
                strokeWidth="1"
                xmlns="http://www.w3.org/2000/svg"
                height="15px"
                viewBox="0 0 320 512"
              >
                <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
              </svg>
            <div className="-mt-[8px]">
              <h5 className="text-[16px] text-[#5D596C]">Total Sales</h5>
              <h3 className=" items-center text-xs font-semibold text-[#A5A3AE]">
                Refund
              </h3>
            </div>
          </div>
          <div>
            <h4
              className="text-[#28c76f]
            "
            >
              +$98
            </h4>
          </div>
        </div>
        <div className="flex mt-6 justify-between items-center">
          <div className="flex items-center gap-3">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
              fill="currentColor"
              className="bg-[#F2F2F3] w-8 h-7 rounded text-[#A8AAAE] px-2 py-1"
            >
              <path d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z" />
            </svg>

            <div className="-mt-[8px]">
              <h5 className="text-[16px] text-[#5D596C]">Total Revenue</h5>
              <h3 className=" items-center text-xs font-semibold text-[#A5A3AE]">
              Client Payment
              </h3>
            </div>
          </div>
          <div>
            <h4
              className="text-[#28c76f]
            "
            >
              +$98
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
