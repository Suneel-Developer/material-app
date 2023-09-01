"use client";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

interface UserPopupProps {
  onClose: () => void;
}

const UploadPopup: React.FC<UserPopupProps> = ({ onClose }) => {
  return (
    <div className=" absolute top-0 left-0 bottom-0 h-screen w-full inset-0 flex items-center justify-center z-50 bg-popup_bg">
      <div className="bg-white p-5 w-2/6 shadow-box_shadow rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-dark_blue">Add User</h2>
          <RxCross2 className="text-lg cursor-pointer" onClick={onClose} />
        </div>

        <div className="flex justify-between gap-3  w-full py-5 items-center ">
          <div className="text-dark_border w-full">
            <label htmlFor="title" className="block font-normal text-base py-3">
              From Folder:
            </label>

            <select className=" placeholder:text-dark_border resize-none rounded-md placeholder:text-sm border border-dark_border outline-none w-full	px-2 py-3 text-dark_border">
              <option value="option1">Browse File</option>
              <option value="option1">Type</option>
              <option value="option1">Type</option>
            </select>
          </div>

          {/* hr line  */}
          <div className=" flex items-center justify-center px-1">
            <div className="h-20 bg-dark_border w-px"></div>
          </div>

          {/* Folder Input */}
          <div className="text-dark_border w-full">
            <label htmlFor="title" className="block font-normal text-base py-3">
              To Folder:
            </label>

            <select className=" placeholder:text-dark_border resize-none rounded-md placeholder:text-sm border border-dark_border outline-none w-full	px-2 py-3 text-dark_border">
              <option value="option1">Browse File</option>
              <option value="option1">Type</option>
              <option value="option1">Type</option>
            </select>
          </div>
        </div>

        <div className="flex my-3 gap-3">
          <button className="bg-primary rounded-md text-white text-xs py-3 px-5">
            Submit
          </button>
          <button className="text-light_blue font-semibold text-xs mr-3" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPopup;
