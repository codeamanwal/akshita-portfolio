function getBaseUrl() {
  return process.env.NEXT_PUBLIC_STRAPI_URL || 'https://portfolio-cms-a0hn.onrender.com';
}

export async function fetchFromStrapi(path: string) {
  const baseUrl = getBaseUrl();
  try {
    const res = await fetch(`${baseUrl}${path}`, { cache: 'no-store' });
    if (!res.ok) {
      console.warn(`[Strapi Warning] Fetch returned status ${res.status} for path "${path}"`);
      return null;
    }
    return await res.json();
  } catch (error) {
    console.warn(`[Strapi Warning] Fetch failed for path "${path}" at ${baseUrl}:`, error);
    return null;
  }  
}

export function getStrapiMedia(url: string) {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  const baseUrl = getBaseUrl();
  return `${baseUrl}${url}`;
}