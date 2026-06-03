"use client";
import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    text: `"I have tremendous trust in Etoric and am pleased with their strong performance on our behalf. By actively managing our properties and providing strategic vision, they think like owners."`,
    image: "/brett.jpg",
    author: "Brett Kahn",
    position: "Managing Director | J.P. Morgan Asset Management",
  },
  {
    text: `"We're proud to be Etoric's anchor customer and entrust them with property management of our assets nationwide. Etoric is at the forefront of innovation in the multifamily industry. The revenue and NOI uplift they have created for us is unprecedented."`,
    image: "/jaja.jpg",
    author: "Jaja Jackson",
    position: "Senior Vice President | ICONIQ Capital",
  },
  {
    text: `"The Etoric team has been a great partner to us with experts across the spectrum to seamlessly transition our Atlanta asset to a more flexible living model. We look forward to continuing to expand our relation with Etoric in the years ahead."`,
    image: "/spencer.jpg",
    author: "W.A. Spencer Morris",
    position: "President | Allen Morris",
  },
  {
    text: `"Etoric does a great job hiring the right people. They achieve the highest market rents while providing residents with a level of service that would typically only be found in a hotel."`,
    image: "/jordan.jpg",
    author: "Jordan Selig",
    position: "Executive Vice President | Selig Real Estate",
  },
  {
    text: `"With an owner’s mindset, Etoric leaders are the best possible advocates for our assets. We have seen their impact firsthand and have no doubt they will continue to produce these results."`,
    image: "/brent.png",
    author: "Brent Harrison",
    position: "Senior Vice President | WestBrook Properties",
  },
  {
    text: `"I have tremendous trust in Etoric and am pleased with their strong performance on our behalf. By actively managing our properties and providing strategic vision, they think like owners."`,
    image: "/brett.jpg",
    author: "Brett Khan",
    position: "Managing Director | JP Morgan Asset Management",
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

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

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
                <div key={index} className="flex-shrink-0 w-full pr-4">
                  {/* Testimonial text */}
                  <p className="text-gray-900 text-lg md:text-5xl font-bold">
                    {item.text}
                  </p>

                  {/* Author row */}
                  <div className="mt-8 flex items-center gap-4">
                    {/* Author image */}
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.author}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Author info */}
                    <div>
                      <p className="font-medium text-gray-900">{item.author}</p>
                      <p className="text-gray-700">{item.position}</p>
                    </div>
                  </div>
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
