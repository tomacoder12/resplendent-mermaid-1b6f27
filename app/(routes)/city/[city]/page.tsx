import { cities, City } from "@/constants/data";
import CityComponent from "@/components/app/city";
import Footer from "@/components/footer";

interface PageProps {
  params: { city: string };
}

const CityPage = async ({ params }: PageProps) => {
  const { city: citySlug } = await params;
  const city: City | undefined = cities.find((c) => c.id === citySlug);

  if (!city) {
    return (
      <div className="text-center text-red-600 mt-10">City not found.</div>
    );
  }

  return (
    <>
      <CityComponent city={city} />
      <Footer />
    </>
  );
};

export default CityPage;
