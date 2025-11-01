// import React from "react";
// import {
//   HiHome,
//   HiMail,
//   HiPhone,
//   HiOutlineMail,
//   HiOutlinePhone,
// } from "react-icons/hi";
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-green-700 text-white px-14 py-10 font-sans">
//       <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between">
//         {/* Left Section */}
//         <div className="flex-1 min-w-[280px] mb-10">
//           <div className="mb-5">
//             <img
//               src="/images/logo.jpg"
//               alt="Internet Leads Training Logo"
//               className="w-[140px] h-auto"
//             />
//           </div>
//           <div className="flex items-start gap-2.5 mb-4">
//             <HiHome className="flex-shrink-0 mt-0.5 w-5 h-5 text-white" />
//             <p className="text-sm leading-relaxed">
//               LTI Academy, Tech Park Building,
//               <br />
//               Kochi, Kerala, India
//             </p>
//           </div>
//           <div className="flex items-start gap-2.5 mb-3">
//             <HiOutlineMail className="flex-shrink-0 mt-0.5 w-5 h-5 text-white" />
//             <div className="text-sm leading-relaxed">
//               <a href="mailto:support@ilt.com" className="underline text-white">
//                 Customer Queries
//               </a>
//               <div>Support@ilt.com</div>
//             </div>
//           </div>
//           <div className="flex items-start gap-2.5">
//             <HiOutlinePhone className="flex-shrink-0 mt-0.5 w-5 h-5 text-white" />
//             <div className="text-sm leading-relaxed">
//               <a href="tel:+917013453050" className="underline text-white">
//                 General Queries
//               </a>
//               <div>Ph: 7013453050</div>
//             </div>
//           </div>
//         </div>

//         {/* Career Programs */}
//         <div className="flex-1 min-w-[160px] mb-10">
//           <h4 className="font-bold text-base mb-5">Career Programs</h4>
//           <ul className="list-none p-0 m-0 text-sm leading-7">
//             <li>Seo Mastery</li>
//             <li>Social Media Marketing</li>
//             <li>PPC & Google Ads</li>
//             <li>Python</li>
//             <li>Cyber Security</li>
//           </ul>
//         </div>

//         {/* For Business */}
//         <div className="flex-1 min-w-[140px] mb-10">
//           <h4 className="font-bold text-base mb-5">For Business</h4>
//           <ul className="list-none p-0 m-0 text-sm leading-7">
//             <li>
//               <Link to="/trainers" className="hover:underline text-white">
//                 Hire from ILT
//               </Link>
//             </li>
//             <li>
//               <Link to="#" className="hover:underline text-white">
//                 Partner with ILT
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Quick Links */}

