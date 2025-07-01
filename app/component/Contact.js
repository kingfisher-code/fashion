"use client";
// import { FC } from "react";
// import { useForm } from "react-hook-form";
// import { sendEmail } from "@/utils/send-email";
import React from "react";
import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa";

// export type FormData={
//     name:string;
//     email:string;
//     message:string;

const Contact = () => {
  //     const{register, handleSubmit}= useForm<FormData>();
  //     function onSubmit(data: FormData){
  //         sendEmail(data)
  //     }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duretion: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/water-drop-background.jpg')] bg-no-repeat bg-center bg-cover bg-[length:90%_auto]"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-mono"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-mono"
      >
        Get in touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className=" text-center mb-12 mt-5 mx-auto max-w-2xl font-mono"
      >
        I do love to hear from you! if you have any question, comments, or
        feedbacks, please use the form below.
      </motion.p>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        // onSubmit={handleSubmit(onsubmit)}
        className="max-w-2xl mx-auto font-mono"
      >
        <div className="grid lg:grid-cols-2 sm:grid-cols-1  gap-6 mt-10 mb-8 font-mono">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="text"
            placeholder="Enter your name"
            // {...register("name", { required: true })}
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white text-black font-mono"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="email"
            placeholder="Enter your email"
            // {...register("email", { required: true })}
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white text-black font-mono"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          rows="6"
          placeholder="Enter your message"
          required
          // {...register("message", { required: true })}
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 text-black font-mono"
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer font-mono"
        >
          Submit now <FaArrowRight className="w-4" />
        </motion.button>
        {/* <p className="mt-4">{result}</p> */}
      </motion.form>
    </motion.div>
  );
};

export default Contact;
