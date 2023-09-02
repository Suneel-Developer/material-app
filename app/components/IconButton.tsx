"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  icon?: IconType;
  text?: string;
  filled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  icon: Icon,
  text,
  filled,
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
        gap-2
        text-sm
        py-2
        w-full
        ${filled ? "bg-primary" : ""}
        `}
    >
      {Icon && (
        <Icon
          size={24}
          className={`${filled ? "text-white" : "text-dark_grey"}`}
        />
      )}
      {text}
    </button>
  );
};

export default Button;
