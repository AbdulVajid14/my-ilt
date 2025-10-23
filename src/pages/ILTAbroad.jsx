
// // import React from "react";
// // import { FaCheck } from "react-icons/fa";
// // import QueriesForm from "../components/CommonComponents/QueriesForm";
// // import Questions from "../components/Home/Questions";
// // import AbroadCourses from "../components/CommonComponents/AbroadCourses";
// // import { Link } from "react-router-dom";

// // const ILTAbroad = () => {const countries = [
// //   { name: "UK", flag: "/images/uk.jpg" },
// //   { name: "Canada", flag: "/images/canada.jpg" },
// //   { name: "New Zealand", flag: "/images/newzland.jpg" },
// //   { name: "Australia", flag: "/images/australia.jpg" },
// //   { name: "France", flag: "/images/france.jpg" },
// //   { name: "Germany", flag: "/images/germany.jpg" },
// //   { name: "Ireland", flag: "/images/ireland.jpg" },
// //   { name: "Netherlands", flag: "/images/netherland.jpg" },
// //   { name: "Spain", flag: "/images/spain.jpg" },
// //   { name: "USA", flag: "/images/usa.jpg" },
// // ];

// //   return (
// //     <div className="w-full">
// //       {/* Banner */}
// //       <section
// //         className="w-full bg-cover bg-center h-[400px] flex items-center justify-center text-white text-4xl font-bold"
// //         style={{
// //           backgroundImage:
// //             "url('/images/WhatsApp Image 2025-10-09 at 12.16.37_3518825f.jpg')",
// //         }}
// //       >
// //         <h1 className="text-center max-w-7xl px-4">
// //           Study Digital Marketing <br /> Abroad with ILT
// //         </h1>
// //       </section>

// //       {/* Overview */}
// //       <section className="max-w-7xl mx-auto px-6 py-12">
// //         <h2 className="text-3xl font-semibold mb-4">Overview</h2>
// //         <p className="text-gray-700 mb-8 max-w-4xl">
// //           Take your digital marketing career global!{" "}
// //           <span className="text-green-600 font-semibold">
// //             With ILT’s specialized
// //           </span>{" "}
// //           Study Abroad programs, you can gain international exposure, advanced
// //           certifications, and industry experience in top countries around the
// //           world. Whether you want to master SEO, social media, PPC, or
// //           analytics, our partnerships with reputed institutions ensure
// //           world-class training with real global opportunities.
// //         </p>
// //         <div className="flex gap-6">
// //           <img
// //             src="/images/WhatsApp Image 2025-10-09 at 12.16.37_bbff8d42.jpg"
// //             alt="Group meeting"
// //             className="w-full max-w-[384px] object-cover rounded-md"
// //           />
// //           <img
// //             src="/images/WhatsApp Image 2025-10-09 at 12.16.37_b662e1b3.jpg"
// //             alt="Working on laptop"
// //             className="w-full max-w-[384px] object-cover rounded-md"
// //           />
// //           <img
// //             src="/images/WhatsApp Image 2025-10-09 at 12.16.37_eb5a450c.jpg"
// //             alt="Handshake agreement"
// //             className="w-full max-w-[384px] object-cover rounded-md"
// //           />
// //         </div>
// //       </section>

// //       {/* Why Choose ILT */}
// // <section className="max-w-7xl mx-auto px-6 py-12">
// //   {/* Row 1: Why Choose ILT (left) + Query Form (right) */}
// //   <div className="flex flex-col md:flex-row gap-12 md:gap-24">
// //     {/* Left Side */}
// //     <div className="flex-1">
// //       <h2 className="text-3xl font-semibold mb-6">
// //         Why Choose ILT for Abroad Studies?
// //       </h2>
// //       <ul className="list-disc list-inside space-y-3 text-gray-800 text-lg">
// //         <li>Specialized Digital Marketing Programs</li>
// //         <li>International Certifications Recognized Globally</li>
// //         <li>Job Placement Assistance After Course Completion</li>
// //         <li>Exposure to Global Industry Standards</li>
// //         <li>Guidance for Visa & Admission Support</li>
// //       </ul>
// //     </div>

