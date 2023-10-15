import React from "react";

import Image from "next/image";
import Img1 from '@/public/Images/Img1.png'

export default function analytsSliderCard() {
  return (
    <div className="bg-[#7367F0] rounded h-full">
      <div className="py-7 px-6 text-white flex items-center ">
      {/* left side */}
      <div className="w-3/4">
        {/* Heading */}
        <div>
          <h3 className='text-xl font-semibold '>Website Analytics</h3>
          <p className="text-sm">Total 28.5% conversion rate</p>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold">Spending</h4>
          <div className=" grid grid-rows-2 grid-cols-2 mt-3 gap-y-4">
            <div className="flex gap-3">
              <span className="bg-[#6258CC] rounded px-2.5 py-[2px] font-semibold">28%</span>
              <p className="font-semibold">Spend</p>
            </div>
            <div className="flex gap-3">
              <span className="bg-[#6258CC] rounded px-2.5 py-[2px] font-semibold">28%</span>
              <p className="font-semibold">Spend</p>
            </div>
            <div className="flex gap-3">
              <span className="bg-[#6258CC] rounded px-2.5 py-[2px] font-semibold">28%</span>
              <p className="font-semibold">Spend</p>
            </div>
            <div className="flex gap-3">
              <span className="bg-[#6258CC] rounded px-2.5 py-[2px] font-semibold">28%</span>
              <p className="font-semibold">Spend</p>
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
                  src={Img1}
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
