import React from 'react';
import { useEffect } from 'react';

const CookiePolicy = () => {
  useEffect(() => {
    document.title = "Cookie Policy - Internet Leads Training Institute";

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
      "Understand how Internet Leads Training Institute (ILT) uses cookies to enhance your browsing experience. Read our Cookie Policy."
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
      "Cookie Policy, Cookies, Internet Leads Training, ILT Cookies, Digital Marketing Training Kochi"
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cookie Policy
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 prose prose-lg text-gray-800">

        <h2 className="text-3xl font-bold mt-12 mb-6">Cookie Policy – Internet Leads Training (ILT)</h2>
        <p className="text-lg opacity-90">November 19, 2025</p><br />

        <p className="mb-8">
          This Cookie Policy explains how ILT uses cookies and similar tracking technologies on our website.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">1. What Are Cookies?</h3>
        <p>
          Cookies are small text files stored on your device to improve user experience and website performance.
        </p>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">2. Types of Cookies We Use</h3>

        <h4 className="text-xl font-semibold mt-6 mb-3">2.1 Essential Cookies</h4>
        <p>Required for website functionality—cannot be disabled.</p>

        <h4 className="text-xl font-semibold mt-6 mb-3">2.2 Performance Cookies</h4>
        <p>Used to analyze website usage (e.g., Google Analytics).</p>

        <h4 className="text-xl font-semibold mt-6 mb-3">2.3 Preference Cookies</h4>
        <p>Store user preferences, such as language settings.</p>

        <h4 className="text-xl font-semibold mt-6 mb-3">2.4 Marketing Cookies</h4>
        <p>Used for advertisement tracking and personalized marketing.</p>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">3. How ILT Uses Cookies</h3>
        <p>Cookies help us:</p>
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Improve website speed and performance</li>
          <li>Analyze traffic and user behavior</li>
          <li>Show relevant ads</li>
          <li>Enhance learning platform experience</li>
        </ul>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">4. Managing Cookies</h3>
        <p>
          Users can disable cookies through their browser settings.<br />
          However, disabling certain cookies may limit platform functions.
        </p>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">5. Third-Party Cookies</h3>
        <p>
          ILT may allow trusted partners (such as analytics and advertising tools) to place cookies for performance tracking.<br />
          These partners follow strict privacy standards.
        </p>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">6. Updates to Cookie Policy</h3>
        <p>
          We may update this policy as necessary. Continued use of our site indicates acceptance of updated policies.
        </p>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">7. Contact Us</h3>
        <div className="bg-gray-100 p-6 rounded-lg not-prose">
          <p className="font-semibold">Internet Leads Training (ILT)</p>
          <p>Email: info@internetleadstraining.com</p>
          <p>Phone: +91 95390 70845</p>
        </div>

        <p className="mt-12 text-sm text-gray-600">
          Last Updated: November 19, 2025
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;