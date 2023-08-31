import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

const Table = () => {
  return (
    <div className="relative overflow-x-auto">
      <h1 className="w-full p-3 text-dark_blue text-base font-semibold bg-white">List Users</h1>
      <table className="w-full text-sm text-left p-4">
        <thead className="text-base text-dark_blue bg-light_grey ">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium">
              Name
            </th>
            <th scope="col" className="px-6 py-4  font-medium">
              Role
            </th>
            <th scope="col" className="px-6 py-4  font-medium">
              Create Date
            </th>
            <th scope="col" className="px-6 py-4  font-medium">
              Locations
            </th>
            <th scope="col" className="px-6 py-4 text-end font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <td
              scope="row"
              className="px-6 py-4 font-medium whitespace-nowrap "
            >
              <h2 className="text-sm font-semibold pb-1">David Wagner</h2>
              <span className="text-light_blue text-xs">
                david_wagner@example.com
              </span>
            </td>
            <td className="py-3 align-middle bg-transparent whitespace-nowrap ">
              <span className=" px-3 py-1 leading-tight text-sm bg-primary text-white p-1 rounded">
                Super Admin
              </span>
            </td>
            <td className="px-6 py-4 text-xs font-normal text-dark_blue">
              24 Otc, 2015
            </td>
            <td className="px-6 py-4 text-xs font-normal text-dark_blue">
              Lorem Ipsum
            </td>
            <td className="px-6 py-4">
              <div className="flex justify-end gap-2 cursor-pointer">
                <span className="text-xl text-light_blue">
                  <BiEditAlt />
                </span>
                <span className="text-xl text-error">
                  <RiDeleteBinLine />
                </span>
              </div>
            </td>
          </tr>

          <tr className="bg-white border-b">
            <td
              scope="row"
              className="px-6 py-4 font-medium whitespace-nowrap "
            >
              <h2 className="text-sm font-semibold pb-1">Ina Hogan</h2>
              <span className="text-light_blue text-xs">
                david_wagner@example.com
              </span>
            </td>
            <td className="py-3 align-middle bg-transparent whitespace-nowrap ">
              <span className=" px-3 py-1 leading-tight text-sm bg-primary text-white p-1 rounded">
                HR Admin
              </span>
            </td>
            <td className="px-6 py-4 text-xs font-normal text-dark_blue">
              24 Otc, 2015
            </td>
            <td className="px-6 py-4 text-xs font-normal text-dark_blue">
              Lorem Ipsum
            </td>
            <td className="px-6 py-4">
              <div className="flex justify-end gap-2 cursor-pointer">
                <span className="text-xl text-light_blue">
                  <BiEditAlt />
                </span>
                <span className="text-xl text-error">
                  <RiDeleteBinLine />
                </span>
              </div>
            </td>
          </tr>

          <tr className="bg-white border-b">
            <td
              scope="row"
              className="px-6 py-4 font-medium whitespace-nowrap "
            >
              <h2 className="text-sm font-semibold pb-1">Devin Harmon</h2>
              <span className="text-light_blue text-xs">
                david_wagner@example.com
              </span>
            </td>
            <td className="py-3 align-middle bg-transparent border-b  whitespace-nowrap ">
              <span className=" px-3 py-1 leading-tight text-sm bg-primary text-white p-1 rounded">
                Super Admin
              </span>
            </td>
            <td className="px-6 py-4 text-xs font-normal text-dark_blue">
              24 Otc, 2015
            </td>
            <td className="px-6 py-4 text-xs font-normal text-dark_blue">
              Lorem Ipsum
            </td>
            <td className="px-6 py-4">
              <div className="flex justify-end gap-2 cursor-pointer">
                <span className="text-xl text-light_blue">
                  <BiEditAlt />
                </span>
                <span className="text-xl text-error">
                  <RiDeleteBinLine />
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
