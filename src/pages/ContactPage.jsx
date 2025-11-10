import React from "react";
import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import BookTrail from "../components/Home/BookTrail";
import Questions from "../components/Home/Questions";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact ILT for Digital Marketing Class.";
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
      "Kerala's No'1 SEO Training Institute. Email is admin@internetleadstraining.com and phone number is 9539070845. We are located in Cochin, Kerala"
    );
    const metaKeywords =
      document.querySelector("meta[name='keywords']") ||
      (() => {
        const meta = document.createElement("meta");
        meta.name = "keywords";
        document.head.appendChild(meta);
        return meta;
      })();

    metaKeywords.setAttribute("content", "Contact Us");
  }, []);

  const socialLinks = [
    { icon: FaFacebookF, color: "bg-green-600", href: "#", aria: "Facebook" },
    { icon: FaTwitter, color: "bg-green-600", href: "#", aria: "Twitter" },
    { icon: FaInstagram, color: "bg-green-600", href: "#", aria: "Instagram" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative h-64 md:h-100 w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/WhatsApp Image 2025-10-08 at 17.29.14_a33a28ea.jpg')",
        }}
      >
        <div className="absolute inset-0 opacity-60"></div>

        <div className="relative h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Contact Us
          </h1>
        </div>
      </div>
      <BookTrail />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-8 bg-white shadow-2xl rounded-xl">
          {/* Address Block */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Address
            </h2>
            <address className="text-gray-600 not-italic leading-relaxed">
              <p className="font-medium">Internet Leads Training, 36/2686,</p>
              <p>Azad Road, Kaloor, Cochin -</p>
              <p>682017, Kerala, India</p>
            </address>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Contact Info
            </h2>
            <div className="text-gray-600 space-y-2">
              <p>
                <span className="font-semibold text-gray-900">Phone: </span>
                <a
                  href="tel:+919539070845"
                  className="hover:text-blue-500 transition"
                >
                  +91 95390 70845
                </a>
              </p>
              <p>
                <span className="font-semibold text-gray-900">Mobile: </span>
                <a
                  href="tel:+919539070845"
                  className="hover:text-blue-500 transition"
                >
                  +91 95390 70845
                </a>
              </p>
              <p>
                <span className="font-semibold text-gray-900">Email: </span>
                <a
                  href="mailto:info@internetleadstraining.com"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  info@internetleadstraining.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-start md:items-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Follow Us
            </h2>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.aria}
                  className={`flex items-center justify-center w-10 h-10 rounded-full text-white ${link.color} hover:opacity-80 transition duration-200`}
                >
                  <link.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Questions />
    </div>
  );
};

export default ContactPage;
