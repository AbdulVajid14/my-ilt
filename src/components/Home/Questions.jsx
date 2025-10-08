import React from 'react'
import {
  FaPlus,
} from "react-icons/fa";
function Questions() {
  return (
      <section className="py-12 sm:py-16 px-4">
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
)
}

export default Questions