"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Input from "../components/inputs/Input";
import Button from "../components/Button";

const SignUp: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[url('/images/bg.webp')] bg-no-repeat bg-cover flex justify-center items-center">
      <div className="w-11/12 lg:w-9/12 flex flex-col md:flex-row  shadow-3xl">
        <div className="w-12/12 md:w-3/4 flex flex-col justify-center  bg-white py-10 px-8 lg:px-16 rounded-t-lg md:rounded-l-lg">
          <h1 className=" font-bold text-light_black py-3 text-3xl tracking-normal">
            Get started
          </h1>
          <p className="font-normal text-light_black font-sm pb-3 max-w-full md:max-w-xs">
            Start creating the best possible user experience for you customers
          </p>

          <form className="w-full">
            <div className="flex flex-row gap-5">
              <Input id="firstname" label="First Name" required />
              <Input id="lastname" label="Last Name" required />
            </div>
            <Input type="email" id="email" label="Email Address" required />
            <Input type="passowrd" id="passowrd" label="Passowrd" required />
            <div className="mt-6">
              <Button label="Sign Up" onClick={() => console.log("")} />
            </div>

            <p className="text-dark_black text-sm text-center py-4">
              Already have an account?
              <Link href="/" className="text-primary">
                Log in
              </Link>
            </p>
            <span className=" text-dark_black flex items-center justify-center text-sm">
              Or Login with
            </span>

            <div className="flex justify-center items-center gap-5 mt-5">
              <Image
                src="/images/facebook.svg"
                alt="Facebook Logo"
                width={100}
                height={100}
                className="w-10	h-10 cursor-pointer"
              />
              <Image
                src="/images/twitter.svg"
                alt="Twitter Logo"
                width={100}
                height={100}
                className="w-10	h-10 cursor-pointer"
              />
              <Image
                src="/images/instagram.svg"
                alt="Instagram Logo"
                width={100}
                height={100}
                className="w-10	h-10 cursor-pointer"
              />
            </div>
          </form>
        </div>
        <div className="w-12/12 md:w-2/5 flex flex-col justify-end items-center gap-3 py-4 md:py-10 px-8 lg:px-16 text-white  bg-[url('/images/loginsideImage.webp')] bg-no-repeat bg-cover rounded-b-lg md:rounded-r-lg">
          <h1 className="font-bold text-2xl	">One of us ?</h1>
          <p className="text-center text-sm max-w-xs	">
            If you already has an account, just sign in. We've missed you!
          </p>

          <Link
            href="/"
            className="border text-center border-white rounded py-3 px-12 font-semibold text-base mt-4 "
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
