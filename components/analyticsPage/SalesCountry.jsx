import React from "react";
import SalesCountrySingleCard from "./SalesCountrySingleCard";
import { promises as fs } from "fs";

export default async function SalesCountry() {
  // Fetch coutry data through the local file stystem
  const file = await fs.readFile(
    process.cwd() + "/public/data/country.json",
    "utf8"
  );
  const countries = JSON.parse(file);

  return (
    <div className="bg-white rounded p-6 shadow-sm">
      <div className="flex justify-between items-center">
        {/* Salse by country heading */}
        <div>
          <h4 className="text-xl font-semibold mt-2 text-[#5D596C]">
            Sales by Countries
          </h4>
          <h5 className="text-[#A5A3AE] text-xs font-semibold">
            Monthly Sales Overview
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

      {/* Sales country body */}
      <div className="mt-9">
        {countries.map((country, i) => (
          <SalesCountrySingleCard key={i} country={country} />
        ))}
      </div>
    </div>
  );
}
