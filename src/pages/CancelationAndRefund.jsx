import React, { useEffect } from "react";

const CancelationAndRefund = () => {
  useEffect(() => {
    document.title = "Kerala's Leading Digital Marketing Training Institute";

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
      "More than 15 years of experience as a digital marketing consultant and trainer, Jitto is a proven authority in terms of digital marketing."
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
      "SEO Training, google adwords training, ppc training"
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cancellation & Refund Policy
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 prose prose-lg text-gray-800">
        <p className="mb-6 leading-relaxed">
          Merchant business return and cancellation policy must be made
          available to customers on website and they have to agree to its terms
          during the order process. Customers have to click on an{" "}
          <strong>“Accept”</strong> or <strong>“Agree”</strong> to return and
          cancellation policy before submitting their payment information. Once
          the order is submitted, the policy is shared to customers along with
          the confirmation email.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Cancellation Policy
        </h2>
        <p className="mb-4">
          DOPTIT Pvt. Ltd. believes in helping its customers as far as possible
          and has therefore a liberal cancellation policy. Under this policy:
        </p>

        <ul className="list-disc pl-8 space-y-2 mb-6">
          <li>
            Cancellations will be considered only if the request is made within
            72 hours of placing an order. However, cancellation request will not
            be entertained if the orders have already been processed or shipped.
          </li>
          <li>
            There is no cancellation of orders placed under the Same Day
            Delivery category.
          </li>
          <li>
            Orders placed on special occasions or offers (Pongal, Diwali,
            Valentine’s Day etc.) cannot be cancelled.
          </li>
          <li>
            DOPTIT Pvt. Ltd. does not accept cancellation requests for
            perishable items. Refund/replacement is possible only if the
            customer proves the delivered product is defective.
          </li>
          <li>
            For consumer durable items or electronics, complaints must be
            reported within 21 days of receipt of the product.
          </li>
          <li>
            If the received product is not as shown or expected, it must be
            reported within 24 hours of receipt for evaluation.
          </li>
          <li>
            For items with manufacturer warranty, issues should be directed to
            the respective manufacturer.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Refund Policy</h2>
        <p className="mb-4">
          When you buy our products/services, your purchase is covered by our
          30-day money- back guarantee. If you are, for any reason, not entirely
          happy with your purchase, we will cheerfully issue a full refund. We
          develop and sell software that we use ourselves every day and have
          thousands of satisfied customers worldwide, and our support is second
          to none. That is why we can afford to back our products with this
          special guarantee. To request a refund, simply contact us with your
          purchase details within ninety (90) days of your purchase. Please
          include your order number (sent to you via email after ordering) and
          optionally tell us why you're requesting a refund - we take customer
          feedback very seriously and use it to constantly improve our products
          and quality of service. Refunds are not being provided for services
          delivered in full such as installation service and provided knowledge
          base hosting service. Refunds are being processed within 21 days
          period.
        </p>
      </div>
    </div>
  );
};

export default CancelationAndRefund;
