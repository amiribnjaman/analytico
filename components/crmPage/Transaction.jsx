"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Transaction() {
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/transaction")
      .then((res) => res.json())
      .then((data) => setTransactionData(data));
  }, []);

  return (
    <div className="bg-white rounded shadow-sm">
      {/* Transaction heading */}
      <div className="flex justify-between items-center pt-4 px-6 pb-4">
        <div>
          <h4 className="text-[18px] font-semibold mt-2 text-[#5D596C]">
            Last Transaction
          </h4>
        </div>

        {/* Ellipsis dotted/more option */}
        <div className="relative pt-3">
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

      {/* Trasaction body */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="">
                <th className="flex gap-8 ml-2 items-center font-[500]">
                  CARD
                </th>
                <th className="font-[500]">DATE</th>
                <th className="font-[500]">STATUS</th>
                <th className="font-[500]">TREND</th>
              </tr>
            </thead>
            
            <tbody>
              {/* maping project for showing data into table */}
              {transactionData.map((data) => (
                <tr>
                  <td className="flex gap-8 py-3 items-center">
                    <div className="flex gap-4 items-center">
                      <div >
                        <Image
                          src={data.img}
                          alt=""
                          height={10}
                          width={45}
                          style={{height: '30px', padding: '3px'}}
                          className="bg-[#F6F6F7] rounded"
                        />
                      </div>
                      <div className="font-semibold">
                        <h4 className="text-[#6F6B7D] text-[16px]">{data.title}</h4>
                        <h5 className="m-0 font-normal text-sm text-[#A8A6B1]">
                          {data.data}
                        </h5>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5 className="text-[16px] font-[500] text-[#6F6B7D] m-0">{data.type}</h5>
                    <h6 className="text-sm text-[#ABA9B3]">{data.date}</h6>
                  </td>
                  <td>
                    <h6 className={`text-center text-sm rounded px-[4px] py-[1px] text-[${data.color}] bg-[${data.bg}]`}>{data.status}</h6>
                  </td>
                  <td>
                    <h6 className="text-[#6F6B7D] text-[16px] font-[500]">{data.amount}</h6>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr className="mt-3" />
          {/* pagination */}
          {/* <div className="flex justify-between mt-4">
          <div>
            <h6 className="text-sm text-[#A8AAAE] ">
              Showing {firstIndex + 1} to {lastIndex}
            </h6>
          </div>

          <div className="flex gap-1">
            {currentPage == 1 ? (
              <button
                onClick={prevPage}
                className=" btn btn-sm capitalize  font-normal"
                disabled
              >
                Previous
              </button>
            ) : (
              <button
                onClick={prevPage}
                className=" btn btn-sm capitalize  font-normal"
              >
                Previous
              </button>
            )}
            {numbers.map((n) => (
              <button
                onClick={() => changeCurPage(n)}
                className={`${
                  currentPage === n ? "btn-active" : ""
                } join-item btn btn-sm`}
              >
                {n}
              </button>
            ))}
            {numbers.length === currentPage ? (
              <button
                onClick={nextPage}
                className={`btn capitalize font-normal btn-sm`}
                disabled
              >
                Next
              </button>
            ) : (
              <button
                onClick={nextPage}
                className={`btn capitalize font-normal btn-sm`}
              >
                Next
              </button>
            )}
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
}
