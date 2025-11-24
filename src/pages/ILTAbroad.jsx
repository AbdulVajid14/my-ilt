import React, { useState, useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import QueriesForm from "../components/CommonComponents/QueriesForm";
import Questions from "../components/Home/Questions";
import AbroadCourses from "../components/CommonComponents/AbroadCourses";
import { Link } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "sonner";
// import ReCAPTCHA from "react-google-recaptcha";
import AbroadFaq from "../components/CommonComponents/AbroadFaq";
import TopUniversities from "../components/CommonComponents/TopUniversities";

const ILTAbroad = () => {
  const recaptchaRef = useRef(null);
  const countries = [
    { name: "UK", value: "uk", flag: "/images/uk.jpg" },
    { name: "Canada", value: "canada", flag: "/images/canada.jpg" },
    { name: "New Zealand", value: "new-zealand", flag: "/images/newzland.jpg" },
    { name: "Australia", value: "australia", flag: "/images/australia.jpg" },
    { name: "France", value: "france", flag: "/images/france.jpg" },
    { name: "Germany", value: "germany", flag: "/images/germany.jpg" },
    { name: "Ireland", value: "ireland", flag: "/images/ireland.jpg" },
    {
      name: "Netherlands",
      value: "netherlands",
      flag: "/images/netherland.jpg",
    },
    { name: "Spain", value: "spain", flag: "/images/spain.jpg" },
    { name: "USA", value: "usa", flag: "/images/usa.jpg" },
  ];

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    country: "",
    program: "",
    qualification: "",
    experience: "",
    massage: "",
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });
  const [courses, setCourses] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [reviewsError, setReviewsError] = useState(null);

  useEffect(() => {
    document.title =
      "MBA/MSc Digital Marketing Abroad | UK, Canada, Australia, USA, Germany Consultant";
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
      "Study MBA/MSc Digital Marketing in the UK, Canada, Australia, USA & Germany with Internet Leads Training (ILT)—the exclusive study abroad consultant only for Digital Marketing programs."
    );
    const metaKeywords =
      document.querySelector("meta[name='keywords']") ||
      (() => {
        const meta = document.createElement("meta");
        meta.name = "keywords";
        document.head.appendChild(meta);
        return meta;
      })();

    metaKeywords.setAttribute("content", "Training Courses");
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setReviewsLoading(true);
        setReviewsError(null);

        const res = await axios.get(
          `${
            import.meta.env.VITE_BASE_URL
          }/admin/reviews?limit=12&offset=0&status=1`
        );

        if (res.data.success) {
          // Sort by newest first (optional)
          const sorted = res.data.data.sort(
            (a, b) => new Date(b.created) - new Date(a.created)
          );
          setReviews(sorted);
        } else {
          throw new Error(res.data.message || "Failed to load reviews");
        }
      } catch (err) {
        console.error("Reviews fetch error:", err);
        setReviewsError(
          err.response?.data?.message ||
            "Could not load success stories. Please try again later."
        );
      } finally {
        setReviewsLoading(false);
      }
    };

    fetchReviews();
  }, []);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/courses`)
      .then((response) => {
        if (response.data.success) {
          const sortedCourses = response.data.data
            .sort((a, b) => (a.sequence || 0) - (b.sequence || 0))
            .filter((c) => c.category_id === 3)
            .slice(0, 2)
            .map((c) => ({
              id: c.id,
              name: c.name,
            }));
          setCourses(sortedCourses);
        }
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: null, error: null });

    // const token = recaptchaRef.current.getValue();
    // if (!token) {
    //   setFormStatus({
    //     loading: false,
    //     success: null,
    //     error: "Please complete the reCAPTCHA",
    //   });
    //   toast.error("Please complete the reCAPTCHA");
    //   return;
    // }

    // Basic client-side validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.contact ||
      !formData.massage
    ) {
      setFormStatus({
        loading: false,
        success: null,
        error:
          "Please fill out all required fields (Name, Email, Mobile No, Message).",
      });
      toast.error("Please fill out all required fields.");
      return;
    }

    // Log formData for debugging
    console.log("Form Data Submitted:", { ...formData });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/InsertFranchise`,
        { ...formData }
      );
      setFormStatus({
        loading: false,
        success: response.data.message,
        error: null,
      });
      toast.success(
        response.data.message || "Application submitted successfully!"
      );
      setFormData({
        name: "",
        email: "",
        contact: "",
        country: "",
        program: "",
        qualification: "",
        experience: "",
        massage: "",
      });
      // recaptchaRef.current.reset();
    } catch (error) {
      console.error("Form Submission Error:", error.response?.data || error);
      setFormStatus({
        loading: false,
        success: null,
        error:
          error.response?.data?.message ||
          "Failed to submit the form. Please try again.",
      });
      toast.error(
        error.response?.data?.message || "Failed to submit the form."
      );
      // recaptchaRef.current.reset();
    }
  };

  return (
    <div className="w-full">
      <Toaster position="top-right" richColors />
      {/* Banner */}
      <section
        className="relative w-full bg-cover bg-center h-[400px] flex items-center justify-start text-white text-4xl font-bold"
        style={{
          backgroundImage: "url('/images/abroads.webp')",
        }}
      >
        <h1 className="text-left px-4 sm:px-12 lg:px-24">
          MBA / MSc Digital Marketing Abroad – Study in the UK, Canada,
          Australia, USA, Germany & New Zealand
        </h1>
      </section>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT SECTION */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700 mb-8 max-w-4xl">
              The MBA / MSc Digital Marketing Abroad Program prepares students
              to study advanced digital marketing in top countries like the UK,
              Canada, Australia, USA, Germany, and New Zealand. Internet Leads
              Training (ILT), India’s #1 Digital Marketing Institute,
              specializes exclusively in guiding students for Masters-level
              Digital Marketing programs abroad. We help students choose the
              right course, apply to top universities, prepare for interviews,
              and build a strong academic + digital marketing portfolio. Our CEO
              & Founder Jitto Jose, who completed his MBA in Digital Marketing
              in London and worked as a Digital Marketing Head in London, brings
              deep expertise to help students settle abroad. The program is
              ideal for students and working professionals who want to build an
              international digital marketing career with high-paying
              opportunities. Our support includes admission guidance, SOP prep,
              profile building, internship assistance, and digital marketing
              skill training to boost employability in foreign countries.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <img
                src="/images/abroads-2.webp"
                alt="Group meeting"
                loading="lazy"
                decoding="async"
                className="w-full h-64 object-cover rounded-md"
                width={600}
                height={400}
              />

              <img
                src="/images/abroads-3.webp"
                alt="Working on laptop"
                loading="lazy"
                decoding="async"
                className="w-full h-64 object-cover rounded-md"
                width={600}
                height={400}
              />
            </div>
          </div>

          {/* RIGHT SECTION (FORM) */}
          <div className="w-full">
            <QueriesForm />
          </div>
        </div>
      </section>

      {/* Why Choose ILT */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          {/* LEFT CONTENT */}
          <div className="flex-[1.3]">
            <h2 className="text-4xl font-semibold mb-8">
              Why Choose ILT for Abroad Studies?
            </h2>

            <ul className="space-y-4 text-gray-800 text-lg">
              {[
                "Specialized Digital Marketing Programs",
                "International Certifications Recognized Globally",
                "Job Placement Assistance After Course Completion",
                "Exposure to Global Industry Standards",
                "Guidance for Visa & Admission Support",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-600 mt-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col items-center text-center md:text-left md:ml-[-40px]">
            <img
              src="/images/ceo.jpg"
              alt="CEO"
              loading="lazy"
              decoding="async"
              width={256}
              height={256}
              className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-xl shadow-md"
            />

            <h1 className="text-xl font-semibold mt-4">
              Jitto Jose - CEO & Founder
            </h1>
            <h3 className="text-gray-700">MBA Digital Marketing, London</h3>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-gray-900">
            Countries You Can Choose
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6 justify-items-center">
            {countries.map((country, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-14 h-10 object-cover rounded-md shadow-sm mb-3"
                />
                <p className="text-gray-700 font-medium">{country.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TopUniversities />
      {/* How ILT Helps You */}
      <section
        className="px-6 py-28 md:py-24 bg-black text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/pointsBanner.webp')",
        }}
      >
        <div className="absolute top-0 left-0 w-48 h-32 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-green-600 rounded-full opacity-80 flex items-center justify-center -translate-y-[60%]">
          <h2 className="text-xl md:text-2xl font-bold text-white text-center px-4 translate-y-10 md:translate-y-14">
            How ILT Helps You
          </h2>
        </div>

        <div className="flex-1 z-10 mt-0 sm:mt-20 md:mt-0 md:ml-64 lg:ml-96">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 text-lg md:text-xl font-medium">
            {[
              "Personalized counseling to choose the right country and program",
              "Assistance with applications, admissions & scholarships",
              "Guidance for student visa and travel process",
              "Pre-departure orientation for a smooth transition",
              "Ongoing mentorship and placement guidance",
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-4">
                <FaCheck className="text-green-500 mt-1 text-2xl flex-shrink-0" />
                <p className="leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Student Success Stories
        </h2>

        {/* Loading State */}
        {reviewsLoading && (
          <p className="text-center text-gray-600">Loading...</p>
        )}

        {/* Error State */}
        {reviewsError && (
          <p className="text-center text-red-500">{reviewsError}</p>
        )}

        {/* If no reviews */}
        {!reviewsLoading && reviews.length === 0 && (
          <p className="text-center text-gray-500">No reviews found.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="grid grid-cols-1 sm:grid-cols-2">
              {/* Image */}
              <img
                src={`${import.meta.env.VITE_BASE_URL_IMAGE}${review.image}`}
                alt={review.name}
                className="w-full h-full object-cover"
              />

              {/* Text Box */}
              <div className="bg-black text-white p-6 flex flex-col justify-center">
                <p className="leading-relaxed mb-4">“{review.details}”</p>

                <p className="text-right font-semibold">{review.name}</p>

                <p className="text-right text-green-400 text-sm">
                  {review.post}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <img
            src="/images/abroads-4.webp"
            alt="Graduates"
            loading="lazy"
            decoding="async"
            width={1200}
            height={700}
            className="w-full h-[350px] md:h-[450px] object-cover rounded-xl shadow-md"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-6 md:p-8 rounded-xl shadow-md"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Mobile No"
              className="p-3 border border-gray-300 rounded"
              required
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded"
            >
              <option value="">Preferred Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country.value}>
                  {country.name}
                </option>
              ))}
            </select>
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded"
            >
              <option value="">Program</option>
              {courses.map((course) => (
                <option key={course.id} value={course.name}>
                  {course.name}
                </option>
              ))}
            </select>
            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded"
            >
              <option value="">Highest Qualification</option>
              <option value="bachelor">Bachelor's</option>
              <option value="master">Master's</option>
              <option value="phd">PhD</option>
            </select>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded sm:col-span-2 md:col-span-1"
            >
              <option value="">Experience</option>
              <option value="fresher">Fresher</option>
              <option value="1-2">1-2 Years</option>
              <option value="3+">3+ Years</option>
            </select>
            <textarea
              name="massage"
              value={formData.massage}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="p-3 border border-gray-300 rounded sm:col-span-2"
              required
            ></textarea>
            {/* <div className="mb-4 sm:col-span-2">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              />
            </div> */}
            <button
              type="submit"
              disabled={formStatus.loading}
              className={`bg-green-600 text-white font-semibold rounded px-6 py-3 sm:col-span-2 hover:bg-green-700 transition ${
                formStatus.loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {formStatus.loading ? "Submitting..." : "Apply Now >"}
            </button>
          </form>
        </div>
      </section>
      <AbroadFaq />
    </div>
  );
};

export default ILTAbroad;
