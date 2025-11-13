import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function PlacementHighlights() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const IMAGE_URL = import.meta.env.VITE_BASE_URL_IMAGE;
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/Samples`);
        if (response.data && response.data.data) {
          setPlacements(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching placement data:", error);
      }
    };
    fetchPlacements();
  }, [BASE_URL]);

  const repeatedPlacements = [...placements, ...placements];

  return (
    <section className="py-12 sm:py-16 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-gray-900">
          Student Placement Highlights
        </h2>

        {placements.length === 0 ? (
          <p className="text-gray-600">Loading placement highlights...</p>
        ) : (
          <div className="relative w-full overflow-hidden">
            {/* Add keyframes for continuous scroll */}
            <style>
              {`
                @keyframes scrollX {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
              `}
            </style>

            {/* Scrolling container */}
            <div
              className="flex gap-6"
              style={{
                animation: "scrollX 15s linear infinite",
                width: "max-content",
              }}
            >
              {repeatedPlacements.map((student, index) => (
                <motion.div
                  key={`${student.id}-${index}`}
                  className="min-w-[250px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative">
                    <img
                      src={`${IMAGE_URL}${student.image}`}
                      alt={student.name}
                      className="w-full h-90 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-sm py-3 px-3 text-center">
                      <h3 className="text-lg font-semibold text-green-700">
                        {student.name}
                      </h3>
                      <p className="text-sm text-gray-800">{student.details1}</p>
                      <p className="text-sm text-gray-800">{student.details2}</p>
                      <p className="text-xs text-gray-600 mt-1">{student.type}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default PlacementHighlights;
