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
        <h4 className="text-xl font-[500] mt-2 text-[#5D596C]">
          Revenue Growth
        </h4>
        <h5 className="text-[#6F6B7D] text-xs">Weekly Report</h5>
      </div>

      {/* Revenue growth bottom with chart */}
      <div className="flex p-6 pt-0 items-end justify-between">
        <div className="">
          <h4 className="text-2xl text-[#5D596C] font-semibold mt-2">$4,673</h4>
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
