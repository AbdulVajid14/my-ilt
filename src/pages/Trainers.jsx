import React, { useState, useRef } from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { Toaster, toast } from "sonner";
import Instructor from "../components/CommonComponents/Instructor";
import PlacementHighlights from "../components/Home/PlacementHighlights";
import HireFaq from "../components/CommonComponents/HireFaq";

const Trainers = () => {
  const recaptchaRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Verifying...");

    const token = recaptchaRef.current.getValue();
    if (!token) {
      setStatus("Please complete the reCAPTCHA");
      toast.error("Please complete the reCAPTCHA");
      return;
    }

    const formData = new FormData();
    const form = e.target;

    formData.append("name", form.name.value);
    formData.append("email", form.email.value);
    formData.append("mobile", form.mobile.value);
    formData.append("experience", form.experience.value);
    formData.append("token", token);

    if (form.cv.files[0]) {
      formData.append("cv", form.cv.files[0]);
    }

    setLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/InsertAdmission`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.success) {
        toast.success("Trainer application submitted successfully!");
        form.reset();
        recaptchaRef.current.reset();
        setStatus("Form submitted successfully!");
      } else {
        toast.error(res.data.message || "Submission failed");
        setStatus("reCAPTCHA verification failed.");
        recaptchaRef.current.reset();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "An error occurred while submitting the form."
      );
      setStatus("Server error");
      recaptchaRef.current.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Toaster position="top-right" richColors />

      {/* ===== Banner Section ===== */}
      <section
        className="w-full h-64 md:h-100 bg-cover bg-center flex items-center justify-start"
        style={{
          backgroundImage:
            "url('/images/WhatsApp Image 2025-10-09 at 09.28.15_0ca754ec.jpg')",
        }}
      >
        <h1 className="text-white text-3xl md:text-5xl font-bold px-4 sm:px-12 lg:px-24 py-2 rounded">
          Hire Digital Marketers from Kerala’s #1 Digital Marketing Institute – Internet Leads Training (ILT), Kochi
        </h1>
      </section>

      {/* ===== ILT Introduction Section ===== */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        <section className="text-left">
          <h2 className="text-3xl font-semibold mb-6">
            Internet Leads Training (ILT)
          </h2>

          <p className="text-gray-800 text-lg leading-relaxed max-w-7xl">
            Internet Leads Training (ILT) not only delivers expert digital marketing
            education—we also provide trained and experienced digital marketers as
            virtual employees for companies. You can hire freshers or senior
            professionals who work full-time from our office under expert supervision.
            No HR issues, no training burden, and no downtime—if someone leaves, we
            replace them immediately so your business never gets affected.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed mt-4 max-w-7xl">
            This model is highly cost-effective compared to hiring in-house staff.
            You get a dedicated digital marketer working exclusively for your company,
            with no deposit, no long-term contract, and the freedom to terminate anytime.
            All our candidates are verified, skill-checked, and capable of generating
            quality leads, managing campaigns, and delivering consistent results for
            your business.
          </p>
        </section>

        {/* ===== Hire Trainers Section ===== */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-gray-800 text-xl">
            {[
              "Hire freshers free of cost.",
              "Experienced candidates available with minimal hiring fee.",
              "Virtual marketing team working remotely from our Kochi office.",
              "Trained in SEO, Social Media, Google Ads, CRM, and Data Analytics.",
            ].map((point, i) => (
              <div key={i} className="flex items-start space-x-3">
                <FaCheckCircle className="text-green-500 mt-1 text-xl flex-shrink-0" />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ===== Benefits Section ===== */}
      <section
        className="relative py-20 px-8 text-white"
        style={{
          backgroundImage:
            "url('/images/WhatsApp Image 2025-10-09 at 09.28.16_15cc1fcd.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="p-8 rounded-lg max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-12 text-lg font-medium">
            {[
              "Ready-to-work marketers trained in real agency environment",
              "Save time and recruitment cost",
              "Access to digital marketing experts from Kerala's top institute",
              "Continuous performance support from ILT team",
            ].map((role, i) => (
              <div key={i} className="flex items-center space-x-3">
                <span className="inline-block w-4 h-4 rounded-full bg-green-500"></span>
                <span>{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Application Form Section ===== */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <form
            className="bg-white shadow-md rounded-lg p-8 space-y-6"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold mb-1 text-gray-800">
              Ready to Inspire the Next Generation?
            </h2>
            <p className="text-gray-600 mb-6">
              Fill out the form below and apply to become an ILT trainer today.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Inputs */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                inputMode="numeric"
                maxLength="12"
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                required
              />

              <div>
                <label className="block text-gray-700 mb-1 text-sm font-medium">
                  CV
                </label>
                <input
                  type="file"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>

            <div>
              <textarea
                name="experience"
                rows="4"
                placeholder="Training Experience Details"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>

            <div className="mb-4">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              />
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded inline-flex items-center"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
              {!loading && <FaArrowRight className="ml-2" />}
            </button>
          </form>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/WhatsApp Image 2025-10-09 at 09.28.16_84a7b9c3.jpg"
              alt="Trainer at whiteboard"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </section>
      </div>

      <Instructor />
      <PlacementHighlights />
      <HireFaq/>
    </div>
  );
};

export default Trainers;
