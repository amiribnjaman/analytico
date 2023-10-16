import React from "react";

export default function SalesOverview() {
  return (
    <div className="bg-white rounded p-5 shadow-sm">
      {/* sales top */}
      <div className="flex justify-between">
        <div>
          <h3 className="text-[#ABA9B3]  text-sm">Sales Overview</h3>
          <h2 className="text-2xl font-semibold text-[#5d596c]">$42.5k</h2>
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
