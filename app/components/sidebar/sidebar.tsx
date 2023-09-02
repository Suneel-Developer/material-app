import { useState, useEffect } from "react";
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
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavItem from "./navitem";

interface SidebarProps {
  isopen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isopen }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    // Add event listener to check screen size
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Add scroll event listener to make the navbar fixed
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const navbar = document.querySelector(".navbar"); // Adjust the selector as needed
      if (navbar) {
        if (scrollTop > 0) {
          navbar.classList.add("fixed");
        } else {
          navbar.classList.remove("fixed");
        }
      }
    };

    // Initial check
    handleScroll();

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const Menus = [
    { title: "Dashboard", icon: <FiGrid size={24} />, path: "/dashboard" },
    {
      title: "Projects overview",
      icon: <FiBriefcase size={24} />,
      path: "/overview",
    },
    { title: "New Job", icon: <FiLayout size={24} />, path: "/new-jobs" },

    
    { title: "Notification", icon: <FiLayout size={24} />, path: "/notification" },
    { title: "Projects Overview", icon: <FiLayout size={24} />, path: "/projects-overview" },
    {
      title: "Projects",
      icon: <FiBriefcase size={24} />,
      submenu: true,
      path: "/projects",
      submenuItems: [
        { subtitle: "Submenu 1" },
        { subtitle: "Submenu 2" },
        { subtitle: "Submenu 3" },
      ],
    },
    { title: "Profile", icon: <FiUser size={24} />, path: "/profile" },
    { title: "Checking", icon: <FiCreditCard size={24} />, path: "/checking" },
    {
      title: "Tasks",
      icon: <FiCheckSquare size={24} />,
      path: "/tasks",
    },
    { title: "Calendar", icon: <FiCalendar size={24} />, path: "/calendar" },
    { title: "Auth", icon: <FiUser size={24} />, path: "/auth" },
    { title: "Settings", icon: <FiSettings size={24} />, path: "/settings" },
  ];

  const sidebarClassName = `min-h-screen p-5 pt-8 relative duration-300 bg-white ${
    isMobileScreen ? (isopen ? "absolute" : "hidden") : isopen ? "w-72" : ""
  }`;

  const titleClassName = `text-primary orign-left font-bold text-2xl duration-300 ${
    !open && "scale-0"
  }`;

  return (
    <div className={sidebarClassName}>
      <div className="flex gap-x-4 items-center">
        <div className="inline-flex gap-x-4 items-center">
          <img
            src="/images/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <p className={titleClassName}>Material App</p>
        </div>
      </div>
      <ul className="pt-6">
        {Menus.map((menu) => (
          <NavItem  menu={menu} open={open} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
