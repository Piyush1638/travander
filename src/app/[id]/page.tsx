"use client";
import CardDetails from "@/components/dynamicCardInfo/CardDetails";
import PaymentDetails from "@/components/dynamicCardInfo/PaymentDetails";
import TravellerInfo from "@/components/dynamicCardInfo/TravellerInfo";
import { details } from "@/lib/data/details";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoStarOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Page = () => {
  const pathName = usePathname();
  const [travellers, setTravellers] = useState(3);
  const [showStartPointOptions, setShowStartPointOptions] = useState(false);
  const [selectedStartPoint, setSelectedStartPoint] = useState<any>(null);

  const id = pathName?.split("/").pop() as string;
  const detail = details.find((item) => item.id.toString() === id);

  if (!detail) {
    return <p>Detail not found</p>;
  }

  const stars = 4;

  const handleStartPointClick = (point: any) => {
    setSelectedStartPoint(point);
    setShowStartPointOptions(false); // Hide options after selection
  };

  return (
    <main className="flex min-h-screen flex-col items-center xl:p-24 px-10 py-20 bg-white">
      <div className="flex xl:flex-row flex-col justify-between gap-10 w-full w-5xl">
        <div className="xl:w-3/5 w-full flex flex-col gap-10 xl:pr-10">
          <CardDetails detail={detail} />
          <div className="flex sm:flex-row flex-col gap-3 xl:gap-0 items-center space-x-4 mb-4">
            <div className="flex sm:flex-row flex-col gap-3 xl:gap-0 items-center justify-between md:w-4/5 w-full shadow-md rounded-xl px-6 py-1 shadow-[#1018281A]">
              <div className="bg-white p-2 rounded-md">
                <p className="text-sm leading-6 flex items-center gap-2 cursor-pointer" onClick={() => setShowStartPointOptions(!showStartPointOptions)}>
                  Start Point: {selectedStartPoint?.place || detail.startingPoint[0].place} -{" "}
                  {selectedStartPoint?.price || detail.startingPoint[0].price} INR
                  {showStartPointOptions ? <IoIosArrowUp className="text-xl text-gray-400"/>: <IoIosArrowDown className="text-xl text-gray-400" /> }
                </p>
                <p className="text-xs leading-6 text-[#3F3F46]">
                  {selectedStartPoint?.date_day || detail.startingPoint[0].date_day}{" "}
                  {selectedStartPoint?.date_month || detail.startingPoint[0].date_month}{" "}
                  {selectedStartPoint?.time || detail.startingPoint[0].time}
                </p>
              </div>
              <div className="text-sm leading-6">
                <p>End Point: {detail.endPoint}</p>
                <p className="text-xs leading-6 text-[#3F3F46]">
                  {detail.startData} {detail.startingPoint[0].time}
                </p>
              </div>
            </div>
            <div className="bg-white p-2 w-2/4 flex items-center justify-between text-sm leading-6 text-[#27272A]">
              <p>#{detail.id}</p>
              <p>{detail.place}</p>
            </div>
          </div>
          {showStartPointOptions && (
            <StartPointOptions
              startingPoint={detail.startingPoint}
              onSelect={handleStartPointClick}
            />
          )}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Group Size: 20 Travellers
            </h3>
            <div className="flex items-center mb-4">
              <p className="text-sm">Number of travellers</p>
              <button
                onClick={() => setTravellers(travellers - 1)}
                className="ml-4 border border-black p-1 rounded-full w-8 h-8 flex items-center justify-center"
                disabled={travellers <= 1}
              >
                -
              </button>
              <span className="mx-4">{travellers}</span>
              <button
                onClick={() => setTravellers(travellers + 1)}
                className="border border-black p-1 rounded-full w-8 h-8 flex items-center justify-center"
                disabled={travellers >= 20}
              >
                +
              </button>
            </div>
            {[...Array(travellers)].map((_, index) => (
              <TravellerInfo key={index} index={index} />
            ))}
          </div>
        </div>

        <div className="xl:w-1/3 w-full">
          <div className="bg-white flex flex-col gap-3 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center">
              <div className="bg-[#d3e0fa] w-fit rounded-full relative">
                <Image
                  height={140}
                  width={140}
                  src="/details/person.svg"
                  alt="Guide Profile"
                  className="rounded-full object-contain"
                />
                <div className="flex items-center justify-center p-2 bg-[#0077CC] w-fit rounded-full absolute top-4 left-0">
                  <Image src={"/details/quote.svg"} alt="..." width={16} height={13}/>
                </div>

              </div>
            </div>
            <h2 className="text-center leading-6 text-[#27272A]">
              Paras Pundir
            </h2>
            <div className="flex justify-center items-center gap-2">
              {[...Array(stars)].map((_, index) => (
                <FaStar key={index} className="text-[#0077CC]" />
              ))}
              {[...Array(5 - stars)].map((_, index) => (
                <IoStarOutline key={index} className="text-black" />
              ))}
            </div>
            <div className="text-center text-sm leading-6 text-[#3F3F46]">
              5 Trips Completed
            </div>
            <h3 className="text-center leading-6 font-semibold text-[#27272A]">
              Message from Paras
            </h3>
            <p className="mt-4 text-sm leading-6 text-[#3F3F46] text-center w-4/5 mx-auto">
              Nunc justo eros, vehicula vel vehicula ut, lacinia a erat. Nam
              fringilla eros... Nullam aliquam interdum Nunc justo eros,
              vehicula vel vehicula ut, lacinia a erat. Nam fringilla eros...
            </p>
          </div>

          <PaymentDetails
            id={id}
            perPersonPrice={detail.price}
            totalPersons={travellers}
          />
        </div>
      </div>
    </main>
  );
};

export default Page;

const StartPointOptions = ({ startingPoint, onSelect }: { startingPoint: any[], onSelect: (point: any) => void }) => {
  return (
    <div className="flex flex-col sm:w-3/5 w-full rounded-md border border-gray-200">
      {startingPoint?.map((point) => (
        <div
          key={point.place}
          className="grid grid-cols-3 gap-4 bg-white border-b border-gray-200 p-2 rounded-md cursor-pointer"
          onClick={() => onSelect(point)}
        >
          <p className="text-[#27272A] text-xs leading-6 font-normal">{point.place}</p>
          <p className="text-[#27272A] text-xs leading-6 font-normal">{point.price} INR</p>
          <p className="text-[#27272A] text-xs leading-6 font-normal">
            {point.date_day} {point.date_month} {point.time}
          </p>
        </div>
      ))}
    </div>
  );
};
