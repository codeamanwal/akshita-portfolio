"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";

export default function AbtWorksWith() {
    const [howItsDoneOpen, setHowItsDoneOpen] = useState(false);
    const [whyItWorksOpen, setWhyItWorksOpen] = useState(false);
    const [whatsDifferentOpen, setWhatsDifferentOpen] = useState(true);
    return (
        <section className="bg-[#677261] pt-18 lg:pt-48 py-16 min-h-screen relative z-5 -mt-48">
        <div className="w-[90%] mx-auto px-1 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-60 lg:gap-36 items-start">
            {/* Left Column - Main Heading */}
            <div className="relative">
              <h2 className="text-[32px] lg:text-5xl font-normal text-[#AAE786] mb-8 leading-[38px] lg:leading-14 tracking-[-0.57px] lg:tracking-tight">
              behind every /brand that sticks, there’s a process that works
              </h2>
              
              {/* Hands Image */}
              <div className="relative">
                <Image 
                  src="/abt_hands.png" 
                  alt="hands" 
                  width={460} 
                  height={184}
                  className="z-10 scale-80 lg:scale-100 absolute top-[-78px] lg:right-[180px] lg:top-[-80px]"
                />
              </div>
            </div>
            
            {/* Right Column - Expandable Sections */}
            <div className="space-y-0">
              {/* How It's Done */}
              <div className="border-b border-[#E9DAB6] py-8 pt-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl lg:text-3xl font-medium text-[#FEFCE4] leading-[43.5px] lg:leading-14 tracking-[-0.23px] lg:tracking-tight">
                    How It&rsquo;s Done
                  </h3>
                  <button onClick={() => setHowItsDoneOpen(!howItsDoneOpen)}>
                    <div className="w-7 h-7 transform rotate-45 flex items-center justify-center">
                      {howItsDoneOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#FEFCE4] transform -rotate-45" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#FEFCE4] transform -rotate-45" />
                      )}
                    </div>
                  </button>
                </div>
                
                <AnimatePresence>
                  {howItsDoneOpen && (
                    <motion.div 
                      className="mt-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="text-[#FEFCE4] leading-6 lg:leading-7 tracking-[-0.31px] lg:tracking-tighter text-sm lg:text-base pr-16">
                      Every project starts with clarity - on the audience, the market, and <br/>the gaps worth owning. Design decisions are rooted in brand <br/>strategy, not just aesthetics.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              
              {/* Why It Works */}
              <div className="border-b border-[#E9DAB6] py-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl lg:text-3xl font-medium text-[#FEFCE4] leading-[43.5px] lg:leading-14 tracking-[-0.23px] lg:tracking-tight">
                    Why It Works
                  </h3>
                  <button onClick={() => setWhyItWorksOpen(!whyItWorksOpen)}>
                    <div className="w-7 h-7 transform rotate-45 flex items-center justify-center">
                      {whyItWorksOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#FEFCE4] transform -rotate-45" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#FEFCE4] transform -rotate-45" />
                      )}
                    </div>
                  </button>
                </div>
                
                <AnimatePresence>
                  {whyItWorksOpen && (
                    <motion.div 
                      className="mt-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="text-[#FEFCE4] leading-6 lg:leading-7 tracking-[-0.31px] lg:tracking-tighter text-sm lg:text-base pr-16">
                      When a brand knows what it stands for, it shows. This kind <br/>of alignment builds trust, recognition, and conversion—faster.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* What's Different - Expanded */}
              <div className="border-b border-[#E9DAB6] py-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl lg:text-3xl font-medium text-[#FEFCE4] leading-[43.5px] lg:leading-14 tracking-[-0.23px] lg:tracking-tight">
                    What&rsquo;s Different
                  </h3>
                  <button onClick={() => setWhatsDifferentOpen(!whatsDifferentOpen)}>
                    <div className="w-7 h-7 transform rotate-45 flex items-center justify-center">
                      {whatsDifferentOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#FEFCE4] transform -rotate-45" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#FEFCE4] transform -rotate-45" />
                      )}
                    </div>
                  </button>
                </div>
                
                <AnimatePresence>
                  {whatsDifferentOpen && (
                    <motion.div 
                      className="ml-0"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="text-[#FEFCE4] leading-6 lg:leading-7 tracking-[-0.31px] lg:tracking-tighter text-sm lg:text-base pr-16">
                      A research-informed, narrative-first approach that positions your<br/> brand to lead  - not just compete.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}