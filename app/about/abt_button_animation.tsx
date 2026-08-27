"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fetchFromStrapi, getStrapiMedia } from "@/lib/strapi";


export default function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    // State for portrait URL
  const [portraitUrl, setPortraitUrl] = useState<string | null>(null);

  // Fetch portrait image from Strapi
  useEffect(() => {
    async function getPortrait() {
      try {
        const data = await fetchFromStrapi("/api/about-page-portrait?populate=*");
        const url = data?.data?.Portrait_Image?.url;
        if (url) setPortraitUrl(getStrapiMedia(url));
      } catch (err) {
        console.error("Failed to fetch portrait:", err);
      }
    }
    getPortrait();
  }, []);

    return (
        <section ref={ref} className="w-full h-auto min-[1400px]:h-screen text-white">
            {/* Desktop Layout */}
            <div className="hidden lg:flex h-full relative">
                
                <div className="flex-1 bg-[#40352F] px-12 xl:px-20 py-12 xl:py-16 flex flex-col justify-between">
                    {/* Main Heading */}
                    <div className="mb-12 xl:mb-16">
                        <h1 className="text-[#AAC7FF] text-4xl lg:text-5xl min-[1400px]:text-[64px] font-domine leading-[1.12] tracking-[-0.57px] font-normal">
                        design today isn’t<br /> just aesthetic, it’s<br /> business-critical.
                        </h1>
                    </div>

                    {/* Content Section matching exact reference structure */}
                    <div className="flex flex-col justify-between flex-1 max-w-[840px]">
                        {/* Top sub-row */}
                        <div className="grid grid-cols-2 gap-10 xl:gap-16 items-start">
                            {/* Left: Section Header */}
                            <div>
                                <div className="border-t border-[#AAC7FF]/40 w-full mb-4"></div>
                                <h2 className="text-sm xl:text-base font-semibold uppercase text-[#AAC7FF] tracking-wider">
                                    THE DESIGN GAME
                                </h2>
                            </div>

                            {/* Right: Pitch statement */}
                            <div>
                                <div className="border-t border-[#AAC7FF]/40 w-full mb-4"></div>
                                <p className="text-[13px] xl:text-[14px] text-[#AAC7FF] leading-[22px] xl:leading-[24px]">
                                    I play the game differently—fair, collaborative, and bullshit-free. Because design deserves better than rushed briefs and unpaid pitches.
                                </p>
                            </div>
                        </div>

                        {/* Bottom main body paragraphs */}
                        <div className="grid grid-cols-2 gap-10 xl:gap-16 pt-16 xl:pt-24 items-start">
                            {/* Left paragraph */}
                            <p className="text-[14px] xl:text-[15px] text-[#AAC7FF] leading-[26px] xl:leading-[28px]">
                                I believe great brands are built at the intersection of intent and identity. I care about smart decisions, scalable systems, and honest expression. From first insight to final file, I bring a mix of sharp thinking, empathy, and execution that helps teams move with confidence and taste.
                            </p>

                            {/* Right paragraph */}
                            <p className="text-[14px] xl:text-[15px] text-[#AAC7FF] leading-[26px] xl:leading-[28px]">
                                With 4+ years in brand identity and packaging, I’ve worked with fast-moving startups and founder-led brands to create design that cuts through noise and builds real connection. My work isn’t about trends — it’s about clarity, strategy, and story.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Rotating button positioned at the exact partition */}
                <motion.div
                    className="absolute top-30 left-[63%] -translate-x-1/2 -translate-y-1/2 rotate-12 cursor-pointer z-30"
                    style={{ rotate }}
                    transition={{ duration: 0.5, ease: "linear" }}
                >
                    <Image src="/rotating_button.png" alt="rotating" width={136} height={136} />
                </motion.div>

                <div className="flex-[0.7] relative bg-[#40352F] flex items-center justify-center overflow-hidden">
                {portraitUrl && (
                        <Image
                        src={portraitUrl}
                        alt="woman"
                        width={1400}
                        height={1808}
                        quality={100}
                        priority
                        unoptimized={true}
                        className="object-cover h-full absolute left-0"
                        />
                    )}
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden h-auto bg-[#40352F] text-white flex flex-col mb-16 md:mb-20">
                {/* Content with padding */}
                <div className="px-5 py-8 relative">
                    {/* Main Heading */}
                    <div className="mb-8">
                        <h1 className="text-[#AAC7FF] text-2xl sm:text-3xl font-domine leading-tight tracking-[-0.57px] font-normal">
                        design today isn’t<br/> just aesthetic, it’s<br/> business-critical.
                        </h1>
                    </div>

                    {/* Two Column Layout - Mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
                        {/* Left Column */}
                        <div className="flex flex-col">
                            <div className="border-t border-[#AAC7FF] w-full mb-3"></div>
                            <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#AAC7FF] mb-3">The Design Game</h2>
                            <p className="text-xs sm:text-sm text-[#AAC7FF] leading-relaxed font-regular">
                            I believe great brands are built at the intersection of intent and identity. I care about smart decisions, scalable systems, and honest expression. From first insight to final file, I bring a mix of sharp thinking, empathy, and execution that helps teams move with confidence and taste.
                            </p>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col">
                            <div className="border-t border-[#AAC7FF] w-full mb-3"></div>
                            <p className="text-xs sm:text-sm text-[#AAC7FF] leading-relaxed mb-4">
                            I play the game differently—fair, collaborative, and bullshit-free. Because design deserves better than rushed briefs and unpaid pitches.
                            </p>
                            <p className="text-xs sm:text-sm text-[#AAC7FF] leading-relaxed">
                            With 4+ years in brand identity and packaging, I’ve worked with fast-moving startups and founder-led brands to create design that cuts through noise and builds real connection. My work isn’t about trends — it’s about clarity, strategy, and story.
                            </p>
                        </div>
                    </div>

                    {/* Rotating button positioned at the boundary - half in text, half in image */}
                    <motion.div
                        className="absolute -bottom-12 left-8 md:-bottom-14 md:left-12 cursor-pointer z-40"
                        style={{ rotate }}
                        transition={{ duration: 0.5, ease: "linear" }}
                    >
                        <Image src="/rotating_button.png" alt="rotating" width={95} height={95} className="md:w-28 md:h-28" />
                    </motion.div>
                </div>

                {/* Image Section - Full width, no padding, within section boundaries */}
                <div className="relative w-full h-[75vh] sm:h-[90vh] md:h-[100vh] lg:h-[60vh] bg-[#40352F] overflow-hidden">
                    {/* Women portrait image - positioned towards bottom right like in reference */}
                    {portraitUrl && (
            <div className="absolute inset-0 flex">
              <Image
                src={portraitUrl}
                alt="woman"
                width={800}
                height={836}
                quality={100}
                unoptimized={true}
                className="object-cover h-full w-full"
                priority
              />
            </div>
          )}
                </div>
            </div>
            
        </section>
    );
}