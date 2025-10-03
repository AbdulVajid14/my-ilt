import React from 'react'
import {
  FaPlay,
  FaCheckCircle,
} from "react-icons/fa";
import { useState } from 'react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
function BookTrail() {
 const [phone, setPhone] = useState("");
    
  return (
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
  )
}

export default BookTrail