
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Events() {
//   const BASE_URL = import.meta.env.VITE_BASE_URL;
//   const BASE_IMAGE_URL = import.meta.env.VITE_BASE_URL_IMAGE;

//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/Gallery?status=1`);
//         if (response.data.success) {
//           setEvents(response.data.data);
//         }
//       } catch (err) {
//         setError("Failed to load events.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, [BASE_URL]);

//   return (
//     <div className="w-full">
//       {/* Banner Section */}
//       <section className="relative w-full h-72 md:h-96 flex items-center justify-center overflow-hidden bg-gray-900 text-white">
//         <img
//           src="/images/Frame 580.png"
//           alt="Events Banner"
//           className="absolute inset-0 w-full h-full object-cover opacity-70"
//         />

//         <div className="relative z-10 text-center px-6">
//           <h1 className="text-3xl md:text-5xl font-bold mb-3">Our Events</h1>
//           <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-200">
//             Explore our recent celebrations, moments, and community highlights.
//           </p>
//         </div>
//       </section>

//       {/* Events List Section */}
//       <section className="max-w-7xl mx-auto px-6 py-12">
//         <h2 className="text-2xl font-semibold mb-8 text-center">Event Gallery</h2>

//         {loading && (
//           <div className="text-center text-gray-500">Loading events...</div>
//         )}

//         {error && <div className="text-center text-red-500">{error}</div>}

//         {!loading && !error && events.length === 0 && (
//           <div className="text-center text-gray-500">No events found.</div>
//         )}

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {events.map((event) => {
//             let images = [];
//             try {
//               images = JSON.parse(event.images || "[]");
//             } catch {
//               images = [];
//             }

//             return (
//               <div
//                 key={event.id}
//                 className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
//               >
//                 <img
//                   src={`${BASE_IMAGE_URL}${images[0] || event.image}`}
//                   alt={event.name}
//                   className="w-full h-100 object-cover"
//                 />
//                 <div className="p-4 flex items-center justify-between">
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {event.name} - {event.type}
//                   </h3>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Events;
// src/pages/Events.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Events() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const BASE_IMAGE_URL = import.meta.env.VITE_BASE_URL_IMAGE;

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper: create URL slug
  const createSlug = (name, type) => {
    return `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}-${type}`;
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/Gallery?status=1`);
        if (data.success) setEvents(data.data);
      } catch (err) {
        setError("Failed to load events.");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [BASE_URL]);

  return (
    <div className="w-full">
      {/* Banner */}
      <section className="relative w-full h-72 md:h-96 flex items-center justify-center overflow-hidden bg-gray-900 text-white">
        <img
          src="/images/Frame 580.png"
          alt="Events Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">Our Events</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-200">
            Explore our recent celebrations, moments, and community highlights.
          </p>
        </div>
      </section>

      {/* List */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-8 text-center">Event Gallery</h2>

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map((event) => {
            let images = [];
            try { images = JSON.parse(event.images || "[]"); } catch {}

            const thumbnail = images[0] || event.image;
            const slug = createSlug(event.name, event.type);

            return (
              <Link
                key={event.id}
                to={`/events/${slug}`}
                className="block bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={`${BASE_IMAGE_URL}${thumbnail}`}
                  alt={event.name}
                  className="w-full h-100 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {event.name} - {event.type}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Events;