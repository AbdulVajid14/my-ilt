
import React from "react";
import { Link } from "react-router-dom";

const CommonCourses = () => {
  const courses = [
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

  return (
    <section className="max-w-7xl w-[90%] sm:w-[65%]">
      <h3 className="text-2xl font-semibold mb-8 text-center sm:text-left">
        Explore More Courses
      </h3>

      <div className="flex flex-col sm:flex-row gap-8">
        {courses.map((course, idx) => {
          const slug = course.title.toLowerCase().replace(/\s+/g, "-");
          return (
            <div
              key={idx}
              className="relative rounded-lg overflow-hidden shadow-md flex-1 w-full"
            >
              {/* Background Image */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-72 sm:h-120 object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/90 to-transparent rounded-b-lg"></div>

              {/* Text Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                <h4 className="text-lg font-bold mb-2">{course.title}</h4>
                <p className="text-xs sm:text-sm leading-snug line-clamp-2">
                  {course.desc}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <Link to={`/courses/${slug}`}>
                    <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-xs sm:text-sm transition-all duration-300 hover:shadow-md">
                      Learn More
                    </button>
                  </Link>

                  <div className="flex items-center space-x-2 text-[11px] sm:text-xs">
                    <span>{course.modules} Modules</span>
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CommonCourses;