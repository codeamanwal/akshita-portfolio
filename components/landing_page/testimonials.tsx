// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// type Card = {
//   id: number;
//   url: string;
// };

// const cardData: Card[] = [
//   { id: 1, url: "/test3.png" },
//   { id: 2, url: "/test3.png" },
//   { id: 3, url: "/test1.png" },
// ];

// export default function SwipeCards() {
//   const [current, setCurrent] = useState(1);

//   const prev = () => {
//     setCurrent((prev) => (prev === 0 ? cardData.length - 1 : prev - 1));
//   };

//   const next = () => {
//     setCurrent((prev) => (prev === cardData.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="bg-[#40352F] py-16 px-4 text-center text-white">
//                   alt={`Card ${card.id}`}
//                   width={340}
//                   height={400}
//                   className="w-full h-auto "
//                 />
//               </div>
//             );
//           })}
//         </div>

//         <button 
//           onClick={next}
//           className="mt-4 z-10 p-2 hover:scale-105 transition cursor-pointer"
//         >
//           <Image src="/arrowdownmobile.png" alt="down" width={24} height={24} />
//         </button>
//       </div>

//       {/* Desktop: horizontal cards (your existing layout) */}
//       <div className="hidden lg:flex items-center justify-center gap-4 w-full max-w-6xl mx-auto">
//         <button
//           onClick={prev}
//           className="text-white p-2 hover:scale-105 transition z-10 cursor-pointer"
//         >
//           <Image src="/arrow.png" alt="slider" width={30} height={30} />
//         </button>

//         <div className="relative h-[500px] w-full flex items-center justify-center">
//           {cardData.map((card, i) => {
//             const position = (i - current + cardData.length) % cardData.length;

//             const styles: { [key: number]: string } = {
//               0: "rotate-[-3deg] -translate-x-[60%] z-0",
//               1: "rotate-0 z-20",
//               2: "rotate-[3deg] translate-x-[60%] z-0",
//             };

//             return (
//               <div
//                 key={card.id}
//                 className={`absolute transition-all duration-500 ease-in-out transform ${
//                   styles[position] || "opacity-0 scale-90"
//                 } ${position === 1 ? "brightness-100" : "brightness-75"}`}
//               >
//                 <Image
//                   src={card.url}
//                   alt={`Card ${card.id}`}
//                   width={500}
//                   height={700}
//                   className=" "
//                 />
//               </div>
//             );
//           })}
//         </div>

