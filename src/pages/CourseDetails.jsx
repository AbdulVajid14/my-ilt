import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  FaCheck,
  FaCalendarAlt,
  FaBook,
  FaClock,
  FaLaptop,
  FaRupeeSign,
  FaStar,
} from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import OurGraduates from "../components/Home/OurGraduates";
import Questions from "../components/Home/Questions";
import Instructor from "../components/CommonComponents/Instructor";
import QueriesForm from "../components/CommonComponents/QueriesForm";

const digitalMarketingTools = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    alt: "Google",
  },
  { src: "/images/Benchmark.jpg", alt: "Benchmark" },
  { src: "/images/canva.jpg", alt: "Canva" },
  { src: "/images/google-trends.jpg", alt: "Google Trends" },
  { src: "/images/elemenator.jpg", alt: "Elementor" },
  { src: "/images/grammarly.jpg", alt: "Grammarly" },
  { src: "/images/google-ads.jpg", alt: "Google Ads Transparency Center" },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.12_f4974b1e.jpg",
    alt: "Google Images",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.12_8846116c.jpg",
    alt: "Google Ads",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.12_b5dd8792.jpg",
    alt: "Mailchimp",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.13_4c3e0909.jpg",
    alt: "Meta",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.13_aacd9588.jpg",
    alt: "Google My Business",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.12_f0f5265c.jpg",
    alt: "Ahrefs",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.13_8c979fae.jpg",
    alt: "Instamojo",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.22_ae09daf4.jpg",
    alt: "Ubersuggest",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.23_f6f9394a.jpg",
    alt: "LinkedIn",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.23_c6447243.jpg",
    alt: "Google Analytics",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.23_8ffed55c.jpg",
    alt: "Visily",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.23_bdb0d988.jpg",
    alt: "Woo",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.23_54825314.jpg",
    alt: "MobileMonkey",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.23_cffc6d7d.jpg",
    alt: "Moz",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.23_9aa2bf89.jpg",
    alt: "YouTube",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.24_d7acfbb7.jpg",
    alt: "SEMRUSH",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.35_d2151896.jpg",
    alt: "Site Kit",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.35_2425de78.jpg",
    alt: "Snapchat",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.35_a567b4c2.jpg",
    alt: "Wati",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.35_859155bf.jpg",
    alt: "Zapier",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.36_f4c1f889.jpg",
    alt: "Site Kit",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.36_07dcfbf6.jpg",
    alt: "Snapchat",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.46_905dcd3a.jpg",
    alt: "Wati",
  },
  {
    src: "/images/WhatsApp Image 2025-09-20 at 10.54.46_5649feb9.jpg",
    alt: "Zapier",
  },
];

