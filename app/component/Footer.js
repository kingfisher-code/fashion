import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pb-5">
      <div className="flex justify-self-center pt-20 pb-5 gap-3">
        <p>
          <FaInstagram className="w-6 h-6" />
        </p>
        <FaFacebook className="w-6 h-6" />
        <FaTiktok className="w-6 h-6" />
      </div>
      <div className="justify-self-center pb-2">
        <button className="border px-9 py-1">Contact Us</button>
      </div>
      <div className="justify-self-center  ">
        <button className="border px-5 py-1 ml-3">Hair Loyalty Card</button>
        <button className="border px-4 py-1 ">Beauty Loyalty Card</button>
      </div>
      <p className="justify-self-center pt-3 border-b ">
        @ 2024-2025 john codez
      </p>
    </div>
  );
};

export default Footer;
