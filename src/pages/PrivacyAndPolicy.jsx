import React from 'react';
import { useEffect } from 'react';

const PrivacyAndPolicy = () => {
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
        'SEO Training, google adwords training, ppc training'
      );
    }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 prose prose-lg text-gray-800">
        <p className="mb-6 leading-relaxed">
          This privacy policy sets out how <strong>DOPTIT Pvt. Ltd.</strong> uses and protects any information that you give <strong>DOPTIT Pvt. Ltd.</strong> when you use this website. DOPTIT Pvt. Ltd. is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.
        </p>

        <p className="mb-6">
          DOPTIT Pvt. Ltd. may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. <strong>This policy is effective from 6th September 2018.</strong>
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What We Collect</h2>
        <p className="mb-4">We may collect the following information:</p>
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Name and job title</li>
          <li>Contact information including email address</li>
          <li>Demographic information such as postcode, preferences and interests</li>
          <li>Other information relevant to customer surveys and/or offers</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What We Do With the Information We Gather</h2>
        <p className="mb-4">
          We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
        </p>
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Internal record keeping.</li>
          <li>We may use the information to improve our products and services.</li>
          <li>
            We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.
          </li>
          <li>
            From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail.
          </li>
          <li>We may use the information to customise the website according to your interests.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Security</h2>
        <p className="mb-6">
          We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">How We Use Cookies</h2>
        <p className="mb-4">
          A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual.
        </p>
        <p className="mb-4">
          We use <strong>traffic log cookies</strong> to identify which pages are being used. This helps us analyse data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
        </p>
        <p className="mb-6">
          Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
        </p>
        <p className="mb-6">
          You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Links to Other Websites</h2>
        <p className="mb-6">
          Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Controlling Your Personal Information</h2>
        <p className="mb-4">
          You may choose to restrict the collection or use of your personal information in the following ways:
        </p>
        <ul className="list-disc pl-8 mb-4 space-y-2">
          <li>
            Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes.
          </li>
          <li>
            If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at{' '}
            <a href="mailto:info@kingster.edu.in" className="text-blue-600 underline">
              info@kingster.edu.in
            </a>.
          </li>
        </ul>
        <p className="mb-4">
          We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so.
        </p>
        <p className="mb-4">
          We may use your personal information to send you promotional information about third parties which we think you may find interesting <strong>if you tell us that you wish this to happen</strong>.
        </p>
        <p className="mb-6">
          You may request details of personal information which we hold about you under the Data Protection Act 1998. A small fee will be payable. If you would like a copy of the information held on you, please write to{' '}
          <a href="mailto:info@kingster.edu.in" className="text-blue-600 underline">
            info@kingster.edu.in
          </a>.
        </p>
        <p className="mb-6">
          If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible at the above address. We will promptly correct any information found to be incorrect.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-3">Contacting Us</h2>
          <p className="mb-2">
            If there are any questions regarding this privacy policy, you may contact us using the information below:
          </p>
          <div className="text-blue-800 font-medium space-y-1">
            <p><strong>DOPTIT Pvt Ltd.</strong></p>
            <p>Internet Leads Training,</p>
            <p>36/2686, Azad Road,</p>
            <p>Kaloor, Cochin - 682017,</p>
            <p>Kerala, India</p>
            <p className="mt-2">
              Phone: <a href="tel:+914844038845" className="underline">+91 484 4038845</a>
            </p>
            <p>
              Mobile: <a href="tel:+919539070845" className="underline">+91 9539070845</a>
            </p>
            <p>
              Email: <a href="mailto:info@internetleadstraining.com" className="underline">info@internetleadstraining.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyAndPolicy;