import Badge from "../Badge";
import {BiBell} from "react-icons/bi";
import {AiOutlinePoweroff} from "react-icons/ai"
import {FiMessageSquare} from "react-icons/fi"
import Search from "./search";
import Avatar from "../Avatar";
import IconButton from "../IconButton"
const Navbar = () => {
  return (
    <div className="bg-white p-3">
      <div className="flex justify-between items-center ">
        <div>
          <Search />
        </div>
        <div className="flex gap-4 items-center">
          <Badge icon={BiBell} number={3}/>
          <Badge icon={FiMessageSquare} number={7}/>
          <Avatar 
            src="/images/profile.webp"
            variant="small"
          />
          <IconButton icon={AiOutlinePoweroff} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
