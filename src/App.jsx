import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import CourseDetails from "./pages/CourseDetails";
import Blog from "./pages/Blog";
import Testimonial from "./pages/Testinomial";
import Certificate from "./pages/Certificate";
import Workshop from "./pages/Workshop";
import WorkshopDetails from "./pages/WorkshopDetails";
import ContactPage from "./pages/ContactPage";
import ModalPage from "./pages/ModalPage";
import ScrollToTop from "./components/Layout/ScrollToTop";
import Trainers from "./pages/Trainers";
import TrainesrDetails from "./pages/TrainersDetails";
import ILTAbroad from "./pages/ILTAbroad";
import Courses from "./pages/Courses";
import BlogDetail from "./pages/BlogDetail";
import Questions from "./components/Home/Questions";
import TermsAndCondition from "./pages/TermsAndCondition";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
import EventsDetails from "./pages/EventsDetails";
import Events from "./pages/Events";
import RefundPolicy from "./pages/RefundPolicy";
import PlacementPage from "./pages/PlacementPage";
import Disclaimer from "./pages/Disclaimer";
import CookiePolicy from "./pages/CookiePolicy";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses/:slug" element={<CourseDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/testimonial/:slug" element={<Testimonial />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/workshop/:slug" element={<WorkshopDetails />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mode" element={<ModalPage />} />
          <Route path="/hire-digital-marketers-in-india" element={<Trainers />} />
          <Route path="/trainers/:slug" element={<TrainesrDetails />} />
          <Route path="/MBA-MSC-Digital-Marketing-Abroad" element={<ILTAbroad />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<EventsDetails />} />
          <Route
            path="/refund-cancellation-policy"
            element={<RefundPolicy />}
          />
          <Route path="/placements" element={<PlacementPage />} />
          <Route path="/website-disclaimer" element={<Disclaimer />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />

          {/* <Route path="/faqs" element={<Questions />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
