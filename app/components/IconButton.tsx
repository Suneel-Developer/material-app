"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  icon?: IconType;
  text?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  icon: Icon,
  text,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        flex
        
        items-center
        justify-center
        bg-primary
        text-white
        gap-2
        text-sm
        
        py-2
        w-full
        `}
    >
      {Icon && <Icon size={24} className="text-white" />}
      {text}
    </button>
  );
};

export default Button;
