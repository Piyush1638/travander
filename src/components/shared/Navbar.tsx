"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

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

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        handleCloseSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href={"/"} className="flex items-center justify-center">
            <Image
              height={32}
              width={151}
              src="/navbar/logo.svg"
              alt="Travander Logo"
            />
          </Link>

          {/* Log in Button */}
          <div className="hidden sm:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-gray-900 leading-6 font-medium hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}
            <button className="px-8 py-2 rounded-full font-semibold leading-6 shadow-md text-[#27272A]">
              Log in
            </button>
          </div>

          {/* Hamburger Menu */}
          <div
            className="flex items-center justify-center gap-4 p-2 cursor-pointer sm:hidden"
            onClick={handleSidebarToggle}
          >
            <button className="px-8 py-2 rounded-full font-semibold leading-6 shadow-md text-[#27272A]">
              Log in
            </button>
            <RxHamburgerMenu className="text-2xl" />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 bg-white shadow-lg z-40 w-3/5 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <Link href={"/"} className="flex items-center">
              <Image
                height={32}
                width={151}
                src="/navbar/logo.svg"
                alt="Travander Logo"
              />
            </Link>
            <button onClick={handleCloseSidebar}>
              <AiOutlineClose className="text-2xl" />
            </button>
          </div>
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-gray-900 leading-6 font-medium hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
