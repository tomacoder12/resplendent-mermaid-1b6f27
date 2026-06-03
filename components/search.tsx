"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cities } from "@/constants/data";

export default function LocationSearch() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<(typeof cities)[0] | null>(null);
  const [previewCity, setPreviewCity] = useState<(typeof cities)[0] | null>(null);

  return (
    <div className="relative w-full max-w-4xl mx-auto z-[50]">
      {/* Search Bar */}
      <div className="flex">
        <Input
          value={selectedCity ? selectedCity.name : ""}
          placeholder="Choose your location"
          readOnly
          onClick={() => setOpen(!open)}
          className="h-14 rounded-l-xl rounded-r-none bg-white border-none text-lg cursor-pointer"
        />

        <Button
          onClick={() => setOpen(!open)}
          className="h-14 bg-[#FFFD60] text-black rounded-r-xl rounded-l-none hover:bg-[#FFFD60]"
        >
          <Search size={20} />
          <span className="hidden md:block ml-2 font-semibold tracking-wide">
            SEARCH
          </span>
        </Button>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-full max-w-4xl h-100 bg-white rounded-xl shadow-2xl flex z-[9999]">
          
          {/* Left — City List */}
          <div className="w-1/2 overflow-y-auto p-6 space-y-4 border-r">
            {cities.map((city) => (
              <div
                key={city.id}
                onMouseEnter={() => setPreviewCity(city)}
                onClick={() => {
                  setSelectedCity(city);
                  setOpen(false);
                  router.push(`/city/${city.id}`);
                }}
                className="text-lg font-medium text-gray-800 hover:text-black cursor-pointer transition"
              >
                {city.name.toUpperCase()}
              </div>
            ))}
          </div>

          {/* Right — Image Preview */}
          <div className="w-1/2 p-4">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100">
              {previewCity ? (
                <img
                  key={previewCity.heroImage}
                  src={previewCity.heroImage}
                  alt={previewCity.name}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-300"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 text-lg">
                  Hover a city to preview
                </div>
              )}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
