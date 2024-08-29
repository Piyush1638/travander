import React, { useState, useEffect } from "react";

// Function to get the ordinal representation of an index
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
  // State to store input values
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | undefined>(undefined);
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");

  // Function to save the input values to localStorage
  const saveToLocalStorage = () => {
    // Only save data if index is 0
    if (index === 0) {
      // Prepare person data
      const personData = {
        name,
        age,
        contactNumber,
        email,
      };

      // Save data to localStorage
      localStorage.setItem('customer', JSON.stringify(personData));
    }
  };

  // Effect to save the data to localStorage whenever the input values change
  useEffect(() => {
    saveToLocalStorage();
  }, [name, age, contactNumber, email, index]);

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-semibold text-sm">{getOrdinal(index)} Person</h3>
      <div className="grid grid-cols-2 gap-4 mb-4 w-4/5">
        <div>
          <label className="block text-sm">Name</label>
          <input
            type="text"
            className="w-full p-1 border-b-[0.7px] border-[#3F3F46] outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm">Age</label>
          <input
            type="number"
            className="w-full p-1 border-b-[0.7px] border-[#3F3F46] outline-none"
            value={age ?? ''}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>
        {index === 0 && (
          <>
            <div>
              <label className="block text-sm">Contact No.</label>
              <input
                type="tel"
                className="w-full p-2 border-b-[0.7px] border-[#3F3F46] outline-none"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm">Email ID</label>
              <input
                type="email"
                className="w-full p-2 border-b-[0.7px] border-[#3F3F46] outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TravellerInfo;
