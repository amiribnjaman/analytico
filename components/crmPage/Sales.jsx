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
    pv: 3550,
    amt: 2400,
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2050,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 4998,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 3400,
    amt: 2290,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 4000,
    amt: 2290,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 5000,
    amt: 2290,
  },
];

export default function Sales() {
  return (
    //
    <div className="bg-white rounded shadow-sm">
      {/* Sales card heading */}
      <div className="p-6 pt-3 pb-0">
        <h4 className="text-xl font-semibold mt-2 text-[#5D596C]">Sales</h4>
        <h5 className="text-[#6F6B7D] text-sm">Last Year</h5>
      </div>

      {/* charts */}
      <div className="overflow-hidden -pl-16">
        <AreaChart
          width={255}
          height={100}
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
              <stop offset="50%" stopColor="#82ca9d" stopOpacity={0} />
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

      <div className="p-6 pt-0">
        <div className="flex justify-between items-center">
          <h4 className="text-2xl text-[#5D596C] font-semibold mt-2">175k</h4>
          <h5 className="text-[#EA5455] text-sm mt-2">-16.2%</h5>
        </div>
      </div>
    </div>
  );
}
