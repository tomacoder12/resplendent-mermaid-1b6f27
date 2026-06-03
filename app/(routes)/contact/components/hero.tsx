const Hero = () => {
  return (
    <div>
      <div
        className="w-full h-[70vh] bg-cover bg-center bg-no-repeat mx-auto container"
        style={{ backgroundImage: `url("/contact_hero.avif")` }}
      />
      <div className="mx-auto py-10 text-center">
        <p className="md:text-2xl">
          To learn more about how Mevaco is improving the bottom line for multifamily owners and its general business practices, <br /> email: {" "}
          <a
            href={`mailto:info@etoric.llc`}
            className="underline text-[#186F60] font-bold"
          >
            info@etoric.llc
          </a>
          <br />
        </p>
        {/* <p className="text-md mt-10"><strong>Address</strong>: 161 Vernon Avenue Brooklyn, N.Y. 11206</p> */}
      </div>
    </div>
  );
};

export default Hero;

