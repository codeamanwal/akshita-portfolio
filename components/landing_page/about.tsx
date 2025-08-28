import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="text-[#2C2216]  sm:py-8 px-4 sm:px-8 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8">
          <div className="flex items-center justify-center pt-4">
            <Link href="/work">
              <button className="border border-[#2C2216] text-[#2C2216] px-4 py-2 text-sm flex items-center gap-2 active:bg-[#2C2216] active:text-white lg:hover:bg-[#2C2216] lg:hover:text-white transition-colors group cursor-pointer">
                <span className="mr-2 font-regular text-base md:text-xl leading-6 md:leading-7 tracking-tight">view work</span>
                <ArrowUpRight className="w-5 h-5 group-active:translate-x-1 group-active:-translate-y-1 lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1 transition-transform duration-200" />
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap max-h-xl items-center">
            <div>
              <h1 className="text-4xl md:text-5xl text-[#51331B] leading-tight md:max-w-xl">
              what people remember when they see your 
/brand , that’s what I do.

              </h1>
            </div>

            <div className="w-full h-full mt-8 lg:mt-0">
              <Image
                src="/brandmemoryo.png"
                alt="A magnifying glass over a piece of paper"
                width={513}
                height={378}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 items-center md:items-start">
            <div>
              <p className="text-center md:text-left md:text-base lg:text-lg md:max-w-[600px]">
              Most brands don’t need more noise. They need clarity. A sharper story. A design system that just makes sense. That’s where I come in.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start  md:ml-6">
              <p className="md:text-base md:text-md uppercase mb-6 text-center md:text-left font-bold">
              Because in a crowded market, design is not just the finish-
              it’s the foundation.
              </p>
              <div className="flex items-center justify-center">
                <Link href="/about">
                  <button className="border-2 border-[#2C2216] font-semi-bold text-[#2C2216] px-4 py-2 text-sm flex items-center gap-2 md:gap-4 active:bg-[#2C2216] active:text-white lg:hover:bg-[#2C2216] lg:hover:text-white transition-colors group cursor-pointer">
                    <span className="mr-2 font-regular text-base md:text-xl leading-6 md:leading-7 tracking-tight">about</span>
                    <ArrowUpRight className="w-5 h-5 group-active:translate-x-1 group-active:-translate-y-1 lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1 transition-transform duration-200" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
