import React from "react";

export default function SalesOverview() {
  return (
    <div className="bg-white rounded p-5 shadow-sm">
      {/* sales top */}
      <div className="flex justify-between">
        <div>
          <h3 className="text-[#ABA9B3]  text-sm">Sales Overview</h3>
          <h2 className="flex items-center text-2xl font-semibold text-[#5d596c]">
          <svg
              className="w-6 h-6 mt-[1px] rounded px-[3px] py-[1px]"
              fill="currentColor"
              strokeWidth={0.5}
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
            </svg>
            <span>42.5k</span></h2>
        </div>
        <div className="text-[#28C76F] text-md ">+18.2%</div>
      </div>

      {/* sales bottom */}
      <div className="mt-8">
        <div className="flex gap-2">
          <div>
            <span className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-6 h-6 text-[#00cfe8] bg-[#d9f8fc] p-1 rounded"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span className="text-[#6F6B7D]">Order</span>
            </span>
            <h3 className="text-xl text-[#5D596C] mt-2 font-semibold">62.3%</h3>
            <h4 className="text-neutral-400 text-sm">6,450</h4>
          </div>
          <div className="flex">
            <span
              id="divider"
              className="self-center relative bg-[#F2F2F3] px-[6px] py-[2.5px] flex items-center rounded-full text-[#A9ABAF]"
            >
              vs
            </span>
          </div>
          <div>
            <span className="flex gap-2">
              <span className="text-[#6F6B7D]">Visits</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                className="w-6 h-6 text-[#8479F2] bg-[#EAE8FD] p-1 rounded"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </span>
            <h3 className="text-xl text-right mt-2 text-[#5D596C] font-semibold">62.3%</h3>
            <h4 className="text-neutral-400 text-sm text-right">16,450</h4>
          </div>
        </div>

        {/* Progressbar */}
        <div className="flex mt-6">
        <progress id="progress__accent" className="progress progress-accent" value="70" max="100" />
        {/* <progress className="progress progress-accent" value="100" max="80"/> */}
        </div>
      </div>
    </div>
  );
}
