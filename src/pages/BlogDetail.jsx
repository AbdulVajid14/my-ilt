// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import {
//   FaCalendarAlt,
//   FaUser,
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
// } from 'react-icons/fa';
// import QueriesForm from '../components/CommonComponents/QueriesForm';

// const instructor = {
//   image: '/images/WhatsApp Image 2025-10-03 at 16.34.35_be4e0ab4.jpg',
//   name: 'Jitto Jose',
//   title: 'ILT Certified Trainer',
//   social: {
//     facebook: 'https://facebook.com',
//     twitter: 'https://twitter.com',
//     instagram: 'https://instagram.com',
//   },
//   description:
//     'At ILT, our instructors are certified professionals with years of industry experience. They bring real-world knowledge into the classroom, ensuring that every student learns practical, hands-on skills. From Digital Marketing to Data Analytics, SEO, Python, and Cybersecurity — our trainers guide you step by step with the latest tools, strategies, and casestudies to make you job-ready.',
//   points: [
//     'Designs industry-relevant course modules for ILT students',
//     'Provides hands-on training with live projects & case studies',
//     'Offers 1:1 mentorship and career guidance',
//     'Prepares students for certifications & placement interviews',
//     'Connects classroom learning with real-world business challenges',
//   ],
//   quote:
//     'My mission is to simplify complex concepts and help every student gain the confidence to solve real-world problems, not just pass exams." – ',
//   quoteAuthor: 'Jitto Jose',
// };

// const formatDate = (dateStr) => {
//   const date = new Date(dateStr);
//   return date.toLocaleDateString('en-US', {
//     day: 'numeric',
//     month: 'short',
//     year: 'numeric',
//   });
// };

// const getShortDesc = (desc) => {
//   return desc.split('\r\n\r\n')[0].slice(0, 100) + '...';
// };

// const slugify = (text) =>
//   text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');

// const BlogDetail = () => {
//   const { slug } = useParams();
//   const [post, setPost] = useState(null);
//   const [sections, setSections] = useState([]);
//   const [recentPosts, setRecentPosts] = useState([]);
//   const [popularPosts, setPopularPosts] = useState([]);
//   const [tags, setTags] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${import.meta.env.VITE_BASE_URL}/News`)
//       .then((response) => {
//         if (response.data.success) {
//           const all = response.data.data;
//           const found = all.find((p) => slugify(p.tittle) === slug);
//           if (found) {
//             setPost(found);
//             setTags(found.tags ? found.tags.split(',').map((t) => t.trim()) : []);

//             const others = all.filter((p) => p.id !== found.id);
//             setRecentPosts(
//               others.slice(0, 3).map((p) => ({
//                 id: p.id,
//                 image: `${import.meta.env.VITE_BASE_URL_IMAGE}${p.image}`,
//                 title: p.tittle,
//                 description: getShortDesc(p.description),
//                 date: formatDate(p.date),
//               }))
//             );
//             setPopularPosts(
//               others.map((p) => ({
//                 id: p.id,
//                 image: `${import.meta.env.VITE_BASE_URL_IMAGE}${p.image}`,
//                 title: p.tittle,
//                 description: getShortDesc(p.description),
//                 date: formatDate(p.date),
//               }))
//             );
//           }
//         }
//       })
//       .catch((error) => console.error('Error fetching news:', error));
//   }, [slug]);

//   useEffect(() => {
//     if (!post) return;
//     document.title = post.metaTitle || post.title || "blogssssss";
//     const metaDescription =
//       document.querySelector("meta[name='description']") ||
//       (() => {
//         const meta = document.createElement("meta");
//         meta.name = "description";
//         document.head.appendChild(meta);
//         return meta;
//       })();

//     metaDescription.setAttribute(
//       "content",
//       post.metaDescription
//     );
//     const metaKeywords =
//       document.querySelector("meta[name='keywords']") ||
//       (() => {
//         const meta = document.createElement("meta");
//         meta.name = "keywords";
//         document.head.appendChild(meta);
//         return meta;
//       })();

