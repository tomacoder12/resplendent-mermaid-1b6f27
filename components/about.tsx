import React from "react";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl md:text-6xl font-medium tracking-wide text-gray-900">
          Etoric takes the convenience, connection, and comfort of home
          to new heights — we call it <span className="font-medium">Home+</span>
        </h1>

        <p className="mt-8 text-lg leading-relaxed text-gray-600">
          Luxury apartments welcome you home. Seamless service simplifies
          life. And shared spaces filled with friendly neighbors let you
          know that you belong here.
        </p>

        <Separator className="mt-5" />
      </div>
    </section>
  );
};

export default About;
