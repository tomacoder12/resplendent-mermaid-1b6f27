"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { routes } from "@/constants";

const Contact = () => {
    const router = useRouter()
  return (
    <section className="bg-white py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/contact.avif"
              alt="Contact desk"
              width={1200}
              height={900}
              className="w-full h-96 object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 max-w-xl">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
              Partner with Us
            </h2>

            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
              Receive a complimentary analysis of your portfolio and discover
              untapped revenue and NOI potential.
            </p>

            <Button onClick={() => router.push(routes.CONTACT)} className="cursor-pointer mt-8 px-8 py-6 text-base tracking-wide">
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
