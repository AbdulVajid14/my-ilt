
import React from 'react'
import { Link } from 'react-router-dom'

function HomeWorkshop() {
  return (
<section className="relative text-white py-12 sm:py-16 px-4 min-h-[500px] sm:min-h-[680px] flex items-center overflow-hidden">

  {/* Background Image */}
  <img
    src="/images/warkshop-bg.webp"
    alt="Workshop Banner"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="relative z-10 container mx-auto text-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
      Learn More Through Our Workshops
    </h2>
    <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
      Participate in interactive workshops to gain practical skills and
      hands-on experience guided by industry experts.
    </p>
    <Link to="/workshop">
      <button className="bg-white text-gray-900 font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
        View Upcoming Workshops
      </button>
    </Link>
  </div>
</section>

  )
}

export default HomeWorkshop