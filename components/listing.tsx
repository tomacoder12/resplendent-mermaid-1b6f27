"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const listings = [
  {
    id: 1,
    title: "Oceanview Residences",
    location: "Santa Monica, CA",
    image: "/parlor.avif",
  },
  {
    id: 2,
    title: "The Etoric Lofts",
    location: "Venice Beach, CA",
    image: "/brown-parlor.avif",
  },
  {
    id: 3,
    title: "Pacific Heights",
    location: "Malibu, CA",
    image: "/blue-couch.avif",
  },
  {
    id: 4,
    title: "Sunset Collective",
    location: "Laguna Beach, CA",
    image: "/open-balcony.avif",
  },
  {
    id: 5,
    title: "Sunset Collective",
    location: "Laguna Beach, CA",
    image: "/park.avif",
  },
  {
    id: 6,
    title: "Sunset Collective",
    location: "Laguna Beach, CA",
    image: "/kitchen.avif",
  },
  {
    id: 7,
    title: "Sunset Collective",
    location: "Laguna Beach, CA",
    image: "/bedroom.avif",
  },
  {
    id: 8,
    title: "Sunset Collective",
    location: "Laguna Beach, CA",
    image: "/outdoor.avif",
  },
  {
    id: 9,
    title: "Sunset Collective",
    location: "Laguna Beach, CA",
    image: "/pool2.avif",
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
    <section className="bg-white py-24 px-4">
      <div className="mx-auto max-w-7xl flex flex-col h-full">
        <h1 className="text-3xl md:text-6xl font-medium text-gray-900 text-center">
          Smart, spacious, and stunningly designed. Etoric communities are
          enviable places to call home.
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
              <p className="text-lg md:text-xl text-gray-500 mt-2">
                {listings[current].location}
              </p>
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

      <div className="bg-white py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-6xl font-medium tracking-wide text-gray-900">
            This is Home+
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-gray-600">
            Feel at home in a new city with modern comforts and community spaces
            that foster wellness, calm, and connection.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center gap-8">
          {/* Top row */}
          <div className="flex flex-col md:flex-row justify-center gap-8 w-full">
            {home.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden cursor-pointer py-5"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 text-start">
                  <h3 className="text-lg md:text-4xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row justify-center gap-8 w-full">
            {home.slice(3, 6).map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden cursor-pointer py-5"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 text-start">
                  <h3 className="text-lg md:text-4xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
