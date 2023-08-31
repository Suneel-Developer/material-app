"use client"
import React, { useState } from "react";

interface UserPopupProps {
  onClose: () => void;
}

const UserPopup: React.FC<UserPopupProps> = ({ onClose }) => {
  return (
    <div className=" absolute top-0 left-0 bottom-0 h-screen w-full inset-0 flex items-center justify-center z-50 bg-popup_bg">
      <div className="bg-white rounded-lg p-4 w-3/5">
        <h2 className="text-xl font-semibold mb-4">Add User</h2>
        {/* Add user form elements here */}
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700 mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="bg-blue-500  px-4 py-2 rounded">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPopup;
