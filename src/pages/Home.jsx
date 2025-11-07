// import React, { useState, useEffect } from "react";
// import OurCourses from "../components/Home/OurCourses";
// import BookTrail from "../components/Home/BookTrail";
// import StudyAbroad from "../components/Home/StudyAbroad";
// import AppSection from "../components/Home/AppSection";
// import OurTrainers from "../components/Home/OurTrainers";
// import Certificate from "../components/Home/CertificateInHome";
// import OurGraduates from "../components/Home/OurGraduates";
// import HomeBlog from "../components/Home/HomeBlog";
// import Questions from "../components/Home/Questions";
// import "react-phone-input-2/lib/style.css";
// import { Link } from "react-router-dom";
// import Button from "../components/Button/Button";
// import axios from "axios";
// import HomeWorkshop from "../components/Home/HomeWorkshop";
// import LearningOption from "../components/Home/LearningOption";
// import TrainerSection from "../components/Home/TrainerSection";
// import WhyChoose from "../components/Home/WhyChoose";

// const Home = () => {
//   const [banners, setBanners] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBanners = async () => {
//       try {
//         const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/Banner`);
//         setBanners(res.data.data.slice(0, 1));
//       } catch (err) {
//         setError(err.message);
//         console.error("Error fetching banners:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBanners();
//   }, []);

//   // Fallback banner data in case of error
//   const fallbackBanner = {
//     id: "fallback",
//     tittle: "Kerala's #1 Practical Digital Marketing Training Institute",
//     description:
//       "1000+ Reviews | 15+ Years Experienced Trainers | Mobile Enabled Learning | Global Certification",
//     image: "/images/WhatsApp Image 2025-09-20 at 10.53.59_a95e9d3b.jpg",
//     url: "/courses",
//   };

//   return (
//     <div className="bg-gray-50 font-sans">
//       <section className="relative text-white min-h-[400px] sm:min-h-[500px] flex items-center overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center transition-all duration-700"
//           style={{
//             backgroundImage: `url("/images/WhatsApp Image 2025-09-20 at 10.53.59_a95e9d3b.jpg")`,
//           }}
//         >
//           <div className="absolute inset-0 bg-black opacity-40"></div>
//         </div>
//         <div className="relative z-10 container mx-auto px-4 py-12 sm:py-20 md:py-32">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//             {fallbackBanner.tittle}
//           </h1>
//           <p className="text-lg sm:text-xl mb-6 max-w-2xl">
//             {fallbackBanner.description}
//           </p>
//           <Link to={fallbackBanner.url}>
//             <Button variant="green-outline">View More</Button>
//           </Link>
//         </div>
//       </section>

//       {/* 2. Why Choose ILT Section */}
//      <WhyChoose/>
//       {/* 3. Trainer Section */}
//       <TrainerSection/>
//       {/* 4. Learning Options */}
//       <LearningOption/>
//       {/* 5. Course Overview */}
//       <OurCourses />
//       {/* 6. Learn & Grow With ILT */}
//       <BookTrail />
//       {/* 7. Study Digital Marketing Abroad */}
//       <StudyAbroad />
//       {/* 8. App Section */}
//       <AppSection />
//       {/* 9. Learn More Through Our Workshops */}
//       <HomeWorkshop/>
//       {/* 10. Our Trainers */}
//       <OurTrainers />
//       {/* 11. Certifications */}
//       <Certificate />
//       {/* 12. Hear From Our Graduates */}
//       <OurGraduates />
//       {/* 13. Latest Insights & Tips */}
//       <HomeBlog />
//       {/* 14. Have Questions? We've Got Answers. */}
//       <Questions />
//     </div>
//   );
// };

// export default Home;
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

// ---- Swiper imports ----
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Events from "../components/Home/Events";

const Home = () => {
     useEffect(() => {
      document.title = "Digital Marketing Institute in Kochi (Cochin), Kerala | Best SEO Training in Ernakulam";
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
        "Best Digital Marketing Institute in Kochi(Cochin). Internet Leads Training (ILT) is a top SEO & Digital Marketing Course Provider in Kerala. Learn Google Ads, Social Medial Marketing, Email Marketing, Facebook Ads, Google Analytics & Linkedin Ads in Ernakulam."
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
        "seo training in cochin, google adwords training, google analytics training"
      );
    }, []);
    
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fallback (static) banner – will be used if API fails or returns empty
  const fallbackBanner = {
    id: "fallback",
    tittle: "Kerala's #1 Practical Digital Marketing Training Institute",
    description:
      "1000+ Reviews | 15+ Years Experienced Trainers | Mobile Enabled Learning | Global Certification",
    image: "/images/WhatsApp Image 2025-09-20 at 10.53.59_a95e9d3b.jpg",
  };

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/Banner`);
        const fetched = res.data.data || [];
        setBanners(fetched.length > 0 ? fetched : [fallbackBanner]);
      } catch (err) {
        console.error("Error fetching banners:", err);
        setError(err.message);
        setBanners([fallbackBanner]);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  const slides = banners.length > 0 ? banners : [fallbackBanner];

  return (
    <div className="bg-gray-50 font-sans">
  <section className="relative text-white h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[80vh] flex items-center overflow-hidden">
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
            <Link to="/courses">
              <Button variant="green-outline">View More</Button>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )}
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
      <Events/>
      <Certificate />
      <OurGraduates />
      <HomeBlog />
      <Questions />
    </div>
  );
};

export default Home;
