"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getStrapiMedia } from "@/lib/strapi";

type CardType = {
  id: number;
  url: string;
  title: string;
  order?: number;
  ratio?: string; // e.g. "1:1", "4:3", "2:1", "Ratio_1x1", "Ratio_16x9"
};

// Add interface for props
interface HorizontalScrollProps {
  cards?: CardType[]; // Make it optional so it can work both ways
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ cards: propCards }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-80%"]);

  const [fetchedCards, setFetchedCards] = useState<CardType[]>([]);

  // Fetch from Strapi only if no cards are provided via props
  useEffect(() => {
    if (propCards && propCards.length > 0) {
      // Use props cards if provided
      return;
    }

    const fetchImages = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "https://portfolio-cms-a0hn.onrender.com";
        const res = await fetch(`${baseUrl}/api/images?populate=*&sort[0]=order:asc`);
        if (!res.ok) return;
        const json = await res.json();
        if (json.data) {
          const allCards: CardType[] = [];
          json.data.forEach((item: any) => {
            // Try galleryImages repeatable component first
            const validGalleryItems = (item.galleryImages || []).filter(
              (gi: any) => gi.image?.url
            );

            if (validGalleryItems.length > 0) {
              // Use gallery images
              validGalleryItems.forEach((gi: any, idx: number) => {
                allCards.push({
                  id: item.id * 1000 + idx,
                  url: getStrapiMedia(gi.image.url),
                  title: item.slug || `Brand ${item.id}`,
                  order: gi.order ?? item.order ?? 999,
                  ratio: gi.ratio,
                });
              });
            } else if (item.brand?.url) {
              // Fallback: use the main brand image only if no valid gallery images
              allCards.push({
                id: item.id * 1000,
                url: getStrapiMedia(item.brand.url),
                title: item.slug || `Brand ${item.id}`,
                order: item.order ?? 999,
                ratio: "1:1",
              });
            }
          });
          // Sort all cards by their individual order
          allCards.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
          setFetchedCards(allCards);
        }
      } catch (err) {
        console.warn("Failed to fetch images:", err);
      }
    };
    fetchImages();
  }, [propCards]);

  // Use props cards if provided, otherwise use fetched cards
  const cards = propCards && propCards.length > 0 ? propCards : fetchedCards;

  return (
    <section ref={sectionRef} className="relative h-[200vh]">
      {/* Sticky Heading */}
      <div className="sticky top-0 lg:h-screen flex flex-col justify-between mt-20 lg:mt-0 p-5 lg:p-20 z-10">
        <h1 className="text-[#51331B] text-[40px] lg:text-7xl leading-tight z-0">
          /brand identities <br />
          that drive <span className="font-domine"> success</span>
        </h1>
        <div className="lg:mt-10 relative z-50">
          <Link href="/work">
            <button className="border m-10 border-[#51331B] text-[#51331B] px-4 py-2 text-sm flex items-center gap-2 active:bg-[#51331B] active:text-white lg:hover:bg-[#51331B] lg:hover:text-white transition-colors group cursor-pointer relative z-50">
              <span className="mr-2 font-regular text-base lg:text-xl leading-6 lg:leading-7 tracking-tight">
                view work
              </span>
              <ArrowUpRight className="w-5 h-5 group-active:translate-x-1 group-active:-translate-y-1 lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </Link>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div className="absolute top-0 h-full w-full pointer-events-none z-20">
        <div className="sticky top-0 h-screen flex p-5 lg:p-20 overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-4 lg:gap-12 px-5 lg:px-20 relative items-center lg:items-start z-20 pointer-events-none"
          >
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`relative mt-5 pointer-events-auto ${
                  index % 2 === 0 ? "lg:top-0" : "lg:top-[300px]"
                }`}
              >
                <Card card={card} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  // Normalize ratio — Strapi may send "1:1" or "Ratio_1x1" etc.
  const raw = card.ratio || "1:1";
  const ratio = raw === "Ratio_1x1" ? "1:1"
    : raw === "Ratio_4x3" ? "4:3"
    : raw === "Ratio_16x9" ? "16:9"
    : raw; // already "1:1" / "4:3" / "2:1"

  const ratioStyles: {
    [key: string]: { w: number; h: number; className: string };
  } = {
    "1:1": {
      w: 300,
      h: 300,
      className: "w-[180px] h-[180px] lg:w-[300px] lg:h-[300px] aspect-square",
    },
    "4:3": {
      w: 360,
      h: 270,
      className: "w-[200px] h-[150px] lg:w-[360px] lg:h-[270px] aspect-[4/3]",
    },
    "16:9": {
      w: 400,
      h: 225,
      className: "w-[240px] h-[135px] lg:w-[400px] lg:h-[225px] aspect-video",
    },
    "2:1": {
      w: 400,
      h: 200,
      className: "w-[240px] h-[120px] lg:w-[400px] lg:h-[200px] aspect-[2/1]",
    },
  };

  const style = ratioStyles[ratio] || ratioStyles["1:1"];

  return (
    <div className={`rounded-xl overflow-hidden shadow-md bg-white ${style.className}`}>
      <Image
        src={card.url}
        alt={card.title}
        width={style.w}
        height={style.h}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default HorizontalScroll;