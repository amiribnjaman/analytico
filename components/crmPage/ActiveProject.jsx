'use client'

import Image from "next/image";
import React, {useState, useEffect} from "react";
import { Progress } from 'antd';

export default function ActiveProject() {
  const [activeProject, setActiveProject] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/active-project")
      .then((res) => res.json())
      .then((data) => setActiveProject(data));
  }, []);


  return (
    <div className="bg-white rounded shadow-sm">
    {/* Active project headings */}
    <div className="flex justify-between items-center pb-0 p-6">
      <div>
        <h4 className="text-lg font-semibold mt-2 text-[#5D596C]">
          Active Project
        </h4>
        <h5 className="text-[#A5A3AE] text-[13px] font-semibold">
        Average 72% Completed
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
      <div className="pt-1 p-6 pr-4">
        {activeProject.map((data) => (
          <div className="flex justify-between gap-1 items-center mt-4 text-start">
            <div class='w-2/6 justify-self-end'>
            <Image src={data.img} alt="" height={30} width={30} />
            </div>
            <div className="mr-2 w-3/4 items-center justify-self-start gap-2 text-left">
              <h5 className="justify-self-start text-[17px] text-start">{data.title}</h5>
              <h6 className='text-sm text-[#A5A3AE]'>{ data.subTitle}</h6>
            </div>
            <div className='w-4/6'>
            <Progress  percent={data.data} strokeColor={data.fill} status="active"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
