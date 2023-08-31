"use client";
import React from "react";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import NavbarLayout from "../components/NavbarLayout";

const NewJobs: React.FC = () => {
  return (
    <NavbarLayout>
      <div className="px-2 md:px-7">
        <Breadcrumb pageName="New Jobs" />
        <div className="flex justify-between gap-3 bg-white shadow-boxShadow p-3 w-4/5">
          <div className="w-full p-3 ">
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
              <div className="w-full flex gap-3 text-darK_border">
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
                    placeholder="Port number"
                    className=" placeholder:text-darK_border rounded-md placeholder:text-sm border border-darK_border	px-2 py-3 text-darK_border w-full"
                  />
                </div>

              </div>
            </div>
          </div>

          <div className="h-72 bg-darK_border w-px"></div>

          <div className="w-full p-3">
            <div className="mt-7">
              <label
                htmlFor="title"
                className="block text-primary font-medium text-base pb-2"
              >
                Tittle:
              </label>
              <input
                type="text"
                placeholder="Tittle"
                className=" placeholder:text-primary rounded-md placeholder:text-sm border border-primary w-3/4	px-2 py-3 text-primary w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </NavbarLayout>
  );
};

export default NewJobs;
