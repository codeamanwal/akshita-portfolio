// app/play/ProductCard.tsx
"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export default function ProductCard({
  product,
  index,
  totalProducts,
}: {
  product: { id: number; name: string; images: string[]; isLaunching?: boolean }
  index: number
  totalProducts: number
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const getGridInfo = () => {
    return {
      mobile: { cols: 1, rows: Math.ceil(totalProducts / 1) },
      tablet: { cols: 2, rows: Math.ceil(totalProducts / 2) },
      desktop: { cols: 3, rows: Math.ceil(totalProducts / 3) },
    }
  }

  const gridInfo = getGridInfo()
  const getPosition = (cols: number) => ({
    row: Math.floor(index / cols),
    col: index % cols,
    isLastRow: Math.floor(index / cols) === Math.ceil(totalProducts / cols) - 1,
    isLastCol: index % cols === cols - 1,
  })

  const tabletPos = getPosition(gridInfo.tablet.cols)
  const desktopPos = getPosition(gridInfo.desktop.cols)

  const getBorderClasses = () => {
    const classes = []
    if (tabletPos.col === 0) classes.push("md:border-r")
    if (desktopPos.col === 0 || desktopPos.col === 1) classes.push("lg:border-r")
    if (index < totalProducts - 1) classes.push("border-b")
    if (tabletPos.isLastRow && index >= totalProducts - 2) classes.push("md:border-b-0")
    if (desktopPos.isLastRow && index >= totalProducts - 3) classes.push("lg:border-b-0")
    return `border-[#2C2216] ${classes.join(" ")}`
  }

  return (
    <div
      className={`p-8 pt-16 text-center relative cursor-pointer transition-all duration-300 ${getBorderClasses()}`}
    >
      {product.isLaunching && (
        <div className="absolute top-8 left-0 z-10">
          <span className="bg-[#DC7E55] text-[#2C2216] text-xs leading-[28px] tracking-[3px] px-3 py-2 font-medium">
            LAUNCHING SOON
          </span>
        </div>
      )}

      <div
        className="mb-8 h-80 flex items-center justify-center relative overflow-hidden"
        onClick={() =>
          setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
        }
      >
        {product.images.map((image, idx) => (
          <Image
            key={idx}
            src={image}
            alt={product.name}
            width={250}
            height={250}
            className={`absolute max-w-full max-h-full object-contain transition-opacity duration-500 ease-in-out ${
              idx === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="pt-4">
        <button className="overflow-hidden inline-flex justify-center gap-2 lg:gap-4 items-center h-[40px] px-6 py-2 border border-[#51331B] text-[#51331B] active:bg-[#51331B] active:text-white lg:hover:bg-[#51331B] lg:hover:text-white cursor-pointer transition-colors duration-200 group mt-8 lg:w-auto lg:h-[50px] lg:px-8 lg:py-3">
          <span className="text-base lg:text-xl leading-6 lg:leading-7 tracking-tight">
            {product.name}
          </span>
          <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 group-active:translate-x-1 group-active:-translate-y-1 lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  )
}