const CourseDetails = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/courses`
        );
        const result = response.data;

        if (result.success) {
          const found = result.data.find(
            (c) => c.name.toLowerCase().replace(/\s+/g, "-") === slug
          );
          if (found) {
            const learnPoints = found.program_modules
              .split(".\r\n")
              .map((s) => s.trim())
              .filter((s) => s);
            const outcomes = found.learning_outcomes
              .split(".\r\n")
              .map((s) => s.trim())
              .filter((s) => s);
            const weeklySchedule = outcomes.map((title, i) => ({
              week: `Week ${i + 1}`,
              title,
            }));
            const careerOpportunities = found.opportunities
              ? found.opportunities
                  .split(/\r?\n/)
                  .map((s) => s.trim())
                  .filter(Boolean)
              : [];
            const features = [
              {
                icon: <FaCalendarAlt />,
                label: "Start date:",
                value: found.date
                  ? new Date(found.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  : "Soon",
              },
              { icon: <FaBook />, label: "Modules:", value: outcomes.length },
              {
                icon: <BiTimeFive />,
                label: "Time:",
                value: found.time,
              },
              {
                icon: <FaClock />,
                label: "Duration:",
                value: `${found.duration}`,
              },
              {
                icon: <FaRupeeSign />,
                label: "Price:",
                value: `${found.price.toLocaleString()}`,
              },
              {
                icon: <FaLaptop />,
                label: "Mode:",
                value: found.mode || "Online / In-House Trainingline",
              },
            ];
            const processedCourse = {
              title: found.name,
              bannerImage: found.image,
              videoImage: `${import.meta.env.VITE_BASE_URL_IMAGE}${
                found.image
              }`,
              overview: found.description,
              learnPoints,
              features,
              certificationText: found.career_opportunities,
              weeklySchedule,
              careerOpportunities,
              metaTitle: found.metaTitle,
              metaDescription: found.metaDescription,
              metaKeywords: found.metaKeywords,
            };
            setCourse(processedCourse);
          } else {
            setError("Course not found.");
          }
        } else {
          setError("Failed to fetch course data.");
        }
      } catch (error) {
        setError("Error fetching course details.");
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [slug]);

  useEffect(() => {
    if (!course) return;
    document.title = course.metaTitle || course.title || "Course Details";
    const metaDescription =
      document.querySelector("meta[name='description']") ||
      (() => {
        const meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
        return meta;
      })();

    metaDescription.setAttribute(
      "content",
      course.metaDescription || course.overview || ""
    );
    const metaKeywords =
      document.querySelector("meta[name='keywords']") ||
      (() => {
        const meta = document.createElement("meta");
        meta.name = "keywords";
        document.head.appendChild(meta);
        return meta;
      })();

    metaKeywords.setAttribute("content", course.metaKeywords || "");
  }, [course]);

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (error || !course) {
    return (
      <div className="text-center py-12">{error || "Course not found"}</div>
    );
  }

  return (
    <div className="mx-auto">
      {/* Hero Section */}
      <section
        className="relative w-full h-64 sm:h-80 md:h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/WhatsApp Image 2025-10-03 at 16.34.22_189f080b.jpg')`,
        }}
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg text-center px-4">
          {course.title}
        </h1>
      </section>

      {/* Trainer & Ratings + Overview & Query Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Left: Trainer + Overview + Video */}
        <div className="flex-1 space-y-4 sm:space-y-6 order-1 lg:order-1">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <img
              src="/images/WhatsApp Image 2025-10-03 at 16.34.35_be4e0ab4.jpg"
              alt="Trainer"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 text-sm font-medium text-gray-700 min-w-0">
              <span className="truncate">ILT Certified Trainer</span>
              <div className="flex items-center space-x-1 flex-shrink-0">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.561-.955L10 0l2.949 5.955 6.561.955-4.755 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="text-gray-900 font-semibold ml-1 sm:ml-2 text-xs sm:text-sm">
                  4.9/5
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
              Course Overview
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {course.overview}
            </p>
          </div>

          <div className="relative w-full aspect-video max-w-full rounded-lg overflow-hidden cursor-pointer">
            <img
              src={course.videoImage}
              alt="Course Presentation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Query Form wrapped in a div */}
        <div className="lg:w-[35%] w-full flex-shrink-0 order-2 lg:order-2">
          <QueriesForm />
        </div>
      </section>

      {/* What You'll Learn & Course Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
        {/* Left side - What You'll Learn */}
        <div className="flex-1 space-y-4 sm:space-y-5 order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            What You’ll Learn
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">
            By the end of this course, you will be able to:
          </p>

          <ul className="space-y-3 sm:space-y-4">
            {course.learnPoints.map((text, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 sm:space-x-3"
              >
                <FaCheck className="text-green-600 mt-1 flex-shrink-0 text-lg sm:text-xl" />
                <span className="font-semibold text-gray-800 text-sm sm:text-base leading-relaxed">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side - Course Features */}
        <div className="rounded-lg p-4 sm:p-6 w-full max-w-sm lg:max-w-md order-1 lg:order-2">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
            Course Features
          </h3>

          <ul className="space-y-3 sm:space-y-4 text-gray-800">
            {course.features
              .filter(
                ({ value }) => value != null && value !== "" && value !== "Soon"
              )
              .map(({ icon, label, value }) => (
                <li
                  key={label}
                  className="flex items-center justify-between space-x-2 sm:space-x-3"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                    <span className="text-green-600 text-lg sm:text-xl flex-shrink-0">
                      {icon}
                    </span>
                    <span className="font-semibold text-sm sm:text-base truncate">
                      {label}
                    </span>
                  </div>

                  <span className="text-sm sm:text-base text-right min-w-0 truncate">
                    {value}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </section>

      {/* Certification */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <h2 className="text-2xl sm:text-3xl font-semibold">Details</h2>
        </div>

        <p className="text-gray-700 text-sm sm:text-lg leading-relaxed max-w-4xl">
          {course.certificationText}
        </p>
      </section>

      {/* Weekly Course Schedule & Career Opportunities */}
      <section className="flex flex-col lg:flex-row gap-6 lg:gap-12 border border-gray-300 rounded-lg p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto my-8 sm:my-12">
        {/* Left Side - Weekly Schedule */}
        <div className="flex-1">
          <h3 className="font-semibold text-xl sm:text-2xl mb-4 sm:mb-5 text-gray-900">
            Weekly Course Schedule
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-gray-800">
            {course.weeklySchedule.map(({ week, title }) => (
              <li
                key={week}
                className="flex items-center space-x-2 sm:space-x-3"
              >
                <span className="block w-2 h-2 sm:w-3 sm:h-3 bg-green-600 rounded-full flex-shrink-0"></span>
                <p className="text-sm sm:text-lg leading-relaxed">
                  <strong>{week}:</strong> {title}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Career Opportunities */}
        <div className="flex-1">
          <h3 className="font-semibold text-xl sm:text-2xl mb-4 sm:mb-5 text-gray-900">
            Career Opportunities
          </h3>
          <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-lg">
            After completing {course.title}, students can work as:
          </p>
          <ul className="space-y-2 sm:space-y-3 text-gray-900">
            {course.careerOpportunities.map((role, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 sm:space-x-3 font-semibold"
              >
                <FaStar className="text-yellow-500 text-lg sm:text-xl flex-shrink-0" />
                <span className="text-sm sm:text-lg">{role}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Digital Marketing Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h2 className="text-center font-semibold text-xl sm:text-2xl mb-6 sm:mb-8 text-gray-900">
          Digital Marketing Tools You’ll Master
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-6 justify-items-center">
          {digitalMarketingTools.map(({ src, alt }) => (
            <div
              key={alt}
              className="flex justify-center items-center p-2 sm:p-3 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition w-full max-w-[120px] sm:max-w-none"
              title={alt}
            >
              <img
                src={src}
                alt={alt}
                className="h-8 sm:h-10 lg:h-12 w-auto max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      <Instructor />

      {/* Download ILT App Section */}
      <section className="bg-black text-white p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-10 w-full">
        <div className="md:w-1/3 flex justify-center md:justify-center">
          <img
            src="/images/WhatsApp Image 2025-09-20 at 10.54.24_04457969.jpg"
            alt="Person with laptop"
            className="rounded-full object-cover w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80"
          />
        </div>
        <div className="md:w-2/3 space-y-4 sm:space-y-6 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Download the <span className="text-green-500">ILT App</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto md:mx-0 text-sm sm:text-base">
            Learn anywhere, anytime! Access courses, assignments, and resources
            on the go with the ILT mobile app — available on Play Store and App
            Store.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-6">
            <a
              href="https://play.google.com/store/apps/details?id=com.mindlabs.ilt"
              className="inline-block"
              aria-label="Get it on Google Play"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10 sm:h-12"
              />
            </a>
            <a
              href="https://apps.apple.com/in/app/internet-leads-training-ilt/id1548244062"
              className="inline-block"
              aria-label="Download on the App Store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-10 sm:h-12"
              />
            </a>
          </div>
        </div>
      </section>
      <OurGraduates />
      <Questions />
    </div>
  );
};

export default CourseDetails;
