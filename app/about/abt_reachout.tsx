"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AbtReachout() {
  const scrollText =
    "LET'S BUILD SOMETHING BOLD. REACH OUT FOR COMMISSIONS, COLLABS, OR CONSULTS. ";

  return (
    <div className="">
      {/* Auto-scrolling angled text strip */}
      <div className="relative h-10 lg:h-16 bg-[#AAC7FF] flex items-center overflow-hidden transform -rotate-[1.07deg] -mt-6 z-60">
        <div className="animate-scroll whitespace-nowrap">
          <span className="text-[#51331B] font-regular text-[11px] lg:text-lg tracking-[2.7px] lg:tracking-[4px] leading-5 lg:leading-8">
            {scrollText.repeat(3)}
          </span>
        </div>
      </div>

      {/* Main Section */}
      <section className="relative z-50 py-10 lg:py-30 mb-20 pt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center lg:flex-row lg:justify-center lg:items-center gap-8">
          {/* Megaphone Icon */}
          <div className="w-[138px] h-[151px] lg:w-[274px] lg:h-[299px] flex-shrink-0">
            <Image
              src="/microphone.png"
              alt="Megaphone Icon"
              width={274}
              height={299}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Text + Floral + Button */}
          <div className="flex flex-col items-center relative">
            <div className="relative text-center">
              <h2 className="text-[38px] lg:text-[64px] leading-[42px] lg:leading-[65px] font-regular text-[#51331B] mb-6 mx-auto">
                Got a vision? <br />
                Let’s make it real.
              </h2>

              {/* Floral element - overlaps but doesn't push text */}
              <div className="absolute top-2 right-[-40px] w-[80px] h-[80px] -z-10 lg:top-5 lg:right-[-25%] lg:w-[161px] lg:h-[155px]">
                <Image
                  src="/floral.png"
                  alt="Floral decoration"
                  width={161}
                  height={155}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Button */}
            <Link href="/contact">
              <button className="inline-flex justify-center gap-2 lg:gap-4 items-center w-[200px] h-[40px] px-6 py-2 border-2 border-[#51331B] text-[#51331B] active:bg-[#51331B] active:text-white lg:hover:bg-[#51331B] lg:hover:text-white transition-colors duration-200 group mt-8 lg:w-[260px] lg:h-[50px] lg:px-8 lg:py-3">
                <span className="text-base lg:text-xl leading-6 lg:leading-7 tracking-tight">
                  start a project
                </span>
                <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 group-active:translate-x-1 group-active:-translate-y-1 lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1 transition-transform duration-200" />
              </button>
            </Link>
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