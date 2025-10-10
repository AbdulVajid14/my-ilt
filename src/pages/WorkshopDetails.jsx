import React from "react";
import { FaCheck } from "react-icons/fa";
import Questions from "../components/Home/Questions";
import { useParams } from "react-router-dom";
import CommonCourses from "../components/CommonComponents/CommonCourses";

const workshopData = {
  "master-seo-analytics": {
    title: "Master SEO & Analytics",
    image: "/images/WhatsApp Image 2025-10-08 at 10.27.53_65c77a16.jpg",
    about:
      "The Master SEO & Analytics Workshop is designed to give participants in-depth knowledge of SEO and analytics, combining theory with practical sessions to improve website performance and visibility.",
    videoImage: "/images/WhatsApp Image 2025-10-08 at 10.27.53_637bf11b.jpg",
    keyHighlights: [
      "Advanced Keyword Research & Competitor Analysis",
      "On-Page & Off-Page SEO Strategies",
      "Hands-on Case Studies & Live Projects",
      "Technical SEO: Site Audits & Fixes",
      "Google Analytics & Search Console Deep Dive",
      "Measuring KPIs & Creating Performance Reports",
    ],
    outcome:
      "By the end of this workshop, participants will be able to design and execute successful SEO campaigns while using analytics to make data-driven decisions.",
  },
  "social-media-ads-strategy": {
    title: "Social Media Ads Strategy",
    image: "/images/WhatsApp Image 2025-10-08 at 10.27.54_abcdef12.jpg",
    about:
      "The Social Media Ads Strategy Workshop helps participants master paid advertising on platforms like Facebook, Instagram, and LinkedIn. Learn how to craft powerful campaigns that convert and grow your brand presence.",
    videoImage: "/images/WhatsApp Image 2025-10-08 at 10.27.53_637bf11b.jpg",
    keyHighlights: [
      "Understanding Social Media Advertising Ecosystem",
      "Facebook & Instagram Ads Setup & Targeting",
      "Ad Creative Design & Copywriting Techniques",
      "Budget Optimization & Bidding Strategies",
      "A/B Testing for Ad Performance",
      "Tracking Metrics & ROI with Meta Ads Manager",
    ],
    outcome:
      "By the end of this workshop, participants will be able to create, run, and analyze high-performing ad campaigns across major social media platforms.",
  },
};

const WorkshopDetails = () => {
  const { slug } = useParams();
  const workshop = workshopData[slug];

  if (!workshop) {
    return <h2 className="text-center mt-10">Workshop not found.</h2>;
  }
  return (
    <div className="mx-auto">
      {/* Header Section */}
      <div
        className="relative bg-center bg-cover h-64 sm:h-72 md:h-120 flex items-center justify-center mb-12"
        style={{
          backgroundImage:
            "url('/images/WhatsApp Image 2025-10-08 at 10.27.53_65c77a16.jpg')",
        }}
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold bg-opacity-50 px-6 py-3 rounded">
          {workshop.title}
        </h1>
      </div>

      {/* About the Workshop */}
      <section className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-2xl font-semibold mb-4">About the Workshop</h2>
        <p className="text-gray-600 text-xl leading-relaxed">
          {workshop.about}
        </p>
      </section>

      {/* Video Section */}
      <section className="max-w-7xl mx-auto mb-16 relative">
        <img
          src={workshop.videoImage}
          alt="Workshop Presentation"
          className="w-full rounded-lg shadow-lg"
        />
        <button
          aria-label="Play Video"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white rounded-full p-6 shadow-lg focus:outline-none focus:ring-4 focus:ring-green-400"
        >
          <svg
            className="w-10 h-10"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </section>

      {/* Key Highlights */}
      <section className="max-w-7xl mx-auto mb-16">
        <h3 className="text-xl font-semibold mb-6">Key Highlights</h3>

        {/* Split into two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column (first 3 items) */}
          <ul className="space-y-4 text-gray-700 text-lg">
            {workshop.keyHighlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="flex items-start">
                <FaCheck className="text-green-600 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Right Column (remaining items) */}
          <ul className="space-y-4 text-gray-700 text-lg">
            {workshop.keyHighlights.slice(3).map((highlight, index) => (
              <li key={index + 3} className="flex items-start">
                <FaCheck className="text-green-600 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Outcome */}
      <section className="max-w-7xl mx-auto mb-16">
        <h3 className="text-3xl font-semibold text-green-600 mb-4">Outcome</h3>
        <p className="text-gray-800 text-xl font-semibold">
          {workshop.outcome}
        </p>
      </section>

      {/* Explore More Courses */}
      <section className="max-w-7xl mx-auto" >
     <CommonCourses/>
      </section>

      <Questions />
    </div>
  );
};

export default WorkshopDetails;
