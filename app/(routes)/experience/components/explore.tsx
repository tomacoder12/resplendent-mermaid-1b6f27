import { routes } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const home = [
  {
    id: 1,
    title: "Move in.",
    subTitle:
      "Lease a spacious unfurnished residence or turnkey designer-furnished apartment. Resort-style pool. Premium gym. WFH upgrades. Curated events. Etoric gives you the comforts of home amplified.",
    link: routes.CONTACT,
    linkText: "CONTACT US",
    image: "/move.avif",
  },
  {
    id: 2,
    title: "Check in.",
    subTitle:
      "Stay a night or however long you like. Pet-friendly apartment suites with fully stocked kitchens, fast WiFi, and cushy community spaces in a walkable neighborhood—this is home base in a new place.",
    link: routes.CONTACT,
    linkText: "CONTACT US",
    image: "/check.avif",
  },
];

const Explore = () => {
  return (
    <div className="bg-white py-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl md:text-6xl font-medium tracking-wide text-gray-900">
          Go anywhere, be at home.
        </h1>

        <p className="mt-8 text-lg leading-relaxed text-gray-600">
          Etoric is your forever home or homebase in the world's best cities.
          Spacious apartments welcome you in. Seamless service keeps life easy.
          And shared spaces filled with friendly community members let you know
          that you belong here.
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

              <div className="mt-6 text-start space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 font-light text-gray-900">{item.subTitle}</p>
                <Link href={item.link} className="text-sm underline font-medium">{item.linkText}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
