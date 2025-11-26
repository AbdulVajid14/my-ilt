import React, {
  useState,
  useEffect,
  Suspense,
  memo,
  useMemo,
  useCallback,
} from "react";
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
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
// import QueriesForm from "../components/CommonComponents/QueriesForm";

const QueriesForm = React.lazy(() =>
  import("../components/CommonComponents/QueriesForm")
);
const OurTrainers = React.lazy(() => import("../components/Home/OurTrainers"));
const OurGraduates = React.lazy(() =>
  import("../components/Home/OurGraduates")
);
const PlacementHighlights = React.lazy(() =>
  import("../components/Home/PlacementHighlights")
);

const ToolItem = memo(({ src, alt }) => (
  <div
    className="flex justify-center items-center p-2 sm:p-3 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition w-full max-w-[120px] sm:max-w-none"
    title={alt}
  >
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="h-8 sm:h-10 lg:h-12 w-auto max-h-12 object-contain"
    />
  </div>
));

const digitalMarketingTools = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    alt: "Google",
  },
  { src: "/images/canva.jpg", alt: "Canva" },
  { src: "/images/google-trends.jpg", alt: "Google Trends" },
  { src: "/images/elemenator.jpg", alt: "Elementor" },
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
  const [openFaqId, setOpenFaqId] = useState(null);

  // Memoized toggle function
  const toggleFaq = useCallback((id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  }, []);

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

          if (!found) {
            setError("Course not found.");
            return;
          }

          // Process all course data in one go — memoized below
          const learnPoints = found.program_modules
            .split(".\r\n")
            .map((s) => s.trim())
            .filter(Boolean);

          const outcomes = found.learning_outcomes
            .split(".\r\n")
            .map((s) => s.trim())
            .filter(Boolean);

          const weeklySchedule = outcomes.map((title, i) => ({
            id: i + 1,
            title,
          }));

          const careerOpportunities = found.opportunities
            ? found.opportunities
                .split(/\r?\n/)
                .map((s) => s.trim().replace(/\.$/, ""))
                .filter(Boolean)
            : [];

          const rawQuestions = found.question
            ? found.question
                .split('","')
                .map((q) => q.replace(/^"|"$/g, "").trim())
            : [];

          const rawAnswers = found.answer
            ? found.answer
                .split('","')
                .map((a) => a.replace(/^"|"$/g, "").trim())
            : [];

          const faqs = rawQuestions
            .map((q, i) => ({
              id: i + 1,
              question: q,
              answer: rawAnswers[i] || "",
            }))
            .filter((faq) => faq.question && faq.answer);

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
            { icon: <FaBook />, label: "Modules:", value: found.modules },
            { icon: <BiTimeFive />, label: "Time:", value: found.time },
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
            { icon: <FaLaptop />, label: "Mode:", value: found.mode },
          ];

          const processedCourse = {
            title: found.name,
            bannerImage: found.image,
            videoImage: `${import.meta.env.VITE_BASE_URL_IMAGE}${found.image}`,
            overview: found.description,
            learnPoints,
            features,
            certificationText: found.career_opportunities,
            weeklySchedule,
            careerOpportunities,
            metaTitle: found.metaTitle,
            metaDescription: found.metaDescription,
            metaKeywords: found.metaKeywords,
            faqs,
            rating: found.rating,
            reviews: found.reviews,
          };

          setCourse(processedCourse);
        } else {
          setError("Failed to fetch course data.");
        }
      } catch (err) {
        setError("Error fetching course details.");
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [slug]);

  // Update meta tags only when course changes
  useEffect(() => {
    if (!course) return;

    document.title = course.metaTitle || course.title || "Course Details";

    const metaDescription =
      document.querySelector("meta[name='description']") ||
      document.createElement("meta");
    if (!metaDescription.parentNode) {
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = course.metaDescription || course.overview || "";

    const metaKeywords =
      document.querySelector("meta[name='keywords']") ||
      document.createElement("meta");
    if (!metaKeywords.parentNode) {
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = course.metaKeywords || "";
  }, [course]);

  // Memoize expensive computations
  const filteredFeatures = useMemo(() => {
    if (!course) return [];
    return course.features.filter(
      ({ value }) => value != null && value !== "" && value !== "Soon"
    );
  }, [course?.features]);

  const ratingValue = useMemo(
    () => parseFloat(course?.rating) || 4.9,
    [course?.rating]
  );

  // Render nothing while loading
  if (loading) {
    return (
      <div>
        <section className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-200 animate-pulse" />
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="text-center py-12">{error || "Course not found"}</div>
    );
  }

  return (
    <div className="mx-auto">
      {/* Hero Section */}
      <section className="relative w-full h-64 sm:h-80 md:h-96 flex items-center">
        <img
          src="/images/course-detail.webp"
          alt="Course Banner"
          fetchpriority="high"
          width="1920"
          height="900"
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative w-full px-6 flex justify-start">
          <div className="max-w-3xl w-full">
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg text-left">
              {course.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col lg:flex-row gap-10">
        {/* Left Column */}
        <div className="flex-1 space-y-8 lg:pr-6 order-1">
          {/* Rating */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 text-sm font-medium text-gray-900 min-w-0">
              <div className="flex items-center space-x-1 flex-shrink-0">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < Math.round(ratingValue)
                        ? "text-yellow-900"
                        : "text-gray-300"
                    } w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0`}
                  />
                ))}
                <span className="text-gray-900 font-semibold ml-1 sm:ml-2 text-xs sm:text-sm">
                  {course.rating ? `${course.rating}/5` : "4.9/5"}
                </span>
                {course.reviews && (
                  <span className="text-gray-900 text-xs sm:text-sm ml-1">
                    ({course.reviews} reviews)
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
              {course.title}
            </h2>
            <p className="text-gray-900 leading-relaxed notranslate">
              {course?.overview || (
                <span className="opacity-0">placeholder text for LCP</span>
              )}
            </p>
          </div>

          {/* Video/Image */}
          <div className="relative w-full aspect-video max-w-full rounded-lg overflow-hidden cursor-pointer">
            <img
              src={course.videoImage}
              alt="Course Presentation"
              fetchpriority="high"
              loading="eager"
              decoding="async"
              width="1280"
              height="720"
              className="w-full h-full object-cover"
            />
          </div>

          {/* What You'll Learn */}
          <div className="space-y-4 sm:space-y-5">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              What You’ll Learn
            </h2>
            <p className="text-gray-900 text-base sm:text-lg">
              By the end of this course, you will be able to:
            </p>
            <ul className="space-y-3 sm:space-y-4">
              {course.learnPoints.map((text, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-3"
                >
                  <FaCheck className="text-green-900 mt-1 flex-shrink-0 text-lg sm:text-xl" />
                  <span className="font-semibold text-gray-900 text-sm sm:text-base leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Details / Certification */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-3">
              Details
            </h2>
            <p className="text-gray-900 text-sm sm:text-lg leading-relaxed max-w-4xl">
              {course.certificationText}
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-[35%] w-full flex-shrink-0 space-y-6 order-2">
          <Suspense fallback={<></>}>
            <QueriesForm />
          </Suspense>

          <div className="bg-gray-50 rounded-lg p-4 sm:p-6 flex flex-col items-center text-center space-y-4">
            <img
              src="/images/CEO Pic.webp"
              alt="CEO"
              loading="lazy"
              className="w-60 h-55 sm:w-80 sm:h-70 object-cover rounded-lg"
            />
            <div className="w-full text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Jitto Jose - Founder & Lead Trainer
              </h3>
            </div>
            <ul className="space-y-2 text-gray-900 text-sm sm:text-base">
              {[
                "20+ Years Experience",
                "MBA with Digital Marketing London",
                "Ex Digital Marketing Manager Jet Airways",
                "50 Cr Ad Spend on Digital",
              ].map((point, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <FaCheck className="text-green-900 mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg p-4 sm:p-6 w-full max-w-sm lg:max-w-md bg-gray-50">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Course Features
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-gray-900">
              {filteredFeatures.map(({ icon, label, value }) => (
                <li
                  key={label}
                  className="flex items-center justify-between space-x-2 sm:space-x-3"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                    <span className="text-green-900 text-lg sm:text-xl flex-shrink-0">
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
        </div>
      </section>

      {/* Weekly Schedule & Career Opportunities */}
      <section className="flex flex-col lg:flex-row gap-6 lg:gap-12 border border-gray-300 rounded-lg p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto my-8 sm:my-12">
        <div className="flex-1">
          <h3 className="font-semibold text-xl sm:text-2xl mb-4 sm:mb-5 text-gray-900">
            Course Topics
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-gray-900">
            {course.weeklySchedule.map(({ id, title }) => (
              <li key={id} className="flex items-center space-x-2 sm:space-x-3">
                <span className="block w-2 h-2 sm:w-3 sm:h-3 bg-green-600 rounded-full flex-shrink-0"></span>
                <p className="text-sm sm:text-lg leading-relaxed">{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-xl sm:text-2xl mb-4 sm:mb-5 text-gray-900">
            Career Opportunities
          </h3>
          <p className="text-gray-900 mb-3 sm:mb-4 text-sm sm:text-lg">
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
            <ToolItem key={alt} src={src} alt={alt} />
          ))}
        </div>
      </section>

      <Suspense fallback={<></>}>
        <OurTrainers />
      </Suspense>
      <Suspense fallback={<></>}>
        <PlacementHighlights />
      </Suspense>
      <Suspense fallback={<></>}>
        <OurGraduates />
      </Suspense>

      {/* FAQ Section */}
      {course.faqs && course.faqs.length > 0 && (
        <section className="py-12 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Have Questions? We've Got Answers.
            </motion.h2>
            <p className="text-base sm:text-lg text-gray-900 mb-8 sm:mb-12">
              Here are some quick answers to help you choose the right course
              and learning mode.
            </p>

            <div className="space-y-4 text-left">
              {course.faqs.map((faq) => (
                <div key={faq.id} className="border-b-2 border-gray-200 py-4">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <h3 className="font-semibold text-base sm:text-lg md:text-xl text-gray-900">
                      {faq.question}
                    </h3>
                    {openFaqId === faq.id ? (
                      <FaMinus className="text-green-900 text-lg sm:text-2xl" />
                    ) : (
                      <FaPlus className="text-green-900 text-lg sm:text-2xl" />
                    )}
                  </div>

                  <AnimatePresence>
                    {openFaqId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 text-gray-900 text-sm sm:text-lg"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CourseDetails;
