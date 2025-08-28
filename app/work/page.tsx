// "use client";
// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Navbar from '@/components/navbar';

// interface Project {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
//   tags?: string[];
//   size: 'small' | 'medium' | 'large' | 'full';
// }

// export default function WorkPage() {
//   const projects: Project[] = [
//     {
//       id: 'green-oasis',
//       title: 'Green Oasis',
//       description: 'Farm To Table Restaurant Serving Fresh Experiences',
//       image: '/proj1.png',
//       tags: ['branding'],
//       size: 'large'
//     },
//     {
//       id: 'fitfeast',
//       title: 'FitFeast',
//       description: 'Protein Packaging that stands out',
//       image: '/proj2.png',
//       tags: ['packaging'],
//       size: 'large'
//     },
//     {
//       id: 'green-oasis-2',
//       title: 'Green Oasis',
//       description: 'Farm To Table Restaurant Serving Fresh Experiences',
//       image: '/proj3.png',
//       tags: ['branding'],
//       size: 'full'
//     },
//     {
//       id: 'rethink-hydration',
//       title: 'Rethink!',
//       description: 'A bold take on hydration',
//       image: '/proj4.png',
//       tags: ['ui/ux'],
//       size: 'small'
//     },
//     {
//       id: 'green-oasis-3',
//       title: 'Green Oasis',
//       description: 'Farm To Table Restaurant',
//       image: '/proj5.png',
//       tags: ['branding'],
//       size: 'medium'
//     },
//     {
//       id: 'green-oasis-4',
//       title: 'Green Oasis',
//       description: 'Farm To Table Restaurant',
//       image: '/proj3.png',
//       tags: ['branding'],
//       size: 'full'
//     }
//   ];

//   const tags = ['all', 'branding', 'packaging', 'ui/ux'];
//   const [activeFilter, setActiveFilter] = useState('all');

//   // Filter projects based on active filter
//   const filteredProjects = activeFilter === 'all' 
//     ? projects 
//     : projects.filter(project => project.tags?.includes(activeFilter));

//   return (
//     <>
//     <Navbar />
//     <div className="min-h-screen bg-[#FEFCE4] mt-20">
//       {/* Hero Section */}
//       <div className="md:pt-20 pb-12 text-center">
//         <h1 className="text-[40px] md:text-[85px] font-regular text-[#51331B] mb-8">
//           work that drives <span className="font-domine">success</span>
//         </h1>
        
//         {/* Filter Tags */}
//         <div className="flex flex-wrap justify-center gap-6 px-6 md:px-0 md:gap-10 mb-6 md:mb-16">
//           {tags.map((tag) => (
//             <button
//               key={tag}
//               onClick={() => setActiveFilter(tag)}
//               className={`px-7 md:px-8 py-1 md:py-2 border text-base md:text-xl font-medium transition-all duration-200 ${
//                 activeFilter === tag 
//                   ? 'bg-[#2C2216] text-white border-[#2C2216]' 
//                   : 'text-[#2C2216] border-[#2C2216] hover:bg-[#2C2216] hover:text-white'
//               }`}
//             >
//               {tag}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Desktop Projects Grid (hidden on mobile) */}
//       <div className="max-w-7xl mx-auto pb-20 justify-center hidden md:flex">
//         <div className="flex flex-col gap-6">
//           {filteredProjects.length > 0 ? (
//             activeFilter === 'all' ? (
//               // Original masonry layout for "all" filter
//               <>
//                 {/* Row 1: Green Oasis (large) + FitFeast (large) */}
//                 <div className="flex gap-6 pb-10">
//                   <Link href={`/work/${projects[0].id}`} className="group cursor-pointer">
//                     <div className="relative overflow-hidden rounded-lg bg-white transition-all duration-300 ">
//                       <div className="overflow-hidden">
//                         <Image
//                           src={projects[0].image}
//                           alt={projects[0].title}
//                           width={664}
//                           height={539}
//                           className="object-cover transition-transform duration-500 group-hover:scale-105"
//                         />
//                       </div>
//                     </div>
//                     <div className="pt-4 pb-2">
//                       <h3 className="text-[32px] font-semibold text-[#51331B] mb-1">{projects[0].title}</h3>
//                       <p className="text-base text-[#51331B]">{projects[0].description}</p>
//                     </div>
//                   </Link>

//                   <Link href={`/work/${projects[1].id}`} className="group cursor-pointer">
//                     <div className="relative overflow-hidden rounded-lg bg-white transition-all duration-300 ">
//                       <div className="overflow-hidden">
//                         <Image
//                           src={projects[1].image}
//                           alt={projects[1].title}
//                           width={664}
//                           height={539}
//                           className="object-cover transition-transform duration-500 group-hover:scale-105"
//                         />
//                       </div>
//                     </div>
//                     <div className="pt-4 pb-2">
//                       <h3 className="text-[32px] font-semibold text-[#51331B] mb-1">{projects[1].title}</h3>
//                       <p className="text-base text-[#51331B]">{projects[1].description}</p>
//                     </div>
//                   </Link>
//                 </div>

