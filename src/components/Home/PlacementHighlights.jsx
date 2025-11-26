import React, { useEffect, useState, useRef, memo } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const PlacementCard = memo(({ student, IMAGE_URL }) => (
  <motion.div
    className="min-w-[250px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
    whileHover={{ scale: 1.05 }}
    style={{ willChange: "transform" }}
  >
    <div className="relative">
      <img
        src={`${IMAGE_URL}${student.image}`}
        alt={student.name}
        className="w-full h-90 object-cover"
        loading="lazy"
        decoding="async"
        style={{ aspectRatio: "250 / 360" }}
      />
      <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-sm py-3 px-3 text-center">
        <h3 className="text-lg font-semibold text-green-700">{student.name}</h3>
        <p className="text-sm text-black">{student.details1}</p>
        <p className="text-sm text-black">{student.details2}</p>
        <p className="text-xs text-black mt-1">{student.type}</p>
      </div>
    </div>
  </motion.div>
));

PlacementCard.displayName = "PlacementCard";

function PlacementHighlights() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const IMAGE_URL = import.meta.env.VITE_BASE_URL_IMAGE;
  const [placements, setPlacements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/Samples`);
        if (response.data?.data?.length > 0) {
          setPlacements(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching placement data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPlacements();
  }, [BASE_URL]);

  const duplicatedPlacements = placements.length > 0 
    ? [...placements, ...placements] 
    : [];

  return (
    <section className="py-12 sm:py-16 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-black">
          Student Placement Highlights
        </h2>

        {isLoading ? (
          <p className="text-black">Loading placement highlights...</p>
        ) : duplicatedPlacements.length === 0 ? (
          <p className="text-black">No placement data available.</p>
        ) : (
          <div className="relative w-full overflow-hidden">
            <style jsx>{`
              @keyframes scrollX {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(-50%);
                }
              }

              .scroll-container {
                display: flex;
                animation: scrollX ${duplicatedPlacements.length < 8 ? 20 : 30}s linear infinite;
                will-change: transform;
              }

              .scroll-container:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div
              ref={scrollRef}
              className="scroll-container gap-6"
              style={{
                width: "max-content",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
            >
              {duplicatedPlacements.map((student, index) => (
                <PlacementCard
                  key={`${student.id}-${index}`}
                  student={student}
                  IMAGE_URL={IMAGE_URL}
                />
              ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          </div>
        )}
      </div>
    </section>
  );
}

export default PlacementHighlights;