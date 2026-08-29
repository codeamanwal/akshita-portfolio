// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import Navbar from '@/components/navbar';
// import { notFound } from 'next/navigation';
// import { motion } from 'framer-motion';

// interface ProjectData {
//   id: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   category: string;
//   images: {
//     hero: string;
//     gallery: string[];
//   };
//   details: {
//     challenge: string;
//     solution: string;
//     outcome: string;
//   };
// }
import { notFound } from 'next/navigation';
import { fetchFromStrapi, getStrapiMedia } from '@/lib/strapi';
import ProjectDetailClient, { MediaItem, ProjectData } from './ProjectDetailClient';

function extractBlocksToText(blocks: any): string {
  if (!blocks) return '';
  if (typeof blocks === 'string') return blocks;
  if (Array.isArray(blocks)) {
    try {
      return blocks
        .map((block: any) =>
          Array.isArray(block?.children)
            ? block.children.map((c: any) => c?.text).filter(Boolean).join('')
            : ''
        )
        .filter(Boolean)
        .join('\n');
    } catch {
      return '';
    }
  }
  return '';
}

interface PageProps {
  params: Promise<{
    projectId: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { projectId } = await params;
  const slug = projectId;

  const res = await fetchFromStrapi(
    `/api/project-details?filters[slug][$eq]=${encodeURIComponent(slug)}&populate[hero]=true&populate[heroMobile]=true&populate[gallery]=true&populate[galleryMobile]=true&populate[galleryItems][populate][image]=true&populate[galleryItems][populate][imageMobile]=true`
  );

  const item = res?.data?.[0];
  if (!item) {
    notFound();
  }

  const mapMedia = (media: any): MediaItem[] => {
    if (!media) return [];
    if (Array.isArray(media)) {
      return media
        .map((file: any) =>
          file?.url
            ? {
                url: getStrapiMedia(file.url),
                type: file.mime?.startsWith('video') ? 'video' : 'image',
                alt: file.alternativeText || 'Project media',
                formats: file.formats || null,
              }
            : null
        )
        .filter(Boolean) as MediaItem[];
    }
    return [
      {
        url: getStrapiMedia(media.url),
        type: media.mime?.startsWith('video') ? 'video' : 'image',
        alt: media.alternativeText || 'Project media',
      },
    ];
  };

  const project: ProjectData = {
    id: item.slug || String(item.id),
    name: item.name || '',
    industry: item.industry || '',
    about: extractBlocksToText(item.about),
    services: item.services || '',
    heroRatio: item.heroRatio || "Ratio_16x9",
    images: {
      hero: mapMedia(item.hero)[0] || null,
      heroMobile: mapMedia(item.heroMobile)[0] || null,
      gallery: mapMedia(item.gallery) || [],
      galleryMobile: mapMedia(item.galleryMobile) || [],
      galleryItems: Array.isArray(item.galleryItems)
        ? item.galleryItems.map((g: any) => ({
            media: mapMedia(g.image || g.media)[0] || null,
            ratio: g.ratio || "Ratio_16x9",
          })).filter((g: any) => g.media)
        : [],
    },
    details: {
      challenge: extractBlocksToText(item.challenge),
      solution: extractBlocksToText(item.solution),
      outcome: extractBlocksToText(item.outcome),
    },
  };

  return <ProjectDetailClient project={project} />;
}
// // Sample project data - in a real app, this would come from a CMS or API
// const projectsData: Record<string, ProjectData> = {
//   'green-oasis': {
//     id: 'green-oasis',
//     title: 'Green Oasis',
//     subtitle: 'Farm To Table Restaurant Serving Fresh Experiences',
//     description: 'A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. ',
//     category: 'Branding',
//     images: {
//       hero: '/prod1.png',
//       gallery: [
//         '/prod2.png',
//         '/prod3.png',
//         '/card2.png',
//         '/proj5.png'
//       ]
//     },
//     details: {
//       challenge: 'Create a brand identity that communicates freshness, sustainability, and premium quality while appealing to health-conscious consumers.',
//       solution: 'Developed a clean, nature-inspired visual identity with earthy tones and organic shapes. The logo incorporates botanical elements that reflect the farm-to-table concept.',
//       outcome: 'Successfully launched brand identity that increased customer recognition by 150% and helped establish the restaurant as a premium dining destination.'
//     }
//   },
//   'fitfeast': {
//     id: 'fitfeast',
//     title: 'FitFeast',
//     subtitle: 'Protein Packaging that stands out',
//     description: 'A protein snacking brand based in India, combining premium packaging in shiny & dull coatings with bold messaging to capture attention in a crowded marketplace. Positioned positioning against competitors, we built a brand that speaks to both healthy snacking and indulgence, reflecting nutrient richness & indulgence in a crisp.',
//     category: 'Packaging',
//     images: {
//       hero: '/proj2.png',
//       gallery: [
//         '/fitfeast_mobile.png',
//         '/card1.png',
//         '/card2.png',
//         '/card3.png'
//       ]
//     },
//     details: {
//       challenge: 'Design packaging that appeals to fitness enthusiasts while standing out on crowded retail shelves.',
//       solution: 'Created vibrant, high-energy packaging with bold typography and dynamic color schemes that communicate strength and vitality.',
//       outcome: 'Achieved 40% increase in shelf visibility and 25% boost in sales within the first quarter of launch.'
//     }
//   },
//   'rethink-hydration': {
//     id: 'rethink-hydration',
//     title: 'Rethink!',
//     subtitle: 'A bold take on hydration',
//     description: 'UI/UX design for an innovative hydration tracking app that encourages healthy drinking habits through gamification and social features.',
//     category: 'UI/UX',
//     images: {
//       hero: '/rethink.png',
//       gallery: [
//         '/proj4.png',
//         '/uiux.png',
//         '/uiux.1.1.png'
//       ]
//     },
//     details: {
//       challenge: 'Create an engaging app experience that motivates users to maintain consistent hydration habits.',
//       solution: 'Designed an intuitive interface with gamification elements, progress tracking, and social sharing features to make hydration fun and rewarding.',
//       outcome: 'App achieved 4.8-star rating with over 100K downloads in the first six months, with 85% user retention rate.'
//     }
//   },
//   'green-oasis-2': {
//     id: 'green-oasis-2',
//     title: 'Green Oasis',
//     subtitle: 'Farm To Table Restaurant Serving Fresh Experiences',
//     description: 'A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. ',
//     category: 'Branding',
//     images: {
//       hero: '/prod1.png',
//       gallery: [
//         '/prod2.png',
//         '/prod3.png',
//         '/card2.png',
//         '/proj5.png'
//       ]
//     },
//     details: {
//       challenge: 'Create a brand identity that communicates freshness, sustainability, and premium quality while appealing to health-conscious consumers.',
//       solution: 'Developed a clean, nature-inspired visual identity with earthy tones and organic shapes. The logo incorporates botanical elements that reflect the farm-to-table concept.',
//       outcome: 'Successfully launched brand identity that increased customer recognition by 150% and helped establish the restaurant as a premium dining destination.'
//     }
//    }
// };

// // Define the expected props interface for the page component
// interface ProjectDetailPageProps {
//   params: Promise<{
//     projectId: string;
//   }>;
// }

// export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
//   const { projectId } = await params;
//   const project = projectsData[projectId];

//   if (!project) {
//     notFound();
//   }

//   return (
//     <>
//     <Navbar />
//     <div className="min-h-screen bg-[#FEFCE4]">
//       {/* Hero Image */}
//       <div className="relative rounded-lg bg-white mb-16">
//           <Image
//             src={project.images.hero}
//             alt={project.title}
//             width={1280}
//             height={800}
//             className="w-full h-[915px] object-cover"
//           />
//         </div>
//       {/* Hero Section */}
//       <div className="mx-auto px-6 lg:pl-20 lg:pr-20">
//         {/* Brand Name Section */}
//         <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-12 lg:mt-28 mb-12 lg:mb-20">
//           {/* Left Column - Brand Name & Details */}
//           <div className="flex flex-col gap-6 lg:gap-8 lg:w-1/2">
//             <div className="flex flex-col gap-4">
//               <motion.h1 
//                 className="text-4xl md:text-6xl lg:text-[85px] font-regular tracking-[-1px] leading-tight lg:leading-27 text-[#51331B] -mt-2 lg:-mt-6"
//                 initial={{ 
//                   filter: 'blur(10px)',
//                   opacity: 0,
//                   rotateX: 45,
//                   x: -100
//                 }}
//                 whileInView={{
//                   filter: 'blur(0px)',
//                   opacity: 1,
//                   rotateX: 0,
//                   x: 0
//                 }}
//                 transition={{
//                   duration: 1.2,
//                   ease: [0.23, 1, 0.32, 1]
//                 }}
//                 viewport={{ once: true, amount: 0.3 }}
//               >
//                 {project.title}
//               </motion.h1>
//               <motion.div 
//                 className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 mt-8 lg:mt-14"
//                 initial={{ y: 50, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ 
//                   duration: 0.8, 
//                   delay: 0.3,
//                   ease: [0.23, 1, 0.32, 1]
//                 }}
//                 viewport={{ once: true, amount: 0.3 }}
//               >
//                 <motion.div className="flex flex-col gap-2">
//                   <div
//                     className="absolute w-[80px] md:w-[100px] lg:w-[152px] h-0 border-t border-[#2C2216]"
//                   />
//                   <motion.h4 
//                     className="text-lg md:text-xl lg:text-[32px] text-[#51331B] leading-tight lg:leading-14 tracking-[-1px] mt-3 lg:mt-4"
//                     initial={{ y: 30, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     transition={{ 
//                       duration: 0.6, 
//                       delay: 0.5,
//                       ease: [0.23, 1, 0.32, 1]
//                     }}
//                     viewport={{ once: true, amount: 0.3 }}
//                   >
//                     /services
//                   </motion.h4>
//                   <motion.p 
//                     className="text-xs md:text-sm lg:text-[18px] text-[#51331B] leading-relaxed lg:leading-[25px] pr-2 md:pr-4 lg:pr-10"
//                     initial={{ y: 30, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     transition={{ 
//                       duration: 0.6, 
//                       delay: 0.6,
//                       ease: [0.23, 1, 0.32, 1]
//                     }}
//                     viewport={{ once: true, amount: 0.3 }}
//                   >
//                     Brand Identity, Packaging, Publication Design
//                   </motion.p>
//                 </motion.div>
//                 <motion.div className="flex flex-col gap-2">
//                     <div
//                         className="absolute w-[80px] md:w-[100px] lg:w-[152px] h-0 border-t border-[#2C2216]"        
//                     />
//                   <motion.h4 
//                     className="text-lg md:text-xl lg:text-[32px] text-[#51331B] leading-tight lg:leading-14 tracking-[-1px] mt-3 lg:mt-4"
//                     initial={{ y: 30, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     transition={{ 
//                       duration: 0.6, 
//                       delay: 0.7,
//                       ease: [0.23, 1, 0.32, 1]
//                     }}
//                     viewport={{ once: true, amount: 0.3 }}
//                   >
//                     /industry
//                   </motion.h4>
//                   <motion.p 
//                     className="text-xs md:text-sm lg:text-[18px] text-[#51331B] leading-relaxed lg:leading-[25px] pr-2 md:pr-4 lg:pr-10"
//                     initial={{ y: 30, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     transition={{ 
//                       duration: 0.6, 
//                       delay: 0.8,
//                       ease: [0.23, 1, 0.32, 1]
//                     }}
//                     viewport={{ once: true, amount: 0.3 }}
//                   >
//                     Health & Nutrition
//                   </motion.p>
//                 </motion.div>
//               </motion.div>
//             </div>
//           </div>

//           {/* Right Column - Description */}
//           <motion.div 
//             className="flex flex-col gap-6 lg:w-1/2 mt-8 lg:mt-0"
//             initial={{ y: 50, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ 
//               duration: 0.8, 
//               delay: 0.4,
//               ease: [0.23, 1, 0.32, 1]
//             }}
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             <motion.p 
//               className="text-sm md:text-lg text-[#51331B] leading-relaxed pr-0 md:pr-8 lg:pr-15"
//               initial={{ y: 30, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ 
//                 duration: 0.6, 
//                 delay: 0.6,
//                 ease: [0.23, 1, 0.32, 1]
//               }}
//               viewport={{ once: true, amount: 0.3 }}
//             >
//               {project.description}
//             </motion.p>
//           </motion.div>
//         </div>
//       </div>

//       {/* Main Content Gallery */}
//       <div className="max-w-[1512px] mx-auto px-6 py-8 lg:py-16">
//         <div className="flex flex-col gap-4 lg:gap-6">
//           {/* First Row - Two Images Side by Side */}
//           {project.images.gallery.length > 1 && (
//             <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
//               <div className="flex-1 relative overflow-hidden rounded-lg bg-white">
//                 <Image
//                   src={project.images.gallery[0]}
//                   alt={`${project.title} gallery image 1`}
//                   width={664}
//                   height={539}
//                   className="w-full h-93 md:h-full object-cover"
//                 />
//               </div>
//               <div className="flex-1 relative overflow-hidden rounded-lg bg-white">
//                 <Image
//                   src={project.images.gallery[1]}
//                   alt={`${project.title} gallery image 2`}
//                   width={664}
//                   height={539}
//                   className="w-full h-93 md:h-full object-cover"
//                 />
//               </div>
//             </div>
//           )}

//           {/* Single Large Image */}
//           {project.images.gallery.length > 2 && (
//             <div className="flex">
//               <div className="w-full relative overflow-hidden rounded-lg bg-white">
//                 <Image
//                   src={project.images.gallery[2]}
//                   alt={`${project.title} gallery image 3`}
//                   width={1346}
//                   height={639}
//                   className="w-full h-[400px] lg:h-[650px] object-cover"
//                 />
//               </div>
//             </div>
//           )}

//           {/* Text Section */}
//           <motion.div 
//             className="flex flex-col gap-8 lg:gap-16 py-8 lg:py-16"
//             initial={{ y: 50, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ 
//               duration: 0.8,
//               ease: [0.23, 1, 0.32, 1]
//             }}
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-16">
//               <motion.div 
//                 className="flex flex-col md:pl-12 gap-6"
//                 initial={{ y: 30, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ 
//                   duration: 0.6, 
//                   delay: 0.2,
//                   ease: [0.23, 1, 0.32, 1]
//                 }}
//                 viewport={{ once: true, amount: 0.3 }}
//               >
//                 <motion.p 
//                   className="text-xs md:text-sm lg:text-lg text-[#51331B] leading-relaxed lg:leading-[38px] pr-2 md:pr-4 lg:pr-10"
//                   initial={{ y: 20, opacity: 0 }}
//                   whileInView={{ y: 0, opacity: 1 }}
//                   transition={{ 
//                     duration: 0.6, 
//                     delay: 0.4,
//                     ease: [0.23, 1, 0.32, 1]
//                   }}
//                   viewport={{ once: true, amount: 0.3 }}
//                 >
//                   A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein.
//                   A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein.
//                   A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein.
//                 </motion.p>
//               </motion.div>
//               <motion.div 
//                 className="flex flex-col md:pl-12 gap-6"
//                 initial={{ y: 30, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ 
//                   duration: 0.6, 
//                   delay: 0.3,
//                   ease: [0.23, 1, 0.32, 1]
//                 }}
//                 viewport={{ once: true, amount: 0.3 }}
//               >
//                 <motion.p 
//                   className="text-xs md:text-sm lg:text-lg text-[#51331B] leading-relaxed lg:leading-[38px] pr-2 md:pr-4 lg:pr-10"
//                   initial={{ y: 20, opacity: 0 }}
//                   whileInView={{ y: 0, opacity: 1 }}
//                   transition={{ 
//                     duration: 0.6, 
//                     delay: 0.5,
//                     ease: [0.23, 1, 0.32, 1]
//                   }}
//                   viewport={{ once: true, amount: 0.3 }}
//                 >
//                   A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein.
//                   A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein.
//                   A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein.
//                 </motion.p>
//               </motion.div>
//             </div>
//           </motion.div>


//           {/* Bottom Row - Mixed Layout */}
//           <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
//             {/* Left Side - Two Stacked Images */}
//             <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-1/2">
//               <div className="relative overflow-hidden rounded-lg bg-white">
//                 <Image
//                   src="/card1.png"
//                   alt="Product detail 1"
//                   width={664}
//                   height={400}
//                   className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover"
//                 />
//               </div>
//               <div className="relative overflow-hidden rounded-lg bg-white">
//                 <Image
//                   src="/card2.png"
//                   alt="Product detail 2"
//                   width={664}
//                   height={400}
//                   className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover"
//                 />
//               </div>
//             </div>

//             {/* Right Side - Large Image with Text Overlay */}
//             <div className="w-full lg:w-1/2 relative">
//               <div className="relative overflow-hidden rounded-lg bg-white h-full">
//                 <Image
//                   src="/card3.png"
//                   alt="Product showcase"
//                   width={664}
//                   height={816}
//                   className="w-full h-[400px] lg:h-full object-cover"
//                 />
//                 {/* Text Overlay */}
//                 <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 right-4 lg:right-8">
//                   <div className="bg-green-600 text-white p-4 lg:p-6 rounded-lg">
//                     <h3 className="text-lg lg:text-2xl font-bold mb-1 lg:mb-2">CRAVE THE CRUNCH</h3>
//                     <h4 className="text-base lg:text-xl">LOVE THE protein!</h4>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Final Row - Two More Images */}
//           <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
//             <div className="flex-1 relative overflow-hidden rounded-lg bg-white">
//               <Image
//                 src="/proj2.png"
//                 alt="Final showcase 1"
//                 width={664}
//                 height={539}
//                 className="w-full h-93 md:h-[400px] lg:h-[539px] object-cover"
//               />
//             </div>
//             <div className="flex-1 relative overflow-hidden rounded-lg bg-white">
//               <Image
//                 src="/fitfeast_mobile.png"
//                 alt="Final showcase 2"
//                 width={664}
//                 height={539}
//                 className="w-full h-93 md:h-[400px] lg:h-[539px] object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//     </>
//   );
// }





// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import Navbar from '@/components/navbar';
// import { notFound } from 'next/navigation';
// import { motion } from 'framer-motion';

// interface ProjectData {
//   id: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   category: string;
//   images: {
//     hero: string;
//     gallery: string[];
//   };
//   details: {
//     challenge: string;
//     solution: string;
//     outcome: string;
//   };
// }

// interface ProjectDetailPageProps {
//   params: {
//     projectId: string;
//   };
// }

// // Fetch project from Strapi
// async function fetchProject(projectId: string): Promise<ProjectData | null> {
//   try {
//     const res = await fetch(
//       `http://localhost:1337/api/project-details?filters[slug][$eq]=${projectId}&populate=*`,
//       { cache: 'no-store' }
//     );
//     const data = await res.json();
//     if (!data.data || data.data.length === 0) return null;

//     const project = data.data[0].attributes;

//     return {
//       id: projectId,
//       title: project.title,
//       subtitle: project.subtitle,
//       description: project.description,
//       category: project.category,
//       images: {
//         hero: project.hero?.data?.attributes?.url || '',
//         gallery: project.gallery?.data?.map((img: any) => img.attributes.url) || []
//       },
//       details: {
//         challenge: project.details?.challenge || '',
//         solution: project.details?.solution || '',
//         outcome: project.details?.outcome || ''
//       }
//     };
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// }

// export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
//   const { projectId } = params;
//   const project = await fetchProject(projectId);

//   if (!project) {
//     notFound();
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-[#FEFCE4]">
//         {/* Hero Image */}
//         <div className="relative rounded-lg bg-white mb-16">
//           <Image
//             src={project.images.hero}
//             alt={project.title}
//             width={1280}
//             height={800}
//             className="w-full h-[915px] object-cover"
//           />
//         </div>

//         {/* Hero Section */}
//         <div className="mx-auto px-6 lg:pl-20 lg:pr-20">
//           {/* Brand Name Section */}
//           <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-12 lg:mt-28 mb-12 lg:mb-20">
//             {/* Left Column - Brand Name & Details */}
//             <div className="flex flex-col gap-6 lg:gap-8 lg:w-1/2">
//               <div className="flex flex-col gap-4">
//                 <motion.h1
//                   className="text-4xl md:text-6xl lg:text-[85px] font-regular tracking-[-1px] leading-tight lg:leading-27 text-[#51331B] -mt-2 lg:-mt-6"
//                   initial={{
//                     filter: 'blur(10px)',
//                     opacity: 0,
//                     rotateX: 45,
//                     x: -100
//                   }}
//                   whileInView={{
//                     filter: 'blur(0px)',
//                     opacity: 1,
//                     rotateX: 0,
//                     x: 0
//                   }}
//                   transition={{
//                     duration: 1.2,
//                     ease: [0.23, 1, 0.32, 1]
//                   }}
//                   viewport={{ once: true, amount: 0.3 }}
//                 >
//                   {project.title}
//                 </motion.h1>
//                 <motion.div
//                   className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 mt-8 lg:mt-14"
//                   initial={{ y: 50, opacity: 0 }}
//                   whileInView={{ y: 0, opacity: 1 }}
//                   transition={{
//                     duration: 0.8,
//                     delay: 0.3,
//                     ease: [0.23, 1, 0.32, 1]
//                   }}
//                   viewport={{ once: true, amount: 0.3 }}
//                 >
//                   <motion.div className="flex flex-col gap-2">
//                     <div className="absolute w-[80px] md:w-[100px] lg:w-[152px] h-0 border-t border-[#2C2216]" />
//                     <motion.h4
//                       className="text-lg md:text-xl lg:text-[32px] text-[#51331B] leading-tight lg:leading-14 tracking-[-1px] mt-3 lg:mt-4"
//                       initial={{ y: 30, opacity: 0 }}
//                       whileInView={{ y: 0, opacity: 1 }}
//                       transition={{
//                         duration: 0.6,
//                         delay: 0.5,
//                         ease: [0.23, 1, 0.32, 1]
//                       }}
//                       viewport={{ once: true, amount: 0.3 }}
//                     >
//                       /services
//                     </motion.h4>
//                     <motion.p
//                       className="text-xs md:text-sm lg:text-[18px] text-[#51331B] leading-relaxed lg:leading-[25px] pr-2 md:pr-4 lg:pr-10"
//                       initial={{ y: 30, opacity: 0 }}
//                       whileInView={{ y: 0, opacity: 1 }}
//                       transition={{
//                         duration: 0.6,
//                         delay: 0.6,
//                         ease: [0.23, 1, 0.32, 1]
//                       }}
//                       viewport={{ once: true, amount: 0.3 }}
//                     >
//                       Brand Identity, Packaging, Publication Design
//                     </motion.p>
//                   </motion.div>
//                   <motion.div className="flex flex-col gap-2">
//                     <div className="absolute w-[80px] md:w-[100px] lg:w-[152px] h-0 border-t border-[#2C2216]" />
//                     <motion.h4
//                       className="text-lg md:text-xl lg:text-[32px] text-[#51331B] leading-tight lg:leading-14 tracking-[-1px] mt-3 lg:mt-4"
//                       initial={{ y: 30, opacity: 0 }}
//                       whileInView={{ y: 0, opacity: 1 }}
//                       transition={{
//                         duration: 0.6,
//                         delay: 0.7,
//                         ease: [0.23, 1, 0.32, 1]
//                       }}
//                       viewport={{ once: true, amount: 0.3 }}
//                     >
//                       /industry
//                     </motion.h4>
//                     <motion.p
//                       className="text-xs md:text-sm lg:text-[18px] text-[#51331B] leading-relaxed lg:leading-[25px] pr-2 md:pr-4 lg:pr-10"
//                       initial={{ y: 30, opacity: 0 }}
//                       whileInView={{ y: 0, opacity: 1 }}
//                       transition={{
//                         duration: 0.6,
//                         delay: 0.8,
//                         ease: [0.23, 1, 0.32, 1]
//                       }}
//                       viewport={{ once: true, amount: 0.3 }}
//                     >
//                       Health & Nutrition
//                     </motion.p>
//                   </motion.div>
//                 </motion.div>
//               </div>
//             </div>

//             {/* Right Column - Description */}
//             <motion.div
//               className="flex flex-col gap-6 lg:w-1/2 mt-8 lg:mt-0"
//               initial={{ y: 50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.4,
//                 ease: [0.23, 1, 0.32, 1]
//               }}
//               viewport={{ once: true, amount: 0.3 }}
//             >
//               <motion.p
//                 className="text-sm md:text-lg text-[#51331B] leading-relaxed pr-0 md:pr-8 lg:pr-15"
//                 initial={{ y: 30, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: 0.6,
//                   ease: [0.23, 1, 0.32, 1]
//                 }}
//                 viewport={{ once: true, amount: 0.3 }}
//               >
//                 {project.description}
//               </motion.p>
//             </motion.div>
//           </div>
//         </div>

//         {/* Main Content Gallery */}
//         <div className="max-w-[1512px] mx-auto px-6 py-8 lg:py-16">
//           <div className="flex flex-col gap-4 lg:gap-6">
//             {project.images.gallery.length > 0 &&
//               project.images.gallery.map((img, i) => (
//                 <div key={i} className="relative overflow-hidden rounded-lg bg-white mb-6">
//                   <Image
//                     src={img}
//                     alt={`${project.title} gallery ${i + 1}`}
//                     width={1280}
//                     height={800}
//                     className="w-full h-[400px] lg:h-[650px] object-cover"
//                   />
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }