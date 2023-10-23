import React from 'react'
import { Divider, Radio, Table } from 'antd';

export default function Transaction() {
    
//   const [selectionType, setSelectionType] = useState('checkbox');
    
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
          <hr />
          <div>
          <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="">
              <th className="flex gap-8 ml-2 items-center font-[500]">CARD
              </th>
              <th className='font-[500]'>DATE</th>
              <th className='font-[500]'>STATUS</th>
              <th className='font-[500]'>TREND</th>
            </tr>
          </thead>
          {/* <tbody>
            {/* maping project for showing data into table *
            { projectData.map((project) => (
              <tr>
                <td className="py-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    class="w-5 h-5 shadow-md text-[#37CB79] cursor-pointer outline-none rounded-full"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </td>
                <td className="flex gap-8 py-3 -ml-6 items-center">
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary rounded-sm"
                    />
                  </label>
                  <div className="flex flex-col">
                    <div className="font-semibold">{project.name}</div>
                    <h5 className="m-0 font-normal text-sm text-[#ACAAB4]">
                      {project.deadline}
                    </h5>
                  </div>
                </td>
                {/* <td>
                
              </td> *
                <td className="py-0">{project.leader}</td>
                <td className="py-0">
                  {project.team == 3 ? (
                    <div className="avatar-group -space-x-6">
                      <div className="avatar">
                        <div className="w-10 h-10">
                          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-10 h-10">
                          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-10 h-10">
                          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="avatar-group -space-x-6">
                      <div className="avatar">
                        <div className="w-10 h-10">
                          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-10 h-10">
                          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-10 h-10">
                          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-10 h-10">
                          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
            
          </tbody> */}
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
  )
}
    
