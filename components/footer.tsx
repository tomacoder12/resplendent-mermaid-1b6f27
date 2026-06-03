"use client";
import Link from "next/link";
import L from "next/link";
import { routes } from "@/constants";
import toast from "react-hot-toast";
import { useState } from "react";

const links = [
  { id: 1, link: "experience", href: routes.EXPERIENCE },
  { id: 2, link: "real-estate", href: routes.REAL_ESTATE },
];

const Footer = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    // Example: send email to your backend or API
    toast.success("email have been subscribed to newsletter!")

    // Clear the input after submission
    setEmail("");
  };

  return (
    <section className="bg-[#282828] px-2 py-2">
      <div className="px-3 md:px-10 mx-auto container flex flex-col md:flex-row items-start border-b py-10 border-[#C6C6C6] w-full space-y-5 md:space-y-0">
        <div className="w-full max-w-md mt-4">
          <h1 className="text-5xl text-white font-medium">Stay Connected.</h1>
          <form onSubmit={handleSubmit}>
            <input
            type="email"
            value={email}
            placeholder="Sign up for news and offers"
            onChange={(e) => setEmail(e.target.value)}
            className="
              mt-4
              w-96
              bg-transparent
              border-b
              border-white/70
              placeholder-white/70
              text-white
              py-2
              focus:outline-none
              focus:border-white
              transition
            "
          />
          </form>
        </div>

           <div className="px-3 md:px-10 flex items-start py-10 w-full mx-auto container">
        <div className="w-full">
          <ul className="text-white font-medium w-[87px] gap-2.5 flex flex-col">
            {links.map((link) => (
              <li
                key={link.id}
                className="capitalize cursor-pointer transition"
              >
                <Link href={`/${link.link}`}>
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="w-full">
          <ul className="text-white font-medium gap-2.5 flex flex-col">
            <L
              href={`//doc/policy`}
              className="cursor-pointer"
            >
              {"Privacy"}
            </L>
            <L
              href={`//doc/terms`}
              className="hover:text-[#239A5A] cursor-pointer"
            >
              {"Terms"}
            </L>
          </ul>
        </div> */}
      </div>
      </div>

      <h1 className="font-['Inter_Tight'] text-center text-white capitalize font-semibold text-[32px] md:text-[100px] tracking-[-0.02em] align-middle">
        Etoric Luxury Apartments
      </h1>
    </section>
  );
};

export default Footer;
