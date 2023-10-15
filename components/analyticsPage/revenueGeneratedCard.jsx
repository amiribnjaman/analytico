import React from "react";

export default function revenueGeneratedCard() {
  return (
    <div className="bg-white rounded p-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1"
        stroke="currentColor"
        class="w-9 h-9 rounded-full text-[#2CC872] bg-[#DFF7E9] p-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
        />
      </svg>

      <h4 className="text-xl font-semibold mt-2">92.7k</h4>
      <h5 className="text-[#6F6B7D] text-sm">Revenue Generated</h5>
    </div>
  );
}
