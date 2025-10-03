import React from 'react'

function AppSection() {
  return (
       <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch">
          <div className="w-full lg:w-3/5 flex flex-col pr-0 lg:pr-8 pb-8 lg:pb-0">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
              <div className="flex-shrink-0">
                <img
                  src="/images/WhatsApp Image 2025-09-20 at 10.54.01_f6b5cbe5.jpg"
                  alt="Laptop showing job portal"
                  className="w-48 h-48 sm:w-64 sm:h-64 rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Exclusive Job Site for ILT Students
                </h2>
                <p className="text-sm sm:text-base text-gray-700">
                  <span className="font-bold text-green-600">ILT offers</span>{" "}
                  an exclusive job portal designed for our students whether you
                  study online or offline. This platform connects learners
                  directly with hiring companies, ensuring a smoother transition
                  from training to career.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-4 text-gray-900">
                Key Highlights:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                {[
                  "Dedicated job site only for ILT students",
                  "Verified job postings from partner companies",
                  "Placement support with resume & interview prep",
                  "Access for both online & offline learners",
                  "Real success stories from ILT graduates",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-green-600 text-base sm:text-lg mr-2 mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden lg:block border-l border-gray-300 mx-4"></div>
          <div className="w-full lg:w-2/5 flex flex-col pt-4 lg:pt-0">
            <div className="flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-green-600 to-black rounded-lg p-4 sm:p-6 text-white shadow-lg">
              <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                <h2 className="text-xs sm:text-sm font-bold mb-2">
                  Learn Anytime, Anywhere with the ILT App
                </h2>
                <p className="text-xs sm:text-sm md:text-base">
                  Take ILT anywhere! Our mobile app lets you access courses,
                  assignments, and resources anytime online or offline for a
                  seamless learning experience on the go.
                </p>
              </div>
              <div className="w-full sm:w-1/2 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="relative">
                  <img
                    src="/images/Screen Content.png"
                    alt="ILT App on mobile phone"
                    className="w-24 sm:w-32 md:w-40 rotate-3"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  {[
                    {
                      src: "/images/WhatsApp Image 2025-09-20 at 10.54.36_6c0650ca.jpg",
                      alt: "Google Play Store",
                      text1: "GET IT ON",
                      text2: "Google Play",
                    },
                    {
                      src: "/images/WhatsApp Image 2025-09-20 at 10.54.36_d69e2bc6.jpg",
                      alt: "Apple App Store",
                      text1: "Download on the",
                      text2: "App Store",
                    },
                  ].map((app, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="bg-black text-white py-2 px-4 rounded-lg flex items-center space-x-2 text-xs"
                    >
                      <img
                        src={app.src}
                        alt={app.alt}
                        className="w-8 h-5 sm:w-10 sm:h-6"
                      />
                      <div>
                        <p className="text-[9px] text-gray-400">{app.text1}</p>
                        <p className="font-semibold text-xs">{app.text2}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <button className="w-32 sm:w-40 mt-4 bg-black text-white py-2 px-4 rounded-lg font-semibold text-xs sm:text-sm">
              Download
            </button>
          </div>
        </div>
      </section>
  )
}

export default AppSection