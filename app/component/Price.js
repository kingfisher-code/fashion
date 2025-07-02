"use client";
import React from "react";
import Card from "./Card";
import { motion } from "motion/react";

const Price = () => {
  return (
    <div id="price" className="border border-gray-700">
      <div className="justify-self-center p-6">
        <h2 className="text-xl font-mono justify-self-center">
          Welcome to my Price List Page
        </h2>
        <p className="text-lg text-center font-sans justify-self-center items-center border border-gray-700">
          Its important to note that our prices depends on certain criteria,
          Such as the type of wig and also the styling. Below sre three major
          categories available for purchase. So click on the SEE MORE text below
          each card for more details
        </p>
      </div>
      <motion.div className="grid items-center mt-10 justify-self-center contents-center grid-cols-1 md:grid-cols-3 ">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className=" justify-self-center md:pl-12"
        >
          <Card
            title="Fringe Wig"
            description=" These wigs are designed to mimic the look of a natural fringe, adding a stylish and sometimes playful element to the overall hairstyle. They are available in various lengths, styles, and materials, including human hair and synthetic options, and can be customized to suit individual preferences."
            price="See More..."
            imageUrl="/wendy pic1.jpg"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="justify-self-center md:pl-5"
        >
          <Card
            title="Silk Frontals"
            description="Silk frontals are made with a silk base, offering a more natural scalp appearance and blending seamlessly with the skin"
            price="See More..."
            imageUrl="/wendy pic 2.jpg"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="justify-self-center"
        >
          <Card
            title="Pixie Curl"
            description="Our Pixie Curls Wig is made from premium synthetic fibers that mimic the texture and appearance of natural hair. The curls are carefully designed to maintain their shape and bounce, ensuring a consistently stylish look without the need for constant maintenance."
            price="See More..."
            imageUrl="/wendy pic3.jpg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Price;
