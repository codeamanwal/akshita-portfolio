"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const LetsBuildBold = () => {
  return (
    <section className=" px-4 py-12 sm:py-16 md:py-20 lg:py-24 w-full relative flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Mobile-specific button: visit instagram */}
      <div className="md:hidden mb-8">
        {""}
        {/* Only visible on mobile, adds margin below */}
      </div>

      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto relative z-10 flex flex-col items-center justify-center">
        {/* Glasses Icon - Adjusted for responsive positioning */}
        <div
          className="absolute z-20"
          style={{
            top: "-20%", // Adjust based on visual
            left: "-5%", // Adjust based on visual
            width: "min(30%, 300px)", // Responsive width, max 150px
          }}
        >
          <Image
            src="/glasses.png"
            alt="glasses"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Label */}
        <p className="uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-[#51331B] mb-2 sm:mb-3 md:mb-4 md:-mr-23 ">
             Done with pretty-but-pointless?
        </p>

        {/* Heading */}
        <div className="relative">
          <h2 className="text-[1.5rem] xs:text-[1.8rem] sm:text-[2rem]  md:text-[2.8rem] lg:text-[3.2rem] xl:text-[3.6rem] text-[#51331B] font-serif  leading-[1.1] sm:leading-tight md:-mr-23">
            <span className="font-sans">Let’s play the /brand<br/> cards right
            </span>
          </h2>

          {/* Stamp positioned relative to heading/main content, adjusted for responsiveness */}
          <div
            className="absolute z-20"
            style={{
              bottom: "-25%", // Adjust based on visual
              right: "-52%", // Adjust based on visual
              width: "min(40%, 222px)", // Responsive width, max 120px
            }}
          >
            <Image
              src="/stamp.png"
              alt="stamp"
              width={600}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Button */}
        <div className="relative inline-block mt-12 md:mt-8">
          <Link href='/contact'>
            <button className="inline-flex items-center px-4 md:px-12 py-2 md:py-3 border border-[#51331B] text-[#51331B] active:bg-[#51331B] active:text-white lg:hover:bg-[#51331B] lg:hover:text-white transition-colors duration-200 group cursor-pointer">
              <span className="mr-2 font-regular text-base md:text-xl leading-6 md:leading-7 tracking-tight">start a project</span>
              <ArrowUpRight className="w-5 h-5 group-active:translate-x-1 group-active:-translate-y-1 lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LetsBuildBold;
