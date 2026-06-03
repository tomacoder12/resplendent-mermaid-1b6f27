import React from 'react'

const Hospitality = () => {
  return (
    <section className="py-8 relative">
      <div className="container h-[500px] bg-[#FFFD60] mx-auto flex flex-col md:flex-row items-center gap-12 px-6 relative z-10 overflow-visible">
        {/* Left: Text */}
        <div className="md:w-1/2 md:px-20 py-10">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Innovative hospitality services.
          </h2>
          <p className="text-lg md:text-xl mb-4 text-gray-900">
            Monetize amenity spaces and create exclusive, profitable programs for residents and guests.
          </p>
          <p className="text-lg md:text-xl mb-4 text-gray-900">
            Public, private (residents and guests only) or third-party operated on-site offerings.
          </p>
          <p className="text-lg md:text-xl text-gray-900">
            Unique curated experiences that promote adventure, engagement and discovery for residents and guests. 
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hospitality
