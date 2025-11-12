import React from "react";
import ReactCountryFlag from "react-country-flag";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
function StudyAbroad() {
  return (
    // <section
    //   className="bg-black text-white py-12 sm:py-16 px-4 bg-cover bg-center"
    //   style={{
    //     backgroundImage: "url('/images/Study Abroad.png')",
    //   }}
    // >
    //   <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-14 px-4 md:px-8">
    //     {/* TEXT CONTENT */}
    //     <div className="w-full md:w-3/5 text-center md:text-left">
    //       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4">
    //         Study MBA/MSc in Digital Marketing & Data Analytics Abroad
    //       </h2>

    //       <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 font-medium">
    //         Dreaming of building a global digital marketing career? <br />
    //         At Internet Leads Training (ILT), we specialize in Digital Marketing
    //         and Data Analytics admissions to top universities in the UK, Canada,
    //         Australia, Singapore, Ireland, Germany, New Zealand, and the USA.
    //       </p>
    //       <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 font-medium">
    //         Digital Marketing is a global language, and the demand for skilled
    //         professionals is growing rapidly across the world.
    //       </p>

    //       {/* WHY CHOOSE */}
    //       <h3 className="text-lg sm:text-2xl font-bold mb-4">
    //         Our Expert Services:
    //       </h3>

    //       <ul className="space-y-2 text-white text-sm sm:text-lg font-medium text-left">
    //         {[
    //           "University & Course Selection (Digital Marketing / Data Analytics only)",
    //           "Assistance in finding part-time digital marketing jobs abroad",
    //           "Complete support for Visa, SOP, and documentation",
    //           "Guidance from industry experts with 20+ years of experience",
    //         ].map((item, idx) => (
    //           <li key={idx} className="flex items-start">
    //             <FaCheckCircle className="text-green-500 mr-2 mt-1" />
    //             {item}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //     <div className="flex justify-center md:justify-center -mt-2">
    //     <Link to="/ilt-abroad">
    //       <button className="mt-4 sm:mt-6 bg-green-600 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg hover:bg-green-700 transition duration-300">
    //         Apply Now
    //       </button>
    //     </Link>
    //   </div>
    //   </div>
    // </section>
    <section
  className="bg-black text-white py-12 sm:py-16 px-4 bg-cover bg-center relative"
  style={{
    backgroundImage: "url('/images/Study Abroad.png')",
  }}
>
  <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-14 px-4 md:px-8">
    {/* TEXT CONTENT */}
    <div className="w-full md:w-3/5 text-center md:text-left">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4">
        Study MBA/MSc in Digital Marketing & Data Analytics Abroad
      </h2>

      <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 font-medium">
        Dreaming of building a global digital marketing career? <br />
        At Internet Leads Training (ILT), we specialize in Digital Marketing
        and Data Analytics admissions to top universities in the UK, Canada,
        Australia, Singapore, Ireland, Germany, New Zealand, and the USA.
      </p>

      <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 font-medium">
        Digital Marketing is a global language, and the demand for skilled
        professionals is growing rapidly across the world.
      </p>

      {/* WHY CHOOSE */}
      <h3 className="text-lg sm:text-2xl font-bold mb-4">
        Our Expert Services:
      </h3>

      <ul className="space-y-2 text-white text-sm sm:text-lg font-medium text-left">
        {[
          "University & Course Selection (Digital Marketing / Data Analytics only)",
          "Assistance in finding part-time digital marketing jobs abroad",
          "Complete support for Visa, SOP, and documentation",
          "Guidance from industry experts with 20+ years of experience",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start">
            <FaCheckCircle className="text-green-500 mr-2 mt-1" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* CENTERED BUTTON */}
  <div className="flex justify-center -mt-20">
    <Link to="/ilt-abroad">
      <button className="bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300">
        Apply Now
      </button>
    </Link>
  </div>
</section>

  );
}

export default StudyAbroad;
