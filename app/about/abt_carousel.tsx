// "use client";

// import React, { useRef } from 'react';
// import { ArrowUpRight } from 'lucide-react';
// import Link from 'next/link';

// export default function AbtCarousel() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Simple carousel items
//   const carouselItems = [
//     {
//       id: 1,
//       image: "/Mask-group.png",
//     },
//     {
//       id: 2,
//       image: "/Mask-group.png",
//     },
//     {
//       id: 3,
//       image: "/Mask-group.png",
//     },
//     {
//       id: 4,
//       image: "/Mask-group.png",
//     },
//     {
//       id: 5,
//       image: "/Mask-group.png",
//     },
//   ];

//   // Create exactly 2 sets for seamless infinite scroll
//   const duplicatedItems = [...carouselItems];

//   return (
//     <section className=" py-20 relative h-auto lg:h-screen">
//       <div className="w-full px-4">
        
//         {/* Continuous Scroll Carousel Container */}
//         <div className="overflow-hidden">
//           <div 
//             ref={containerRef}
//             className="flex"
//             style={{
//               animation: 'scroll 10s linear infinite',
//               willChange: 'transform',
//               width: 'fit-content',
//             }}
//           >
//             {duplicatedItems.map((item, index) => (
//               <div 
//                 key={`${item.id}-${index}`}
//                 className="flex-shrink-0 w-[374px] h-[391px] mr-7"
//               >
//                 {/* Simple Image Card */}
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img 
//                   src={item.image}
//                   alt={`Project ${item.id}`}
//                   className="w-full h-full object-cover rounded-lg select-none"
//                   draggable={false}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* View Work Button */}
//         <div className="text-center mt-18 lg:mt-32 mb-32">
//           <Link href="/work">
//             <button className="inline-flex items-center px-8 py-3 border-2 border-[#51331B] text-[#51331B] active:bg-[#51331B] active:text-white lg:hover:bg-[#51331B] lg:hover:text-white transition-colors duration-200 group">
//               <span className="mr-2 text-lg">view work</span>
//               <ArrowUpRight className="w-5 h-5 group-active:translate-x-1 group-active:-translate-y-1 lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1 transition-transform duration-200" />
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import React, { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

interface CarouselItem {
  id: number;
  order: number;
  image: {
    url: string;
  } | null;
}

export default function AbtCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [carouselItems, setCarouselItems] = useState<CarouselItem[]>([]);

  useEffect(() => {
    async function fetchCarousel() {
      try {
        const res = await fetch(
          `${STRAPI_URL}/api/about-carousels?populate=image&sort=order:asc`
        );
        const json = await res.json();

        // Map Strapi response into our interface
        const items: CarouselItem[] = json.data.map((item: any) => ({
          id: item.id,
          order: item.order,
          image: item.image
            ? { url: `${STRAPI_URL}${item.image.url}` }
            : null,
        }));

        setCarouselItems(items);
      } catch (err) {
        console.error("Error fetching carousel:", err);
      }
    }

    fetchCarousel();
  }, []);

  // Duplicate items for infinite scroll
  const duplicatedItems = [...carouselItems];

  return (
    <section className="py-20 relative h-auto lg:h-screen">
      <div className="w-full px-4">
        {/* Continuous Scroll Carousel Container */}
        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className="flex"
            style={{
              animation: "scroll 10s linear infinite",
              willChange: "transform",
              width: "fit-content",
            }}
          >
            {duplicatedItems.map((item, index) => {
              const imgUrl = item.image?.url || "/placeholder.png";

              return (
                <div
                  key={`${item.id}-${index}`}
                  className="flex-shrink-0 w-[374px] h-[391px] mr-7"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imgUrl}
                    alt={`Project ${item.id}`}
                    className="w-full h-full object-cover rounded-lg select-none"
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* View Work Button */}
        <div className="text-center mt-18 lg:mt-32 mb-32">
          <Link href="/work">
            <button className="inline-flex items-center px-8 py-3 border-2 border-[#51331B] text-[#51331B] active:bg-[#51331B] active:text-white lg:hover:bg-[#51331B] lg:hover:text-white transition-colors duration-200 group">
              <span className="mr-2 text-lg">view work</span>
              <ArrowUpRight className="w-5 h-5 group-active:translate-x-1 group-active:-translate-y-1 lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
