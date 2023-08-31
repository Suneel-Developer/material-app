"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Input from "../components/inputs/Input";
import Button from "../components/Button";
import Avatar from "../components/Avatar";

const SignIn: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="w-full h-screen bg-[url('/images/bg.webp')] bg-no-repeat  flex justify-center items-center">
      <div className="w-11/12 lg:w-9/12 flex flex-col md:flex-row  shadow-3xl">
        <div className="w-12/12 md:w-3/4 flex flex-col justify-center items-center bg-white py-10 px-8 lg:px-16 rounded-t-lg md:rounded-l-lg">
          
          <Avatar 
            src="/images/profile.webp"
            variant="large"
          />
          <h1 className=" font-bold text-light_black py-3 text-3xl tracking-normal">
            Welcome back, Lucy!
          </h1>
          <h4 className="font-normal text-light_black font-sm pb-3">
            Sign in to your account to continue
          </h4>

          <form className="w-full">
            <Input
              id="email"
              label="Email Address"
              disabled={isLoading}
              required
            />

            <Input
              id="passowrd"
              label="Password"
              type="passowrd"
              disabled={isLoading}
              required
            />

            <div className="flex justify-between items-center my-5 ">
              <div className="flex items-center">
                <input type="checkbox" id="remember" name="remember" />
                <label
                  htmlFor="remember"
                  className="ml-3 text-dark_black text-sm"
                >
                  Remember me
                </label>
              </div>
              <Link
                href="/forgotpassword"
                className="text-error font-medium text-sm"
              >
                Forgot Password?
              </Link>
            </div>
            <Button label="Sign In" onClick={() => {}} />

            <span className="py-4 text-dark_black flex items-center justify-center text-sm">
              Or Login with
            </span>

            <div className="flex justify-center items-center gap-5">
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
        <div className="w-12/12 md:w-2/5 flex flex-col justify-end items-center gap-3 py-4 md:py-10 px-8 lg:px-16  text-white  bg-[url('/images/loginsideImage.webp')] bg-cover bg-no-repeat rounded-b-lg md:rounded-r-lg">
          <h1 className="font-bold text-2xl	">New User</h1>
          <p className="text-center text-sm max-w-xs	">
            Sign up and discover great amount of new opportunities!
          </p>

          <Link
            href="/signup"
            className="border text-center border-white rounded py-3 px-12 font-semibold text-base mt-4"
          >
            Sign Up
          </Link>

          
        </div>
      </div>
    </div>
  );
};

export default SignIn;
