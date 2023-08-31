import React from "react";
import Image from "next/image";
import Link from "next/link";

const ErrorPage : React.FC = () => {
  return (
    <div className="w-full h-screen bg-[url('/images/bg.webp')] flex justify-center items-center">
      <div className=" flex flex-col justify-center items-center">
        <Image
          src="/images/error.png"
          alt="error 404"
          width={800}
          height={800}
          className="w-[300px] md:w-full"
        />
        <Link
          href="/"
          className="border bg-error  text-white rounded p-3 md:p-4 font-semibold text-xs md:text-base "
        >
          Return to website
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
