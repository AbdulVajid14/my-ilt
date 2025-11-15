import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const AbroadFaq = () => {
  const [openFaqId, setOpenFaqId] = useState(null);

  const faqs = [
    {
      id: 1,
      question:
        "What is the scope of Digital Marketing abroad for Indian students?",
      answer:
        "The scope is extremely high as countries like the UK, Canada, Australia, USA, and Germany have strong demand for Digital Marketers across agencies, startups, IT companies, and global brands.",
    },
    {
      id: 2,
      question:
        "Should I choose an MBA in Digital Marketing or an MSc in Digital Marketing?",
      answer:
        "If you are an experienced digital marketer (1+ years), an MBA is better. If you are a fresher or recent graduate, an MSc in Digital Marketing is the best fit.",
    },
    {
      id: 3,
      question: "Does ILT provide placement guarantee abroad?",
      answer:
        "No institute in the world can guarantee jobs abroad — but ILT provides 100% placement support, including resume building, LinkedIn optimization, interview preparation, and job search guidance.",
    },
    {
      id: 4,
      question: "Do universities offer guaranteed internships abroad?",
      answer:
        "Many universities abroad provide guaranteed internships, and several offer paid internships, depending on the program and country.",
    },
    {
      id: 5,
      question:
        "What opportunities do digital marketers get after studying abroad?",
      answer:
        "You can work in roles like Digital Marketing Executive, Social Media Manager, SEO Specialist, Performance Marketer, CRM Specialist, or Marketing Analyst in top international companies.",
    },
    {
      id: 6,
      question:
        "Can students work freelance or part-time while studying abroad?",
      answer:
        "Yes. Most countries allow part-time work (20 hours/week), and digital marketing freelancing opportunities are widely available on global platforms.",
    },
    {
      id: 7,
      question:
        "Will experienced digital marketers get better opportunities abroad?",
      answer:
        "Absolutely. Experienced digital marketers have very high chances of getting international full-time roles after completing an MBA or MSc.",
    },
    {
      id: 8,
      question:
        "Will companies abroad hire me as a full-time Digital Marketer after graduation?",
      answer:
        "Yes. Digital marketing is a high-demand skill, and companies actively hire full-time Digital Marketers across the UK, Canada, Australia, USA, and New Zealand.",
    },
    {
      id: 9,
      question:
        "What is the average salary after completing a Masters in Digital Marketing abroad?",
      answer:
        "Average salaries range from $40,000 to $100,000 per year, depending on country, experience, and job role.",
    },
    {
      id: 10,
      question:
        "Why choose Internet Leads Training (ILT) for Masters Digital Marketing Abroad guidance?",
      answer:
        "ILT is India’s #1 Digital Marketing Institute, and the only institute focusing exclusively on Masters-level Digital Marketing programs abroad. With the leadership of Jitto Jose, who studied and worked in London, ILT offers unmatched expertise, guidance, and practical digital marketing training to help students settle abroad.",
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

export default AbroadFaq;
