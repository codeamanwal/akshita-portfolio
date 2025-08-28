"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <section ref={ref} className="w-full h-auto min-[1400px]:h-screen text-white">
            {/* Desktop Layout */}
            <div className="hidden lg:flex h-full relative">
                
                <div className="flex-1 bg-[#40352F] px-20 py-15 flex flex-col">
                    {/* Main Heading */}
                    <div className="mb-16">
                        <h1 className="text-[#AAC7FF] text-5xl min-[1400px]:text-6xl font-domine leading-18 tracking-[-0.57px] font-normal">
                        design today isn’t<br/> just aesthetic, it’s business-critical.
                        </h1>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-2 gap-32 flex-1">
                        {/* Left Column */}
                        <div className="flex flex-col">
                            {/* Horizontal line */}
                            <div className="border-t border-[#AAC7FF] w-full mb-4"></div>
                            
                            {/* Section heading */}
                            <h2 className="text-lg font-semibold uppercase text-[#AAC7FF] leading-8 mb-2">The Design Game</h2>
                            
                            {/* Push content to bottom with flex-grow */}
                            <div className="flex-grow"></div>
                            
                            {/* Content at bottom with increased spacing */}
                            <p className="text-base text-[#AAC7FF] leading-5 pr-8 mb-8 font-regular">
                            I believe great brands are built at the intersection of intent and identity. I care about smart decisions, scalable systems, and honest expression. From first insight to final file, I bring a mix of sharp thinking, empathy, and execution that helps teams move with confidence and taste.
                            </p>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col pr-2">
                            {/* Horizontal line */}
                            <div className="border-t border-[#AAC7FF] w-full mb-4"></div>
                            
                            {/* Content at same level as left column heading */}
                            <p className="text-sm text-[#AAC7FF] leading-5 mb-8">
                            I play the game differently—fair, collaborative, and bullshit-free. Because design deserves better than rushed briefs and unpaid pitches.
                            </p>
                            
                            {/* Push content to bottom with flex-grow */}
                            <div className="flex-grow"></div>
                            
                            {/* Content at bottom with increased spacing */}
                            <p className="text-base text-[#AAC7FF] leading-5 mb-14 ">
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
                    <Image
                        src="/women_portrait.png"
                        alt="woman"
                        width={700}
                        height={904} 
                        className="object-cover h-full absolute left-0"
                    />
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden h-auto bg-[#40352F] text-white flex flex-col mb-16 md:mb-20">
                {/* Content with padding */}
                <div className="px-4 lg:px-6 py-6 lg:py-8 relative">
                    {/* Main Heading */}
                    <div className="mb-6 lg:mb-8">
                        <h1 className="text-[#AAC7FF] text-2xl md:text-3xl lg:text-4xl font-domine leading-tight tracking-[-0.57px] font-normal">
                        design today isn’t<br/> just aesthetic, it’s business-critical.
                        </h1>
                    </div>

                    {/* Two Column Layout - Mobile */}
                    <div className="grid grid-cols-2 gap-4 lg:gap-8 mb-6 lg:mb-8">
                        {/* Left Column */}
                        <div className="flex flex-col">
                            {/* Horizontal line */}
                            <div className="border-t border-[#AAC7FF] w-full mb-2 lg:mb-3"></div>
                            
                            {/* Section heading */}
                            <h2 className="text-xs md:text-sm lg:text-base font-semibold uppercase text-[#AAC7FF] leading-4 md:leading-5 lg:leading-6 mb-2 md:mb-3">The Design Game</h2>
                            
                            {/* Reduced vertical spacing but keep flex-grow */}
                            <div className="flex-grow min-h-1 md:min-h-8"></div>
                            
                            {/* Content at bottom with reduced spacing */}
                            <p className="text-xs md:text-sm text-[#AAC7FF] leading-4 md:leading-5 pr-6 md:pr-4 mb-10 md:mb-6 font-regular">
                            I believe great brands are built at the intersection of intent and identity. I care about smart decisions, scalable systems, and honest expression. From first insight to final file, I bring a mix of sharp thinking, empathy, and execution that helps teams move with confidence and taste.
                            </p>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col">
                            {/* Horizontal line */}
                            <div className="border-t border-[#AAC7FF] w-full mb-2 md:mb-3"></div>
                            
                            {/* Content at same level as left column heading */}
                            <p className="text-xs md:text-sm text-[#AAC7FF] leading-4 md:leading-5 mb-2 md:mb-6">
                            I play the game differently—fair, collaborative, and bullshit-free. Because design deserves better than rushed briefs and unpaid pitches.
                            </p>
                            
                            {/* Reduced vertical spacing but keep flex-grow */}
                            <div className="flex-grow min-h-4 md:min-h-8"></div>
                            
                            {/* Content at bottom with reduced spacing */}
                            <p className="text-xs md:text-sm text-[#AAC7FF] leading-4 md:leading-5 mt-2 md:mt-6">
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
                    <div className="absolute inset-0 flex">
                        <Image
                            src="/women_portrait.png"
                            alt="woman"
                            width={400}
                            height={418}
                            className="object-cover h-full w-full"
                            priority
                        />
                    </div>
                </div>
            </div>
            
        </section>
    );
}