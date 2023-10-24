"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  // const [toggleMenu, setToggleMenu] = React.useState(false)
  const pathname = usePathname();
  const getPath = pathname.split("/")[pathname.split("/").length - 1];

  return (
    <div id="sidebar" className="fixed shadow-lg top-0 bottom-0 w-64 z-50 ">
      <div className="flex relative px-3 sticky top-0 bg-white z-50">
        <h3 className="text-[#5d596c] text-2xl font-semibold p-4">
          Analyti<span className="text-[#00A76F]">co</span>
        </h3>
      </div>

      {/* Navbar */}
      <nav
        className="fixed top-[62px] bottom-0 w-64 overflow-y-auto "
      >
        <ul className="menu menu-md w-full">
          {/* Basic dashboard items */}
          <li className="pb-2 text-[#6f6b7d]">
            <details open>
              <summary className="text-[16px] font-normal ">
                {/* fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5" */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  class="w-[23px] h-[23px]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

                <div className="flex justify-between">
                  <span>Dashboard</span>
                  <span className="bg-[#7367F0] text-white px-[12px] py-[1px] mr-2 rounded-full text-sm">
                    3
                  </span>
                </div>
              </summary>
              <ul className="ml-2">
                <li>
                  <Link
                    href="/dashboard"
                    className={`text-[16px] ${
                      getPath == "dashboard" ? "sidebar__active" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className={`w-2 h-2 ${
                        getPath == "dashboard" ? "text-white" : ""
                      }`}
                    >
                      <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                    </svg>
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/crm"
                    className={`text-[15px] ${
                      getPath == "crm" ? "sidebar__active" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className={`w-2 h-2 ${
                        getPath == "crm" ? "text-white" : ""
                      }`}
                    >
                      <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                    </svg>
                    CRM
                  </Link>
                </li>
              </ul>
            </details>
          </li>

          {/* eCommerce menu and submenus */}
          <li className="pb-2 text-[#6f6b7d]">
            <details>
              <summary className="text-[16px] font-normal ">
                {/* fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5" */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  class="w-[23px] h-[23px]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                <div className="flex justify-between">
                  <span>eCommerce</span>
                  {/* <span className="bg-[#7367F0] text-white px-[12px] py-[1px] mr-2 rounded-full text-sm">
                    3
                  </span> */}
                </div>
              </summary>
              <ul className="ml-2">
                <li>
                  <Link
                    href="/dashboard"
                    className={`text-[16px] ${
                      getPath == "" ? "sidebar__active" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className={`w-2 h-2 ${
                        getPath == "" ? "text-white" : ""
                      }`}
                    >
                      <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                    </svg>
                    Dahsboard
                  </Link>
                </li>

                {/* ----------------------------------------------Products with submenus------------------------------------------ */}
                <li className="pb-2 text-[#6f6b7d]">
                  <details>
                    <summary className="text-[16px] font-normal ">
                      <div className="flex items-center justify-between gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className={`w-2 h-2 ${
                            getPath == "" ? "text-white" : ""
                          }`}
                        >
                          <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                        </svg>
                        <span>Products</span>
                      </div>
                    </summary>
                    <ul className="ml-2">
                      <li>
                        <Link
                          href="/dashboard"
                          className={`text-[16px] ${
                            getPath == "" ? "sidebar__active" : ""
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            className={`w-2 h-2 ${
                              getPath == "product-list" ? "text-white" : ""
                            }`}
                          >
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                          </svg>
                          Products List
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dashboard/crm"
                          className={`text-[15px] ${
                            getPath == "add-product" ? "sidebar__active" : ""
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            className={`w-2 h-2 ${
                              getPath == "add-product" ? "text-white" : ""
                            }`}
                          >
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                          </svg>
                          Add Product
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dashboard/crm"
                          className={`text-[15px] ${
                            getPath == "category-list" ? "sidebar__active" : ""
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            className={`w-2 h-2 ${
                              getPath == "crm" ? "text-white" : ""
                            }`}
                          >
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                          </svg>
                          Category List
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>

          {/* Apps & and pages */}
          <h4 className="pl-4 pt-6 pb-3 small uppercase text-[#93909e]">
            APPS & PAGES
          </h4>
          <li className="pb-2 text-[#6f6b7d]">
            <details>
              <summary className="text-[16px] font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </svg>
                Dashboard
              </summary>
              <ul>
                <li>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                    Project-final.psd
                  </a>
                </li>
                <li>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                    Project-final-2.psd
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li className="pb-2 text-[#6f6b7d]">
            <details>
              <summary className="text-[16px] font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </svg>
                Layout
              </summary>
              <ul>
                <li>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                    Project-final.psd
                  </a>
                </li>
                <li>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                    Project-final-2.psd
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li className="pb-2 text-[#6f6b7d]">
            <details>
              <summary className="text-[16px] font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </svg>
                Font Pages
              </summary>
              <ul>
                <li>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                    Project-final.psd
                  </a>
                </li>
                <li>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                    Project-final-2.psd
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
    </div>
  );
}
