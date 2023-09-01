import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { FiPlus } from "react-icons/fi";

const Download = () => {
  return (
    <div>
      <table className="border border-dark_border text-dark_border font-normal">
        <thead>
          <tr className="border-b border-dark_border">
            <td className="py-3 px-4 border-r border-dark_border">
              <input type="checkbox" />
            </td>
            <td className="p-3 text-base text-center ">Folder</td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-dark_border">
            <td className="py-3 px-4 border-r border-dark_border">
              <input type="checkbox" />
            </td>
            <td className="p-3 text-base flex justify-between gap-10 ">
              C / User
              <div className="flex items-center gap-2 text-lg">
                <MdOutlineEdit />
                <RiDeleteBinLine className="flex items-center gap-2 text-error" />
              </div>
            </td>
          </tr>
          <tr className="border-b border-dark_border">
            <td className="py-3 px-4 border-r border-dark_border">
              <input type="checkbox" />
            </td>
            <td className="p-3 text-base flex justify-between gap-10 ">
              C / User
              <div className="flex items-center gap-2 text-lg">
                <MdOutlineEdit />
                <RiDeleteBinLine className="flex items-center gap-2 text-error" />
              </div>
            </td>
          </tr>
          <tr className="border-b border-dark_border">
            <td className="py-3 px-4 border-r border-dark_border">
              <input type="checkbox" />
            </td>
            <td className="p-3 text-base flex justify-between gap-10 ">
              C / User
              <div className="flex items-center gap-2 text-lg">
                <MdOutlineEdit />
                <RiDeleteBinLine className="flex items-center gap-2 text-error" />
              </div>
            </td>
          </tr>
          <tr className="border-b border-dark_border">
            <td className="py-3 px-4 border-r border-dark_border">
              <input type="checkbox" />
            </td>
            <td className="p-3 text-base flex justify-between gap-10 ">
              C / User
              <div className="flex items-center gap-2 text-lg">
                <MdOutlineEdit />
                <RiDeleteBinLine className="flex items-center gap-2 text-error" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Add and Remove  */}
      <div className="mt-3">
        <input type="file" id="file" className="hidden" />
        <label
          htmlFor="file"
          className="cursor-pointer flex items-center gap-1 text-primary text-sm font-medium"
        >
          <FiPlus />
          Add
        </label>
      </div>
    </div>
  );
};

export default Download;
