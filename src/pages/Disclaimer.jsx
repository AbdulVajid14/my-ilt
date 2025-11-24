import React from 'react';
import { useEffect } from 'react';

const Disclaimer = () => {
  useEffect(() => {
    document.title = "Website Disclaimer | Internet Leads Training (ILT)";

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
      "Internet Leads Training (ILT) Website Disclaimer outlines content accuracy, responsibilities, and limitations of liability for users accessing our official site."
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
      "Website Disclaimer | Internet Leads Training (ILT)"
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Website Disclaimer
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 prose prose-lg text-gray-800">

        <h2 className="text-3xl font-bold mt-12 mb-6">Website Disclaimer – Internet Leads Training (ILT)</h2>
        <p className="text-lg opacity-90">November 19, 2025</p><br />

        <p className="mb-8">
          This disclaimer governs your use of ILT’s website and digital services.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">1. Educational Purpose</h3>
        <p>
          All content provided by ILT—including videos, articles, resources, and tutorials—is intended for educational and informational purposes only.<br />
          ILT does not guarantee career outcomes, job placements, or business success.
        </p>

<hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">2. Accuracy of Information</h3>
        <p>We make reasonable efforts to ensure content accuracy; however:</p>
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Information may occasionally be incomplete or outdated</li>
          <li>ILT does not guarantee the absolute accuracy of materials</li>
        </ul>
        <p>Users are advised to verify information independently if necessary.</p>

<hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">3. External Links</h3>
        <p>Our website may contain links to third-party websites.<br />
          ILT is not responsible for:</p>
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Content on external websites</li>
          <li>Privacy practices</li>
          <li>Advertisements or offers by third-party platforms</li>
        </ul>

<hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">4. Personal Decisions</h3>
        <p>
          Any actions taken based on ILT’s training or advice are done at the user’s own discretion.<br />
          ILT is not liable for:
        </p>
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Business losses</li>
          <li>Personal decisions</li>
          <li>Misinterpretation of content</li>
        </ul>

<hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">5. Technical Issues</h3>
        <p>ILT is not responsible for:</p>
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Server outages</li>
          <li>Connectivity issues</li>
          <li>Hacking attempts or malware affecting your system</li>
        </ul>

<hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">6. Limitation of Liability</h3>
        <p>
          To the fullest extent permitted by law, ILT shall not be liable for any:
        </p>
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Indirect, incidental, or consequential damages</li>
          <li>Loss of data or revenue</li>
          <li>Errors caused by user misuse</li>
        </ul>


        <p className="mt-12 text-sm text-gray-600">
          Last Updated: November 19, 2025
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;