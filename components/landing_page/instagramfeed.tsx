"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const InstagramFeed = () => {
  // useEffect(() => {
  //  // Doesnt work
  //   const script = document.createElement("script");
  //   script.src = "https://www.powr.io/powr.js?platform=html";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     // Optional cleanup if needed
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <div>
      <div className="flex justify-between items-center md:m-8 m-4">
        <h1 className="text-[1rem] xs:text-[1.8rem] sm:text-[2rem]   md:text-[1rem] lg:text-[2rem] xl:text-[3.6rem] text-[#51331B]   leading-[1.1] sm:leading-tight">
          /daily <span className="font-domine ">updates</span>
        </h1>
        <button className="border-1 border-[#2C2216] text-[#2C2216] md:px-4 px-2 justify-center md:py-2 text-sm flex items-center md:gap-2 active:bg-[#2C2216] active:text-white lg:hover:bg-[#2C2216] lg:hover:text-white transition-colors group cursor-pointer">
          <span className="mr-2 font-regular text-base md:text-xl leading-6 md:leading-7 tracking-tight">view instagram</span>
          <ArrowUpRight className="w-5 h-5 group-active:translate-x-1 group-active:-translate-y-1 lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1 transition-transform duration-200" />
        </button>
      </div>
      <div className="powr-social-feed " id="aab29ce9_1750835854"></div>
    </div>
  );
};

export default InstagramFeed;
