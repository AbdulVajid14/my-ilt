import React from "react";

function AppSection() {
  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-stretch px-10">
        <div className="w-full lg:w-[30%]flex flex-col pr-0 lg:pr-8 pb-8 lg:pb-0">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
            <div className="flex-shrink-0">
              <img
                src="/images/WhatsApp Image 2025-09-20 at 10.54.01_f6b5cbe5.jpg"
                alt="Laptop showing job portal"
                loading="lazy"
                className="w-48 h-48 sm:w-64 sm:h-64 rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-4">
                Exclusive Job Portal for Digital Marketers
              </h2>
              <p className="text-sm sm:text-lg text-black font-medium">
                Internet Leads Training (ILT), Kerala's #1 Digital Marketing
                Institute, provides expert training along with dedicated
                placement support. Our exclusive job platform{" "}
                <span className="font-bold text-green-900">iltjobs.com</span>
                connects skilled digital marketers with top companies across
                India and overseas.
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4 text-black">
              Key Highlights:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-lg">
              {[
                "1000+ verified digital marketing jobs, updated regularly.",
                "Trusted by top employers seeking skilled digital marketers.",
                "Filter jobs by country, company, and role.",
                "Exclusive for ILT students and alumni.",
                "Backed by 20+ years of ILT expertise.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-green-900 text-lg sm:text-lg mr-2 mt-1 flex-shrink-0">
                    ✓
                  </span>
                  <p className="text-black">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:block border-l border-gray-300 mx-4"></div>
        <div className="w-full lg:w-[70%] flex flex-col pt-4 lg:pt-0">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-4">
            India's First Digital Marketing Learning App
          </h2>
          <img
            src="/images/App Design Final.png"
            alt="app"
            className="mb-4"
          />

          <div className="flex items-center justify-start gap-4">
            <p className="text-xl font-semibold">Download Now</p>

            <a
              href="https://play.google.com/store/apps/details?id=com.mindlabs.ilt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/WhatsApp Image 2025-09-20 at 10.54.36_6c0650ca.jpg"
                alt="second"
                className="h-15 object-contain hover:opacity-90 transition"
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
                loading="lazy"
                className="h-15 object-contain hover:opacity-90 transition"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppSection;
