"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";

export interface ProjectData {
  id: string;
  name: string;
  industry: string;
  about: string;
  services: string;
  images: {
    hero: string;
    gallery: string[];
  };
  details: {
    challenge: string;
    solution: string;
    outcome: string;
  };
}

export function ProjectDetailClient({ project }: { project: ProjectData }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FEFCE4]">
        {/* Hero Image */}
        <div className="relative rounded-lg bg-white mb-16">
          <Image
            src={project.images.hero}
            alt={project.name}
            width={1280}
            height={800}
            className="w-full h-[915px] object-cover"
          />
        </div>

        {/* Hero Section */}
        <div className="mx-auto px-6 lg:pl-20 lg:pr-20">
          {/* Brand Name Section */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-12 lg:mt-28 mb-12 lg:mb-20">
            {/* Left Column - Brand Name & Details */}
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
                      {project.services}
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

            {/* Right Column - Description */}
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
            {/* First Row - Two Images Side by Side */}
            {project.images.gallery.length > 1 && (
              <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
                <div className="flex-1 relative overflow-hidden rounded-lg bg-white">
                  <Image
                    src={project.images.gallery[0]}
                    alt={`${project.name} gallery image 1`}
                    width={664}
                    height={539}
                    className="w-full h-93 md:h-full object-cover"
                  />
                </div>
                <div className="flex-1 relative overflow-hidden rounded-lg bg-white">
                  <Image
                    src={project.images.gallery[1]}
                    alt={`${project.name} gallery image 2`}
                    width={664}
                    height={539}
                    className="w-full h-93 md:h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* Single Large Image */}
            {project.images.gallery.length > 2 && (
              <div className="flex">
                <div className="w-full relative overflow-hidden rounded-lg bg-white">
                  <Image
                    src={project.images.gallery[2]}
                    alt={`${project.name} gallery image 3`}
                    width={1346}
                    height={639}
                    className="w-full h-[400px] lg:h-[650px] object-cover"
                  />
                </div>
              </div>
            )}

            {/* Text Section */}
            <motion.div
              className="flex flex-col gap-8 lg:gap-16 py-8 lg:py-16"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-16">
                <motion.div
                  className="flex flex-col md:pl-12 gap-6"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.p
                    className="text-xs md:text-sm lg:text-lg text-[#51331B] leading-relaxed lg:leading-[38px] pr-2 md:pr-4 lg:pr-10"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {project.details.challenge}
                  </motion.p>
                </motion.div>
                <motion.div
                  className="flex flex-col md:pl-12 gap-6 text-[#51331B]"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.p
                    className="text-xs md:text-sm lg:text-lg text-[#51331B] leading-relaxed lg:leading-[38px] pr-2 md:pr-4 lg:pr-10"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {project.details.solution}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            {/* Bottom Row - Mixed Layout */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 text-[#51331B]">
              {/* Left Side - Two Stacked Images */}
              <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-1/2 text-[#51331B]">
                {project.images.gallery[0] && (
                  <div className="relative overflow-hidden rounded-lg bg-white">
                    <Image
                      src={project.images.gallery[0]}
                      alt="Product detail 1"
                      width={664}
                      height={400}
                      className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover"
                    />
                  </div>
                )}
                {project.images.gallery[1] && (
                  <div className="relative overflow-hidden rounded-lg bg-white">
                    <Image
                      src={project.images.gallery[1]}
                      alt="Product detail 2"
                      width={664}
                      height={400}
                      className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Right Side - Large Image with Text Overlay */}
              {project.images.gallery[2] && (
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative overflow-hidden rounded-lg bg-white h-full">
                    <Image
                      src={project.images.gallery[2]}
                      alt="Product showcase"
                      width={664}
                      height={816}
                      className="w-full h-[400px] lg:h-full object-cover"
                    />
                    {/* Text Overlay */}
                    <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 right-4 lg:right-8">
                      <div className="bg-green-600 text-white p-4 lg:p-6 rounded-lg">
                        <h3 className="text-lg lg:text-2xl font-bold mb-1 lg:mb-2">CRAVE THE CRUNCH</h3>
                        <h4 className="text-base lg:text-xl">LOVE THE protein!</h4>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Final Row - Two More Images */}
            <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
              {project.images.gallery[3] && (
                <div className="flex-1 relative overflow-hidden rounded-lg bg-white">
                  <Image
                    src={project.images.gallery[3]}
                    alt="Final showcase 1"
                    width={664}
                    height={539}
                    className="w-full h-93 md:h-[400px] lg:h-[539px] object-cover"
                  />
                </div>
              )}
              {project.images.gallery[4] && (
                <div className="flex-1 relative overflow-hidden rounded-lg bg-white">
                  <Image
                    src={project.images.gallery[4]}
                    alt="Final showcase 2"
                    width={664}
                    height={539}
                    className="w-full h-93 md:h-[400px] lg:h-[539px] object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailClient;


