// import React from 'react'
// import {
//   FaPlus,
// } from "react-icons/fa";
// function Questions() {
//   return (
//       <section className="py-12 sm:py-16 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
//             Have Questions? We've Got Answers.
//           </h2>
//           <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
//             Here are some quick answers to help you choose the right course and
//             learning mode.
//           </p>
//           <div className="space-y-4 text-left">
//             {[
//               "Who can join ILT courses?",
//               "Do you provide placement support?",
//               "Are classes available online?",
//             ].map((question, idx) => (
//               <div
//                 key={idx}
//                 className="border-b-2 border-gray-200 py-4 flex justify-between items-center cursor-pointer"
//               >
//                 <h3 className="font-semibold text-base sm:text-lg md:text-xl text-gray-800">
//                   {question}
//                 </h3>
//                 <FaPlus className="text-green-600 text-lg sm:text-2xl" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
// )
// }

// export default Questions
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Questions = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openFaqId, setOpenFaqId] = useState(null);

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/admin/faqs?status=1&limit=10&offset=0`
      );
      const fetchedFaqs = res.data.data || [];
      setFaqs(fetchedFaqs.reverse());
    } catch (err) {
      setError(err.message);
      console.error("Error fetching FAQs:", err);
    } finally {
      setLoading(false);
    }
  };

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-50 text-red-600 rounded-lg text-center">
        Error loading FAQs: {error}
      </div>
    );
  }

  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
        >
          Have Questions? We've Got Answers.
        </motion.h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
          Here are some quick answers to help you choose the right course and
          learning mode.
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
                  <FaMinus className="text-green-600 text-lg sm:text-2xl" />
                ) : (
                  <FaPlus className="text-green-600 text-lg sm:text-2xl" />
                )}
              </div>
              <AnimatePresence>
                {openFaqId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-gray-600 text-sm sm:text-base"
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
  );
};

export default Questions;
