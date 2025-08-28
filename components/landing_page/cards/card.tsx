// "use client";

// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import { motion, useTransform, MotionValue } from "framer-motion";
// import { useRouter } from "next/navigation";
// import { WorkCardData } from "./data";

// interface WorkCardProps {
//   i: number;
//   card: WorkCardData;
//   progress: MotionValue<number>;
//   targetScale: number;
// }

// const NAVBAR_HEIGHT_PX = 96;

// const WorkCard: React.FC<WorkCardProps> = ({
//   i,
//   card,
//   progress,
//   targetScale,
// }) => {
//   const scale = useTransform(progress, [0, 1], [1, targetScale]);
//   const router = useRouter();
//   console.log(i, "i");

//   const handleNavigateToProject = () => {
//     // Create a URL-friendly slug from the card title
//     const slug = `${card.title.toLowerCase().replace(/\s+/g, '-')}`;
//     router.push(`/work/${slug}`);
//   };

//   return (
//     <div className="w-full md:w-3xl lg:w-6xl flex items-center justify-center sticky overflow-visible px-4 z-[5]" style={{ top: `${NAVBAR_HEIGHT_PX + i * 20}px` }}>
//       <motion.div
//         style={{
//           scale,
//           transformOrigin: "top",
//         }}
//         className="relative transform-gpu w-full"
//       >
//         <div
//           className={`h-auto md:p-5 ${card.bgColor} relative px-3 pt-5 pb-3 cursor-pointer`}
//           onClick={handleNavigateToProject}
//         >
//           <div className="items-start">
//             <div>
//               <div className="flex items-start justify-between">
//                 <p
//                   className={`text-xs md:text-sm flex items-start ${card.fontColor}`}
//                 >
//                   {card.category}
//                 </p>
//                 <p className={`text-xs md:text-sm ${card.fontColor}`}>
//                   /{card.type}
//                 </p>
//               </div>

//               <div className={`${card.fontColor} border opacity-15 my-2`}></div>
//               <div className="flex items-start justify-between">
//                 <h1
//                   className={` text-3xl md:text-4xl flex items-start  mt-1 mb-5 ${card.fontColor}`}
//                 >
//                   {card.title}
//                 </h1>
//                 <div className="p-2 mt-4 hover:bg-white/10 transition">
//                   <ArrowRight className={`${card.fontColor} h-5 w-5`} />
//                 </div>
//               </div>
//             </div>
//             <div className=""></div>
//           </div>

//           <div className=" ">
//             {/* Desktop */}
//             <div className="hidden md:block">
//               <Image
//                 src={card.image}
//                 alt={card.title}
//                 width={1080}
//                 height={638}
//               />
//             </div>

//             {/* Mobile */}
//             <div className="md:hidden">
//               <Image
//                 src={card.mobile_image}
//                 alt={card.title}
//                 width={400}
//                 height={436}
//               />
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default WorkCard;
"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useTransform, MotionValue } from "framer-motion";
import { useRouter } from "next/navigation";

// Define the correct interface for WorkCard props
export interface WorkCardData {
  id: number;
  slug?: string;
  services: string;
  industry: string;
  name: string;
  mobile_image: string;
  image: string;
  fontColor: string; // expects Tailwind class string like "text-[#AAE786]"
  bgColor: string; // expects Tailwind class string like "bg-[#183430]"
}

// Define the props interface for WorkCard
interface WorkCardProps {
  i: number;
  card: WorkCardData;
  progress: MotionValue<number>;
  targetScale: number;
}

const NAVBAR_HEIGHT_PX = 96;

const WorkCard: React.FC<WorkCardProps> = ({
  i,
  card,
  progress,
  targetScale,
}) => {
  const scale = useTransform(progress, [0, 1], [1, targetScale]);
  const router = useRouter();
  
  const handleNavigateToProject = () => {
    const slug =
      card.slug ||
      card.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    router.push(`/work/${slug}`);
  };

  return (
    <div
      className="w-full md:w-3xl lg:w-6xl flex items-center justify-center sticky overflow-visible px-4 z-[5]"
      style={{ top: `${NAVBAR_HEIGHT_PX + i * 20}px` }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: "top",
        }}
        className="relative transform-gpu w-full"
      >
        <div
          className={`h-auto md:p-5 ${card.bgColor} relative px-3 pt-5 pb-3 cursor-pointer rounded-lg`}
          onClick={handleNavigateToProject}
        >
          <div className="items-start">
            <div>
              <div className="flex items-start justify-between">
                <p className={`text-xs md:text-sm flex items-start ${card.fontColor}`}>
                  {card.services}
                </p>
                <p className={`text-xs md:text-sm ${card.fontColor}`}>
                  /{card.industry}
                </p>
              </div>
              <div className={`${card.fontColor} border opacity-15 my-2`}></div>
              <div className="flex items-start justify-between">
                <h1 className={`text-3xl md:text-4xl flex items-start mt-1 mb-5 ${card.fontColor}`}>
                  {card.name}
                </h1>
                <div className="p-2 mt-4 hover:bg-white/10 transition">
                  <ArrowRight className={`${card.fontColor} h-5 w-5`} />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            {/* Desktop */}
            <div className="hidden md:block">
              <Image
                src={card.image}
                alt={card.name}
                width={1080}
                height={638}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            {/* Mobile */}
            <div className="md:hidden">
              <Image
                src={card.mobile_image || card.image}
                alt={card.name}
                width={400}
                height={436}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkCard;