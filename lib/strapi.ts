const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function fetchFromStrapi(path: string) {
    const baseUrl = process.env.STRAPI_URL || 'http://localhost:1337';
    const res = await fetch(`${baseUrl}${path}`, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error(`Failed to fetch ${path}`);
    }
    return res.json();
}

export function getStrapiMedia(url: string) {
    const baseUrl = process.env.STRAPI_URL || 'http://localhost:1337';
    if (!url) return '';
    // If already an absolute URL (like from Cloudinary), just return it
    if (url.startsWith('http')) return url;
    return `${baseUrl}${url}`;
}