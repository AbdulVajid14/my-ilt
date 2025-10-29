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
import HelpCenter from "./pages/HelpCenter";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
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
          <Route path="/modal" element={<ModalPage />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/trainers/:slug" element={<TrainesrDetails />} />
          <Route path="/ilt-abroad" element={<ILTAbroad />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/terms-and-condition" element={<TermsAndCondition />} />

          {/* <Route path="/faqs" element={<Questions />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
