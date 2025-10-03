
import React from "react";
import { useState } from "react";
import {
  FaWhatsapp,
  FaPlay,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaPlus,
} from "react-icons/fa";
import {
  MdOutlineComputer,
  MdOutlineBusinessCenter,
  MdPeopleOutline,
  MdOutlineWatchLater,
  MdOutlineClass,
  MdOutlineHandshake,
} from "react-icons/md";
import {
  HiCheckCircle,
  HiDevicePhoneMobile,
  HiUsers,
  HiAcademicCap,
} from "react-icons/hi2";
import ReactCountryFlag from "react-country-flag";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Home = () => {
  const [phone, setPhone] = useState("");
  const [phone1, setPhone1] = useState("");

  const trainers = [
    {
      name: "David Mathews",
      title: "Senior Digital Marketing Strategist",
      students: "20K+ Students",
      rating: "4.8★ Rating",
      skills: ["SEO", "Social Media Marketing"],
      imageUrl: "/images/WhatsApp Image 2025-10-01 at 14.31.43_91db6ff6.jpg",
    },
    {
      name: "Anita Varghese",
      title: "Digital Advertising Specialist",
      students: "18K+ Students",
      rating: "4.9★ Rating",
      skills: ["PPC", "Content Marketing"],
      imageUrl: "/images/WhatsApp Image 2025-10-01 at 14.31.44_db38e36e.jpg",
    },
    {
      name: "Rahul Menon",
      title: "Lead Data Analyst",
      students: "12K+ Students",
      rating: "4.7★ Rating",
      skills: ["Data Visualization", "Python Analytics"],
      imageUrl: "/images/WhatsApp Image 2025-10-01 at 14.31.44_7292d380.jpg",
      darkBg: true,
    },
  ];

  return (
    <div className="bg-gray-50 font-sans">
      {/* 1. Hero Section */}
      <section className="relative bg-emerald-700 text-white min-h-[400px] sm:min-h-[500px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("/images/WhatsApp Image 2025-09-20 at 10.53.59_a95e9d3b.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-12 sm:py-20 md:py-32">
          <p className="text-base sm:text-lg mb-2">
            Build Your Digital Career with Expert Training
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Master SEO, Social Media, <br />
            Ads & Analytics with hands-on <br />
            training.
          </h1>
          <button className="bg-white text-emerald-700 font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
            View Courses
          </button>
        </div>
      </section>

      {/* 2. Why Choose ILT Section */}
      <section className="bg-green-700 text-white py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
            Why Choose Internet Leads Training for Digital Marketing Courses?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            At Internet Leads Training (ILT), we are committed to empowering
            students with practical, industry-relevant skills in digital
            marketing. With expert trainers, real-world projects, and
            personalized guidance, we ensure every learner is job-ready and
            confident to succeed in the fast-growing digital industry.
          </p>
        </div>
      </section>

      {/* 3. Trainer Section */}
      <section className="bg-white">
        <div className="flex flex-col md:flex-row items-stretch w-full min-h-[500px]">
          <div className="w-full md:w-1/2 flex flex-col relative">
            <div className="absolute top-0 left-0 w-full p-4 z-10 bg-white bg-opacity-90 md:bg-transparent md:static md:p-6 text-center">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Jitto Jose
              </h2>
              <p className="text-green-600 font-medium">
                Founder & Lead Trainer
              </p>
            </div>
            <div className="flex-grow relative overflow-hidden h-180 sm:h-96 md:h-auto">
              <img
                src="/images/WhatsApp Image 2025-09-20 at 10.53.59_635566b4.jpg"
                alt="Jitto Jose, Founder & Lead Trainer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full flex flex-col sm:flex-row justify-between items-center text-center p-4 bg-gray-900 bg-opacity-70 text-white z-20">
              <div className="flex-1 px-2 sm:border-r sm:border-gray-600 mb-2 sm:mb-0">
                <p className="text-xl sm:text-2xl font-bold">2000+</p>
                <p className="text-xs sm:text-sm">Students Trained</p>
              </div>
              <div className="flex-1 px-2 sm:border-r sm:border-gray-600 mb-2 sm:mb-0">
                <p className="text-xl sm:text-2xl font-bold">100%</p>
                <p className="text-xs sm:text-sm">Placement Success</p>
              </div>
              <div className="flex-1 px-2">
                <p className="text-xl sm:text-2xl font-bold">50%</p>
                <p className="text-xs sm:text-sm">Salary Increase</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 sm:p-8 bg-green-700 text-white flex flex-col">
            <div className="flex-grow space-y-6 sm:space-y-8">
              <div>
                <div className="flex items-center mb-3">
                  <HiCheckCircle className="w-8 h-8 sm:w-10 sm:h-10 mr-3 text-white" />
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                    Placement Support
                  </h3>
                </div>
                <p className="text-base sm:text-lg font-light">
                  We provide complete placement assistance with interview
                  preparation, resume building, and job referrals, ensuring
                  students step confidently into the digital industry.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <HiDevicePhoneMobile className="w-8 h-8 sm:w-10 sm:h-10 mr-3 text-white" />
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                    Hands-On Learning
                  </h3>
                </div>
                <p className="text-base sm:text-lg font-light">
                  Every course includes real-world projects and live assignments
                  so students gain practical experience and build strong,
                  job-ready portfolios.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <HiUsers className="w-8 h-8 sm:w-10 sm:h-10 mr-3 text-white" />
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                    Expert Trainers
                  </h3>
                </div>
                <p className="text-base sm:text-lg font-light">
                  Our trainers are experienced digital marketing professionals
                  who bring real industry knowledge and insights to every
                  session, making learning interactive and impactful.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <HiAcademicCap className="w-8 h-8 sm:w-10 sm:h-10 mr-3 text-white" />
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                    Certified Courses
                  </h3>
                </div>
                <p className="text-base sm:text-lg font-light">
                  Earn industry-recognized certifications that enhance your
                  credibility and open doors to better career opportunities
                  across top companies.
                </p>
              </div>
            </div>
            <button className="w-full mt-6 bg-white text-green-700 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-colors text-base sm:text-lg">
              Know More About ILT
            </button>
          </div>
        </div>
      </section>

      {/* 4. Learning Options */}
      <section className="bg-gray-100 py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between">
          <div className="w-full lg:w-2/3 pr-0 lg:pr-8">
            <p className="text-gray-600 mb-2 text-sm sm:text-base">
              Your Learning, Your Rules
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-gray-800">
              <span className="text-green-600">
                Whether you prefer live online classes, classroom sessions, or
                flexible self-paced learning,
              </span>{" "}
              we've got you covered.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: MdOutlineComputer,
                  title: "Online Training",
                  desc: "Learn from anywhere with live interactive sessions, recorded lectures, and mentor support.",
                },
                {
                  icon: MdOutlineClass,
                  title: "Offline Training",
                  desc: "Attend classroom sessions for a more face-to-face, hands-on learning experience with expert guidance.",
                },
                {
                  icon: MdPeopleOutline,
                  title: "Individual Coaching",
                  desc: "One-on-one personalized training tailored to your goals and pace for maximum impact.",
                },
                {
                  icon: MdOutlineWatchLater,
                  title: "Self-Paced Learning",
                  desc: "Access recorded sessions and resources to learn at your own speed, anytime.",
                },
                {
                  icon: MdOutlineBusinessCenter,
                  title: "Corporate Training",
                  desc: "Customized digital marketing programs for teams and organizations to upskill effectively.",
                },
                {
                  icon: MdOutlineHandshake,
                  title: "Workshop Mode",
                  desc: "Intensive, short-term programs focused on mastering specific skills quickly.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-start text-center p-4 sm:p-6 bg-white rounded-lg shadow-md"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <item.icon className="text-green-600 text-2xl sm:text-3xl" />
                  </div>
                  <h4 className="font-bold text-base sm:text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <button className="mt-6 sm:mt-8 bg-green-600 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
              Explore Training Options
            </button>
          </div>
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0 space-y-6 sm:space-y-8">
            <div className="p-4 sm:p-6 bg-white rounded-lg shadow-xl">
              <h4 className="font-bold text-lg sm:text-xl mb-4 text-gray-800">
                Find out if you're eligible
              </h4>
              <p className="mb-4 text-sm sm:text-base">
                <span className="text-black">
                  Hurry! Application closes in{" "}
                </span>
                <span className="text-green-600 font-semibold">3 days</span>.
              </p>
              <div className="p-4 bg-gray-50 rounded-lg shadow-md space-y-4">
                <PhoneInput
                  country={"in"}
                  value={phone1}
                  onChange={(phone) => setPhone1(phone)}
                  inputClass="w-full px-4 py-3 rounded-md border-2 border-green-200 bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800"
                  buttonClass="border-2 border-green-200 bg-green-100 rounded-l-md"
                  containerClass="w-full"
                  dropdownClass="rounded-md border border-green-200 bg-white"
                  enableSearch
                  placeholder="Phone Number"
                  inputStyle={{ width: "100%" }}
                />
                <button className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                  Check eligibility
                </button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  By clicking, I accept the{" "}
                  <a href="#" className="underline hover:text-green-600">
                    T&C
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline hover:text-green-600">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
            <div className="p-4 sm:p-6 bg-white rounded-lg shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-800 text-sm sm:text-base">
                    Find out how people like you
                  </p>
                  <p className="font-bold text-gray-800 text-sm sm:text-base">
                    achieved their goals
                  </p>
                  <button className="mt-3 bg-black text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition">
                    View Alumni Stories
                  </button>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-md">
                  <img
                    src="/images/WhatsApp Image 2025-10-03 at 09.59.09_485cfc7c.jpg"
                    alt="People Illustration"
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Course Overview */}
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
  {[
    {
      title: "SEO Mastery",
      image:
        "/images/WhatsApp Image 2025-09-20 at 10.54.00_00084e9c.jpg",
      desc: "Learn how to rank websites higher on Google with keyword strategy, on-page & off-page SEO, and analytics.",
      modules: 5,
      duration: "5 Months",
    },
    {
      title: "Social Media Marketing",
      image:
        "/images/WhatsApp Image 2025-09-20 at 10.54.00_f2a20352.jpg",
      desc: "Master platforms like Instagram, Facebook, and LinkedIn to create engaging campaigns and grow audiences.",
      modules: 6,
      duration: "5 Months",
    },
  ].map((course, idx) => (
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
          <button className="bg-green-600 hover:bg-green-700 text-white py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg text-xs sm:text-sm transition-all duration-300 hover:shadow-md hover:scale-105">
            Learn More
          </button>

          <div className="flex items-center space-x-2 text-xs sm:text-sm">
            <span>{course.modules} Modules</span>
            <span>{course.duration}</span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

          </div>
          <div className="hidden lg:block border-l border-gray-300 mx-4"></div>
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:pl-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">
              Start with Digital Marketing, <br />
              Grow with Python, Cybersecurity & Data Analytics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  title: "Python",
                  image:
                    "/images/WhatsApp Image 2025-09-20 at 10.54.12_5782f322.jpg",
                  desc: "Learn Python programming from basics to advanced and build real-world applications.",
                  modules: 9,
                  duration: "5 Months",
                },
                {
                  title: "Cyber Security",
                  image:
                    "/images/WhatsApp Image 2025-09-20 at 10.53.47_93e86468.jpg",
                  desc: "Understand the essentials of ethical hacking, threat analysis, and strategies to protect digital assets.",
                  modules: 9,
                  duration: "5 Months",
                },
                {
                  title: "Data Analytics",
                  image:
                    "/images/WhatsApp Image 2025-09-20 at 10.53.48_e1ab91bd.jpg",
                  desc: "Gain data-driven insights with tools and techniques.",
                  modules: 17,
                  duration: "6 Months",
                },
              ].map((course, idx) => (
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

      {/* 6. Learn & Grow With ILT */}
      <section className="bg-gray-100 py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Learn & Grow With ILT
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4">
              Empowering you with industry-ready courses to build skills, gain
              confidence, and achieve your career goals.
            </p>
            {[
              "Build a strong foundation with expert-led programs.",
              "Master practical skills for real-world applications.",
              "Achieve your dream career with globally recognized certifications.",
            ].map((item, idx) => (
              <p key={idx} className="text-xs sm:text-sm text-gray-500 mb-2">
                <strong>{item.split(" ")[0]}</strong>{" "}
                {item.slice(item.indexOf(" "))}
              </p>
            ))}
            <button className="flex items-center space-x-2 text-green-600 font-semibold text-sm sm:text-lg hover:underline">
              <FaPlay className="text-green-600" />
              <span>Upskill with ILT</span>
            </button>
          </div>
          <div className="w-full lg:w-1/2 p-4 sm:p-6 bg-green-100 rounded-lg shadow-xl">
            <form>
              {[
                { placeholder: "Program interested", icon: "?" },
                { placeholder: "Name", icon: <FaCheckCircle /> },
                { placeholder: "Email", icon: <FaCheckCircle /> },
              ].map((field, idx) => (
                <div key={idx} className="mb-4 relative">
                  <input
                    type={field.placeholder === "Email" ? "email" : "text"}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-md border-2 border-green-200 bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {field.icon}
                  </span>
                </div>
              ))}
              <div className="mb-4 relative">
                <PhoneInput
                  country={"in"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  inputClass="w-full px-4 py-3 rounded-md border-2 border-green-200 bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                  buttonClass="border-2 border-green-200 bg-green-100 rounded-l-md"
                  containerClass="w-full"
                  dropdownClass="rounded-md border border-green-200 bg-white"
                  specialLabel=""
                  inputStyle={{
                    width: "100%",
                    borderRadius: "0.375rem",
                    border: "2px solid #bbf7d0",
                  }}
                  enableSearch
                  placeholder="Phone"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <FaCheckCircle />
                </span>
              </div>
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="sms-consent"
                  className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                />
                <label
                  htmlFor="sms-consent"
                  className="ml-2 text-xs sm:text-sm text-gray-600"
                >
                  I agree to receive SMS & Whatsapp communications on this
                  number
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
              >
                Book Your Trial &rarr;
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 7. Study Digital Marketing Abroad */}
      <section className="bg-black text-white py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Study Digital Marketing Abroad
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8">
              Explore world-class opportunities to learn digital marketing in
              top countries.
            </p>
            <div className="flex flex-wrap items-center text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8">
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
                <span key={idx} className="mx-1 flex items-center">
                  <ReactCountryFlag
                    countryCode={country.code}
                    svg
                    style={{ width: "1.2em", height: "1.2em" }}
                  />
                  <span className="ml-1">{country.name}</span>
                </span>
              ))}
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              Why Choose ILT for Abroad Studies?
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              {[
                "Specialized Digital Marketing Programs",
                "International Certifications Recognized Globally",
                "Job Placement Assistance After Course Completion",
                "Exposure to Global Industry Standards",
                "Guidance for Visa & Admission Support",
              ].map((item, idx) => (
                <li key={idx}>
                  <FaCheckCircle className="inline-block text-green-500 mr-2" />{" "}
                  {item}
                </li>
              ))}
            </ul>
            <button className="mt-6 sm:mt-8 bg-green-600 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg hover:bg-green-700 transition duration-300">
              Apply Now
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/images/WhatsApp Image 2025-09-20 at 10.54.24_04457969.jpg"
              alt="Smiling Student Abroad"
              className="w-full max-w-xs sm:max-w-sm rounded-full border-4 border-green-500"
            />
          </div>
        </div>
      </section>

      {/* 8. Exclusive Job Site */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch">
          <div className="w-full lg:w-3/5 flex flex-col pr-0 lg:pr-8 pb-8 lg:pb-0">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
              <div className="flex-shrink-0">
                <img
                  src="/images/WhatsApp Image 2025-09-20 at 10.54.01_f6b5cbe5.jpg"
                  alt="Laptop showing job portal"
                  className="w-48 h-48 sm:w-64 sm:h-64 rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Exclusive Job Site for ILT Students
                </h2>
                <p className="text-sm sm:text-base text-gray-700">
                  <span className="font-bold text-green-600">ILT offers</span>{" "}
                  an exclusive job portal designed for our students whether you
                  study online or offline. This platform connects learners
                  directly with hiring companies, ensuring a smoother transition
                  from training to career.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-4 text-gray-900">
                Key Highlights:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                {[
                  "Dedicated job site only for ILT students",
                  "Verified job postings from partner companies",
                  "Placement support with resume & interview prep",
                  "Access for both online & offline learners",
                  "Real success stories from ILT graduates",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-green-600 text-base sm:text-lg mr-2 mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden lg:block border-l border-gray-300 mx-4"></div>
          <div className="w-full lg:w-2/5 flex flex-col pt-4 lg:pt-0">
            <div className="flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-green-600 to-black rounded-lg p-4 sm:p-6 text-white shadow-lg">
              <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                <h2 className="text-xs sm:text-sm font-bold mb-2">
                  Learn Anytime, Anywhere with the ILT App
                </h2>
                <p className="text-xs sm:text-sm md:text-base">
                  Take ILT anywhere! Our mobile app lets you access courses,
                  assignments, and resources anytime online or offline for a
                  seamless learning experience on the go.
                </p>
              </div>
              <div className="w-full sm:w-1/2 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="relative">
                  <img
                    src="/images/Screen Content.png"
                    alt="ILT App on mobile phone"
                    className="w-24 sm:w-32 md:w-40 rotate-3"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  {[
                    {
                      src: "/images/WhatsApp Image 2025-09-20 at 10.54.36_6c0650ca.jpg",
                      alt: "Google Play Store",
                      text1: "GET IT ON",
                      text2: "Google Play",
                    },
                    {
                      src: "/images/WhatsApp Image 2025-09-20 at 10.54.36_d69e2bc6.jpg",
                      alt: "Apple App Store",
                      text1: "Download on the",
                      text2: "App Store",
                    },
                  ].map((app, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="bg-black text-white py-2 px-4 rounded-lg flex items-center space-x-2 text-xs"
                    >
                      <img
                        src={app.src}
                        alt={app.alt}
                        className="w-8 h-5 sm:w-10 sm:h-6"
                      />
                      <div>
                        <p className="text-[9px] text-gray-400">{app.text1}</p>
                        <p className="font-semibold text-xs">{app.text2}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <button className="w-32 sm:w-40 mt-4 bg-black text-white py-2 px-4 rounded-lg font-semibold text-xs sm:text-sm">
              Download
            </button>
          </div>
        </div>
      </section>

      {/* 9. Learn More Through Our Workshops */}
      <section className="relative text-white py-12 sm:py-16 px-4 min-h-[400px] sm:min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("/images/WhatsApp Image 2025-09-20 at 10.54.00_42f6da88.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="relative z-10 container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Learn More Through Our Workshops
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
            Participate in interactive workshops to gain practical skills and
            hands-on experience guided by industry experts.
          </p>
          <button className="bg-white text-gray-900 font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
            View Upcoming Workshops
          </button>
        </div>
      </section>

      {/* 10. Our Trainers */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <p className="text-green-600 font-semibold text-center text-base sm:text-lg">
          Our Trainers
        </p>
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
          Meet Our Expert Trainers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {trainers.map((trainer, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden shadow-lg bg-gray-900 text-white"
            >
              <img
                src={trainer.imageUrl}
                alt={trainer.name}
                className="w-full h-80 sm:h-120 object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                {trainer.students}
              </div>
              <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                {trainer.rating}
              </div>
              <div
                className={`absolute bottom-0 w-full px-4 sm:px-6 py-4 sm:py-6 backdrop-blur-sm ${
                  trainer.darkBg ? "bg-black/60" : "bg-gray-800/60"
                }`}
              >
                <div className="flex gap-2 mb-2 flex-wrap">
                  {trainer.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold px-2 sm:px-3 py-1 rounded-full border border-green-400 text-green-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg sm:text-xl font-bold">{trainer.name}</h3>
                <p className="text-xs sm:text-sm mt-1">{trainer.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. Certifications */}
      <section className="bg-white py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
          {[
            "/images/WhatsApp Image 2025-09-20 at 10.54.35_aa661123.jpg",
            "/images/WhatsApp Image 2025-09-20 at 10.54.36_c7e0c520.jpg",
            "/images/WhatsApp Image 2025-09-20 at 10.54.35_aa661123.jpg",
            "/images/WhatsApp Image 2025-09-20 at 10.54.36_c7e0c520.jpg",
          ].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="Certification"
              className="h-16 sm:h-20 object-contain"
            />
          ))}
        </div>
      </section>

      {/* 12. Hear From Our Graduates */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Hear From Our Graduates
            </h2>
            <div className="text-green-600 text-4xl sm:text-5xl font-serif mb-4">
              “
            </div>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              The hands-on projects and expert guidance helped me land my first
              digital marketing job in just 3 months.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {[
                {
                  src: "/images/WhatsApp Image 2025-09-20 at 10.53.48_21cf63e0.jpg",
                  alt: "Amazon Logo",
                  width: "w-24 sm:w-32",
                },
                {
                  src: "/images/tata.jpg",
                  alt: "Tata Logo",
                  width: "w-20 sm:w-24",
                },
                {
                  src: "/images/hcl.jpg",
                  alt: "HCLTech Logo",
                  width: "w-32 sm:w-40",
                },
              ].map((logo, idx) => (
                <img
                  key={idx}
                  src={logo.src}
                  alt={logo.alt}
                  className={`h-8 sm:h-10 object-contain ${logo.width}`}
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                name: "Rayon",
                title: "Digital Marketing Executive at Wipro",
                image:
                  "/images/WhatsApp Image 2025-09-20 at 10.53.48_197251bf.jpg",
              },
              {
                name: "James",
                title: "Junior Data Analyst at Netflix",
                image:
                  "/images/WhatsApp Image 2025-09-20 at 10.53.48_02e1c4ba.jpg",
              },
              {
                name: "Sophia",
                title: "Senior Cyber Security at Microsoft",
                image:
                  "/images/WhatsApp Image 2025-09-20 at 10.53.48_9fcda950.jpg",
              },
              {
                name: "Geon",
                title: "Digital Marketing Executive at Tata",
                image:
                  "/images/WhatsApp Image 2025-09-20 at 10.53.59_65780d93.jpg",
              },
            ].map((graduate, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-6 bg-white rounded-lg shadow-lg text-center"
              >
                <img
                  src={graduate.image}
                  alt={graduate.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4"
                />
                <h4 className="font-bold text-base sm:text-xl">
                  {graduate.name}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-4">
                  {graduate.title}
                </p>
                <button className="bg-green-600 text-white font-semibold py-1.5 px-4 sm:py-2 sm:px-6 rounded-lg hover:bg-green-700 transition duration-300">
                  View Story
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Latest Insights & Tips */}
      <section className="bg-white py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h3 className="text-green-600 font-semibold text-base sm:text-lg mb-2">
              Latest Insights & Tips
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Smart Tips for Smarter Careers
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Explore quick tips, guides, and stories to help you learn, grow,
              and build a successful career. From digital marketing strategies
              to tech trends and practical insights, our blogs keep you informed
              and ready to take the next step in your professional journey.
            </p>
            <button className="bg-green-600 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
              View All Blogs
            </button>
          </div>
          <div className="w-full lg:w-2/3 relative">
            <div className="flex justify-end space-x-3 mb-6">
              <button className="p-2 sm:p-3 border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100 transition duration-300 flex items-center justify-center">
                <span className="text-lg sm:text-xl leading-none">&lt;</span>
              </button>
              <button className="p-2 sm:p-3 border border-green-600 rounded-full text-green-600 bg-white shadow-md hover:bg-gray-50 transition duration-300 flex items-center justify-center">
                <span className="text-lg sm:text-xl leading-none">&gt;</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Top 5 Digital Marketing Trends in 2025",
                  image:
                    "/images/WhatsApp Image 2025-09-20 at 10.54.01_a96567e7.jpg",
                  desc: "Stay ahead with these strategies shaping the future of digital marketing.",
                  date: "12 Aug 2025",
                },
                {
                  title: "Beginner's Guide to Python Programming",
                  image:
                    "/images/WhatsApp Image 2025-09-20 at 10.54.01_ae9542ea.jpg",
                  desc: "Simple tips to kickstart your journey into programming with Python.",
                  date: "22 Aug 2025",
                },
                {
                  title: "How Data Analytics Is Transforming Businesses",
                  image:
                    "/images/WhatsApp Image 2025-09-20 at 10.54.00_ec9b990d.jpg",
                  desc: "Explore how companies are using data to make smarter decisions.",
                  date: "24 Aug 2025",
                },
              ].map((blog, idx) => (
                <div
                  key={idx}
                  className="rounded-lg overflow-hidden shadow-lg bg-white flex flex-col"
                >
                  <div className="h-40 sm:h-48">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 bg-black text-white flex flex-col flex-grow">
                    <h4 className="font-bold text-base sm:text-lg mb-2 leading-tight">
                      {blog.title}
                    </h4>
                    <p className="text-xs sm:text-sm mb-3 text-gray-300 flex-grow">
                      {blog.desc}
                    </p>
                    <div className="flex justify-between items-center text-xs pt-2 border-t border-gray-700">
                      <button className="bg-white text-black border border-green-600 font-semibold py-1.5 px-3 rounded-md hover:bg-black hover:text-green-500 transition duration-300">
                        Read More
                      </button>
                      <span className="text-xs text-gray-400">{blog.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 14. Have Questions? We've Got Answers. */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Have Questions? We've Got Answers.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
            Here are some quick answers to help you choose the right course and
            learning mode.
          </p>
          <div className="space-y-4 text-left">
            {[
              "Who can join ILT courses?",
              "Do you provide placement support?",
              "Are classes available online?",
            ].map((question, idx) => (
              <div
                key={idx}
                className="border-b-2 border-gray-200 py-4 flex justify-between items-center cursor-pointer"
              >
                <h3 className="font-semibold text-base sm:text-lg md:text-xl text-gray-800">
                  {question}
                </h3>
                <FaPlus className="text-green-600 text-lg sm:text-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
