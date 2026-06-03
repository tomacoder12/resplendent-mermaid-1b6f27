"use client"
import { City } from "@/constants/data";
import { useState } from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";

interface PropertyCardProps {
  property: City["properties"][number];
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);
    const [expanded, setExpanded] = useState(false);

  const limit = 180; // characters to show when collapsed
  const isLong = property.description.length > limit;

  const displayedText = expanded
    ? property.description
    : property.description.slice(0, limit) + (isLong ? "..." : "");

  const prevImage = () =>
    setCurrentImage(
      currentImage === 0 ? property.images.length - 1 : currentImage - 1
    );
  const nextImage = () =>
    setCurrentImage(
      currentImage === property.images.length - 1 ? 0 : currentImage + 1
    );

  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
      {/* Image Carousel */}
      <div className="relative w-full h-48 mb-4">
        <Image
          src={property.images[currentImage]}
          alt={property.slug}
          className="w-full h-48 object-cover rounded-md"
          fill
        />
        {/* Prev/Next Buttons */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 p-1 rounded-full hover:bg-white"
        >
          ‹
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 p-1 rounded-full hover:bg-white"
        >
          ›
        </button>
      </div>

      <p className="font-semibold mb-2">
        ${property.pricePerMonth.toLocaleString()}/month
      </p>
      <p className="text-gray-600 mb-1">{property.address}</p>
      <p className="text-gray-700 mb-2">
        {property.bedrooms} bd • {property.bathrooms} ba • {property.sqft} sqft
      </p>
      <Separator />
      <p className="text-gray-700 mb-2 py-2">
        <span className="font-bold">Amenities</span>: {property.amenities.join(", ")}
      </p>
      <Separator />
      <p className="text-gray-600 mb-4 italic text-md py-2">{displayedText}</p>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 cursor-pointer font-medium mt-1 hover:underline"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
      <div className="text-sm text-gray-500">
        Contact: <br />
        <a href={`mailto:${property.contactEmail}`} className="text-[#186F60] font-bold underline">
          {property.contactEmail}
        </a>{" "}
        <br />
        {property.contactPhone}
      </div>
    </div>
  );
};

export default PropertyCard