//                 {/* Row 2: Green Oasis (full width) */}
//                 <div className="flex pb-10">
//                   <Link href={`/work/${projects[2].id}`} className="group cursor-pointer">
//                     <div className="relative overflow-hidden rounded-lg bg-white transition-all duration-300 ">
//                       <div className="overflow-hidden">
//                         <Image
//                           src={projects[2].image}
//                           alt={projects[2].title}
//                           width={1346}
//                           height={639}
//                           className="object-cover transition-transform duration-500 group-hover:scale-105"
//                         />
//                       </div>
//                     </div>
//                     <div className="pt-4 pb-2">
//                       <h3 className="text-[32px] font-semibold text-[#51331B] mb-1">{projects[2].title}</h3>
//                       <p className="text-base text-[#51331B]">{projects[2].description}</p>
//                     </div>
//                   </Link>
//                 </div>

//                 {/* Row 3: Rethink (small) + Green Oasis (medium) */}
//                 <div className="flex gap-6 pb-10">
//                   <Link href={`/work/${projects[3].id}`} className="group cursor-pointer">
//                     <div className="relative overflow-hidden rounded-lg bg-white transition-all duration-300 ">
//                       <div className="overflow-hidden">
//                         <Image
//                           src={projects[3].image}
//                           alt={projects[3].title}
//                           width={504}
//                           height={539}
//                           className="object-cover transition-transform duration-500 group-hover:scale-105"
//                         />
//                       </div>
//                     </div>
//                     <div className="pt-4 pb-2">
//                       <h3 className="text-[32px] font-semibold text-[#51331B] mb-1">{projects[3].title}</h3>
//                       <p className="text-base text-[#51331B]">{projects[3].description}</p>
//                     </div>
//                   </Link>

//                   <Link href={`/work/${projects[4].id}`} className="group cursor-pointer">
//                     <div className="relative overflow-hidden rounded-lg bg-white transition-all duration-300 ">
//                       <div className="overflow-hidden">
//                         <Image
//                           src={projects[4].image}
//                           alt={projects[4].title}
//                           width={818}
//                           height={539}
//                           className="object-cover transition-transform duration-500 group-hover:scale-105"
//                         />
//                       </div>
//                     </div>
//                     <div className="pt-4 pb-2">
//                       <h3 className="text-[32px] font-semibold text-[#51331B] mb-1">{projects[4].title}</h3>
//                       <p className="text-base text-[#51331B]">{projects[4].description}</p>
//                     </div>
//                   </Link>
//                 </div>

//                 {/* Row 4: Green Oasis (full width) */}
//                 <div className="flex pb-10">
//                   <Link href={`/work/${projects[5].id}`} className="group cursor-pointer">
//                     <div className="relative overflow-hidden rounded-lg bg-white transition-all duration-300 ">
//                       <div className="overflow-hidden">
//                         <Image
//                           src={projects[5].image}
//                           alt={projects[5].title}
//                           width={1346}
//                           height={639}
//                           className="object-cover transition-transform duration-500 group-hover:scale-105"
//                         />
//                       </div>
//                     </div>
//                     <div className="pt-4 pb-2">
//                       <h3 className="text-[32px] font-semibold text-[#51331B] mb-1">{projects[5].title}</h3>
//                       <p className="text-base text-[#51331B]">{projects[5].description}</p>
//                     </div>
//                   </Link>
//                 </div>
//               </>
//             ) : (
//               // 2-column grid layout for filtered results
//               <div className="grid grid-cols-2 gap-6">
//                 {filteredProjects.map((project) => (
//                   <Link key={project.id} href={`/work/${project.id}`} className="group cursor-pointer">
//                     <div className="relative overflow-hidden rounded-lg bg-white transition-all duration-300 ">
//                       <div className="overflow-hidden">
//                         <Image
//                           src={project.image}
//                           alt={project.title}
//                           width={664}
//                           height={539}
//                           className={`w-[664px] h-[539px] object-cover transition-transform duration-500 group-hover:scale-105`}
//                         />
//                       </div>
//                     </div>
//                     <div className="pt-4 pb-2">
//                       <h3 className="text-[32px] font-semibold text-[#51331B] mb-1">{project.title}</h3>
//                       <p className="text-base text-[#51331B]">{project.description}</p>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             )
//           ) : (
//             <div className="text-center py-20">
//               <p className="text-xl text-[#51331B]">No projects found for this category.</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Mobile Projects Grid (visible only on mobile) */}
//       <div className="md:hidden block px-4 pb-20">
//         <div className="flex flex-col gap-8">
//           {filteredProjects.length > 0 ? (
//             filteredProjects.map((project) => (
//               <Link key={project.id} href={`/work/${project.id}`} className="group cursor-pointer">
//                 <div className="relative overflow-hidden rounded-lg bg-white transition-all duration-300 ">
//                   <div className="overflow-hidden">
//                     <Image
//                       src={project.image}
//                       alt={project.title}
//                       width={320}
//                       height={240}
//                       className="w-full h-[407px] object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                   </div>
//                 </div>
//                 <div className="pt-4 pb-10">
//                   <h3 className="text-2xl font-semibold text-[#51331B] mb-1">{project.title}</h3>
//                   <p className="text-sm tracking-[-0.4px] leading-[28px] text-[#51331B]">{project.description}</p>
//                 </div>
//               </Link>
//             ))
//           ) : (
//             <div className="text-center py-20">
//               <p className="text-xl text-[#51331B]">No projects found for this category.</p>
//             </div>
//           )}
//         </div>
//       </div>
      