//         <div className="flex-1 min-w-[140px] mb-10">
//           <h4 className="font-bold text-base mb-5">Quick Links</h4>
//           <ul className="list-none p-0 m-0 text-sm leading-7">
//             <li>
//               <Link to="#" className="text-white hover:text-orange-300">
//                 Placement Support
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="text-white hover:text-orange-300">
//                 Success Stories
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="text-white hover:text-orange-300">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/workshop" className="text-white hover:text-orange-300">
//                 Workshops
//               </Link>
//             </li>
//             <li>
//               <Link to="/blog" className="text-white hover:text-orange-300">
//                 Blog
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Support & Resources */}
//         <div className="flex-1 min-w-[180px] mb-10">
//           <h4 className="font-bold text-base mb-5">Support & Resources</h4>
//           <ul className="list-none p-0 m-0 text-sm leading-7">
//             <li>FAQs</li>
//             <li>Help Center</li>
//             <li>Privacy Policy</li>
//             <li>Terms & Conditions</li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-white/30 mt-5 pt-5 max-w-[1200px] mx-auto flex justify-between items-center text-xs opacity-80">
//         <div>@2025 ILT Institute</div>
//         <div>Powered by Ektova Technologies Pvt Ltd</div>
//         <div className="flex gap-4 text-white">
//           <a
//             href="https://www.facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Facebook"
//             className="hover:text-green-300"
//           >
//             <FaFacebookF size={20} />
//           </a>
//           <a
//             href="https://www.twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Twitter"
//             className="hover:text-green-300"
//           >
//             <FaTwitter size={20} />
//           </a>
//           <a
//             href="https://www.instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Instagram"
//             className="hover:text-green-300"
//           >
//             <FaInstagram size={20} />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React, { useState, useEffect } from "react";
import {
  HiHome,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const Footer = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/courses`)
      .then((response) => {
        if (response.data.success) {
          const sortedCourses = response.data.data.slice(0, 5).map((c) => ({
            name: c.name,
            slug: c.name.toLowerCase().replace(/\s+/g, "-"),
          }));
          setCourses(sortedCourses);
        }
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <footer className="bg-green-700 text-white px-14 py-10 font-sans">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between">
        {/* Left Section */}
        <div className="flex-1 min-w-[280px] mb-10">
          <div className="mb-5">
            <img
              src="/images/ilt logo 2.png"
              alt="Internet Leads Training Logo"
              className="w-[140px] h-auto"
            />
          </div>
          <div className="flex items-start gap-2.5 mb-4">
            <HiHome className="flex-shrink-0 mt-0.5 w-5 h-5 text-white" />
            <p className="text-sm leading-relaxed">
              LTI Academy, Tech Park Building,
              <br />
              Kochi, Kerala, India
            </p>
          </div>
          <div className="flex items-start gap-2.5 mb-3">
            <HiOutlineMail className="flex-shrink-0 mt-0.5 w-5 h-5 text-white" />
            <div className="text-sm leading-relaxed">
              <a href="mailto:support@ilt.com" className="underline text-white">
                Customer Queries
              </a>
              <div>Support@ilt.com</div>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <HiOutlinePhone className="flex-shrink-0 mt-0.5 w-5 h-5 text-white" />
            <div className="text-sm leading-relaxed">
              <a href="tel:+917013453050" className="underline text-white">
                General Queries
              </a>
              <div>Ph: 7013453050</div>
            </div>
          </div>
        </div>

        {/* Career Programs */}
        <div className="flex-1 min-w-[160px] mb-10">
          <h4 className="font-bold text-base mb-5">Career Programs</h4>
          <ul className="list-none p-0 m-0 text-sm leading-7">
            {courses.length > 0 ? (
              courses.map((course, idx) => (
                <li key={idx}>
                  <Link
                    to={`/courses/${course.slug}`}
                    className="text-white hover:text-orange-300"
                  >
                    {course.name}
                  </Link>
                </li>
              ))
            ) : (
              <li>Loading courses...</li>
            )}
          </ul>
        </div>

        {/* For Business */}
        <div className="flex-1 min-w-[140px] mb-10">
          <h4 className="font-bold text-base mb-5">For Business</h4>
          <ul className="list-none p-0 m-0 text-sm leading-7">
            <li>
              <Link to="/trainers" className="hover:underline text-white">
                Hire from ILT
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline text-white">
                Partner with ILT
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[140px] mb-10">
          <h4 className="font-bold text-base mb-5">Quick Links</h4>
          <ul className="list-none p-0 m-0 text-sm leading-7">
            <li>
              <Link to="#" className="text-white hover:text-orange-300">
                Placement Support
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-orange-300">
                Success Stories
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-orange-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/workshop" className="text-white hover:text-orange-300">
                Workshops
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-white hover:text-orange-300">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Support & Resources */}
        <div className="flex-1 min-w-[180px] mb-10">
          <h4 className="font-bold text-base mb-5">Support & Resources</h4>
          <ul className="list-none p-0 m-0 text-sm leading-7">
            <li>
              <Link to="#" className="text-white hover:text-orange-300">
                FAQs
              </Link>
            </li>
            <li>Help Center</li>
            <li>
              <Link
                to="/privacy-policy"
                className="text-white-700 hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-and-conditions"
                className="text-white-700 hover:underline"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 mt-5 pt-5 max-w-[1200px] mx-auto flex justify-between items-center text-xs opacity-80">
        <div>@2025 ILT Institute</div>
        <div>Powered by Ektova Technologies Pvt Ltd</div>
        <div className="flex gap-4 text-white">
          <a
            href="https://www.facebook.com/internetleadstraining/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-green-300"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-green-300"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.instagram.com/internet_leads_training/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-green-300"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
