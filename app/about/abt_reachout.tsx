"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';

export default function AbtReachout() {
  // Text for the auto-scrolling strip
  const scrollText =
    "LET'S BUILD SOMETHING BOLD. REACH OUT FOR COMMISSIONS, COLLABS, OR CONSULTS. LET'S BUILD SOMETHING BOLD. REACH OUT FOR COMMISSIONS, COLLABS, OR CONSULTS.";

  return (
    <div className="">
      {/* Auto-scrolling angled text strip */}
      <div className="relative h-10 lg:h-16 bg-[#AAC7FF] flex items-center overflow-hidden transform -rotate-[1.07deg] -mt-6 z-60">
        <div className="animate-scroll whitespace-nowrap">
          <span className="text-[#51331B] font-regular text-[11px] lg:text-lg tracking-[2.7px] lg:tracking-[4px] leading-5 lg:leading-8">
            {scrollText.repeat(1)}
          </span>
        </div>
      </div>

      <section className="relative z-50 py-6 lg:py-20 h-auto mb-0">
  <div className="max-w-6xl max-[1024px]:scale-[1] max-[1400px]:scale-[0.8] mx-20 px-4 relative">
    <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-center -translate-x-[4%] lg:-translate-x-[5%]">
      {/* Microphone Icon */}
      <div className="relative w-[138px] h-[151px] -ml-56 -mb-4 lg:static lg:w-[274px] lg:h-[299px] lg:mr-8 lg:ml-0 lg:mb-16 lg:mt-4">
        <Image
          src="/microphone.png"
          alt="Megaphone Icon"
          width={138}
          height={151}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Header and Button Group */}
      <div className="flex flex-col items-center">
        <div className="relative z-50 text-center lg:text-left">
          <h2 className="text-[34px] lg:text-[64px] leading-[40px] lg:leading-[74px] font-regular text-[#51331B] mb-4 text-left">
            <span className="block lg:ml-13">Got a vision?</span>
            <span className="block">Let’s make it real.</span>
          </h2>

          {/* Floral element */}
          <div className="absolute top-6 -right-8 w-[70px] h-[70px] lg:top-15 lg:-right-[17%] lg:w-[150px] lg:h-[150px] -z-10">
            <Image
              src="/floral.png"
              alt="Floral decoration"
              width={150}
              height={150}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <Link href="/contact">
          <button className="inline-flex justify-center gap-2 lg:gap-4 items-center w-[200px] h-[40px] px-6 py-2 border-2 border-[#51331B] text-[#51331B] active:bg-[#51331B] active:text-white lg:hover:bg-[#51331B] lg:hover:text-white transition-colors duration-200 group mt-6 lg:w-[260px] lg:h-[50px] lg:px-8 lg:py-3">
            <span className="text-base lg:text-xl leading-6 lg:leading-7 tracking-tight">
              start a project
            </span>
            <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 group-active:translate-x-1 group-active:-translate-y-1 lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1 transition-transform duration-200" />
          </button>
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* CSS for auto-scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 12s linear infinite;
        }
      `}</style>
    </div>
  );
}