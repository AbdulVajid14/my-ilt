import React from 'react'
import ReactCountryFlag from "react-country-flag";
import {
  FaCheckCircle,
} from "react-icons/fa";

function StudyAbroad() {
  return (
      <section className="bg-black text-white py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Study Digital Marketing Abroad
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8">
              Explore world-class opportunities to learn digital marketing in
              top countries.
            </p>
            <div className="flex flex-wrap items-center text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8">
              {[
                { code: "GB", name: "UK" },
                { code: "CA", name: "Canada" },
                { code: "NZ", name: "New Zealand" },
                { code: "AU", name: "Australia" },
                { code: "FR", name: "France" },
                { code: "DE", name: "Germany" },
                { code: "IE", name: "Ireland" },
                { code: "NL", name: "Netherlands" },
                { code: "ES", name: "Spain" },
                { code: "US", name: "USA" },
              ].map((country, idx) => (
                <span key={idx} className="mx-1 flex items-center">
                  <ReactCountryFlag
                    countryCode={country.code}
                    svg
                    style={{ width: "1.2em", height: "1.2em" }}
                  />
                  <span className="ml-1">{country.name}</span>
                </span>
              ))}
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              Why Choose ILT for Abroad Studies?
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              {[
                "Specialized Digital Marketing Programs",
                "International Certifications Recognized Globally",
                "Job Placement Assistance After Course Completion",
                "Exposure to Global Industry Standards",
                "Guidance for Visa & Admission Support",
              ].map((item, idx) => (
                <li key={idx}>
                  <FaCheckCircle className="inline-block text-green-500 mr-2" />{" "}
                  {item}
                </li>
              ))}
            </ul>
            <button className="mt-6 sm:mt-8 bg-green-600 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg hover:bg-green-700 transition duration-300">
              Apply Now
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/images/WhatsApp Image 2025-09-20 at 10.54.24_04457969.jpg"
              alt="Smiling Student Abroad"
              className="w-full max-w-xs sm:max-w-sm rounded-full border-4 border-green-500"
            />
          </div>
        </div>
      </section>
  )
}

export default StudyAbroad