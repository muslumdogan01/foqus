import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="w-full flex justify-between items-center bg-red-50">
          <div className="flex bg-red-500 justify-start items-center w-3/4">
            <div className=" flex ">
              <Image src="/header/logo.svg" width={50} height={50} alt="logo" />
            </div>
            <div className="flex px-[50px]">
              <Image src="/header/line.svg" width={1} height={28} alt="logo" />
            </div>
            <div className="flex ">
                <li className="font-semibold text-[16px] leading-[26.6px]">Home</li>
                <li className="font-semibold text-[16px] leading-[26.6px]">Features</li>
                <li className="font-semibold text-[16px] leading-[26.6px]">Pricing</li>
                <li className="font-semibold text-[16px] leading-[26.6px]">Inside</li>
                <li className="font-semibold text-[16px] leading-[26.6px]">Contact</li>
            </div>
          </div>
          <div className="flex w-1/4 justify-end items-center">
Get Started
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Header;
