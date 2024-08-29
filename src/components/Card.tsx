import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  startDate: string;
  author: string;
  duration: string;
  price: string;
}

const Card: React.FC<CardProps> = ({
  id,
  imageSrc,
  title,
  description,
  startDate,
  author,
  duration,
  price,
}) => {
  return (
    <Link
      href={`/${id}`}
      className="bg-white shadow-lg rounded-xl overflow-hidden max-w-[300px] p-2 max-h-96"
    >
      <Image
        height={198}
        width={278}
        src={imageSrc}
        alt={title}
        className="object-cover rounded-xl"
      />
      <div className="p-2 flex flex-col gap-1">
        <div className="text-xs font-normal text-[#3F3F46]">{title}</div>
        <p className="mt-2 text-base font-medium leading-6 text-[#27272A]">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-gray-600 text-sm">Start Date: {startDate}</div>
          <div className="text-gray-600 text-sm">By {author}</div>
        </div>
        <div className="mt-4 flex  justify-between items-center border-t border-[#E7E6E6]">
          <div className="text-[#27272A] text-xs leading-6 ">{duration}</div>
          <div className="font-medium text-sm leading-6">₹ {price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
