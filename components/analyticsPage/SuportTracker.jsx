"use client";
import React from "react";
import MoreOptionCard from "./MoreOptionCard";
import Chart from "react-apexcharts";



export default function suportTracker() {
  // const [showMoreOption, setShowMoreOption] = React.useState(false)

  // console.log(showMoreOption)
  // const handleMoreOption = () => setShowMoreOption(!showMoreOption)
  const series = [85]
  const chartData = {
    chart: {
      height: 850,
      offsetY: 0,
    },
    plotOptions: {
      radialBar: {
        hollow: {
        margin: 5,
        size: "70%"
      },
        startAngle: -125,
        endAngle: 120,
        dataLabels: {
          name: {
            fontSize: "13px",
            fontWeight: '450',
            color: '#AAA8B2',
            offsetY: -15,
          },
          value: {
            offsetY: 10,
            fontSize: "35px",
            fontWeight: '550',
            color: '#5D596C',
            formatter: function (val) {
              return val + "%";
            },
          },
        },
        track: {
          background: 'transparent',
          strokeWidth: '80%',
          margin: 0, 
          dropShadow: {
            enabled: false,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },
      },
    },
    fill: {
      colors: ['#7367F0'],
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 1.5,
        stops: [0,100],
      },
    },
    stroke: {
      dashArray: 8,
    },
    strokeWidth: 5,
    labels: ["Completed task"],
  };
  return (
    <div className="bg-white rounded p-6 pb-0 pr-0 shadow-sm">
      <div className="flex pr-6 justify-between items-center">
        {/* Support tracker heading */}
        <div>
          <h4 className="text-xl font-semibold mt-2 text-[#5D596C]">
            Support Tracker
          </h4>
          <h5 className="text-[#A5A3AE] text-xs font-semibold">Last 7 days</h5>
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

      {/* Support tracker middle */}
      <div className="grid grid-cols-3 overflow-x-hidden">
        <div className="mt-8 col-span-1">
          <div> 
          <h1 className="text-4xl font-semibold text-[#5D596C]">650</h1>
          <span className="inline-block text-[17px] rounded mt-1 mb-4">
            Total ticket
          </span>
          </div>
          <div className="gap-y-3 flex flex-col justify-between my-4 rounded">
        {/* New Tickets */}
        <div className="mb-4">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="bg-[#EAE8FD] w-9 h-9 rounded text-[#7367F0] p-1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
              />
            </svg>

            <div className="-mt-[8px]">
              <h5 className="text-[16px] text-[#5D596C]">New Tickets</h5>
              <h3 className=" items-center text-xs font-semibold text-[#A5A3AE]">
                142
              </h3>
            </div>
          </div>
        </div>
        {/* Open Tickets */}
        <div className="mb-4">
          <div className="flex items-center gap-3">
            <svg
              className="bg-[#D9F8FC] w-9 h-9 rounded text-[#32D8ED] p-1.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <div className="-mt-[8px]">
              <h5 className="text-[16px] text-[#5D596C]">Open Tickets</h5>
              <h3 className=" items-center text-xs font-semibold text-[#A5A3AE]">
                48
              </h3>
            </div>
          </div>
        </div>
        {/* Response time */}
        <div className="mb-4">
          <div className="flex items-center gap-3">
            <svg
              className="bg-[#FFF1E3] w-9 h-9 rounded text-[#FFA54F] p-1.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <div className="-mt-[8px]">
              <h5 className="text-[16px] text-[#5D596C]">Response time</h5>
              <h3 className=" items-center text-xs font-semibold text-[#A5A3AE]">
                1 Day
              </h3>
            </div>
          </div>
        </div>
      </div>
        </div>
        <div className='col-span-2 relative -ml-[87px]'>
          <Chart width={460} type="radialBar" options={chartData} series={series} />
        </div>
      </div>

      {/* Support tracker bottom section */}
      
    </div>
  );
}
