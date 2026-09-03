import { fetchFromStrapi, getStrapiMedia } from "@/lib/strapi";
import HorizontalScroll, { CardType } from "./horizontalSrcoll";

export default async function HorizontalScrollServer() {
  // Fetch with deep populate for both brand and galleryImages.image
  const res = await fetchFromStrapi(
    "/api/images?populate[brand]=true&populate[galleryImages][populate][image]=true&sort[0]=order:asc"
  );
  const items = Array.isArray(res?.data) ? res.data : [];

  const cards: CardType[] = [];

  items.forEach((item: any) => {
    // Try galleryImages repeatable component first
    const validGalleryItems = (item.galleryImages || []).filter(
      (gi: any) => gi.image?.url
    );

    if (validGalleryItems.length > 0) {
      validGalleryItems.forEach((gi: any, idx: number) => {
        cards.push({
          id: item.id * 1000 + idx,
          url: getStrapiMedia(gi.image.url),
          title: item.slug || `Brand ${item.id}`,
          order: gi.order ?? item.order ?? 999,
          ratio: gi.ratio || "1:1",
        });
      });
    } else if (item.brand?.url) {
      // Fallback to the main brand image if no valid gallery images
      cards.push({
        id: item.id * 1000,
        url: getStrapiMedia(item.brand.url),
        title: item.slug || `Brand ${item.id}`,
        order: item.order ?? 999,
        ratio: "1:1",
      });
    }
  });

  // Sort all cards by their individual order
  cards.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

  return <HorizontalScroll cards={cards} />;
}