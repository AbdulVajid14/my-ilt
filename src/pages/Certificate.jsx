
import React from "react";
import { FaDotCircle, FaCheck } from "react-icons/fa";
import QueriesForm from "../components/CommonComponents/QueriesForm";
import Instructor from "../components/CommonComponents/Instructor";
import Questions from "../components/Home/Questions";

const Certificate = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/images/WhatsApp Image 2025-10-07 at 16.35.15_11807fe8.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-opacity-40"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold">
          Certifications
        </h1>
      </div>

      {/* Google Analytics Certification */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src="/images/WhatsApp Image 2025-09-20 at 10.54.36_c7e0c520.jpg"
            alt="Google Analytics Certificate"
            className="rounded-lg shadow-md w-full max-w-md"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Google Analytics Certification
          </h2>
          <p className="text-gray-600 mb-6">
            The Google Analytics Certification covers both basic and advanced
            concepts, equipping learners with the ability to track and analyze
            data effectively.
          </p>

          <h3 className="text-lg font-semibold mb-3">
            Benefits of Google Analytics Certification
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <FaCheck className="text-green-600 mt-1" /> Master Google
              Analytics tools for implementation & reporting
            </li>
            <li className="flex items-start gap-2">
              <FaCheck className="text-green-600 mt-1" /> Track customer
              behavior and website performance with precision
            </li>
            <li className="flex items-start gap-2">
              <FaCheck className="text-green-600 mt-1" /> Enhance your profile
              with industry-recognized expertise
            </li>
            <li className="flex items-start gap-2">
              <FaCheck className="text-green-600 mt-1" /> Strengthen reputation
              while adding value to businesses
            </li>
          </ul>
        </div>
      </section>

      {/* Google Ads Certification */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Google Ads Certification
          </h2>
          <p className="text-gray-600 mb-4">
            To earn the Google Ads Certification, students must pass two exams:
          </p>
          <ul className="mb-6 text-gray-700 space-y-2 leading-relaxed">
            <li className="flex items-start gap-2">
              <FaDotCircle className="text-green-600 mt-[6px] flex-shrink-0" />
              <span>Adwords fundamentals</span>
            </li>

            <li className="flex items-start gap-2">
              <FaDotCircle className="text-green-600 mt-[6px] flex-shrink-0" />
              <span>
                Display advertising, search advertising, video advertising,
                mobile advertising, or shopping advertising (any one)
              </span>
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-3">
            Benefits of Google Ads Certification
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <FaCheck className="text-green-600 mt-1" /> Gain in-depth
              knowledge of Google Ads tools & strategies
            </li>
            <li className="flex items-start gap-2">
              <FaCheck className="text-green-600 mt-1" /> Improve ROI with
              optimized campaign strategies
            </li>
            <li className="flex items-start gap-2">
              <FaCheck className="text-green-600 mt-1" /> Build professional
              credibility and client trust
            </li>
            <li className="flex items-start gap-2">
              <FaCheck className="text-green-600 mt-1" /> Enhance your career
              profile with a globally recognized certification
            </li>
          </ul>
        </div>

        {/* Right side — Image + Form */}
        <div className="space-y-10 md:ml-10">
          {/* New Image Block */}
          <div className="flex justify-start">
            <img
              src="/images/WhatsApp Image 2025-09-20 at 10.54.35_aa661123.jpg"
              alt="Google Ads Certificate"
              className="rounded-lg shadow-md w-full max-w-md"
            />
          </div>

          {/* Form Section */}
          <QueriesForm />
        </div>
      </section>
      <Instructor/>
      <Questions/>
    </div>
  );
};

export default Certificate;
