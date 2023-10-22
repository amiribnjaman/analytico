"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import styles from '@/app/styles/crm.module.css'

// async function getEarningData() {
//   const res = await fetch("http://localhost:3000/api/earning-report");
//   const value = await res.json();
//   return value;
// }

export default function EarningReport() {
  const [selectedTab, setSelectedTab] = React.useState("1");
  const [chartData, setChartData] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/earning-report")
      .then((res) => res.json())
      .then((data) => setChartData(data));
  }, []);

  const data = {
    series1: [
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
            fillColor: "#7367F0",
          },
          {
            x: "Category C",
            y: 8.7,
          },
          {
            x: "Category A",
            y: 6.5,
          },
          {
            x: "Category A",
            y: 6.5,
          },
          {
            x: "Category A",
            y: 6.5,
          },
        ],
      },
    ],
    series2: [
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
          },
          {
            x: "Category C",
            y: 8.7,
          },
          {
            x: "Category A",
            y: 6.5,
          },
          {
            x: "Category A",
            y: 6.5,
          },
          {
            x: "Category A",
            y: 9.5,
            fillColor: '#7367F0'
          },
          {
            x: "Category A",
            y: 6.5,
          },
        ],
      },
    ],
    series3: [
      {
        data: [
          {
            x: "Category B",
            y: 3.1,

            // strokeColor: '#C23829'
          },
          {
            x: "Category B",
            y: 7.9,
            fillColor: '#7367F0'

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
          },
          {
            x: "Category C",
            y: 8.7,
          },
          {
            x: "Category A",
            y: 6.5,
          },
          {
            x: "Category A",
            y: 6.5,
          },
          {
            x: "Category A",
            y: 9.5,
          },
          {
            x: "Category A",
            y: 6.5,
          },
        ],
      },
    ],
    series4: [
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
          },
          {
            x: "Category C",
            y: 8.7,
          },
          {
            x: "Category A",
            y: 6.5,
          },
          {
            x: "Category A",
            y: 7.5,
          },
          {
            x: "Category A",
            y: 6.5,
            
          },
          {
            x: "Category A",
            y: 9.5,
            fillColor: '#7367F0'
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
        height: 300,
        type: "bar",
      },
      colors: ["#E8E7FD"],
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          columnWidth: "45%",
          dataLabels: {
            enabled: false,
            position: "top", // top, center, bottom
            style: {
              colors: ["#ddd"],
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ["#ddd"],
        },
        position: "center",
        formatter: function (val) {
          return val + "k";
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
          colors: ["#A5A3AE"],
          color: "#A5A3AE",
        },
        enabled: true,
        // show: false,
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        position: "bottom",

        axisBorder: {
          show: true,
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
        enabled: true,
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
        axisBorder: {
          show: false,
        },
        style: {
          color: "red",
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
          formatter: function (value) {
            let val = Math.abs(value);
            if (val >= 10 ** 3 && val < 10 ** 6) {
              val = (val / 1000).toFixed(0) + " K";
            } else if (val >= 10 ** 6) {
              val = (val / 1000000).toFixed(0) + " M";
            } else if (val <= 0) {
              val = val + "k";
            } else {
              val = val + "0k";
            }

            return val;
          },
        },
      },
      // title: {
      //   show: false,
      //   enabled: false,
      //   text: "Monthly Inflation in Argentina, 2002",
      //   floating: true,
      //   offsetY: 330,
      //   align: "center",
      //   style: {
      //     color: "#444",
      //   },
      // },
    },
  };

  // const idRef = React.useRef(null)

  // Get and set the selected tab id
  const handleSelectedTab = (id) => {
    setSelectedTab(id);
  };

  return (
    <div className="bg-white col-span-2 rounded p-6 shadow-sm">
      {/* Earning headings */}
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-xl font-semibold mt-2 text-[#5D596C]">
            Earning Reports
          </h4>
          <h5 className="text-[#A5A3AE] text-xs font-semibold">
            Yearly Earnings Overview
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
      {/* Earning middle tabs with chart */}
      <div className={` mt-10`}>
        <Tabs>
          {/* Tabs header */}
          <TabList>
            <Tab
              className="flex items-center flex-col py-4 px-8 rounded-[10px] border-[1px] border-dashed"
              onClick={() => handleSelectedTab("1")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                className={`w-10 h-9 rounded ${
                  selectedTab == 1
                    ? "text-[#8277F2] bg-[#F4F3FE]"
                    : "text-[#B9BBBE] bg-[#F2F2F3]"
                } p-[6px]`}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span>Others</span>
            </Tab>
            <Tab
              onClick={() => handleSelectedTab("2")}
              className="flex items-center flex-col py-4 px-8 rounded-[10px] border-[1px] border-dashed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1"
                fill="none"
                stroke="currentColor"
                className={`w-10 h-9 rounded ${
                  selectedTab == 2
                    ? "text-[#8277F2] bg-[#F4F3FE]"
                    : "text-[#B9BBBE] bg-[#F2F2F3]"
                } p-[6px]`}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
              <span>Sales</span>
            </Tab>
            <Tab
              onClick={() => handleSelectedTab("3")}
              className="flex items-center flex-col py-4 px-8 rounded-[10px] border-[1px] border-dashed"
            >
              <svg
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                height="10px"
                viewBox="0 0 320 512"
                strokeWidth="0.5"
                className={`w-10 h-9 rounded ${
                  selectedTab == 3
                    ? "text-[#8277F2] bg-[#F4F3FE]"
                    : "text-[#B9BBBE] bg-[#F2F2F3]"
                } p-[6px]`}
              >
                <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
              </svg>
              <span>Porfit</span>
            </Tab>
            <Tab
              onClick={() => handleSelectedTab("4")}
              className="flex items-center flex-col py-4 px-8 rounded-[10px] border-[1px] border-dashed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1"
                fill="none"
                stroke="currentColor"
                className={`w-10 h-9 rounded ${
                  selectedTab == 4
                    ? "text-[#8277F2] bg-[#F4F3FE]"
                    : "text-[#B9BBBE] bg-[#F2F2F3]"
                } p-[6px]`}
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
              <span>Income</span>
            </Tab>
          </TabList>

          {/* Tabs content */}
          <div className="mt-6">
            <TabPanel>
              <div className="max-h-[321px] overflow-hidden">
                <div className="w-full -mt-[55px] overflow-hidden max-h-[345px] pr-2 flex justify-center">
                  <Chart
                    options={data.options}
                    series={data.series1}
                    type="bar"
                    height={355}
                    width={550}
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="max-h-[321px] overflow-hidden">
              <div className="w-full -mt-[55px] overflow-hidden max-h-[345px] pr-2 flex justify-center">
                  <Chart
                    options={data.options}
                    series={data.series2}
                    type="bar"
                    height={355}
                    width={550}
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="max-h-[321px] overflow-hidden">
              <div className="w-full -mt-[55px] overflow-hidden max-h-[345px] pr-2 flex justify-center">
                  <Chart
                    options={data.options}
                    series={data.series3}
                    type="bar"
                    height={355}
                    width={550}
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="max-h-[321px] overflow-hidden">
              <div className="w-full -mt-[55px] overflow-hidden max-h-[345px] pr-2 flex justify-center">
                  <Chart
                    options={data.options}
                    series={data.series4}
                    type="bar"
                    height={355}
                    width={550}
                  />
                </div>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
