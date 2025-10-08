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
function App() {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/courses/:slug" element={<CourseDetails/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/testimonial/:slug" element={<Testimonial/>}/>
        <Route path="/certificate" element={<Certificate/>}/>
        <Route path="/workshop" element={<Workshop/>}/>
        <Route path="/workshop/:slug" element={<WorkshopDetails/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/modal" element={<ModalPage/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
