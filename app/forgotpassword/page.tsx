"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";
import Input from "../components/inputs/Input";
import Button from "../components/Button";
const ResetPassword: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    router.push("/resetpassword")
  }
  return (
    <div className="w-full h-screen bg-[url('/images/bg.webp')] bg-no-repeat flex justify-center items-center">
      <div className="w-11/12 lg:w-9/12 flex flex-col md:flex-row  shadow-3xl">
        <div className="w-12/12 md:w-3/4 flex flex-col justify-center bg-white py-10 px-8 lg:px-16 rounded-t-lg md:rounded-l-lg">
          <h1 className=" font-bold text-light_black py-3 text-3xl tracking-normal">
            Forgot Password
          </h1>
          <p className="font-normal text-light_black font-sm pb-5">
            Enter your email, and we'll send you instructions to reset your
            password
          </p>

          <form className="w-full" onSubmit={handleSubmit}>
            <Input id="email" label="Email Address" required />
            <div className="mt-6">
              <Button
                label="Send Reset Link"
                onClick={() => {}}
              />
            </div>

            <Link
              href="/"
              className="py-4 text-error flex items-center justify-center gap-2 text-base"
            >
              <BiChevronLeft className="text-2xl" /> Back to log in
            </Link>
          </form>
        </div>
        <div className="w-12/12 md:w-2/5 flex flex-col justify-end items-center gap-3 py-10 px-16 text-white h-[300px] md:h-[662px]   bg-[url('/images/loginsideImage.webp')] bg-cover bg-no-repeat rounded-b-lg md:rounded-r-lg"></div>
      </div>
    </div>
  );
};

export default ResetPassword;
