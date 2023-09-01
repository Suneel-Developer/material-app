"use client";
import Link from "next/link";

interface UserPopupProps {
  onClose: () => void;
}

const NotificationPopup: React.FC<UserPopupProps> = ({ onClose }) => {
  return (
    <div className=" absolute top-0 left-0 bottom-0 h-screen w-full inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-5 w-3/5 shadow-box_shadow">
        <h2 className="text-base font-medium text-dark_blue">
          Send email notifications if transfer:
        </h2>

        <div className="my-3 flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <input type="radio" id="option1" name="radioGroup" />
            <label
              htmlFor="option1"
              className=" font-medium text-sm text-light_blue"
            >
              Fails
            </label>
          </div>

          <div className="flex gap-3 items-center">
            <input type="radio" id="option1" name="radioGroup" />
            <label
              htmlFor="option1"
              className=" font-medium text-sm text-light_blue"
            >
              Succeed
            </label>
          </div>

          <div className="flex gap-3 items-center">
            <input type="radio" id="option1" name="radioGroup" />
            <label
              htmlFor="option1"
              className=" font-medium text-sm text-light_blue"
            >
              All of the above
            </label>
          </div>
        </div>

        <div className=" mt-5 gap-3">
          <h2 className="text-base font-normal text-dark_blue py-2">
            Add email address:
          </h2>
          <input
            type="email"
            placeholder="demo@gmail.com"
            className="text-dark_blue text-sm font-normal p-2 rounded-md border border-light_blue w-2/5"
          />
          <div className="flex items-center text-sm gap-3 mt-3 font-medium">
            <Link href="#" className="text-primary">
              Log all the interaction
            </Link>
            <Link href="#" className="text-error">
              Yes
            </Link>
            <span> / </span>
            <Link href="#" onClick={onClose}>
              No
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NotificationPopup;