//     </div>
//     </>
//     );
// }

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";

interface Project {
  id: string;
  name: string;
  oneLiner: string;
  image: string;
  tags: string[];
  size: "small" | "medium" | "large" | "full";
  slug: string;
}
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export default function WorkPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  const tags = ["all", "branding", "packaging", "ui/ux"];

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(
          `${STRAPI_URL}/api/projects?populate=image&sort[0]=id:asc`
        );
        const json = await res.json();

        if (json.data) {
          const mapped: Project[] = json.data.map((p: any) => {
            const attrs = p;

            return {
              id: p.id.toString(),
              slug: attrs.slug,
              name: attrs.name,
              oneLiner: attrs.oneLiner,
              size: attrs.size || "small", 
              // normalize tags into array
              tags: attrs.tags
                ? attrs.tags.split(",").map((t: string) => t.trim().toLowerCase())
                : [],
              image: attrs.image?.url
                ? `${STRAPI_URL}${attrs.image.url}`
                : "/placeholder.png",
            };
          });

          setProjects(mapped);
        }
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.tags?.includes(activeFilter));

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FEFCE4] mt-20">
        {/* Hero Section */}
        <div className="md:pt-20 pb-12 text-center">
          <h1 className="text-[40px] md:text-[85px] font-regular text-[#51331B] mb-8">
            work that drives <span className="font-domine">success</span>
          </h1>

          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-6 px-6 md:px-0 md:gap-10 mb-6 md:mb-16">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-7 md:px-8 py-1 md:py-2 border text-base md:text-xl font-medium transition-all duration-200 ${
                  activeFilter === tag
                    ? "bg-[#2C2216] text-white border-[#2C2216]"
                    : "text-[#2C2216] border-[#2C2216] hover:bg-[#2C2216] hover:text-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Projects Grid */}
        <div className="max-w-7xl mx-auto pb-20 justify-center hidden md:flex">
          <div className="flex flex-col gap-6">
            {loading ? (
              <p className="text-center text-[#51331B]">Loading...</p>
            ) : filteredProjects.length > 0 ? (
              activeFilter === "all" ? (
                <>
                  {/* For ALL filter, show in original custom layout */}
                  {filteredProjects.map((project) => (
                    <div key={project.id} className="pb-10">
                      <Link
                        href={`/work/${project.slug}`}
                        className="group cursor-pointer"
                      >
                        <div className="relative overflow-hidden rounded-lg bg-white transition-all duration-300">
                          <div className="overflow-hidden">
                            <Image
                              src={project.image}
                              alt={project.name}
                              width={1000}
                              height={600}
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        </div>
                        <div className="pt-4 pb-2">
                          <h3 className="text-[32px] font-semibold text-[#51331B] mb-1">
                            {project.name}
                          </h3>
                          <p className="text-base text-[#51331B]">
                            {project.oneLiner}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </>
              ) : (
                // For filtered results, simple grid
                <div className="grid grid-cols-2 gap-6">
                  {filteredProjects.map((project) => (
                    <Link
                      key={project.id}
                      href={`/work/${project.slug}`}
                      className="group cursor-pointer"
                    >
                      <div className="relative overflow-hidden rounded-lg bg-white transition-all duration-300">
                        <div className="overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.name}
                            width={664}
                            height={539}
                            className="w-[664px] h-[539px] object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                      <div className="pt-4 pb-2">
                        <h3 className="text-[32px] font-semibold text-[#51331B] mb-1">
                          {project.name}
                        </h3>
                        <p className="text-base text-[#51331B]">
                          {project.oneLiner}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-[#51331B]">
                  No projects found for this category.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Projects Grid */}
        <div className="md:hidden block px-4 pb-20">
          <div className="flex flex-col gap-8">
            {loading ? (
              <p className="text-center text-[#51331B]">Loading...</p>
            ) : filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/work/${project.slug}`}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg bg-white transition-all duration-300">
                    <div className="overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={320}
                        height={240}
                        className="w-full h-[407px] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="pt-4 pb-10">
                    <h3 className="text-2xl font-semibold text-[#51331B] mb-1">
                      {project.name}
                    </h3>
                    <p className="text-sm tracking-[-0.4px] leading-[28px] text-[#51331B]">
                      {project.oneLiner}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-[#51331B]">
                  No projects found for this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}