import { fetchFromStrapi, getStrapiMedia } from "@/lib/strapi";
import HorizontalScroll from "./horizontalSrcoll";

// Define the CardType to match what HorizontalScroll expects
type CardType = {
  id: number;
  url: string;
  title: string;
};

export default async function HorizontalScrollServer() {
  // Fetch all images, include brand (media) field
  const res = await fetchFromStrapi("/api/images?populate=*&sort[0]=order:asc");
  const items = Array.isArray(res?.data) ? res.data : [];
  
  // Map to the correct structure that HorizontalScroll expects
  const cards: CardType[] = items.map((item: any) => ({
    id: item.id,
    url: getStrapiMedia(item.brand?.url) || "/placeholder.png",
    title: item.slug || item.brand?.name || `Image ${item.id}`,
  }));

  return <HorizontalScroll cards={cards} />;
}