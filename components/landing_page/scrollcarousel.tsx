"use client";
import Image from "next/image";
import MarqueeItem from "./Marquee";

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  { url: "/brand1.1.png", title: "branding strategy", id: 1 },
  { url: "/visual2.1.png", title: "visual identity", id: 2 },
  { url: "/brand3.png", title: "packaging design", id: 3 },
  { url: "/publication_design.png", title: "publication design", id: 4 },
  { url: "/uiux.1.1.png", title: "uiux design", id: 5 },
];

const ScrollCarousel = () => {
  return (
    <section className="relative w-full">
      {/* Marquee */}
      <div className="sticky top-0 z-0">
        <div className="w-full h-[100vh] flex items-center justify-center">
          <MarqueeItem />
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full z-10 px-4 pt-20 pb-40 bg-transparent mt-screen">
        <div className="flex flex-col items-center gap-10">
          {cards.map((card) => (
            <div
              key={card.id} // ✅ Added key here
              className="relative overflow-hidden"
            >
              <Image
                src={card.url}
                alt={card.title}
                width={300}
                height={300}
                className="lg:hidden"
              />
              <Image
                src={card.url}
                alt={card.title}
                width={400}
                height={400}
                className="hidden lg:flex"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollCarousel;
