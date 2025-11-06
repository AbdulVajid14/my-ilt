// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const EventsDetails = () => {
//   const BASE_URL = import.meta.env.VITE_BASE_URL;
//   const BASE_IMAGE_URL = import.meta.env.VITE_BASE_URL_IMAGE;

//   const [year, setYear] = useState("");
//   const [availableYears, setAvailableYears] = useState([]);
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch all gallery items once
//   useEffect(() => {
//     const fetchAllData = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const response = await axios.get(`${BASE_URL}/Gallery?status=1`);
//         const items = response.data.data || [];

//         // Extract unique years from `type`
//         const yearsFromApi = [...new Set(items.map((item) => item.type))]
//           .sort()
//           .reverse();

//         if (yearsFromApi.length === 0) {
//           setError("No gallery data available.");
//           setLoading(false);
//           return;
//         }

//         setAvailableYears(yearsFromApi);

//         // Smart default: current year → latest year
//         const currentYear = new Date().getFullYear().toString();
//         const defaultYear = yearsFromApi.includes(currentYear)
//           ? currentYear
//           : yearsFromApi[0]; // fallback to newest

//         setYear(defaultYear);

//         // Set initial data for default year
//         const initialItem =
//           items.find((item) => item.type === defaultYear) || null;
//         setData(initialItem);
//       } catch (err) {
//         console.error("Failed to fetch gallery:", err);
//         setError("Failed to load events. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAllData();
//   }, [BASE_URL]);

//   // Fetch data when year changes
//   useEffect(() => {
//     if (!year || availableYears.length === 0) return;

//     const fetchDataForYear = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`${BASE_URL}/Gallery?status=1`);
//         const items = response.data.data || [];
//         const selectedItem = items.find((item) => item.type === year) || null;
//         setData(selectedItem);
//       } catch (err) {
//         console.error("Error fetching year data:", err);
//         setError("Failed to load events for this year.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDataForYear();
//   }, [year, BASE_URL]);

//   if (loading && !data) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <p className="text-lg">Loading events...</p>
//       </div>
//     );
//   }

//   if (error || !data) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <p className="text-red-600">
//           {error || "No events found for this year."}
//         </p>
//       </div>
//     );
//   }

//   // Parse extra images
//   let extraImages = [];
//   try {
//     extraImages = JSON.parse(data.images || "[]");
//   } catch (e) {
//     console.error("Failed to parse images:", e);
//   }

//   const heroImage = data.image ? `${BASE_IMAGE_URL}${data.image}` : null;
//   const videoUrl = data.video ? `${BASE_IMAGE_URL}${data.video}` : null;

//   const gridImages = extraImages.slice(0, 4);
//   const lastImage =
//     extraImages.length > 4 ? extraImages[extraImages.length - 1] : null;

//   return (
//     <div className="w-full min-h-screen bg-white text-black font-sans">
//       {/* Hero Section - Banner */}
//       <section
//         className="relative w-full h-72 bg-center bg-cover flex items-center justify-center"
//         style={{
//           backgroundImage: heroImage ? `url('${heroImage}')` : "none",
//           backgroundColor: heroImage ? "transparent" : "#e5e7eb",
//         }}
//       >
//         <div className="absolute inset-0 bg-black opacity-60"></div>
//         <h1 className="relative text-white text-4xl md:text-5xl font-bold text-center px-4 max-w-5xl">
//           {data.name || "ILT Events & Celebrations"}
//         </h1>
//       </section>

//       {/* Celebrating Moments */}
//       <section className="max-w-6xl mx-auto px-6 md:px-10 py-12 text-center">
//         <h2 className="text-3xl font-bold mb-3">
//           Celebrating{" "}
//           <span className="text-green-600">{data.details1 || "Moments"}</span> &{" "}
//           <span className="text-green-600">{data.details2 || "Together"}</span>{" "}
//           at <span className="text-green-600">ILT</span>
//         </h2>
//         <p className="italic text-lg max-w-xl mx-auto mb-8">
//           Explore the events and celebrations that bring our ILT family closer
//           every year.
//         </p>

//         {/* Dynamic Year Selector */}
//         <div className="flex justify-end w-full mb-8">
//           <select
//             className="border border-gray-300 rounded px-4 py-2 text-base font-medium bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//             value={year}
//             onChange={(e) => setYear(e.target.value)}
//             disabled={loading}
//           >
//             {availableYears.map((y) => (
//               <option key={y} value={y}>
//                 {y} {y === new Date().getFullYear().toString() && ""}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Image Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
//           {gridImages.map((img, idx) => (
//             <img
//               key={idx}
//               src={`${BASE_IMAGE_URL}${img}`}
//               alt={`Event ${idx + 1}`}
//               className={`
//         w-full object-cover rounded transition-transform hover:scale-105

//         ${
//           idx === 0
//             ? "md:col-start-1 md:row-span-2 md:h-full h-64"
//             : idx === 1
//             ? "md:col-start-2 md:row-start-1 h-65"
//             : idx === 2
//             ? "md:col-start-2 md:row-start-2 h-65"
//             : idx === 3
//             ? "md:col-start-3 md:row-span-2 md:h-full h-64"
//             : ""
//         }
//       `}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Our Celebrations Section */}
//       <section className="max-w-6xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         {lastImage ? (
//           <img
//             src={`${BASE_IMAGE_URL}${lastImage}`}
//             alt="Featured moment"
//             className="rounded-lg w-full h-64 md:h-auto object-cover shadow-lg"
//           />
//         ) : (
//           <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 md:h-auto flex items-center justify-center">
//             <span className="text-gray-500">No featured image</span>
//           </div>
//         )}
//         <div>
//           <h3 className="text-3xl font-bold mb-4">Our Celebrations & Events</h3>
//           <p className="text-gray-600 text-lg leading-relaxed">
//             A glimpse of the colorful moments that bring the ILT community
//             together every year.
//           </p>
//         </div>
//       </section>

//       {/* Memories in Motion - Video */}
{
  /* <section className="w-full bg-black py-16 flex flex-col items-center justify-center text-center">
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
</section> */
}

//     </div>
//   );
// };

// export default EventsDetails;

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
        className="relative w-full h-72 bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: heroImage ? `url('${heroImage}')` : "none",
          backgroundColor: heroImage ? "transparent" : "#e5e7eb",
        }}
      >
        <h1 className="relative text-white text-4xl md:text-5xl font-bold text-center px-4 max-w-5xl">
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
            className="rounded-lg w-full h-64 md:h-auto object-cover shadow-lg"
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
