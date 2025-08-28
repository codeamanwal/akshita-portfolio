"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'

export default function JournalsPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [articles, setArticles] = useState<any[]>([])

  // Fetch journals from Strapi
  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/journals?populate=*`
        )
        const data = await res.json()
        const formatted = data.data.map((item: any) => {
          const cover =
            Array.isArray(item?.coverImage) && item.coverImage.length > 0
              ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.coverImage[0].url}`
              : null
        
          return {
            id: item.id,
            date: item?.date
              ? new Date(item.date).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })
              : "",
            title: item?.Title || "Untitled",
            slug: item?.slug || "",
            oneLiner: item?.oneLiner?.[0]?.children?.[0]?.text || "",
            description: item?.Description || "",
            coverImage: cover,
          }
        })
        
        setArticles(formatted)
      } catch (err) {
        console.error("Error fetching journals:", err)
      }
    }
  
    fetchJournals()
  }, [])
  

  const articlesPerPage = 3
  const totalSlides = Math.ceil(articles.length / articlesPerPage)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <>
      <Navbar />
      <div className="lg:pt-16 min-h-screen overflow-x-hidden">
        <section className="py-16 lg:py-24 px-6 lg:px-8">
          <div className="max-w-[1512px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              
              {/* Left Sidebar */}
              <div className="lg:w-[35%] space-y-8">
                <div className="max-w-2xl space-y-6">
                  <div>
                    <h2 className="text-3xl lg:text-5xl font-regular leading-[109px] tracking-[-1px] text-[#2C2216] ">
                      /journals
                    </h2>
                    <p className="text-[#2C2216] text-base lg:text-[18px] leading-relaxed">
                                      From published pieces and interviews to <span className="hidden md:block"><br /></span>
                                      unfiltered posts and notes from the field —<span className="hidden md:block"><br /></span>
                                      this is where I document, reflect, and <span className="hidden md:block"><br /></span>
                                      occasionally rant. Some of it’s sharp, some<span className="hidden md:block"><br /></span>
                                      scrappy — all of it shaped by building<span className="hidden md:block"><br /></span>
                                      brands in the real world.
                    </p>
                  </div>
                  
                  <div className="mt-16">
                    <h3 className="text-2xl lg:text-[32px] font-regular text-[#2C2216]">
                      /industry
                    </h3>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:w-[65%]">
                {articles[0] && (
                  <div className="max-w-[700px] space-y-6">
                    {/* Cover Image above title */}
                    {articles[0].coverImage && (
                      <Image
                        src={articles[0].coverImage}
                        alt={articles[0].title}
                        width={700}
                        height={400}
                        className="rounded-lg mb-4 object-cover"
                      />
                    )}
                    <h1 className="text-2xl lg:text-3xl font-domine text-[#2C2216] leading-[45px] tracking-[-1px]">
                      {articles[0].title}
                    </h1>
                    <p className="text-[#2C2216] text-sm lg:text-base leading-relaxed">
                      {articles[0].oneLiner}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Nav */}
            <div className="mt-36 border-t border-b border-[#2C2216]">
              <div className="flex items-center py-4">
                <div className="hidden lg:block flex-1 text-center text-sm lg:text-base text-[#2C2216] tracking-widest">
                  IRL INSIGHTS
                </div>
                <div className="hidden lg:block w-px h-12 bg-[#2C2216]"></div>
                <div className="flex-1 text-center text-sm lg:text-[32px] text-[#2C2216] font-light lg:mx-32">
                  /archives from industry
                </div>
                <div className="hidden lg:block w-px h-12 bg-[#2C2216]"></div>
                <div className="hidden lg:block flex-1 text-center text-sm lg:text-base text-[#2C2216] tracking-widest">
                  IRL INSIGHTS
                </div>
              </div>
            </div>

            {/* Carousel */}
            <div className="mt-16 relative">
              {/* Arrows */}
              <button onClick={prevSlide} className="absolute left-[-20px] lg:left-[-40px] top-[31%] -translate-y-1/2 z-10 p-2 lg:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 -translate-x-3 lg:-translate-x-6" disabled={currentSlide === 0}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className={currentSlide === 0 ? 'text-gray-300' : 'text-gray-700'}>
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              <button onClick={nextSlide} className="absolute right-[-20px] lg:right-[-40px] top-[31%] -translate-y-1/2 z-10 p-2 lg:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 translate-x-3 lg:translate-x-6" disabled={currentSlide === totalSlides - 1}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className={currentSlide === totalSlides - 1 ? 'text-gray-300' : 'text-gray-700'}>
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>

              {/* Articles */}
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {articles.slice(slideIndex * articlesPerPage, (slideIndex + 1) * articlesPerPage).map((article) => (
                          <Link key={article.id} href={`/journals/${article.slug}`} className="space-y-4 cursor-pointer hover:opacity-80 transition-opacity">
                            {/* ✅ Cover Image always above */}
                            {article.coverImage && (
                              <div className="h-100 rounded-[8px] overflow-hidden">
                                <Image
                                  src={article.coverImage}
                                  alt={article.title}
                                  width={400}
                                  height={250}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            <div className="space-y-4 lg:space-y-2 max-w-2xl mb-4 lg:mb-0">
                              <p className="text-[13px] lg:text-base text-[#C19570]">{article.date.replace(' ',', ')}</p>
                              <h3 className="text-base lg:text-xl font-domine text-[#2C2216] leading-tight">
                                {article.title}
                              </h3>
                              <p className="text-xs lg:text-sm text-[#2C2216] leading-relaxed mt-4">
                                {article.oneLiner}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-colors duration-200 ${index === currentSlide ? 'bg-[#2C2216]' : 'bg-gray-300'}`} />
                ))}
              </div>
              <div className='mt-16 border-[#2C2216] border-b'></div>
            </div>

            {/* Journal List */}
            <div className="mt-8 lg:mt-16">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                {/* Left Img */}
                <div className="hidden lg:block lg:w-[50%]">
                  <div className="relative lg:-top-30 -ml-18">
                    <Image src="/journals3.png" alt="Lorem Ipsum journal with binoculars" className="w-full h-auto object-contain -rotate-4 " width={800} height={400}/>
                  </div>
                </div>
                <div className='hidden lg:block border-[#2C2216] border-r -ml-45'></div>

                {/* Right Articles */}
                <div className="lg:w-[65%] space-y-6 lg:space-y-8">
  {articles.slice(0, 3).map((article) => (
    <Link
      key={article.id}
      href={`/journals/${article.slug}`}
      className="border-b border-[#2C2216] pb-4 lg:pb-6 block hover:opacity-80 transition-opacity"
    >
      <div className="flex gap-4 lg:gap-6 items-start">
        {/* ✅ Bigger cover image on the left */}
        <div className="w-26 h-26 lg:w-61 lg:h-61 rounded-lg overflow-hidden bg-gray-300 flex-shrink-0">
                          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-gray-500">
                          <div className="relative w-30 h-36 md:w-[250px] md:h-[400px]">
  <Image
    src={article.coverImage}
    alt={article.title}
    fill
    className="rounded-lg object-cover flex-shrink-0"
    sizes="(min-width: 768px) 243px, 96px"
/>
</div>

                          </div>
                        </div>
        

        {/* ✅ Content on the right */}
        <div className="flex-1 space-y-1 lg:space-y-2 lg:mx-8">
          <p className="text-[9px] lg:text-base text-[#C19570]">
          {article.date.replace(' ', ', ')}
          </p>
          <h3 className="text-xs lg:text-xl font-domine text-[#2C2216] leading-tight lg:leading-[30px] pt-3 lg:pt-8">
            {article.title}
          </h3>
          <p className="text-[8px] lg:text-sm text-[#2C2216] leading-relaxed pt-1 lg:pt-2">
            {article.oneLiner}
          </p>
        </div>
      </div>
    </Link>
  ))}
</div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
