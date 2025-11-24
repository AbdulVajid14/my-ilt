import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ModeFaq = () => {
  const [openFaqId, setOpenFaqId] = useState(null);

  const faqs = [
    {
      id: 1,
      question:
        "What is the benefit of learning digital marketing online in Kochi, Kerala?",
      answer:
        "Online training lets you learn from anywhere in Kochi, Kerala with flexible timings. You also get recorded sessions, practical tasks, and access to expert trainers without travel.",
    },
    {
      id: 2,
      question:
        "Is offline digital marketing training better for beginners in Kochi, Kerala?",
      answer:
        "Offline training in Kochi, Kerala offers classroom interaction, hands-on support, and real-time practice. It’s ideal for students who prefer face-to-face learning.",
    },
    {
      id: 3,
      question: "Do digital marketing workshops in Kochi, Kerala help with practical skills?",
      answer:
        "Yes, workshops in Kochi, Kerala focus on real-time tools, tasks, and campaign creation. They are short, intensive, and designed for quick skill enhancement.",
    },
    {
      id: 4,
      question: "Can I get individual digital marketing training in Kochi, Kerala?",
      answer:
        "Individual training offers one-to-one mentorship tailored to your goals. It’s a great option for those who want personal guidance and faster learning.",
    },
    {
      id: 5,
      question:
        "Do institutes in Kochi, Kerala offer digital marketing services along with training?",
      answer:
        "Many institutes in Kochi, Kerala provide both training and digital marketing services. This helps students learn from real client projects and industry experience.",
    },
    {
      id: 6,
      question:
        "What is private digital marketing training in Kochi, Kerala?",
      answer:
        "Private training is personalized coaching for individuals or small groups. It’s ideal for entrepreneurs, students, or professionals wanting focused learning at their own pace.",
    },
    {
      id: 7,
      question:
        "What happens during in-house digital marketing training for companies in Kochi, Kerala?",
      answer:
        "In-house training is conducted at your company location in Kochi, Kerala. The curriculum is customized to your team’s needs for better performance and faster implementation.",
    },
    {
      id: 8,
      question:
        "Is corporate digital marketing training available in Kochi, Kerala?",
      answer:
        "Yes, many institutes offer corporate training programs in Kochi, Kerala for marketing teams. These programs focus on strategy, tools, analytics, and real business applications.",
    },
    {
      id: 9,
      question:
        "Are digital marketing workshops in Kochi, Kerala suitable for college students?",
      answer:
        "Absolutely. Workshops in Kochi, Kerala are beginner-friendly and include practical sessions that help students understand tools, ads, SEO, and social media.",
    },
    {
      id: 10,
      question:
        "Can working professionals in Kochi, Kerala join weekend digital marketing classes?",
      answer:
        "Yes, many institutes in Kochi, Kerala offer weekend or flexible online batches. This allows working professionals to upskill without affecting their job schedule.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

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

export default ModeFaq;
