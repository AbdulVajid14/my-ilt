
import React from "react";
import { useState } from "react";
import { FaCalendarAlt, FaUser, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import QueriesForm from "../components/CommonComponents/QueriesForm";
const posts = [
  {
    id: 1,
    image: "/images/WhatsApp Image 2025-10-03 at 16.37.03_e8271677.jpg",
    title: "Beginner’s Guide to Python Programming",
    description:
      "Simple tips to kickstart your journey into programming with Python.",
    date: "22 Aug 2025",
  },
  {
    id: 2,
    image: "/images/WhatsApp Image 2025-10-03 at 16.37.03_41e0f2b0.jpg",
    title: "How Data Analytics Is Transforming Businesses",
    description:
      "Explore how companies are using data to make smarter decisions.",
    date: "24 Aug 2025",
  },
];

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

const Blog = () => {
  return (
    <div className="">
      {/* Banner Section - Full Width */}
      <div className="relative w-full h-60 sm:h-72 md:h-96 overflow-hidden mb-10">
        <img
          src="/images/WhatsApp Image 2025-10-03 at 16.37.02_e97c9c84.jpg"
          alt="Digital Marketing Trends"
          className="w-full h-full object-cover"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-2xl sm:text-3xl md:text-5xl font-extrabold bg-opacity-40 text-center px-4">
          Top 5 Digital Marketing Trends in 2025
        </h1>
      </div>

      {/* Main Container - max-w-7xl */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Inner Image Section */}
        <div className="w-full h-64 sm:h-80 md:h-[500px] overflow-hidden rounded-lg mb-10">
          <img
            src="/images/WhatsApp Image 2025-10-03 at 16.37.03_c3dc09d2.jpg"
            alt="Marketing Insights"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Author & Date */}
        <div className="flex items-center space-x-4 mb-10">
          <div className="flex flex-col sm:flex-row sm:space-x-6 text-gray-600 text-sm">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <FaCalendarAlt className="text-green-600 w-5 h-5" />
              <span>12 Aug 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaUser className="text-green-600 w-5 h-5" />
              <span>James</span>
            </div>
          </div>
        </div>

        {/* Main Content and Sidebar */}
        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Main Article */}
          <article className="flex-1 space-y-8 text-gray-700">
            <div>
              <h2 className="text-xl font-semibold mb-2">Introduction</h2>
              <p className="text-base sm:text-lg md:text-xl">
                The digital marketing world is evolving faster than ever in
                2025. With new technologies, consumer behaviors, and AI-driven
                tools shaping the industry, staying updated with the latest
                trends is essential for businesses and marketers. Here are the
                top 5 trends redefining digital marketing this year.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-1">
                1. AI-Powered Marketing & Personalization
              </h2>
              <p className="text-base sm:text-lg md:text-lg">
                AI tools are transforming how brands interact with customers by
                offering hyper-personalized content, ads, and recommendations in
                real-time. From chatbots to AI-driven analytics, businesses are
                leveraging automation to improve customer engagement and
                conversions.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-1">
                2. Voice Search & Conversational Marketing
              </h2>
              <p className="text-base sm:text-lg md:text-lg">
                With the rise of smart speakers and voice assistants, optimizing
                for voice search has become crucial. Brands are shifting toward
                conversational content and interactive experiences that align
                with how people speak and search.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-1">
                3. Short-Form Video Dominance
              </h2>
              <p className="text-base sm:text-lg md:text-lg">
                Platforms like TikTok, Instagram Reels, and YouTube Shorts
                continue to dominate user engagement. Short, authentic, and
                engaging videos are proving to be the best way to connect with
                audiences and build brand loyalty.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-1">
                4. Sustainability & Purpose-Driven Marketing
              </h2>
              <p className="text-base sm:text-lg md:text-lg">
                Consumers in 2025 prefer brands that prioritize social
                responsibility and sustainability. Highlighting eco-friendly
                practices, ethical sourcing, and brand values is now a key
                marketing strategy.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-1">
                5. Data Privacy & First-Party Data
              </h2>
              <p className="text-base sm:text-lg md:text-lg">
                With stricter privacy regulations, companies are moving away
                from third-party cookies and focusing on first-party data
                strategies. Transparency, trust, and ethical data usage are now
                essential for successful campaigns.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mt-6">Conclusion</h2>
              <p className="text-base sm:text-lg md:text-lg">
                2025 is all about smarter marketing, ethical practices, and
                human-centered experiences powered by technology. Marketers who
                adapt to these trends will not only reach but also resonate with
                their audience, ensuring long-term growth in the digital age.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-full md:w-80 mt-12 md:mt-0 space-y-10">
            {/* Queries Form */}
           <QueriesForm/>

            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
              <ul className="space-y-4">
                <li className="flex space-x-3 items-center">
                  <img
                    src={posts[0].image}
                    alt="Post 1"
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div>
                    <p className="text-xs text-gray-500">22 Aug 2025</p>
                    <p className="font-semibold cursor-pointer hover:text-green-600">
                      Beginner's Guide to Python Programming
                    </p>
                  </div>
                </li>
                <li className="flex space-x-3 items-center">
                  <img
                    src={posts[1].image}
                    alt="Post 2"
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div>
                    <p className="text-xs text-gray-500">24 Aug 2025</p>
                    <p className="font-semibold cursor-pointer hover:text-green-600">
                      How Data Analytics Is Transforming Businesses
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-lg font-bold mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Digital Marketing",
                  "SEO",
                  "Google Ads",
                  "Social Media",
                  "Content Strategy",
                  "PPC Advertising",
                  "Email Marketing",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-green-100 text-green-900 font-semibold px-3 py-1 rounded-full cursor-pointer select-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <hr className="my-15 mx-40" />

      {/* Comments Section - max-w-7xl */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Comments Section */}
        <div className="flex-1">
          <h2 className="font-bold text-xl mb-6">3 Comments</h2>

          {/* Comment 1 */}
          <div className="flex gap-4 mb-8">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="David J"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">David J</p>
              <p className="text-xs text-gray-600 mb-2">
                Sept 27, 2025 at 10:15 AM
              </p>
              <p className="mb-3 max-w-xl">
                Great insights! I really liked how you explained complex
                topics in a simple way. Looking forward to more blogs like
                this.
              </p>
              <button className="text-xs bg-cyan-50 px-3 py-1 rounded font-semibold hover:bg-cyan-100 transition">
                Reply
              </button>
            </div>
          </div>

          {/* Comment 2 */}
          <div className="flex gap-4 mb-8">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Ananya Sharma"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">Ananya Sharma</p>
              <p className="text-xs text-gray-600 mb-2">
                Sept 27, 2025 at 1:42 PM
              </p>
              <p className="mb-3 max-w-xl">
                Very informative post. The practical examples you included
                make it easier to understand and apply.
              </p>
              <button className="text-xs bg-cyan-50 px-3 py-1 rounded font-semibold hover:bg-cyan-100 transition">
                Reply
              </button>
            </div>
          </div>

          {/* Comment 3 */}
          <div className="flex gap-4">
            <img
              src="https://randomuser.me/api/portraits/men/56.jpg"
              alt="Kevin D'Souza"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">Kevin D’Souza</p>
              <p className="text-xs text-gray-600 mb-2">
                Sept 27, 2025 at 5:20 PM
              </p>
              <p className="mb-3 max-w-xl">
                Thanks for sharing this valuable content. It really helped me
                gain clarity on the topic!
              </p>
              <button className="text-xs bg-cyan-50 px-3 py-1 rounded font-semibold hover:bg-cyan-100 transition">
                Reply
              </button>
            </div>
          </div>
        </div>

        {/* Comment Form Section */}
        <div className="flex-1 max-w-md">
          <h2 className="font-bold text-lg mb-1">Your Views Please!</h2>
          <p className="text-sm text-gray-600 mb-6">
            Your email address will not be published. Required fields are
            marked <span className="font-bold">*</span>
          </p>

          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col flex-1">
                <label htmlFor="name" className="font-semibold mb-1">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="email" className="font-semibold mb-1">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="comment" className="font-semibold mb-1">
                Your Comment <span className="text-red-600">*</span>
              </label>
              <textarea
                id="comment"
                rows={6}
                required
                className="border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white rounded px-6 py-3 font-semibold hover:bg-green-700 transition flex items-center gap-2"
            >
              Post Comment <span>&#8250;</span>
            </button>
          </form>
        </div>
      </div>

      {/* Popular Posts Section - Full Width */}
      <div
        className="bg-cover bg-center bg-no-repeat py-12 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage:
            "url('/images/WhatsApp Image 2025-10-03 at 16.37.03_d5cbf303.jpg')",
        }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-1 text-white">
          Popular Posts
        </h2>
        <p className="text-center text-white mb-8">
          Trending Topics You Can’t Miss
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch">
          {posts.map(({ id, image, title, description, date }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-md w-full max-w-sm flex flex-col overflow-hidden"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-t-lg"
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-700 flex-grow">{description}</p>
                <div className="flex justify-between items-center mt-4">
                  <button
                    type="button"
                    className="border border-green-600 text-green-600 px-4 py-1 rounded hover:bg-green-50 transition"
                  >
                    Read More
                  </button>
                  <span className="text-gray-500 text-sm">{date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructor Section - max-w-7xl */}
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
    </div>
  );
};

export default Blog;