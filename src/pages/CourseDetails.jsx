import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
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

const coursesData = {
  "seo-mastery": {
    title: "SEO Mastery",
    bannerImage: "/images/WhatsApp Image 2025-10-03 at 16.34.22_189f080b.jpg",
    videoImage: "/images/WhatsApp Image 2025-10-03 at 16.34.23_b794fe71.jpg",
    overview:
      "SEO Mastery is designed to equip learners with the skills to make websites rank higher on search engines like Google. From keyword research and on-page optimization to off-page strategies and analytics, this course covers the complete SEO journey. Students gain practical experience through live projects, ensuring they can confidently apply techniques in real-world scenarios.",
    learnPoints: [
      "Perform keyword research and competitor analysis",
      "Implement on-page & technical SEO strategies",
      "Execute off-page SEO with link building & outreach",
      "Use Google Analytics & Search Console for insights",
      "Optimize websites for higher search engine rankings",
      "Manage end-to-end SEO campaigns effectively",
    ],
    features: [
      { icon: <FaCalendarAlt />, label: "Start date:", value: "Oct 15, 2025" },
      { icon: <FaBook />, label: "Modules:", value: "5" },
      { icon: <BiTimeFive />, label: "Time:", value: "09am - 11am" },
      { icon: <FaClock />, label: "Duration:", value: "5 Months" },
      { icon: <FaRupeeSign />, label: "Price:", value: "$2,000" },
      {
        icon: <FaLaptop />,
        label: "Mode:",
        value: "Online / Offline / 1:1 Coaching",
      },
    ],
    certificationText:
      "Upon successful completion, students receive an ILT Certified SEO Mastery Certificate, recognized by industry experts. This certification validates your SEO knowledge and boosts career opportunities in digital marketing roles.",
    weeklySchedule: [
      { week: "Week 1", title: "SEO Fundamentals & Keyword Research" },
      { week: "Week 2", title: "On-Page Optimization" },
      { week: "Week 3", title: "Technical SEO Essentials" },
      { week: "Week 4", title: "Off-Page SEO & Link Building" },
      { week: "Week 5", title: "Analytics, Reporting & Final Project" },
    ],
    careerOpportunities: [
      "SEO Specialist",
      "Digital Marketing Analyst",
      "SEO Consultant",
      "Growth Marketer",
    ],
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    bannerImage: "/images/WhatsApp Image 2025-09-20 at 10.54.00_f2a20352.jpg",
    videoImage: "/images/social-video-placeholder.jpg",   
    overview:
      "Master platforms like Instagram, Facebook, and LinkedIn to create engaging campaigns and grow audiences. This course covers content creation, ad management, audience targeting, and performance analytics to help you build effective social media strategies.",
    learnPoints: [
      "Develop social media strategies and content calendars",
      "Create engaging content for various platforms",
      "Run paid ad campaigns and optimize budgets",
      "Analyze engagement metrics and audience insights",
      "Build community management and influencer partnerships",
      "Leverage trends and algorithms for maximum reach",
    ],
    features: [
      { icon: <FaCalendarAlt />, label: "Start date:", value: "Oct 20, 2025" },
      { icon: <FaBook />, label: "Modules:", value: "6" },
      { icon: <BiTimeFive />, label: "Time:", value: "09am - 11am" },
      { icon: <FaClock />, label: "Duration:", value: "5 Months" },
      { icon: <FaRupeeSign />, label: "Price:", value: "$2,200" },
      {
        icon: <FaLaptop />,
        label: "Mode:",
        value: "Online / Offline / 1:1 Coaching",
      },
    ],
    certificationText:
      "Upon successful completion, students receive an ILT Certified Social Media Marketing Certificate, recognized by industry experts. This certification validates your social media expertise and boosts career opportunities in digital marketing roles.",
    weeklySchedule: [
      { week: "Week 1", title: "Introduction to Social Media Platforms" },
      { week: "Week 2", title: "Content Creation & Strategy" },
      { week: "Week 3", title: "Audience Targeting & Engagement" },
      { week: "Week 4", title: "Paid Advertising & Campaigns" },
      { week: "Week 5", title: "Analytics, Optimization & Final Project" },
    ],
    careerOpportunities: [
      "Social Media Manager",
      "Content Creator",
      "Digital Marketer",
      "Brand Strategist",
    ],
  },
};

const digitalMarketingTools = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    alt: "Google",
  },
  {
    src: "/images/Benchmark.jpg",
    alt: "Benchmark",
  },
  {
    src: "/images/canva.jpg",
    alt: "Canva",
  },
  {
    src: "/images/google-trends.jpg",
    alt: "Google Trends",
  },
  {
    src: "/images/elemenator.jpg",
    alt: "Elementor",
  },
  {
    src: "/images/grammarly.jpg",
    alt: "Grammarly",
  },
  {
    src: "/images/google-ads.jpg",
    alt: "Google Ads Transparency Center",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/52/Google_Images_logo.svg",
    alt: "Google Images",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Google_AdWords_Logo.svg/2560px-Google_AdWords_Logo.svg.png",
    alt: "Google Ads",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/57/Mailchimp_Logo.svg",
    alt: "Mailchimp",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._Logo.svg",
    alt: "Meta",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_My_Business_logo.svg",
    alt: "Google My Business",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Ahrefs_logo.svg",
    alt: "Ahrefs",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/97/Instamojo_Logo.png",
    alt: "Instamojo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Ubersuggest_logo.svg",
    alt: "Ubersuggest",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    alt: "LinkedIn",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Google_Analytics_Logo.svg",
    alt: "Google Analytics",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/79/Visily_Logo.png",
    alt: "Visily",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/68/WooCommerce_logo.svg",
    alt: "Woo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/36/MobileMonkey_logo.svg",
    alt: "MobileMonkey",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Moz_logo.svg",
    alt: "Moz",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png",
    alt: "YouTube",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Semrush_logo.svg",
    alt: "SEMRUSH",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Google_Site_Kit_Logo.svg",
    alt: "Site Kit",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c4/Snapchat_logo.svg",
    alt: "Snapchat",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/37/Wati_logo.svg",
    alt: "Wati",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Zapier_logo.svg",
    alt: "Zapier",
  },
];

const CourseDetails = () => {
  const { slug } = useParams();
  const course = coursesData[slug];

  const [phone, setPhone] = useState("");

  if (!course) {
    return <div className="text-center py-12">Course not found</div>;
  }

  return (
    <div className="mx-auto">
      {/* Hero Section */}
      <section
        className="relative w-full h-64 sm:h-80 md:h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('${course.bannerImage}')`,
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
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 bg-opacity-90 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
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
            {course.features.map(({ icon, label, value }) => (
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
          <h2 className="text-2xl sm:text-3xl font-semibold">Certification</h2>
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
              href="#"
              className="inline-block"
              aria-label="Get it on Google Play"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10 sm:h-12"
              />
            </a>
            <a
              href="#"
              className="inline-block"
              aria-label="Download on the App Store"
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
