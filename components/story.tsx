import Image from "next/image";
import React from "react";

const home = [
  {
    id: 1,
    title: "Meet Susun",
    subTitle: "An entrepreneur building a wellness empire from Union Station.",
    image: "/susun.avif",
  },
  {
    id: 2,
    title: "Meet Scott and Mario",
    subTitle: "Architects of a well designed life at Etoric Michigan Avenue.",
    image: "/men.avif",
  },
];

const Story = () => {
  return (
    <div className="bg-white py-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl md:text-6xl font-medium tracking-wide text-gray-900">
          Home is when you belong.
        </h1>

        <p className="mt-8 text-lg leading-relaxed text-gray-600">
          Etoric is more than a place—it's a way of life. Meet a few residents who call Etoric home.
        </p>
      </div>

      <div className="mt-20 flex flex-col items-center gap-12">
        <div className="flex flex-col md:flex-row justify-center gap-12 w-full">
          {home.map((item) => (
            <div
              key={item.id}
              className="relative cursor-pointer py-5 w-full md:max-w-[640px]"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={900}
                className="w-full h-96 object-cover transition-transform duration-500 hover:scale-[1.04]"
              />

              <div className="mt-6 text-start">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 font-light text-gray-900">
                  {item.subTitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;
