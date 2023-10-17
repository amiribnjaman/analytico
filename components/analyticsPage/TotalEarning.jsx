import React from "react";

export default function TotalEarning() {
  return (
    <div className="bg-white rounded p-6 pb-0 shadow-sm">
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

      {/* Totla earning bottom */}
      <div className="mt-8">
        <div className="mb-4 flex justify-between items-center">
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
          <div>
            <h4 className="text-[#28c76f]
            ">+$98</h4>
          </div>
        </div>
        <div className="mb-4 flex justify-between items-center">
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
          <div>
            <h4 className="text-[#28c76f]
            ">+$98</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
