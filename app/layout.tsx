import type { Metadata } from "next";
import {ThemeProvider} from "../components/theme-provider";
import "./globals.css";
import { DM_Sans, Domine } from "next/font/google";
import HeroBanner from "@/components/landing_page/footer";
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
    title: "agarwal",
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
    title: "agarwal",
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
      {/* <meta name="google-site-verification" content="s-1jfW3Ap-5oKqB-12GxnPYzR6yJVC7tBvlIMrmBU2c" /> */}
      </head>
      <body className="font-dm-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <nav style={{ display: "flex", gap: "1.5rem", padding: "1rem"  }}>
              <a href="/contact">Contact</a>
              <a href="/about">About</a>
              <a href="/work">Work</a>
              <a href="/play">Shelf</a>
              <a href="/journals">Journals</a>
          </nav> */}
          <main className="min-h-screen font-body">{children}</main>
          <HeroBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
