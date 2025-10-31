import React from 'react'

function Certificate() {
  return (
      <section className="bg-white py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
          {[
            "/images/Google Ads.png",
            "/images/Google Analytics.png",
            "/images/Google Ads.png",
            "/images/Google Analytics.png",
          ].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="Certification"
              className="h-16 sm:h-20 object-contain"
            />
          ))}
        </div>
      </section>
  )
}

export default Certificate