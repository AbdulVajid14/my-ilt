import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import QueriesForm from "../components/CommonComponents/QueriesForm";
import Questions from "../components/Home/Questions";
import { motion } from "framer-motion";

const Testimonial = () => {
  const { slug } = useParams();
  const [graduate, setGraduate] = useState(null);
  const [otherGraduates, setOtherGraduates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGraduate();
  }, [slug]);

  const fetchGraduate = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_BASE_URL
        }/admin/graduates?status=1&limit=10&offset=0`
      );
      const graduates = res.data.data.map((g) => ({
        ...g,
        slug: g.name.toLowerCase().replace(/\s+/g, "-"),
      }));
      const foundGraduate = graduates.find((g) => g.slug === slug);
      if (!foundGraduate) {
        throw new Error("Graduate not found");
      }
      setGraduate(foundGraduate);
      setOtherGraduates(graduates.filter((g) => g.slug !== slug).slice(0, 4));
    } catch (err) {
      setError(err.message);
      console.error("Error fetching graduate:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !graduate) {
    return (
      <div className="text-center py-20 text-2xl font-semibold text-gray-700">
        {error || "Graduate not found."}
      </div>
    );
  }

  return (
    <div className="mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-[300px] sm:h-[400px] flex items-center justify-start text-white text-3xl sm:text-4xl font-bold text-left px-4 sm:px-12 lg:px-24"
        style={{
          backgroundImage:
            'url("/images/WhatsApp Image 2025-10-07 at 16.33.40_5fe85d1d.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {graduate.name} works as a <br /> {graduate.post} at {graduate.company}
      </motion.div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_auto] gap-12">
          {/* Left: Profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <img
              src={`${import.meta.env.VITE_BASE_URL_IMAGE}${graduate.image}`}
              alt={graduate.name}
              className="w-24 h-24 rounded-full mx-auto"
              loading="lazy"
            />
            <h2 className="font-bold text-xl mt-4 text-center">
              {graduate.name}
            </h2>
            <p className="text-sm text-gray-600 text-center">
              Organizations he works with
            </p>
            <h1 className="text-2xl font-bold text-center uppercase mt-2">
              {graduate.company}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 text-gray-700"
          >
            {graduate.details && (
              <p className="italic text-gray-700">
                <span className="text-green-600 font-semibold">
                  “{graduate.details}”
                </span>
              </p>
            )}

            {graduate.details2 && (
              <div
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: graduate.details2 }}
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <QueriesForm />
            <div className="rounded-lg p-6 shadow-md flex flex-col gap-6">
              {/* Clickable Other Graduates Grid */}
              <div className="grid grid-cols-2 gap-4">
                {otherGraduates.map((student) => (
                  <Link
                    key={student.id}
                    to={`/testimonial/${student.slug}`}
                    className="flex flex-col items-center hover:scale-105 transition-transform duration-200"
                  >
                    <img
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                      src={`${import.meta.env.VITE_BASE_URL_IMAGE}${
                        student.image
                      }`}
                      alt={student.name}
                      loading="lazy"
                    />
                    <p className="mt-2 font-medium text-center text-sm hover:text-blue-600">
                      {student.name}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between">
                <p className="text-4xl font-extrabold">100+</p>
                <p className="text-green-600 font-semibold">
                  Students Trained, Many Successfully Hired!
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold">
            Our Students Are{" "}
            <span className="text-green-600">Getting Hired!</span>
          </h2>
          <p className="mt-4 text-gray-700">
            Many of our graduates have moved into exciting{" "}
            <strong>careers with top companies.</strong> From digital marketing
            to data analytics, ILT equips students with the skills and
            confidence to thrive in the industry.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherGraduates.slice(0, 4).map((grad) => (
              <div
                key={grad.id}
                className="p-6 border rounded-lg shadow-sm text-left"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    className="w-16 h-16 rounded-full object-cover"
                    src={`${import.meta.env.VITE_BASE_URL_IMAGE}${grad.image}`}
                    alt={grad.name}
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      {grad.name}{" "}
                      <span className="text-yellow-400" aria-label="5 stars">
                        ★★★★★
                      </span>
                    </h3>
                    <p className="text-gray-600">
                      {grad.post} at {grad.company}
                    </p>
                  </div>
                </div>
                <p className="font-semibold">“{grad.details}”</p>
              </div>
            ))}
          </div>
        </motion.div>

        <Questions />
      </div>
    </div>
  );
};

export default Testimonial;
