"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
const Work = () => {
  return (
    <div id="my work" className="p-5 grid grid-cols-1 md:grid-cols-2">
      <div>
        <Image
          src="/mestyle2.jpg"
          alt=""
          width={700}
          height={500}
          // fill={true}
          // layout="responsive"
        />
      </div>
      <div className="">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-5xl font-mono p-4 underline"
        >
          Experience My Work
        </motion.h2>
        <p className="text-base font-mono text-center p-2">
          Here are my works and what my skills offer. Come and experience a
          proffesional touch that will evolute you looks. And am always
          available to take your orders and offers, our services are mentioned
          below
        </p>

        <ul className="grid p-5 font-mono">
          <li>
            {" "}
            <h4 className="text-xl ">
              Consultation:
              <span className="text-center text-base pl-2">
                Understanding client needs and preferences to determine the best
                hairstyle and hair care plan.
              </span>
            </h4>
          </li>
          <li>
            <h4 className="text-xl">
              Shampooing:
              <span className="text-center text-base pl-2">
                Washing and preparing hair for styling, using appropriate
                shampoos and conditioners based on hair type and condition.
              </span>
            </h4>
          </li>
          <li>
            <h4 className="text-xl">
              Styling:
              <span className="text-center text-base pl-2">
                Creating various hairstyles, including blowouts, curls, braids,
                updos, and more, using styling tools and products.
              </span>
            </h4>
          </li>
          <li>
            <h4 className="text-xl">
              Production Recommendation:
              <span className="text-center text-base pl-2">
                Advising clients on suitable hair care products and how to
                maintain their hairstyle at home
              </span>
            </h4>
          </li>
          <li>
            <h4 className="text-xl">
              Hair Extension:
              <span className="text-center text-base pl-2 text-brown-900">
                Applying and styling hair extensions to add length or volume
              </span>
            </h4>
          </li>
          <li>
            <h4 className="text-xl">Sells</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Work;
