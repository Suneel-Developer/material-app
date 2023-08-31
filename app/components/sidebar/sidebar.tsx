"use client";
import { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { TbBuildingStore } from "react-icons/tb";
import {
  FiGrid,
  FiLayout,
  FiUser,
  FiBriefcase,
  FiCreditCard,
  FiCheckSquare,
  FiCalendar,
  FiSettings,
} from "react-icons/fi";
import NavItem from "./navitem";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const Menus = [
    { title: "Dashboard", icon: <FiGrid size={24} /> },
    { title: "Projects overview", icon: <FiBriefcase size={24} /> },
    { title: "Pages", icon: <FiLayout size={24} /> },
    {
      title: "Projects",
      icon: <RxDashboard size={24} />,
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },
    { title: "Profile", icon: <FiUser size={24} /> },
    { title: "Invoice", icon: <FiCreditCard size={24} /> },
    { title: "Tasks", icon: <FiCheckSquare size={24} />, spacing: true },
    { title: "Calendar", icon: <FiCalendar size={24} /> },
    { title: "Auth", icon: <TbBuildingStore size={24} /> },
    { title: "Settings", icon: <FiSettings size={24} /> },
  ];

  return (
    <div>
      <div className="flex bg-white">
        <div
          className={` ${
            open ? "w-72" : "w-20"
          } h-screen p-5  pt-8 relative duration-300`}
        >
          {/* <div>
            <img
              src="./src/assets/control.png"
              className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
              onClick={() => setOpen(!open)}
            />
          </div> */}
          <div className="flex gap-x-4 items-center">
            <div className="inline-flex gap-x-4 items-center">
              <img
                src="/images/logo.png"
                className={`cursor-pointer duration-500 ${
                  open && "rotate-[360deg]"
                }`}
              />
              <p
                className={`text-primary orign-left font-bold text-2xl duration-300 ${
                  !open && "scale-0"
                }`}
              >
                Material App
              </p>
            </div>
          </div>
          <ul className="pt-6">
            {Menus.map((menu, index) => {
              return (
                <>
                  <li
                    key={index}
                    className={`group font-medium flex rounded-md p-3 cursor-pointer hover:bg-primary text-md items-center gap-x-4`}
                  >
                    <span className="block float-left text-light_blue group-hover:text-white">
                      {menu.icon}
                    </span>
                    {/* {Icon && <Icon size={24} className="text-light_blue" />} */}
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left flex-1 duration-200 text-light_blue group-hover:text-white`}
                    >
                      {menu.title}
                    </span>
                    {menu.submenu && (
                      <IoIosArrowForward
                        size={18}
                        className={`${
                          submenuOpen && "rotate-90"
                        } text-light_blue group-hover:text-white`}
                        onClick={() => setSubmenuOpen(!submenuOpen)}
                      />
                    )}
                  </li>
                  {menu.submenu && submenuOpen && (
                    <ul>
                      {menu.submenuItems.map((submenuItem, index) => {
                        return (
                          <li
                            key={index}
                            className={`flex rounded-md p-2 cursor-pointer hover:bg-primary text-md items-center text-light_blue hover:text-white gap-x-4 px-5`}
                          >
                            {submenuItem.title}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