// //     {/* Right Side */}
// //     <div className="w-full md:w-[35%]">
// //       <QueriesForm />
// //     </div>
// //   </div>

// //   {/* Row 2: Common Courses */}
// //  <div className="mt-16 flex items-center gap-4">
// // <AbroadCourses/>
// // <Link to="/courses" className="text-green-600 cursor-pointer flex items-center">
// //   View All <span className="ml-1">→</span>
// // </Link>

// // </div>
// // </section>
// // <section className="w-full py-12 bg-white">
// //       <div className="max-w-7xl mx-auto px-4 text-center">
// //         <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-gray-900">
// //           Countries You Can Choose
// //         </h2>

// //         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6 justify-items-center">
// //           {countries.map((country, index) => (
// //             <div key={index} className="flex flex-col items-center">
// //               <img
// //                 src={country.flag}
// //                 alt={country.name}
// //                 className="w-14 h-10 object-cover rounded-md shadow-sm mb-3"
// //               />
// //               <p className="text-gray-700 font-medium">{country.name}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>

// //       {/* How ILT Helps You */}
// //  <section className="px-6 py-28 md:py-20 bg-black text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
// //       {/* Green bubble for title — responsive & round */}
// //       <div className="absolute top-0 left-0 w-48 h-32 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-green-600 rounded-full opacity-80 flex items-center justify-center -translate-y-[60%]">
// //         <h2 className="text-xl md:text-2xl font-bold text-white text-center px-4 translate-y-10 md:translate-y-14">
// //           How ILT Helps You
// //         </h2>
// //       </div>

// //       {/* Left side list */}
// //       <div className="flex-1 z-10 mt-32 md:mt-0 md:ml-64 lg:ml-80">
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-base md:text-lg ">
// //           {[
// //             "Personalized counseling to choose the right country and program",
// //             "Assistance with applications, admissions & scholarships",
// //             "Guidance for student visa and travel process",
// //             "Pre-departure orientation for a smooth transition",
// //             "Ongoing mentorship and placement guidance",
// //           ].map((text, index) => (
// //             <div key={index} className="flex items-start gap-3">
// //               <FaCheck className="text-green-600 mt-1 text-lg flex-shrink-0" />
// //               <p>{text}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Right side image with green circle */}
// //       <div className="relative flex-1 z-10 mt-40 md:mt-0">
// //         <div className="absolute top-1/2 right-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-green-600 rounded-full opacity-80 translate-x-1/3 -translate-y-1/2 flex items-center justify-center">
// //           <img
// //             src="/images/WhatsApp Image 2025-09-20 at 10.54.24_04457969.jpg"
// //             alt="Student with laptop"
// //             className="rounded-full w-56 md:w-72 lg:w-80 relative z-20"
// //           />
// //         </div>
// //       </div>
// //     </section>

// //       {/* Student Success Stories */}
// //  <section className="max-w-7xl mx-auto px-6 py-12">
// //   <h2 className="text-3xl font-semibold mb-8 text-center">
// //     Student Success Stories
// //   </h2>

// //   <div className="bg-white border border-gray-300 rounded p-8 max-w-4xl mx-auto shadow-md">
// //     {/* Ayesha */}
// //     <div className="flex items-center gap-4 mb-4">
// //       <img
// //         src="/images/WhatsApp Image 2025-10-09 at 12.16.34_eaed36f3.jpg"
// //         alt="Ayesha P."
// //         className="rounded-full w-16 h-16 object-cover"
// //       />
// //       <h3 className="font-semibold text-lg">Ayesha P.</h3>
// //     </div>

// //     <p className="text-gray-700 mb-6">
// //       “Studying{" "}
// //       <span className="text-green-600 font-semibold">Digital Marketing</span> in
// //       Canada through ILT was the best decision. I got exposure to real
// //       international projects and landed my first job in Toronto.”
// //     </p>

// //     <p className="text-gray-700 italic mb-6 pl-6  ">
// //       “
// //       <span className="text-green-600 font-semibold">ILT’s support</span> with
// //       admissions and visa made my dream to study in Australia a reality. Today,
// //       I’m working as a Social Media Specialist at a top agency.”
// //     </p>

