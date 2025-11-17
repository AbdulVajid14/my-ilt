import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const HireFaq = () => {
  const [openFaqId, setOpenFaqId] = useState(null);

  const faqs = [
  {
    id: 1,
    question: "What service does Internet Leads Training (ILT) provide for companies?",
    answer:
      "ILT offers trained and experienced digital marketers as virtual employees. Companies can hire dedicated digital marketers who work full-time from our office while delivering results for your business.",
  },
  {
    id: 2,
    question: "What types of digital marketers can we hire from ILT?",
    answer:
      "We provide all levels of talent — freshers, mid-level marketers, specialists, and senior digital marketers with proven experience in SEO, Google Ads, Meta Ads, content, automation, and more.",
  },
  {
    id: 3,
    question: "Do the digital marketers work from our office or yours?",
    answer:
      "They work full-time from ILT’s office under professional supervision, ensuring discipline, performance, and zero HR headaches for you.",
  },
  {
    id: 4,
    question: "What happens if an employee leaves or doesn’t perform?",
    answer:
      "No need to worry. We provide an immediate replacement at no extra charge, ensuring your marketing stays uninterrupted.",
  },
  {
    id: 5,
    question: "How is this better compared to hiring a full-time in-house employee?",
    answer:
      "You save on salary, HR costs, office expenses, and training. Our virtual employees cost much less while offering higher expertise and consistency.",
  },
  {
    id: 6,
    question: "Is there any deposit, advance payment, or long-term contract?",
    answer:
      "No. There is no deposit, no hidden charges, and you can terminate the service anytime without penalties.",
  },
  {
    id: 7,
    question: "Are your digital marketers verified and experienced?",
    answer:
      "Yes. Every marketer is trained, tested, verified, and skill-checked by ILT before being assigned. You get professionals who can start delivering immediately.",
  },
  {
    id: 8,
    question: "Will the digital marketer be dedicated only to our company?",
    answer:
      "Yes. You get a full-time, dedicated digital marketer who works exclusively on your projects and tasks.",
  },
  {
    id: 9,
    question: "What kind of results can we expect?",
    answer:
      "Our team has experience generating quality leads, managing campaigns, improving online visibility, and delivering measurable growth across industries.",
  },
  {
    id: 10,
    question: "How quickly can we start?",
    answer:
      "You can hire a digital marketer within 24–48 hours. We match the right candidate, onboard them, and ensure a smooth start with zero delay.",
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

export default HireFaq;
