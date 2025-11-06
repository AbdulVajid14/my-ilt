import React from "react";
import ReactCountryFlag from "react-country-flag";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
function StudyAbroad() {
  return (
  
<section
  className="bg-black text-white py-12 sm:py-16 px-4 bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/Study Abroad Final.png')",
  }}
>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-14 px-4 md:px-8">

    {/* TEXT CONTENT */}
    <div className="w-full md:w-3/5 text-center md:text-left">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4">
        Study MBA & MSC Digital Marketing Abroad
      </h2>

      <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 font-medium">
        Explore world-class opportunities to learn digital marketing in top countries.
      </p>

      {/* COUNTRY LIST */}
      <div className="bg-white text-black px-6 py-4 shadow-md rounded-lg mb-8">
        <h3 className="text-lg font-semibold mb-3 text-center md:text-left">
          Countries
        </h3>

        <div className="flex flex-wrap justify-center md:justify-start items-center text-sm sm:text-base gap-3">
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
            <span key={idx} className="flex items-center">
              <ReactCountryFlag
                countryCode={country.code}
                svg
                style={{ width: "1.3em", height: "1.3em" }}
              />
              <span className="ml-1 font-medium">{country.name}</span>
              {idx !== 9 && <span className="mx-2 text-gray-400">|</span>}
            </span>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE */}
      <h3 className="text-lg sm:text-2xl font-bold mb-4">
        Why Choose ILT for Abroad Studies?
      </h3>

    <ul className="space-y-2 text-white text-sm sm:text-lg font-medium text-left">
    {[
      "Specialized Digital Marketing Programs",
      "Global MBA & MSC Digital Marketing Opportunities",
      "International Certifications Recognized Globally",
      "Job Placement Assistance After Course Completion",
      "Exposure to Global Industry Standards",
      "Guidance for Visa & Admission Support",
    ].map((item, idx) => (
      <li key={idx} className="flex items-start">
        <FaCheckCircle className="text-green-500 mr-2 mt-1" />
        {item}
      </li>
    ))}
  </ul>

      <Link to="/ilt-abroad">
        <button className="mt-6 sm:mt-8 bg-green-600 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg hover:bg-green-700 transition duration-300">
          Apply Now
        </button>
      </Link>
    </div>
  </div>
</section>

  );
}

export default StudyAbroad;