// //     {/* Rahul */}
// //     <div className="flex items-center justify-end gap-3">
// //       <p className="font-semibold text-right">Rahul K</p>
// //       <img
// //         src="/images/WhatsApp Image 2025-10-09 at 12.16.34_eaed36f3.jpg"
// //         alt="Rahul K."
// //         className="rounded-full w-12 h-12 object-cover"
// //       />
// //     </div>
// //   </div>
// // </section>


// //       {/* Application Section */}
// // <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-12">
// //   {/* Image Section */}
// //   <div className="w-full lg:w-1/2">
// //     <img
// //       src="/images/WhatsApp Image 2025-10-09 at 12.16.37_21373de5.jpg"
// //       alt="Graduates"
// //       className="w-full h-[350px] md:h-[450px] object-cover rounded-xl shadow-lg"
// //     />
// //   </div>

// //   {/* Form Section */}
// //   <div className="w-full lg:w-1/2">
// //     <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-6 md:p-8 rounded-xl shadow-md">
// //       <input
// //         type="text"
// //         placeholder="Name"
// //         className="p-3 border border-gray-300 rounded"
// //       />
// //       <input
// //         type="email"
// //         placeholder="Email"
// //         className="p-3 border border-gray-300 rounded"
// //       />
// //       <input
// //         type="tel"
// //         placeholder="Mobile No"
// //         className="p-3 border border-gray-300 rounded"
// //       />
// //       <select className="p-3 border border-gray-300 rounded">
// //         <option value="">Preferred Country</option>
// //         <option value="usa">USA</option>
// //         <option value="canada">Canada</option>
// //         <option value="australia">Australia</option>
// //       </select>
// //       <select className="p-3 border border-gray-300 rounded">
// //         <option value="">Program</option>
// //         <option value="seo">SEO Mastery</option>
// //         <option value="social-media">Social Media Marketing</option>
// //       </select>
// //       <select className="p-3 border border-gray-300 rounded">
// //         <option value="">Highest Qualification</option>
// //         <option value="bachelor">Bachelor's</option>
// //         <option value="master">Master's</option>
// //         <option value="phd">PhD</option>
// //       </select>
// //       <select className="p-3 border border-gray-300 rounded sm:col-span-2 md:col-span-1">
// //         <option value="">Experience</option>
// //         <option value="fresher">Fresher</option>
// //         <option value="1-2">1-2 Years</option>
// //         <option value="3+">3+ Years</option>
// //       </select>
// //       <textarea
// //         placeholder="Message"
// //         rows={4}
// //         className="p-3 border border-gray-300 rounded sm:col-span-2"
// //       ></textarea>
// //       <button
// //         type="submit"
// //         className="bg-green-600 text-white font-semibold rounded px-6 py-3 sm:col-span-2 hover:bg-green-700 transition"
// //       >
// //         Apply Now &gt;
// //       </button>
// //     </form>
// //   </div>
// // </section>

// //       <Questions/>
// //     </div>
// //   );
// // };

// // export default ILTAbroad;

// import React, { useState, useEffect } from "react";
// import { FaCheck } from "react-icons/fa";
// import QueriesForm from "../components/CommonComponents/QueriesForm";
// import Questions from "../components/Home/Questions";
// import AbroadCourses from "../components/CommonComponents/AbroadCourses";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const ILTAbroad = () => {
//   const countries = [
//     { name: "UK", flag: "/images/uk.jpg" },
//     { name: "Canada", flag: "/images/canada.jpg" },
//     { name: "New Zealand", flag: "/images/newzland.jpg" },
//     { name: "Australia", flag: "/images/australia.jpg" },
//     { name: "France", flag: "/images/france.jpg" },
//     { name: "Germany", flag: "/images/germany.jpg" },
//     { name: "Ireland", flag: "/images/ireland.jpg" },
//     { name: "Netherlands", flag: "/images/netherland.jpg" },
//     { name: "Spain", flag: "/images/spain.jpg" },
//     { name: "USA", flag: "/images/usa.jpg" },
//   ];

//   // Form state
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     country: "",
//     program: "",
//     qualification: "",
//     experience: "",
//     massage: "",
//   });

