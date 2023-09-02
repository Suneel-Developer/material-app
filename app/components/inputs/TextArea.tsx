"use client";

// import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  disabled?: boolean;
  formatPrice?: boolean;
  piramary?: boolean;
  rows: number;

  //   register: UseFormRegister<FieldValues>;
  //   errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  disabled,
  piramary,
  rows,
}) => {
  return (
    <div className="w-full relative">
      <textarea
        id={id}
        disabled={disabled}
        rows={rows}
        placeholder={label}
        className={`${
          piramary
            ? "placeholder:text-primary border-primary"
            : "placeholder:text-light_gray border-light_gray"
        } focus:border-primary border text-primary outline-0 rounded-md placeholder:text-sm px-2 py-3 w-full`}
      ></textarea>
    </div>
  );
};

export default Input;
