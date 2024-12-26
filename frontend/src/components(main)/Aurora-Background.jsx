"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useNavigate } from "react-router-dom";


export default function AuroraBackgroundDemo() {
  const navigate = useNavigate();

  const handleJoinUs = () => {
    navigate("/signup");
  };

  return (
    <AuroraBackground className="dark bg-black relative">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col gap-4 items-center justify-center px-4 py-16"
      >
        <h2 className="text-4xl md:text-8xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Unlock opportunities,
          <br />
          <span className="text-3xl md:text-7xl bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
            ignite your career!
          </span>
        </h2>
        <br />
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="font-light text-lg md:text-3xl text-sky-200 leading-relaxed tracking-wide text-center">
            Discover your next big career move with our job listing platform.
          </p>
          <br />
          <p className="font-light text-base md:text-2xl text-pink-200 leading-relaxed tracking-wide text-center">
            Browse, apply, and land your dream job—all in one place!
          </p>
        </div>
      </motion.div>
      <button
        onClick={handleJoinUs}
        className="absolute top-8 right-8 bg-black text-white font-medium py-2 px-4 rounded-lg hover:bg-black transition duration-300 border-2 border-transparent hover:border-green-500 hover:border-r-indigo-500 hover:border-b-purple-500"
      >
        Join Us
      </button>
      <div className="mt-10">
        
      </div>
    </AuroraBackground>
  );
}