//     metaKeywords.setAttribute("content", post.metaKeywords || "");
//   }, [post]);
//   if (!post) {
//     return <div className="text-center py-12">Loading...</div>;
//   }

//   return (
//     <div className="">
//       <div className="relative w-full h-60 sm:h-72 md:h-96 overflow-hidden mb-10">
//         <img
//           src="/images/WhatsApp Image 2025-10-03 at 16.37.02_e97c9c84.jpg"
//           alt={post.tittle}
//           className="w-full h-full object-cover"
//         />
//         <h1 className="absolute inset-0 flex items-center justify-center text-white text-2xl sm:text-3xl md:text-5xl font-extrabold bg-opacity-40 text-center px-4">
//           {post.tittle}
//         </h1>
//       </div>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="w-full h-64 sm:h-80 md:h-[500px] overflow-hidden rounded-lg mb-10">
//           <img
//             src={`${import.meta.env.VITE_BASE_URL_IMAGE}${post.image}`}
//             alt="Marketing Insights"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="flex items-center space-x-4 mb-10">
//           <div className="flex flex-col sm:flex-row sm:space-x-6 text-gray-600 text-sm">
//             <div className="flex items-center space-x-2 mb-2 sm:mb-0">
//               <FaCalendarAlt className="text-green-600 w-5 h-5" />
//               <span>{formatDate(post.date)}</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <FaUser className="text-green-600 w-5 h-5" />
//               <span>{post.name}</span>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col md:flex-row md:space-x-12">
//           <article className="flex-1 space-y-8 text-gray-700">
//             {sections.map((sec, idx) => (
//               <div key={idx}>
//                 {sec.type === 'intro' && (
//                   <h2 className="text-xl font-semibold mb-2">{sec.title}</h2>
//                 )}
//                 {sec.type === 'section' && (
//                   <h2 className="text-lg font-bold mb-1">{sec.title}</h2>
//                 )}
//                 {sec.type === 'conclusion' && (
//                   <h2 className="text-xl font-bold mt-6 mb-1">{sec.title}</h2>
//                 )}
//                 <p
//                   className={`text-base sm:text-lg ${
//                     sec.type === 'intro' ? 'md:text-xl' : 'md:text-lg'
//                   }`}
//                 >
//                   {sec.content}
//                 </p>
//               </div>
//             ))}
//           </article>
//           <aside className="w-full md:w-80 mt-12 md:mt-0 space-y-10">
//             <QueriesForm />
//             <div className="bg-white p-6 rounded-md shadow-md">
//               <h3 className="text-lg font-bold mb-4">Tags:</h3>
//               <div className="flex flex-wrap gap-3">
//                 {tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="bg-green-100 text-green-900 font-semibold px-3 py-1 rounded-full cursor-pointer select-none"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </aside>
//         </div>
//       </div>
//       <hr className="my-15 mx-40" />
//       <div
//         className="bg-cover bg-center bg-no-repeat py-12 px-4 sm:px-6 lg:px-8 relative"
//         style={{
//           backgroundImage:
//             "url('/images/WhatsApp Image 2025-10-03 at 16.37.03_d5cbf303.jpg')",
//         }}
//       >
//         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-1 text-white">
//           Popular Posts
//         </h2>
//         <p className="text-center text-white mb-8">
//           Trending Topics You Can’t Miss
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center">
//           {popularPosts.map(({ id, image, title, description, date }) => (
//             <Link key={id} to={`/blog/${slugify(title)}`}>
//               <div className="bg-white rounded-lg shadow-md w-full max-w-sm flex flex-col overflow-hidden">
//                 <img
//                   src={
//                     image?.startsWith('http')
//                       ? image
//                       : `${import.meta.env.VITE_BASE_URL_IMAGE}${image}`
//                   }
//                   alt={title}
//                   className="w-full h-48 object-cover rounded-t-lg"
//                   loading="lazy"
//                 />
//                 <div className="p-6 flex flex-col flex-grow">
//                   <h3 className="font-bold text-lg mb-2">{title}</h3>
//                   <p className="text-gray-700 flex-grow">{description}</p>
//                   <div className="flex justify-between items-center mt-4">
//                     <button
//                       type="button"
//                       className="border border-green-600 text-green-600 px-4 py-1 rounded hover:bg-green-50 transition"
//                     >
//                       Read More
//                     </button>
//                     <span className="text-gray-500 text-sm">{date}</span>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans text-gray-900">
//         <section className="flex flex-col md:flex-row gap-14">
//           <div className="flex flex-col items-center md:items-start">
//             <img
//               src={instructor.image}
//               alt={instructor.name}
//               className="rounded-lg max-w-xs object-cover self-start"
//               loading="lazy"
//             />
//             <blockquote className="italic text-gray-600 mt-4 text-center md:text-left max-w-xs">
//               “{instructor.quote}”
//               <span className="text-green-600 font-semibold"> {instructor.quoteAuthor}</span>
//             </blockquote>
//           </div>
//           <div className="flex flex-col">
//             <h2 className="text-xl font-semibold mb-1">{instructor.name}</h2>
//             <p className="mb-3">{instructor.title}</p>
//             <div className="flex space-x-4 mb-4 text-green-600">
//               <a href={instructor.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
//                 <FaFacebookF className="w-5 h-5" />
//               </a>
//               <a href={instructor.social.twitter} aria-label="Twitter" target="_blank" rel="noreferrer">
//                 <FaTwitter className="w-5 h-5" />
//               </a>
//               <a href={instructor.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
//                 <FaInstagram className="w-5 h-5" />
//               </a>
//             </div>
//             <p className="mb-6 text-gray-700">{instructor.description}</p>
//             <h3 className="font-semibold mb-3">What He Does at ILT</h3>
//             <ul className="space-y-2 mb-6">
//               {instructor.points.map((point, i) => (
//                 <li key={i} className="flex items-center space-x-2">
//                   <span className="inline-block w-3 h-3 rounded-full bg-green-600 flex-shrink-0"></span>
//                   <span className="font-semibold">{point}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {
  FaCalendarAlt,
  FaUser,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QueriesForm from "../components/CommonComponents/QueriesForm";

