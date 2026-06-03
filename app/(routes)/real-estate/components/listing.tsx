"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const listings = [
  {
    id: 1,
    title: "Miro - San Jose, CA",
    image: "/hero.avif",
  },
  {
    id: 2,
    title: "The Modern - Seattle, WA",
    image: "/modern.avif",
  },
  {
    id: 3,
    title: "Gardenhouse - Beverly Hills, CA",
    image: "/gardenhouse.avif",
  },
  {
    id: 4,
    title: "The Bellevue - Philadelphia, PA",
    image: "/philly.avif",
  },
];

const home = [
  {
    id: 1,
    title: "Membership Clubs",
    image: "/membership.avif",
  },
  {
    id: 2,
    title: "Food + Beverage",
    image: "/food.avif",
  },
  {
    id: 3,
    title: "Health + Wellness",
    image: "/health.avif",
  },
  {
    id: 4,
    title: "Events + Activations",
    image: "/events.avif",
  },
  {
    id: 5,
    title: "Pets Welcome",
    image: "/pets.avif",
  },
  {
    id: 6,
    title: "Designer Furnished Options",
    image: "/designer.avif",
  },
];

export default function Listing() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  // Calculate card width dynamically
  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current) {
        const card = trackRef.current.firstElementChild as HTMLElement;
        if (card) setCardWidth(card.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + listings.length) % listings.length);
  const next = () => setCurrent((prev) => (prev + 1) % listings.length);

  return (
    <section className="bg-white px-4">
      <div className="mx-auto max-w-7xl flex flex-col h-full">
        <h1 className="text-3xl md:text-6xl font-medium text-gray-900 text-center">
          Take a look at our featured projects.
        </h1>

        {/* Content + carousel */}
        <div className="mt-20 flex flex-col justify-between h-[650px]">
          {/* Carousel */}
          <div>
            <div className="overflow-hidden">
              <div
                ref={trackRef}
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${current * cardWidth}px)`,
                }}
              >
                {listings.map((listing) => (
                  <div key={listing.id} className="flex-shrink-0 w-full px-2">
                    <div className="">
                      <Image
                        src={listing.image}
                        alt={listing.title}
                        width={1920}
                        height={800}
                        className="w-full h-[500px] object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Title & location */}
            <div className="mt-8 text-left">
              <h3 className="text-2xl md:text-4xl font-semibold text-gray-900">
                {listings[current].title}
              </h3>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={prev}
              className="border border-gray-300 bg-white rounded-full px-4 py-2 mr-2 hover:bg-gray-100 transition cursor-pointer"
            >
              &#8592;
            </button>
            <button
              onClick={next}
              className="border border-gray-300 bg-white rounded-full px-4 py-2 hover:bg-gray-100 transition cursor-pointer"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
