
// import React from "react";
// import { useParams } from "react-router-dom";
// import { FaStar, FaUsers, FaTrophy } from "react-icons/fa";
// import CommonCourses from "../components/CommonComponents/CommonCourses";
// import Questions from "../components/Home/Questions";

// const TrainersDetails = () => {
//   const { slug } = useParams();

//   const trainers = [
//     {
//       slug: "david-mathews",
//       name: "David Mathews",
//       title: "Senior Digital Marketing Strategist",
//       students: "20K+",
//       rating: "4.8",
//       experience: "15+",
//       image: "/images/WhatsApp Image 2025-10-09 at 09.28.17_89e65d6b.jpg",
//       description:
//         "Highly experienced digital marketing strategist with strong expertise in SEO and Social Media Marketing. He brings years of industry knowledge into his sessions, helping learners master practical strategies that align with the latest trends.",
//       education: "MBA in Marketing, Christ University, Bangalore",
//       skills: [
//         "SEO Optimization",
//         "Social Media Strategy",
//         "Campaign Management",
//         "Brand Growth",
//       ],
//     },
//     {
//       slug: "anita-varghese",
//       name: "Anita Varghese",
//       title: "Digital Advertising Specialist",
//       students: "18K+",
//       rating: "4.9",
//       experience: "12+",
//       image: "/images/WhatsApp Image 2025-10-01 at 14.31.44_db38e36e.jpg",
//       description:
//         "Expert in PPC and content marketing with a passion for helping brands achieve measurable ROI. Anita focuses on hands-on performance-driven ad campaigns and audience growth strategies.",
//       education: "MBA in Digital Marketing, IIM Kozhikode",
//       skills: [
//         "PPC",
//         "Content Marketing",
//         "Campaign Optimization",
//         "Ad Strategy",
//       ],
//     },
//     {
//       slug: "rahul-menon",
//       name: "Rahul Menon",
//       title: "Lead Data Analyst",
//       students: "12K+",
//       rating: "4.7",
//       experience: "10+",
//       image: "/images/WhatsApp Image 2025-10-01 at 14.31.44_7292d380.jpg",
//       description:
//         "Rahul is a data-driven strategist specializing in Python analytics and data visualization. He transforms raw data into actionable insights that drive marketing success.",
//       education: "MSc in Data Analytics, NIT Calicut",
//       skills: [
//         "Data Visualization",
//         "Python Analytics",
//         "Predictive Modeling",
//         "Business Intelligence",
//       ],
//     },
//   ];

//   const trainer = trainers.find((t) => t.slug === slug);

//   if (!trainer)
//     return (
//       <div className="text-center py-20 text-2xl font-semibold text-gray-700">
//         Trainer not found.
//       </div>
//     );

//   const stats = [
//     {
//       icon: <FaStar className="text-white text-xl" />,
//       value: trainer.rating,
//       label: "Rating",
//     },
//     {
//       icon: <FaUsers className="text-white text-xl" />,
//       value: trainer.students,
//       label: "Total Students",
//     },
//     {
//       icon: <FaTrophy className="text-white text-xl" />,
//       value: trainer.experience,
//       label: "Years Experience",
//     },
//   ];

//   return (
//     <div className="w-full">
//       {/* Banner */}
//       <section
//         className="w-full bg-cover bg-center relative"
//         style={{
//           backgroundImage:
//             "url('/images/WhatsApp Image 2025-10-09 at 09.28.16_26575eaa.jpg')",
//           height: "400px",
//         }}
//       >
//         <div className="absolute inset-0 bg-opacity-60 flex items-center justify-center">
//           <h1 className="text-white text-4xl md:text-5xl font-bold">Trainers</h1>
//         </div>
//       </section>

//       {/* Trainer Info */}
//       <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-10">
//         <div className="flex-shrink-0 w-full md:w-1/3 rounded-lg overflow-hidden shadow-lg">
//           <img
//             src={trainer.image}
//             alt={trainer.name}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="flex-grow">
//           <p className="text-lg font-semibold">Hi, I am</p>
//           <h2 className="text-3xl font-extrabold mb-1">{trainer.name}</h2>
//           <p className="text-gray-500 mb-6">{trainer.title}</p>
//           <p className="mb-8 text-gray-800 leading-relaxed">
//             {trainer.description}
//           </p>

//           {/* Stats */}
//           <div className="w-full flex flex-wrap md:flex-nowrap justify-between items-center bg-white border rounded-xl shadow-sm py-6 px-8 gap-6">
//             {stats.map((item, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-4 flex-1 justify-center border-r last:border-none border-gray-200"
//               >
//                 <div className="bg-green-600 p-3 rounded-md flex items-center justify-center text-white">
//                   {item.icon}
//                 </div>
//                 <div className="text-center md:text-left">
//                   <p className="font-bold text-xl text-gray-900">
//                     {item.value}
//                   </p>
//                   <p className="text-gray-700 text-sm">{item.label}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Education & Courses */}
//       <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-10">
//         <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/3">
//           <h3 className="text-2xl font-bold mb-6">Education</h3>
//           <p className="flex items-center gap-2 mb-8 text-lg font-semibold text-gray-700">
//             <svg
//               className="w-6 h-6 text-green-600"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M16.707 5.293a1 1 0 00-1.414-1.414L9 10.172 6.707 7.879a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             {trainer.education}
//           </p>

