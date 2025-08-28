'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="bg-[#E9DAB6] flex flex-col items-center justify-center lg:h-screen">
      {/* Desktop View */}
      <section className="hidden max-h-screen max-[1024px]:scale-[1] max-[1400px]:scale-[0.8] lg:flex  flex-col items-center justify-center  px-12 pt-12">
        <div className="w-full max-w-[1512px] pl-12 flex flex-row items-center justify-between">
          {/* Left Image */}
          <div className="relative w-[320px] h-[410px] -mb-28">
            <Image
              src="/gif22.gif"
              alt="Working"
              fill
              className="object-cover rounded-xl"
              unoptimized={true}
            />
          </div>

          {/* Center Text */}
          <div className="flex flex-col pl-16 justify-end space-around h-full items-center text-center max-w-2xl">
            <h1 className="max-[1400px]:text-5xl text-6xl font-domine font-light text-[#9F8267] leading-tight">
            {/* No fluff. Just /brands that actually land. */}
            No fluff. Just<span className="font-sans"> /brands </span>
            that actually land.
            </h1>
            <p className=" text-base mt-12  items-center max-w-[520px] text-[#51331B]">
            Over the years, I’ve worked with founders across categories to build brands with depth, direction, and taste. The kind that feel right on day one - and hold strong in the fluid market.
            </p>
            <div className="flex flex-col items-center mt-12 ">
              <Image
                src="/Vector 41.png"
                alt="arrow"
                width={8}
                height={0}
                className="mb-4"
              />
              <p className="text-2xl font-signature  text-[#4a3b2f] italic">
                Hi, I&apos;m Akshita!
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative items-start mb-30 -mr-11">
            <Image
              src="/gif32.gif"
              alt="Phone call"
              width={460}
              height={380}
              className='object-fit'
            />
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section className=" lg:hidden flex-col items-start justify-end px-6 py-12">
        {/* Top Image */}
        <div className="relative  my-12  flex ">
          <Image
            src="/gif22.gif"
            alt="Working"
           width={210}
           height={210}
            className='items-start justify-center '
          />
        </div>

        {/* Center Text */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[32px] font-domine text-[#9F8267]">
            design<span className="font-sans"> /details </span>that<br />
            feel like magic
          </h1>
          <p className="mt-4 text-sm text-[#51331B] max-w-[310px] leading-6">
            Passionate about fair creative practices and building a strong design community.
            I’m here to make brands look good and mean something.
          </p>

        </div>

        {/* Arrow + Text and Phone Image */}
        <div className="relative w-full h-[300px] mt-5 flex justify-center items-end">
          {/* Arrow and Text */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <Image
              src="/Vector 41.png"
              alt="arrow"
              width={10} // Adjusted width for better visibility
              height={60} // Adjusted height for better proportion
              className="mb-2"
            />
            <p className="text-xl font-custom text-[#4a3b2f] mt-24 italic whitespace-nowrap">
              Hi, I&apos;m Akshita!
            </p>
          </div>

          {/* Phone Image */}
          <div className="absolute bottom-0 right-[-120px] w-[337px] h-[337px] flex items-end justify-end">
            <Image
              src="/gif32.gif"
              alt="Phone call"
              layout="fill" // Use layout="fill" to let the parent control size
              objectFit="contain" // Ensures the image fits within its container
            />
          </div>
        </div>

      </section>
        {/* Arrow + Text */}


    </div>
  );
}