//   const [formStatus, setFormStatus] = useState({
//     loading: false,
//     success: null,
//     error: null,
//   });
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${import.meta.env.VITE_BASE_URL}/courses`)
//       .then((response) => {
//         if (response.data.success) {
//           const sortedCourses = response.data.data.sort((a, b) => (a.sequence || 0) - (b.sequence || 0));
//           const abroadCourses = sortedCourses
//             .filter((c) => c.category_id === 3)
//             .slice(0, 2)
//             .map((c) => ({
//               title: c.name,
//             }));
//           setCourses(abroadCourses);
//         }
//       })
//       .catch((error) => console.error("Error fetching courses:", error));
//   }, []);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormStatus({ loading: true, success: null, error: null });

//     // Basic client-side validation
//     if (!formData.name || !formData.email || !formData.contact || !formData.massage) {
//       setFormStatus({
//         loading: false,
//         success: null,
//         error: "Please fill out all required fields (Name, Email, Mobile No, Message).",
//       });
//       return;
//     }

//     try {
//       const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/InsertFranchise`, formData);
//       setFormStatus({
//         loading: false,
//         success: response.data.message,
//         error: null,
//       });
//       // Reset form on success
//       setFormData({
//         name: "",
//         email: "",
//         contact: "",
//         country: "",
//         program: "",
//         qualification: "",
//         experience: "",
//         massage: "",
//       });
//     } catch (error) {
//       setFormStatus({
//         loading: false,
//         success: null,
//         error: error.response?.data?.message || "Failed to submit the form. Please try again.",
//       });
//     }
//   };

//   return (
//     <div className="w-full">
//       {/* Banner */}
//       <section
//         className="w-full bg-cover bg-center h-[400px] flex items-center justify-center text-white text-4xl font-bold"
//         style={{
//           backgroundImage:
//             "url('/images/WhatsApp Image 2025-10-09 at 12.16.37_3518825f.jpg')",
//         }}
//       >
//         <h1 className="text-center max-w-7xl px-4">
//           Study Digital Marketing <br /> Abroad with ILT
//         </h1>
//       </section>

//       {/* Overview */}
//       <section className="max-w-7xl mx-auto px-6 py-12">
//         <h2 className="text-3xl font-semibold mb-4">Overview</h2>
//         <p className="text-gray-700 mb-8 max-w-4xl">
//           Take your digital marketing career global!{" "}
//           <span className="text-green-600 font-semibold">With ILT’s specialized</span>{" "}
//           Study Abroad programs, you can gain international exposure, advanced
//           certifications, and industry experience in top countries around the
//           world. Whether you want to master SEO, social media, PPC, or
//           analytics, our partnerships with reputed institutions ensure
//           world-class training with real global opportunities.
//         </p>
//         <div className="flex gap-6">
//           <img
//             src="/images/WhatsApp Image 2025-10-09 at 12.16.37_bbff8d42.jpg"
//             alt="Group meeting"
//             className="w-full max-w-[384px] object-cover rounded-md"
//           />
//           <img
//             src="/images/WhatsApp Image 2025-10-09 at 12.16.37_b662e1b3.jpg"
//             alt="Working on laptop"
//             className="w-full max-w-[384px] object-cover rounded-md"
//           />
//           <img
//             src="/images/WhatsApp Image 2025-10-09 at 12.16.37_eb5a450c.jpg"
//             alt="Handshake agreement"
//             className="w-full max-w-[384px] object-cover rounded-md"
//           />
//         </div>
//       </section>

//       {/* Why Choose ILT */}
//       <section className="max-w-7xl mx-auto px-6 py-12">
//         <div className="flex flex-col md:flex-row gap-12 md:gap-24">
//           <div className="flex-1">
//             <h2 className="text-3xl font-semibold mb-6">Why Choose ILT for Abroad Studies?</h2>
//             <ul className="list-disc list-inside space-y-3 text-gray-800 text-lg">
//               <li>Specialized Digital Marketing Programs</li>
//               <li>International Certifications Recognized Globally</li>
//               <li>Job Placement Assistance After Course Completion</li>
//               <li>Exposure to Global Industry Standards</li>
//               <li>Guidance for Visa & Admission Support</li>
//             </ul>
//           </div>
//           <div className="w-full md:w-[35%]">
//             <QueriesForm />
//           </div>
//         </div>
//         <div className="mt-16 flex items-center gap-4">
//           <AbroadCourses />
//           <Link to="/courses" className="text-green-600 cursor-pointer flex items-center">
//             View All <span className="ml-1">→</span>
//           </Link>
//         </div>
//       </section>

