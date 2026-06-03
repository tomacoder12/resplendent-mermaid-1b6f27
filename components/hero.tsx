"use client";

import { useEffect, useState } from "react";
import LocationSearch from "./search";

type HeroProps = {
  images: string[];
  interval?: number;
};

export default function Hero({ images, interval = 5000 }: HeroProps) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  // Background slideshow
  useEffect(() => {
    if (!hasMultiple) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [hasMultiple, images.length, interval]);

  return (
    <section className="h-screen w-full">
      {/* Background images */}
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 h-full px-6">
        <div className="absolute left-1/2 top-[70%] -translate-x-1/2 w-full px-6">
          <LocationSearch />
        </div>
      </div>
    </section>
  );
}
