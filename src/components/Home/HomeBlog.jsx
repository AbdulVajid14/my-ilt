// import React from 'react'
// import { Link } from 'react-router-dom'
// function HomeBlog() {
//   return (
//     <section className="bg-white py-12 sm:py-16 px-4">
//         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
//           <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
//             <h3 className="text-green-600 font-semibold text-base sm:text-lg mb-2">
//               Latest Insights & Tips
//             </h3>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
//               Smart Tips for Smarter Careers
//             </h2>
//             <p className="text-sm sm:text-base text-gray-600 mb-6">
//               Explore quick tips, guides, and stories to help you learn, grow,
//               and build a successful career. From digital marketing strategies
//               to tech trends and practical insights, our blogs keep you informed
//               and ready to take the next step in your professional journey.
//             </p>
//             <Link to="/blog">
//             <button className="bg-green-600 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
//               View All Blogs
//             </button>
//             </Link>
//           </div>
//           <div className="w-full lg:w-2/3 relative">
//             <div className="flex justify-end space-x-3 mb-6">
//               <button className="p-2 sm:p-3 border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100 transition duration-300 flex items-center justify-center">
//                 <span className="text-lg sm:text-xl leading-none">&lt;</span>
//               </button>
//               <button className="p-2 sm:p-3 border border-green-600 rounded-full text-green-600 bg-white shadow-md hover:bg-gray-50 transition duration-300 flex items-center justify-center">
//                 <span className="text-lg sm:text-xl leading-none">&gt;</span>
//               </button>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[
//                 {
//                   title: "Top 5 Digital Marketing Trends in 2025",
//                   image:
//                     "/images/WhatsApp Image 2025-09-20 at 10.54.01_a96567e7.jpg",
//                   desc: "Stay ahead with these strategies shaping the future of digital marketing.",
//                   date: "12 Aug 2025",
//                 },
//                 {
//                   title: "Beginner's Guide to Python Programming",
//                   image:
//                     "/images/WhatsApp Image 2025-09-20 at 10.54.01_ae9542ea.jpg",
//                   desc: "Simple tips to kickstart your journey into programming with Python.",
//                   date: "22 Aug 2025",
//                 },
//                 {
//                   title: "How Data Analytics Is Transforming Businesses",
//                   image:
//                     "/images/WhatsApp Image 2025-09-20 at 10.54.00_ec9b990d.jpg",
//                   desc: "Explore how companies are using data to make smarter decisions.",
//                   date: "24 Aug 2025",
//                 },
//               ].map((blog, idx) => (
//                 <div
//                   key={idx}
//                   className="rounded-lg overflow-hidden shadow-lg bg-white flex flex-col"
//                 >
//                   <div className="h-40 sm:h-48">
//                     <img
//                       src={blog.image}
//                       alt={blog.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="p-4 bg-black text-white flex flex-col flex-grow">
//                     <h4 className="font-bold text-base sm:text-lg mb-2 leading-tight">
//                       {blog.title}
//                     </h4>
//                     <p className="text-xs sm:text-sm mb-3 text-gray-300 flex-grow">
//                       {blog.desc}
//                     </p>
//                     <div className="flex justify-between items-center text-xs pt-2 border-t border-gray-700">
//                       <button className="bg-white text-black border border-green-600 font-semibold py-1.5 px-3 rounded-md hover:bg-black hover:text-green-500 transition duration-300">
//                         Read More
//                       </button>
//                       <span className="text-xs text-gray-400">{blog.date}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>  )
// }

// export default HomeBlog
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeBlog() {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/News`)
      .then((response) => {
        if (response.data.success) {
          setBlogs(response.data.data.slice(0, 3));
        }
      })
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  const slugify = (text) =>
    text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');

  const getShortDesc = (desc) => {
    return desc.split('\r\n\r\n')[0].slice(0, 100) + '...';
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <section className="bg-white py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h3 className="text-green-600 font-semibold text-base sm:text-lg mb-2">
            Latest Insights & Tips
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Smart Tips for Smarter Careers
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Explore quick tips, guides, and stories to help you learn, grow, and build a successful career. From digital marketing strategies to tech trends and practical insights, our blogs keep you informed and ready to take the next step in your professional journey.
          </p>
          <Link to="/blog">
            <button className="bg-green-600 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
              View All Blogs
            </button>
          </Link>
        </div>
        <div className="w-full lg:w-2/3 relative">
          <div className="flex justify-end space-x-3 mb-6">
            <button className="p-2 sm:p-3 border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100 transition duration-300 flex items-center justify-center">
              <span className="text-lg sm:text-xl leading-none">&lt;</span>
            </button>
            <button className="p-2 sm:p-3 border border-green-600 rounded-full text-green-600 bg-white shadow-md hover:bg-gray-50 transition duration-300 flex items-center justify-center">
              <span className="text-lg sm:text-xl leading-none">&gt;</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div key={blog.id} className="rounded-lg overflow-hidden shadow-lg bg-white flex flex-col">
                <div className="h-40 sm:h-48">
                  <img
                    src={`${import.meta.env.VITE_BASE_URL_IMAGE}${blog.image}`}
                    alt={blog.tittle}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-black text-white flex flex-col flex-grow">
                  <h4 className="font-bold text-base sm:text-lg mb-2 leading-tight">
                    {blog.tittle}
                  </h4>
                  <p className="text-xs sm:text-sm mb-3 text-gray-300 flex-grow">
                    {getShortDesc(blog.description)}
                  </p>
                  <div className="flex justify-between items-center text-xs pt-2 border-t border-gray-700">
                    <Link to={`/blog/${slugify(blog.tittle)}`}>
                      <button className="bg-white text-black border border-green-600 font-semibold py-1.5 px-3 rounded-md hover:bg-black hover:text-green-500 transition duration-300">
                        Read More
                      </button>
                    </Link>
                    <span className="text-xs text-gray-400">{formatDate(blog.date)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBlog;