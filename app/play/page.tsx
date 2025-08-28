// "use client"

// import Image from 'next/image'
// import { useState } from 'react'
// import { ArrowUpRight } from 'lucide-react'
// import Navbar from '@/components/navbar';

// export default function PlayPage() {
//   const products = [
//     {
//       id: 1,
//       name: "Yolo Roots Muesli",
//       images: ["/play_1.png", "/proj4.png", "/work1.png"]
//     },
//     {
//       id: 2,
//       name: "ReThinQ Hydration Sticks",
//       images: ["/play_2.png", "/proj4.png", "/work2.png"]
//     },
//     {
//       id: 3,
//       name: "BabLouie Cocktail Mixers",
//       images: ["/play_3.png", "/proj4.png", "/work3.png"]
//     },
//     {
//       id: 4,
//       name: "Fitfeast Protein Chips",
//       images: ["/play_4.png", "/proj2.png", "/proj3.png"]
//     },
//     {
//       id: 5,
//       name: "Reynolds Pens",
//       images: ["/play_5.png", "/proj4.png", "/proj5.png"]
//     },
//     {
//       id: 6,
//       name: "Zuno Energy Gums",
//       images: ["/play_6.png", "/test1.png", "/test2.png"],
//       isLaunching: true
//     }
//   ]

//   return (
//     <>
//     <Navbar />
//     <div className="min-h-screen">
//       {/* Hero Section - "loved by insiders" */}
//       <section className="relative bg-[#2C2216] py-16 lg:py-24">
//         <div className="lg:w-full mx-auto flex flex-col lg:flex-row">
//           {/* Left Content */}
//           <div className="text-[#AAC7FF] mt-8 lg:mt-16 lg:ml-36 z-10">
//             <h1 className="text-[32px] lg:text-5xl text-center lg:text-left font-light leading-[109px] tracking-[-1px] mb-4">
//               loved by <span className="font-domine">insiders</span>
//             </h1>
//             <p className="max-w-5xl leading-[25px] text-center lg:text-left text-sm lg:text-lg mx-[7px] lg:mx-0 lg:mr-18">
//               A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. 
//               A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. 
//               A protein snacking brand based in india, redefining proteo
//             </p>
//           </div>
          
//           {/* Right Image */}
//           <div className="flex justify-center lg:justify-end z-0 pt-18 lg:pt-0">
//             <div className="relative right-0">
//               <Image
//                 src="/sidepic.png"
//                 alt="Client book mockup with golden clip"
//                 width={1250}
//                 height={400}
//                 className="lg:max-w-[1120px] lg:max-h-full object-contain h-auto drop-shadow-lg"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section className="py-16 lg:py-24 px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-[32px] lg:text-4xl text-center mb-12 lg:mb-16 text-gray-900 font-light">
//             Shop products I designed
//           </h2>
          
//           {/* Product Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#2C2216] overflow-hidden">
//             {products.map((product, index) => (
//               <ProductCard key={product.id} product={product} index={index} totalProducts={products.length} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//     </>
//   )
// }

// function ProductCard({ 
//   product, 
//   index, 
//   totalProducts 
// }: { 
//   product: { id: number; name: string; images: string[]; isLaunching?: boolean }; 
//   index: number; 
//   totalProducts: number; 
// }) {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)

//   // Calculate grid dimensions for different screen sizes
//   const getGridInfo = () => {
//     return {
//       mobile: { cols: 1, rows: Math.ceil(totalProducts / 1) },
//       tablet: { cols: 2, rows: Math.ceil(totalProducts / 2) },
//       desktop: { cols: 3, rows: Math.ceil(totalProducts / 3) }
//     }
//   }

//   const gridInfo = getGridInfo()
  
//   // Calculate position in grid for each screen size
//   const getPosition = (cols: number) => ({
//     row: Math.floor(index / cols),
//     col: index % cols,
//     isLastRow: Math.floor(index / cols) === Math.ceil(totalProducts / cols) - 1,
//     isLastCol: (index % cols) === cols - 1
//   })

//   const tabletPos = getPosition(gridInfo.tablet.cols)
//   const desktopPos = getPosition(gridInfo.desktop.cols)

//   // Generate border classes - simplified approach
//   const getBorderClasses = () => {
//     const classes = []
    
//     // Right borders
//     // Mobile: no right borders (1 column)
//     // Tablet: right border for left column only (col 0)
//     // Desktop: right border for first two columns (col 0, 1)
//     if (tabletPos.col === 0) classes.push("md:border-r")
//     if (desktopPos.col === 0 || desktopPos.col === 1) classes.push("lg:border-r")
    
//     // Bottom borders  
//     // Mobile: bottom border for all except last item
//     // Tablet: bottom border for all except last row
//     // Desktop: bottom border for all except last row
//     if (index < totalProducts - 1) classes.push("border-b")
//     if (tabletPos.isLastRow && index >= totalProducts - 2) classes.push("md:border-b-0")
//     if (desktopPos.isLastRow && index >= totalProducts - 3) classes.push("lg:border-b-0")
    
