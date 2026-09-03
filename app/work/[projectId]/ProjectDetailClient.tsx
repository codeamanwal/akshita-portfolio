"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";

export interface MediaItem {
  url: string;
  type: "image" | "video";
  alt?: string;
}

export interface ProjectData {
  id: string;
  name: string;
  industry: string;
  about: string;
  services: any;
  heroRatio?: "Ratio_16x9" | "Ratio_1x1";
  images: {
    hero: MediaItem | null;
    heroMobile?: MediaItem | null;
    gallery: MediaItem[];
    galleryMobile?: MediaItem[];
    galleryItems?: { media: MediaItem; ratio?: string }[];
  };
  details: {
    challenge: string;
    solution: string;
    outcome: string;
  };
}

export function ProjectDetailClient({ project }: { project: ProjectData }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const renderMedia = (
    media: MediaItem | null | undefined,
    alt: string,
    className: string,
    width: number,
    height: number
  ) => {
    if (!media || !media.url) {
      return (
        <div className={`${className} bg-[#E5E0D8] flex items-center justify-center text-[#51331B]/50 font-sans text-sm`}>
          No image
        </div>
      );
    }
    if (media.type === "video") {
      return (
        <video
          src={media.url}
          autoPlay
          loop
          muted
          playsInline
          className={className}
        />
      );
    }
    return (
      <Image
        src={media.url}
        alt={media.alt || alt}
        width={width}
        height={height}
        className={className}
      />
    );
  };

  const heroToShow =
    isMobile && project.images.heroMobile
      ? project.images.heroMobile
      : project.images.hero;

  const galleryToShow =
    isMobile && project.images.galleryMobile?.length
      ? project.images.galleryMobile
      : project.images.gallery;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FEFCE4]">
        {/* Hero Image */}
        <div className="relative rounded-lg bg-white mb-16 overflow-hidden">
          {renderMedia(
            heroToShow,
            project.name,
            project.heroRatio === "Ratio_1x1" || (project.heroRatio as any) === "1:1"
              ? "w-full aspect-square max-h-[85vh] object-cover"
              : "w-full aspect-video max-h-[90vh] object-cover",
            1280,
            800
          )}
        </div>

        {/* Hero Section */}
        <div className="mx-auto px-6 lg:pl-20 lg:pr-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-12 lg:mt-28 mb-12 lg:mb-20">
            <div className="flex flex-col gap-6 lg:gap-8 lg:w-1/2">
              <div className="flex flex-col gap-4">
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-[85px] font-regular tracking-[-1px] leading-tight lg:leading-27 text-[#51331B] -mt-2 lg:-mt-6"
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    rotateX: 45,
                    x: -100,
                  }}
                  whileInView={{
                    filter: "blur(0px)",
                    opacity: 1,
                    rotateX: 0,
                    x: 0,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {project.name}
                </motion.h1>
                <motion.div
                  className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 mt-8 lg:mt-14"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div className="flex flex-col gap-2">
                    <div className="absolute w-[80px] md:w-[100px] lg:w-[152px] h-0 border-t border-[#2C2216]" />
                    <motion.h4
                      className="text-lg md:text-xl lg:text[32px] text-[#51331B] leading-tight lg:leading-14 tracking-[-1px] mt-3 lg:mt-4"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.5,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      /services
                    </motion.h4>
                    <motion.p
                      className="text-xs md:text-sm lg:text-[18px] text-[#51331B] leading-relaxed lg:leading-[25px] pr-2 md:pr-4 lg:pr-10"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.6,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {Array.isArray(project.services)
                        ? project.services
                            .map((s: any) => (typeof s === "object" ? s?.name || s?.title || "" : String(s)))
                            .filter(Boolean)
                            .join(", ")
                        : typeof project.services === "object" && project.services !== null
                        ? (project.services as any)?.name || (project.services as any)?.title || ""
                        : String(project.services || "")}
                    </motion.p>
                  </motion.div>
                  <motion.div className="flex flex-col gap-2">
                    <div className="absolute w-[80px] md:w-[100px] lg:w-[152px] h-0 border-t border-[#2C2216]" />
                    <motion.h4
                      className="text-lg md:text-xl lg:text[32px] text-[#51331B] leading-tight lg:leading-14 tracking-[-1px] mt-3 lg:mt-4"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.7,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      /industry
                    </motion.h4>
                    <motion.p
                      className="text-xs md:text-sm lg:text-[18px] text-[#51331B] leading-relaxed lg:leading-[25px] pr-2 md:pr-4 lg:pr-10"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.8,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {project.industry}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="flex flex-col gap-6 lg:w-1/2 mt-8 lg:mt-0"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p
                className="text-sm md:text-lg text-[#51331B] leading-relaxed pr-0 md:pr-8 lg:pr-15"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {project.about}
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Main Content Gallery */}
        <div className="max-w-[1512px] mx-auto px-6 py-8 lg:py-16">
          <div className="flex flex-col gap-4 lg:gap-6">

            
            {/* Render galleryItems with ratio support if present in Strapi */}
            {project.images.galleryItems && project.images.galleryItems.length > 0 ? (
              <>
                {/* First 3 gallery items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  {project.images.galleryItems.slice(0, 3).map((item, idx) => {
                    const r = item.ratio || "Ratio_16x9";
                    const is1x1 = r === "Ratio_1x1" || r === "1:1";
                    const is4x3 = r === "Ratio_4x3" || r === "4:3";
                    const aspectClass = is1x1
                      ? "aspect-square"
                      : is4x3
                      ? "aspect-[4/3]"
                      : "aspect-video";
                    const colSpanClass = is1x1 ? "col-span-1" : "col-span-1 md:col-span-2";
                    return (
                      <div
                        key={idx}
                        className={`relative overflow-hidden rounded-lg bg-white ${colSpanClass} ${aspectClass}`}
                      >
                        {renderMedia(
                          item.media,
                          `${project.name} gallery item ${idx + 1}`,
                          "w-full h-full object-cover",
                          is1x1 ? 800 : is4x3 ? 1200 : 1346,
                          is1x1 ? 800 : is4x3 ? 900 : 639
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Challenge / Solution — after 3rd image */}
                <motion.div
                  className="flex flex-col gap-8 lg:gap-16 py-8 lg:py-16"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-16">
                    <motion.div className="flex flex-col md:pl-12 gap-6">
                      <motion.p className="text-xs md:text-sm lg:text-lg text-[#51331B] leading-relaxed lg:leading-[38px]">
                        {project.details.challenge}
                      </motion.p>
                    </motion.div>
                    <motion.div className="flex flex-col md:pl-12 gap-6">
                      <motion.p className="text-xs md:text-sm lg:text-lg text-[#51331B] leading-relaxed lg:leading-[38px]">
                        {project.details.solution}
                      </motion.p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Remaining gallery items after text */}
                {project.images.galleryItems.length > 3 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {project.images.galleryItems.slice(3).map((item, idx) => {
                      const r = item.ratio || "Ratio_16x9";
                      const is1x1 = r === "Ratio_1x1" || r === "1:1";
                      const is4x3 = r === "Ratio_4x3" || r === "4:3";
                      const aspectClass = is1x1
                        ? "aspect-square"
                        : is4x3
                        ? "aspect-[4/3]"
                        : "aspect-video";
                      const colSpanClass = is1x1 ? "col-span-1" : "col-span-1 md:col-span-2";
                      return (
                        <div
                          key={idx}
                          className={`relative overflow-hidden rounded-lg bg-white ${colSpanClass} ${aspectClass}`}
                        >
                          {renderMedia(
                            item.media,
                            `${project.name} gallery item ${idx + 4}`,
                            "w-full h-full object-cover",
                            is1x1 ? 800 : is4x3 ? 1200 : 1346,
                            is1x1 ? 800 : is4x3 ? 900 : 639
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            ) : (
              <>
                {galleryToShow.length === 1 && (
                  <div className="w-full relative overflow-hidden rounded-lg bg-white">
                    {renderMedia(
                      galleryToShow[0],
                      `${project.name} gallery 1`,
                      "w-full h-[400px] lg:h-[650px] object-cover",
                      1346,
                      639
                    )}
                  </div>
                )}
                {galleryToShow.length > 1 && (
                  <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
                    <div className="flex-1 relative overflow-hidden rounded-lg bg-white">
                      {renderMedia(
                        galleryToShow[0],
                        `${project.name} gallery 1`,
                        "w-full h-93 md:h-full object-cover",
                        664,
                        539
                      )}
                    </div>
                    <div className="flex-1 relative overflow-hidden rounded-lg bg-white">
                      {renderMedia(
                        galleryToShow[1],
                        `${project.name} gallery 2`,
                        "w-full h-93 md:h-full object-cover",
                        664,
                        539
                      )}
                    </div>
                  </div>
                )}

                {galleryToShow.length > 2 && (
                  <div className="flex">
                    <div className="w-full relative overflow-hidden rounded-lg bg-white">
                      {renderMedia(
                        galleryToShow[2],
                        `${project.name} gallery 3`,
                        "w-full h-[400px] lg:h-[650px] object-cover",
                        1346,
                        639
                      )}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Challenge / Solution — for old gallery path (no galleryItems) */}
            {(!project.images.galleryItems || project.images.galleryItems.length === 0) && (
              <motion.div
                className="flex flex-col gap-8 lg:gap-16 py-8 lg:py-16"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-16">
                  <motion.div className="flex flex-col md:pl-12 gap-6">
                    <motion.p className="text-xs md:text-sm lg:text-lg text-[#51331B] leading-relaxed lg:leading-[38px]">
                      {project.details.challenge}
                    </motion.p>
                  </motion.div>
                  <motion.div className="flex flex-col md:pl-12 gap-6">
                    <motion.p className="text-xs md:text-sm lg:text-lg text-[#51331B] leading-relaxed lg:leading-[38px]">
                      {project.details.solution}
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {galleryToShow.slice(3).length > 0 && (
  <div className="flex flex-col gap-6">
    {(() => {
      const remaining = galleryToShow.slice(3);

      // Case 1: less than 3
      if (remaining.length < 3) {
        return (
          <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
            {remaining.map((media, idx) => (
              <div
                key={idx}
                className="flex-1 relative overflow-hidden rounded-lg bg-white"
              >
                {renderMedia(
                  media,
                  `Gallery item ${idx + 4}`,
                  "w-full h-[250px] md:h-[400px] object-cover",
                  664,
                  400
                )}
              </div>
            ))}
          </div>
        );
      }

      // Case 2: exactly 3
      if (remaining.length === 3) {
        return (
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 text-[#51331B]">
            {/* Left Side - Two stacked */}
            <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-lg bg-white">
                {renderMedia(
                  remaining[0],
                  "Gallery item 4",
                  "w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover",
                  664,
                  400
                )}
              </div>
              <div className="relative overflow-hidden rounded-lg bg-white">
                {renderMedia(
                  remaining[1],
                  "Gallery item 5",
                  "w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover",
                  664,
                  400
                )}
              </div>
            </div>
            {/* Right Side - One large */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative overflow-hidden rounded-lg bg-white h-full">
                {renderMedia(
                  remaining[2],
                  "Gallery item 6",
                  "w-full h-[400px] lg:h-full object-cover",
                  664,
                  816
                )}
              </div>
            </div>
          </div>
        );
      }

      // Case 3: more than 3
      return (
        <>
          {/* First 3 with old layout */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 text-[#51331B]">
            <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-lg bg-white">
                {renderMedia(
                  remaining[0],
                  "Gallery item 4",
                  "w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover",
                  664,
                  400
                )}
              </div>
              <div className="relative overflow-hidden rounded-lg bg-white">
                {renderMedia(
                  remaining[1],
                  "Gallery item 5",
                  "w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover",
                  664,
                  400
                )}
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="relative overflow-hidden rounded-lg bg-white h-full">
                {renderMedia(
                  remaining[2],
                  "Gallery item 6",
                  "w-full h-[400px] lg:h-full object-cover",
                  664,
                  816
                )}
              </div>
            </div>
          </div>

          {/* Rest two per row */}
          {remaining.slice(3).map((media, idx) => {
            if (idx % 2 === 0) {
              const nextMedia = remaining.slice(3)[idx + 1];
              return (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row gap-4 lg:gap-6"
                >
                  <div className="flex-1 relative overflow-hidden rounded-lg bg-white">
                    {renderMedia(
                      media,
                      `Gallery item ${idx + 7}`,
                      "w-full h-[250px] md:h-[400px] object-cover",
                      664,
                      400
                    )}
                  </div>
                  {nextMedia && (
                    <div className="flex-1 relative overflow-hidden rounded-lg bg-white">
                      {renderMedia(
                        nextMedia,
                        `Gallery item ${idx + 8}`,
                        "w-full h-[250px] md:h-[400px] object-cover",
                        664,
                        400
                      )}
                    </div>
                  )}
                </div>
              );
            }
            return null;
          })}
        </>
      );
    })()}
  </div>
)}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailClient;