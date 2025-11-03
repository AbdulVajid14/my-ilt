import React from "react";

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
                <span className="font-bold text-green-600">ILT offers</span> an
                exclusive job portal designed for our students whether you study
                online or offline. This platform connects learners directly with
                hiring companies, ensuring a smoother transition from training
                to career.
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
          <img src="/images/Group 40.png" alt="app" className="mb-4 h-40" />

          <div className="flex justify-start gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.mindlabs.ilt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/WhatsApp Image 2025-09-20 at 10.54.36_6c0650ca.jpg"
                alt="second"
                className="object-contain hover:opacity-90 transition"
              />
            </a>

            <a
              href="https://apps.apple.com/in/app/internet-leads-training-ilt/id1548244062"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/WhatsApp Image 2025-09-20 at 10.54.36_d69e2bc6.jpg"
                alt="third"
                className="object-contain hover:opacity-90 transition"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppSection;
