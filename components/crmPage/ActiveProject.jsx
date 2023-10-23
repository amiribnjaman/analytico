import React from "react";

export default function ActiveProject() {
  return (
      <div className="bg-white rounded p-6 shadow-sm">
          {/* Active Project headings */}
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-lg font-semibold mt-2 text-[#5D596C]">
            Active Project
          </h4>
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
    </div>
  );
}