//       {/* Countries Section */}
//       <section className="w-full py-12 bg-white">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-gray-900">
//             Countries You Can Choose
//           </h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6 justify-items-center">
//             {countries.map((country, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <img
//                   src={country.flag}
//                   alt={country.name}
//                   className="w-14 h-10 object-cover rounded-md shadow-sm mb-3"
//                 />
//                 <p className="text-gray-700 font-medium">{country.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How ILT Helps You */}
//       <section className="px-6 py-28 md:py-20 bg-black text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
//         <div className="absolute top-0 left-0 w-48 h-32 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-green-600 rounded-full opacity-80 flex items-center justify-center -translate-y-[60%]">
//           <h2 className="text-xl md:text-2xl font-bold text-white text-center px-4 translate-y-10 md:translate-y-14">
//             How ILT Helps You
//           </h2>
//         </div>
//         <div className="flex-1 z-10 mt-32 md:mt-0 md:ml-64 lg:ml-80">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-base md:text-lg ">
//             {[
//               "Personalized counseling to choose the right country and program",
//               "Assistance with applications, admissions & scholarships",
//               "Guidance for student visa and travel process",
//               "Pre-departure orientation for a smooth transition",
//               "Ongoing mentorship and placement guidance",
//             ].map((text, index) => (
//               <div key={index} className="flex items-start gap-3">
//                 <FaCheck className="text-green-600 mt-1 text-lg flex-shrink-0" />
//                 <p>{text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="relative flex-1 z-10 mt-40 md:mt-0">
//           <div className="absolute top-1/2 right-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-green-600 rounded-full opacity-80 translate-x-1/3 -translate-y-1/2 flex items-center justify-center">
//             <img
//               src="/images/WhatsApp Image 2025-09-20 at 10.54.24_04457969.jpg"
//               alt="Student with laptop"
//               className="rounded-full w-56 md:w-72 lg:w-80 relative z-20"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Student Success Stories */}
//       <section className="max-w-7xl mx-auto px-6 py-12">
//         <h2 className="text-3xl font-semibold mb-8 text-center">Student Success Stories</h2>
//         <div className="bg-white border border-gray-300 rounded p-8 max-w-4xl mx-auto shadow-md">
//           <div className="flex items-center gap-4 mb-4">
//             <img
//               src="/images/WhatsApp Image 2025-10-09 at 12.16.34_eaed36f3.jpg"
//               alt="Ayesha P."
//               className="rounded-full w-16 h-16 object-cover"
//             />
//             <h3 className="font-semibold text-lg">Ayesha P.</h3>
//           </div>
//           <p className="text-gray-700 mb-6">
//             “Studying{" "}
//             <span className="text-green-600 font-semibold">Digital Marketing</span> in
//             Canada through ILT was the best decision. I got exposure to real
//             international projects and landed my first job in Toronto.”
//           </p>
//           <p className="text-gray-700 italic mb-6 pl-6">
//             “<span className="text-green-600 font-semibold">ILT’s support</span> with
//             admissions and visa made my dream to study in Australia a reality. Today,
//             I’m working as a Social Media Specialist at a top agency.”
//           </p>
//           <div className="flex items-center justify-end gap-3">
//             <p className="font-semibold text-right">Rahul K</p>
//             <img
//               src="/images/WhatsApp Image 2025-10-09 at 12.16.34_eaed36f3.jpg"
//               alt="Rahul K."
//               className="rounded-full w-12 h-12 object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Application Section */}
//       <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-12">
//         <div className="w-full lg:w-1/2">
//           <img
//             src="/images/WhatsApp Image 2025-10-09 at 12.16.37_21373de5.jpg"
//             alt="Graduates"
//             className="w-full h-[350px] md:h-[450px] object-cover rounded-xl shadow-md"
//           />
//         </div>
//         <div className="w-full lg:w-1/2">
//           <form
//             onSubmit={handleSubmit}
//             className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-6 md:p-8 rounded-xl shadow-md"
//           >
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Name"
//               className="p-3 border border-gray-300 rounded"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className="p-3 border border-gray-300 rounded"
//               required
//             />
//             <input
//               type="tel"
//               name="contact"
//               value={formData.contact}
//               onChange={handleChange}
//               placeholder="Mobile No"
//               className="p-3 border border-gray-300 rounded"
//               required
//             />
//             <select
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded"
//             >
//               <option value="">Preferred Country</option>
//               <option value="usa">USA</option>
//               <option value="canada">Canada</option>
//               <option value="australia">Australia</option>
//               <option value="uk">UK</option>
//               <option value="new-zealand">New Zealand</option>
//               <option value="france">France</option>
//               <option value="germany">Germany</option>
//               <option value="ireland">Ireland</option>
//               <option value="netherlands">Netherlands</option>
//               <option value="spain">Spain</option>
//             </select>
//             <select
//               name="program"
//               value={formData.program}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded"
//             >
//               <option value="">Program</option>
//               {courses.map((course, index) => (
//                 <option key={index} value={course.title.toLowerCase().replace(/\s+/g, '-')}>
//                   {course.title}
//                 </option>
//               ))}
//             </select>
//             <select
//               name="qualification"
//               value={formData.qualification}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded"
//             >
//               <option value="">Highest Qualification</option>
//               <option value="bachelor">Bachelor's</option>
//               <option value="master">Master's</option>
//               <option value="phd">PhD</option>
//             </select>
//             <select
//               name="experience"
//               value={formData.experience}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded sm:col-span-2 md:col-span-1"
//             >
//               <option value="">Experience</option>
//               <option value="fresher">Fresher</option>
//               <option value="1-2">1-2 Years</option>
//               <option value="3+">3+ Years</option>
//             </select>
//             <textarea
//               name="massage"
//               value={formData.massage}
//               onChange={handleChange}
//               placeholder="Message"
//               rows={4}
//               className="p-3 border border-gray-300 rounded sm:col-span-2"
//               required
//             ></textarea>
//             <button
//               type="submit"
//               disabled={formStatus.loading}
//               className={`bg-green-600 text-white font-semibold rounded px-6 py-3 sm:col-span-2 hover:bg-green-700 transition ${
//                 formStatus.loading ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               {formStatus.loading ? "Submitting..." : "Apply Now >"}
//             </button>
//             {formStatus.success && (
//               <p className="text-green-600 text-center sm:col-span-2">{formStatus.success}</p>
//             )}
//             {formStatus.error && (
//               <p className="text-red-600 text-center sm:col-span-2">{formStatus.error}</p>
//             )}
//           </form>
//         </div>
//       </section>

