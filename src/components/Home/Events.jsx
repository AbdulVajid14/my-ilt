import React from "react";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <section
      className="relative w-full h-[500px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/images/Events & Celebration section.png')",
      }}
    >
      {/* Content */}   
      <div className="relative z-10 max-w-5xl px-6 text-white">
        <div className="max-w-xl pl-6 sm:pl-10">
          <h2 className="text-3xl sm:text-4xl font-bold flex items-center gap-2 mb-4">
            ILT Events & Celebrations
          </h2>

          <p className="text-lg sm:text-xl leading-relaxed mb-6">
            Discover the moments that make ILT more than just a place of
            learning — a community that celebrates together.
          </p>

          <Link to="/events">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md">
              View All Events
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
