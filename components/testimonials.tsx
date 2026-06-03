"use client";
import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    text: `"Amazing stay! The amenities are modern and beautiful. We loved using the fitness center and indoor garden with pool during our stay. Our unit was modern with some of the best views of Lake Michigan and the city skyline."`,
    author: "Farah, Guest at Etoric Michigan Avenue",
    star: "★★★★★ Google Reviews",
  },
  {
    text: `"Excellent! The staff was incredible and the concierge was phenomenal. Could not recommend this place with higher praise. Pay this place a dang ol’ visit!"`,
    author: "Cameron, Guest at Etoric East Austin at 1614 E. 6th",
    star: "★★★★★ Google Reviews",
  },
  {
    text: `"It’s just a great place to live and work remote, and I strongly recommend it. Top-notch team, service, building and location."`,
    author: "Beth, Resident at Etoric Old Town",
    star: "★★★★★ Google Reviews",
  },
  {
    text: `"Etoric West Midtown stands above the rest. The leasing staff is extremely helpful and kind, and the property managers are down to earth, empathetic, and quick to solve any rental issues."`,
    author: "Drew, Resident at West Midtown at Star Metals",
    star: "★★★★★ Google Reviews",
  },
];

const AUTO_SLIDE_DELAY = 10000;

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [slideWidth, setSlideWidth] = useState(0);

  // Measure slide width (same idea as listings)
  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current) {
        setSlideWidth(trackRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const next = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(next, AUTO_SLIDE_DELAY);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="bg-[#E7E6E2] px-6 py-12 md:h-full flex items-center">
      <div className="mx-auto max-w-4xl w-full flex flex-col justify-between h-full">
        {/* Header */}
        <h2 className="text-xl font-semibold mb-6">People like it here</h2>

        {/* === FIXED SLIDE CONTAINER === */}
        <div className="flex flex-col justify-between md:h-[550px]">
          {/* Sliding content */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${current * slideWidth}px)`,
              }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full pr-4"
                >
                  <p className="text-gray-900 text-lg md:text-5xl font-bold leading-snug">
                    {item.text}
                  </p>
                  <p className="mt-4 font-medium text-gray-700">
                    {item.author}
                  </p>
                  <p className="mt-1 font-medium text-gray-700">
                    {item.star}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows — fixed position, same as listings */}
          <div className="flex justify-end mt-6">
            <button
              onClick={prev}
              className="border border-black rounded-full px-4 py-2 mr-2 cursor-pointer"
            >
              &#8592;
            </button>
            <button
              onClick={next}
              className="border border-black rounded-full px-4 py-2 cursor-pointer"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