//       <Questions />
//     </div>
//   );
// };

// export default ILTAbroad;

import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import QueriesForm from "../components/CommonComponents/QueriesForm";
import Questions from "../components/Home/Questions";
import AbroadCourses from "../components/CommonComponents/AbroadCourses";
import { Link } from "react-router-dom";
import axios from "axios";

const ILTAbroad = () => {
  const countries = [
    { name: "UK", value: "uk", flag: "/images/uk.jpg" },
    { name: "Canada", value: "canada", flag: "/images/canada.jpg" },
    { name: "New Zealand", value: "new-zealand", flag: "/images/newzland.jpg" },
    { name: "Australia", value: "australia", flag: "/images/australia.jpg" },
    { name: "France", value: "france", flag: "/images/france.jpg" },
    { name: "Germany", value: "germany", flag: "/images/germany.jpg" },
    { name: "Ireland", value: "ireland", flag: "/images/ireland.jpg" },
    { name: "Netherlands", value: "netherlands", flag: "/images/netherland.jpg" },
    { name: "Spain", value: "spain", flag: "/images/spain.jpg" },
    { name: "USA", value: "usa", flag: "/images/usa.jpg" },
  ];

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    country: "",
    program: "",
    qualification: "",
    experience: "",
    massage: "",
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/courses`)
      .then((response) => {
        if (response.data.success) {
          const sortedCourses = response.data.data
            .sort((a, b) => (a.sequence || 0) - (b.sequence || 0))
            .filter((c) => c.category_id === 3)
            .slice(0, 2)
            .map((c) => ({
              id: c.id,
              name: c.name,
            }));
          setCourses(sortedCourses);
        }
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: null, error: null });

    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.contact || !formData.massage) {
      setFormStatus({
        loading: false,
        success: null,
        error: "Please fill out all required fields (Name, Email, Mobile No, Message).",
      });
      return;
    }

    // Log formData for debugging
    console.log("Form Data Submitted:", formData);

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/InsertFranchise`, formData);
      setFormStatus({
        loading: false,
        success: response.data.message,
        error: null,
      });
      // Reset form on success
      setFormData({
        name: "",
        email: "",
        contact: "",
        country: "",
        program: "",
        qualification: "",
        experience: "",
        massage: "",
      });
    } catch (error) {
      console.error("Form Submission Error:", error.response?.data || error);
      setFormStatus({
        loading: false,
        success: null,
        error: error.response?.data?.message || "Failed to submit the form. Please try again.",
      });
    }
  };

  return (
    <div className="w-full">
      {/* Banner */}
      <section
        className="w-full bg-cover bg-center h-[400px] flex items-center justify-center text-white text-4xl font-bold"
        style={{
          backgroundImage:
            "url('/images/WhatsApp Image 2025-10-09 at 12.16.37_3518825f.jpg')",
        }}
      >
        <h1 className="text-center max-w-7xl px-4">
          Study Digital Marketing <br /> Abroad with ILT
        </h1>
      </section>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 mb-8 max-w-4xl">
          Take your digital marketing career global!{" "}
          <span className="text-green-600 font-semibold">With ILT’s specialized</span>{" "}
          Study Abroad programs, you can gain international exposure, advanced
          certifications, and industry experience in top countries around the
          world. Whether you want to master SEO, social media, PPC, or
          analytics, our partnerships with reputed institutions ensure
          world-class training with real global opportunities.
        </p>
        <div className="flex gap-6">
          <img
            src="/images/WhatsApp Image 2025-10-09 at 12.16.37_bbff8d42.jpg"
            alt="Group meeting"
            className="w-full max-w-[384px] object-cover rounded-md"
          />
          <img
            src="/images/WhatsApp Image 2025-10-09 at 12.16.37_b662e1b3.jpg"
            alt="Working on laptop"
            className="w-full max-w-[384px] object-cover rounded-md"
          />
          <img
            src="/images/WhatsApp Image 2025-10-09 at 12.16.37_eb5a450c.jpg"
            alt="Handshake agreement"
            className="w-full max-w-[384px] object-cover rounded-md"
          />
        </div>
      </section>

      {/* Why Choose ILT */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-6">Why Choose ILT for Abroad Studies?</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-800 text-lg">
              <li>Specialized Digital Marketing Programs</li>
              <li>International Certifications Recognized Globally</li>
              <li>Job Placement Assistance After Course Completion</li>
              <li>Exposure to Global Industry Standards</li>
              <li>Guidance for Visa & Admission Support</li>
            </ul>
          </div>
          <div className="w-full md:w-[35%]">
            <QueriesForm />
          </div>
        </div>
        <div className="mt-16 flex items-center gap-4">
          <AbroadCourses />
          <Link to="/courses" className="text-green-600 cursor-pointer flex items-center">
            View All <span className="ml-1">→</span>
          </Link>
        </div>
      </section>

      {/* Countries Section */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-gray-900">
            Countries You Can Choose
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6 justify-items-center">
            {countries.map((country, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-14 h-10 object-cover rounded-md shadow-sm mb-3"
                />
                <p className="text-gray-700 font-medium">{country.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How ILT Helps You */}
      <section className="px-6 py-28 md:py-20 bg-black text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
        <div className="absolute top-0 left-0 w-48 h-32 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-green-600 rounded-full opacity-80 flex items-center justify-center -translate-y-[60%]">
          <h2 className="text-xl md:text-2xl font-bold text-white text-center px-4 translate-y-10 md:translate-y-14">
            How ILT Helps You
          </h2>
        </div>
        <div className="flex-1 z-10 mt-32 md:mt-0 md:ml-64 lg:ml-80">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-base md:text-lg ">
            {[
              "Personalized counseling to choose the right country and program",
              "Assistance with applications, admissions & scholarships",
              "Guidance for student visa and travel process",
              "Pre-departure orientation for a smooth transition",
              "Ongoing mentorship and placement guidance",
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheck className="text-green-600 mt-1 text-lg flex-shrink-0" />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex-1 z-10 mt-40 md:mt-0">
          <div className="absolute top-1/2 right-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-green-600 rounded-full opacity-80 translate-x-1/3 -translate-y-1/2 flex items-center justify-center">
            <img
              src="/images/WhatsApp Image 2025-09-20 at 10.54.24_04457969.jpg"
              alt="Student with laptop"
              className="rounded-full w-56 md:w-72 lg:w-80 relative z-20"
            />
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Student Success Stories</h2>
        <div className="bg-white border border-gray-300 rounded p-8 max-w-4xl mx-auto shadow-md">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/images/WhatsApp Image 2025-10-09 at 12.16.34_eaed36f3.jpg"
              alt="Ayesha P."
              className="rounded-full w-16 h-16 object-cover"
            />
            <h3 className="font-semibold text-lg">Ayesha P.</h3>
          </div>
          <p className="text-gray-700 mb-6">
            “Studying{" "}
            <span className="text-green-600 font-semibold">Digital Marketing</span> in
            Canada through ILT was the best decision. I got exposure to real
            international projects and landed my first job in Toronto.”
          </p>
          <p className="text-gray-700 italic mb-6 pl-6">
            “<span className="text-green-600 font-semibold">ILT’s support</span> with
            admissions and visa made my dream to study in Australia a reality. Today,
            I’m working as a Social Media Specialist at a top agency.”
          </p>
          <div className="flex items-center justify-end gap-3">
            <p className="font-semibold text-right">Rahul K</p>
            <img
              src="/images/WhatsApp Image 2025-10-09 at 12.16.34_eaed36f3.jpg"
              alt="Rahul K."
              className="rounded-full w-12 h-12 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <img
            src="/images/WhatsApp Image 2025-10-09 at 12.16.37_21373de5.jpg"
            alt="Graduates"
            className="w-full h-[350px] md:h-[450px] object-cover rounded-xl shadow-md"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-6 md:p-8 rounded-xl shadow-md"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Mobile No"
              className="p-3 border border-gray-300 rounded"
              required
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded"
            >
              <option value="">Preferred Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country.value}>
                  {country.name}
                </option>
              ))}
            </select>
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded"
            >
              <option value="">Program</option>
              {courses.map((course) => (
                <option key={course.id} value={course.name}>
                  {course.name}
                </option>
              ))}
            </select>
            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded"
            >
              <option value="">Highest Qualification</option>
              <option value="bachelor">Bachelor's</option>
              <option value="master">Master's</option>
              <option value="phd">PhD</option>
            </select>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded sm:col-span-2 md:col-span-1"
            >
              <option value="">Experience</option>
              <option value="fresher">Fresher</option>
              <option value="1-2">1-2 Years</option>
              <option value="3+">3+ Years</option>
            </select>
            <textarea
              name="massage"
              value={formData.massage}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="p-3 border border-gray-300 rounded sm:col-span-2"
              required
            ></textarea>
            <button
              type="submit"
              disabled={formStatus.loading}
              className={`bg-green-600 text-white font-semibold rounded px-6 py-3 sm:col-span-2 hover:bg-green-700 transition ${
                formStatus.loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {formStatus.loading ? "Submitting..." : "Apply Now >"}
            </button>
            {formStatus.success && (
              <p className="text-green-600 text-center sm:col-span-2">{formStatus.success}</p>
            )}
            {formStatus.error && (
              <p className="text-red-600 text-center sm:col-span-2">{formStatus.error}</p>
            )}
          </form>
        </div>
      </section>

      <Questions />
    </div>
  );
};

export default ILTAbroad;