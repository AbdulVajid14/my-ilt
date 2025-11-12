import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AbroadCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/courses`)
      .then((response) => {
        if (response.data.success) {
          const sortedCourses = response.data.data
          const primaryCourses = sortedCourses
            .filter((c) => c.category_id === 1)
            .slice(0, 2)
            .map((c) => ({
              title: c.name,
              image: `${import.meta.env.VITE_BASE_URL_IMAGE}/${c.image}`,
              desc: c.description.length > 100 ? c.description.slice(0, 100) + "..." : c.description,
              modules: c.program_modules.split(".\r\n").filter((s) => s.trim()).length,
              duration: `${c.duration}`,
            }));
          setCourses(primaryCourses);
        }
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <section className="max-w-7xl">
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
              <div className="absolute inset-x-0 bottom-0 h-50 bg-gradient-to-t from-black/100 to-transparent rounded-b-lg"></div>

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

export default AbroadCourses;