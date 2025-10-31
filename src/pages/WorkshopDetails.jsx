

import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import Questions from "../components/Home/Questions";
import CommonCourses from "../components/CommonComponents/CommonCourses";

const WorkshopDetails = () => {
  const { slug } = useParams();
  const [workshop, setWorkshop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkshop = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/Event`);
        const result = response.data;

        if (result.success) {
          const workshops = result.data.filter(event => event.status === 1);
          const selectedWorkshop = workshops.find(
            event => event.tittle.toLowerCase().replace(/\s+/g, '-') === slug
          );

          if (selectedWorkshop) {
            const formattedWorkshop = {
              title: selectedWorkshop.tittle,
              image: `${import.meta.env.VITE_BASE_URL_IMAGE}${selectedWorkshop.image}`,
              about: selectedWorkshop.description,
              videoImage: `${import.meta.env.VITE_BASE_URL_IMAGE}${selectedWorkshop.image}`, // Using same image for video placeholder
              keyHighlights: selectedWorkshop.highlights.split('\r\n').filter(item => item.trim() !== ''),
              outcome: selectedWorkshop.outcome,
              metaTitle: selectedWorkshop.metaTitle || selectedWorkshop.tittle,
  metaDescription: selectedWorkshop.metaDescription || selectedWorkshop.description?.slice(0, 150),
  metaKeywords: selectedWorkshop.metaKeywords || selectedWorkshop.tittle
            };
            setWorkshop(formattedWorkshop);
          } else {
            setError("Workshop not found.");
          }
        } else {
          setError("Failed to fetch workshop data.");
        }
      } catch (err) {
        setError("Error fetching workshop details.");
        console.error("Error fetching workshop:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkshop();
  }, [slug]);

    useEffect(() => {
      if (!workshop) return;
      document.title = workshop.metaTitle || workshop.title ;
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
        workshop.metaDescription
      );
      const metaKeywords =
        document.querySelector("meta[name='keywords']") ||
        (() => {
          const meta = document.createElement("meta");
          meta.name = "keywords";
          document.head.appendChild(meta);
          return meta;
        })();
  
      metaKeywords.setAttribute("content", workshop.metaKeywords || "");
    }, [workshop]);

  if (loading) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  if (error || !workshop) {
    return <h2 className="text-center mt-10">{error || "Workshop not found."}</h2>;
  }

  return (
    <div className="mx-auto">
      {/* Header Section */}
      <div
        className="relative bg-center bg-cover h-64 sm:h-72 md:h-120 flex items-center justify-center mb-12"
        style={{
          backgroundImage: `url('/images/WhatsApp Image 2025-10-08 at 10.27.53_65c77a16.jpg')`,
        }}
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold bg-opacity-50 px-6 py-3 rounded">
          {workshop.title}
        </h1>
      </div>

      {/* About the Workshop */}
      <section className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-2xl font-semibold mb-4">About the Workshop</h2>
        <p className="text-gray-600 text-xl leading-relaxed">
          {workshop.about}
        </p>
      </section>

      {/* Video Section */}
      <section className="max-w-7xl mx-auto mb-16 relative">
        <img
          src={workshop.videoImage}
          alt="Workshop Presentation"
          className="w-full rounded-lg shadow-lg"
        />
      </section>

      {/* Key Highlights */}
      <section className="max-w-7xl mx-auto mb-16">
        <h3 className="text-xl font-semibold mb-6">Key Highlights</h3>

        {/* Split into two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column (first half of items) */}
          <ul className="space-y-4 text-gray-700 text-lg">
            {workshop.keyHighlights.slice(0, Math.ceil(workshop.keyHighlights.length / 2)).map((highlight, index) => (
              <li key={index} className="flex items-start">
                <FaCheck className="text-green-600 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Right Column (remaining items) */}
          <ul className="space-y-4 text-gray-700 text-lg">
            {workshop.keyHighlights.slice(Math.ceil(workshop.keyHighlights.length / 2)).map((highlight, index) => (
              <li key={index + Math.ceil(workshop.keyHighlights.length / 2)} className="flex items-start">
                <FaCheck className="text-green-600 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Outcome */}
      <section className="max-w-7xl mx-auto mb-16">
        <h3 className="text-3xl font-semibold text-green-600 mb-4">Outcome</h3>
        <p className="text-gray-800 text-xl font-semibold">
          {workshop.outcome}
        </p>
      </section>

      {/* Explore More Courses */}
      <section className="max-w-7xl mx-auto">
        <CommonCourses />
      </section>

      <Questions />
    </div>
  );
};

export default WorkshopDetails;
