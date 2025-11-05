import React from "react";
import ReactCountryFlag from "react-country-flag";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
function StudyAbroad() {
  return (
    // <section className="bg-black text-white py-12 sm:py-16 px-4">
    //   <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
    //     <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
    //       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
    //         Study Digital Marketing Abroad
    //       </h2>
    //       <p className="text-base sm:text-lg mb-6 sm:mb-8">
    //         Explore world-class opportunities to learn digital marketing in
    //         top countries.
    //       </p>
    //       <div className="flex flex-wrap items-center text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8">
    //         {[
    //           { code: "GB", name: "UK" },
    //           { code: "CA", name: "Canada" },
    //           { code: "NZ", name: "New Zealand" },
    //           { code: "AU", name: "Australia" },
    //           { code: "FR", name: "France" },
    //           { code: "DE", name: "Germany" },
    //           { code: "IE", name: "Ireland" },
    //           { code: "NL", name: "Netherlands" },
    //           { code: "ES", name: "Spain" },
    //           { code: "US", name: "USA" },
    //         ].map((country, idx) => (
    //           <span key={idx} className="mx-1 flex items-center">
    //             <ReactCountryFlag
    //               countryCode={country.code}
    //               svg
    //               style={{ width: "1.2em", height: "1.2em" }}
    //             />
    //             <span className="ml-1">{country.name}</span>
    //           </span>
    //         ))}
    //       </div>
    //       <h3 className="text-lg sm:text-xl font-bold mb-4">
    //         Why Choose ILT for Abroad Studies?
    //       </h3>
    //       <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
    //         {[
    //           "Specialized Digital Marketing Programs",
    //           "International Certifications Recognized Globally",
    //           "Job Placement Assistance After Course Completion",
    //           "Exposure to Global Industry Standards",
    //           "Guidance for Visa & Admission Support",
    //         ].map((item, idx) => (
    //           <li key={idx}>
    //             <FaCheckCircle className="inline-block text-green-500 mr-2" />{" "}
    //             {item}
    //           </li>
    //         ))}
    //       </ul>
    //       <Link to="/ilt-abroad">
    //       <button className="mt-6 sm:mt-8 bg-green-600 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg hover:bg-green-700 transition duration-300">
    //         Apply Now
    //       </button>
    //       </Link>
    //     </div>
    //     <div className="w-full md:w-1/2 flex justify-center md:justify-end">
    //       <img
    //         src="/images/WhatsApp Image 2025-09-20 at 10.54.24_04457969.jpg"
    //         alt="Smiling Student Abroad"
    //         className="w-full max-w-xs sm:max-w-sm rounded-full border-4 border-green-500"
    //       />
    //     </div>
    //   </div>
    // </section>
    <section
      className="bg-black text-white py-12 sm:py-16 px-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/Study Abroad Final.png')",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start justify-center text-center md:text-left px-4 md:px-8">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Study MBA & MSC Digital Marketing Abroad
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 font-medium">
            Explore world-class opportunities to learn digital marketing in top
            countries.
          </p>



<div className="bg-white text-black px-6 py-4 shadow-sm rounded-lg">
  <h3 className="text-black text-lg font-semibold mb-3 text-start">
    Countries
  </h3>

  <div className="flex flex-wrap justify-center md:justify-start items-center text-base sm:text-lg">
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
    ].map((country, idx, arr) => (
      <span key={idx} className="mx-2 flex items-center mb-2">
        <ReactCountryFlag
          countryCode={country.code}
          svg
          style={{ width: "1.4em", height: "1.4em" }}
        />
        <span className="ml-1 font-medium">{country.name}</span>

        {idx !== arr.length - 1 && (
          <span className="mx-2 text-gray-400">|</span>
        )}
      </span>
    ))}
  </div>
</div>

          <h3 className="text-lg sm:text-2xl font-bold mb-4">
            Why Choose ILT for Abroad Studies?
          </h3>
          <ul className="space-y-2 text-white text-base sm:text-xl font-medium">
            {[
              "Specialized Digital Marketing Programs",
              "Global MBA & MSC Digital Marketing Opportunities",
              "International Certifications Recognized Globally",
              "Job Placement Assistance After Course Completion",
              "Exposure to Global Industry Standards",
              "Guidance for Visa & Admission Support",
            ].map((item, idx) => (
              <li key={idx}>
                <FaCheckCircle className="inline-block text-green-500 mr-2" />
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
