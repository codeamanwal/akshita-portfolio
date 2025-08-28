"use client";
import React from "react";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="relative bg-[#C29776] text-white px-0 lg:px-12 pt-10 pb-8 lg:pb-20 rounded-t-[2rem] overflow-hidden">
      <div className="relative z-10 ">
        <h1 className="text-[3rem] lg:mx-5 justify-center flex px-4 md:text-[8rem] lg:text-[10rem]   leading-none text-[#FEFCE4]">
          <span className="font-domine  md:mx-4 mx-1 sm:text-[4rem] md:text-[5rem] lg:text-[10rem]   leading-none">
            akshita
          </span>{" "}
          <span className="sm:text-[4rem] lg:mx-4 mx-1  md:text-[5rem] lg:text-[10rem]   leading-none">
            agarwal<span className="font-domine">*</span>
          </span>
        </h1>

        <div className="absolute left-1/2 top-[17%] md:top-[20%] lg:top-[35%] transform -translate-x-1/2 -translate-y-37 z-2">
          <div className=" ">
            <img
              src="/moniter.png"
              alt="Monitor"
              width={500}
              height={30}
              className="max-[1024px]:max-w-sm md:scale-100 overflow-visible"
            />
          </div>
        </div>

        <div className="mt-60 min-[625px]:mt-70 lg:mt-40 flex flex-wrap lg:mx-10 md:justify-between items-center text-black text-lg font-light px-4 lg:px-0">
          <div className="flex max-[1024px]:w-full max-[1024px]:justify-between space-x-6">
            <Link href="/work" className="relative group transition-all duration-300 hover:text-[#2C2216]">
              /work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2C2216] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/play" className="relative group transition-all duration-300 hover:text-[#2C2216]">
              /play
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2C2216] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="relative group transition-all duration-300 hover:text-[#2C2216]">
              /about
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2C2216] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="relative group transition-all duration-300 hover:text-[#2C2216]">
              /contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2C2216] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/journals" className="hidden lg:block relative group transition-all duration-300 hover:text-[#2C2216]">
              /journal
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2C2216] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
          <div className="flex max-[1024px]:w-full max-[1024px]:justify-between md:space-x-6 mt-4 lg:mt-0">
            <Link href="/journals" className="lg:hidden relative group transition-all duration-300 hover:text-[#2C2216]">
              /journal
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2C2216] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a href="#" target="_blank" rel="noopener noreferrer" className="relative group transition-all duration-300 hover:text-[#2C2216]">
              /linkedin
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2C2216] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="relative group transition-all duration-300 hover:text-[#2C2216]">
              /instagram
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2C2216] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="relative group transition-all duration-300 hover:text-[#2C2216]">
              /behance
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2C2216] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
