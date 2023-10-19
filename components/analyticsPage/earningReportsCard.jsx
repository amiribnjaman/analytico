"use client";
import React from "react";

import MoreOptionCard from "./MoreOptionCard";

import {
  ComposedChart,
  linearGradient,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  Bar,
  Line,
} from "recharts";

const data = [
  
  {
    name: "Mo",
    pv: 750,
  },
  {
    name: "Tu",
    pv: 800,
  },
  {
    name: "We",
    pv: 1100,
  },
  {
    name: "Th",
    pv: 1000,
  },
  {
    name: "Fr",
    pv: 1500,
  },
  {
    name: "Sa",
    pv: 950,
  },
  {
    name: "Su",
    pv: 1180,
  },
];

export default function RearningReportsCard() {
  // const [showMoreOption, setShowMoreOption] = React.useState(false)

  // console.log(showMoreOption)
  // const handleMoreOption = () => setShowMoreOption(!showMoreOption)

  return (
    //
    <div className="bg-white rounded p-6 pb-0 shadow-sm">
      <div className="flex justify-between items-center">
        {/* Earning headings */}
        <div>
          <h4 className="text-xl font-semibold mt-2 text-[#5D596C]">
            Earning Reports
          </h4>
          <h5 className="text-[#A5A3AE] text-xs font-semibold">
            Weekly earnings overview
          </h5>
        </div>

        {/* Ellipsis dotted/more option */}
        <div className="relative">
        <button >
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

      {/* Earning card middle */}
      <div className="flex">
        <div className="mt-8 w-1/3">
          <h1 className="text-4xl font-semibold text-[#5D596C]">$450</h1>
          <span className="text-[#4BD086] bg-[#DFF7E9] inline-block text-sm px-[10px] py-[1px] rounded my-3">
            +5.3%
          </span>
          <p className="text-[13px] text-[#5D596C]">
            You informed of this week compared to last week
          </p>
        </div>

        {/* Earning chart */}
        <div className='earning'>
          <ComposedChart width={280} height={200} data={data}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              padding="no-gap"
            />
            <Bar
              dataKey="pv"
              barSize={15}
              fill="#E8E7FD" //
              innerRadius={110}
          outerRadius={140}
              style={{ borderRadius: "12px" }}
            />
          </ComposedChart>
        </div>
      </div>

      {/* Earning bottom section */}
      <div className="flex gap-0 justify-between border my-4 rounded px-6 py-[15px]">
        {/* Earning */}
        <div className="">
          <div className="flex items-center gap-2">
            <svg
              className="bg-[#EAE8FD] w-8 h-7 rounded text-[#7367F0] px-2 py-1"
              fill="currentColor"
              strokeWidth={0.5}
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
            </svg>
            <h5 className="text-[16px] text-[#5D596C]">Earnings</h5>
          </div>
          <div>
            <h3 className="ml-1 mt-4 -mb-1 flex items-center gap-1 text-2xl font-semibold text-[#5D596C]">
              <svg
                className=""
                fill="currentColor"
                strokeWidth="1"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
              </svg>
              <span>590.65</span>
            </h3>
            <progress
              id="earning__progress"
              className="progress progress-primary"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>
        {/* Profit */}
        <div className="">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="bg-[#D9F8FC] w-8 h-7 rounded text-[#20D5EB] px-1 py-.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
              />
            </svg>

            <h5 className="text-[16px] text-[#5D596C]">Profit</h5>
          </div>
          <div>
            <h3 className="ml-1 mt-4 -mb-1 flex items-center gap-1 text-2xl font-semibold text-[#5D596C]">
              <svg
                className=""
                fill="currentColor"
                strokeWidth='1'
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
              </svg>
              <span>265.65</span>
            </h3>
            <progress
              id="earning__progress"
              className="progress progress-accent"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>

        {/* Expense */}
        <div className="">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
              fill="currentColor"
              className="bg-[#FCE5E6] w-8 h-7 rounded text-[#EB5F60] px-2 py-1"
            >
              <path d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z" />
            </svg>
            <h5 className="text-[16px] text-[#5D596C]">Expense</h5>
          </div>
          <div>
            <h3 className="ml-1 mt-4 -mb-1 flex items-center gap-1 text-2xl font-semibold text-[#5D596C]">
              <svg
                className=""
                fill="currentColor"
                strokeWidth={1}
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
              </svg>
              <span>75.65</span>
            </h3>
            <progress
              id="earning__progress"
              className="progress progress-error"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
}
