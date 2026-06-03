import Image from "next/image";

const home = [
  {
    id: 1,
    title: "Meet Deborah",
    subTitle:
      "An art consultant actively building a creative community in Denver.",
    image: "/deborah.avif",
  },
  {
    id: 2,
    title: "Meet Stefan",
    subTitle:
      "An Atlanta filmmaker freely capturing the melting pot of West Midtown.",
    image: "/stefan.avif",
  },
];

const Experience = () => {
  return (
    <section className="py-8 relative">
      <div className="container bg-[#FFFD60] mx-auto flex flex-col md:flex-row items-center gap-12 px-6 relative z-10 overflow-visible">
        {/* Left: Text */}
        <div className="md:w-1/2 md:px-20 py-10">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Made for the way you live.
          </h2>
          <p className="text-lg md:text-xl mb-4 text-gray-900">
            From cozy courtyards to rooftop pools, premium community amenities
            elevate everyday life.
          </p>
          <p className="text-lg md:text-xl mb-4 text-gray-900">
            Work when, where, and how you want with flexible workspaces in each
            apartment, plus inspiring community coworking areas.
          </p>
          <p className="text-lg md:text-xl text-gray-900">
            Your four-legged friends belong here too. We have pet perks just for
            them, so they’ll be as excited to be here as you are.
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 mt-12 md:mt-0 lg:translate-y-24 py-10">
          <img
            src="/dog.jpg"
            alt="Community living"
            className="w-full h-auto rounded-xl shadow-2xl object-cover relative z-20"
          />
        </div>
      </div>

      <div className="bg-white mt-52 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-6xl font-medium tracking-wide text-gray-900">
            Home is when you belong.
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-gray-600">
            To us, home isn’t a single, fixed place. It’s a feeling—a boundless
            and evolving collection of people, experiences, and cultures. See
            how Mevaco residents live life on their own terms.
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
    </section>
  );
};

export default Experience;
