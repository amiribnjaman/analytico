import React from "react";

import Image from "next/image";

export default function analyticSliderSingleCard({data}) {
  return (
    <div className="bg-[#7367F0] rounded h-full">
      <div className="py-7 px-6 text-white flex items-center ">
        {/* left side */}
        <div className="w-3/4">
          {/* Heading */}
          <div>
            <h3 className="text-xl font-semibold ">Website Analytics</h3>
            <p className="text-sm">Total 28.5% conversion rate</p>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">{data.title}</h4>
            <div className=" grid grid-rows-2 grid-cols-2 mt-3 gap-y-4">
              <div className="flex gap-3">
                <span className="bg-[#6258CC] rounded px-2.5 py-[2px] font-semibold">
                  {data.firstItem.count}
                </span>
                <p className="font-semibold">{data.firstItem.name}</p>
              </div>
              <div className="flex gap-3">
                <span className="bg-[#6258CC] rounded px-2.5 py-[2px] font-semibold">
                  {data.secondItem.count}
                </span>
                <p className="font-semibold">{data.secondItem.name}</p>
              </div>
              <div className="flex gap-3">
                <span className="bg-[#6258CC] rounded px-2.5 py-[2px] font-semibold">
                  {data.thirdItem.count}
                </span>
                <p className="font-semibold">{data.thirdItem.name}</p>
              </div>
              <div className="flex gap-3">
                <span className="bg-[#6258CC] rounded px-2.5 py-[2px] font-semibold">
                  {data.fourthItem.count}
                </span>
                <p className="font-semibold">{data.fourthItem.name}</p>
              </div>
              {/* <div>
              <span>28%</span>
              <p>Spend</p>
            </div>
            <div>
              <span>28%</span>
              <p>Spend</p>
            </div>
            <div>
              <span>28%</span>
              <p>Spend</p>
            </div> */}
            </div>
          </div>
        </div>

        {/* right side image */}
        <div>
          <Image
            src={data.img}
            alt="img"
            width={200}
            height={200}
            className="mt-3"
          />
        </div>
      </div>
    </div>
  );
}
