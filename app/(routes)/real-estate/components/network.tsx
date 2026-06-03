import Image from "next/image";
import React from "react";

const Network = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-4xl text-center space-y-5">
        <h1 className="text-3xl md:text-6xl font-medium tracking-wide text-gray-900">
          Growing national network.
        </h1>

        <p className="mt-8 text-lg leading-relaxed text-gray-600">
          Etoric operates 42 communities located in 22 vibrant cities across
          the country and is growing rapidly. Our dynamic team efficiently
          stands up operations for lease-ups and stabilized rentals, expertly
          staffing properties in under 30 days.
        </p>

        <div className="">
          <Image
            src={"/map.avif"}
            alt={"chart"}
            width={1920}
            height={800}
            className="w-full h-[500px] object-cover"
          />
        </div>

        <p className="font-sm font-medium italic">
          Etoric communities are located in Atlanta, Austin, Chicago, Denver,
          Houston, Las Vegas, Los Angeles, Miami, Nashville, Oakland,
          Philadelphia, Phoenix, Pittsburgh, Portland, San Diego, San Francisco,
          San Jose, Santa Monica, Scottsdale, Seattle, West Palm Beach, and more
          coming soon.{" "}
        </p>
      </div>
    </section>
  );
};

export default Network;
