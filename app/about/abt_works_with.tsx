// "use client";

// import React from 'react';
// import { ArrowUpRight } from 'lucide-react';
// import Image from "next/image";
// import Link from 'next/link';

// export default function WorksWith() {
//     return (
//         <>
//         <section className="py-20">
//         <div className="w-[90%] lg:mx-auto pl-5 lg:px-4">
//           <div className="grid grid-cols-[repeat(1,minmax(330px,1fr))] lg:grid-cols-2 gap-2 lg:gap-36 items-start">
//             <div>
//               <h2 className="text-4xl lg:text-5xl text-[#51331B] mb-8 -mt-8 leading-14">
//                 <span className="">/who </span><span className="font-domine">i</span>
//                 <br />
//                 <span className="font-domine">work with:</span>
//               </h2>
//               <p className="text-[#51331B] text-sm lg:text-lg leading-6 lg:leading-7 pr-0">
//                 Passionate about fair creative practices and building a strong design community, I&rsquo;m here to make brands look good and mean something. My industry connections and sharp eye for final output mean I know how to make ideas look good—and make sense.
//               </p>
//             </div>
            
//             <div>
//               <p className="text-[9px] lg:text-base font-normal tracking-[4px] leading-4 lg:leading-7 uppercase text-[#51331B] mb-10 lg:mb-8 mt-10 lg:mt-8">
//                 I WORK WITH FOUNDERS ACROSS SECTORS THAT ARE PRE SEED - SERIES A
//               </p>

//               <div className="text-base lg:text-xl text-[#C8AD88] font-domine leading-7 lg:leading-8 tracking-tight space-y-2">
//                 <p>Food & Beverages | Skincare & Beauty | Personal Hygiene |
//                 Kids&rsquo; Brands | Petcare | Restaurants | Cafés |
//                 Wellness Retreats & Spas | Gyms | Dance Studios |
//                 Travel & Experience | Co-working Spaces |
//                 Communities | Creator Collectives
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           <div className="text-center mt-16 mb-60 lg:mb-112">
//             <Link href='/contact'>
//               <button className="inline-flex items-center px-4 lg:px-12 py-2 lg:py-3 border border-[#51331B] text-[#51331B] active:bg-[#51331B] active:text-white lg:hover:bg-[#51331B] lg:hover:text-white transition-colors duration-200 group">
//                 <span className="mr-2 font-regular text-base lg:text-xl leading-6 lg:leading-7 tracking-tight">start a project</span>
//                 <ArrowUpRight className="w-5 h-5 group-active:translate-x-1 group-active:-translate-y-1 lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1 transition-transform duration-200" />
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Photo Collage Section - Outside section for better positioning */}
//       <div className="relative z-0 max-[1024px]:scale-[1] max-[1400px]:scale-[0.6] -mt-32 h-80 overflow-visible">
//         <div className="max-w-sm lg:max-w-6xl mx-auto px-2 lg:px-4">
//           <div className="grid grid-cols-12 gap-2 lg:gap-4 relative">
//             {/* Photo 1 - Empty frame for image */}
//             <div className="col-span-6 lg:col-span-3 transform rotate-[6deg] hover:translate-y-[-120px] hover:z-15 transition-all duration-500 ease-out cursor-pointer -mt-8 -ml-2 lg:-mt-58 lg:-ml-22 w-[113px] h-[174px] lg:w-[274px] lg:h-[417px]">
//               <div className="bg-[#E9DAB6] p-1 lg:p-4 shadow-lg w-full h-full">
//                 <div className="w-full h-full bg-gray-100 overflow-hidden">
//                   <Image
//                     src="/work1.png"
//                     alt="Photo 1"
//                     width={274}
//                     height={417}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//               </div>
//             </div>
            
