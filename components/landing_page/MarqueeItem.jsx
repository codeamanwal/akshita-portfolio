import React from "react";
import { motion } from "framer-motion";


const MarqueeItem = ({ images, from, to }) => {
  return (
    <div className="flex MyGradient items-center py-6 text-4xl overflow-hidden">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="flex text-4xl items-center justify-between flex-shrink-0 "
      >
        {images.map((image, index) => (
          <h1
            key={index}
            className="text-[#D1CFAE] text-[13vw] my-2 font-dm-sans px-2"
          >
            {image}
          </h1>
        ))}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 justify-between items-center"
      >
        {images.map((image, index) => (
          <h1
            key={index}
            className="text-[#D1CFAE] text-[13vw] my-2 font-dm-sans px-2"
          >
            {image}
          </h1>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
