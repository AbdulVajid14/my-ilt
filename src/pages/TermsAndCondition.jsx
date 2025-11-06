import React from 'react';
import { useEffect } from 'react';
const TermsAndCondition = () => {

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
            Terms & Conditions
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 prose prose-lg text-gray-800">
        <p className="mb-6">
          The Website Owner, including subsidiaries and affiliates ("Website" or "Website Owner" or "we" or "us" or "our") provides the information contained on the website or any of the pages comprising the website ("website") to visitors ("visitors") (cumulatively referred to as "you" or "your" hereinafter) subject to the terms and conditions set out in these website terms and conditions, the privacy policy and any other relevant terms and conditions, policies and notices which may be applicable to a specific section or module of the website.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Terms & Conditions</h2>
        <p className="mb-6">
          Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern <strong>DOPTIT Pvt. Ltd</strong> relationship with you in relation to this website.
        </p>

        <p className="mb-6">
          The term <strong>'DOPTIT Pvt. Ltd'</strong> or <strong>'us'</strong> or <strong>'we'</strong> refers to the owner of the website whose registered office is <em>Internet Leads Training, 36/2686, Azad Road, Kaloor, Cochin - 682017, Kerala, India</em>. Our company registration number is <strong>U72900KL2016PTC047303</strong> at Registrar of Companies, Kerala and Lakshadweep. The term <strong>'you'</strong> refers to the user or viewer of our website.
        </p>

        <p className="mb-6">
          The use of this website is subject to the following terms of use:
        </p>

        <ul className="list-disc pl-8 mb-6 space-y-3">
          <li>
            The content of the pages of this website is for your general information and use only. It is subject to change without notice.
          </li>
          <li>
            Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
          </li>
          <li>
            Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
          </li>
          <li>
            This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
          </li>
          <li>
            All trade marks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.
          </li>
          <li>
            Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.
          </li>
          <li>
            From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
          </li>
          <li>
            You may not create a link to this website from another website or document without <strong>DOPTIT Pvt. Ltd</strong> prior written consent.
          </li>
          <li>
            Your use of this website and any dispute arising out of such use of the website is subject to the laws of India or other regulatory authority.
          </li>
        </ul>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
          <p className="font-medium text-amber-900">
            "We as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time"
          </p>
        </div>

      </div>
    </div>
  );
};

export default TermsAndCondition;