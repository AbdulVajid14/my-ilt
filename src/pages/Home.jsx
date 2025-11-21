import React, { useState, useEffect } from "react";
import OurCourses from "../components/Home/OurCourses";
import PlacementHighlights from "../components/Home/PlacementHighlights";
import StudyAbroad from "../components/Home/StudyAbroad";
import AppSection from "../components/Home/AppSection";
import OurTrainers from "../components/Home/OurTrainers";
import Certificate from "../components/Home/CertificateInHome";
import OurGraduates from "../components/Home/OurGraduates";
import HomeBlog from "../components/Home/HomeBlog";
import Questions from "../components/Home/Questions";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import axios from "axios";
import HomeWorkshop from "../components/Home/HomeWorkshop";
import LearningOption from "../components/Home/LearningOption";
import TrainerSection from "../components/Home/TrainerSection";
import WhyChoose from "../components/Home/WhyChoose";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
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
  }, []);

  // const [banners, setBanners] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const fallbackBanner = {
  //   id: "fallback",
  //   tittle: "Kerala's #1 Practical Digital Marketing Training Institute",
  //   description:
  //     "1000+ Reviews | 15+ Years Experienced Trainers | Mobile Enabled Learning | Global Certification",
  //   image: "/images/WhatsApp Image 2025-09-20 at 10.53.59_a95e9d3b.jpg",
  // };

  // useEffect(() => {
  //   const fetchBanners = async () => {
  //     try {
  //       const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/Banner`);
  //       const fetched = res.data.data || [];
  //       setBanners(fetched.length > 0 ? fetched : [fallbackBanner]);
  //     } catch (err) {
  //       console.error("Error fetching banners:", err);
  //       setError(err.message);
  //       setBanners([fallbackBanner]);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchBanners();
  // }, []);

  // const slides = banners.length > 0 ? banners : [fallbackBanner];

  return (
    <div className="bg-gray-50 font-sans">
      {/* <section className="relative text-white h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[80vh] flex items-center overflow-hidden">
  {loading ? (
    <div className="absolute inset-0 bg-gray-300 animate-pulse">
      <div className="absolute inset-0 bg-black opacity-40" />
    </div>
  ) : (
    <Swiper
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      loop={slides.length > 1}
      speed={800}
      className="w-full h-full"
    >
      {slides.map((banner) => (
        <SwiperSlide key={banner.id}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("${import.meta.env.VITE_BASE_URL_IMAGE}${banner.image}")`,
            }}
          >
          </div>

          <div className="relative z-10 flex flex-col justify-center text-left px-6 sm:px-10 md:px-16 lg:px-24 py-8 sm:py-12 md:py-20 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              {banner.tittle}
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6">
              {banner.description}
            </p>
            <Link to={banner.url ? banner.url : "/courses"}>
              <Button variant="green-outline">View More</Button>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )}
</section> */}
      <section className="relative text-white h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-banner.png" 
            alt="Hero background"
            fetchpriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col justify-center text-left px-6 sm:px-10 md:px-16 lg:px-24 py-8 sm:py-12 md:py-20 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Kerala's #1 Practical Digital Marketing Training Institute
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-6">
            1000+ Reviews | 15+ Years Experienced Trainers | Mobile Enabled
            Learning | Global Certification
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
      {/* <Certificate /> */}
      <OurGraduates />
      <HomeBlog />
      <Questions />
      <ILTSection />
    </div>
  );
};

export default Home;
