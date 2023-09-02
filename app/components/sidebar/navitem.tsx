import React, { useState } from "react";
import { IconType } from "react-icons";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { usePathname } from "next/navigation";

interface NavItemProps {
  menu: {
    title: string;
    icon: JSX.Element;
    path: string;
    submenu?: boolean;
    submenuItems?: {
      subtitle: string;
    }[];
  };
  open: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ menu, open }) => {
  const currentpath = usePathname();
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleArrowClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the click event from propagating to the parent link
    e.preventDefault(); // Prevent the default link behavior
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <div className="relative" key={menu.path}>
      <>
        <Link
          href={menu.path}
          className={`group font-medium flex rounded-md p-3 cursor-pointer hover:bg-primary text-md items-center gap-x-4 ${
            currentpath === menu.path && "bg-primary"
          }`}
        >
          <span
            className={`block float-left text-light_blue group-hover:text-white ${
              currentpath === menu.path && "text-white"
            }`}
          >
            {menu.icon}
          </span>
          <span
            className={`${
              !open && "hidden"
            } origin-left flex-1 duration-200 text-light_blue group-hover:text-white ${
              currentpath === menu.path && "text-white"
            }`}
          >
            {menu.title}
          </span>
          {menu.submenu && (
            <IoIosArrowForward
              size={18}
              className={`${
                submenuOpen && "rotate-90"
              } text-light_blue group-hover:text-white cursor-pointer`}
              onClick={(e) => handleArrowClick(e)} // Toggle the submenu visibility
            />
          )}
        </Link>
        {menu.submenu && submenuOpen && (
          <ul>
            {menu.submenuItems?.map((submenuItem, index) => {
              return (
                <li
                  key={index}
                  className={`flex rounded-md p-2 cursor-pointer hover:bg-primary text-md items-center text-light_blue hover:text-white gap-x-4 px-5`}
                >
                  {submenuItem.subtitle}
                </li>
              );
            })}
          </ul>
        )}
      </>
    </div>
  );
};

export default NavItem;
