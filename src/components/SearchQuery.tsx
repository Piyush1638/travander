import Image from "next/image";
import React from "react";


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
      <div className="flex bg-white rounded-full md:ps-5 md:pr-3 px-2  items-center  md:space-x-5 space-x-2">
        <div className="text-xs font-semibold text-gray-600 sm:inline-block hidden">Select any one</div>
        {searchOptions.map((option, index) => (
          <SearchOption
          key={index}
          iconSrc={option.iconSrc}
          altText={option.altText}
          label={option.label}
          options={option.options}
          />
        ))}
        <button className="text-blue-500 focus:outline-none p-6 md:inline-block hidden">
          <Image src={"/homepage/search.svg"} alt="Search" height={28} width={28} />
        </button>
      </div>
    </div>
  );
};

export default SearchQuery;

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
    <div className="flex md:flex-row flex-col  md:items-start items-center justify-center space-x-2">
      <Image src={iconSrc} alt={altText} height={18} width={18} />
      <div className="flex flex-col md:items-start md:justify-start space-x-2">
        <span className="text-sm font-semibold text-gray-700 text-nowrap">{label}</span>
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