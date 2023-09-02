"use client";
import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import NavbarLayout from "../components/NavbarLayout";
import Overview from "./Overview";
import { AiOutlineSetting } from "react-icons/ai";
import Link from "next/link";
import NotificationPopup from "./NotificationPopup";
import Card from "../dashboard/Card";
import BarChart from "../dashboard/BarChart";
import Source from "../dashboard/Source";
import TableOne from "../dashboard/TableOne";
import TableTwo from "../dashboard/TableTwo";
import LineChart from "./LineChart";
const Notification = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const [openTab, setOpenTab] = useState(1);
  return (
    <NavbarLayout>
      <div className="px-2 md:px-7">
        <Breadcrumb pageName="Notification" />

        {/* Notifications  */}
        <div className="bg-grey_bg p-2 py-4 md:md:w-4/5 rounded-2xl flex justify-between mb-4 items-center gap-2">
          <div className="flex items-center">
            <span className="text-xs">
              <b className="font-semibold"> 🔔 Turn on push notifications</b> to
              know when your video has been watched and interacted with.
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <button
              className="text-xs font-medium border border-dark_blue text-dark_blue rounded-2xl p-2"
              onClick={openPopup}
            >
              Allow push notifications
            </button>
            {isPopupOpen && <NotificationPopup onClose={closePopup} />}
            <Link href="#" className="text-xs font-semibold">
              Dismiss
            </Link>
          </div>
        </div>

        {/* Heading and Icon  */}
        <div className="flex justify-between items-center md:w-4/5 ">
          <h1 className=" text-dark_blue font-semibold text-2xl">
            Notification
          </h1>
          <AiOutlineSetting className="text-xl text-light_blue cursor-pointer " />
        </div>

        {/* Tabs  */}
        <div className="flex flex-wrap md:w-4/5 mt-3">
          <div className="w-full">
            <div className="text-center border-b border-light_blue">
              <ul className="flex flex-wrap -mb-px">
                <li className="mr-2">
                  <a
                    className={
                      "inline-block p-4 text-light_blue text-sm font-normal" +
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
                <li className="mr-2">
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
                <li className="mr-2">
                  <a
                    className={
                      "inline-block p-4 text-light_blue text-sm font-normal" +
                      (openTab === 3
                        ? "text-black_text font-semibold border-b-2 border-primary rounded-t-lg"
                        : "")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                  >
                    System Status
                  </a>
                </li>
              </ul>
            </div>

            <div className="relative flex flex-col mt-5 min-w-0 break-words">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <Overview />
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                Tabe2
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="grid grid-cols-1 md:grid-cols-3 py-4 gap-4">
                  <div className="md:col-span-2">
                    <LineChart title="Card Title" />
                  </div>
                  <div className="col-span-1">
                    <Source title="Source/Medium" />
                  </div>
                </div>

                <div className="grid grid-cols-1 py-4  gap-4">
                  <BarChart title="Card Title" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavbarLayout>
  );
};

export default Notification;
