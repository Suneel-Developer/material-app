"use client";
import React from "react";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import NavbarLayout from "../components/NavbarLayout";
import Accordion from "../components/Accordion";
import { FiPlus } from "react-icons/fi";

const Checking = () => {
  return (
    <NavbarLayout>
      <div className="px-2 md:px-7">
        <Breadcrumb pageName="Checking" />

        {/* Accordions 01  */}
        <div className="flex justify-between flex-col gap-3 bg-white shadow-boxShadow p-3 w-4/5 my-4">
          {/* Accordion 01 */}
          <Accordion title="From Archive Folder:">
            {/* Browse file Select Dropdown */}
            <div className="w-2/6 text-dark_border mb-4">
              <label className="block pb-2">From Current Folder:</label>
              <select className=" rounded-md placeholder:text-sm border border-darK_border outline-none	px-2 py-3 w-full">
                <option>Browse file</option>
                <option>Browse file</option>
                <option>Browse file</option>
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

            <div className="flex items-center text-xs gap-3 font-medium mt-2">
              <span className="text-primary text-sm font-medium">
                - If duplicate files are found continue with the flow
              </span>
              <Link href="#" className="text-error">
                Yes
              </Link>
              <span> / </span>
              <Link href="#">No</Link>
            </div>

            <div className="flex items-center text-xs gap-3 font-medium mt-2">
              <span className="text-primary text-sm font-medium">
                + Compress files (No folder)
              </span>
              <Link href="#" className="text-error">
                Yes
              </Link>
              <span> / </span>
              <Link href="#">No</Link>
            </div>
          </Accordion>

          {/* Accordion 02 */}
          <Accordion title="From Current Folder:">
            {/* Browse file Select Dropdown */}
            <div className=" text-dark_border mb-4">
              <label className="block pb-2">From Current Folder:</label>
              <div className="flex items-center gap-3">
                <select className="w-2/6 rounded-md placeholder:text-sm border border-darK_border outline-none px-2 py-3">
                  <option>Browse file</option>
                  <option>Browse file</option>
                  <option>Browse file</option>
                </select>

                {/* Add and Remove  */}
                <button className="bg-primary rounded-md py-3 px-6 font-semibold text-sm text-white">
                  Add
                </button>
                <button className="border border-error rounded-md py-3 px-6 font-semibold text-sm text-error">
                  Remove
                </button>
              </div>
            </div>
          </Accordion>

          {/* Accordion 03 */}
          <Accordion title="Archive files to">
            <h1 className="text-dark_blue font-medium text-lg py-3">
              Archive files to
            </h1>
            {/* Browse file Select Dropdown */}
            <div className=" text-dark_border mb-4">
              <label className="block pb-2">Folder location:</label>
              <select className="w-2/6 rounded-md placeholder:text-sm border border-darK_border outline-none px-2 py-3">
                <option>Browse file</option>
                <option>Browse file</option>
                <option>Browse file</option>
              </select>
            </div>
          </Accordion>

          {/* Accordion 04 */}
          <Accordion title="Clear folders olden than x days">
            <h1 className="text-dark_blue font-medium text-lg py-3">
              Clear folders olden than x days
            </h1>
            {/* Browse file Select Dropdown */}
            <div className=" text-dark_border mb-4">
              <label className="block pb-2">Folder:</label>
              <div className="flex items-center gap-3">
                <select className="w-2/6 rounded-md placeholder:text-sm border border-darK_border outline-none px-2 py-3">
                  <option>Browse file</option>
                  <option>Browse file</option>
                  <option>Browse file</option>
                </select>

                {/* Add  */}
                <button className="bg-primary rounded-md py-3 px-6 font-semibold text-sm text-white">
                  Add Folders
                </button>
              </div>
            </div>
          </Accordion>
        </div>

        {/* Accordion 02  */}
        <div className="flex justify-between flex-col gap-3 bg-white shadow-boxShadow p-3 w-4/5 my-4">
          {/* Accordion 01 */}
          <Accordion title="Running job">
            <h1 className="text-dark_blue font-medium text-lg py-3">
              Running job
            </h1>

            <div className="flex items-center text-xs gap-3 font-medium mt-2">
              <span className="text-primary text-sm font-medium">
                + Run job automatically:
              </span>
              <Link href="#" className="text-error">
                Yes
              </Link>
              <span> / </span>
              <Link href="#">No</Link>
              <span className="text-primary text-sm font-medium">
                (Schedule jobs or Manually)
              </span>
            </div>

            <div className="flex items-center text-xs gap-3 font-medium mt-2">
              <span className="text-primary text-sm font-medium">
                + Run job automatically from specific location:
              </span>
              <Link href="#" className="text-error">
                Yes
              </Link>
              <span> / </span>
              <Link href="#">No</Link>
            </div>
          </Accordion>

          {/* Accordion 02 */}
          <Accordion title="Delay automation">
            <h1 className="text-dark_blue font-medium text-lg py-3">
              Delay automation:{" "}
              <span className="text-base text-normal text-dark_border">
                x minutes
              </span>
            </h1>
            {/* Browse file Select Dropdown */}
            <div className=" text-dark_border mb-4">
              <label className="block pb-2">Select location (s):</label>
              <select className="w-2/6 rounded-md placeholder:text-sm border border-darK_border outline-none px-2 py-3">
                <option>Browse file</option>
                <option>Browse file</option>
                <option>Browse file</option>
              </select>
              <h1 className="text-dark_blue font-medium text-lg py-3">
                Run manually or schedule job
              </h1>
            </div>
          </Accordion>

          {/* Accordion 03 */}
          <Accordion title="Use data source">
            {/* Browse file Select Dropdown */}
            <div className="flex gap-3 text-dark_border mb-4">
              <div className="w-2/6">
                <label className="block pb-2">Variable file name:</label>
                <select className="w-full rounded-md placeholder:text-sm border border-darK_border outline-none px-2 py-3">
                  <option>Browse file</option>
                  <option>Browse file</option>
                  <option>Browse file</option>
                </select>
              </div>
              <div className="w-2/6">
                <label className="block pb-2">Move to folder:</label>
                <select className="w-full rounded-md placeholder:text-sm border border-darK_border outline-none px-2 py-3">
                  <option>Browse file</option>
                  <option>Browse file</option>
                  <option>Browse file</option>
                </select>
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

          {/* Accordion 04 */}
          <Accordion title="Check for duplicates">
            <Link href="#" className="text-primary underline">Check Doc,  documents</Link>
          </Accordion>
        </div>
      </div>
    </NavbarLayout>
  );
};

export default Checking;
