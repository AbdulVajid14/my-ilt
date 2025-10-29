import React from 'react'
import { Link } from 'react-router-dom'
import {
  MdOutlineComputer,
  MdOutlineBusinessCenter,
  MdPeopleOutline,
  MdOutlineWatchLater,
  MdOutlineClass,
  MdOutlineHandshake,
} from "react-icons/md";

function LearningOption() {
  return (
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
                      desc: "The dedicated online training team of ILT is well equipped to offer very interactive training sessions via web irrespective of your location. ",
                    },
                    {
                      icon: MdOutlineClass,
                      title: "In-House Trainingline",
                      desc: "In-house training provides hands-on-training experience in the most lucid and interactive manner and shall be conducted in the training center.",
                    },
                    {
                      icon: MdPeopleOutline,
                      title: "Individual Coaching",
                      desc: "One-on-one personalized training tailored to your goals and pace for maximum impact.",
                    },
                    {
                      icon: MdOutlineWatchLater,
                      title: "Private SEO Training",
                      desc: "ILT team conducts corporate training sessions to educate employees and teams on various digital marketing concepts and projects.",
                    },
                    {
                      icon: MdOutlineBusinessCenter,
                      title: "Corporate Training",
                      desc: "Offers complete SEO training including the most advanced SEO techniques and practices in one-to-one mode.",
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
                <Link to="/modal">
                  <button className="mt-6 sm:mt-8 bg-green-600 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
                    Explore Training Options
                  </button>
                </Link>
              </div>
              <div className="w-full lg:w-1/3 mt-8 lg:mt-0 space-y-6 sm:space-y-8">
                <div className="p-4 sm:p-6 bg-white rounded-lg shadow-xl">
                  <div className="flex flex-col items-center justify-center text-center space-y-4">
                    <div>
                      <p className="font-bold text-gray-800 text-sm sm:text-base">
                        Find out how people like you
                      </p>
                      <p className="font-bold text-gray-800 text-sm sm:text-base">
                        achieved their goals
                      </p>
                    </div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-md">
                      <img
                        src="/images/WhatsApp Image 2025-10-03 at 09.59.09_485cfc7c.jpg"
                        alt="People Illustration"
                        className="w-8 h-8 sm:w-10 sm:h-10"
                      />
                    </div>
                    <button className="bg-black text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition">
                      View Alumni Stories
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default LearningOption