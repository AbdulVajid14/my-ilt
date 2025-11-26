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
         <section className="py-12 sm:py-16 px-4">
  <div className="w-full mx-auto">
    <div className="text-center">
    <p className="text-black mb-2 text-sm sm:text-base">
      Your Learning, Your Rules
    </p>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-black">
      <span className="text-green-900">Delivery Modes</span>
    </h2>
    </div>
    {/* Full-width grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
      {[
        {
          icon: MdOutlineComputer,
          title: "Online Training",
          desc: "The dedicated online training team of ILT is well equipped to offer very interactive training sessions via web irrespective of your location.",
        },
        {
          icon: MdOutlineClass,
          title: "In-House Training",
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
          className="flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <item.icon className="text-green-900 text-2xl sm:text-3xl" />
          </div>
          <h4 className="font-bold text-base sm:text-lg mb-2 text-black">
            {item.title}
          </h4>
          <p className="text-xs sm:text-sm text-black">{item.desc}</p>
        </div>
      ))}
    </div>
      <div className="text-center">
    <Link to="/mode">
      <button className="mt-8 bg-green-900 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-emerald-900 transition duration-300">
        Explore Training Options
      </button>
    </Link>
    </div>
  </div>
</section>


  )
}

export default LearningOption