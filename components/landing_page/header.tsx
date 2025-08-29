"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "/work", href: "/work" },
  { name: "/about", href: "/about" },
  { name: "/play", href: "/play" },
  { name: "/journal", href: "/journals" }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();

  const animationRange = [0, 400];

  const headerHeight = useTransform(scrollY, animationRange, ["80vh", "96px"]);

  const logoScale = useTransform(scrollY, animationRange, ["7vw", 2]);

  const navOpacity = useTransform(scrollY, [300, 400], [0, 1]);

  // Track scroll direction
  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollYValue = window.scrollY;
      const direction = scrollYValue > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollYValue - lastScrollY > 10 || scrollYValue - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      setLastScrollY(scrollYValue > 0 ? scrollYValue : 0);
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [scrollDirection, lastScrollY]);

  // Calculate header visibility based on scroll direction
  const headerY = useTransform(scrollY, (value) => {
    return scrollDirection === "down" && value > 400 ? -100 : 0;
  });

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 flex lg:my-9 justify-center items-center bg-[#FEFCE4]"
        style={{ 
          height: headerHeight,
          y: headerY
        }}
      >
        <motion.div className="hidden lg:block" style={{ scale: logoScale }}>
          <Link href="/" className="text-xl lg:text-2xl text-[#2C2216] whitespace-nowrap">
            <span className="font-domine"> akshita</span>
            <span> agarwal</span><span className="font-domine">*</span>
          </Link>
        </motion.div>

        {/* Navigation & CTA: Absolutely positioned and fade in on scroll */}
        <motion.div
          className="hidden lg:flex absolute top-0 left-0 w-full h-24 px-4 lg:px-8 justify-between items-center"
          style={{ opacity: navOpacity }}
        >
          {/* Left: Nav links */}
          <nav className="flex space-x-6 text-[#2C2216] text-lg font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="relative group transition-all duration-300 hover:text-[#C19570]"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2C2216] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right: CTA Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-[#2C2216] text-[#fdf8e2] px-4 py-2 text-sm  flex items-center gap-1"
            >
              start a project{" "}
              <span>
                {" "}
                <Image
                  src="/buttonarrow.png"
                  alt="bottom"
                  width={15}
                  height={15}
                />{" "}
              </span>
            </Link>
          </div>
        </motion.div>

        {/* --- Mobile Header (Static) --- */}

        <div className="flex flex-col w-full lg:hidden ">
            <div className="lg:hidden flex items-center justify-between bg-[#FEFCE4] p-2">
                <Link href="/" className="text-2xl min-[425px]:text-3xl min-[475px]:ml-[5%] items-center justify-center flex  text-[#2C2216] lg:hidden  whitespace-nowrap">
                    <span className="font-domine pr-2 ">akshita</span>
                    <span> agarwal</span><span className="font-domine">*</span>
                </Link>
                <div className="flex items-center gap-4">
                  <Link
                    href="/contact"
                    className="bg-[#2C2216] text-[#fdf8e2] px-2 py-2 text-xs flex items-center gap-1"
                  >
                    start a project{" "}
                    <span>
                      <Image
                        src="/buttonarrow.png"
                        alt="bottom"
                        width={15}
                        height={15}
                      />
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-[#675744]"
                    aria-label="Toggle menu"
                  >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
            </div>
        </div>
        
        {/* --- Mobile Menu --- */}
          {isMenuOpen && (
              <motion.div
                  className="absolute top-full left-0 w-full bg-[#FEFCE4] border-t border-[#2C2216]/10 shadow-lg z-40"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
              >
              <nav className="flex flex-col py-4 px-6">
                  {navLinks.map((link) => (
                      <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="py-3 text-[#2C2216] text-lg font-medium border-b border-[#2C2216]/10 last:border-b-0 hover:bg-[#2C2216]/5 transition-colors"
                      >
                          {link.name}
                      </Link>
                    ))}
              </nav>
             </motion.div>
            )}
      </motion.header>
    </>
  );
}
