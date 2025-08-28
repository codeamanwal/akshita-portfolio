"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AbtFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);

  const features = [
    {
      id: 1,
      image: "/f11.png",
      title: "Research-Driven creativity",
      description: "All projects are grounded deep in strategy and insight.",
    },
    {
      id: 2,
      image: "/f22.png",
      title: "Storytelling at the core",
      description: "Every visual is crafted to leave a lasting mark and make sense.",
    },
    {
      id: 3,
      image: "/f33.png",
      title: "Versatile yet impactful",
      description: "Each style is adapted without losing the bold, authentic touch.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollY(scrollTop);

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollOffset = window.scrollY + rect.top;
        setSectionTop(scrollOffset);
        setSectionHeight(sectionRef.current.offsetHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll progress within the section
  const getScrollProgress = () => {
    const progress = (scrollY - sectionTop) / sectionHeight;
    return Math.max(0, Math.min(progress, 1));
  };

  const scrollProgress = getScrollProgress();

  // Cards' staggered entrance based on scroll progress
  const getCardProgress = (index: number) => {
    const cardStart = index * 0.2; // Start cards earlier: 0%, 20%, 40%
    const cardEnd = cardStart + 0.3; // Each card takes 30% to complete: 0-30%, 20-50%, 40-70%
    if (scrollProgress < cardStart) return 0;
    if (scrollProgress > cardEnd) return 1;
    return (scrollProgress - cardStart) / (cardEnd - cardStart);
  };

  return (
    <section ref={sectionRef} className="hidden lg:block relative h-[300vh]">
      {/* Background (fixed) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <Image
          src="/Desktop.png"
          alt="Background workspace"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Foreground content pinned while scrolling */}
      <div className="sticky top-0 h-screen z-10 flex flex-col justify-center items-center px-4">
        <div className="max-w-6xl w-full max-[1024px]:scale-[1] max-[1400px]:scale-[0.8]">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            {features.map((feature, index) => {
              const progress = getCardProgress(index);
              const translateX = (1 - progress) * 200;
              const opacity = progress;

              return (
                <div
                  key={feature.id}
                  className="transition-all duration-300 ease-out"
                  style={{
                    transform: `translateX(${translateX}px)`,
                    opacity: opacity,
                  }}
                >
                  <div className="w-80 h-96 flex items-center justify-center">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={320}
                      height={384}
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
