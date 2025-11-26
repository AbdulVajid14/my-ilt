
import React, { useState, useRef } from 'react';
import { FaPlay, FaCheckCircle } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { Toaster, toast } from "sonner";
// import ReCAPTCHA from "react-google-recaptcha";

function BookTrail() {
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
        // setStatus("reCAPTCHA verification failed.");
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
    <section className="py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Learn & Grow With ILT
          </h2>
          <p className="text-base sm:text-lg text-gray-900 mb-4">
            Empowering you with industry-ready courses to build skills, gain
            confidence, and achieve your career goals.
          </p>
          {[
            "Build a strong foundation with expert-led programs.",
            "Master practical skills for real-world applications.",
            "Achieve your dream career with globally recognized certifications.",
          ].map((item, idx) => (
            <p key={idx} className="text-xs sm:text-sm text-gray-900 mb-2">
              <strong>{item.split(" ")[0]}</strong>{" "}
              {item.slice(item.indexOf(" "))}
            </p>
          ))}
          <button className="flex items-center space-x-2 text-green-900 font-semibold text-sm sm:text-lg hover:underline">
            <FaPlay className="text-green-600" />
            <span>Upskill with ILT</span>
          </button>
        </div>
        <div className="w-full lg:w-1/2 p-4 sm:p-6 bg-green-100 rounded-lg shadow-xl">
          <Toaster position="top-right" richColors />
          <form onSubmit={handleSubmit}>
            {[
              { placeholder: "Program interested", name: "subject", icon: "?" },
              { placeholder: "Name", name: "name", icon: <FaCheckCircle /> },
              { placeholder: "Email", name: "email", icon: <FaCheckCircle />, type: "email" },
            ].map((field, idx) => (
              <div key={idx} className="mb-4 relative">
                <input
                  type={field.type || "text"}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-md border-2 border-black focus:outline-none focus:ring-2"
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  required
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-900">
                  {field.icon}
                </span>
              </div>
            ))}
            <div className="mb-4 relative">
              <PhoneInput
                country={"in"}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputClass="w-full px-4 py-3 rounded-md border-2 border-black focus:outline-none focus:ring-2"
                buttonClass="border-2 rounded-l-md"
                containerClass="w-full"
                dropdownClass="rounded-md border bg-white"
                specialLabel=""
                inputStyle={{
                  width: "100%",
                  borderRadius: "0.375rem",
                  border: "2px solid #000000ff",
                }}
                enableSearch
                placeholder="Phone"
                required
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-900">
                <FaCheckCircle />
              </span>
            </div>
            <div className="mb-4 relative">
              <textarea
                name="message"
                rows="3"
                placeholder="Message"
                className="w-full px-4 py-3 rounded-md border-2 border-black focus:outline-none focus:ring-2"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-900">
                <FaCheckCircle />
              </span>
            </div>
            {/* <div className="mb-4">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              />
            </div> */}
            <button
              type="submit"
              className="w-full bg-green-900 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-emerald-900 transition duration-300"
              disabled={loading}
            >
              {loading ? "Sending..." : "Book Your Trial ->"}
            </button>           
          </form>
        </div>
      </div>
    </section>
  );
}

export default BookTrail;