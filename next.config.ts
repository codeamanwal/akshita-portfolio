// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'portfolio-cms-a0hn.onrender.com', // 👈 your Render backend
        pathname: '/uploads/**',
      },
      // Add production domain after deployment to Render
      // {
      //   protocol: 'https',
      //   hostname: 'your-production-domain.com',
      //   pathname: '/uploads/**',
      // },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // 👈 this lets build succeed even with lint errors
  },
};

export default nextConfig;
