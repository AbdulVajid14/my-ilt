
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "sonner";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";

function Workshop() {
  const navigate = useNavigate();
  const recaptchaRef = useRef(null);
  const [upcomingWorkshops, setUpcomingWorkshops] = useState([]);
  const [previousWorkshops, setPreviousWorkshops] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const currentDate = new Date();

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/Event`);
        const result = response.data;

        if (result.success) {
          const workshops = result.data.filter(event => event.status === 1);

          // Split workshops into upcoming and previous based on date
          const upcoming = workshops.filter(event => new Date(event.startDate) >= currentDate);
          const previous = workshops.filter(event => new Date(event.startDate) < currentDate);

          // Format upcoming workshops
          const formattedUpcoming = upcoming.map(event => ({
            id: event.id,
            img: `${import.meta.env.VITE_BASE_URL_IMAGE}${event.image}`,
            date: new Date(event.startDate).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            }),
            title: event.tittle,
            slug: event.tittle.toLowerCase().replace(/\s+/g, '-'),
            desc: event.description
          }));

          // Format previous workshops
          const formattedPrevious = previous.map(event => ({
            img: `${import.meta.env.VITE_BASE_URL_IMAGE}${event.image}`,
            title: event.tittle,
            desc: event.description,
            dateLoc: `${new Date(event.startDate).toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric'
            })}, Location TBD`
          }));

          setUpcomingWorkshops(formattedUpcoming);
          setPreviousWorkshops(formattedPrevious);
        }
      } catch (error) {
        console.error('Error fetching workshops:', error);
      }
    };

    fetchWorkshops();
  }, []);

  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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
    const token = recaptchaRef.current.getValue();
    if (!token) {
      setStatus("Please complete the reCAPTCHA");
      toast.error("Please complete the reCAPTCHA");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/InsertContact`,
        { ...formData, token } // Include reCAPTCHA token
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
        recaptchaRef.current.reset(); // Reset reCAPTCHA
        setStatus("Form submitted successfully!");
      } else {
        toast.error("Failed to send message.");
        setStatus("reCAPTCHA verification failed.");
        recaptchaRef.current.reset();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to send message. Please try again later."
      );
      setStatus("Server error");
      recaptchaRef.current.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Banner */}
      <section
        className="w-full bg-center bg-cover relative flex items-center justify-start"
        style={{
          backgroundImage:
            "url('/images/WhatsApp Image 2025-10-08 at 10.26.04_33022baf.jpg')",
          height: "400px",
        }}
      >
        <h1 className="text-white font-extrabold text-5xl md:text-6xl drop-shadow-lg pl-4 sm:pl-12 lg:pl-24">
  Workshops
</h1>

      </section>

      {/* Content wrapper */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Workshops & Seminars intro */}
        <div className="max-w-xl text-center mx-auto">
          <h2 className="text-4xl font-bold mb-2">Workshops & Seminars</h2>
          <p className="text-gray-500 text-2xl">
            Practical learning through live workshops across multiple locations.
          </p>
        </div>

        {/* About Workshops */}
        <div className="max-w-7xl">
          <h3 className="text-2xl font-semibold mb-2">About Workshops</h3>
          <p className="text-gray-600 max-w-5xl leading-relaxed text-xl">
            <span className="font-semibold text-green-600">At ILT,</span> we
            conduct interactive workshops on digital marketing across Kerala and
            beyond. Designed for students, professionals, and business owners,
            these sessions provide hands-on knowledge of the latest tools and
            strategies.
          </p>
        </div>

        {/* Upcoming Workshops */}
        <div className="max-w-7xl">
          <h3 className="text-2xl font-semibold mb-6">Upcoming Workshops</h3>
          <div className="flex flex-wrap gap-8">
            {upcomingWorkshops.length > 0 ? (
              upcomingWorkshops.map(({ id, img, date, title, desc, slug }) => (
                <div
                  key={id}
                  className="bg-black text-white rounded-lg overflow-hidden max-w-md w-full shadow-md"
                >
                  <div className="relative">
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute bottom-2 right-3 text-green-600 text-sm font-semibold">
                      {date}
                    </span>
                  </div>
                  <div className="p-5 space-y-3">
                    <h4 className="text-lg font-semibold">{title}</h4>
                    <p className="text-gray-300">{desc}</p>
                    <button
                      onClick={() => navigate(`/workshop/${slug}`)}
                      className="bg-green-600 px-4 py-2 rounded text-white font-semibold hover:bg-green-700 transition"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No upcoming workshops available.</p>
            )}
          </div>
        </div>

        {/* Registration Form */}
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
    {/* LEFT SIDE - TEXT */}
    <div className="flex-1 text-center lg:text-left">
      <h3 className="text-3xl font-semibold mb-3">Registration Form</h3>
      <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
        Fill out the form to reserve your spot in our upcoming workshop.{" "}
        <span className="text-green-600 font-semibold">
          Limited seats available!
        </span>
      </p>
    </div>

    {/* RIGHT SIDE - FORM */}
    <div className="flex-1 w-full">
      <Toaster position="top-right" richColors />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-4 sm:p-6 space-y-4 mx-auto lg:mx-0"
      >
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
        <div className="mb-4">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 text-sm rounded-md transition"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Join Workshop"}
        </button>
      </form>
    </div>
  </div>
</div>

        {/* Previous Workshops */}
        <div className="max-w-7xl space-y-4">
          <h3 className="text-2xl font-semibold mb-1">Previous Workshops</h3>
          <p className="text-gray-500 max-w-xl text-lg">
            A glimpse of the impactful sessions we’ve already delivered.
          </p>
          <div className="flex flex-wrap gap-6 mt-4">
            {previousWorkshops.length > 0 ? (
              previousWorkshops.map(({ img, title, desc, dateLoc }) => (
                <div
                  key={title}
                  className="bg-black text-white rounded-lg max-w-sm w-full shadow-lg overflow-hidden"
                >
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-5 space-y-3">
                    <h4 className="font-semibold text-lg">{title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {desc}
                    </p>
                    <p className="text-gray-400 text-xs text-right italic">
                      {dateLoc}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No previous workshops available.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Workshop;