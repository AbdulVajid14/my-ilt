
import React, { useState, useEffect, useRef } from "react";
import {
  FaLaptop,
  FaHome,
  FaUserAlt,
  FaClock,
  FaBuilding,
  FaChalkboardTeacher,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import QueriesForm from "../components/CommonComponents/QueriesForm";
import OurGraduates from "../components/Home/OurGraduates";
import CommonCourses from "../components/CommonComponents/CommonCourses";
import ModeFaq from "../components/CommonComponents/ModeFaq";
const modes = [
  { id: "online", label: "Online", icon: <FaLaptop className="w-6 h-6" /> },
  { id: "inhouse", label: "In-House Trainingline", icon: <FaHome className="w-6 h-6" /> },
  { id: "individual", label: "Individual", icon: <FaUserAlt className="w-6 h-6" /> },
  { id: "privateseo", label: "Private SEO Training", icon: <FaClock className="w-6 h-6" /> },
  { id: "corporate", label: "Corporate", icon: <FaBuilding className="w-6 h-6" /> },
  { id: "workshop", label: "Workshop", icon: <FaChalkboardTeacher className="w-6 h-6" /> },
];

const trainings = {
  online: {
    title: "Online Training",
    description:
      "The dedicated online training team of ILT is well equipped to offer very interactive training sessions via web irrespective of your location.",
    points: [
      "Live virtual classes with expert mentors",
      "Access recorded sessions anytime",
      "Online assignments and quizzes",
      "Interactive learning from home",
      "Flexible schedules for working professionals",
      "Digital resources and support community",
    ],
    image: "/images/WhatsApp Image 2025-10-08 at 15.14.00_eb1ba92e.jpg",
  },

  inhouse: {
    title: "In-House Training",
    description:
      "In-house training provides hands-on-training experience in the most lucid and interactive manner and shall be conducted in the training center.",
    points: [
      "Interactive in-office training sessions",
      "Mentor-led hands-on guidance",
      "Group discussions and teamwork activities",
      "Customized learning for your company needs",
      "Real-time project-based learning",
      "Instant doubt clarification and feedback",
    ],
    image: "/images/WhatsApp Image 2025-10-08 at 15.14.00_eb1ba92e.jpg",
  },

  individual: {
    title: "Individual Training",
    description:
      "One-on-one mentorship tailored to your skill level, learning pace, and goals.",
    points: [
      "Personalized learning experience",
      "Flexible timing as per your schedule",
      "Direct mentor feedback & review",
      "Focus on specific topics or goals",
      "Dedicated attention for better results",
      "Continuous performance tracking",
    ],
    image: "/images/WhatsApp Image 2025-10-08 at 15.14.00_eb1ba92e.jpg",
  },

  privateseo: {
    title: "Private SEO Training",
    description:
      "ILT team conducts corporate training sessions to educate employees and teams on various digital marketing concepts and projects.",
    points: [
      "SEO strategies for corporate teams",
      "Understanding on-page & off-page optimization",
      "Keyword research and competitor analysis",
      "Real-time SEO tools and analytics training",
      "Hands-on implementation on live projects",
      "Improve overall digital marketing performance",
    ],
    image: "/images/WhatsApp Image 2025-10-08 at 15.14.00_eb1ba92e.jpg",
  },

  corporate: {
    title: "Corporate Training",
    description:
      "Offers complete SEO training including the most advanced SEO techniques and practices in one-to-one mode.",
    points: [
      "Tailored curriculum for organizations",
      "On-site or remote corporate sessions",
      "Team collaboration projects",
      "Skill gap analysis & improvement",
      "Real-world business case studies",
      "Performance reports & certification",
    ],
    image: "/images/WhatsApp Image 2025-10-08 at 15.14.00_eb1ba92e.jpg",
  },

  workshop: {
    title: "Workshop Training",
    description:
      "Hands-on practical workshops focusing on real-time projects and tools.",
    points: [
      "Short-term intensive sessions",
      "Real project implementation",
      "Industry expert mentors",
      "Collaborative group learning",
      "Interactive Q&A and feedback",
      "Certificate of completion",
    ],
    image: "/images/WhatsApp Image 2025-10-08 at 15.14.00_eb1ba92e.jpg",
  },
};

function ModalPage() {
       useEffect(() => {
      document.title = "ILT Program Modes | Online & Classroom Digital Marketing Training";
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
        "Explore ILT’s digital marketing program formats: instructor-led classroom sessions, flexible online training, and specialized corporate modules."
      );
      const metaKeywords =
        document.querySelector("meta[name='keywords']") ||
        (() => {
          const meta = document.createElement("meta");
          meta.name = "keywords";
          document.head.appendChild(meta);
          return meta;
        })();
  
      metaKeywords.setAttribute(
        "content",
        "ILT Program Modes | Online & Classroom Digital Marketing Training"
      );
    }, []);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const modeFromQuery = params.get("mode");
  const [selectedMode, setSelectedMode] = useState(modeFromQuery || "online");

  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    if (modeFromQuery) setSelectedMode(modeFromQuery);
  }, [modeFromQuery]);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeftArrow(el.scrollLeft > 0);
    setShowRightArrow(el.scrollLeft + el.clientWidth < el.scrollWidth - 1); // -1 for floating point precision
  };

