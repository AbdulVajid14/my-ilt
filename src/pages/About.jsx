import { useState,useEffect } from "react";
import React from "react";
import {
  FaBullseye,
  FaEye,
  FaStar,
  FaLaptop,
  FaRibbon,
  FaCheckCircle,
} from "react-icons/fa";

const About = () => {
   useEffect(() => {
    document.title = "About Us | Kerala’s Most Trusted Digital Marketing Institute in Cochin";
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
      "Internet Leads Training (ILT) stands as Kerala’s trusted digital marketing institute, offering practical, career-oriented courses from Cochin with expert industry guidance."
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
      "About Us | Kerala’s Most Trusted Digital Marketing Institute in Cochin"
    );
  }, []);

  return (
    <div>
      {/* Hero Section - Full Width */}
      <div
        className="relative w-full h-64 sm:h-96 flex items-center justify-start bg-center bg-cover"
        style={{
          backgroundImage:
            "url('/images/WhatsApp Image 2025-10-03 at 16.09.27_906d37b7.jpg')",
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
    <h1 className="text-white text-4xl sm:text-5xl font-extrabold drop-shadow-lg">
      About Us
    </h1>
  </div>
      </div>

      {/* Page Content - inside container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <div className="mt-10 flex flex-col md:flex-row gap-10">
          {/* Left Card */}
          <div className="md:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-green-600 p-6 text-white font-bold text-center text-xl sm:text-2xl">
              Jitto Jose
              <div className="text-sm font-normal mt-1">
                CEO & Founder
              </div>
            </div>
            <img
              src="/images/WhatsApp Image 2025-09-20 at 10.53.59_635566b4.jpg"
              alt="Jitto Jose"
              className="w-full object-cover aspect-[3/4]"
            />
            <div className="flex border-t border-gray-300 text-gray-700">
              <div className="flex-1 p-4 border-r border-gray-300">
                <p className="text-green-600 font-semibold mb-1">Experience</p>
                <p className="font-bold text-lg">15+ years</p>
              </div>
              <div className="flex-1 p-4">
                <p className="text-green-600 font-semibold mb-1">
                  Qualification
                </p>
                <p>Google Adwords & Analytics certified Professional</p>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="md:w-2/3 flex flex-col justify-center">
            <h2 className="font-bold text-xl sm:text-4xl mb-4">
              Hello and welcome to Internet Leads Training!
            </h2>
            <p className="text-gray-700 text-xl mb-4">
              <span className="text-green-600 font-semibold">
                When I started ILT,
              </span>{" "}
              my vision was to create a place where learning goes beyond theory
              and translates into real-world success. Too often, students
              complete courses but lack the confidence to apply their knowledge.
              At ILT, we solve this by combining expert mentorship, practical
              projects, and career support.
            </p>
            <p className="text-gray-700 text-xl mb-4 font-semibold">
              Our guiding values of excellence, integrity, and student success
              ensure that every learner receives the right balance of knowledge
              and practical exposure. My commitment is to help each student step
              out industry-ready, confident, and prepared for a bright career
            </p>
            <p className="text-gray-700 text-xl font-semibold">
              Thank you for choosing ILT as your partner in building your
              future.
            </p>
          </div>
        </div>

        {/* Who We Are Section */}
        <section className="mt-20 text-center px-4">
          <h3 className="text-2xl font-bold mb-6">Who We Are</h3>
          <p className="max-w-5xl mx-auto text-gray-700 mb-10 text-lg">
            Internet Leads Training (ILT) is a professional training institute
            dedicated to building future-ready careers. We specialize in
            delivering high-quality, industry focused programs that blend theory
            with practical learning, ensuring our students gain the skills
            needed to succeed in today’s competitive market.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            {/* Mission */}
            <div className="border border-gray-300 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                Our Mission <FaBullseye className="text-green-600" />
              </h4>
              <p className="text-gray-700">
                To provide practical, career-oriented training through expert
                mentors, hands-on projects, certifications, and placement
                support.
              </p>
            </div>

            {/* Vision */}
            <div className="border border-gray-300 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                Our Vision <FaEye className="text-green-600" />
              </h4>
              <p className="text-gray-700">
                To be a leading institute that empowers learners with digital
                and technical skills to thrive in a fast-changing world.
              </p>
            </div>

            {/* Values */}
            <div className="border border-gray-300 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                Our Values <FaStar className="text-green-600" />
              </h4>
              <p className="text-gray-700">
                At ILT, our values of excellence, integrity, and student success
                ensure every learner grows with confidence and purpose.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose ILT Section */}
<section className="mt-20 py-12">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
    
    {/* Left Side - Heading */}
    <div className="md:w-1/3">
      <h1 className="text-4xl font-bold text-black">
        Why Choose ILT?
      </h1>
    </div>

    {/* Right Side - Paragraph */}
    <div className="md:w-2/3">
      <p className="text-lg text-gray-600">
        We go beyond theory to deliver practical, career-focused training.
        With expert mentors, real projects, and placement support, ILT ensures
        you gain the skills and confidence to succeed in the digital world.
      </p>
    </div>
  </div>
</section>


        {/* Features Section */}
        <section className="mt-20 max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-10 text-gray-700 text-lg">
          <div>
            <h4 className="text-2xl font-bold flex items-center gap-3 mb-3 text-gray-900">
              <FaBullseye className="text-green-600" size={28} /> Placement
              Support
            </h4>
            <p>
              We provide complete placement assistance with interview
              preparation, resume building, and job referrals, ensuring students
              step confidently into the digital industry.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold flex items-center gap-3 mb-3 text-gray-900">
              <FaLaptop className="text-green-600" size={28} /> Hands-On
              Learning
            </h4>
            <p>
              Every course includes real-world projects and live assignments so
              students gain practical experience and build strong, job-ready
              portfolios.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold flex items-center gap-3 mb-3 text-gray-900">
              <FaRibbon className="text-green-600" size={28} /> Expert Trainers
            </h4>
            <p>
              Our trainers are experienced digital marketing professionals who
              bring real industry knowledge and insights to every session,
              making learning interactive and impactful.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold flex items-center gap-3 mb-3 text-gray-900">
              <FaCheckCircle className="text-green-600" size={28} /> Certified
              Courses
            </h4>
            <p>
              Earn industry-recognized certifications that enhance your
              credibility and open doors to better career opportunities across
              top companies.
            </p>
          </div>
        </section>

        {/* Training Approach Section */}
        <section className="mt-20 flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto px-4 mb-20">
          <div className="md:w-1/2">
            <h5 className="text-gray-700 font-semibold mb-2">
              Our Training Approach
            </h5>
            <p className="text-xl font-bold leading-relaxed">
              <span className="text-green-600">At ILT,</span> we focus on
              interactive, practical, and result-driven learning. Every course
              is designed to prepare students not only with knowledge but with
              the confidence and skills to apply it in real-world scenarios.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/WhatsApp Image 2025-10-03 at 16.09.27_75214b43.jpg"
              alt="Training Approach"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
