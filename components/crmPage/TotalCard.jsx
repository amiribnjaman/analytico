import React from "react";

export default function TotalCard({ svg, title, subTitle, amount, growth }) {
  return (
    <div className="bg-white rounded  shadow-sm">
      <div className="p-6 pb-0">
        {svg}
        <h4 className="text-[22px] font-normal mt-2 text-[#5D596C]">{title}</h4>
        <h5 className="text-[#6F6B7D] text-sm my-1 text-[#B0AEB8]">
          {subTitle}
        </h5>
        <h6 className="text-[#807C8C] text-sm font-normal">{amount}</h6>
        <span className="px-3 py-1 bg-[#F2F2F3] text-[#AEB0B4] rounded mt-2 mb-3 inline-block">
          {growth}
        </span>
      </div>

      <div className="overflow-hidden -pl-16"></div>
    </div>
  );
}
