import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import CourseDetails from "./pages/CourseDetails";
import Blog from "./pages/Blog";
import Testimonial from "./pages/Testinomial";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/course-details" element={<CourseDetails/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/testimonial/:slug" element={<Testimonial/>}/>
      </Route>
    </Routes>
  );
}

export default App;
