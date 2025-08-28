// "use client";
// import { useRef } from "react";
// import { useScroll } from "framer-motion";
// import { featuredWork } from "./data";
// import WorkCard from "./card";


// export default function FeaturedWorkStack() {
//   const containerRef = useRef<HTMLElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 0.8", "end end"],
//   });

//   return (
//     <>
//       <main
//         ref={containerRef}
//         className="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
//       >
//         <div className="flex flex-col items-center justify-center ">
//           <div className="text-left z-10 relative"></div>
//           <div>
//             <div className="text-black mb-6 lg:mb-10">
//               <h1 className=" py-0 lg:py-2 text-[#51331B] text-4xl md:text-3xl  lg:text-5xl ">
//                 /featured{" "}
//                 <span className="relative inline-block">
//                   <span className="relative z-10 font-domine">work</span>
//                   <img
//                     src="/Vector.png"
//                     alt="circle"
//                     className="absolute inset-0 scale-[1.25] -top-0 left-0 w-full h-full z-0 pointer-events-none"
//                   />
//                 </span>
//               </h1>
//             </div>
//             {featuredWork.map((card, i) => {
//               const targetScale = 1;

//               return (
//                 <WorkCard
//                   key={card.id}
//                   i={i}
//                   card={card}
//                   progress={scrollYProgress}
//                   targetScale={targetScale}
//                 />
//               );
//             })}
//           </div>
//         </div>
//         {/* Button Section */}
//       </main>
//     </>
//   );
// }

"use client";

import { useRef } from "react";
import { useScroll, MotionValue } from "framer-motion";
import WorkCard from "./card";

export interface WorkCardData {
  id: number;
  slug?: string;
  services: string;
  industry: string;
  name: string;
  mobile_image: string;
  image: string;
  fontColor: string; // expects Tailwind class string like "text-[#AAE786]"
  bgColor: string;   // expects Tailwind class string like "bg-[#183430]"
}

export default function FeaturedWorkStack({ projects }: { projects: WorkCardData[] }) {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end end"],
  });

  return (
    <>
      <main
        ref={containerRef}
        className="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
      >
        <div className="flex flex-col items-center justify-center ">
          <div className="text-left z-10 relative"></div>
          <div>
            <div className="text-black mb-6 lg:mb-10">
              <h1 className=" py-0 lg:py-2 text-[#51331B] text-4xl md:text-3xl  lg:text-5xl ">
                /featured{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 font-domine">work</span>
                  <img
                    src="/Vector.png"
                    alt="circle"
                    className="absolute inset-0 scale-[1.25] -top-0 left-0 w-full h-full z-0 pointer-events-none"
                  />
                </span>
              </h1>
            </div>

            {projects.map((card, i) => {
              const targetScale = 1;
              return (
                <WorkCard
                  key={card.id}
                  i={i}
                  card={card}
                  progress={scrollYProgress as MotionValue<number>}
                  targetScale={targetScale}
                />
              );
            })}
          </div>
        </div>
        {/* Button Section */}
      </main>
    </>
  );
}