import React from "react";
import { BiSolidChevronRight } from "react-icons/bi";

const Overview = () => {
  return (
    <div>
      <div className="flex justify-between items-center rounded-lg bg-primary p-2 text-white">
        <div className="flex justify-between items-center gap-2  ">
          <img
            src="/images/Avatar.png"
            alt="Avater"
            className="w-12 rounded-full"
          />
          <div className="gap-2">
            <h2 className="text-xs font-bold">We released some new features</h2>
            <span className="text-xs font-normal">Check them out!</span>
          </div>
        </div>

        <div>
          <BiSolidChevronRight className="text-xl font-normal cursor-pointer" />
        </div>
      </div>

      <div className="bg-white rounded-lg p-2 mt-2 ">
        <div className="flex justify-between items-center border-b py-2 pb-5 border-light_grey w-3/4 mb-2">
          <div className="flex justify-between items-center gap-2">
            <img
              src="/images/Image.png"
              alt="Avater"
              className="w-12 rounded-full"
            />
            <div className="gap-2">
              <h2 className="text-xs font-normal flex flex-wrap text-light_blue">
                Hey Peter, we’ve got a new user research opportunity for you.
                Neil is looking for people like you.
              </h2>
              <span className="text-xs font-normal text-dark_blue">
                1 month ago
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-b py-2 pb-5 border-light_grey w-3/4 mb-2">
          <div className="flex justify-between items-center gap-2">
            <img
              src="/images/Image.png"
              alt="Avater"
              className="w-12 rounded-full"
            />
            <div className="gap-2">
              <h2 className="text-xs font-normal flex flex-wrap text-light_blue">
                Hey Peter, we’ve got a new user research opportunity for you.
                Neil is looking for people like you.
              </h2>
              <span className="text-xs font-normal text-dark_blue">
                1 month ago
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-b py-2 pb-5 border-light_grey w-3/4 mb-2">
          <div className="flex justify-between items-center gap-2">
            <img
              src="/images/Image.png"
              alt="Avater"
              className="w-12 rounded-full"
            />
            <div className="gap-2">
              <h2 className="text-xs font-normal flex flex-wrap text-light_blue">
                Hey Peter, we’ve got a new user research opportunity for you.
                Neil is looking for people like you.
              </h2>
              <span className="text-xs font-normal text-dark_blue">
                1 month ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
