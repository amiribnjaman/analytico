"use client";
import React from "react";
import MoreOptionCard from "./MoreOptionCard";

export default function suportTracker() {
  // const [showMoreOption, setShowMoreOption] = React.useState(false)

  // console.log(showMoreOption)
  // const handleMoreOption = () => setShowMoreOption(!showMoreOption)
  return (
    <div className="bg-white rounded p-6 pb-0 shadow-sm">
      <div className="flex justify-between items-center">
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
      <div className="flex">
        <div className="mt-8 w-1/3">
          <h1 className="text-4xl font-semibold text-[#5D596C]">650</h1>
          <span className="inline-block text-[17px] rounded mt-1 mb-4">
            Total ticket
          </span>
        </div>
        {/* <div>
          <div id="supportTracker" style="minHeight: 257.9px;"><div id="apexchartsr9bkjo3" class="apexcharts-canvas apexchartsr9bkjo3 apexcharts-theme-light" style="width: 270px; height: 257.9px;"><svg id="SvgjsSvg1801" width="270" height="257.9" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG1803" class="apexcharts-inner apexcharts-graphical" transform="translate(-32, -10)"><defs id="SvgjsDefs1802"><clipPath id="gridRectMaskr9bkjo3"><rect id="SvgjsRect1805" width="342" height="375" x="-3" y="-1" rx="0" ry="0" opacity="1" strokeWidth="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMaskr9bkjo3"></clipPath><clipPath id="nonForecastMaskr9bkjo3"></clipPath><clipPath id="gridRectMarkerMaskr9bkjo3"><rect id="SvgjsRect1806" width="340" height="377" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><linearGradient id="SvgjsLinearGradient1811" x1="1" y1="0" x2="0" y2="1"><stop id="SvgjsStop1812" stop-opacity="1" stop-color="rgba(115,103,240,1)" offset="0.3"></stop><stop id="SvgjsStop1813" stop-opacity="0.6" stop-color="rgba(255,255,255,0.6)" offset="0.7"></stop><stop id="SvgjsStop1814" stop-opacity="0.6" stop-color="rgba(255,255,255,0.6)" offset="1"></stop></linearGradient><linearGradient id="SvgjsLinearGradient1822" x1="1" y1="0" x2="0" y2="1"><stop id="SvgjsStop1823" stop-opacity="1" stop-color="rgba(115,103,240,1)" offset="0.3"></stop><stop id="SvgjsStop1824" stop-opacity="0.6" stop-color="rgba(115,103,240,0.6)" offset="0.7"></stop><stop id="SvgjsStop1825" stop-opacity="0.6" stop-color="rgba(115,103,240,0.6)" offset="1"></stop></linearGradient></defs><g id="SvgjsG1807" class="apexcharts-radialbar"><g id="SvgjsG1808"><g id="SvgjsG1809" class="apexcharts-tracks"><g id="SvgjsG1810" class="apexcharts-radialbar-track apexcharts-track" rel="1"><path id="apexcharts-radialbarTrack-0" d="M 91.53845410946391 259.1233220103534 A 118.9530487804878 118.9530487804878 0 1 1 259.1233220103534 244.46154589053606" fill="none" fill-opacity="1" stroke="rgba(255,255,255,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="22.632926829268296" stroke-dasharray="0" class="apexcharts-radialbar-area" data:pathOrig="M 91.53845410946391 259.1233220103534 A 118.9530487804878 118.9530487804878 0 1 1 259.1233220103534 244.46154589053606"></path></g></g><g id="SvgjsG1816"><g id="SvgjsG1821" class="apexcharts-series apexcharts-radial-series" seriesName="CompletedxTask" rel="1" data:realIndex="0"><path id="SvgjsPath1826" d="M 91.53845410946391 259.1233220103534 A 118.9530487804878 118.9530487804878 0 1 1 286.9530487804878 168" fill="none" fill-opacity="0.85" stroke="url(#SvgjsLinearGradient1822)" stroke-opacity="1" stroke-linecap="butt" stroke-width="22.632926829268296" stroke-dasharray="10" class="apexcharts-radialbar-area apexcharts-radialbar-slice-0" data:angle="230" data:value="85" index="0" j="0" data:pathOrig="M 91.53845410946391 259.1233220103534 A 118.9530487804878 118.9530487804878 0 1 1 286.9530487804878 168"></path></g><circle id="SvgjsCircle1817" r="102.63658536585366" cx="168" cy="168" class="apexcharts-radialbar-hollow" fill="transparent"></circle><g id="SvgjsG1818" class="apexcharts-datalabels-group" transform="translate(0, 0) scale(1)" style="opacity: 1;"><text id="SvgjsText1819" font-family="Public Sans" x="168" y="148" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="500" fill="#a5a3ae" class="apexcharts-text apexcharts-datalabel-label" style="fontFamily: &quot;Public Sans&quot;;">Completed Task</text><text id="SvgjsText1820" font-family="Public Sans" x="168" y="194" text-anchor="middle" dominant-baseline="auto" font-size="38px" font-weight="500" fill="#5d596c" class="apexcharts-text apexcharts-datalabel-value" style="fontFamily: &quot;Public Sans&quot;;">85%</text></g></g></g></g><line id="SvgjsLine1827" x1="0" y1="0" x2="336" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1828" x1="0" y1="0" x2="336" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line></g><g id="SvgjsG1804" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend"></div></div></div>
        </div> */}
      </div>

      {/* Support tracker bottom section */}
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
  );
}
