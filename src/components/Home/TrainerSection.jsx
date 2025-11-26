import React from 'react'
import { Link } from 'react-router-dom'
import {
  HiBriefcase,
  HiDevicePhoneMobile,
  HiUsers,
  HiGlobeAlt,
  HiAdjustmentsHorizontal,
  HiCurrencyRupee,
} from "react-icons/hi2";
import { HiClipboardCheck } from "react-icons/hi";

function TrainerSection() {
  return (
          <section className="bg-white">
            <div className="flex flex-col md:flex-row items-stretch w-full min-h-[500px]">
              <div className="w-full md:w-1/2 flex flex-col relative">
                <div className="absolute top-0 left-0 w-full p-4 z-10 bg-white bg-opacity-90 md:bg-transparent md:static md:p-6 text-center">
                  <h2 className="text-xl sm:text-2xl font-semibold text-black">
                    Jitto Jose
                  </h2>
                  <p className="text-green-900 font-medium">
                    CEO & Founder <br />
                   <span className="text-black font-medium">MBA Digital Marketing in London</span> 
                  </p>
                </div>
                <div className="flex-grow relative overflow-hidden h-180 sm:h-96 md:h-auto">
                  <img
                    src="/images/jitto-jose-ceo.webp"
                    alt="Jitto Jose, Founder & Lead Trainer"
                    fetchpriority="high"
                    decoding="async"
                    loading='lazy'
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full flex flex-col sm:flex-row justify-between items-center text-center p-4 bg-gray-900 bg-opacity-70 text-white z-20">
                  <div className="flex-1 px-2 sm:border-r sm:border-gray-600 mb-2 sm:mb-0">
                    <p className="text-xl sm:text-2xl font-bold">100k</p>
                    <p className="text-xs sm:text-sm">FREE Webinar</p>
                  </div>
                  <div className="flex-1 px-2 sm:border-r sm:border-gray-600 mb-2 sm:mb-0">
                    <p className="text-xl sm:text-2xl font-bold">100%</p>
                    <p className="text-xs sm:text-sm">Placement Success</p>
                  </div>
                  <div className="flex-1 px-2">
                    <p className="text-xl sm:text-2xl font-bold">50%</p>
                    <p className="text-xs sm:text-sm">Salary Increase</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4 sm:p-8 bg-green-700 text-white flex flex-col">
                <div className="flex-grow space-y-6 sm:space-y-8">
                  {/* Career-oriented Learning */}
                  <div>
                    <div className="flex items-center mb-3">
                      <HiBriefcase className="w-8 h-8 sm:w-10 sm:h-10 mr-3 text-white" />
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                        Career-oriented Learning
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg font-light">
                      We develop programs centered on preparing you for genuine
                      opportunities in the digital marketing landscape — emphasizing
                      practical skills and experience sought after by employers.
                    </p>
                  </div>
    
                  {/* Dedicated Placement Support */}
                  <div>
                    <div className="flex items-center mb-3">
                      <HiClipboardCheck className="w-8 h-8 sm:w-10 sm:h-10 mr-3 text-white" />
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                        Dedicated Placement Support
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg font-light">
                      We guide you through every step of your career journey with
                      resume building, interview preparation, and direct job
                      referrals to trusted companies.
                    </p>
                  </div>
    
                  {/* Practical Real-World Projects */}
                  <div>
                    <div className="flex items-center mb-3">
                      <HiDevicePhoneMobile className="w-8 h-8 sm:w-10 sm:h-10 mr-3 text-white" />
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                        Practical Real-World Projects
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg font-light">
                      Every course we offer includes live projects and assignments
                      that give students real-world experience and build strong,
                      job-ready portfolios.
                    </p>
                  </div>
    
                  {/* Expert Trainers */}
                  <div>
                    <div className="flex items-center mb-3">
                      <HiUsers className="w-8 h-8 sm:w-10 sm:h-10 mr-3 text-white" />
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                        Expert Trainers
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg font-light">
                      Learn from highly experienced professionals who bring over 18
                      years of industry knowledge, sharing insights that make every
                      session meaningful and result-driven.
                    </p>
                  </div>
    
                  {/* Globally Recognized Certifications */}
                  <div>
                    <div className="flex items-center mb-3">
                      <HiGlobeAlt className="w-8 h-8 sm:w-10 sm:h-10 mr-3 text-white" />
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                        Globally Recognized Certifications
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg font-light">
                      Get certificates that validate your proficiency and help you
                      stand out among other qualified candidates in the digital
                      marketing job market.
                    </p>
                  </div>
    
                  {/* Flexible Learning Experience */}
                  <div>
                    <div className="flex items-center mb-3">
                      <HiAdjustmentsHorizontal className="w-8 h-8 sm:w-10 sm:h-10 mr-3 text-white" />
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                        Flexible Learning Experience
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg font-light">
                      Study anytime and anywhere with our app-supported platform and
                      flexible learning system that lets you continue learning even
                      after course completion.
                    </p>
                  </div>
    
                  {/* Affordable Quality Education */}
                  <div>
                    <div className="flex items-center mb-3">
                      <HiCurrencyRupee className="w-8 h-8 sm:w-10 sm:h-10 mr-3 text-white" />
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                        Affordable Quality Education
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg font-light">
                      We believe that quality training should be accessible to
                      everyone, offering high-value education at reasonable,
                      affordable prices.
                    </p>
                  </div>
                </div>
    
                {/* Know More Button */}
                <Link to="/about">
                  <button className="w-full mt-6 bg-white text-green-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-colors text-base sm:text-lg">
                    Know More About ILT
                  </button>
                </Link>
              </div>
            </div>
          </section>
  )
}

export default TrainerSection