"use client";

import { IconType } from "react-icons";

interface NavItemProps {
  icon?: IconType;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label }) => {
  return (
    <div className="relative">
      <li
        className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-md items-center gap-x-4`}
      >
        {Icon && <Icon size={24} className="text-light_blue" />}
        <span className={`${!open && "hidden"} origin-left duration-200 text-light_blue`}>
          {label}
        </span>
      </li>
    </div>
  );
};

export default NavItem;
