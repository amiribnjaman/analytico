import React from "react";

export default function MontlhyCampaign() {
  return (
    <div className="bg-white rounded p-6 pb-0 shadow-sm">
      <div className="flex justify-between items-center">
        {/* Monthly Campaign State heading */}
        <div>
          <h4 className="text-xl font-semibold mt-2 text-[#5D596C]">
            Monthly Campaign State
          </h4>
          <h5 className="text-[#A5A3AE] text-xs font-semibold">
            8.52k Social Visiters
          </h5>
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

      {/* Monthly campaign bottom */}
      <div className="flex flex-col gap-y-2 mt-1">
        {/* Single card */}
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center gap-3 mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="bg-[#DFF7E9] w-9 h-9 rounded text-[#28C76F] p-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>

            <div className="-mt-[8px]">
              <h5 className="text-[16px] text-[#5D596C]">Emails</h5>
            </div>
          </div>
          <div className="flex gap-4">
            <h3>12,346</h3>
            <h4
              className="text-[#28c76f]
            "
            >
              0.3%
            </h4>
          </div>
        </div>
        {/* Single card */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="bg-[#D9F8FC] w-9 h-9 rounded text-[#5CE0F0] p-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>

            <div className="-mt-[8px]">
              <h5 className="text-[16px] text-[#5D596C]">Opened</h5>
            </div>
          </div>
          <div className="flex gap-4">
            <h3>12,346</h3>
            <h4
              className="text-[#28c76f]
            "
            >
              0.3%
            </h4>
          </div>
        </div>
        {/* Single card */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="bg-[#FFF1E3] w-9 h-9 rounded text-[#FF9F43] p-1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
              />
            </svg>

            <div className="-mt-[8px]">
              <h5 className="text-[16px] text-[#5D596C]">Clicked</h5>
            </div>
          </div>
          <div className="flex gap-4">
            <h3>12,346</h3>
            <h4
              className="text-[#28c76f]
            "
            >
              0.3%
            </h4>
          </div>
        </div>

        {/* Single card */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="bg-[#EAE8FD] w-9 h-9 rounded text-[#7367F0] p-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            <div className="-mt-[8px]">
              <h5 className="text-[16px] text-[#5D596C]">Subscribe</h5>
            </div>
          </div>
          <div className="flex gap-4">
            <h3>12,346</h3>
            <h4
              className="text-[#28c76f]
            "
            >
              0.3%
            </h4>
          </div>
        </div>

        {/* Single card */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="bg-[#F2F2F3] w-9 h-9 rounded text-[#6F6B7D] p-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
              />
            </svg>

            <div className="-mt-[8px]">
              <h5 className="text-[16px] text-[#5D596C]">Complaints</h5>
            </div>
          </div>
          <div className="flex gap-4">
            <h3>10</h3>
            <h4
              className="text-[#28c76f]
            "
            >
              0.3%
            </h4>
          </div>
        </div>

        {/* Single card */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="bg-[#FCE5E6] w-9 h-9 rounded text-[#EA5758] p-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>

            <div className="-mt-[8px]">
              <h5 className="text-[16px] text-[#5D596C]">Unsubsribe</h5>
            </div>
          </div>
          <div className="flex gap-4">
            <h3>10</h3>
            <h4
              className="text-[#28c76f]
            "
            >
              0.3%
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
