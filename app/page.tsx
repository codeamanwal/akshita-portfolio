import Image from "next/image";
import Hero from "../components/landing_page/hero";
// import FeaturedWorkStack from "../components/landing_page/cards/stack";
import Link from "next/link";
import AboutSection from "../components/landing_page/about";
import InstagramFeed from "@/components/landing_page/instagramfeed";
import LetsBuildBold from "../components/landing_page/letsbuildbold";
import ScrollCarousel from "../components/landing_page/scrollcarousel";
// import HorizontalSrcoll from "@/components/landing_page/horizontalSrcoll";
import SwipeCards from "@/components/landing_page/testimonials";
import Header from "@/components/landing_page/header";
import FeaturedWork from "@/components/landing_page/cards/FeaturedWork.server";
import HorizontalScrollServer from "@/components/landing_page/HorizontalScroll.server";

export default function Home() {
  return (
    <>
      <Header />
      <div className="">
        <Hero />
        <div className="flex flex-col items-center justify-center text-center pt-10 pb-0">
          <FeaturedWork />
        </div>
        <div className="flex justify-center items-center  mt-8">
          <Link href="/work" className="inline-block">
            <button className="border z-20 border-[#2C2216] text-[#2C2216] px-4  text-sm flex items-center gap-2 active:bg-[#2C2216] active:text-white lg:hover:bg-[#2C2216] lg:hover:text-white transition-colors cursor-pointer">

            </button>
          </Link>
        </div>
        <div className=" mt-20  md:mt-10">
          <AboutSection />
          <ScrollCarousel />
        </div>
        {/* <Video/> */}
        <div className="">
          <Image src="/gif4x.png" alt="gif" width={1550} height={750} className="w-full"></Image>
        </div>
      </div>
      <div className="">
        <HorizontalScrollServer />
      </div>
      <SwipeCards />
      <InstagramFeed />
      <LetsBuildBold />
      {/* <FeaturedProjects /> */}
      {/* <ProjectDetails />
      <Testimonials />
      <Blogs /> */}
    </>
  );
}

