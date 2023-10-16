"use client";
import React from "react";

import {
  AreaChart,
  linearGradient,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
} from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 1550,
    amt: 2400,
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 1450,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1998,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 1900,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 2350,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 2200,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 2850,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 3500,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 2900,
    amt: 2100,
  },
  // {
  //   "name": "Page F",
  //   "uv": 2390,
  //   "pv": 2850,
  //   "amt": 2500
  // },
  // {
  //   "name": "Page G",
  //   "uv": 3490,
  //   "pv": 4500,
  //   "amt": 2100
  // }
];

export default function revenueGeneratedCard() {
  return (
    // 
    <div className="bg-white rounded  shadow-sm">
      <div className='p-6 pb-0'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          class="w-9 h-9 rounded-full text-[#2CC872] bg-[#DFF7E9] p-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
          />
        </svg>

        <h4 className="text-xl font-semibold mt-2">92.7k</h4>
        <h5 className="text-[#6F6B7D] text-sm">Revenue Generated</h5>
      </div>

      {/* charts */}
      <div className="overflow-hidden -pl-16">
        <AreaChart
          width={255}
          height={140}
          data={data}
          margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            {/* <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient> */}
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1.5}
            fill="url(#colorPv)"
            strokeWidth={2.3}
          />
        </AreaChart>
      </div>
    </div>
  );
}