//             {/* Photo 2 - Empty frame for image with gap from photo 1 */}
//             <div className="col-span-6 lg:col-span-3 transform rotate-[2deg] hover:translate-y-[-120px] z-15 hover:z-20 transition-all duration-500 ease-out cursor-pointer -mt-8 lg:-mt-48 -ml-6 lg:ml-14 w-[113px] h-[174px] lg:w-[274px] lg:h-[417px]">
//               <div className="bg-[#E9DAB6] p-1 lg:p-4 shadow-lg w-full h-full">
//                 <div className="w-full h-full bg-gray-100 overflow-hidden">
//                   <Image
//                     src="/work2.png"
//                     alt="Photo 2"
//                     width={274}
//                     height={417}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//               </div>
//             </div>
            
//             {/* Photo 3 - Empty frame for image with gap from photo 4 */}
//             <div className="col-span-6 col-start-1 lg:col-span-3 transform rotate-[9deg] hover:translate-y-[-120px] z-10 hover:z-5 transition-all duration-500 ease-out cursor-pointer -mt-52 lg:-mt-62 ml-62 lg:-ml-12 w-[113px] h-[174px] lg:w-[274px] lg:h-[417px]">
//               <div className="bg-[#E9DAB6] p-1 lg:p-4 shadow-lg w-full h-full">
//                 <div className="w-full h-full bg-gray-100 overflow-hidden">
//                   <Image
//                     src="/work3.png"
//                     alt="Photo 3"
//                     width={274}
//                     height={417}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//               </div>
//             </div>
            
//             {/* Photo 4 - Empty frame for image - Hidden on mobile */}
//             <div className="hidden lg:block col-span-3 transform rotate-[18deg] hover:translate-y-[-120px] hover:z-5 transition-all duration-500 ease-out cursor-pointer -mt-74 ml-24" style={{width: '274px', height: '417px'}}>
//               <div className="bg-[#E9DAB6] p-4 shadow-lg w-full h-full">
//                 <div className="w-full h-full bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="text-2xl font-light italic text-[#51331B] mb-2">Lorem Ipsum</div>
//                     <div className="text-lg font-light italic text-amber-700">Lorem</div>
//                     <div className="text-3xl font-light italic text-amber-900 mt-2">Design &</div>
//                     <div className="text-3xl font-light italic text-amber-900">Discovery</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Photo 5 - Empty frame for image */}
//             <div className="col-span-6 col-start-7 lg:col-span-3 lg:col-start-3 transform rotate-[-5deg] hover:translate-y-[-120px] z-25 hover:z-50 transition-all duration-500 ease-out cursor-pointer -mt-32 lg:-mt-96 -ml-25 lg:-ml-12 w-[113px] h-[174px] lg:w-[274px] lg:h-[417px]">
//               <div className="bg-[#E9DAB6] p-1 lg:p-4 shadow-lg w-full h-full">
//                 <div className="w-full h-full bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 lg:p-6 flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="text-sm lg:text-2xl font-light italic text-[#51331B] mb-1 lg:mb-2">Lorem Ipsum</div>
//                     <div className="text-xs lg:text-lg font-light italic text-amber-700">Lorem</div>
//                     <div className="text-lg lg:text-3xl font-light italic text-amber-900 mt-1 lg:mt-2">Design &</div>
//                     <div className="text-lg lg:text-3xl font-light italic text-amber-900">Discovery</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Photo 6 - Lorem Ipsum card (keeping as is) - Hidden on mobile */}
//             <div className="hidden lg:block col-span-3 col-start-8 transform rotate-[-8deg] hover:translate-y-[-120px] z-10 hover:z-50 transition-all duration-500 ease-out cursor-pointer -mt-108 ml-24" style={{width: '274px', height: '417px'}}>
//               <div className="bg-[#E9DAB6] p-4 shadow-lg w-full h-full">
//                 <div className="w-full h-full bg-gray-100 overflow-hidden">
//                   <Image
//                     src="/work1.png"
//                     alt="Photo 4"
//                     width={274}
//                     height={417}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       </>
//     );
// }

