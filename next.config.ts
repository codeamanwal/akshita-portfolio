// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type { NextConfig } from 'next';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "";
const strapiHostname = strapiUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

const remotePatterns: any[] = [
  {
    protocol: 'http',
    hostname: 'localhost',
    port: '1337',
    pathname: '/uploads/**',
  },
  {
    protocol: 'https',
    hostname: 'res.cloudinary.com',
    pathname: '/**',
  },
];

if (strapiHostname) {
  remotePatterns.push({
    protocol: 'https',
    hostname: strapiHostname,
    pathname: '/uploads/**',
  });
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
