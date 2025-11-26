import React, { useState, useEffect, useMemo, memo } from "react";
import { HiHome, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const FooterLink = memo(({ to, children, className }) => (
  <li>
    <Link to={to} className={className}>
      {children}
    </Link>
  </li>
));

const SocialLink = memo(({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="hover:text-green-900 transition-colors"
  >
    <Icon size={20} className="w-5 h-5" />
  </a>
));

const Footer = () => {
  const [courses, setCourses] = useState([]);
  const [newCourses, setNewCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const newCourseNames = useMemo(() => [
    "Python Full Stack Course",
    "Business Analytics Course",
    "Data Analytics Course",
    "Digital Marketing Course Kochi",
    "Core Python Course",
    "Data Driven AI Digital Marketing Course",
    "Buisness Analytics Course",
  ], []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/Courses`);
        
        if (response.data.success) {
          const allCourses = response.data.data;

          const filteredCourses = allCourses
            .filter((c) => c.category_id === 4)
            .map((c) => ({
              name: c.name,
              slug: c.name.toLowerCase().replace(/\s+/g, "-"),
            }));

          const filteredNewCourses = allCourses
            .filter((c) => newCourseNames.includes(c.name))
            .map((c) => ({
              name: c.name,
              slug: c.name.toLowerCase().replace(/\s+/g, "-"),
            }));

          setCourses(filteredCourses);
          setNewCourses(filteredNewCourses);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [newCourseNames]); 

  const careerProgramLinks = useMemo(() => {
    if (!loading && courses.length > 0) {
      return courses.map((course, idx) => (
        <FooterLink
          key={course.slug} 
          to={`/courses/${course.slug}`}
          className="text-white hover:text-gray-900 block"
        >
          {course.name}
        </FooterLink>
      ));
    }

    return Array.from({ length: 4 }, (_, i) => (
      <li key={`skeleton-${i}`} className="bg-white/20 h-4 w-full mb-2 rounded animate-pulse" />
    ));
  }, [courses, loading]);

  const careerMasteryLinks = useMemo(() => {
    const links = loading || newCourses.length === 0
      ? [<li key="loading">Loading...</li>]
      : newCourses.map((course) => (
          <FooterLink
            key={course.slug}
            to={`/courses/${course.slug}`}
            className="text-white hover:text-gray-900 block"
          >
            {course.name}
          </FooterLink>
        ));

    links.push(
      <FooterLink
        key="mba-abroad"
        to="/MBA-MSC-Digital-Marketing-Abroad"
        className="text-white hover:text-gray-900 block"
      >
        MBA/MSC Digital Marketing Abroad
      </FooterLink>
    );

    return links;
  }, [newCourses, loading]);

  return (
    <footer className="bg-green-900 text-white px-14 py-10 font-sans">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between">
        {/* Left Section - Contact Info */}
        <div className="flex-1 min-w-[280px] mb-10">
          <div className="flex items-start gap-2.5 mb-4">
            <HiHome className="flex-shrink-0 mt-0.5 w-5 h-5 text-white" />
            <p className="text-sm leading-relaxed">
              Internet Leads Training <br />
              Jigsaw Co-Working Space 6th Floor, Kandamkulathy Towers,
              <br /> Mahatma Gandhi Rd, KPCC Junction, Opp Maharaja's Ground, <br />
              Ernakulam, Kerala 682011
            </p>
          </div>
          <div className="flex items-start gap-2.5 mb-3">
            <HiOutlineMail className="flex-shrink-0 mt-0.5 w-5 h-5 text-white" />
            <div className="text-sm leading-relaxed">
              <a href="mailto:support@ilt.com" className="underline text-white block">
                Customer Queries
              </a>
              <div>info@internetleadstraining.com</div>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <HiOutlinePhone className="flex-shrink-0 mt-0.5 w-5 h-5 text-white" />
            <div className="text-sm leading-relaxed">
              <a href="tel:+917013453050" className="underline text-white block">
                General Queries
              </a>
              <div>Ph: +91 95390 70845</div>
            </div>
          </div>
        </div>

        {/* Career Programs */}
        <div className="flex-1 min-w-[250px] mb-10">
          <h4 className="font-bold text-base mb-5">Career Programs</h4>
          <ul className="list-none p-0 m-0 text-sm leading-7 min-h-[150px]">
            {careerProgramLinks}
          </ul>
        </div>

        {/* Career Mastery */}
        <div className="flex-1 min-w-[280px] mb-10">
          <h4 className="font-bold text-base mb-5">Career Mastery</h4>
          <ul className="list-none p-0 m-0 text-sm leading-7">
            {careerMasteryLinks}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[60px] mb-10">
          <h4 className="font-bold text-base mb-5">Quick Links</h4>
          <ul className="list-none p-0 m-0 text-sm leading-7">
            <FooterLink to="/certificate" className="text-white hover:text-gary-900 block">
              Certificate
            </FooterLink>
            <FooterLink to="/about" className="text-white hover:text-gray-900 block">
              About Us
            </FooterLink>
            <FooterLink to="/workshop" className="text-white hover:text-gray-900 block">
              Workshops
            </FooterLink>
            <FooterLink to="/blog" className="text-white hover:text-gray-900 block">
              Blog
            </FooterLink>
            <FooterLink to="/placements" className="text-white hover:text-gray-900 block">
              Placement
            </FooterLink>
          </ul>
        </div>

        {/* Support & Resources */}
        <div className="flex-1 min-w-[150px] mb-10">
          <h4 className="font-bold text-base mb-5">Support & Resources</h4>
          <ul className="list-none p-0 m-0 text-sm leading-7">
            <FooterLink to="/privacy-policy" className="text-white hover:underline block">
              Privacy Policy
            </FooterLink>
            <FooterLink to="/terms-and-conditions" className="text-white hover:underline block">
              Terms & Conditions
            </FooterLink>
            <FooterLink to="/refund-cancellation-policy" className="text-white hover:underline block">
              Refund Cancellation Policy
            </FooterLink>
            <FooterLink to="/cookie-policy" className="text-white hover:underline block">
              Cookie Policy
            </FooterLink>
            <FooterLink to="/website-disclaimer" className="text-white hover:underline block">
              Website Disclaimer
            </FooterLink>
          </ul>
          <div className="mt-5">
            <img
              src="/images/ilt logo 2.png"
              alt="Internet Leads Training Logo"
              loading="lazy"
              width="150"
              height="60"
              className="w-[150px] h-[60px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 mt-5 pt-5 max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center text-xs opacity-80 gap-4 lg:gap-0">
        <div className="text-center lg:text-left">
          Copyright © 2025–2026 Internet Leads Training (ILT) | Developed & Promoted by{" "}
          <a
            href="https://www.doptit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-orange-300"
          >
            DOPTIT PVT LTD
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <SocialLink
            href="https://www.facebook.com/internetleadstraining/"
            icon={FaFacebookF}
            label="Facebook"
          />
          <SocialLink
            href="https://www.linkedin.com/company/internet-leads-training/"
            icon={FaLinkedinIn}
            label="LinkedIn"
          />
          <SocialLink
            href="https://www.instagram.com/internet_leads_training/"
            icon={FaInstagram}
            label="Instagram"
          />
          <SocialLink
            href="https://www.youtube.com/c/InternetLeadsTraining/featured"
            icon={FaYoutube}
            label="YouTube"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;