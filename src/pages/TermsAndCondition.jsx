import React from 'react';
import { useEffect } from 'react';

const TermsAndCondition = () => {
  useEffect(() => {
    document.title = "Terms & Conditions | Internet Leads Training (ILT) Digital Marketing Institute";

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
      "Review the Terms and Conditions of Internet Leads Training (ILT). Learn about our policies, course guidelines, user responsibilities, and institute regulations."
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
      "Terms & Conditions | Internet Leads Training (ILT) Digital Marketing Institute"
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms & Conditions
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 prose prose-lg text-gray-800">

        <h2 className="text-3xl font-bold mt-12 mb-6">Terms & Conditions – Internet Leads Training (ILT)</h2>
        <p className="text-lg opacity-90">November 19, 2025</p><br />

        <p className="mb-6">
          Welcome to <strong>Internet Leads Training</strong> (“ILT”, “we”, “our”, or “us”). By accessing our website, enrolling in our courses, or using any of our services, you agree to the Terms & Conditions outlined below. Please read these terms carefully before using our platform.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">1. Acceptance of Terms</h3>
        <p>
          By accessing or using ILT’s website or services, you confirm that you have read, understood, and accepted these Terms & Conditions. If you do not agree with these terms, kindly stop using the platform.
        </p>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">2. Services Provided</h3>
        <p>
          ILT provides training programs, digital courses, webinars, and educational content in digital marketing and related domains.<br />
          We may update, improve, or stop providing certain services at any time, and we are not required to give prior notice before doing so.
        </p>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">3. User Responsibilities</h3>
        <p>Users must:</p>
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Provide accurate and complete registration information</li>
          <li>Maintain the confidentiality of their login credentials</li>
          <li>Use ILT services for lawful and educational purposes only</li>
          <li>Avoid copying, distributing, or sharing course content without permission</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-10 mb-4">4. Intellectual Property</h3>
        <p>
          All content, including videos, text, graphics, course modules, logos, trademarks, and materials, are the intellectual property of ILT.<br />
          Students may not reproduce, resell, or distribute any content without formal written consent.
        </p>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">5. Payments & Billing</h3>
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Course fees should be settled either in full or according to the mutually agreed installment schedule.</li>
          <li>All payments made are subject to ILT’s Refund & Cancellation Policy.</li>
          <li>ILT uses secure third-party payment gateways; we do not store sensitive banking details.</li>
        </ul>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">6. Course Access</h3>
        <p>Students receive access to course materials as per the course plan chosen.</p>
        <p>ILT reserves the right to revoke access if:</p>
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Payment is incomplete</li>
          <li>User violates policies</li>
          <li>Misuse or content piracy is detected</li>
        </ul>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">7. Certifications</h3>
        <p>Certificates will be issued only upon:</p>
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Successful completion of course requirements</li>
          <li>Meeting ILT’s assessment criteria</li>
        </ul>
        <p>ILT reserves the right to withhold certificates in case of non-compliance.</p>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">8. Prohibited Activities</h3>
        <p>Users must not:</p>
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Engage in hacking, unauthorized access, or attempts to damage ILT’s platform</li>
          <li>Share login credentials with others</li>
          <li>Record or download course content illegally</li>
          <li>Post harmful or inappropriate content</li>
        </ul>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">9. Limitation of Liability</h3>
        <p>ILT shall not be responsible for:</p>
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Loss of data</li>
          <li>Service interruption</li>
          <li>Student performance or results</li>
          <li>External factors beyond our control</li>
        </ul>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">10. Modifications to Terms</h3>
        <p>
          ILT may update these Terms periodically. Continued use of the platform indicates acceptance of updated terms.
        </p>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">11. Contact Us</h3>
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

export default TermsAndCondition;