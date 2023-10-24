import React from "react";
import Image from "next/image";
import John from "@/public/Images/john-vector.png";
export default function Congrates() {
  return (
    <div className="bg-white rounded shadow-sm pl-6 pt-4">
      <div className="grid grid-cols-7">
        <div className="col-span-5 overflow-x-auto">
          <h2 className='text-[17px] text-[#5D596C] font-[600] '>Congratulations John! <span className='text-[17px] -ml-[5px]'>🎉</span>
          </h2>
          <h4 className="text-[#807C8C] text-[15px] mt-0 mb-2">Best seller of the month</h4>
          <h3 className='flex text-[#7468F0] items-center text-[25px] font-semibold'>
            <svg
              className=" w-6 h-6 mt-[3px] rounded text-[#7367F0]"
              fill="currentColor"
              strokeWidth="1"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
            </svg>
            <span className="-ml-[3px]">48.9k</span>
          </h3>

          <div className="mb-3">
            <button className="bg-[#7468F0] text-[15px] text-white px-5 py-2 font-semibold rounded ">View Sales</button>
          </div>
        </div>
        <div className="col-span-2 -mr-[25px] pt-4">
          <Image style={{height: '140px'}} src={John} width={130} height={200} alt="" />
        </div>
      </div>
    </div>
  );
}
