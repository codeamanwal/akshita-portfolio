// app/components/landing_page/showreel.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchFromStrapi, getStrapiMedia } from "@/lib/strapi";

export default function Showreel() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchShowreel() {
      try {
        const data = await fetchFromStrapi("/api/showreel?populate=*");
        const media = data?.data?.Video;
        if (media?.url) {
          setVideoUrl(getStrapiMedia(media.url));
        }
      } catch (error) {
        console.error("Failed to fetch showreel:", error);
      }
    }

    fetchShowreel();
  }, []);

  if (!videoUrl) return null; // optionally add a loader

  // Determine if the media is a video or image
  const isVideo = videoUrl.endsWith(".mp4") || videoUrl.endsWith(".mov") || videoUrl.endsWith(".webm");

  return (
    <div className="flex justify-center">
      {isVideo ? (
        <video
          src={videoUrl}
          width={1550}
          height={750}
          className="w-[1550px] h-[750px] object-fill"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />
      ) : (
        <Image
          src={videoUrl}
          alt="Showreel"
          width={1550}
          height={750}
          className="w-[1550px] h-[750px] object-fill"
        />
      )}
    </div>
  );
}
