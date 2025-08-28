"use client";
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import React from 'react';
import {useRef}   from 'react'

export default function Hero() {
    const imageRef = useRef<HTMLDivElement | null>(null);
  return (
    <section className="bg-[#FEFCE4] w-full  py-5">
      <div>
        {" "}
        <div className=" hidden md:flex text-xs md:text-sm text-[#2C2216] tracking-wider  uppercase border-t border-b border-[#2C2216] py-2 flex-wrap justify-center gap-4 ">
          <Marquee speed={180}>
            <div>
              <ul className="flex flex-wrap gap-14">
                <li ></li>
                <li> Brand Strategy</li>
                <li>|</li>
                <li> Visual Identity </li>
                <li>|</li>
                <li> Brand Strategy </li>
                <li>|</li>
                <li> Packaging Design </li>
                <li>|</li>
                <li> Art Direction </li>
                <li>|</li>
                <li> UIUX </li>
                <li>|</li>
                <li> Publication </li>
                <li>|</li>

              </ul>
            </div>
          </Marquee>
        </div>
        <div className="md:hidden text-xs text-[#2C2216] tracking-wider  uppercase border-t border-b border-[#2C2216] py-2  flex flex-wrap justify-center gap-8">
          <Marquee>
            <div>
              <ul className="flex flex-wrap gap-8">
                <li ></li>
                <li> Brand Strategy</li>
                <li>|</li>
                <li> Visual Identity </li>
                <li>|</li>
                <li> Brand Strategy </li>
                <li>|</li>
                <li> Packaging Design </li>
                <li>|</li>
                <li> Art Direction </li>
                <li>|</li>
                <li> UIUX </li>
                <li>|</li>
                <li> Publication </li>
                <li>|</li>

              </ul>
            </div>
          </Marquee>
        </div>
      </div>

      {/* Middle Image for large screens */}
      <div
        className="w-auto py-10 hidden sm:flex items-center justify-center text-[#2C2216] text-sm"
        ref={imageRef}
      >
        <Image src="/herolanding.webp" alt="hero" width={1108} height={674} className="md:-ml-5" />
      </div>

      {/* Middle Image for mobile */}
      <div
        className="w-auto py-5 flex sm:hidden items-center justify-center text-[#2C2216] text-sm"
        ref={imageRef}
      >
        <Image src="/herolanding.webp" alt="hero" width={482} height={523} />
      </div>

      <div className="mt-8 flex flex-row items-start justify-between md:justify-center mx-4 md:mx-24">
  {/* Hero Content */}
  {/* Left Text Column (mobile stacked) */}
  <div className="flex flex-col items-start text-[#2C2216] text-sm md:text-base leading-relaxed mx-1 max-w-[50%] sm:max-w-2xs md:max-w-full lg:mx-18">
    <p>
      Strong brands aren’t just seen - they’re felt. They know who they’re speaking to, what they stand for, and how to show up in ways that actually stick. That’s where design comes in.
    </p>
  </div>

  <div className="flex flex-col items-start text-[#2C2216] text-sm md:text-base leading-relaxed max-w-[50%] sm:max-w-2xs md:max-w-full mx-1 sm:mx-8 lg:mx-18">
    <p>
      Not as the final layer, but as a strategic tool - one that turns positioning into presence, and decisions into identity. It’s what brings clarity and cohesion to every touchpoint- from shelves to screens and everything in between.
    </p>
  </div>
</div>

    </section>
  );
}