"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

type AboutImage = {
  id: number;
  order: number;
  image?: {
    id: number;
    name: string;
    alternativeText?: string | null;
    url: string; // e.g. /uploads/work1.webp
  };
};

export default function WorksWith() {
  const [images, setImages] = useState<AboutImage[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${STRAPI_URL}/api/about-images?populate=image&sort=order:asc&publicationState=live`,
          { cache: "no-store" }
        );
        const json = await res.json();
        const arr = Array.isArray(json?.data) ? json.data : [];
        setImages(arr);
      } catch (e) {
        console.error("Failed to load images from Strapi:", e);
        setImages([]);
      }
    })();
  }, []);

  const imgUrl = (idx: number) => {
    const url = images?.[idx]?.image?.url;
    return url ? `${STRAPI_URL}${url}` : "/placeholder.png";
  };

  const imgAlt = (idx: number) =>
    images?.[idx]?.image?.alternativeText ||
    images?.[idx]?.image?.name ||
    `Photo ${idx + 1}`;

  return (
    <>
      <section className="py-20">
        <div className="w-[90%] lg:mx-auto pl-5 lg:px-4">
          <div className="grid grid-cols-[repeat(1,minmax(330px,1fr))] lg:grid-cols-2 gap-2 lg:gap-36 items-start">
            <div>
              <h2 className="text-4xl lg:text-5xl text-[#51331B] mb-8 -mt-8 leading-14">
                <span className="">/who </span><span className="font-domine">i</span>
                <br />
                <span className="font-domine">work with:</span>
              </h2>
              <p className="text-[#51331B] text-sm lg:text-lg leading-6 lg:leading-7 pr-0">
              I work with founders across sectors—primarily at Pre-Seed to Series A stage—who are building consumer-facing brands with big ambition and sharp intent. Whether it’s launching from scratch or cleaning up what exists, I help turn scattered ideas into clear, compelling brand systems.
              </p>
            </div>

            <div>
              <p className="text-[9px] lg:text-base font-normal tracking-[4px] leading-4 lg:leading-7 uppercase text-[#51331B] mb-10 lg:mb-8 mt-10 lg:mt-8">
              AEarly-stage, high-intent consumer brands. Pre-Seed to Series A.
              </p>

              <div className="text-base lg:text-xl text-[#C8AD88] font-domine leading-7 lg:leading-8 tracking-tight space-y-2">
                <p>
                  Food & Beverages | Skincare & Beauty | Personal Hygiene |
                  Kids&rsquo; Brands | Petcare | Restaurants | Cafés |
                  Wellness Retreats & Spas | Gyms | Dance Studios |
                  Travel & Experience | Co-working Spaces |
                  Communities | Creator Collectives
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 mb-60 lg:mb-112">
            <Link href="/contact">
              <button className="inline-flex items-center px-4 lg:px-12 py-2 lg:py-3 border border-[#51331B] text-[#51331B] active:bg-[#51331B] active:text-white lg:hover:bg-[#51331B] lg:hover:text-white transition-colors duration-200 group">
                <span className="mr-2 font-regular text-base lg:text-xl leading-6 lg:leading-7 tracking-tight">start a project</span>
                <ArrowUpRight className="w-5 h-5 group-active:translate-x-1 group-active:-translate-y-1 lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1 transition-transform duration-200" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Collage Section - Outside section for better positioning */}
      <div className="relative z-0 max-[1024px]:scale-[1] max-[1400px]:scale-[0.6] -mt-32 h-80 overflow-visible">
        <div className="max-w-sm lg:max-w-6xl mx-auto px-2 lg:px-4">
          <div className="grid grid-cols-12 gap-2 lg:gap-4 relative">
            {/* Photo 1 - Image from Strapi */}
            <div className="col-span-6 lg:col-span-3 transform rotate-[6deg] hover:translate-y-[-120px] hover:z-15 transition-all duration-500 ease-out cursor-pointer -mt-8 -ml-2 lg:-mt-58 lg:-ml-22 w-[113px] h-[174px] lg:w-[274px] lg:h-[417px]">
              <div className="bg-[#E9DAB6] p-1 lg:p-4 shadow-lg w-full h-full">
                <div className="w-full h-full bg-gray-100 overflow-hidden">
                  <Image
                    src={imgUrl(0)}
                    alt={imgAlt(0)}
                    width={274}
                    height={417}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Photo 2 - Image from Strapi */}
            <div className="col-span-6 lg:col-span-3 transform rotate-[2deg] hover:translate-y-[-120px] z-15 hover:z-20 transition-all duration-500 ease-out cursor-pointer -mt-8 lg:-mt-48 -ml-6 lg:ml-14 w-[113px] h-[174px] lg:w-[274px] lg:h-[417px]">
              <div className="bg-[#E9DAB6] p-1 lg:p-4 shadow-lg w-full h-full">
                <div className="w-full h-full bg-gray-100 overflow-hidden">
                  <Image
                    src={imgUrl(1)}
                    alt={imgAlt(1)}
                    width={274}
                    height={417}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Photo 3 - Image from Strapi */}
            <div className="col-span-6 col-start-1 lg:col-span-3 transform rotate-[9deg] hover:translate-y-[-120px] z-10 hover:z-5 transition-all duration-500 ease-out cursor-pointer -mt-52 lg:-mt-62 ml-62 lg:-ml-12 w-[113px] h-[174px] lg:w-[274px] lg:h-[417px]">
              <div className="bg-[#E9DAB6] p-1 lg:p-4 shadow-lg w-full h-full">
                <div className="w-full h-full bg-gray-100 overflow-hidden">
                  <Image
                    src={imgUrl(2)}
                    alt={imgAlt(2)}
                    width={274}
                    height={417}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Photo 4 - Text card (unchanged) - Hidden on mobile */}
            <div className="hidden lg:block col-span-3 transform rotate-[18deg] hover:translate-y-[-120px] hover:z-5 transition-all duration-500 ease-out cursor-pointer -mt-74 ml-24" style={{width: '274px', height: '417px'}}>
              <div className="bg-[#E9DAB6] p-4 shadow-lg w-full h-full">
                <div className="w-full h-full bg-gradient-to-br overflow-hidden">
                <Image
                    src={imgUrl(2)}
                    alt={imgAlt(2)}
                    width={274}
                    height={417}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Photo 5 - Text card (unchanged) */}
            <div className="col-span-6 col-start-7 lg:col-span-3 lg:col-start-3 transform rotate-[-5deg] hover:translate-y-[-120px] z-25 hover:z-50 transition-all duration-500 ease-out cursor-pointer -mt-32 lg:-mt-96 -ml-25 lg:-ml-12 w-[113px] h-[174px] lg:w-[274px] lg:h-[417px]">
              <div className="bg-[#E9DAB6] p-1 lg:p-4 shadow-lg w-full h-full">
                <div className="w-full h-full bg-gradient-to-br overflow-hidden">
                <Image
                    src={imgUrl(2)}
                    alt={imgAlt(2)}
                    width={274}
                    height={417}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Photo 6 - Image from Strapi - Hidden on mobile */}
            <div className="hidden lg:block col-span-3 col-start-8 transform rotate-[-8deg] hover:translate-y-[-120px] z-10 hover:z-50 transition-all duration-500 ease-out cursor-pointer -mt-108 ml-24" style={{width: '274px', height: '417px'}}>
              <div className="bg-[#E9DAB6] p-4 shadow-lg w-full h-full">
                <div className="w-full h-full bg-gray-100 overflow-hidden">
                  <Image
                    src={imgUrl(3)}
                    alt={imgAlt(3)}
                    width={274}
                    height={417}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
