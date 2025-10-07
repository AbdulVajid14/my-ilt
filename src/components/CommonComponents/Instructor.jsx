import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const instructor = {
  image: "/images/WhatsApp Image 2025-10-03 at 16.34.35_be4e0ab4.jpg",
  name: "Jitto Jose",
  title: "ILT Certified Trainer",
  social: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
  description:
    "At ILT, our instructors are certified professionals with years of industry experience. They bring real-world knowledge into the classroom, ensuring that every student learns practical, hands-on skills. From Digital Marketing to Data Analytics, SEO, Python, and Cybersecurity — our trainers guide you step by step with the latest tools, strategies, and casestudies to make you job-ready.",
  points: [
    "Designs industry-relevant course modules for ILT students",
    "Provides hands-on training with live projects & case studies",
    "Offers 1:1 mentorship and career guidance",
    "Prepares students for certifications & placement interviews",
    "Connects classroom learning with real-world business challenges",
  ],
  quote:
    'My mission is to simplify complex concepts and help every student gain the confidence to solve real-world problems, not just pass exams." – ',
  quoteAuthor: "Jitto Jose",
};


function Instructor() {
  return (   
    <>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans text-gray-900">
                   <section className="flex flex-col md:flex-row gap-14">
                <div className="flex flex-col items-center md:items-start">
                  {/* Instructor Image */}
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="rounded-lg max-w-xs object-cover self-start"
                    loading="lazy"
                  />
    
                  {/* Quote below image */}
                  <blockquote className="italic text-gray-600 mt-4 text-center md:text-left max-w-xs">
                    “{instructor.quote}”
                    <span className="text-green-600 font-semibold">
                      {" "}
                      {instructor.quoteAuthor}
                    </span>
                  </blockquote>
                </div>
    
                {/* Right side: Instructor details */}
                <div className="flex flex-col">
                  <h2 className="text-xl font-semibold mb-1">{instructor.name}</h2>
                  <p className="mb-3">{instructor.title}</p>
    
                  {/* Social icons */}
                  <div className="flex space-x-4 mb-4 text-green-600">
                    <a
                      href={instructor.social.facebook}
                      aria-label="Facebook"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebookF className="w-5 h-5" />
                    </a>
    
                    <a
                      href={instructor.social.twitter}
                      aria-label="Twitter"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </a>
    
                    <a
                      href={instructor.social.instagram}
                      aria-label="Instagram"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram className="w-5 h-5" />
                    </a>
                  </div>
    
                  <p className="mb-6 text-gray-700">{instructor.description}</p>
                  <h3 className="font-semibold mb-3">What He Does at ILT</h3>
                  <ul className="space-y-2 mb-6">
                    {instructor.points.map((point, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <span className="inline-block w-3 h-3 rounded-full bg-green-600 flex-shrink-0"></span>
                        <span className="font-semibold">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
          </div>
    </>
  )
}

export default Instructor