//     return `border-[#2C2216] ${classes.join(" ")}`
//   }

//   return (
//     <div 
//       className={`p-8 pt-16 text-center relative cursor-pointer transition-all duration-300 ${getBorderClasses()}`}
//     >
//       {/* Launching Soon Badge */}
//       {product.isLaunching && (
//         <div className="absolute top-8 left-0 z-10">
//           <span className="bg-[#DC7E55] text-[#2C2216] text-xs leading-[28px] tracking-[3px] px-3 py-2 font-medium">
//             LAUNCHING SOON
//           </span>
//         </div>
//       )}
      
//       {/* Product Image with Smooth Transition */}
//       <div className="mb-8 h-80 flex items-center justify-center relative overflow-hidden"
//        onClick={() => setCurrentImageIndex((prev) => (prev + 1) % product.images.length)}
//       >
//         {product.images.map((image, index) => (
//           <Image
//             key={index}
//             src={image}
//             alt={product.name}
//             width={250}
//             height={250}
//             className={`absolute max-w-full max-h-full object-contain transition-opacity duration-500 ease-in-out ${
//               index === currentImageIndex ? 'opacity-100' : 'opacity-0'
//             }`}
//           />
//         ))}
//       </div>
      
//       {/* Product Info */}
//       <div className="pt-4">
//         <button className="overflow-hidden inline-flex justify-center gap-2 lg:gap-4 items-center h-[40px] px-6 py-2 border border-[#51331B] text-[#51331B] active:bg-[#51331B] active:text-white lg:hover:bg-[#51331B] lg:hover:text-white cursor-pointer transition-colors duration-200 group mt-8 lg:w-auto lg:h-[50px] lg:px-8 lg:py-3">
//             <span className="text-base lg:text-xl leading-6 lg:leading-7 tracking-tight">{product.name}</span>
//             <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 group-active:translate-x-1 group-active:-translate-y-1 lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1 transition-transform duration-200" />
//         </button>
//       </div>
//     </div>
//   )
// }


// app/play/page.tsx
import Image from "next/image"
import Navbar from "@/components/navbar"
import ProductCard from "./ProductCard"

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
// Fetch hero section data
async function getHero() {
  const res = await fetch(`${STRAPI_URL}/api/play-heroes?populate=heroImage`, {
    cache: "no-store",
  })
  if (!res.ok) throw new Error("Failed to fetch hero data")
  const data = await res.json()
  return data.data?.[0] // take first entry
}

// Fetch products data
async function getProducts() {
  const res = await fetch(`${STRAPI_URL}/api/play-products?populate=images`, {
    cache: "no-store",
  })
  if (!res.ok) throw new Error("Failed to fetch products")
  const data = await res.json()
  return data.data || []
}

export default async function PlayPage() {
  const hero = await getHero()
  const products = await getProducts()

  const heroImageUrl =
  hero?.heroImage?.url && `${STRAPI_URL}${hero.heroImage.url}`

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-[#2C2216] py-16 lg:py-24">
          <div className="lg:w-full mx-auto flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="text-[#AAC7FF] mt-8 lg:mt-16 lg:ml-36  z-10 ">
              <h1 className="text-[32px] lg:text-5xl text-center lg:text-left font-light leading-[109px]  tracking-[-1px] mb-4">
              /out in the wild
              </h1>
              <p className=" max-w-5xl leading-[25px] text-center lg:text-left text-sm lg:text-base mx-[7px] lg:mx-0 lg:mr-18">
              A peek behind the scenes of the brands<br/> I’ve helped bring to life — from first calls to final packaging, launch links, founder notes, and everything in between. These aren’t just projects. They’re partnerships. And this is where the work goes from design files… to real shelves, scrolls, and stories.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end z-0 pt-18 lg:pt-0">
              <div className="relative right-0">
                {heroImageUrl && (
                  <Image
                    src={heroImageUrl}
                    alt="Hero"
                    width={1250}
                    height={400}
                    className="lg:max-w-[1120px] lg:max-h-full object-contain h-auto drop-shadow-lg"
                    priority
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[45px] lg:text-100xl text-center mb-12 lg:mb-16 text-gray-900 font-light">
            on the /shelf
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#2C2216] overflow-hidden">
            {products.map((product: any, index: number) => {
  const productImages =
    product?.images?.map(
      (img: any) => `${STRAPI_URL}${img.url}`
    ) || []

  return (
    <ProductCard
      key={product?.id ?? index}
      product={{
        id: product?.id ?? index,
        name: product?.name ?? "Untitled Product",
        images: productImages,
        isLaunching: product?.isLaunching ?? false,
      }}
      index={index}
      totalProducts={products.length}
    />
  )
})}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
