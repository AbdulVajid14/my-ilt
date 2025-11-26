import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function HomeBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/News`)
      .then((res) => {
        if (res.data.success) {
          const all = res.data.data.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
          setBlogs(all.slice(0, 3));
        }
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]/g, "");

  const getShortDesc = (desc) => {
    const firstParagraph = desc.split("\r\n\r\n")[0];
    return firstParagraph.length > 100
      ? firstParagraph.slice(0, 100) + "..."
      : firstParagraph;
  };

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const chunkSize = 3;
  const slides = [];
  for (let i = 0; i < blogs.length; i += chunkSize) {
    slides.push(blogs.slice(i, i + chunkSize));
  }

  return (
    <section className="bg-white py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h3 className="text-green-900 font-semibold text-base sm:text-lg mb-2">
            Latest Insights & Tips
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Smart Tips for Smarter Careers
          </h2>
          <p className="text-sm sm:text-base text-black mb-6">
            Explore quick tips, guides, and stories to help you learn, grow, and
            build a successful career. From digital marketing strategies to tech
            trends and practical insights, our blogs keep you informed and ready
            to take the next step in your professional journey.
          </p>
          <Link to="/blog">
            <button className="bg-green-900 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg hover:bg-emerald-900 transition duration-300">
              View All Blogs
            </button>
          </Link>
        </div>

        <div className="w-full lg:w-2/3 relative">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden shadow-lg animate-pulse"
                  style={{ height: "320px" }}
                />
              ))}
            </div>
          ) : slides.length === 0 ? (
            <p className="text-center text-black">No blogs available.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {slides.flat().map((blog) => (
                <div
                  key={blog.id}
                  className="rounded-lg overflow-hidden shadow-lg bg-white flex flex-col"
                >
                  {/* Image (Lazy Loaded) */}
                  <div className="h-40 sm:h-48">
                    <img
                      loading="lazy"
                      src={`${import.meta.env.VITE_BASE_URL_IMAGE}${
                        blog.image
                      }`}
                      alt={blog.tittle}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 bg-black text-white flex flex-col flex-grow">
                    <h4 className="font-bold text-base sm:text-lg mb-2 leading-tight">
                      {blog.tittle}
                    </h4>

                    <p
                      className="text-xs sm:text-sm mb-3 text-black flex-grow"
                      dangerouslySetInnerHTML={{
                        __html: getShortDesc(blog.description),
                      }}
                    ></p>

                    <div className="flex justify-between items-center text-xs pt-2 border-t border-gray-700">
                      <Link to={`/blog/${slugify(blog.tittle)}`}>
                        <button
                          className="bg-white text-black border border-green-900 font-semibold py-2 px-4 rounded-lg
                  text-xs sm:text-sm transition-all duration-300 hover:shadow-md hover:scale-105 truncate max-w-[130px]"
                        >
                          Read More {blog.tittle}
                        </button>
                      </Link>

                      <span className="text-xs text-black">
                        {formatDate(blog.date)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default HomeBlog;