const instructor = {
  image: "/images/WhatsApp Image 2025-10-03 at 16.34.35_be4e0ab4.jpg",
  name: "Jitto Jose",
  title: "ILT Certified Trainer",
  social: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
  description:
    "At ILT, our instructors are certified professionals with years of industry experience. They bring real-world knowledge into the classroom, ensuring that every student learns practical, hands-on skills. From Digital Marketing to Data Analytics, SEO, Python, and Cybersecurity — our trainers guide you step by step with the latest tools, strategies, and case studies to make you job-ready.",
  points: [
    "Designs industry-relevant course modules for ILT students",
    "Provides hands-on training with live projects & case studies",
    "Offers 1:1 mentorship and career guidance",
    "Prepares students for certifications & placement interviews",
    "Connects classroom learning with real-world business challenges",
  ],
  quote:
    'My mission is to simplify complex concepts and help every student gain the confidence to solve real-world problems, not just pass exams." – ',
  quoteAuthor: "Jitto Jose",
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const getShortDesc = (desc) => {
  if (!desc) return "";

  let cleaned = desc.replace(/^.*?(<\/strong>|<\/b>)/i, "").trim();

  const paragraphs = cleaned.split(/\r?\n\r?\n/);
  const firstParagraph = paragraphs[0] || "";

  return firstParagraph.slice(0, 100) + "...";
};

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]/g, "");

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const [tags, setTags] = useState([]);

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

            const others = all.filter((p) => p.id !== found.id);
            setRecentPosts(
              others.slice(0, 3).map((p) => ({
                id: p.id,
                image: `${import.meta.env.VITE_BASE_URL_IMAGE}${p.image}`,
                title: p.tittle,
                description: getShortDesc(p.description),
                date: formatDate(p.date),
              }))
            );
            setPopularPosts(
              others.map((p) => ({
                id: p.id,
                image: `${import.meta.env.VITE_BASE_URL_IMAGE}${p.image}`,
                title: p.tittle,
                description: getShortDesc(p.description),
                date: formatDate(p.date),
              }))
            );
          }
        }
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, [slug]);

  useEffect(() => {
    if (!post) return;
    document.title = post.metaTitle || post.title || "blogssssss";
    const metaDescription =
      document.querySelector("meta[name='description']") ||
      (() => {
        const meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
        return meta;
      })();

    metaDescription.setAttribute("content", post.metaDescription);
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
          src="/images/WhatsApp Image 2025-10-03 at 16.37.02_e97c9c84.jpg"
          alt={post.tittle}
          className="w-full h-full object-cover"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-2xl sm:text-3xl md:text-5xl font-extrabold bg-opacity-40 text-center px-4">
          {post.tittle}
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-64 sm:h-80 md:h-[500px] overflow-hidden rounded-lg mb-10">
          <img
            src={`${import.meta.env.VITE_BASE_URL_IMAGE}${post.image}`}
            alt="Marketing Insights"
            className="w-full h-full object-cover"
          />
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

        {/* Description Only */}
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
      <div
        className="bg-cover bg-center bg-no-repeat py-12 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage:
            "url('/images/WhatsApp Image 2025-10-03 at 16.37.03_d5cbf303.jpg')",
        }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-1 text-white">
          Popular Posts
        </h2>
        <p className="text-center text-white mb-8">
          Trending Topics You Can’t Miss
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center">
          {popularPosts.map(({ id, image, title, description, date }) => (
            <Link key={id} to={`/blog/${slugify(title)}`}>
              <div className="bg-white rounded-lg shadow-md w-full max-w-sm flex flex-col overflow-hidden">
                <img
                  src={
                    image?.startsWith("http")
                      ? image
                      : `${import.meta.env.VITE_BASE_URL_IMAGE}${image}`
                  }
                  alt={title}
                  className="w-full h-48 object-cover rounded-t-lg"
                  loading="lazy"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg mb-2">{title}</h3>
                  <p className="text-gray-700 flex-grow">{description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <button
                      type="button"
                      className="border border-green-600 text-green-600 px-4 py-1 rounded hover:bg-green-50 transition"
                    >
                      Read More
                    </button>
                    <span className="text-gray-500 text-sm">{date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Instructor Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans text-gray-900">
        <section className="flex flex-col md:flex-row gap-14">
          <div className="flex flex-col items-center md:items-start">
            <img
              src={instructor.image}
              alt={instructor.name}
              className="rounded-lg max-w-xs object-cover self-start"
              loading="lazy"
            />
            <blockquote className="italic text-gray-600 mt-4 text-center md:text-left max-w-xs">
              “{instructor.quote}”
              <span className="text-green-600 font-semibold">
                {" "}
                {instructor.quoteAuthor}
              </span>
            </blockquote>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-1">{instructor.name}</h2>
            <p className="mb-3">{instructor.title}</p>
            <div className="flex space-x-4 mb-4 text-green-600">
              <a
                href={instructor.social.facebook}
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href={instructor.social.twitter}
                aria-label="Twitter"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href={instructor.social.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
            <p className="mb-6 text-gray-700">{instructor.description}</p>
            <h3 className="font-semibold mb-3">What He Does at ILT</h3>
            <ul className="space-y-2 mb-6">
              {instructor.points.map((point, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-green-600 flex-shrink-0"></span>
                  <span className="font-semibold">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogDetail;
