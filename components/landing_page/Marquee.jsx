"use client";
import React from "react";
import MarqueeItem from "./MarqueeItem";

const Marquee = () => {
  // minimum 4 required
  const upperMarquee = [
   "design that",
   "design that",
   "design that",
   "design that",
   "design that",
   "design that",
   "design that",
   "design that",
   "design that",
  ]

  const lowerMarquee = [
  "makes moves",
  "makes moves",
  "makes moves",
  "makes moves",
  "makes moves",
  "makes moves",
  "makes moves",
  ];

  return (
    <div className="font-sans flex flex-col my-15 items-center justify-between overflow-x-hidden">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
    </div>
  );
};

export default Marquee;
