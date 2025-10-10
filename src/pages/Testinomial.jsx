
import React from "react";
import { useParams } from "react-router-dom";
import QueriesForm from "../components/CommonComponents/QueriesForm";
import Questions from "../components/Home/Questions";

const testimonialsData = {
  rayon: {
    name: "Rayon",
    title: "Digital Marketing Executive at Wipro",
    banner: "/images/WhatsApp Image 2025-10-07 at 16.33.40_5fe85d1d.jpg",
    profile: "/images/WhatsApp Image 2025-09-20 at 10.53.48_197251bf.jpg",
    companyLogo: "/images/WhatsApp Image 2025-10-07 at 16.33.40_f9026023.jpg",
    testimonial: {
      description:
        " ILT gave me the confidence and practical skills to succeed in real-world projects. Today, I am working as a Digital Marketing Executive at Wipro, applying what I learned every day.",
      before:
        "Before joining ILT, I had limited practical exposure to digital marketing. Though I understood some basics, I lacked the industry-ready skills and confidence to handle real projects.",
      experience:
        "The ILT training was highly interactive and practical. From SEO and social media to paid campaigns and analytics, every module focused on hands-on projects. The trainers were industry professionals who made complex topics simple and easy to implement.",
      after:
        "Completing the course completely changed my career path. I was able to secure a role at Wipro as a Digital Marketing Executive, where I now manage campaigns, optimize strategies, and analyze performance data - all skills I gained at ILT.",
      advice:
        "Take the course seriously, complete every project, and engage with mentors. The more you practice, the more confident you’ll become.",
    },
  },
  james: {
    name: "James",
    title: "Junior Data Analyst at Netflix",
    banner: "/images/WhatsApp Image 2025-10-07 at 16.33.40_5fe85d1d.jpg",
    profile: "/images/WhatsApp Image 2025-09-20 at 10.53.48_02e1c4ba.jpg",
    companyLogo: "/images/netflix-logo.jpg",
    testimonial: {
      before:
        "I had basic knowledge of analytics but lacked real-world skills...",
      experience:
        "ILT’s real-world data projects helped me understand analytics tools deeply...",
      after:
        "Now I’m working as a Junior Data Analyst at Netflix, using those same techniques daily.",
      advice:
        "Focus on building projects — they make your resume and skills stand out.",
    },
  },
  // Add sophia, geon etc here
};

const Testimonial = () => {
  const { slug } = useParams();
  const graduate = testimonialsData[slug.toLowerCase()];

  if (!graduate) {
    return <div className="text-center py-20 text-2xl">Graduate Not Found</div>;
  }

  return (
    <div className="mx-auto">
      {/* Header */}
      <div
        className="w-full h-[300px] sm:h-[400px] flex items-center justify-center text-white text-3xl sm:text-4xl font-bold text-center"
        style={{
          backgroundImage:
            'url("/images/WhatsApp Image 2025-10-07 at 16.33.40_5fe85d1d.jpg")', // ✅ Correct quotes
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {graduate.name} works as a <br /> {graduate.title}
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        {/* Example layout reused from your original Testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_auto] gap-12">
          {/* Left: Profile */}
          <div className="text-center lg:text-left">
            <img
              src={graduate.profile}
              alt={graduate.name}
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h2 className="font-bold text-xl mt-4">{graduate.name}</h2>
            <p className="text-sm text-gray-600">Organizations he works with</p>
            <img
              src={graduate.companyLogo}
              alt="Company logo"
              className="w-32 mt-3 mx-auto"
            />
          </div>

          {/* Middle: Testimonial */}
          <div className="space-y-8 text-gray-700">
            <div>
              {graduate.testimonial.description && (
                <p className="italic text-gray-700">
                  <span className="text-green-600 font-semibold">
                    “{graduate.testimonial.description}”
                  </span>
                </p>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg">Before Joining ILT</h3>
              <p>{graduate.testimonial.before}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">ILT Experience</h3>
              <p>{graduate.testimonial.experience}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                After Completing the Cource
              </h3>
              <p>{graduate.testimonial.after}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Advice to Future Students
              </h3>
              <p className="italic">“{graduate.testimonial.advice}”</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="space-y-8">
            <QueriesForm />
            <div className="rounded-lg p-6 shadow-md flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Micheal", img: "women/65" },
                  { name: "John", img: "men/52" },
                  { name: "Joseph", img: "men/45" },
                  { name: "Leya", img: "women/44" },
                ].map((student) => (
                  <div
                    key={student.name}
                    className="flex flex-col items-center"
                  >
                    <img
                      className="w-16 h-16 rounded-full object-cover"
                      src=""
                      alt=""
                    />
                    <p className="mt-2 font-medium">{student.name}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <p className="text-4xl font-extrabold">100+</p>
                <p className="text-green-600 font-semibold">
                  Students Trained, Many Successfully Hired!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom testimonials summary */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold">
            Our Students Are{" "}
            <span className="text-green-600">Getting Hired!</span>
          </h2>
          <p className="mt-4 text-gray-700">
            Many of our graduates have moved into exciting{" "}
            <strong>careers with top companies.</strong> From digital marketing
            to data analytics, ILT equips students with the skills and
            confidence to thrive in the industry.
          </p>

          {/* Testimonials grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Geon */}
            <div className="p-6 border rounded-lg shadow-sm text-left">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src="https://randomuser.me/api/portraits/men/34.jpg"
                  alt="Geon"
                />
                <div>
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    Geon{" "}
                    <span className="text-yellow-400" aria-label="5 stars">
                      ★★★★★
                    </span>
                  </h3>
                  <p className="text-gray-600">
                    Digital Marketing Executive at Tata
                  </p>
                </div>
              </div>
              <p className="font-semibold">
                “ILT’s hands-on training gave me the confidence to manage real
                campaigns. The mentors guided me every step, helping me
                transition smoothly into my dream role.”
              </p>
            </div>

            {/* James */}
            <div className="p-6 border rounded-lg shadow-sm text-left">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src="https://randomuser.me/api/portraits/men/40.jpg"
                  alt="James"
                />
                <div>
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    James{" "}
                    <span className="text-yellow-400" aria-label="5 stars">
                      ★★★★★
                    </span>
                  </h3>
                  <p className="text-gray-600">
                    Junior Data Analyst at Netflix
                  </p>
                </div>
              </div>
              <p className="font-semibold">
                “ILT’s data-driven approach and real-world assignments helped me
                build confidence in analytics. I now work on impactful data
                projects in a global tech company.”
              </p>
            </div>

            {/* Sophia */}
            <div className="p-6 border rounded-lg shadow-sm text-left md:col-span-2">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src="https://randomuser.me/api/portraits/women/30.jpg"
                  alt="Sophia"
                />
                <div>
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    Sophia{" "}
                    <span className="text-yellow-400" aria-label="5 stars">
                      ★★★★★
                    </span>
                  </h3>
                  <p className="text-gray-600">SEO Specialist at Flipkart</p>
                </div>
              </div>
              <p className="font-semibold">
                “From keyword research to analytics, the SEO modules at ILT were
                practical and industry-focused. I landed this role because I
                could apply everything I learned.”
              </p>
            </div>
          </div>
        </div>

        <Questions />
      </div>
    </div>
  );
};

export default Testimonial;
