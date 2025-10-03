import React from 'react'

function OurTrainers() {
    const trainers = [
    {
      name: "David Mathews",
      title: "Senior Digital Marketing Strategist",
      students: "20K+ Students",
      rating: "4.8★ Rating",
      skills: ["SEO", "Social Media Marketing"],
      imageUrl: "/images/WhatsApp Image 2025-10-01 at 14.31.43_91db6ff6.jpg",
    },
    {
      name: "Anita Varghese",
      title: "Digital Advertising Specialist",
      students: "18K+ Students",
      rating: "4.9★ Rating",
      skills: ["PPC", "Content Marketing"],
      imageUrl: "/images/WhatsApp Image 2025-10-01 at 14.31.44_db38e36e.jpg",
    },
    {
      name: "Rahul Menon",
      title: "Lead Data Analyst",
      students: "12K+ Students",
      rating: "4.7★ Rating",
      skills: ["Data Visualization", "Python Analytics"],
      imageUrl: "/images/WhatsApp Image 2025-10-01 at 14.31.44_7292d380.jpg",
      darkBg: true,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <p className="text-green-600 font-semibold text-center text-base sm:text-lg">
          Our Trainers
        </p>
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
          Meet Our Expert Trainers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {trainers.map((trainer, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden shadow-lg bg-gray-900 text-white"
            >
              <img
                src={trainer.imageUrl}
                alt={trainer.name}
                className="w-full h-80 sm:h-120 object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                {trainer.students}
              </div>
              <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                {trainer.rating}
              </div>
              <div
                className={`absolute bottom-0 w-full px-4 sm:px-6 py-4 sm:py-6 backdrop-blur-sm ${
                  trainer.darkBg ? "bg-black/60" : "bg-gray-800/60"
                }`}
              >
                <div className="flex gap-2 mb-2 flex-wrap">
                  {trainer.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold px-2 sm:px-3 py-1 rounded-full border border-green-400 text-green-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg sm:text-xl font-bold">{trainer.name}</h3>
                <p className="text-xs sm:text-sm mt-1">{trainer.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
)
}

export default OurTrainers