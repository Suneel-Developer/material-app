import Badge from "../Badge";
import { BiBell } from "react-icons/bi";
import { AiOutlinePoweroff, AiOutlineMenu } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import Search from "./search";
import Avatar from "../Avatar";
import IconButton from "../IconButton";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <div className="bg-white p-3">
      <div className="flex justify-between gap-2 items-center ">
        <button onClick={toggleSidebar} className="md:hidden">
          <AiOutlineMenu />
        </button>
        <Search />
        <div className="flex gap-4 items-center">
          <div className="md:flex gap-4 items-center hidden">
            <Badge icon={BiBell} number={3} />
            <Badge icon={FiMessageSquare} number={7} />
            <Avatar src="/images/profile.webp" variant="small" />
          </div>
          <div className="flex gap-4 items-center">
            <IconButton icon={AiOutlinePoweroff} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
