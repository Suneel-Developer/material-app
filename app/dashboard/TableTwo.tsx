"use client";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import dynamic from "next/dynamic";

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div className="bg-white rounded">
      <div className="flex items-center justify-between p-4 pb-0">
        <p className="font-medium">{title}</p>
        <BsThreeDotsVertical />
      </div>

      <div className="relative flex flex-col w-full p-4 min-w-0 mb-0 break-words bg-white border-0 border-transparent border-solid  rounded-2xl bg-clip-border">
        <div className="flex-auto px-0 pt-0 pb-2">
          <div className="p-0 overflow-x-auto">
            <table className="items-center w-full mb-0 align-top border-dark_grey ">
              <thead className="align-bottom">
                <tr>
                  <th className="py-3 font-medium text-left bg-transparent border-b border-dark_grey  border-b-solid tracking-none whitespace-nowra">
                  Name
                  </th>
                  <th className="py-3 font-medium text-left bg-transparent border-b border-dark_grey  border-b-solid tracking-none whitespace-nowra">
                  Start Date
                  </th>
                  <th className="py-3 font-medium text-left bg-transparent border-b border-dark_grey  border-b-solid tracking-none whitespace-nowra">
                  Start Date
                  </th>
                  <th className="py-3 font-medium text-left bg-transparent border-b border-dark_grey  border-b-solid tracking-none whitespace-nowra">
                  State
                  </th>
                  <th className="py-3 font-medium text-left bg-transparent border-b border-dark_grey  border-b-solid tracking-none whitespace-nowra">
                  Asignee
                  </th>
                </tr>
              </thead>
              <tbody>
                {[0, 1, 2, 3, 4, 5].map((v, i) => {
                  return (
                    <tr>
                      <td className="py-3  align-middle bg-transparent border-b  border-dark_grey whitespace-nowrap ">
                        <span className=" leading-tight ">Project Aurora</span>
                      </td>
                      <td className="py-3  align-middle bg-transparent border-b border-dark_grey whitespace-nowrap ">
                        <span className=" leading-tight ">01/01/2019</span>
                      </td>
                      <td className="py-3  align-middle bg-transparent border-b border-dark_grey whitespace-nowrap ">
                        <span className=" leading-tight ">31/06/2019</span>
                      </td>
                      <td className="py-3  align-middle bg-transparent border-b border-dark_grey whitespace-nowrap ">
                        <span className=" leading-tight text-sm bg-primary text-white p-1 rounded-full">Done</span>
                      </td>
                      <td className="py-3  align-middle bg-transparent border-b border-dark_grey whitespace-nowrap ">
                        <span className=" leading-tight ">James Dalton </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
