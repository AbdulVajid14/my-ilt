import React from "react";
import { useNavigate } from "react-router-dom";

const upcomingWorkshops = [
  {
    img: "/images/WhatsApp Image 2025-10-08 at 10.25.52_3eec764b.jpg",
    date: "October 5, 2025",
    title: "Master SEO & Analytics",
    slug: "master-seo-analytics",
    desc: "Hands-on SEO and analytics training to boost your website’s performance",
  },
  {
    img: "/images/WhatsApp Image 2025-10-08 at 10.25.52_bf1bbff0.jpg",
    date: "October 15, 2025",
    title: "Social Media Ads & Strategy",
    slug: "social-media-ads-strategy",
    desc: "Learn to create, manage, and optimize social media ad campaigns.",
  },
  
];

const previousWorkshops = [
  {
    img: "/images/WhatsApp Image 2025-10-08 at 10.25.38_793aee85.jpg",
    title: "SEO Bootcamp 2024",
    desc: "A hands-on workshop covering keyword research, on-page optimization, and link building strategies.",
    dateLoc: "March 2024, Kochi",
  },
  {
    img: "/images/WhatsApp Image 2025-10-08 at 10.25.39_92dfadc7.jpg",
    title: "Social Media Marketing class",
    desc: "A practical session on creating viral campaigns, ad management, and content planning for social platforms.",
    dateLoc: "June 2024, Bangalore",
  },
  {
    img: "/images/WhatsApp Image 2025-10-08 at 10.25.39_a6c4cc0d.jpg",
    title: "Data Analytics for Beginners",
    desc: "An introductory workshop focusing on data visualization, Google Analytics, and real-world use cases.",
    dateLoc: "August 2024, Hyderabad",
  },
];

function Workshop() {
      const navigate = useNavigate();
  return (
    <div className="w-full">
      {/* Banner */}
      <section
        className="w-full bg-center bg-cover relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/images/WhatsApp Image 2025-10-08 at 10.26.04_33022baf.jpg')",
          height: "400px",
        }}
      >
        <h1 className="text-white font-extrabold text-5xl md:text-6xl drop-shadow-lg">
          Workshops
        </h1>
      </section>

      {/* Content wrapper */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Workshops & Seminars intro */}
        <div className="max-w-xl text-center mx-auto">
          <h2 className="text-4xl font-bold mb-2">Workshops & Seminars</h2>
          <p className="text-gray-500 text-2xl">
            Practical learning through live workshops across multiple locations.
          </p>
        </div>

        {/* About Workshops */}
        <div className="max-w-7xl">
          <h3 className="text-2xl font-semibold mb-2">About Workshops</h3>
          <p className="text-gray-600 max-w-5xl leading-relaxed text-xl">
            <span className="font-semibold text-green-600">At ILT,</span> we
            conduct interactive workshops on digital marketing across Kerala and
            beyond. Designed for students, professionals, and business owners,
            these sessions provide hands-on knowledge of the latest tools and
            strategies.
          </p>
        </div>

        {/* Upcoming Workshops */}
        <div className="max-w-7xl">
          <h3 className="text-2xl font-semibold mb-6">Upcoming Workshops</h3>
          <div className="flex flex-wrap gap-8">
            {upcomingWorkshops.map(({ img, date, title, desc ,slug}) => (
              <div
                key={title}
                className="bg-black text-white rounded-lg overflow-hidden max-w-md w-full shadow-md"
              >
                <div className="relative">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute bottom-2 right-3 text-green-600 text-sm font-semibold">
                    {date}
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  <h4 className="text-lg font-semibold">{title}</h4>
                  <p className="text-gray-300">{desc}</p>
                  <button 
                  onClick={() => navigate(`/workshop/${slug}`)}
                  className="bg-green-600 px-4 py-2 rounded text-white font-semibold hover:bg-green-700 transition">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div className="max-w-7xl flex flex-wrap gap-12">
          <div className="flex-1 min-w-[280px] max-w-xl">
            <h3 className="text-2xl font-semibold mb-2">Registration Form</h3>
            <p className="text-gray-500 text-xl max-w-md leading-relaxed">
              Fill out the form to reserve your spot in our upcoming workshop.{" "}
              <span className="text-green-600 font-semibold">
                Limited seats available!
              </span>
            </p>
          </div>
          <form className="bg-white rounded-xl p-8 shadow-lg w-full max-w-md flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded-md py-3 px-4 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md py-3 px-4 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="tel"
              placeholder="Phone no"
              className="border border-gray-300 rounded-md py-3 px-4 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              placeholder="Workshop"
              className="border border-gray-300 rounded-md py-3 px-4 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              placeholder="Location"
              className="border border-gray-300 rounded-md py-3 px-4 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              placeholder="Comments"
              rows={4}
              className="border border-gray-300 rounded-md py-3 px-4 resize-none bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="bg-green-600 text-white font-semibold py-3 rounded hover:bg-green-700 transition"
            >
              Join Workshop
            </button>
          </form>
        </div>

        {/* Previous Workshops */}
        <div className="max-w-7xl space-y-4">
          <h3 className="text-2xl font-semibold mb-1">Previous Workshops</h3>
          <p className="text-gray-500 max-w-xl text-lg">
            A glimpse of the impactful sessions we’ve already delivered.
          </p>
          <div className="flex flex-wrap gap-6 mt-4">
            {previousWorkshops.map(({ img, title, desc, dateLoc }) => (
              <div
                key={title}
                className="bg-black text-white rounded-lg max-w-sm w-full shadow-lg overflow-hidden"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 space-y-3">
                  <h4 className="font-semibold text-lg">{title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {desc}
                  </p>
                  <p className="text-gray-400 text-xs text-right italic">
                    {dateLoc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Workshop;
