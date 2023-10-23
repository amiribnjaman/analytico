'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Progress } from 'antd';

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:3000/api/browser-states");
//   const data = res.json();
//   return { props: { data } };
// }

export default function BrowserStates() {
  const [browserStates, setBrowserStates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/browser-states")
      .then((res) => res.json())
      .then((data) => setBrowserStates(data));
  }, []);

  return (
    <div className="bg-white rounded shadow-sm">
      {/* Browser States headings */}
      <div className="flex justify-between items-center  p-6">
        <div>
          <h4 className="text-lg font-semibold mt-2 text-[#5D596C]">
            Browser States
          </h4>
          <h5 className="text-[#A5A3AE] text-[13px] font-semibold">
            Counter April 2022
          </h5>
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

      {/* Browser states body */}
      <div className="pt-0 p-6 pr-1">
        {browserStates.map((data) => (
          <div className="flex justify-between gap-1 items-center mt-5 text-start">
            <div class='w-1/7 justify-self-end'>
            <Image src={data.img} alt="" height={26} width={26} />
            </div>
            <div className="mr-2 w-3/5 flex items-center justify-self-start gap-2 text-left">
              <h5 className="justify-self-start text-[16px] text-start">{data.title}</h5>
              <h6 className="text-[16px]">{data.data}%</h6>
            </div>
            <div className='w-1/5'>
            <Progress type="circle" strokeColor={data.fill}  percent={data.data}  size={33} format={() => ''} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
