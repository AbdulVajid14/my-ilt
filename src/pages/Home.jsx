import React, { useState, useEffect } from "react";
import OurCourses from "../components/Home/OurCourses";
import PlacementHighlights from "../components/Home/PlacementHighlights";
import StudyAbroad from "../components/Home/StudyAbroad";
import AppSection from "../components/Home/AppSection";
import OurTrainers from "../components/Home/OurTrainers";
import OurGraduates from "../components/Home/OurGraduates";
import HomeBlog from "../components/Home/HomeBlog";
import Questions from "../components/Home/Questions";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import HomeWorkshop from "../components/Home/HomeWorkshop";
import LearningOption from "../components/Home/LearningOption";
import TrainerSection from "../components/Home/TrainerSection";
import WhyChoose from "../components/Home/WhyChoose";
import Events from "../components/Home/Events";
import ILTSection from "../components/Home/ILTSection";

const Home = () => {
  useEffect(() => {
    document.title =
      "Digital Marketing Course in Kochi(Cochin) | Kerala's Best Training Institute";
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
      "Internet Leads Training (ILT)is Kerala's best Digital Marketing training institute in Kochi, offering 100% practical course training for career and business growth"
    );
    const metaKeywords =
      document.querySelector("meta[name='keywords']") ||
      (() => {
        const meta = document.createElement("meta");
        meta.name = "keywords";
        document.head.appendChild(meta);
        return meta;
      })();

    metaKeywords.setAttribute(
      "content",
      "seo training in kochi, google adwords training, google analytics training"
    );

    // ------------------ FIX RENDER BLOCKING CSS ------------------
    const preloadCSS = document.createElement("link");
    preloadCSS.rel = "preload";
    preloadCSS.as = "style";
    preloadCSS.href = "/assets/index-COcQ2lkp.css";

    const asyncCSS = document.createElement("link");
    asyncCSS.rel = "stylesheet";
    asyncCSS.href = "/assets/index-COcQ2lkp.css";
    asyncCSS.media = "print";
    asyncCSS.onload = () => (asyncCSS.media = "all");

    document.head.appendChild(preloadCSS);
    document.head.appendChild(asyncCSS);

    // ------------------ FIX GOOGLE FONTS BLOCKING ------------------
    const preconnect1 = document.createElement("link");
    preconnect1.rel = "preconnect";
    preconnect1.href = "https://fonts.googleapis.com";

    const preconnect2 = document.createElement("link");
    preconnect2.rel = "preconnect";
    preconnect2.href = "https://fonts.gstatic.com";
    preconnect2.crossOrigin = "true";

    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
    fontLink.media = "print";
    fontLink.onload = () => (fontLink.media = "all");

    document.head.appendChild(preconnect1);
    document.head.appendChild(preconnect2);
    document.head.appendChild(fontLink);
  }, []);

  return (
    <div className="bg-gray-50 font-sans">
      <section className="relative text-white h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-banner.webp"
            alt="Hero background"
            fetchpriority="high"
            width="1920"
            height="900"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col justify-center text-left px-6 sm:px-10 md:px-16 lg:px-24 py-8 sm:py-12 md:py-20 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Kerala's #1 Practical Digital Marketing Training Institute
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-6">
            10,000+ Students | 2000+ Reviews | 15+ Years Experience
          </p>

          <Link to="/courses/digital-marketing-course-kochi">
            <Button variant="green-outline">View More</Button>
          </Link>
        </div>
      </section>

      {/* ==================== REST OF YOUR PAGE ==================== */}
      <WhyChoose />
      <TrainerSection />
      <LearningOption />
      <OurCourses />
      <PlacementHighlights />
      <StudyAbroad />
      <AppSection />
      <HomeWorkshop />
      <OurTrainers />
      <Events />
      <OurGraduates />
      <HomeBlog />
      <Questions />
      <ILTSection />
    </div>
  );
};

export default Home;
