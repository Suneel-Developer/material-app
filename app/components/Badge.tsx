'use client';

import { IconType } from "react-icons";

interface BadgeProps {
    icon?: IconType;
    number: number
}

const Badge: React.FC<BadgeProps> = ({ icon: Icon,number }) => {
  return ( 
    <div className="relative">
      {Icon && (
        <Icon
          size={24}
          className="text-dark_grey"
        />
      )}
        <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-primary text-white border-2 border-white rounded-full -top-2 -right-2">{number}</div>

    </div>
   );
}
 
export default Badge