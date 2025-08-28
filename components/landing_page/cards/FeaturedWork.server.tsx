import { fetchFromStrapi, getStrapiMedia } from "@/lib/strapi";
import FeaturedWorkStack from "./stack";

export default async function FeaturedWork() {
  const res = await fetchFromStrapi("/api/featured-projects?populate=*");

  const items = Array.isArray(res?.data) ? res.data : [];

  const projects = items
    .map((p: any) => ({
      id: p.id,
      slug:
        p.slug ||
        (p.name ? p.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") : ""),
      order: typeof p.order === "number" ? p.order : 9999,
      services: p.services || "",
      industry: p.industry || "",
      name: p.name || "",
      // Strapi v5 returns media with .url directly
      mobile_image: getStrapiMedia(p.mobile_image?.url) || "",
      image: getStrapiMedia(p.image?.url) || "",
      // You stored Tailwind classes in Strapi (e.g. "text-[#AAE786]", "bg-[#183430]")
      fontColor: p.fontColor || "",
      bgColor: p.bgColor || "",
    }))
    .sort((a: any, b: any) => a.order - b.order);

  return <FeaturedWorkStack projects={projects} />;
}