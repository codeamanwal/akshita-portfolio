const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function fetchFromStrapi(path: string) {
  try {
     const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    const res = await fetch(`https://portfolio-cms-a0hn.onrender.com${path}`, { cache: 'no-store' });
    return res.json();
  } catch (error) {
    throw error
  }  
    
}

export function getStrapiMedia(url: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    if (!url) return '';
    // If already an absolute URL (like from Cloudinary), just return it
    if (url.startsWith('http')) return url;
    return `https://portfolio-cms-a0hn.onrender.com${url}`;
  } catch (error) {
    throw error
  }
    
}