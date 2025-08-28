'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';


const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

interface FolderData {
  id: number;
  title: string;
  category: string;
  color: string;
  bgColor: string;
  svgPath: string;
  items: string[][]; // <-- changed from string[] to string[][]
  description: string;
  cardImage?: string;
}

const staticFoldersData: Omit<FolderData, "items" | "cardImage">[] = [
  {
    id: 1,
    title: "Podcasts",
    category: "Audio Content",
    color: "#F98322",
    bgColor: "bg-orange-500",
    svgPath: "/Vector 32.svg",
    description: "Engaging audio content and podcast appearances discussing design, branding, and creative processes."
  },
  {
    id: 2,
    title: "Collaborations",
    category: "Partnerships",
    color: "#AAC7FF",
    bgColor: "bg-blue-500",
    svgPath: "/Vector 31.svg",
    description: "Strategic partnerships and collaborative projects that bring innovative design solutions to life."
  },
  {
    id: 3,
    title: "Workshops",
    category: "Education",
    color: "#AAE786",
    bgColor: "bg-green-500",
    svgPath: "/Vector 33.svg",
    description: "Educational workshops and training sessions focused on design skills and creative development."
  }
];

export default function WorkShowcase() {
  const [foldersData, setFoldersData] = useState<FolderData[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);

  // Fetch from Strapi and merge with static data
  
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${STRAPI_URL}/api/work-showcase-folders?populate[cardImage]=true&populate[items]=true`
        );
        const json = await res.json();
        console.log(json);

        const apiData = json.data.map((entry: any) => ({
          id: entry.folderId,
          items: entry.items?.map((i: any) =>
            [i.line1, i.line2, i.line3].filter(Boolean)
          ) || [],
          cardImage: entry.cardImage
            ? "http://localhost:1337" + entry.cardImage.url
            : null
        }));

        const merged = staticFoldersData.map(folder => {
          const apiFolder = apiData.find((f: any) => f.id === folder.id);
          return {
            ...folder,
            items: apiFolder?.items || [],
            cardImage: apiFolder?.cardImage || "/BrandCraft.png"
          };
        });

        setFoldersData(merged);
      } catch (err) {
        console.error("Failed to fetch Strapi data", err);
        setFoldersData(staticFoldersData.map(f => ({ ...f, items: [], cardImage: "/BrandCraft.png" })));
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) return;
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
  }, [isMobile]);

  const getScrollProgress = () => {
    const progress = (scrollY - sectionTop) / sectionHeight;
    return Math.max(0, Math.min(progress, 1));
  };

  const scrollProgress = getScrollProgress();
  const animationProgress = isMobile ? 0 : scrollProgress;

  const handleFolderClick = (folderId: number) => {
    setSelectedFolder(selectedFolder === folderId ? null : folderId);
  };

  if (!foldersData.length) return null;

  return (
    <div className="relative h-[450px] lg:h-[300vh]">
      {/* Mobile Layout */}
      {isMobile ? (
        <div 
          className="relative h-full w-full flex justify-center"
          style={{
            backgroundImage: "url('/paperboard-texture.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative w-full max-w-7xl mt-24 -ml-6">
            <div className="relative flex justify-center pointer-events-none">
              <h1 className="text-[40px] ml-4 leading-[-0.95] font-light text-[#D1CFAE] -translate-y-12">
                /beyond the <span className='font-domine'>usual</span>
              </h1>
            </div>

            <div className="relative z-10 -mt-14 flex flex-col items-center">
              <div className="relative w-full max-w-xs">
                {foldersData.slice().reverse().map((folder, index) => (
                  <motion.div
                    key={folder.id}
                    className="absolute w-full cursor-pointer"
                    style={{ zIndex: index + 1, top: index * 30 }}
                    initial={{ y: 0 }}
                    animate={{ y: selectedFolder === folder.id ? (index === 0 ? -160 : -150) : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    onClick={() => handleFolderClick(folder.id)}
                  >
                    <div className="relative">
                      <Image
                        src={folder.svgPath}
                        alt={`${folder.title} folder`}
                        width={538}
                        height={341}
                        className="w-full max-w-xs drop-shadow-lg"
                      />
                      <div className="absolute top-1 left-4">
                        <span className="text-black font-semibold text-sm">{folder.title}</span>
                      </div>
                      <div className="absolute top-22 left-3 right-6 bottom-6">
                        <div className="text-black space-y-1 max-w-[270px]">
                          {folder.items.map((lines, itemIndex) => (
                            <div key={itemIndex} className="space-y-1">
                              {lines.map((line, lineIndex) => (
                                <div
                                  key={lineIndex}
                                  className="border-b border-black pb-1 last:border-b-0 last:pb-0"
                                >
                                  <span className="text-xs font-medium leading-relaxed">{line}</span>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                      {folder.cardImage && (
                        <motion.div
                          className="absolute right-[-30px] top-[10px] z-50"
                          initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ delay: 0.6, duration: 0.6 }}
                        >
                          <Image
                            src={folder.cardImage}
                            alt={`${folder.title} card`}
                            width={185}
                            height={185}
                            className="drop-shadow-xl w-[115px] h-[115px]"
                          />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Desktop Layout */
        <section ref={sectionRef} className="relative h-[300vh]">
          <div className="sticky top-0 h-screen z-10 flex items-center justify-center">
            <div 
              className="absolute inset-0 opacity-100"
              style={{
                backgroundImage: "url('/paperboard-texture.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            <div className="relative w-full max-[1400px]:scale-[0.7] max-w-7xl right-4">
              <div className="absolute flex items-center justify-center pointer-events-none">
                <h1 className="text-[80px] min-[1150px]:text-[120px] ml-32 font-light text-[#D1CFAE] -translate-y-36">
                  /beyond the <span className='font-domine'>usual</span>
                </h1>
              </div>

              <div className="relative z-10 ml-32 mb-32 flex flex-col items-center">
                <div className="relative w-full max-w-2xl">
                  {foldersData.map((folder, index) => {
                    let translateX = 0, translateY = 0;
                    if (animationProgress > 0) {
                      const disperseProgress = Math.min(animationProgress * 2, 1);
                      switch(index) {
                        case 0: translateX = -400 * disperseProgress; translateY = -100 * disperseProgress; break;
                        case 1: translateX = 0; translateY = -150 * disperseProgress; break;
                        case 2: translateX = 400 * disperseProgress; translateY = -100 * disperseProgress; break;
                      }
                    }

                    return (
                      <motion.div
                        key={folder.id}
                        className="absolute w-full cursor-pointer"
                        style={{ zIndex: index + 1, top: index * 50, transform: `translate(${translateX}px, ${translateY}px)` }}
                        initial={{ y: 0 }}
                        animate={{ y: selectedFolder === folder.id ? (index === 0 ? -260 : -250) : 0, x: translateX }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        onClick={() => handleFolderClick(folder.id)}
                      >
                        <div className="relative">
                          <Image
                            src={folder.svgPath}
                            alt={`${folder.title} folder`}
                            width={538}
                            height={341}
                            className="w-full max-w-lg drop-shadow-lg"
                          />
                          <div className="absolute top-2 left-8">
                            <span className="text-black font-semibold text-lg">{folder.title}</span>
                          </div>
                          <div className="absolute top-48 left-6 right-12 bottom-12">
                            <div className="text-black space-y-1 max-w-[350px]">
                              {folder.items.map((lines, itemIndex) => (
                                <div key={itemIndex} className="space-y-1">
                                  {lines.map((line, lineIndex) => (
                                    <div
                                      key={lineIndex}
                                      className="border-b border-black pb-2 last:border-b-0 last:pb-0 pr-4"
                                    >
                                      <span className="text-sm font-medium leading-relaxed">{line}</span>
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                          {folder.cardImage && (
                            <motion.div
                              className="absolute right-[50px] top-[80px] z-50"
                              initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
                              animate={{ opacity: 1, scale: 1, rotate: 0 }}
                              transition={{ delay: 0.6, duration: 0.6 }}
                            >
                              <Image
                                src={folder.cardImage}
                                alt={`${folder.title} card`}
                                width={185}
                                height={185}
                                className="drop-shadow-xl w-[185px] h-[185px]"
                              />
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
                <div className="h-64" />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}