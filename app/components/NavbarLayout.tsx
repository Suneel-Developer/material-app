import React, { ReactNode, useState } from "react";
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";

interface NavbarLayoutProps {
  children: ReactNode;
}

const NavbarLayout: React.FC<NavbarLayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className="flex">
      <Sidebar isopen={open} />
      <div className="flex-1">
        <Navbar toggleSidebar={toggleSidebar} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default NavbarLayout;
