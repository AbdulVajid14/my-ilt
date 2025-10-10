import React from "react";
import { FaArrowRight,FaCheckCircle } from "react-icons/fa";
import Questions from "../components/Home/Questions";

const Trainers = () => {
  return (
    <div className="w-full">
      {/* ===== Banner Section - Full Width ===== */}
      <section
        className="w-full h-64 md:h-100 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/images/WhatsApp Image 2025-10-09 at 09.28.15_0ca754ec.jpg')",
        }}
      >
        <h1 className="text-white text-3xl md:text-5xl font-bold px-4 py-2 rounded">
          Join ILT as a Certified Trainer
        </h1>
      </section>

      {/* ===== Content Section (max-w-7xl) ===== */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {/* Why Hire ILT Trainers */}
      <section>
  <h2 className="text-3xl font-semibold mb-8">Why Hire ILT Trainers</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-gray-800 text-xl">
    {[
      "Be part of a reputed training institute.",
      "Share your expertise with passionate learners.",
      "Teach in flexible modes: Online, Offline, or Workshops.",
      "Earn competitive pay & recognition.",
    ].map((point, i) => (
      <div key={i} className="flex items-start space-x-3">
        <FaCheckCircle className="text-green-500 mt-1 text-xl flex-shrink-0" />
        <p>{point}</p>
      </div>
    ))}
  </div>
</section>
      </div>

      {/* ===== Roles & Opportunities - Full Width ===== */}
      <section
        className="relative py-20 px-8 text-white"
        style={{
          backgroundImage:
            "url('/images/WhatsApp Image 2025-10-09 at 09.28.16_15cc1fcd.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="p-8 rounded-lg max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Roles & Opportunities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-12 text-lg font-medium">
            {[
              "Digital Marketing Trainer",
              "SEO Trainer",
              "Social Media Trainer",
              "Data Analytics Trainer",
              "Cybersecurity Trainer",
              "Python Programming Trainer",
            ].map((role, i) => (
              <div key={i} className="flex items-center space-x-3">
                <span className="inline-block w-4 h-4 rounded-full bg-green-500"></span>
                <span>{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Application Form Section (max-w-7xl) ===== */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <section className="flex flex-col md:flex-row items-center gap-12">
          {/* Form */}
          <form className="flex-1 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <h2 className="text-2xl font-bold mb-1">
              Ready to Inspire the Next Generation?
            </h2>
            <p className="text-gray-600 mb-8">
              Ready to inspire the next generation? <br />
              Fill out the form below and apply to become an ILT trainer today.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile No"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <select
                name="country"
                defaultValue=""
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              >
                <option value="" disabled>
                  Country
                </option>
                <option>USA</option>
                <option>India</option>
                <option>UK</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
              <select
                name="city"
                defaultValue=""
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              >
                <option value="" disabled>
                  City
                </option>
                <option>New York</option>
                <option>Delhi</option>
                <option>London</option>
                <option>Toronto</option>
                <option>Sydney</option>
              </select>
              <div>
                <label className="block text-gray-700 mb-1">Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  className="border border-gray-300 rounded px-2 py-1 w-full"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">CV</label>
                <input
                  type="file"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  className="border border-gray-300 rounded px-2 py-1 w-full"
                />
              </div>
            </div>

            <div>
              <textarea
                name="experience"
                rows="4"
                placeholder="Training Experience Details"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded inline-flex items-center"
            >
              Submit
              <FaArrowRight className="ml-2" />
            </button>
          </form>

          {/* Image next to form */}
          <div className="flex-1">
            <img
              src="/images/WhatsApp Image 2025-10-09 at 09.28.16_84a7b9c3.jpg"
              alt="Trainer at whiteboard"
              className="rounded-lg shadow-lg w-full object-cover max-h-[480px]"
            />
          </div>
        </section>
      </div>
      <Questions/>
    </div>
  );
};

export default Trainers;
