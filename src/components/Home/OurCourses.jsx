
import React from "react";
import { Link } from "react-router-dom";

function OurCourses() {
  const coursesLeft = [
    {
      title: "SEO Mastery",
      image: "/images/WhatsApp Image 2025-09-20 at 10.54.00_00084e9c.jpg",
      desc: "Learn how to rank websites higher on Google with keyword strategy, on-page & off-page SEO, and analytics.",
      modules: 5,
      duration: "5 Months",
    },
    {
      title: "Social Media Marketing",
      image: "/images/WhatsApp Image 2025-09-20 at 10.54.00_f2a20352.jpg",
      desc: "Master platforms like Instagram, Facebook, and LinkedIn to create engaging campaigns and grow audiences.",
      modules: 6,
      duration: "5 Months",
    },
  ];

  const coursesRight = [
    {
      title: "Python",
      image: "/images/WhatsApp Image 2025-09-20 at 10.54.12_5782f322.jpg",
      desc: "Learn Python programming from basics to advanced and build real-world applications.",
      modules: 9,
      duration: "5 Months",
    },
    {
      title: "Cyber Security",
      image: "/images/WhatsApp Image 2025-09-20 at 10.53.47_93e86468.jpg",
      desc: "Understand the essentials of ethical hacking, threat analysis, and strategies to protect digital assets.",
      modules: 9,
      duration: "5 Months",
    },
    {
      title: "Data Analytics",
      image: "/images/WhatsApp Image 2025-09-20 at 10.53.48_e1ab91bd.jpg",
      desc: "Gain data-driven insights with tools and techniques.",
      modules: 17,
      duration: "6 Months",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between">
        <div className="w-full lg:w-2/3 lg:pr-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
            Become a Digital Marketing Pro
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">
            From fundamentals to advanced strategies, learn how to grow brands
            online.
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {coursesLeft.map((course, idx) => {
              const slug = course.title.toLowerCase().replace(/\s+/g, "-");
              return (
                <div
                  key={idx}
                  className="relative rounded-lg overflow-hidden shadow-lg"
                >
                  {/* Background Image */}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-90 sm:h-110 object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-50 bg-gradient-to-t from-black/100 to-transparent rounded-b-lg"></div>
                  <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end text-white z-10">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                      {course.title}
                    </h4>
                    <p className="text-xs sm:text-sm">{course.desc}</p>

                    <div className="flex items-center justify-between mt-4">
                      <Link to={`/courses/${slug}`}>
                        <button className="bg-green-600 hover:bg-green-700 text-white py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg text-xs sm:text-sm transition-all duration-300 hover:shadow-md hover:scale-105">
                          Learn More
                        </button>
                      </Link>

                      <div className="flex items-center space-x-2 text-xs sm:text-sm">
                        <span>{course.modules} Modules</span>
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden lg:block border-l border-gray-300 mx-4"></div>

        <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:pl-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">
            Start with Digital Marketing, <br />
            Grow with Python, Cybersecurity & Data Analytics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {coursesRight.map((course, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg shadow-md"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-32 sm:h-40 rounded-lg mb-4 object-cover"
                />
                <h4 className="font-bold text-base sm:text-lg mb-1">
                  {course.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">
                  {course.desc}
                </p>
                <div className="flex items-center justify-between w-full text-xs text-gray-500 mb-2">
                  <span>{course.modules} Modules</span>
                  <span>{course.duration}</span>
                </div>
                <button className="text-green-600 font-semibold text-xs sm:text-sm border border-green-600 rounded px-3 py-1">
                  Learn More
                </button>
              </div>
            ))}
            <div className="flex justify-center items-center">
              <button className="flex items-center text-green-600 font-semibold text-sm sm:text-lg hover:underline">
                View Courses &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurCourses;
// import React from "react";

// function OurCourses() {
//   return (
//     <section className="bg-white py-12 sm:py-16 px-4">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between">
//         <div className="w-full lg:w-2/3 lg:pr-8">
//           <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
//             Become a Digital Marketing Pro
//           </h2>
//           <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">
//             From fundamentals to advanced strategies, learn how to grow brands
//             online.
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
//             {[
//               {
//                 title: "SEO Mastery",
//                 image:
//                   "/images/WhatsApp Image 2025-09-20 at 10.54.00_00084e9c.jpg",
//                 desc: "Learn how to rank websites higher on Google with keyword strategy, on-page & off-page SEO, and analytics.",
//                 modules: 5,
//                 duration: "5 Months",
//               },
//               {
//                 title: "Social Media Marketing",
//                 image:
//                   "/images/WhatsApp Image 2025-09-20 at 10.54.00_f2a20352.jpg",
//                 desc: "Master platforms like Instagram, Facebook, and LinkedIn to create engaging campaigns and grow audiences.",
//                 modules: 6,
//                 duration: "5 Months",
//               },
//             ].map((course, idx) => (
//               <div
//                 key={idx}
//                 className="relative rounded-lg overflow-hidden shadow-lg"
//               >
//                 {/* Background Image */}
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   className="w-full h-90 sm:h-110 object-cover"
//                 />

//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-x-0 bottom-0 h-50 bg-gradient-to-t from-black/100 to-transparent rounded-b-lg"></div>
//                 <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end text-white z-10">
//                   <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
//                     {course.title}
//                   </h4>
//                   <p className="text-xs sm:text-sm">{course.desc}</p>

//                   <div className="flex items-center justify-between mt-4">
//                     <button className="bg-green-600 hover:bg-green-700 text-white py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg text-xs sm:text-sm transition-all duration-300 hover:shadow-md hover:scale-105">
//                       Learn More
//                     </button>

//                     <div className="flex items-center space-x-2 text-xs sm:text-sm">
//                       <span>{course.modules} Modules</span>
//                       <span>{course.duration}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="hidden lg:block border-l border-gray-300 mx-4"></div>
//         <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:pl-8">
//           <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">
//             Start with Digital Marketing, <br />
//             Grow with Python, Cybersecurity & Data Analytics
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//             {[
//               {
//                 title: "Python",
//                 image:
//                   "/images/WhatsApp Image 2025-09-20 at 10.54.12_5782f322.jpg",
//                 desc: "Learn Python programming from basics to advanced and build real-world applications.",
//                 modules: 9,
//                 duration: "5 Months",
//               },
//               {
//                 title: "Cyber Security",
//                 image:
//                   "/images/WhatsApp Image 2025-09-20 at 10.53.47_93e86468.jpg",
//                 desc: "Understand the essentials of ethical hacking, threat analysis, and strategies to protect digital assets.",
//                 modules: 9,
//                 duration: "5 Months",
//               },
//               {
//                 title: "Data Analytics",
//                 image:
//                   "/images/WhatsApp Image 2025-09-20 at 10.53.48_e1ab91bd.jpg",
//                 desc: "Gain data-driven insights with tools and techniques.",
//                 modules: 17,
//                 duration: "6 Months",
//               },
//             ].map((course, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg shadow-md"
//               >
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   className="w-full h-32 sm:h-40 rounded-lg mb-4 object-cover"
//                 />
//                 <h4 className="font-bold text-base sm:text-lg mb-1">
//                   {course.title}
//                 </h4>
//                 <p className="text-xs sm:text-sm text-gray-600 mb-2">
//                   {course.desc}
//                 </p>
//                 <div className="flex items-center justify-between w-full text-xs text-gray-500 mb-2">
//                   <span>{course.modules} Modules</span>
//                   <span>{course.duration}</span>
//                 </div>
//                 <button className="text-green-600 font-semibold text-xs sm:text-sm border border-green-600 rounded px-3 py-1">
//                   Learn More
//                 </button>
//               </div>
//             ))}
//             <div className="flex justify-center items-center">
//               <button className="flex items-center text-green-600 font-semibold text-sm sm:text-lg hover:underline">
//                 View Courses &rarr;
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default OurCourses;