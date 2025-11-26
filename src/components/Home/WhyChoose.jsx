// // import React from "react";

// // function WhyChoose() {
// //   return (
// //     <section className="bg-green-700 text-white py-12 sm:py-16 px-4">
// //       <div className="max-w-7xl mx-auto text-start  ">
// //         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
// //           Data-Driven Digital Marketing Course in Kochi by Kerala’s Trusted
// //           Institute
// //         </h2>
// //         <p className="text-base sm:text-lg leading-relaxed">
// //           Internet Leads Training (ILT) is Kerala’s first Data-Driven AI Digital
// //           Marketing Institute in Kochi. Our career-oriented course covers
// //           Website Development, SEO, Social Media, Google Ads, CRM, Sales
// //           Management, and Data Analysis using Excel & Power BI. Every session is
// //           100% practical and agency-based, guided by experienced
// //           industry experts.
// //         </p>
// //       </div>
// //     </section>
// //   );
// // }

// // export default WhyChoose;

// import React, { useState, useRef } from "react";
// import { FaCheckCircle } from "react-icons/fa";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import axios from "axios";
// import { Toaster, toast } from "sonner";
// import ReCAPTCHA from "react-google-recaptcha";

// function WhyChoose() {
//   const recaptchaRef = useRef(null);
//   const [formData, setFormData] = useState({
//     subject: "",
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePhoneChange = (phone) => {
//     setFormData((prev) => ({ ...prev, phone }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Verifying...");

//     const token = recaptchaRef.current.getValue();
//     if (!token) {
//       setStatus("Please complete the reCAPTCHA");
//       toast.error("Please complete the reCAPTCHA");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_BASE_URL}/InsertContact`,
//         { ...formData, token }
//       );

//       if (response.data.success) {
//         toast.success("Message sent successfully!");
//         setFormData({
//           subject: "",
//           name: "",
//           email: "",
//           phone: "",
//           message: "",
//         });
//         recaptchaRef.current.reset();
//         setStatus("Form submitted successfully!");
//       } else {
//         toast.error("Failed to send message.");
//         setStatus("reCAPTCHA verification failed.");
//         recaptchaRef.current.reset();
//       }
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to send message. Please try again later."
//       );
//       setStatus("Server error");
//       recaptchaRef.current.reset();
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="bg-green-700 text-white py-12 sm:py-16 px-4">
//       <Toaster position="top-right" richColors />

//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-stretch justify-between gap-10">
//         {/* Left Section - Text */}
//         <div className="w-full lg:w-1/2 space-y-6">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
//             Data-Driven Digital Marketing Course in Kochi by Kerala’s Trusted
//             Institute
//           </h2>
//           <p className="text-base sm:text-lg leading-relaxed">
//             Internet Leads Training (ILT) is Kerala’s first Data-Driven AI
//             Digital Marketing Institute in Kochi. Our career-oriented course
//             covers Website Development, SEO, Social Media, Google Ads, CRM,
//             Sales Management, and Data Analysis using Excel & Power BI. Every
//             session is 100% practical and agency-based, guided by experienced
//             industry experts.
//           </p>
//         </div>

//         {/* Right Section - Form */}
//         <div className="w-full lg:w-1/2 bg-green-100 text-black p-6 rounded-xl shadow-lg">
//           <form onSubmit={handleSubmit}>
//             {[
//               { placeholder: "Program interested", name: "subject" },
//               { placeholder: "Name", name: "name" },
//               { placeholder: "Email", name: "email", type: "email" },
//             ].map((field, idx) => (
//               <div key={idx} className="mb-4 relative">
//                 <input
//                   type={field.type || "text"}
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   className="w-full px-4 py-3 rounded-md border-2 border-green-300 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500"
//                   value={formData[field.name]}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
//                   <FaCheckCircle />
//                 </span>
//               </div>
//             ))}

//             <div className="mb-4 relative">
//               <PhoneInput
//                 country={"in"}
//                 value={formData.phone}
//                 onChange={handlePhoneChange}
//                 inputClass="!w-full !px-4 !py-3 !rounded-md !border-2 !border-green-300 !bg-green-50 !focus:outline-none !focus:ring-2 !focus:ring-green-500"
//                 buttonClass="!border-2 !border-green-300 !bg-green-50 !rounded-l-md"
//                 containerClass="w-full"
//                 dropdownClass="rounded-md border border-green-300 bg-white"
//                 specialLabel=""
//                 enableSearch
//                 placeholder="Phone"
//                 required
//               />
//               <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
//                 <FaCheckCircle />
//               </span>
//             </div>

//             <div className="mb-4 relative">
//               <textarea
//                 name="message"
//                 rows="3"
//                 placeholder="Message"
//                 className="w-full px-4 py-3 rounded-md border-2 border-green-300 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 required
//               />
//               <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
//                 <FaCheckCircle />
//               </span>
//             </div>

//             <div className="mb-4">
//               <ReCAPTCHA
//                 ref={recaptchaRef}
//                 sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
//               disabled={loading}
//             >
//               {loading ? "Sending..." : "Book Your Trial →"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhyChoose;

import React, { useState, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { Toaster, toast } from "sonner";
import ReCAPTCHA from "react-google-recaptcha";

function WhyChoose() {
  const recaptchaRef = useRef(null);
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (phone) => {
    setFormData((prev) => ({ ...prev, phone }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Verifying...");

    // const token = recaptchaRef.current.getValue();
    // if (!token) {
    //   setStatus("Please complete the reCAPTCHA");
    //   toast.error("Please complete the reCAPTCHA");
    //   return;
    // }

    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/InsertContact`,
        { ...formData }
      );

      if (response.data.success) {
        toast.success("Message sent successfully!");
        setFormData({
          subject: "",
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        // recaptchaRef.current.reset();
        setStatus("Form submitted successfully!");
      } else {
        toast.error("Failed to send message.");
        setStatus("reCAPTCHA verification failed.");
        // recaptchaRef.current.reset();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to send message. Please try again later."
      );
      console.error("Error details:", error);
      setStatus("Server error");
      // recaptchaRef.current.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-green-800 text-white py-12 sm:py-16 px-4">
      <Toaster position="top-right" richColors />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-stretch justify-between gap-10">
        {/* Left Section - Text */}
        <div className="w-full lg:w-1/2 space-y-6 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
            Data-Driven Digital Marketing Course in Kochi by Kerala’s Trusted
            Institute
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Internet Leads Training (ILT) is Kerala’s first Data-Driven AI
            Digital Marketing Institute in Kochi. Our career-oriented course
            covers Website Development, SEO, Social Media, Google Ads, CRM,
            Sales Management, and Data Analysis using Excel & Power BI. Every
            session is 100% practical and agency-based, guided by experienced
            industry experts.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-1/2 bg-green-100 text-black p-6 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: Program Interested + Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  placeholder="Program interested"
                  className="w-full px-4 py-3 rounded-md border-2 border-green-300 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-900">
                  <FaCheckCircle />
                </span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-md border-2 border-green-300 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-900">
                  <FaCheckCircle />
                </span>
              </div>
            </div>

            {/* Row 2: Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md border-2 border-green-300 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-900">
                  <FaCheckCircle />
                </span>
              </div>

              <div className="relative">
                <PhoneInput
                  country={"in"}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputClass="!w-full !px-4 !pl-10 !py-6 !rounded-md !border-2 !border-green-300 !bg-green-50 !focus:outline-none !focus:ring-2 !focus:ring-green-500"
                  buttonClass="!border-2 !border-green-300 !bg-green-50 !rounded-l-md"
                  containerClass="w-full"
                  dropdownClass="rounded-md border border-green-300 bg-white"
                  specialLabel=""
                  enableSearch
                  placeholder="Phone"
                  required
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-900">
                  <FaCheckCircle />
                </span>
              </div>
            </div>

            {/* Row 3: Message (Full Width) */}
            <div className="relative">
              <textarea
                name="message"
                rows="3"
                placeholder="Message"
                className="w-full px-4 py-3 rounded-md border-2 border-green-300 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-900">
                <FaCheckCircle />
              </span>
            </div>

            {/* reCAPTCHA */}
            {/* <div className="mb-2">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              />
            </div> */}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-900 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-emarald-900 transition duration-300"
              disabled={loading}
            >
              {loading ? "Sending..." : "Book Your Trial →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
