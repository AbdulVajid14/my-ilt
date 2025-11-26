
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  FaCalendarAlt,
  FaUser,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import QueriesForm from "../components/CommonComponents/QueriesForm";
import BlogPopularSection from "../components/CommonComponents/BlogPopularSection";


const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]/g, "");

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [tags, setTags] = useState([]);
  const [openFaqId, setOpenFaqId] = useState(null);
  const [faqs, setFaqs] = useState([]);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/News`)
      .then((response) => {
        if (response.data.success) {
          const all = response.data.data;
          const found = all.find((p) => slugify(p.tittle) === slug);
          if (found) {
            setPost(found);
            setTags(
              found.tags ? found.tags.split(",").map((t) => t.trim()) : []
            );

            const rawQuestions = found.question
              ? found.question
                  .split('","')
                  .map((q) => q.replace(/^"|"$/g, "").trim())
              : [];

            const rawAnswers = found.answer
              ? found.answer
                  .split('","')
                  .map((a) => a.replace(/^"|"$/g, "").trim())
              : [];

            const parsedFaqs = rawQuestions
              .map((q, i) => ({
                id: i + 1,
                question: q,
                answer: rawAnswers[i] || "",
              }))
              .filter((faq) => faq.question && faq.answer);

            setFaqs(parsedFaqs);
          }
        }
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, [slug]);

  useEffect(() => {
    if (!post) return;
    document.title = post.metaTitle || post.tittle || "Blog Post";
    const metaDescription =
      document.querySelector("meta[name='description']") ||
      (() => {
        const meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
        return meta;
      })();

    metaDescription.setAttribute("content", post.metaDescription || "");
    const metaKeywords =
      document.querySelector("meta[name='keywords']") ||
      (() => {
        const meta = document.createElement("meta");
        meta.name = "keywords";
        document.head.appendChild(meta);
        return meta;
      })();

    metaKeywords.setAttribute("content", post.metaKeywords || "");
  }, [post]);

  if (!post) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full h-60 sm:h-72 md:h-96 overflow-hidden mb-10">
        <img
          src={`${import.meta.env.VITE_BASE_URL_IMAGE}${post.image}`}
          alt={post.tittle}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold ">
            {post.tittle}
          </h1>
        </div>

        <div className="flex items-center space-x-4 mb-10">
          <div className="flex flex-col sm:flex-row sm:space-x-6 text-gray-600 text-sm">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <FaCalendarAlt className="text-green-600 w-5 h-5" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaUser className="text-green-600 w-5 h-5" />
              <span>{post.name}</span>
            </div>
          </div>
        </div>

        {/* Description + Sidebar */}
        <div className="flex flex-col md:flex-row md:space-x-12">
          <article className="flex-1 text-gray-700 space-y-4 text-lg leading-relaxed">
            <div
              className="prose prose-green max-w-none"
              dangerouslySetInnerHTML={{ __html: post.description }}
            ></div>
          </article>

          {/* Sidebar */}
          <aside className="w-full md:w-80 mt-12 md:mt-0 space-y-10">
            <QueriesForm />
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-lg font-bold mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
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

      {/* Popular Posts */}
      <BlogPopularSection />

      {/* FAQ Section - Only show if valid FAQs exist */}
      {faqs.length > 0 && (
        <section className="py-12 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
            >
              Have Questions? We've Got Answers.
            </motion.h2>
            <p className="text-base sm:text-lg text-gray-800 mb-8 sm:mb-12">
              Here are some quick answers to help you understand this topic
              better.
            </p>

            <div className="space-y-4 text-left">
              {faqs.map((faq) => (
                <div key={faq.id} className="border-b-2 border-gray-200 py-4">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <h3 className="font-semibold text-base sm:text-lg md:text-xl text-gray-800">
                      {faq.question}
                    </h3>
                    {openFaqId === faq.id ? (
                      <FaMinus className="text-green-800 text-lg sm:text-2xl" />
                    ) : (
                      <FaPlus className="text-green-800 text-lg sm:text-2xl" />
                    )}
                  </div>

                  <AnimatePresence>
                    {openFaqId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 text-gray-800 text-sm sm:text-lg"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetail;
