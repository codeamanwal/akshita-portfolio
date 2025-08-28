import { notFound } from 'next/navigation'
import Navbar from '@/components/navbar'
// import type { PageProps } from "next"

interface PageParams {
  slug: string
}

export default async function JournalDetailPage(props: { params: Promise<PageParams> } ) {
  const { slug } = await props.params
  
  // Fetch the journal from Strapi by slug
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/journals?filters[slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" }
  )
  const data = await res.json()

  if (!data?.data?.length) {
    notFound()
  }

  const journal = data.data[0]
  const { Title, date, content, content2, oneLiner, coverImage } = journal

  // Format date as "Month, Year"
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  })

  // Convert Strapi rich text blocks into plain text
  const getText = (blocks: any[]) =>
    blocks?.map((block) =>
      block.children.map((child: any) => child.text).join("")
    ).join("\n\n")

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FEFCE4]">
        <div className="mx-auto px-6 md:px-24 py-16 md:py-24">

          {/* Header Image */}
          <div className="w-full h-[406px] md:h-[495px] mb-8 rounded-none bg-[#C8C8D0] flex items-center justify-center">
            {coverImage?.[0]?.url && (
              <img
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${coverImage[0].url}`}
                alt={coverImage[0].alternativeText || Title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Date */}
          <p className="text-base text-[#C19570] mb-6">
            {formattedDate.replace(' ',', ')}
          </p>

          {/* Title */}
          <h1 className="text-xl md:text-[40px] font-domine leading-tight mb-8 text-[#2C2216] max-w-4xl">
            {Title}
          </h1>

          {/* Content in two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="max-w-[350px] md:max-w-[620px]">
              <p className="text-sm md:text-lg text-[#2C2216] leading-loose">
                {getText(content).split("\n\n")[0]}
              </p>
              <div className="hidden md:block border-b border-[#2C2216] pt-40 max-w-xl"></div>
            </div>
            <div className="max-w-[350px] md:max-w-[620px]">
              <p className="text-sm md:text-lg text-[#2C2216] leading-loose">
                {getText(content).split("\n\n")[1] || ""}
              </p>
              <div className="md:hidden border-b border-[#2C2216] pt-20 max-w-xl"></div>
            </div>
          </div>

          {/* New Section with left heading and right content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Left side - Section heading */}
            <div className="max-w-[360px] md:max-w-xl">
              <h2 className="text-2xl md:text-[32px] font-domine text-[#51331B] md:leading-[43px] md:tracking-[-1px]">
                {getText(oneLiner)}
              </h2>
            </div>

            {/* Right side - Content sections */}
            <div className="space-y-12 max-w-[340px] md:max-w-[550px]">
              

              <div>
                
                <p className="text-sm md:text-base text-[#2C2216] leading-relaxed">
                  {getText(content2)}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
