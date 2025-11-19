import React from 'react';
import { useEffect } from 'react';

const RefundPolicy = () => {
  useEffect(() => {
    document.title = "Refund & Cancellation Policy - Internet Leads Training Institute";

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
      "View the Refund & Cancellation Policy of Internet Leads Training Institute (ILT), Kerala's leading digital marketing training institute."
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
      "Refund Policy, Cancellation Policy, Internet Leads Training, Digital Marketing Course Kochi, ILT Refund"
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Refund & Cancellation Policy
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 prose prose-lg text-gray-800">

        <h2 className="text-3xl font-bold mt-12 mb-6">Refund & Cancellation Policy – Internet Leads Training (ILT)</h2>
        <p className="text-lg opacity-90"> November 19, 2025</p><br />

        <p className="mb-8">
          This Refund & Cancellation Policy outlines the conditions under which ILT accepts cancellations and issues refunds for course enrollments.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">1. General Policy</h3>
        <p>
          All payments made to ILT are final. However, refunds may be provided under specific, eligible circumstances mentioned below.
        </p>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">2. Eligibility for Refund</h3>
        <p>Refunds are applicable only if:</p>

        <h4 className="text-xl font-semibold mt-6 mb-3">2.1 Before Course Access</h4>
        <ul className="list-disc pl-8 mb-6">
          <li>If a student requests cancellation within 48 hours of payment and has not accessed or started the course.</li>
        </ul>

        <h4 className="text-xl font-semibold mt-6 mb-3">2.2 Duplicate Payment</h4>
        <ul className="list-disc pl-8 mb-6">
          <li>If a student is charged twice due to a technical error, the excess amount will be refunded.</li>
        </ul>

<hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">3. Non-Refundable Situations</h3>
        <p>Refunds are not applicable under the following circumstances:</p>
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>If the student has accessed course materials</li>
          <li>If the student has attended any live session</li>
          <li>If the student is dissatisfied but has fully used course content</li>
          <li>If the student fails to attend classes or complete assignments</li>
          <li>If the student enrolled by mistake after exploring available details</li>
        </ul>

<hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">4. Course Transfer / Batch Transfer</h3>
        <p>
          Students may request a batch transfer only if seats are available.<br />
          Transfer fees may apply depending on the course.
        </p>

<hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">5. Payment Gateway Fees</h3>
        <p>
          Any payment processing or gateway charges are non-refundable.
        </p>

<hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">6. Refund Processing Time</h3>
        <p>
          Approved refunds will be processed within 7–14 business days using the original payment method.
        </p>

<hr className="my-6" />

        <h3 className="text-2xl font-semibold mt-10 mb-4">7. Contact for Refund Requests</h3>
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

export default RefundPolicy;