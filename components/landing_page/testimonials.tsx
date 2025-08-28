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
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-10">
//         <span className="font-sans">/letters</span> from clients
//       </h2>

//       {/* Mobile: vertical stack */}
//       {/* Mobile: vertical stack */}
//       <div className="relative flex flex-col items-center justify-center lg:hidden">
//         <button 
//           onClick={prev}
//           className="mb-4 z-10 p-2 hover:scale-105 transition cursor-pointer"
//         >
//           <Image src="/arrowupmobile.png" alt="up" width={24} height={24} />
//         </button>

//         <div className="relative h-[420px] w-[90vw] max-w-[340px] flex items-center justify-center overflow-visible">
//           {cardData.map((card, i) => {
//             const position = (i - current + cardData.length) % cardData.length;

//             const styles: { [key: number]: string } = {
//               0: "rotate-[0deg] -translate-y-[120px] scale-[0.95] z-0",
//               1: "rotate-0 translate-y-0 scale-100 z-10",
//               2: "rotate-[-12deg] translate-y-[90px] scale-[0.95] z-0",
//             };

//             return (
//               <div
//                 key={card.id}
//                 className={`absolute top- left-1/2 w-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out transform ${
//                   styles[position] || "opacity-0 scale-90"
//                 } ${position === 1 ? "brightness-100" : "brightness-65"}`}
//               >
//                 <Image
//                   src={card.url}
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

type Testimonial = {
  id: number;
  name: string;
  brand: string;
  quote: string;
  number: number | null;
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/testimonials`
        );
        const data = await res.json();

        const mapped = data.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          brand: item.brand,
          quote: item.quote?.[0]?.children?.[0]?.text || "",
          number: item.number,
        }));

        setTestimonials(mapped);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
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
            const position = (i - current + testimonials.length) % testimonials.length;

            const styles: { [key: number]: string } = {
              0: "rotate-[-6deg] -translate-x-[60%] z-0",
              1: "rotate-0 z-20",
              2: "rotate-[6deg] translate-x-[60%] z-0",
            };

            return (
              <div
                key={t.id}
                className={`absolute w-[545px] h-[350px] bg-[#e4d9bc] text-black 
                   shadow-lg p-8 flex flex-col 
                  transition-all duration-500 ease-in-out transform
                  ${styles[position] || "opacity-0 scale-90"} 
                  ${position === 1 ? "brightness-100" : "brightness-75"}`}
              >
                {/* Top row: name + number */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-[cursive] italic">{t.name}</h3>
                  <span className="text-red-700 font-bold text-xl border border-red-700 px-2 py-1">
                    {t.number ? String(t.number).padStart(2, "0") : ""}
                  </span>
                </div>

                {/* Main content divided */}
                <div className="flex flex-1">
                  {/* Left side (name already above, here brand at bottom) */}
                  <div className="flex flex-col justify-between w-[40%] pr-4">
                    <div></div>
                    <p className="text-sm uppercase tracking-wide font-semibold ">
                      {t.brand}
                    </p>
                  </div>

                  {/* Divider line */}
                  <div className="w-[1px] bg-gray-500 opacity-50 my-2"></div>

                  {/* Right side (quote) */}
                  <div className="flex-1 pl-4 flex items-center">
                    <p className="italic text-base leading-relaxed">
                      "{t.quote}"
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
      <div className="relative flex flex-col items-center justify-center lg:hidden">
        <button
          onClick={prev}
          className="mb-4 z-10 p-2 hover:scale-105 transition cursor-pointer"
        >
          <Image src="/arrowupmobile.png" alt="up" width={24} height={24} />
        </button>

        <div className="relative h-[420px] w-[90vw] max-w-[340px] flex items-center justify-center overflow-visible">
          {testimonials.map((t, i) => {
            const position = (i - current + testimonials.length) % testimonials.length;

            const styles: { [key: number]: string } = {
              0: "rotate-[0deg] -translate-y-[120px] scale-[0.95] z-0",
              1: "rotate-0 translate-y-0 scale-100 z-10",
              2: "rotate-[-12deg] translate-y-[90px] scale-[0.95] z-0",
            };

            return (
              <div
                key={t.id}
                className={`absolute top- left-1/2 w-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out transform h-[350px] bg-[#e4d9bc] text-black 
                  shadow-lg p-5 flex flex-col
                  ${styles[position] || "opacity-0 scale-90"} 
                  ${position === 1 ? "brightness-100" : "brightness-65"}`}
              >
                {/* Top row: name + number */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-[cursive] italic">{t.name}</h3>
                  <span className="text-red-700 font-bold text-lg border border-red-700 px-2 py-1">
                    {t.number ? String(t.number).padStart(2, "0") : ""}
                  </span>
                </div>

                {/* Main content divided */}
                <div className="flex flex-1">
                  {/* Left side (brand at bottom) */}
                  <div className="flex flex-col justify-between w-[40%] pr-3">
                    <div></div>
                    <p className="text-sm uppercase tracking-wide font-semibold">
                      {t.brand}
                    </p>
                  </div>

                  {/* Divider line */}
                  <div className="w-[1px] bg-gray-500 opacity-50 my-2"></div>

                  {/* Right side (quote) */}
                  <div className="flex-1 pl-3 flex items-center">
                    <p className="italic text-sm leading-relaxed">
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
          className="mt-4 z-10 p-2 hover:scale-105 transition cursor-pointer"
        >
          <Image src="/arrowdownmobile.png" alt="down" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
