"use client";

import React from "react";
import { useRef, useState, useEffect } from "react";
// import { CiMenuFries } from "react-icons/ci";
import { TiThMenuOutline } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef(null);
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    window.addEventListener(scroll, () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <nav
      className={`w-full  px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
        isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
      }`}
    >
      <div className=" border-t flex gap-20 p-5 justify-items-center">
        <div>
          <h2 className="font-bold text-2xl italic">Favy looks.</h2>
        </div>
        <ul className="hidden text-gray-400 md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li className="hover:underline">
            <a href="#top">About</a>
          </li>
          <li className="hover:underline">
            <a href="#price list">Price list</a>
          </li>
          <li className="hover:underline">
            <a href="#my work">My work</a>
          </li>
          <li className="hover:underline">
            <a href="#contact"> Contact</a>
          </li>
        </ul>
        <button className="border p-4 cursor-pointer hover:bg-gray-600 rounded-lg">
          Book now
        </button>
        <div>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <TiThMenuOutline className="w-6 h-6" />
          </button>
        </div>
      </div>
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 buttom-0 w-64 z-50 h-screen bg-gray-500 transition duration-500"
      >
        <div className="absolute right-6 top-6" onClick={closeMenu}>
          <IoMdClose className="w-5 h-5 cursor:pointer" />
        </div>

        <li>
          <a href="#top" onClick={closeMenu}>
            About
          </a>
        </li>

        <li>
          <a href="#price" onClick={closeMenu}>
            Price
          </a>
        </li>

        <li>
          <a href="#my work" onClick={closeMenu}>
            My work
          </a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
