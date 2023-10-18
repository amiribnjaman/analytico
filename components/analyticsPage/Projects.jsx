"use client";

import React, { useState, useEffect } from "react";
// import { promises as fs } from "fs";
import projects from "@/public/data/projects.json";

export default function Projects() {
  // Fetch Projets data through the local file stystem
  // const file = await fs.readFile(
  //   process.cwd() + "/public/data/projects.json",
  //   "utf8"
  // );
  // const projects = JSON.parse(file);
  // const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   fetch("/public/data/projects.json")
  //     .then((res) => res.json)
  //     .then((data) => setProjects(data));
  // }, []);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const projectData = projects.slice(firstIndex, lastIndex);
  const npage = Math.ceil(projects.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  // handle next page
  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  // handle previous page
  const prevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Change current page
  const changeCurPage = (index) => {
    setCurrentPage(index);
  };

  return (
    <div className="bg-white  rounded p-6 shadow-sm">
      {/* Projects heading */}
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-xl font-semibold mt-2 text-[#5D596C]">
            Projects
          </h4>
        </div>

        {/* Search box */}
        <div className="flex gap-4 items-center">
          <label htmlFor="search__project">Search:</label>
          <input
            type="text"
            id="search__project"
            className="input h-10 input-bordered inline-block w-full max-w-xs"
          />
        </div>
      </div>

      {/* Project list heading */}
      <hr className="my-4" />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="flex gap-8 -ml-6 items-center">
                <label>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary rounded-sm"
                  />
                </label>
                <span>NAME</span>
              </th>
              {/* <th></th> */}
              <th>LEADER</th>
              <th>TEAM</th>
            </tr>
          </thead>
          <tbody>
            {/* maping project for showing into table */}
            {projectData.map((project) => (
              <tr>
                <th>
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
                </th>
                <th className="flex gap-8 -ml-6 items-center">
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
                </th>
                {/* <td>
                
              </td> */}
                <td>{project.leader}</td>
                <td>
                  {project.team == 3 ? (
                    <div className="avatar-group -space-x-6">
                      <div className="avatar">
                        <div className="w-12">
                          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-12">
                          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-12">
                          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="avatar-group -space-x-6">
                      <div className="avatar">
                        <div className="w-12">
                          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-12">
                          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-12">
                          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-12">
                          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* pagination */}
        <div className="flex justify-between mt-6">
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
        </div>
      </div>
    </div>
  );
}
