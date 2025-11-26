// import React from "react";
// import { useState, useEffect } from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";
// import BookTrail from "../components/Home/BookTrail";

// const ContactPage = () => {
//   useEffect(() => {
//     document.title =
//       "Contact ILT |Best Digital Marketing Institute in Cochin, Kerala";
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
//       "Contact Internet Leads Training (ILT) for course details, admissions, and support. Reach Kerala’s trusted digital marketing institute located in Cochin."
//     );
//     const metaKeywords =
//       document.querySelector("meta[name='keywords']") ||
//       (() => {
//         const meta = document.createElement("meta");
//         meta.name = "keywords";
//         document.head.appendChild(meta);
//         return meta;
//       })();

//     metaKeywords.setAttribute(
//       "content",
//       "Contact ILT |Best Digital Marketing Institute in Cochin, Kerala"
//     );
//   }, []);

//   const socialLinks = [
//     {
//       icon: FaFacebookF,
//       color: "bg-green-900",
//       href: "https://www.facebook.com/internetleadstraining/",
//       aria: "Facebook",
//     },
//     {
//       icon: FaLinkedinIn,
//       color: "bg-green-900",
//       href: "https://www.linkedin.com/company/internet-leads-training/",
//       aria: "Twitter",
//     },
//     {
//       icon: FaInstagram,
//       color: "bg-green-900",
//       href: "https://www.instagram.com/internet_leads_training/",
//       aria: "Instagram",
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       <div className="relative h-64 md:h-100 w-full overflow-hidden">
//         <img
//           src="/images/contact.webp"
//           alt="Contact Banner"
//           loading="lazy"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="relative h-full flex flex-col justify-center items-start text-white pl-4 sm:pl-12 lg:pl-24">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
//             Contact Us
//           </h1>
//         </div>
//       </div>
//       <BookTrail />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-8 bg-white shadow-2xl rounded-xl">
//           {/* Address Block */}
//           <div className="space-y-4">
//             <h2 className="text-xl md:text-2xl font-bold text-gray-900">
//               Address
//             </h2>
//             <address className="text-gray-900 not-italic leading-relaxed">
//               <p className="font-medium">
//                 Internet Leads Training Jigsaw Co-Working Space 6th Floor,
//                 Kandamkulathy Towers, Mahatma Gandhi Rd, KPCC Junction, Opp
//                 Maharaja's Ground, Shenoys, Ernakulam, Kerala 682011
//               </p>
//             </address>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-4">
//             <h2 className="text-xl md:text-2xl font-bold text-gray-900">
//               Contact Info
//             </h2>
//             <div className="text-gray-900 space-y-2">
//               <p>
//                 <span className="font-semibold text-gray-900">Phone: </span>
//                 <a
//                   href="tel:+919539070845"
//                   className="hover:text-blue-500 transition"
//                 >
//                   +91 95390 70845
//                 </a>
//               </p>
//               <p>
//                 <span className="font-semibold text-gray-900">Mobile: </span>
//                 <a
//                   href="tel:+919539070845"
//                   className="hover:text-blue-500 transition"
//                 >
//                   +91 95390 70845
//                 </a>
//               </p>
//               <p>
//                 <span className="font-semibold text-gray-900">Email: </span>
//                 <a
//                   href="mailto:info@internetleadstraining.com"
//                   className="text-blue-600 hover:text-blue-800 transition"
//                 >
//                   info@internetleadstraining.com
//                 </a>
//               </p>
//             </div>
//           </div>

//           {/* Social Media */}
//           <div className="flex flex-col items-start md:items-center">
//             <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
//               Follow Us
//             </h2>
//             <div className="flex space-x-4">
//               {socialLinks.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={link.aria}
//                   className={`flex items-center justify-center w-10 h-10 rounded-full text-white ${link.color} hover:opacity-80 transition duration-200`}
//                 >
//                   <link.icon className="text-lg" />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;
import React from "react";
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import BookTrail from "../components/Home/BookTrail";

const ContactPage = () => {
  useEffect(() => {
    document.title =
      "Contact ILT |Best Digital Marketing Institute in Cochin, Kerala";
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
      "Contact Internet Leads Training (ILT) for course details, admissions, and support. Reach Kerala’s trusted digital marketing institute located in Cochin."
    );
    const metaKeywords =
      document.querySelector("meta[name='keywords']") ||
      (() => {
        const meta = document.createElement("meta");
        meta.name = "keywords";
        document.head.appendChild(meta);
        return meta;
      })();

    metaKeywords.setAttribute(
      "content",
      "Contact ILT |Best Digital Marketing Institute in Cochin, Kerala"
    );
  }, []);

  const socialLinks = [
    {
      icon: FaFacebookF,
      color: "bg-green-900",
      href: "https://www.facebook.com/internetleadstraining/",
      aria: "Facebook",
    },
    {
      icon: FaLinkedinIn,
      color: "bg-green-900",
      href: "https://www.linkedin.com/company/internet-leads-training/",
      aria: "Twitter",
    },
    {
      icon: FaInstagram,
      color: "bg-green-900",
      href: "https://www.instagram.com/internet_leads_training/",
      aria: "Instagram",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="relative h-64 md:h-100 w-full overflow-hidden">
        <img
          src="/images/contact.webp"
          alt="Contact Banner"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative h-full flex flex-col justify-center items-start text-white pl-4 sm:pl-12 lg:pl-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Contact Us
          </h1>
        </div>
      </div>
      <BookTrail />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-8 bg-white shadow-2xl rounded-xl">
          {/* Address Block */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Address
            </h2>
            <address className="text-gray-900 not-italic leading-relaxed">
              <p className="font-medium">
                Internet Leads Training ,<br />Jigsaw Co-Working Space 6th Floor,<br />
                Kandamkulathy Towers,<br /> Mahatma Gandhi Rd, KPCC Junction,<br /> Opp
                Maharaja's Ground,<br /> Ernakulam, Kerala 682011
              </p>
            </address>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Contact Info
            </h2>
            <div className="text-gray-900 space-y-2">
              <p>
                <span className="font-semibold text-gray-900">Phone: </span>
                <a
                  href="tel:+919539070845"
                  className="hover:text-blue-500 transition"
                >
                  +91 95390 70845
                </a>
              </p>
              <p>
                <span className="font-semibold text-gray-900">Mobile: </span>
                <a
                  href="tel:+919539070845"
                  className="hover:text-blue-500 transition"
                >
                  +91 95390 70845
                </a>
              </p>
              <p>
                <span className="font-semibold text-gray-900">Email: </span>
                <a
                  href="mailto:info@internetleadstraining.com"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  info@internetleadstraining.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-start md:items-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Follow Us
            </h2>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.aria}
                  className={`flex items-center justify-center w-10 h-10 rounded-full text-white ${link.color} hover:opacity-80 transition duration-200`}
                >
                  <link.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;