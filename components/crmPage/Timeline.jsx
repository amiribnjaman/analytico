import React from "react";

export default function Timeline() {
  return (
    <div className="bg-white rounded shadow-sm p-6 pt-4">
      {/* Activity Timeline heading */}
      <div className="flex justify-between items-center ">
        <div>
          <h4 className="flex items-center gap-3 text-[18px] font-semibold mt-2 text-[#5D596C]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
              />
            </svg>

            <span className="-mt-1">Activity Timeline</span>
          </h4>
        </div>

        {/* Ellipsis dotted/more option */}
        <div className="relative pt-3">
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

      {/*Activity timeline body section*/}
      <div className="mt-8 ml-2">
        <ol class="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li class="mb-8 ml-6">
            <span class="absolute flex items-center justify-center w-3 h-3 shadow outline outline-[#FFF0E1] bg-[#FF9F43] rounded-full mt-1 -left-[6px] ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"></span>
            <div>
              <div className="flex justify-between">
                <h3 class="font-medium leading-tight">Client Meeting</h3>
                <span className="text-[12px] text-[#A5A3AE] font-[500]">Today</span>
              </div>
              <p class="text-sm">
                Project meeting with john <a href="">@10:15am</a>{" "}
              </p>
              <div className="flex gap-3 mt-3 items-center">
                <img className="w-10 h-10 bg-[#ddd] rounded-full " src="" alt />
                <div>
                  <h4 className="font-[500]">Lester McCarthy (Client)</h4>
                  <h5 className="text-sm">CEO of Infibeam</h5>
                </div>
              </div>
            </div>
          </li>
          <li class="mb-4 ml-6">
            <span class="absolute flex items-center mt-2 justify-center w-3 h-3 shadow outline outline-[#E8E7FD] mt-2 bg-[#7367F0] rounded-full -left-[6px] ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"></span>
            <div>
              <div className="flex justify-between">
                <h3 class="font-medium leading-tight">
                  Create a new project for client
                </h3>
                <span className="text-[12px] text-[#A5A3AE] font-[500]">2 Days ago</span>
              </div>
              <p class="text-md text-[15px]">Add files to new design folder</p>
            </div>
          </li>

          <li class="mb-6 ml-6">
            <span class="absolute flex items-center mt-2 justify-center w-3 h-3 shadow outline outline-[#D6F7FB] bg-[#00CFE8] rounded-full -left-[6px] ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"></span>
            <div>
              <div className="flex justify-between">
                <h3 class="font-medium leading-tight">
                  Shared 2 New Project Files
                </h3>
                <span className="text-[12px] text-[#A5A3AE] font-[500]">6 Days Ago</span>
              </div>
              <p class="text-[15px]">Sent by Mollie Dixon</p>
              <div className="flex gap-5 mt-3 items-center">
                <h5 className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    class="w-5 h-5 text-[#FF9F44]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>

                  <span className="text-[14px] font-[500]">App Guidelines</span>
                </h5>
                <h5 className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    class="w-5 h-5 text-[#28C76F]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                    />
                  </svg>

                  <span className="text-[14px] font-[500]">
                    Testing Results
                  </span>
                </h5>
              </div>
            </div>
          </li>
          <li class="ml-6">
            <span class="absolute flex items-center justify-center mt-2 w-3 h-3 shadow outline outline-[#F1F1F2] bg-[#A8AAAE] rounded-full -left-[6px] ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"></span>
            <div>
              <div className="flex justify-between">
                <h3 class="font-medium leading-tight">
                Project status updated
                </h3>
                <span className="text-[12px] text-[#A5A3AE] font-[500]">10 Day Ago</span>
              </div>
              <p class="text-md text-[15px]">Woocommerce iOS App Completed</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
