// components/NavbarLayout.tsx
import React, { ReactNode } from "react";
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";
interface NavbarLayoutProps {
  children: ReactNode;
}

const NavbarLayout: React.FC<NavbarLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1">
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default NavbarLayout;
