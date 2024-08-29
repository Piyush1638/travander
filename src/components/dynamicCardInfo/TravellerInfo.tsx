import React from "react";

const getOrdinal = (index: number): string => {
  const ordinals = [
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seventh",
    "Eighth",
    "Ninth",
    "Tenth",
    "Eleventh",
    "Twelfth",
    "Thirteenth",
    "Fourteenth",
    "Fifteenth",
    "Sixteenth",
    "Seventeenth",
    "Eighteenth",
    "Nineteenth",
    "Twentieth",
  ];
  return ordinals[index] || `${index + 1}th`;
};

const TravellerInfo = ({ index }: { index: number }) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-semibold text-sm">{getOrdinal(index)} Person</h3>
      <div className="grid grid-cols-2 gap-4 mb-4 w-4/5">
        <div>
          <label className="block text-sm">Name</label>
          <input
            type="text"
            className="w-full p-1 border-b-[0.7px] border-[#3F3F46]"
          />
        </div>
        <div>
          <label className="block text-sm">Age</label>
          <input
            type="number"
            className="w-full p-2 border-b-[0.7px] border-[#3F3F46]"
          />
        </div>
        {index === 0 && (
          <>
            <div>
              <label className="block text-sm">Contact No.</label>
              <input
                type="tel"
                className="w-full p-2 border-b-[0.7px] border-[#3F3F46]"
              />
            </div>
            <div>
              <label className="block text-sm">Email ID</label>
              <input
                type="email"
                className="w-full p-2 border-b-[0.7px] border-[#3F3F46]"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TravellerInfo;
