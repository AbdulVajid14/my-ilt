import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]/g, "");

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

function BlogPopularSection() {
  const { slug } = useParams();
  const [popularPosts, setPopularPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/News`)
      .then((response) => {
        if (response.data.success) {
          const all = response.data.data;
          const found = all.find((p) => slugify(p.tittle) === slug);
          if (found) {
            const others = all.filter((p) => p.id !== found.id);
            const processed = others.map((p) => ({
              id: p.id,
              image: `${import.meta.env.VITE_BASE_URL_IMAGE}${p.image}`,
              title: p.tittle,
              description: getShortDesc(p.description),
              date: formatDate(p.date),
            }));
            setPopularPosts(processed);
            setCurrentPage(1); // Reset to first page
          }
        }
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, [slug]);

  // Pagination Logic
  const totalPages = Math.ceil(popularPosts.length / postsPerPage);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = popularPosts.slice(indexOfFirst, indexOfLast);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-12 px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage: "url('/images/blog-banner-2.webp')",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-1 text-white">
          Popular Posts
        </h2>
        <p className="text-center text-white mb-8">
          Trending Topics You Can’t Miss
        </p>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {currentPosts.map(({ id, image, title, description, date }) => (
            <Link
              key={id}
              to={`/blog/${slugify(title)}`}
              className="w-full max-w-sm"
            >
              <div className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden h-full">
                <img
                  src={image?.startsWith("http") ? image : image}
                  alt={title}
                  className="w-full h-48 object-cover rounded-t-lg"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                />

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">
                    {title}
                  </h3>
                  <p
                    className="text-gray-800 flex-grow text-sm line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></p>

                  <div className="flex justify-between items-center mt-4">
                    <button
                      type="button"
                      className="border border-green-800 text-green-900 px-4 py-1 rounded text-sm hover:bg-green-50 transition"
                    >
                      Read More
                    </button>
                    <span className="text-gray-500 text-xs">{date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="mt-10 flex items-center justify-center gap-2">
            {/* Prev */}
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-green-100 text-green-700 hover:bg-green-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
              aria-label="Previous page"
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

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => goToPage(num)}
                className={`w-10 h-10 rounded-full font-medium transition ${
                  currentPage === num
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-green-100 text-green-700 hover:bg-green-200"
                }`}
              >
                {num}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-green-100 text-green-700 hover:bg-green-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
              aria-label="Next page"
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
          </nav>
        )}
      </div>
    </div>
  );
}

export default BlogPopularSection;
