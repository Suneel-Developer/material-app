"use client";
import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import NavbarLayout from "../components/NavbarLayout";
import { FiPlus } from "react-icons/fi";
import Accordion from "../components/Accordion";
import Upload from "./Upload";
import UplaodTabs from "./Uplaodtabs";
import DownloadTable from "./Downloadtable";
import Downlaod from "./downlaod";
import UploadPopup from "./UploadPopup";
import InputOutline from "../components/inputs/InputOutline";
import TextArea from "../components/inputs/TextArea";
import Label from "../components/Label";
const NewJobs: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [downloadTo, setDownloadTo] = useState(false);
  const [uploadTo, setUploadTo] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleChangeDownload = () => {
    setDownloadTo(true);
  };

  const handleChangeUpload = () => {
    setUploadTo(true);
  };
  return (
    <NavbarLayout>
      <div className="px-2 md:px-7">
        <Breadcrumb pageName="New Jobs" />

        {/* Box 01  */}
        <div className="flex justify-between gap-3 bg-white shadow-boxShadow p-3 w-4/5">
          <div className="w-full p-3 ">
            {/* Title  */}
            <div>
              <Label text="Title" primary />
              <InputOutline
                id="tittle"
                label="Tittle goes here"
                type="text"
                piramary
              />
            </div>

            <div>
              <h1 className="text-dark_blue text-lg font-semibold	 my-4">
                Source
              </h1>

              {/* Host Name & Port Number */}
              <div className="w-full flex gap-3 text-dark_border mb-4">
                <div className="w-2/3">
                  <Label text="Host Name:" />
                  <InputOutline id="tittle" label="Host Name:" type="text" />
                </div>

                <div className="w-2/3 ">
                  <Label text="Port number:" />
                  <InputOutline id="tittle" label="Port number" type="text" />
                </div>
              </div>

              {/* User Name & Password */}
              <div className="w-full flex gap-3 text-dark_border mb-4">
                <div className="w-2/3">
                  <Label text="User Name:" />
                  <InputOutline id="tittle" label="User Name" type="text" />
                </div>

                <div className="w-2/3 ">
                  <Label text="Password:" />
                  <InputOutline id="tittle" label="Password" type="password" />
                </div>
              </div>

              {/* SSH Key */}
              <div className="w-full text-dark_border mb-4">
                <Label text="SSH Key:" />
                <InputOutline id="tittle" label="SSH Key" type="text" />
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
                  <h2
                    className="cursor-pointer flex items-center gap-1 text-primary text-sm font-medium"
                    onClick={openPopup}
                  >
                    <FiPlus />
                    Add Folder
                  </h2>
                  {isPopupOpen && <UploadPopup onClose={closePopup} />}
                </div>
              </div>
            </div>
          </div>

          {/* hr line  */}
          <div className=" flex items-center px-3">
            <div className="h-80 bg-dark_border w-px"></div>
          </div>

          {/* Folder Input */}
          <div className="w-full p-3 flex flex-col items-center">
            <h1 className="text-dark_blue text-lg font-semibold	 my-4">
              Download files to:
            </h1>
            {downloadTo ? (
              <DownloadTable />
            ) : (
              <Downlaod onChange={() => handleChangeDownload()} />
            )}
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
                  <Label text="Host Name:" />
                  <InputOutline id="tittle" label="Host Name:" type="text" />
                </div>

                <div className="w-2/3 ">
                  <Label text="Port number:" />
                  <InputOutline id="tittle" label="Port number" type="text" />
                </div>
              </div>

              {/* User Name & Password */}
              <div className="w-full flex gap-3 text-dark_border mb-4">
                <div className="w-2/3">
                  <Label text="User Name:" />
                  <InputOutline id="tittle" label="User Name" type="text" />
                </div>

                <div className="w-2/3 ">
                  <Label text="Password:" />
                  <InputOutline id="tittle" label="Password" type="password" />
                </div>
              </div>

              {/* SSH Key */}
              <div className="w-full text-dark_border mb-4">
                <Label text="SSH Key:" />
                <InputOutline id="tittle" label="SSH Key" type="text" />
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

            {uploadTo ? (
              <Upload />
            ) : (
              <UplaodTabs onChange={() => handleChangeUpload()} />
            )}
             
          </div>
        </div>

        {/* Accordion  */}
        <div className="flex justify-between flex-col gap-3 bg-white shadow-boxShadow p-3 w-4/5 my-4">
          <Accordion title="Change file:">
            {/* file name */}
            <div className="w-1/2 text-dark_border mb-4">
              <InputOutline id="filename" label="File Name" type="text" />
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
