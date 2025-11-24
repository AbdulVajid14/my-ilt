
// import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import axios from "axios";
// import { Toaster, toast } from "sonner";

// function QueriesForm() {
//   const [formData, setFormData] = useState({
//     subject: "",
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePhoneChange = (phone) => {
//     setFormData((prev) => ({ ...prev, phone }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_BASE_URL}/InsertContact`,
//         formData
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
//       } else {
//         toast.error("Failed to send message.");
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to send message.");
//     }
//   };

//   return (
//     <>
//       <Toaster position="top-right" richColors />
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md lg:max-w-sm bg-white shadow-md rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4 order-1 lg:order-2"
//       >
//         <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
//           Have Any Queries?
//         </h3>

//         <input
//           type="text"
//           name="subject"
//           placeholder="Program interested"
//           className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
//           value={formData.subject}
//           onChange={handleInputChange}
//           required
//         />

//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
//           value={formData.name}
//           onChange={handleInputChange}
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
//           value={formData.email}
//           onChange={handleInputChange}
//           required
//         />

//         <div className="border border-gray-300 rounded-md">
//           <PhoneInput
//             country={"in"}
//             value={formData.phone}
//             onChange={handlePhoneChange}
//             inputClass="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border-2 border-green-200 bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
//             buttonClass="border-2 border-green-200 bg-green-100 rounded-l-md"
//             containerClass="w-full"
//             dropdownClass="rounded-md border border-green-200 bg-white"
//             specialLabel=""
//             inputStyle={{
//               width: "100%",
//               borderRadius: "0.375rem",
//               border: "2px solid #bbf7d0",
//             }}
//             enableSearch
//             placeholder="Phone"
//             required
//           />
//         </div>

//         <textarea
//           name="message"
//           rows="3"
//           placeholder="Message"
//           className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
//           value={formData.message}
//           onChange={handleInputChange}
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 text-sm rounded-md transition"
//         >
//           Send Message &gt;
//         </button>
//       </form>
//     </>
//   );
// }

// export default QueriesForm;
import React, { useState, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { Toaster, toast } from "sonner";
// import ReCAPTCHA from "react-google-recaptcha";

function QueriesForm() {
  // const recaptchaRef = useRef(null);
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

    // Get token from reCAPTCHA
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
        { ...formData, 
          // token 
        }
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
        error.response?.data?.message || "Failed to send message. Please try again later."
      );
      setStatus("Server error");
      // recaptchaRef.current.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" richColors />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md lg:max-w-sm bg-white shadow-md rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4 order-1 lg:order-2"
      >
        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
          Have Any Queries?
        </h3>

        <input
          type="text"
          name="subject"
          placeholder="Program interested"
          className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          value={formData.subject}
          onChange={handleInputChange}
          required
        />

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <div className="border border-gray-300 rounded-md">
          <PhoneInput
            country={"in"}
            value={formData.phone}
            onChange={handlePhoneChange}
            inputClass="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border-2 border-green-200 bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
            buttonClass="border-2 border-green-200 bg-green-100 rounded-l-md"
            containerClass="w-full"
            dropdownClass="rounded-md border border-green-200 bg-white"
            specialLabel=""
            inputStyle={{
              width: "100%",
              borderRadius: "0.375rem",
              border: "2px solid #bbf7d0",
            }}
            enableSearch
            placeholder="Phone"
            required
          />
        </div>

        <textarea
          name="message"
          rows="3"
          placeholder="Message"
          className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
          value={formData.message}
          onChange={handleInputChange}
          required
        />

        {/* <div style={{ margin: "12px 0" }}>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          />
        </div> */}

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 text-sm rounded-md transition"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message >"}
        </button>
      </form>
    </>
  );
}

export default QueriesForm;