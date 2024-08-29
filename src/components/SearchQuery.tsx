import Image from "next/image";
import React from "react";

interface SearchOptionProps {
  iconSrc: string;
  altText: string;
  label: string;
  options: string[];
}

const SearchOption: React.FC<SearchOptionProps> = ({
  iconSrc,
  altText,
  label,
  options,
}) => {
  return (
    <div className="flex items-start space-x-2">
      <Image src={iconSrc} alt={altText} height={18} width={18} />
      <div className="flex flex-col items-start justify-start space-x-2">
        <span className="text-sm font-semibold text-gray-700">{label}</span>
        <select className="bg-transparent text-sm focus:outline-none">
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const SearchQuery: React.FC = () => {
  const searchOptions = [
    {
      iconSrc: "/homepage/location.svg",
      altText: "Location",
      label: "Select Location",
      options: ["Location"],
    },
    {
      iconSrc: "/homepage/profile.svg",
      altText: "Traveler",
      label: "Select Traveler",
      options: ["Neelabh"],
    },
    {
      iconSrc: "/homepage/calender.svg",
      altText: "Date",
      label: "Select Date",
      options: ["Date"],
    },
  ];

  return (
    <div className="flex justify-center mt-10 p-5 rounded-[72px] shadow-xl">
      <div className="flex bg-white rounded-full ps-5 pr-3  items-center  space-x-5">
        <div className="text-xs font-semibold text-gray-600">Select any one</div>
        {searchOptions.map((option, index) => (
          <SearchOption
            key={index}
            iconSrc={option.iconSrc}
            altText={option.altText}
            label={option.label}
            options={option.options}
          />
        ))}
        <button className="text-blue-500 focus:outline-none p-6">
          <Image src={"/homepage/search.svg"} alt="Search" height={28} width={28} />
        </button>
      </div>
    </div>
  );
};

export default SearchQuery;