//         <button
//           onClick={next}
//           className="text-white p-2 hover:scale-105 transition z-10 cursor-pointer"
//         >
//           <Image src="/arrowr.png" alt="slider" width={30} height={30} />
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type Testimonial = {
  id: number;
  name: string;
  brand: string;
  quote: string;
  number: number | null;
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: 4,
    name: "Abhishek\nKumawat",
    brand: "YOLO\nROOTS",
    quote: "Working with Akshita was a game-changer for our brand. Their strategic design approach not only made our packaging stand out but also helped us connect with our audience on a deeper level. A true design partner in every sense!",
    number: 1,
  },
  {
    id: 7,
    name: "Shiba",
    brand: "WOMBS",
    quote: "Working with Akshita was a game-changer for our brand. Their strategic design approach not only made our packaging stand out but also helped us connect with our audience on a deeper level. A true design partner in every sense!",
    number: 2,
  },
  {
    id: 10,
    name: "Shankar",
    brand: "MINUS",
    quote: "Working with Akshita was a game-changer for our brand. Their strategic design approach not only made our packaging stand out but also helped us connect with our audience on a deeper level. A true design partner in every sense!",
    number: 3,
  },
  {
    id: 13,
    name: "Rishab",
    brand: "RETHINK",
    quote: "Working with Akshita was a game-changer for our brand. Their strategic design approach not only made our packaging stand out but also helped us connect with our audience on a deeper level. A true design partner in every sense!",
    number: 4,
  },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(DEFAULT_TESTIMONIALS);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "https://portfolio-cms-a0hn.onrender.com";
        const res = await fetch(
          `${baseUrl}/api/testimonials?sort=number:asc`
        );
        if (!res.ok) return;
        const data = await res.json();

        if (Array.isArray(data?.data) && data.data.length > 0) {
          const mapped = data.data.map((item: any) => ({
            id: item.id,
            name: item.name,
            brand: item.brand,
            quote: item.quote?.[0]?.children?.[0]?.text || item.quote || "",
            number: item.number,
          }));
          setTestimonials(mapped);
        }
      } catch (err) {
        console.warn("Could not load Strapi testimonials, using default fallback.");
      }
    };

    fetchTestimonials();
  }, []);

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  if (testimonials.length === 0) {
    return (
      <div className="bg-[#40352F] py-16 px-4 text-center text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-10">
          <span className="font-sans">/letters</span> from clients
        </h2>
        <p>No testimonials found.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#40352F] py-16 px-4 text-center text-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-10 text-[#e4d9bc]">
        <span className="font-sans">/letters</span> from clients
      </h2>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-center gap-4 w-full max-w-7xl mx-auto">
        <button
          onClick={prev}
          className="text-white p-2 hover:scale-105 transition z-10 cursor-pointer"
        >
          <Image src="/arrow.png" alt="slider" width={30} height={30} />
        </button>

        <div className="relative h-[545px] w-full flex items-center justify-center">
          {testimonials.map((t, i) => {
            const position = (i - current + 2 + testimonials.length) % testimonials.length;

            const styles: { [key: number]: string } = {
              0: "rotate-[-6deg] -translate-x-[60%] z-0",
              1: "rotate-0 z-20",
              2: "rotate-[6deg] translate-x-[60%] z-0",
            };

            const numStr = t.number ? String(t.number).padStart(2, "0") + "." : "01.";
            const cleanQuote = typeof t.quote === "string" ? t.quote.replace(/^["']|["']$/g, "") : "";

            return (
              <div
                key={t.id}
                className={`absolute w-[560px] h-[360px] bg-[#EAE3D2] text-black 
                   shadow-2xl p-7 flex gap-6 rounded-sm border border-[#d6cbba]
                  transition-all duration-500 ease-in-out transform
                  ${styles[position] || "opacity-0 scale-90"} 
                  ${position === 1 ? "brightness-100" : "brightness-75"}`}
                style={{
                  backgroundImage: "url('/paperboard-texture.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Left side: Name (Signature font) + Brand */}
                <div className="flex flex-col justify-between w-[38%] text-left py-1">
                  <div>
                    <h3 className={`${caveat.className} text-4xl xl:text-5xl text-[#3D2616] font-semibold leading-[1.1] whitespace-pre-line tracking-wide`}>
                      {t.name}
                    </h3>
                  </div>
                  <div>
                    <p className="font-domine uppercase text-sm xl:text-base font-bold text-[#3D2616] leading-tight tracking-wider whitespace-pre-line">
                      {t.brand}
                    </p>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="w-[1.5px] bg-[#3D2616]/40 my-1"></div>

                {/* Right side: Number Box + Quote */}
                <div className="flex-1 flex flex-col justify-between text-left py-1">
                  <div className="flex justify-end">
                    <div className="border border-dashed border-[#3D2616]/70 px-3 py-1.5 text-center">
                      <span className="font-domine text-[#9E2A2B] text-xl font-bold tracking-widest">
                        {numStr}
                      </span>
                    </div>
                  </div>

                  <div className="my-auto pr-2">
                    <p className="font-dm-sans text-[13px] xl:text-[14px] text-[#2D1F14] leading-[1.6] font-normal">
                      "{cleanQuote}"
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={next}
          className="text-white p-2 hover:scale-105 transition z-10 cursor-pointer"
        >
          <Image src="/arrowr.png" alt="slider" width={30} height={30} />
        </button>
      </div>

      {/* Mobile Layout */}
      <div className="relative flex flex-col items-center justify-center lg:hidden my-8">
        <button
          onClick={prev}
          className="mb-6 z-10 p-2 hover:scale-105 transition cursor-pointer"
        >
          <Image src="/arrowupmobile.png" alt="up" width={24} height={24} />
        </button>

        <div className="relative h-[370px] w-[90vw] max-w-[340px] flex items-center justify-center overflow-visible">
          {testimonials.map((t, i) => {
            const position = (i - current + 2 + testimonials.length) % testimonials.length;

            const styles: { [key: number]: string } = {
              0: "rotate-[-4deg] -translate-y-5 scale-[0.95] z-0 opacity-40",
              1: "rotate-0 translate-y-0 scale-100 z-10 opacity-100 shadow-xl",
              2: "rotate-[4deg] translate-y-5 scale-[0.95] z-0 opacity-70",
            };

            return (
              <div
                key={t.id}
                className={`absolute top-0 left-0 w-full h-[350px] bg-[#e4d9bc] text-black 
                  shadow-lg p-5 flex flex-col rounded-md border border-[#d6cbba]/60
                  transition-all duration-500 ease-in-out transform origin-center
                  ${styles[position] || "opacity-0 scale-90 pointer-events-none"} 
                  ${position === 1 ? "brightness-100" : "brightness-75"}`}
              >
                {/* Top row: name + number */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl sm:text-2xl font-[cursive] italic leading-tight text-[#3D2616] pr-2 break-words text-left">
                    {t.name}
                  </h3>
                  <span className="text-red-700 font-bold text-sm sm:text-base border border-red-700 px-2 py-0.5 shrink-0">
                    {t.number ? String(t.number).padStart(2, "0") : "01"}
                  </span>
                </div>

                {/* Main content divided */}
                <div className="flex flex-1 overflow-hidden">
                  {/* Left side (brand at bottom) */}
                  <div className="flex flex-col justify-between w-[35%] pr-2 shrink-0 text-left">
                    <div></div>
                    <p className="text-[10px] uppercase tracking-wide font-semibold text-[#3D2616] leading-tight break-words">
                      {t.brand}
                    </p>
                  </div>

                  {/* Divider line */}
                  <div className="w-[1px] bg-gray-500 opacity-40 my-2 shrink-0"></div>

                  {/* Right side (quote) */}
                  <div className="flex-1 pl-3 flex items-center overflow-y-auto max-h-[220px] scrollbar-thin text-left">
                    <p className="italic text-[12px] sm:text-[13px] leading-relaxed text-[#2D1F14]">
                      “{t.quote}”
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={next}
          className="mt-6 z-10 p-2 hover:scale-105 transition cursor-pointer"
        >
          <Image src="/arrowdownmobile.png" alt="down" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
