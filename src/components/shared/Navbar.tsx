import Image from "next/image";
import React from "react";

const Navbar: React.FC = () => {
  const navItems = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Community",
      link: "#",
    },
    {
      name: "About Us",
      link: "#",
    },
  ];
  return (
    <nav className="bg-white fixed top-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}

          <Image
            height={32}
            width={151}
            src="/navbar/logo.svg"
            alt="Travander Logo"
          />

          {/* Log in Button */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-gray-900 leading-6 font-medium  hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}
            <button className="px-8 py-2  rounded-full font-semibold leading-6 shadow-md text-[#27272A]">
              Log in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
