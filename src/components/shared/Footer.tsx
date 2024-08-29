import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  const company = ["Home", "Community", "About Us", "Login"];
  const support = [
    "FAQ",
    "Terms & Conditions",
    "Privacy Policy",
    "Cancellation Policy",
  ];
  const socials = [
    "/footer/facebook.svg",
    "/footer/instagram.svg",
    "/footer/x.svg",
    "/footer/youtube.svg",
  ];
  return (
    <footer className="bg-[#0077CC] text-white">
      <div className="max-w-full mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex lg:flex-row flex-col justify-between items-start xl:px-28 px-4 gap-10 lg:gap-0">
          {/* Company Section */}
            <Image alt="..." src={"/footer/logo.svg"} height={28} width={130} />

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
            <FooterLinks title="Company" links={company} />
            <FooterLinks title="Support" links={support} />
            {/* Contact Section */}
            <div>
              <div className="flex flex-col gap-8">
                <h3 className="text-lg font-bold">Contact</h3>
                <ul className="flex flex-col gap-4">
                  <li className="font-light text-sm leading-6">+91 9876619283</li>
                  <li className="font-light text-sm leading-6">hello@travander.com</li>
                </ul>
              </div>
              <div className="mt-4 flex items-center gap-2">
                {socials.map((item, index) => (
                  <a key={index} href="#" className="hover:opacity-75">
                    <Image src={item} alt="..." height={32} width={32} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t-2 border-white-15 p-6 text-center text-sm text-white">
        <p>
          2021 (c) — Mochilero Travel Ventures Pvt. Ltd. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const FooterLinks = ({ title, links }: { title: string; links: string[] }) => (
  <div className="flex flex-col gap-6">
    <h3 className="text-base lg:text-lg font-semibold leading-6 ">Company</h3>
    <ul className="flex flex-col gap-4">
      {links.map((item, index) => (
        <li key={index} className="font-light text-sm leading-6">
          <a href="#" className="hover:underline text-nowrap">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
