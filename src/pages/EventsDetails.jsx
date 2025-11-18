import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import QueriesForm from "../components/CommonComponents/QueriesForm";
import OurGraduates from "../components/Home/OurGraduates";

const EventsDetails = () => {
  const { slug } = useParams();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const BASE_IMAGE_URL = import.meta.env.VITE_BASE_URL_IMAGE;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const yearFromSlug = slug.split("-").pop();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const { data: res } = await axios.get(`${BASE_URL}/Gallery?status=1`);
        const items = res.data || [];

        const namePart = slug.replace(/-\d+$/, "");
        const matched = items.find((item) => {
          const itemSlug = `${item.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")}-${item.type}`;
          return itemSlug === slug;
        });

        setData(matched || null);
      } catch (err) {
        setError("Event not found.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [slug, BASE_URL]);
    useEffect(() => {
      if (!data) return;
      document.title = data.metaTitle || data.title || "event Details";
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
        data.metaDescription || data.title || ""
      );
      const metaKeywords =
        document.querySelector("meta[name='keywords']") ||
        (() => {
          const meta = document.createElement("meta");
          meta.name = "keywords";
          document.head.appendChild(meta);
          return meta;
        })();
  
      metaKeywords.setAttribute("content", data.metaKeywords || "");
    }, [data]);

  if (loading) return <p className="text-center py-20">Loading event...</p>;
  if (error || !data)
    return (
      <p className="text-center py-20 text-red-600">
        {error || "Event not found"}
      </p>
    );

  // Parse images
  let extraImages = [];
  try {
    extraImages = JSON.parse(data.images || "[]");
  } catch {}

  const heroImage = data.image ? `${BASE_IMAGE_URL}${data.image}` : null;
  const videoUrl = data.video ? `${BASE_IMAGE_URL}${data.video}` : null;
  const gridImages = extraImages.slice(0, 4);
  const lastImage =
    extraImages.length > 4 ? extraImages[extraImages.length - 1] : null;

  return (
    <div className="w-full min-h-screen bg-white text-black font-sans">
      {/* Hero */}
      <section
        className="relative w-full h-110 bg-center bg-cover flex items-center justify-start  "
        style={{
          backgroundImage: heroImage ? `url('${heroImage}')` : "none",
          backgroundColor: heroImage ? "transparent" : "#e5e7eb",
        }}
      >
     <h1 className="relative text-white text-4xl md:text-5xl font-bold px-4 sm:px-12 lg:px-24 max-w-5xl text-left">
  {data.name}
</h1>

      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Celebrating{" "}
          <span className="text-green-600">{data.details1 || "Moments"}</span>{" "}
          at <span className="text-green-600">ILT</span>
        </h2>
        <p className="italic text-lg max-w-xl mx-auto mb-8">
          Explore the events and celebrations that bring our ILT family closer
          every year.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {gridImages.map((img, idx) => (
            <img
              key={idx}
              src={`${BASE_IMAGE_URL}${img}`}
              alt={`Event ${idx + 1}`}
              className={`
        w-full object-cover rounded transition-transform hover:scale-105
        
        ${
          idx === 0
            ? "md:col-start-1 md:row-span-2 md:h-full h-64"
            : idx === 1
            ? "md:col-start-2 md:row-start-1 h-65"
            : idx === 2
            ? "md:col-start-2 md:row-start-2 h-65"
            : idx === 3
            ? "md:col-start-3 md:row-span-2 md:h-full h-64"
            : ""
        }
      `}
            />
          ))}
        </div>
      </section>

      {/* Celebrations */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {lastImage ? (
          <img
            src={`${BASE_IMAGE_URL}${lastImage}`}
            alt="Featured"
            className="rounded-lg w-full h-120 object-cover shadow-lg"
          />
        ) : (
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
        )}
        <div>
          <h3 className="text-3xl font-bold mb-4">Our Celebrations & Events</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            A glimpse of the colorful moments that bring the ILT community
            together every year.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="w-full bg-black py-16 flex flex-col items-center justify-center text-center">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-8">
          Memories in Motion
        </h2>

        {videoUrl ? (
          <div className="w-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-auto md:h-[500px] object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support video.
            </video>
          </div>
        ) : (
          <p className="text-gray-300 text-xl mt-4">Video Coming Soon</p>
        )}
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
    {/* Left: Query Form */}
    <div>
      <QueriesForm />
    </div>

    {/* Right: Image */}
    <div className="flex justify-center">
      <img
        src="/images/WhatsApp Image 2025-10-09 at 12.16.37_1d071594.jpg"
        alt="Queries Illustration"
        className="w-full h-100 rounded-lg object-cover"
      />
    </div>

  </div>
</section>
<OurGraduates/>
    </div>
  );
};

export default EventsDetails;
