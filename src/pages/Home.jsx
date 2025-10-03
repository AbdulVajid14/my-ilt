
import React from "react";
import OurCourses from "../components/Home/OurCourses";
import BookTrail from "../components/Home/BookTrail";
import StudyAbroad from "../components/Home/StudyAbroad";
import AppSection from "../components/Home/AppSection";
import OurTrainers from "../components/Home/OurTrainers";
import Certificate from "../components/Home/Certificate";
import OurGraduates from "../components/Home/OurGraduates";
import HomeBlog from "../components/Home/HomeBlog";
import { useState } from "react";
import Questions from "../components/Home/Questions";
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
<OurCourses/>

      {/* 6. Learn & Grow With ILT */}
  <BookTrail/>

      {/* 7. Study Digital Marketing Abroad */}
<StudyAbroad/>
{/* App Section */}
   <AppSection/>
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
  <OurTrainers/>


      {/* 11. Certifications */}
<Certificate/>
      {/* 12. Hear From Our Graduates */}
<OurGraduates/>

      {/* 13. Latest Insights & Tips */}
  <HomeBlog/>

      {/* 14. Have Questions? We've Got Answers. */}
<Questions/>
    </div>
  );
};

export default Home;
