import React from 'react'

function Certificate() {
  return (
      <section className="bg-white py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
          {[
            "/images/WhatsApp Image 2025-09-20 at 10.54.35_aa661123.jpg",
            "/images/WhatsApp Image 2025-09-20 at 10.54.36_c7e0c520.jpg",
            "/images/WhatsApp Image 2025-09-20 at 10.54.35_aa661123.jpg",
            "/images/WhatsApp Image 2025-09-20 at 10.54.36_c7e0c520.jpg",
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