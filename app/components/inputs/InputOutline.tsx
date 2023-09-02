"use client";

// import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  piramary?: boolean;
  //   register: UseFormRegister<FieldValues>;
  //   errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  piramary,
}) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        // {...register(id, { required })}
        placeholder={label}
        type={type}
        className={`${piramary ? "placeholder:text-primary border-primary text-primary":"placeholder:text-light_gray border-light_gray text-light_gray"}  rounded-md placeholder:text-sm border px-2 py-3 w-full`}
      />
    </div>
  );
};

export default Input;
