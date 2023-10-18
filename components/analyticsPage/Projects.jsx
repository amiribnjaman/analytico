import React from "react";
import { promises as fs } from "fs";

export default async function Projects() {
  // Fetch Projets data through the local file stystem
  const file = await fs.readFile(
    process.cwd() + "/public/data/projects.json",
    "utf8"
  );
  const projects = JSON.parse(file);

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
            {projects.map((project) => (
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
                <td>{project.team}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* pagination */}
        <div className="flex justify-between">
          <div></div>

          <div className="join">
            <button className="join-item btn">1</button>
            <button className="join-item btn btn-active">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button>
          </div>
        </div>
      </div>
    </div>
  );
}
