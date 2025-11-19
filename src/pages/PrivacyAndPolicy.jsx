import React from "react";
import { useEffect } from "react";

const PrivacyAndPolicy = () => {
  useEffect(() => {
    document.title = "Privacy & Policy - Internet Leads Training Institute";

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
      "Read the Privacy Policy of Internet Leads Training Institute (ILT), Kerala's leading digital marketing training institute."
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
      "Privacy Policy, Internet Leads Training, Digital Marketing Course Kochi, SEO Training Kerala"
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy & Policy
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 prose prose-lg text-gray-800">
        <h2 className="text-3xl font-bold mt-12 mb-6">
          Privacy Policy – Internet Leads Training (ILT)
        </h2>
        <p className="text-lg opacity-90">November 19, 2025</p>
        <br />

        <p className="mb-6">
          Welcome to <strong>Internet Leads Training Institute</strong> (“ILT”,
          “we”, “our”, or “us”). We value your privacy and take every measure to
          keep your personal information secure. This Privacy Policy outlines
          how we gather, handle, store, and safeguard the details you share when
          visiting our website, joining our courses, or using any of our digital
          platforms.
        </p>
        <p className="mb-8 font-medium">
          By accessing or using our website or services, you agree to the
          practices described in this Privacy Policy.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">
          1. Information We Collect
        </h3>
        <p>
          During your interactions with ILT, various categories of data may be
          collected to help us serve you better.
        </p>

        <h4 className="text-xl font-semibold mt-6 mb-3">
          1.1 Personal Information
        </h4>
        <p>
          When you register, enroll in a course, fill out a form, or contact us,
          we may collect:
        </p>
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Full name</li>
          <li>Email address</li>
          <li>Mobile number</li>
          <li>Address (if required for invoicing or certification)</li>
          <li>
            Any information voluntarily shared with us during communication
          </li>
        </ul>

        <h4 className="text-xl font-semibold mt-6 mb-3">
          1.2 Payment Information
        </h4>
        <p>If you purchase a course or subscription, we may collect:</p>
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Billing details</li>
          <li>Payment transaction ID</li>
          <li>Other details processed through our secure payment partners</li>
        </ul>
        <p className="font-medium text-amber-800 bg-amber-50 p-3 rounded">
          Note: ILT does not store credit/debit card numbers.
        </p>

        <h4 className="text-xl font-semibold mt-6 mb-3">
          1.3 Technical & Usage Data
        </h4>
        <p>When you browse our website, our system may collect:</p>
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>IP address</li>
          <li>Device and browser type</li>
          <li>Pages viewed</li>
          <li>Time spent on our website</li>
          <li>Referring websites</li>
          <li>App/website usage behavior</li>
        </ul>

        <h4 className="text-xl font-semibold mt-6 mb-3">
          1.4 Cookies & Tracking Data
        </h4>
        <p>We use cookies and similar technologies to:</p>
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Improve website performance</li>
          <li>Remember user preferences</li>
          <li>Provide personalized content</li>
        </ul>
        <p>You may disable cookies through your browser settings.</p>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">
          2. How We Collect Your Information
        </h3>
        <p>We collect data through the following methods:</p>

        <h4 className="font-semibold mt-4">2.1 Direct Interactions</h4>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Course registration</li>
          <li>Contact forms</li>
          <li>Email correspondence</li>
          <li>WhatsApp or phone communication</li>
        </ul>

        <h4 className="font-semibold mt-4">2.2 Automated Technologies</h4>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Analytics tools (e.g., Google Analytics)</li>
          <li>Cookies</li>
          <li>Server logs</li>
        </ul>

        <h4 className="font-semibold mt-4">2.3 Third-Party Integrations</h4>
        <ul className="list-disc pl-8 mb-6 space-y-1">
          <li>Payment gateways</li>
          <li>Email service providers</li>
          <li>Learning management systems (LMS)</li>
        </ul>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">
          3. How We Use Your Information
        </h3>
        <p>ILT uses collected data for legitimate purposes, including:</p>

        <h4 className="font-semibold mt-4">3.1 To Provide Services</h4>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Processing registrations</li>
          <li>Delivering course content</li>
          <li>Managing your student profile or account</li>
        </ul>

        <h4 className="font-semibold mt-4">3.2 Communication</h4>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Sending updates, reminders, or course notifications</li>
          <li>Providing customer support</li>
          <li>
            Sending marketing or promotional messages (with opt-out option)
          </li>
        </ul>

        <h4 className="font-semibold mt-4">3.3 Service Improvement</h4>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Enhancing user experience</li>
          <li>Improving website performance</li>
          <li>Analyzing user behavior for internal insights</li>
        </ul>

        <h4 className="font-semibold mt-4">3.4 Security & Compliance</h4>
        <ul className="list-disc pl-8 mb-6 space-y-1">
          <li>Monitoring fraudulent activities</li>
          <li>Ensuring system and data security</li>
          <li>Fulfilling legal obligations</li>
        </ul>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">
          4. How We Protect Your Information
        </h3>
        <p>ILT uses robust security practices to safeguard your data:</p>
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>SSL encryption for data transmission</li>
          <li>Secure and accredited payment gateways</li>
          <li>Restricted access to personal data</li>
          <li>Routine security checks and monitoring</li>
          <li>Controlled access within ILT only to authorized personnel</li>
        </ul>
        <p className="italic mt-4">
          While we implement strong protection measures, no system is 100%
          secure. Users share information at their own discretion.
        </p>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">
          5. Information Sharing
        </h3>
        <p>
          ILT does not engage in the selling, leasing, or commercial transfer of
          your personal data. However, we may share data under the following
          conditions:
        </p>
        <ul className="list-disc pl-8 mb-6 space-y-3">
          <li>
            <strong>5.1 Trusted Service Providers</strong>
            <br />
            We may share information with: Payment processors, Email marketing
            platforms, LMS providers
            <br />
            These partners follow strict confidentiality agreements.
          </li>
          <li>
            <strong>5.2 Legal Requirements</strong>
            <br />
            We may disclose information if required to: Comply with a legal
            process, Respond to government requests, Protect ILT’s rights,
            safety, or property
          </li>
          <li>
            <strong>5.3 Business Restructuring</strong>
            <br />
            If ILT undergoes a merger, acquisition, or restructuring, user data
            may be transferred in compliance with applicable privacy laws.
          </li>
        </ul>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">
          6. Your Rights & Choices
        </h3>
        <p>You have full control over your personal data. You may:</p>
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>
            You have the right to request a copy of the data we maintain in your
            name.
          </li>
          <li>Request correction of inaccurate information</li>
          <li>
            You may ask us to remove your personal information from our records,
            provided this is permitted by applicable laws.
          </li>
          <li>Opt out of marketing communications anytime</li>
          <li>Disable cookies on your browser</li>
        </ul>
        <p className="mt-4">
          To make use of these rights, please reach out to us through the
          contact information provided below.
        </p>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">7. Cookies Policy</h3>
        <p>
          Cookies help us understand user behavior and enhance our site
          experience.
        </p>
        <p>You can:</p>
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Accept all cookies</li>
          <li>Block cookies</li>
          <li>Delete cookies from your browser</li>
        </ul>
        <p className="font-medium">
          Note: Disabling cookies may limit website functionality.
        </p>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">
          8. Updates to This Privacy Policy
        </h3>
        <p>
          We may update this Privacy Policy to reflect changes in technology,
          regulations, or our practices. Revisions to this policy will be posted
          on this webpage and will indicate the date they take effect.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">9. Contact Us</h3>
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

export default PrivacyAndPolicy;