//           <h3 className="text-2xl font-bold mb-6">Skills</h3>
//           <div className="bg-green-50 p-6 rounded-lg grid grid-cols-2 gap-4 text-center text-sm max-w-xs">
//             {trainer.skills.map((skill, i) => (
//               <span
//                 key={i}
//                 className="border border-green-500 rounded-full py-1 px-3 inline-block"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Related Courses */}
//         <CommonCourses />
//       </section>
//       <Questions/>
//     </div>
//   );
// };

// export default TrainersDetails;
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaUsers, FaTrophy } from "react-icons/fa";
import CommonCourses from "../components/CommonComponents/CommonCourses";
import Questions from "../components/Home/Questions";

const TrainersDetails = () => {
  const { slug } = useParams();
  const [trainer, setTrainer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrainer();
  }, [slug]);

  const fetchTrainer = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/admin/trainers?status=1&limit=10&offset=0`
      );
      const trainers = res.data.data.map((t) => ({
        ...t,
        slug: t.name.toLowerCase().replace(/\s+/g, "-"),
        skills: t.skills ? t.skills.split("\r\n") : [],
      }));
      const foundTrainer = trainers.find((t) => t.slug === slug);
      if (!foundTrainer) {
        throw new Error("Trainer not found");
      }
      setTrainer(foundTrainer);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching trainer:", err);
    } finally {
      setLoading(false);
    }
  };

      useEffect(() => {
        if (!trainer) return;
        document.title = trainer.metaTitle ;
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
          trainer.metaDescription
        );
        const metaKeywords =
          document.querySelector("meta[name='keywords']") ||
          (() => {
            const meta = document.createElement("meta");
            meta.name = "keywords";
            document.head.appendChild(meta);
            return meta;
          })();
    
        metaKeywords.setAttribute("content", trainer.metaKeywords || "");
      }, [trainer]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !trainer) {
    return (
      <div className="text-center py-20 text-2xl font-semibold text-gray-700">
        {error || "Trainer not found."}
      </div>
    );
  }

  const stats = [
    {
      icon: <FaStar className="text-white text-xl" />,
      value: trainer.rating,
      label: "Rating",
    },
    {
      icon: <FaUsers className="text-white text-xl" />,
      value: trainer.students,
      label: "Total Students",
    },
    {
      icon: <FaTrophy className="text-white text-xl" />,
      value: trainer.experience,
      label: "Years Experience",
    },
  ];

  return (
    <div className="w-full">
      {/* Banner */}
      <section
        className="w-full bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('/images/WhatsApp Image 2025-10-09 at 09.28.16_26575eaa.jpg')",
          height: "400px",
        }}
      >
        <div className="absolute inset-0 bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Trainers</h1>
        </div>
      </section>

      {/* Trainer Info */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-10">
        <div className="flex-shrink-0 w-full md:w-1/3 rounded-lg overflow-hidden shadow-lg">
          <img
            src={`${import.meta.env.VITE_BASE_URL_IMAGE}${trainer.image}`}
            alt={trainer.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex-grow">
          <p className="text-lg font-semibold">Hi, I am</p>
          <h2 className="text-3xl font-extrabold mb-1">{trainer.name}</h2>
          <p className="text-gray-500 mb-6">{trainer.post}</p>
          <p className="mb-8 text-gray-800 leading-relaxed">{trainer.details}</p>

          {/* Stats */}
          <div className="w-full flex flex-wrap md:flex-nowrap justify-between items-center bg-white border rounded-xl shadow-sm py-6 px-8 gap-6">
            {stats.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 flex-1 justify-center border-r last:border-none border-gray-200"
              >
                <div className="bg-green-600 p-3 rounded-md flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div className="text-center md:text-left">
                  <p className="font-bold text-xl text-gray-900">{item.value}</p>
                  <p className="text-gray-700 text-sm">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Courses */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-10">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/3">
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <p className="flex items-center gap-2 mb-8 text-lg font-semibold text-gray-700">
            <svg
              className="w-6 h-6 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 00-1.414-1.414L9 10.172 6.707 7.879a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7z"
                clipRule="evenodd"
              />
            </svg>
            {trainer.education}
          </p>

          <h3 className="text-2xl font-bold mb-6">Skills</h3>
          <div className="bg-green-50 p-6 rounded-lg grid grid-cols-2 gap-4 text-center text-sm max-w-xs">
            {trainer.skills.map((skill, i) => (
              <span
                key={i}
                className="border border-green-500 rounded-full py-1 px-3 inline-block"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Related Courses */}
        <CommonCourses />
      </section>
      <Questions />
    </div>
  );
};

export default TrainersDetails;