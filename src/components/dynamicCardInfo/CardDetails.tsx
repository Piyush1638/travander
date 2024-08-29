import Image from "next/image";
import React from "react";
import Heart from "../Heart";

const CardDetails = ({detail}:any) => {
  console.log(detail)
  return (
    <div className="flex md:flex-row flex-col items-center  bg-white shadow-lg shadow-[#1018281A] rounded-lg p-4 mb-6 w-full max-w-[960px] ">
      <div className="flex md:flex-row flex-col gap-3 xl:gap-0 items-center xl:w-4/5">
        <div className="relative">
        <Image
          height={200}
          width={250}
          src="/card/snow.jpg"
          alt="Snow Forest"
          className="w-full rounded-xl"
        />
        <div className="absolute top-3 right-3">
          <Heart/>
        </div>
        </div>
        <div className="flex items-center justify-between pl-4 h-full px-4 border-r border-[#E7E6E6]">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg leading-6 font-semibold">{detail.place}</h2>
            <div className="flex items-center justify-between font-normal text-xs leading-6 text-[#27272A]">
              <span className="">Start Date: {detail.startData}</span>
              <span className="">By {detail.by}</span>
            </div>
            <p className="text-[#27272A] text-sm font-medium leading-6">
              {detail.description}
            </p>
            <a href="#" className="text-[#0077CC] mt-2 text-sm leading-6  ">
              Best Price Guarantee
            </a>
          </div>
        </div>
      </div>
      <div className="p-6  h-full md:w-1/5">
        <p className="text-sm text-gray-500 text-nowrap">{detail.duration_day} Days {detail.duration_night} Nights</p>
      </div>
    </div>
  );
};
export default CardDetails;
