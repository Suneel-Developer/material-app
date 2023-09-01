"use client";
import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import NavbarLayout from "../components/NavbarLayout";
import { FiPlus } from "react-icons/fi";
import Accordion from "../components/Accordion";

const NewJobs: React.FC = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <NavbarLayout>
      <div className="px-2 md:px-7">
        <Breadcrumb pageName="New Jobs" />

        {/* Box 01  */}
        <div className="flex justify-between gap-3 bg-white shadow-boxShadow p-3 w-4/5">
          <div className="w-full p-3 ">
            {/* Title  */}
            <div>
              <label
                htmlFor="title"
                className="block text-primary font-medium text-base pb-2"
              >
                Tittle:
              </label>
              <input
                type="text"
                placeholder="Tittle goes here"
                className=" placeholder:text-primary rounded-md placeholder:text-sm border border-primary	px-2 py-3 text-primary w-full"
              />
            </div>

            <div>
              <h1 className="text-dark_blue text-lg font-semibold	 my-4">
                Source
              </h1>

              {/* Host Name & Port Number */}
              <div className="w-full flex gap-3 text-dark_border mb-4">
                <div className="w-2/3">
                  <label
                    htmlFor="hostName"
                    className="block font-normal text-base pb-2"
                  >
                    Host Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Host Name:"
                    className=" rounded-md placeholder:text-sm border border-darK_border	px-2 py-3 w-full"
                  />
                </div>

                <div className="w-2/3 ">
                  <label
                    htmlFor="portnumber"
                    className="block font-normal text-base pb-2"
                  >
                    Port number:
                  </label>
                  <input
                    type="text"
                    className=" placeholder:text-darK_border rounded-md placeholder:text-sm border border-darK_border	px-2 py-3 text-darK_border w-full"
                  />
                </div>
              </div>

              {/* User Name & Password */}
              <div className="w-full flex gap-3 text-dark_border mb-4">
                <div className="w-2/3">
                  <label
                    htmlFor="userName"
                    className="block font-normal text-base pb-2"
                  >
                    User Name:
                  </label>
                  <input
                    type="text"
                    placeholder="User Name:"
                    className=" rounded-md placeholder:text-sm border border-darK_border	px-2 py-3 w-full"
                  />
                </div>

                <div className="w-2/3 ">
                  <label
                    htmlFor="password"
                    className="block font-normal text-base pb-2"
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    className=" placeholder:text-darK_border rounded-md placeholder:text-sm border border-darK_border	px-2 py-3 text-darK_border w-full"
                  />
                </div>
              </div>

              {/* SSH Key */}
              <div className="w-full text-dark_border mb-4">
                <label
                  htmlFor="key"
                  className="block font-normal text-base pb-2"
                >
                  SSH Key:
                </label>
                <input
                  type="text"
                  placeholder="SSH Key"
                  className=" rounded-md placeholder:text-sm border border-darK_border	px-2 py-3 w-full"
                />
              </div>

              {/* input type file */}
              <div className="flex items-center justify-start gap-3">
                <div>
                  <input type="file" id="file" className="hidden" />
                  <label
                    htmlFor="file"
                    className="cursor-pointer flex items-center gap-1 text-primary text-sm font-medium"
                  >
                    <FiPlus />
                    Browse Folder Location
                  </label>
                </div>

                <span className="text-primary text-lg font-medium">-</span>

                <div>
                  <input type="file" id="file" className="hidden" />
                  <label
                    htmlFor="file"
                    className="cursor-pointer flex items-center gap-1 text-primary text-sm font-medium"
                  >
                    <FiPlus />
                    Add Folder
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* hr line  */}
          <div className=" flex items-center px-3">
            <div className="h-80 bg-dark_border w-px"></div>
          </div>

          {/* Folder Input */}
          <div className="w-full p-3">
            <h1 className="text-dark_blue text-lg font-semibold	 my-4">
              Download files to:
            </h1>

            <div className="text-dark_border">
              <label
                htmlFor="title"
                className="block font-normal text-base pb-2"
              >
                Folder:
              </label>

              <select className=" placeholder:text-dark_border resize-none rounded-md placeholder:text-sm border border-dark_border outline-none w-full	px-2 py-3 text-dark_border">
                <option value="option1">Browse File</option>
                <option value="option1">Type</option>
                <option value="option1">Type</option>
              </select>
            </div>

            {/* Add and Remove  */}
            <div className="flex items-center justify-start gap-4 mt-2">
              {/* Add Input File  */}
              <div>
                <input type="file" id="file" className="hidden" />
                <label
                  htmlFor="file"
                  className="cursor-pointer flex items-center gap-1 text-primary text-sm font-medium"
                >
                  <FiPlus />
                  Add
                </label>
              </div>

              {/*  Remove  */}
              <button className="border-none text-sm font-medium text-error">
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* Box 02  */}
        <div className="flex justify-between gap-3 bg-white shadow-boxShadow p-3 w-4/5 my-4">
          <div className="w-full p-3 ">
            <div>
              <h1 className="text-dark_blue text-lg font-semibold	 mb-4">
                Target
              </h1>

              {/* Host Name & Port Number */}
              <div className="w-full flex gap-3 text-dark_border mb-4">
                <div className="w-2/3">
                  <label
                    htmlFor="hostName"
                    className="block font-normal text-base pb-2"
                  >
                    Host Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Host Name:"
                    className=" rounded-md placeholder:text-sm border border-darK_border	px-2 py-3 w-full"
                  />
                </div>

                <div className="w-2/3 ">
                  <label
                    htmlFor="portnumber"
                    className="block font-normal text-base pb-2"
                  >
                    Port number:
                  </label>
                  <input
                    type="text"
                    className=" placeholder:text-darK_border rounded-md placeholder:text-sm border border-darK_border	px-2 py-3 text-darK_border w-full"
                  />
                </div>
              </div>

              {/* User Name & Password */}
              <div className="w-full flex gap-3 text-dark_border mb-4">
                <div className="w-2/3">
                  <label
                    htmlFor="userName"
                    className="block font-normal text-base pb-2"
                  >
                    User Name:
                  </label>
                  <input
                    type="text"
                    placeholder="User Name:"
                    className=" rounded-md placeholder:text-sm border border-darK_border	px-2 py-3 w-full"
                  />
                </div>

                <div className="w-2/3 ">
                  <label
                    htmlFor="password"
                    className="block font-normal text-base pb-2"
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    className=" placeholder:text-darK_border rounded-md placeholder:text-sm border border-darK_border	px-2 py-3 text-darK_border w-full"
                  />
                </div>
              </div>

              {/* SSH Key */}
              <div className="w-full text-dark_border mb-4">
                <label
                  htmlFor="key"
                  className="block font-normal text-base pb-2"
                >
                  SSH Key:
                </label>
                <input
                  type="text"
                  placeholder="SSH Key"
                  className=" rounded-md placeholder:text-sm border border-darK_border	px-2 py-3 w-full"
                />
              </div>

              {/* input type file */}
              <div className="flex items-center justify-start gap-3">
                <div>
                  <input type="file" id="file" className="hidden" />
                  <label
                    htmlFor="file"
                    className="cursor-pointer flex items-center gap-1 text-primary text-sm font-medium"
                  >
                    <FiPlus />
                    Browse Folder Location
                  </label>
                </div>

                <span className="text-primary text-lg font-medium">-</span>

                <div>
                  <input type="file" id="file" className="hidden" />
                  <label
                    htmlFor="file"
                    className="cursor-pointer flex items-center gap-1 text-primary text-sm font-medium"
                  >
                    <FiPlus />
                    Add Folder
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* hr line  */}
          <div className=" flex items-center px-3">
            <div className="h-80 bg-dark_border w-px"></div>
          </div>

          {/* Folder Input */}
          <div className="w-full p-3">
            <h1 className="text-dark_blue text-lg font-semibold	 mb-4">
              Upload files to:
            </h1>

            {/* Tabs  */}
              <div className="w-full">
                <div className="text-center border-b border-light_blue">
                  <ul className="flex flex-wrap -mb-px">
                    <li>
                      <a
                        className={
                          "inline-block pl-0 p-4 text-light_blue text-sm font-normal" +
                          (openTab === 1
                            ? "text-black_text font-semibold border-b-2 border-primary rounded-t-lg"
                            : "")
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab(1);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                      >
                        Overview
                      </a>
                    </li>
                    <li>
                      <a
                        className={
                          "inline-block p-4 text-light_blue text-sm font-normal" +
                          (openTab === 2
                            ? "text-black_text font-semibold border-b-2 border-primary rounded-t-lg"
                            : "")
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab(2);
                        }}
                        data-toggle="tab"
                        href="#link2"
                        role="tablist"
                      >
                        Shared with me
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="relative flex flex-col mt-5 min-w-0 break-words">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <div className="text-dark_border">
                      <label
                        htmlFor="title"
                        className="block font-normal text-base pb-2"
                      >
                        Folder:
                      </label>

                      <select className=" placeholder:text-dark_border resize-none rounded-md placeholder:text-sm border border-dark_border outline-none w-full	px-2 py-3 text-dark_border">
                        <option value="option1">Browse File</option>
                        <option value="option1">Type</option>
                        <option value="option1">Type</option>
                      </select>
                    </div>

                    {/* Add and Remove  */}
                    <div className="flex items-center justify-start gap-4 mt-2">
                      {/* Add Input File  */}
                      <div>
                        <input type="file" id="file" className="hidden" />
                        <label
                          htmlFor="file"
                          className="cursor-pointer flex items-center gap-1 text-primary text-sm font-medium"
                        >
                          <FiPlus />
                          Add
                        </label>
                      </div>

                      {/*  Remove  */}
                      <button className="border-none text-sm font-medium text-error">
                        Remove
                      </button>
                    </div>
                  </div>

                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    Tabe2
                  </div>
                </div>
              </div>
          </div>
        </div>

        {/* Accordion  */}
        <div className="flex justify-between gap-3 bg-white shadow-boxShadow p-3 w-4/5 my-4">
          <Accordion title="Move file to:">
            {/* file name */}
            <div className="w-1/2 text-dark_border mb-4">
              <input
                type="text"
                placeholder="file name"
                className=" rounded-md placeholder:text-sm border border-darK_border	px-2 py-3 w-full"
              />
            </div>

            {/* input type file */}
            <div className="flex items-center justify-start gap-3">
              <div>
                <input type="file" id="file" className="hidden" />
                <label
                  htmlFor="file"
                  className="cursor-pointer flex items-center gap-1 text-primary text-sm font-medium"
                >
                  <FiPlus />
                  Browse current file location
                </label>
              </div>

              <span className="text-primary text-lg font-medium">-</span>

              <div>
                <input type="file" id="file" className="hidden" />
                <label
                  htmlFor="file"
                  className="cursor-pointer flex items-center gap-1 text-primary text-sm font-medium"
                >
                  <FiPlus />
                  Browse new file location
                </label>
              </div>
            </div>

            {/* Add and Remove  */}
            <div className="flex items-center justify-start gap-4 mt-2">
              {/* Add Input File  */}
              <div>
                <input type="file" id="file" className="hidden" />
                <label
                  htmlFor="file"
                  className="cursor-pointer flex items-center gap-1 text-primary text-sm font-medium"
                >
                  <FiPlus />
                  Add
                </label>
              </div>

              {/*  Remove  */}
              <button className="border-none text-sm font-medium text-error">
                Remove
              </button>
            </div>
          </Accordion>
        </div>
      </div>
    </NavbarLayout>
  );
};

export default NewJobs;
