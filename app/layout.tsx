import type { Metadata } from "next";
import {ThemeProvider} from "../components/theme-provider";
import "./globals.css";
import { DM_Sans, Domine } from "next/font/google";
import HeroBanner from "@/components/landing_page/footer";
import Navbar from "@/components/navbar";
// import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const domine = Domine({
  subsets: ["latin"],
  variable: "--font-domine",
});
export const metadata: Metadata = {
  title: "Akshita",
  description: "Design partner for consumer brands. I craft identities and packaging that connect, sell, and scale.",
  
  openGraph: {
    title: "Akshita",
    description: "That's where design comes in. Not as the final layer, but as a strategic tool - one that turns positioning into presence, and decisions into identity. It's what ...",
    url: "https://www.akshitaagarwal.com/", // <-- change to your real domain
    siteName: "Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dqdwmctpi/image/upload/v1757573436/akshita_favicon_qauadf.png", // <-- change to your image
        width: 1200,
        height: 630,
        alt: "Portfolio preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshita",
    description: "That's where design comes in. Not as the final layer, but as a strategic tool - one that turns positioning into presence, and decisions into identity. It's what ...",
    images: ["https://res.cloudinary.com/dqdwmctpi/image/upload/v1757573436/akshita_favicon_qauadf.png"], // <-- same as above
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${domine.variable}`}>
      <head>
      <meta name="google-site-verification" content="google0cb3aff4c07362a2.html" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
  "@context": "https://schema.org",
  "@type": "Person",
  "url": "https://www.akshitaagarwal.com",
  "name": "Akshita Agarwal",
  "department": [
    {
      "@type": "Person",
      "name": "Contact",
      "url": "https://www.akshitaagarwal.com/contact"
    },
    {
      "@type": "Person",
      "name": "About",
      "url": "https://www.akshitaagarwal.com/about"
    },
    {
      "@type": "Person",
      "name": "Work",
      "url": "https://www.akshitaagarwal.com/work"
    },
    {
      "@type": "Person",
      "name": "Play",
      "url": "https://www.akshitaagarwal.com/play"
    },
    {
      "@type": "Person",
      "name": "Journals",
      "url": "https://www.akshitaagarwal.com/journals"
    }
  ]
}` }} />
      
      </head>
      <body className="font-dm-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen font-body">{children}</main>
          <HeroBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
