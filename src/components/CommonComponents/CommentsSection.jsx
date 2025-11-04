
import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import axios from "axios";

const formatIST = (utcString) => {
  const utc = new Date(utcString);
  const ist = new Date(utc.getTime() + 5.5 * 60 * 60 * 1000);
  return ist.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

const CommentsSection = ({ blog_id }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", text: "" });

  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 4;

  const API = `${import.meta.env.VITE_BASE_URL}`;

  const fetchComments = async () => {
    if (!blog_id) return;
    try {
      setLoading(true);
      setError(null);
      const { data } = await axios.get(`${API}/blog-comments`, {
        params: { blog_id },
      });
      if (data.success) {
        setComments(data.data);
        setCurrentPage(1); 
      } else {
        setError("Failed to load comments");
      }
    } catch (e) {
      console.error(e);
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [blog_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const text = form.text.trim();
    if (!name || !text) return alert("Name and comment are required");

    setPosting(true);
    setError(null);
    try {
      const payload = {
        name,
        email: form.email.trim() || null,
        Comment: text,
        blog_id,
      };
      const { data } = await axios.post(`${API}/blog-comments`, payload);
      if (data.success) {
        await fetchComments(); 
        setForm({ name: "", email: "", text: "" });
      }
    } catch (e) {
      console.error(e);
      setError("Could not post comment");
    } finally {
      setPosting(false);
    }
  };

  const totalPages = Math.ceil(comments.length / commentsPerPage);
  const indexOfLast = currentPage * commentsPerPage;
  const indexOfFirst = indexOfLast - commentsPerPage;
  const currentComments = comments.slice(indexOfFirst, indexOfLast);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 -mt-16">
      <div>
        <h2 className="text-2xl font-bold mb-6">
          {comments.length} Comment{comments.length !== 1 && "s"}
        </h2>

        {loading ? (
          <p className="text-gray-500">Loading comments…</p>
        ) : error ? (
          <p className="text-red-600 text-sm">{error}</p>
        ) : comments.length === 0 ? (
          <p className="text-gray-500">No comments yet. Be the first!</p>
        ) : (
          <>
            <div className="space-y-8">
              {currentComments.map((c) => (
                <div key={c.id} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <FaUser className="text-gray-600 text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{c.name}</h3>
                    <p className="text-gray-500 text-sm mb-2">{formatIST(c.date)}</p>
                    <p className="text-gray-800 leading-relaxed">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <nav className="mt-8 flex items-center justify-center gap-2">
                {/* Prev Button */}
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-full bg-green-100 text-green-700 hover:bg-green-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
                  aria-label="Previous page"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

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

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-full bg-green-100 text-green-700 hover:bg-green-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
                  aria-label="Next page"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </nav>
            )}
          </>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">Your Views Please!</h2>
        <p className="text-gray-500 mb-6 text-sm">
          Your email address will not be published. Required fields are marked *
        </p>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Name *</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                disabled={posting}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                disabled={posting}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Your Comment *</label>
            <textarea
              required
              rows={5}
              value={form.text}
              onChange={(e) => setForm({ ...form, text: e.target.value })}
              disabled={posting}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={posting}
            className="bg-green-600 text-white font-medium px-6 py-2 rounded shadow hover:bg-green-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {posting ? "Posting…" : "Post Comment"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CommentsSection;