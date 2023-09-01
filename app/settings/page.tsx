"use client";
import React, { useState } from "react";
import NavbarLayout from "../components/NavbarLayout";
import Table from "./Table";
import { FiPlus } from "react-icons/fi";
import UserPopup from "./Popup";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";

const Settings: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <NavbarLayout>
      <div className="px-2 md:px-7">
        <Breadcrumb pageName="Settings" />
        <div className="flex my-3 gap-3">
          <button className="bg-light_orange rounded-md text-white text-sm py-3 px-6">
            Export Data
          </button>
          <button className="bg-primary rounded-md flex justify-center gap-2 items-center text-white text-sm py-3 px-6" onClick={openPopup}>
            <FiPlus /> Add Users
          </button>
          {isPopupOpen && <UserPopup onClose={closePopup} />}
        </div>
        <div className="my-3">
          <Table />
        </div>
      </div>
    </NavbarLayout>
  );
};

export default Settings;
