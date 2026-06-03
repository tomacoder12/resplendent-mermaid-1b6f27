import { City } from "@/constants/data";
import PropertyCard from "../property-card";

const CityComponent = ({ city }: { city: City }) => {
  return (
    <>
      <div className="px-4 py-8 max-w-7xl mx-auto">
        {/* City Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2">
            {city.name}, {city.state}
          </h1>
          <img
            src={city.heroImage}
            alt={city.name}
            className="rounded-lg shadow-lg max-h-80 object-cover w-full"
          />
        </div>

        {/* Properties */}
        <h2 className="text-2xl font-semibold mb-6">Available Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {city.properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CityComponent;
