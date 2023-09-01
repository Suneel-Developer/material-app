"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Button from "../components/Button";

interface UserPopupProps {
  onClose: () => void;
}

const UserPopup: React.FC<UserPopupProps> = ({ onClose }) => {
  return (
    <div className=" absolute top-0 left-0 bottom-0 h-screen w-full inset-0 flex items-center justify-center z-50 bg-popup_bg">
      <div className="bg-white rounded-lg py-3 w-3/5">
        <div className="flex justify-between items-center p-3 border-b border-light_grey">
          <h2 className="text-xl font-semibold text-dark_blue">Add User</h2>
          <RxCross2 className="text-lg cursor-pointer" onClick={onClose} />
        </div>

        <div className="p-3 mb-3">
          <input
            type="text"
            placeholder="User ID *"
            className="w-full rounded-lg border border-dark_border font-xs font-normal p-1 placeholder:text-xs "
          />
          <div className="w-full flex gap-3 my-3">
            <input
              type="text"
              placeholder="First Name *"
              className="w-full rounded-lg border border-dark_border font-xs font-normal p-1 placeholder:text-xs "
            />
            <input
              type="text"
              placeholder="First Name *"
              className="w-full rounded-lg border border-dark_border font-xs font-normal p-1 placeholder:text-xs "
            />
          </div>

          <div className="w-full flex gap-3 my-3">
            <input
              type="email"
              placeholder="Email ID *"
              className="w-full rounded-lg border border-dark_border font-xs font-normal p-1 placeholder:text-xs "
            />
            <input
              type="text"
              placeholder="Mobile No"
              className="w-full rounded-lg border border-dark_border font-xs font-normal p-1 placeholder:text-xs "
            />
            <input
              type="number"
              placeholder="Select Role Type"
              className="w-full rounded-lg border border-dark_border font-xs font-normal p-1 placeholder:text-xs "
            />
          </div>

          <div className="w-full flex gap-3 my-3">
            <input
              type="text"
              placeholder="Username *"
              className="w-full rounded-lg border border-dark_border font-xs font-normal p-1 placeholder:text-xs "
            />
            <input
              type="password"
              placeholder="Password*"
              className="w-full rounded-lg border border-dark_border font-xs font-normal p-1 placeholder:text-xs "
            />
            <input
              type="password"
              placeholder="Confrim Password*"
              className="w-full rounded-lg border border-dark_border font-xs font-normal p-1 placeholder:text-xs "
            />
          </div>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left p-4 bg-white">
            <thead className="text-sm text-dark_blue bg-light_grey ">
              <tr>
                <th className="px-6 py-4 font-normal">Module Permission</th>
                <th className="text-center py-4 font-normal">Read</th>
                <th className="text-center py-4 font-normal">Write</th>
                <th className="text-center py-4 font-normal">Delete</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-light_grey">
                <td className="px-6 py-4 font-normal text-xs text-dark_blue whitespace-nowrap ">
                  Super Admin
                </td>
                <td className="px-6 text-center whitespace-nowrap ">
                  <input type="checkbox" className="bg-dark_blue" />
                </td>
                <td className="py-3 text-center whitespace-nowrap ">
                  <input type="checkbox" />
                </td>
                <td className="py-3 text-center whitespace-nowrap ">
                  <input type="checkbox" />
                </td>
              </tr>

              <tr className="border-b border-light_grey">
                <td className="px-6 py-4 font-normal text-xs text-dark_blue whitespace-nowrap ">
                  Super Admin
                </td>
                <td className="px-6 text-center whitespace-nowrap ">
                  <input type="checkbox" />
                </td>
                <td className="py-3 text-center whitespace-nowrap ">
                  <input type="checkbox" />
                </td>
                <td className="py-3 text-center whitespace-nowrap ">
                  <input type="checkbox" />
                </td>
              </tr>

              <tr className="border-b border-light_grey">
                <td className="px-6 py-4 font-normal text-xs text-dark_blue whitespace-nowrap ">
                  Super Admin
                </td>
                <td className="px-6 text-center whitespace-nowrap ">
                  <input type="checkbox" />
                </td>
                <td className="py-3 text-center whitespace-nowrap ">
                  <input type="checkbox" />
                </td>
                <td className="py-3 text-center whitespace-nowrap ">
                  <input type="checkbox" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-end my-3 gap-3">
          <button className="bg-primary rounded-md text-white text-xs py-2 px-4">Add User</button>
          <button
            className="text-light_blue text-xs mr-3"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPopup;
