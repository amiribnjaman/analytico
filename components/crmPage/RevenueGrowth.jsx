import React from "react";

export default function RevenueGrowth() {
    return <div className="bg-white rounded shadow-sm">
      {/* Revenue growth heading */}
      <div className="p-6 pt-3 pb-3">
        <h4 className="text-xl font-[450] mt-2 text-[#5D596C]">Revenue Growth</h4>
        <h5 className="text-[#6F6B7D] text-sm">Weekly Report</h5>
        </div>
        
        {/* Revenue growth bottom with chart */}
        <div className="p-6 pt-0">
        <div className="flex justify-between items-center">
          <h4 className="text-2xl text-[#5D596C] font-semibold mt-2">175k</h4>
          <h5 className="text-[#EA5455] text-sm mt-2">-16.2%</h5>
        </div>
      </div>
  </div>;
}
