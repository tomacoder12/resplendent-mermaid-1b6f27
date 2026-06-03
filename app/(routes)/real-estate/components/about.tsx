import React from "react";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl md:text-6xl font-medium tracking-wide text-gray-900">
          The best partner for multifamily owners.
        </h1>

        <p className="mt-8 text-lg leading-relaxed text-gray-600">
          Etoric is the leading full-service residential hospitality operator, maximizing NOI lift for Class A owners through superior performance and enhanced experience.
        </p>

        <Separator className="mt-5" />
      </div>
    </section>
  );
};

export default About;