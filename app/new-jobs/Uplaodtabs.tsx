"use client";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

const UplaodTabs = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
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
              From folder:
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
              To folder:
            </a>
          </li>
        </ul>
      </div>

      <div className="relative flex flex-col mt-5 min-w-0 break-words">
        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
          <div className="text-dark_border">
            <label htmlFor="title" className="block font-normal text-base pb-2">
              Folder:
            </label>

            <select className=" placeholder:text-dark_border resize-none rounded-md placeholder:text-sm border border-dark_border outline-none w-full	px-2 py-3 text-dark_border">
              <option value="option1">Browse File</option>
              <option value="option1">Type</option>
              <option value="option1">Type</option>
            </select>
          </div>

          <div className="flex items-center justify-start gap-4 mt-2">
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

            <button className="border-none text-sm font-medium text-error">
              Remove
            </button>
          </div>
        </div>

        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
          <div className="text-dark_border">
            <label htmlFor="title" className="block font-normal text-base pb-2">
              To Folder:
            </label>

            <input className=" placeholder:text-dark_border resize-none rounded-md placeholder:text-sm border border-dark_border outline-none w-full	px-2 py-3 text-dark_border" />
          </div>

          {/* input type file */}
          <div className="flex items-center justify-start gap-3 mt-2">
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
    </div>
  );
};

export default UplaodTabs;
