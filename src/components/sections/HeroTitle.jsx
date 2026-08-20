"use client";

import { motion } from "motion/react";

export default function HeroTitle() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      className="absolute inset-x-0 top-[18%] z-10 text-center text-5xl font-bold text-white sm:text-9xl"
    >
      CAFERCORR
    </motion.h1>
  );
}
