"use client";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { motion } from "motion/react";
import Image from "next/image";

const Hero = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className=" grid  grid-cols-1 md:flex gap-10 justify-self-end "
    >
      {/* <div className="items-center z-40 mr-50  md:pt-20">
        <p className="pb-2">
          <FaInstagram className="w-5 h-5" />
        </p>
        <p className="pb-2">
          <FaFacebook className="w-5 h-5" />
        </p>
        <p className="pb-2">
          <FaTiktok className="w-5 h-5" />
        </p>
      </div> */}
      <div className="">
        <div className="flex justify-self-center gap-5 pl-2 md:pt-20 font-mono">
          <h3 className="sm:text-sm md:text-xl">HAIR</h3>
          <h3 className="sm:text-sm md:text-xl"> BEAUTY</h3>
          <h3 className="sm:text-sm md:text-xl">AESTHETICS</h3>
        </div>
        <div className=" pt-10 ">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className=" text-xl pl-12 font-mono justify-self-center "
          >
            SCIENTIFICALLY PROVEN AESTHETICS
          </motion.h1>
          <hi className="font-cursive  justify-self-center">
            {/* Feeling yourself */}
          </hi>
        </div>
        <div className="justify-center justify-self-center content-center pt-10 md:pt-30 ">
          <button className="border px-4  py-1 mr-2 cursor-pointer hover font-sans">
            BOOK NOW
          </button>
          <button className="border px-4 ml-2 bg-white py-1 text-black cursor-pointer font-sans">
            VIEW PRICES
          </button>
        </div>
      </div>

      <motion.div
        // initial={{ scale: 0 }}
        // whileInView={{ scale: 1 }}
        // transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className=""
      >
        <Image
          src="/black .jpg"
          width={800}
          height={800}
          alt=""
          className="object-right rounded-xl "
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
