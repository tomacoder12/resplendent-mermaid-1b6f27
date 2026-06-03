import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl md:text-6xl font-medium tracking-wide text-gray-900">
          Current portfolio mix.
        </h1>

        <p className="mt-8 text-lg leading-relaxed text-gray-600">
          85% of units currently managed by Etoric are unfurnished traditional
          12-month leases. Additionally, utilizing our industry-leading Etoric
          Intelligence™ research and diligence methodology, we identify market
          demand for STR specifically in owner’s target markets and analyze all
          factors to achieve greatest NOI lift.
        </p>

        <div className="">
          <Image
            src={"/chart.avif"}
            alt={"chart"}
            width={1920}
            height={800}
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