useEffect(() => {
  const el = scrollRef.current;
  if (!el) return;

  let ticking = false;

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  };

  el.addEventListener("scroll", onScroll);
  handleScroll();

  return () => el.removeEventListener("scroll", onScroll);
}, []);


  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -150, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 150, behavior: "smooth" });
  };
const handleModeChange = (modeId) => {
  setSelectedMode(modeId);

  // update the URL without reloading
  const searchParams = new URLSearchParams(location.search);
  searchParams.set("mode", modeId);
  window.history.pushState({}, "", `${location.pathname}?${searchParams.toString()}`);
};

  return (
    <div className="min-h-screen bg-white">
      {/* ===== Banner ===== */}
      <div
        className="w-full bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('/images/WhatsApp Image 2025-10-08 at 15.14.00_18f25042.jpg')",
          height: "400px",
        }}
      >
       <div
  className="absolute inset-0 flex items-center justify-start pl-4 sm:pl-12 lg:pl-24"
>
  <h1 className="text-white text-4xl font-bold">
    Modes of Training
  </h1>
</div>


      </div>

      {/* ===== Content ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ===== Mode Buttons ===== */}
        <div className="relative border rounded-md shadow-sm">
          <div
            ref={scrollRef}
            className="flex flex-nowrap md:flex-wrap text-center divide-x divide-gray-200 overflow-x-auto md:overflow-visible scrollbar-hide"
          >
            {modes.map((mode, idx) => (
              <button
                key={mode.id}
                onClick={() => handleModeChange(mode.id)}
                className={`flex-none md:flex-1 p-4 flex flex-col items-center space-y-2 cursor-pointer transition-all duration-300
                  ${
                    selectedMode === mode.id
                      ? "bg-green-100 text-green-700 font-semibold"
                      : "text-gray-700 hover:bg-gray-50"
                  }
                  ${idx === 0 ? "rounded-l-md" : ""}
                  ${idx === modes.length - 1 ? "rounded-r-md" : ""}
                `}
                aria-pressed={selectedMode === mode.id}
              >
                {mode.icon}
                <span>{mode.label}</span>
              </button>
            ))}
          </div>

          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow-md text-gray-600 hover:text-green-700 md:hidden z-10"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow-md text-gray-600 hover:text-green-700 md:hidden z-10"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* ===== Selected Mode Details ===== */}
        {trainings[selectedMode] && (
          <div className="mt-12 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-3">
                {trainings[selectedMode].title}
              </h2>
              <p className="text-gray-600 mb-6">
                {trainings[selectedMode].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trainings[selectedMode].points.map((point, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <FaCheckCircle className="text-green-600 w-4 h-4 flex-shrink-0" />
                    <p className="font-semibold text-gray-800">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 max-w-md rounded-lg overflow-hidden shadow-lg">
              <img
                src={trainings[selectedMode].image}
                alt={trainings[selectedMode].title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">  
        <CommonCourses />
        <div className="mt-15">
          <QueriesForm />
        </div>
      </div>

      <OurGraduates/>
      <ModeFaq/>
    </div>
  );
}

export default ModalPage;