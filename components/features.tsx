import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Unrivaled Locations",
    description:
      "The best addresses in the best neighborhoods of the nation’s best cities.",
    icon: "/cross.avif",
  },
  {
    title: "Innovative Service",
    description:
      "Tech-enabled services with a human touch via our (coming soon) app, Etoric Life.",
    icon: "/phone.png",
  },
  {
    title: "Premium Amenities",
    description:
      "Amenity-rich buildings offer curated experiences that enhance everyday life.",
    icon: "/amenities.avif",
  },
];

const Features = () => {
  return (
    <section className="bg-[#E7E6E2] py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={96}
                height={96}
                className="mb-8"
              />

              <h3 className="text-3xl font-bold tracking-wide text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
