import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import QueriesForm from "../components/CommonComponents/QueriesForm";

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const getShortDesc = (desc) => {
  return desc.split("\r\n\r\n")[0].slice(0, 100) + "...";
};

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]/g, "");

const Blog = () => {
  const [newsData, setNewsData] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/News`)
      .then((response) => {
        if (response.data.success) {
          const data = response.data.data;
          setNewsData(data);

          const formattedPosts = data.map((p) => ({
            id: p.id,
            image: `${import.meta.env.VITE_BASE_URL_IMAGE}${p.image}`,
            title: p.tittle,
            description: getShortDesc(p.description),
            date: formatDate(p.date),
          }));

          setPopularPosts(formattedPosts);
        }
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  useEffect(() => {
    document.title =
      "ILT Blog | Digital Marketing Insights, Trends & Learning Resources";
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
      "Explore expert articles, guides, and industry updates on digital marketing from Internet Leads Training (ILT). Stay informed with tips, strategies, and the latest trends."
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
      "ILT Blog | Digital Marketing Insights, Trends & Learning Resources"
    );
  }, []);

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = popularPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(popularPosts.length / postsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative w-full h-60 sm:h-72 md:h-96 overflow-hidden mb-10">
        <img
          src="/images/WhatsApp Image 2025-10-03 at 16.37.02_e97c9c84.jpg"
          alt="Blogs"
          className="w-full h-full object-cover"
        />
        <h1 className="absolute inset-0 flex items-center justify-start text-white text-2xl sm:text-3xl md:text-5xl font-extrabold bg-opacity-40 px-4 sm:px-12 lg:px-24">
          All Blogs
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:space-x-12">
          <article className="flex-1 space-y-8 text-gray-700">
            <p className="text-base sm:text-lg md:text-xl">
              Explore our collection of blogs on various topics to help you in
              your career.
            </p>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {currentPosts.map(({ id, image, title, description, date }) => (
                <Link key={id} to={`/blog/${slugify(title)}`}>
                  <div className="bg-white rounded-lg shadow-md w-full max-w-sm flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={
                        image?.startsWith("http")
                          ? image
                          : `${import.meta.env.VITE_BASE_URL_IMAGE}${image}`
                      }
                      alt={title}
                      className="w-full h-48 object-cover rounded-t-lg"
                      loading="lazy"
                    />
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg mb-2 text-gray-900">
                        {title}
                      </h3>
                      <p
                        className="text-gray-600 flex-grow text-sm"
                        dangerouslySetInnerHTML={{ __html: description }}
                      ></p>
                      <div className="flex justify-between items-center mt-4">
                        <button
                          type="button"
                          className="bg-green-600 text-white px-5 py-2 rounded-md text-sm font-medium 
             hover:bg-green-700 transition-all duration-300 transform hover:scale-105 
             shadow-md truncate max-w-[130px]"
                        >
                          Read More – {title}
                        </button>

                        <span className="text-gray-500 text-sm">{date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4 mt-12">
                {/* Previous Button */}
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  aria-label="Go to previous page"
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-md
      ${
        currentPage === 1
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-white text-green-700 border border-green-700 hover:bg-green-50 hover:shadow-lg"
      }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Number Buttons */}
                <div className="flex space-x-1">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 rounded-full font-medium transition-all duration-200 ${
                        currentPage === i + 1
                          ? "bg-green-600 text-white shadow-lg"
                          : "bg-white text-green-700 border border-green-700 hover:bg-green-50"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  aria-label="Go to next page"
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-md 
      ${
        currentPage === totalPages
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 transform hover:scale-105"
      }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;
