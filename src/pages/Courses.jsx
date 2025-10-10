import React from "react";
import QueriesForm from "../components/CommonComponents/QueriesForm";
import { FaCalendarAlt, FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import OurGraduates from "../components/Home/OurGraduates";
import Questions from "../components/Home/Questions";
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

const coursesSecondary = [
  {
    id: 1,
    title: "Python",
    description:
      "Learn Python programming from basics to advanced and build real-world applications.",
    img: "/images/WhatsApp Image 2025-09-20 at 10.54.12_5782f322.jpg",
    modules: 9,
    duration: "5 Months",
  },
  {
    id: 2,
    title: "Cyber Security",
    description:
      "Understand the essentials of ethical hacking, threat analysis, and strategies to protect digital assets.",
    img: "/images/WhatsApp Image 2025-09-20 at 10.53.47_93e86468.jpg",
    modules: 9,
    duration: "5 Months",
  },
  {
    id: 3,
    title: "Data Analytics",
    description:
      "Gain data-driven insights with tools and techniques to make smarter business decisions.",
    img: "/images/WhatsApp Image 2025-09-20 at 10.53.48_e1ab91bd.jpg",
    modules: 12,
    duration: "6 Months",
  },
  {
    id: 4,
    title: "Cyber Security",
    description:
      "Understand the essentials of ethical hacking, threat analysis, and strategies to protect digital assets.",
    img: "/images/WhatsApp Image 2025-09-20 at 10.53.47_93e86468.jpg",
    modules: 9,
    duration: "5 Months",
  },
  {
    id: 5,
    title: "Python",
    description:
      "Learn Python programming from basics to advanced and build real-world applications.",
    img: "/images/WhatsApp Image 2025-09-20 at 10.54.12_5782f322.jpg",
    modules: 9,
    duration: "5 Months",
  },
  {
    id: 6,
    title: "Cyber Security",
    description:
      "Understand the essentials of ethical hacking, threat analysis, and strategies to protect digital assets.",
    img: "/images/WhatsApp Image 2025-09-20 at 10.53.47_93e86468.jpg",
    modules: 9,
    duration: "5 Months",
  },
  {
    id: 7,
    title: "Data Analytics",
    description:
      "Gain data-driven insights with tools and techniques to make smarter business decisions.",
    img: "/images/WhatsApp Image 2025-09-20 at 10.53.48_e1ab91bd.jpg",
    modules: 12,
    duration: "6 Months",
  },
  {
    id: 8,
    title: "Cyber Security",
    description:
      "Understand the essentials of ethical hacking, threat analysis, and strategies to protect digital assets.",
    img: "/images/WhatsApp Image 2025-09-20 at 10.53.47_93e86468.jpg",
    modules: 9,
    duration: "5 Months",
  },
];

const coursesAbroad = [
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

const Courses = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div
        className="w-full h-[400px] flex items-center justify-center bg-center bg-cover relative"
        style={{
          backgroundImage:
            "url('/images/WhatsApp Image 2025-10-09 at 12.16.37_d35ed120.jpg')",
        }}
      >
        <h1 className="text-white text-4xl font-bold drop-shadow-lg">
          All Courses
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-14">
        {/* Search Section */}
        <section className="text-center max-w-xl mx-auto space-y-3">
          <h2 className="text-2xl font-semibold">
            Find the Right Course for You
          </h2>
          <p className="text-gray-600">
            Explore ILT’s expert-led programs and choose the one that fits your
            career goals.
          </p>
          <form className="flex items-center border border-gray-300 rounded-md overflow-hidden max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search course"
              className="flex-grow py-2 px-4 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2"
            >
              Search
            </button>
          </form>
        </section>

        {/* Primary Course Section */}
        <section className="px-4 sm:px-8 py-12">
          <h3 className="text-xl font-semibold mb-4">Primary Course</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => {
              const slug = course.title.toLowerCase().replace(/\s+/g, "-");
              return (
                <div
                  key={idx}
                  className="relative rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-all duration-300"
                >
                  {/* Background Image */}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-56 sm:h-64 md:h-100 object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 to-transparent"></div>

                  {/* Text Content */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end text-white z-10">
                    <h4 className="text-lg font-bold mb-1">{course.title}</h4>
                    <p className="text-xs sm:text-sm leading-snug line-clamp-2">
                      {course.desc}
                    </p>

                    <div className="flex items-center justify-between mt-4">
                      <Link to={`/courses/${slug}`}>
                        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-xs sm:text-sm transition-all duration-300 hover:shadow-md">
                          Learn More
                        </button>
                      </Link>

                      <div className="flex items-center space-x-2 text-[11px] sm:text-xs opacity-90">
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

        {/* Secondary Course Section */}
        <section className="px-4 sm:px-8 py-12">
          <h3 className="text-xl font-semibold mb-6">Secondary Courses</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {coursesSecondary.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <h4 className="text-white text-lg font-semibold">
                      {course.title}
                    </h4>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    {course.description}
                  </p>

                  <div className="flex justify-between text-gray-700 text-sm mb-4">
                    <span className="flex items-center gap-2">
                      <FaBookOpen className="text-green-600" />
                      {course.modules} Modules
                    </span>
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="text-green-600" />
                      {course.duration}
                    </span>
                  </div>

                  <button className="w-full border border-green-600 text-green-600 font-medium text-sm py-2 rounded-md hover:bg-green-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Study Abroad Section */}
        <section>
          <h3 className="text-xl font-semibold mb-6">
            Study{" "}
            <span className="text-green-600">
              Digital Marketing Abroad Section
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesAbroad.map((course, idx) => {
              const slug = course.title.toLowerCase().replace(/\s+/g, "-");
              return (
                <div
                  key={idx}
                  className="relative rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-all duration-300"
                >
                  {/* Background Image */}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-56 sm:h-64 md:h-100 object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 to-transparent"></div>

                  {/* Text Content */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end text-white z-10">
                    <h4 className="text-lg font-bold mb-1">{course.title}</h4>
                    <p className="text-xs sm:text-sm leading-snug line-clamp-2">
                      {course.desc}
                    </p>

                    <div className="flex items-center justify-between mt-4">
                      <Link to={`/courses/${slug}`}>
                        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-xs sm:text-sm transition-all duration-300 hover:shadow-md">
                          Learn More
                        </button>
                      </Link>

                      <div className="flex items-center space-x-2 text-[11px] sm:text-xs opacity-90">
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

        {/* Queries Section */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <QueriesForm />
          </div>
          <div>
            <img
              src="/images/WhatsApp Image 2025-10-09 at 12.16.37_1d071594.jpg"
              alt="Study"
              className="w-full rounded-lg object-cover h-[420px]"
            />
          </div>
        </section>
        <OurGraduates/>
        <Questions/>
      </div>
    </div>
  );
};

export default Courses;
