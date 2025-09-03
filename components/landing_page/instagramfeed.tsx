"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { fetchFromStrapi, getStrapiMedia } from "@/lib/strapi";

type InstagramFeedItem = {
  id: number;
  orderNo: number;
  Post: {
    id: number;
    url: string;
    mime: string;
    width: number;
    height: number;
    alternativeText?: string;
    formats?: Record<string, any>;
  };
};


const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramFeedItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await fetchFromStrapi(
          "/api/instagram-feeds?populate=Post&sort=orderNo:asc"
        );
        setPosts(data.data || []);
      } catch (error) {
        console.error("Failed to fetch Instagram feed:", error);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center md:m-8 m-4">
        <h1 className="text-[1rem] xs:text-[1.8rem] sm:text-[2rem] md:text-[1rem] lg:text-[2rem] xl:text-[3.6rem] text-[#51331B] leading-[1.1] sm:leading-tight">
          /daily <span className="font-domine">updates</span>
        </h1>
        <button className="border border-[#2C2216] text-[#2C2216] md:px-4 px-2 justify-center md:py-2 text-sm flex items-center md:gap-2 active:bg-[#2C2216] active:text-white lg:hover:bg-[#2C2216] lg:hover:text-white transition-colors group cursor-pointer">
          <span className="mr-2 font-regular text-base md:text-xl leading-6 md:leading-7 tracking-tight">
            <a
              href="https://www.instagram.com/akshita.design/"
              target="_blank"
              rel="noopener noreferrer"
            >
              view instagram
            </a>
          </span>
          <ArrowUpRight className="w-5 h-5 group-active:translate-x-1 group-active:-translate-y-1 lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1 transition-transform duration-200" />
        </button>
      </div>

      {/* Loader */}
      {loading && <p className="text-center text-gray-500">Loading...</p>}

      {/* Grid of posts */}
      <div className="overflow-x-auto">
  <div className="flex gap-2 px-4 md:px-8" style={{ minWidth: "100%" }}>
    {posts.map((item) => {
      const media = item.Post;
      if (!media) return null;

      const url = getStrapiMedia(media.url);
      const isImage = media.mime?.startsWith("image");
      const isVideo = media.mime?.startsWith("video");

      return (
        <div
          key={item.id}
          className="flex-shrink-0 w-1/5 aspect-square overflow-hidden"
        >
          {isImage && (
            <img
              src={media.formats?.medium?.url || media.url}
              alt={media.alternativeText || "Instagram Post"}
              className="object-cover w-full h-full"
            />
          )}
          {isVideo && (
            <video
              src={media.url}
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full"
            />
          )}
        </div>
      );
    })}
  </div>
</div>


      {!loading && !posts.length && (
        <p className="text-center text-gray-500 mt-4">No posts available.</p>
      )}
    </div>
  );
};

export default InstagramFeed;
