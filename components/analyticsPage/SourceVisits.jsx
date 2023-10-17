import React from "react";

export default function SourceVisits() {
  return (
    <div className="bg-white rounded p-6 shadow-sm">
      <div className="flex justify-between items-center">
        {/* Source Visits heading */}
        <div>
          <h4 className="text-xl font-semibold mt-2 text-[#5D596C]">
            Source Visits
          </h4>
          <h5 className="text-[#A5A3AE] text-xs font-semibold">
            38.4k Visitors
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

      {/* Source visit bottom */}
      <div className="mt-8">
        <div className="flex gap-3 w-[100%] my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 h-9 text-[#A8AAAE] bg-[#F2F2F3] py-1 px-2 rounded"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path d="M8 266.44C10.3 130.64 105.4 34 221.8 18.34c138.8-18.6 255.6 75.8 278 201.1 21.3 118.8-44 230-151.6 274-9.3 3.8-14.4 1.7-18-7.7q-26.7-69.45-53.4-139c-3.1-8.1-1-13.2 7-16.8 24.2-11 39.3-29.4 43.3-55.8a71.47 71.47 0 0 0-64.5-82.2c-39-3.4-71.8 23.7-77.5 59.7-5.2 33 11.1 63.7 41.9 77.7 9.6 4.4 11.5 8.6 7.8 18.4q-26.85 69.9-53.7 139.9c-2.6 6.9-8.3 9.3-15.5 6.5-52.6-20.3-101.4-61-130.8-119-24.9-49.2-25.2-87.7-26.8-108.7zm20.9-1.9c.4 6.6.6 14.3 1.3 22.1 6.3 71.9 49.6 143.5 131 183.1 3.2 1.5 4.4.8 5.6-2.3q22.35-58.65 45-117.3c1.3-3.3.6-4.8-2.4-6.7-31.6-19.9-47.3-48.5-45.6-86 1-21.6 9.3-40.5 23.8-56.3 30-32.7 77-39.8 115.5-17.6a91.64 91.64 0 0 1 45.2 90.4c-3.6 30.6-19.3 53.9-45.7 69.8-2.7 1.6-3.5 2.9-2.3 6q22.8 58.8 45.2 117.7c1.2 3.1 2.4 3.8 5.6 2.3 35.5-16.6 65.2-40.3 88.1-72 34.8-48.2 49.1-101.9 42.3-161-13.7-117.5-119.4-214.8-255.5-198-106.1 13-195.3 102.5-197.1 225.8z" />
          </svg>

          <div className="-mt-[8px]">
            <h5 className="text-[16px] text-[#5D596C]">Social Network</h5>
            <p className="text-xs text-[#B2B1BA] font-semibold">
              Social Channels
            </p>
            <div className="mt-3 flex gap-3 justify-between">
              <h6>31.5k</h6>
              <span className="bg-[#DFF7E9] py-.5 px-3 rounded text-[#37CB79]">
                +8.2%
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 w-[100%] mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 h-9 text-[#A8AAAE] bg-[#F2F2F3] py-1 px-2 rounded"
            viewBox="0 0 512 512"
            fill="currentColor"
            stroke-width="1"
          >
            <path d="M418.4 157.9c35.3-8.3 61.6-40 61.6-77.9c0-44.2-35.8-80-80-80c-43.4 0-78.7 34.5-80 77.5L136.2 151.1C121.7 136.8 101.9 128 80 128c-44.2 0-80 35.8-80 80s35.8 80 80 80c12.2 0 23.8-2.7 34.1-7.6L259.7 407.8c-2.4 7.6-3.7 15.8-3.7 24.2c0 44.2 35.8 80 80 80s80-35.8 80-80c0-27.7-14-52.1-35.4-66.4l37.8-207.7zM156.3 232.2c2.2-6.9 3.5-14.2 3.7-21.7l183.8-73.5c3.6 3.5 7.4 6.7 11.6 9.5L317.6 354.1c-5.5 1.3-10.8 3.1-15.8 5.5L156.3 232.2z" />
          </svg>
          <div className="-mt-[8px]">
            <h5 className="text-[16px] text-[#5D596C]">Direct Source</h5>
            <p className="text-xs text-[#B2B1BA] font-semibold">
              Direct link click
            </p>
            <div className="mt-3 flex gap-3 justify-between">
              <h6>1.2k</h6>
              <span className="bg-[#DFF7E9] py-.5 px-3 rounded text-[#37CB79]">
                +4.2%
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 w-[100%] mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-9 h-9 text-[#A8AAAE] bg-[#F2F2F3] py-1 px-2 rounded"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <div className="-mt-[8px]">
            <h5 className="text-[16px] text-[#5D596C]">Email Newsletter</h5>
            <p className="text-xs text-[#B2B1BA] font-semibold">
              Mail Campaigns
            </p>
            <div className="mt-3 flex gap-3 justify-between">
              <h6>893</h6>
              <span className="bg-[#DFF7E9] py-.5 px-3 rounded text-[#37CB79]">
                +2.2%
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 w-[100%] mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-9 h-9 text-[#A8AAAE] bg-[#F2F2F3] py-1 px-2 rounded"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>

          <div className="-mt-[8px]">
            <h5 className="text-[16px] text-[#5D596C]">Referrals</h5>
            <p className="text-xs text-[#B2B1BA] font-semibold">
              Impact Radius Visits
            </p>
            <div className="mt-3 flex gap-3 justify-between">
              <h6>342</h6>
              <span className="bg-[#FCE5E6] py-.5 px-3 rounded text-[#EA5455]">
                -0.2%
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 w-[100%] mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-9 h-9 text-[#A8AAAE] bg-[#F2F2F3] py-1 px-2 rounded"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
            />
          </svg>

          <div className="-mt-[8px]">
            <h5 className="text-[16px] text-[#5D596C]">ADVT</h5>
            <p className="text-xs text-[#B2B1BA] font-semibold">
            Google ADVT
            </p>
            <div className="mt-3 flex justify-between gap-3">
              <h6>2.15k</h6>
              <span className="bg-[#DFF7E9] py-.5 px-3 rounded text-[#37CB79]">
                +9.1%
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 w-[100%] mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-9 h-9 text-[#A8AAAE] bg-[#F2F2F3] py-1 px-2 rounded"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>

          <div className="-mt-[8px]">
            <h5 className="text-[16px] text-[#5D596C]">Other</h5>
            <p className="text-xs text-[#B2B1BA] font-semibold">
            Many Sources
            </p>
            <div className="mt-3 flex justify-between gap-3">
              <h6>2.15k</h6>
              <span className="bg-[#DFF7E9] py-.5 px-3 rounded text-[#37CB79]">
                +9.1%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
