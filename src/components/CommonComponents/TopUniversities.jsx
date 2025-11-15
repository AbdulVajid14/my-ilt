import React from "react";

const universities = [
  {
    logo: "/images/u1.jpg",
    name: "Glasgow Caledonian University",
    location: "Glasgow, Scotland, UK",
    program: "MSc in Marketing",
    duration: "1 or 2 Years",
    intakes: "September | January",
  },
  {
    logo: "/images/u2.jpg",
    name: "University of Essex",
    location: "Essex, England, UK",
    program: "MSc in Marketing",
    duration: "1 or 2 Years",
    intakes: "September | January",
  },
  {
    logo: "/images/u3.jpg",
    name: "BOW VALLEY COLLEGE",
    location: "CALGARY, ALBERTA, CANADA",
    program: "MSc In Digital Marketing Analytics",
    duration: "4 Terms",
    intakes: "SEPTEMBER | JANUARY",
  },
  {
    logo: "/images/u4.jpg",
    name: "ALGONQUIN COLLEGE",
    location: "OTTAWA, CANADA",
    program: "MSc In Digital Marketing",
    duration: "4 Year",
    intakes: "JAN, MAY, SEP",
  },
  {
    logo: "/images/u5.jpg",
    name: "UNIVERSITY OF AUCKLAND",
    location: "AUCKLAND, NEW ZEALAND",
    program: "MSc in Marketing",
    duration: "PART-TIME: VARIES",
    intakes: "APRIL, SEPTEMBER",
  },
  {
    logo: "/images/u6.jpg",
    name: "UNIVERSITY OF WAIKATO",
    location: "HAMILTON, NEW ZEALAND",
    program: "MSc In Digital Marketing",
    duration: "4 Years",
    intakes: "MARCH, JULY",
  },
  {
    logo: "/images/u7.jpg",
    name: "CURTAIN UNIVERSITY",
    location: "BENTLEY, AUSTRALIA",
    program: "MSc In Digital And Social Media",
    duration: "1.5 YEAR",
    intakes: "September",
  },
  {
    logo: "/images/u8.jpg",
    name: "MELBOURNE INSTITUTE OF TECHNOLOGY",
    location: "MELBOURNE, AUSTRALIA",
    program: "MSc In Buisiness Digital",
    duration: "3 Years",
    intakes: "MARCH, JULY, NOVEMBER",
  },
  {
    logo: "/images/u9.jpg",
    name: "ESC CLERMONT BUSINESS SCHOOL",
    location: "CLERMONT-FERRAND, FRANCE",
    program: "MSc In Digital Marketing",
    duration: "1 Year",
    intakes: "MARCH",
  },
  {
    logo: "/images/u10.jpg",
    name: "EMLYON BUSINESS SCHOOL",
    location: "LYON, FRANCE",
    program: "MSc In Digital Marketing & Data Science",
    duration: "2 Years",
    intakes: "AUGUST",
  },
  {
    logo: "/images/u11.jpg",
    name: "BERLIN SCHOOL OF BUSINESS AND INNOVATION",
    location: "BERLIN, GERMANY",
    program: "MSc In Digital Marketing",
    duration: "18 Months",
    intakes: "OCTOBER, FEBRUARY",
  },
  {
    logo: "/images/u12.jpg",
    name: "GISMA BUSINESS SCHOOL",
    location: "HANNOVER, GERMANY",
    program: "MSc in Digital Marketing",
    duration: "1 Year",
    intakes: "FEBRUARY, MAY, OCTOBER",
  },
  {
    logo: "/images/u13.jpg",
    name: "TRINITY COLLEGE DUBLIN",
    location: "DUBLIN, IRELAND",
    program: "MSc In Digital Marketing",
    duration: "4 Terms",
    intakes: "September",
  },
  {
    logo: "/images/u14.jpg",
    name: "TECHNOLOGICAL UNIVERSITY DUBLIN",
    location: "DUBLIN, IRELAND",
    program: "MSc In Digital Marketing",
    duration: "4 Year",
    intakes: "September",
  },
  {
    logo: "/images/u15.jpg",
    name: "AMSTERDAM BUSINESS SCHOOL",
    location: "AMSTERDAM, NETHERLANDS",
    program: "MSc in Business Administration",
    duration: "1 Year",
    intakes: "FEBRUARY, SEPTEMBER",
  },
  {
    logo: "/images/u16.jpg",
    name: "WITTENBORG UNIVERSITY OF APPLIED SCIENCES",
    location: "APELDOORN, NETHERLANDS",
    program: "MSc In MBM",
    duration: "1.5 Years",
    intakes: "OCTOBER, NOVEMBER, MARCH",
  },
  {
    logo: "/images/u17.jpg",
    name: "GLOBAL BUSINESS SCHOOL",
    location: "BARCELONA, SPAIN",
    program: "MSc In Digital Marketing",
    duration: "3 Years",
    intakes: "OCT | JAN | APR",
  },
  {
    logo: "/images/u18.jpg",
    name: "EUROPEAN SCHOOL OF ECONOMICS",
    location: "MADRID, SPAIN",
    program: "MSc In Marketing",
    duration: "6 MONTHS",
    intakes: "OCTOBER",
  },
  {
    logo: "/images/u19.jpg",
    name: "NEW YORK UNIVERSITY",
    location: "NEW YORK, USA",
    program: "MSc In Digital Marketing",
    duration: "2 Years",
    intakes: "MARCH",
  },
  {
    logo: "/images/u20.jpg",
    name: "PACE UNIVERSITY",
    location: "NEW YORK, UNITED STATES",
    program: "MSc In Digital Marketing",
    duration: "1 Years",
    intakes: "MARCH",
  },
];

const TopUniversities = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Top Universities</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {universities.map((uni, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-lg bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Logo */}
            <div className="w-full h-52 flex items-center justify-center border-b">
              <img
                src={uni.logo}
                alt={uni.name}
                className="object-contain h-full w-full"
              />
            </div>

            {/* Details */}
            <div className="p-6 text-sm text-gray-700 leading-6">
              <h3 className="font-semibold text-lg mb-1">{uni.name}</h3>

              <p>
                <span className="font-medium">Location:</span> {uni.location}
              </p>
              <p>
                <span className="font-medium">Program:</span> {uni.program}
              </p>
              <p>
                <span className="font-medium">Duration:</span> {uni.duration}
              </p>
              <p>
                <span className="font-medium">Next Intakes:</span> {uni.intakes}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopUniversities;
