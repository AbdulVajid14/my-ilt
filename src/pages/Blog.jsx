
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import QueriesForm from '../components/CommonComponents/QueriesForm';

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

const getShortDesc = (desc) => {
  return desc.split('\r\n\r\n')[0].slice(0, 100) + '...';
};

const slugify = (text) =>
  text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');

const Blog = () => {
  const [newsData, setNewsData] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/News`)
      .then((response) => {
        if (response.data.success) {
          const data = response.data.data;
          setNewsData(data);
          setRecentPosts(
            data.slice(0, 3).map((p) => ({
              id: p.id,
              image: `${import.meta.env.VITE_BASE_URL_IMAGE}${p.image}`,
              title: p.tittle,
              description: getShortDesc(p.description),
              date: formatDate(p.date),
            }))
          );
          setPopularPosts(
            data.map((p) => ({
              id: p.id,
              image: `${import.meta.env.VITE_BASE_URL_IMAGE}${p.image}`,
              title: p.tittle,
              description: getShortDesc(p.description),
              date: formatDate(p.date),
            }))
          );
          setTags([]);
        }
      })
      .catch((error) => console.error('Error fetching news:', error));
  }, []);

  return (
    <div className="">
      <div className="relative w-full h-60 sm:h-72 md:h-96 overflow-hidden mb-10">
        <img
          src="/images/WhatsApp Image 2025-10-03 at 16.37.02_e97c9c84.jpg"
          alt="Blogs"
          className="w-full h-full object-cover"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-2xl sm:text-3xl md:text-5xl font-extrabold bg-opacity-40 text-center px-4">
          All Blogs
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:space-x-12">
          <article className="flex-1 space-y-8 text-gray-700">
            <p className="text-base sm:text-lg md:text-xl">
              Explore our collection of blogs on various topics to help you in your career.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {popularPosts.map(({ id, image, title, description, date }) => (
                <Link key={id} to={`/blog/${slugify(title)}`}>
                  <div className="bg-white rounded-lg shadow-md w-full max-w-sm flex flex-col overflow-hidden">
                    <img
                      src={
                        image?.startsWith('http')
                          ? image
                          : `${import.meta.env.VITE_BASE_URL_IMAGE}${image}`
                      }
                      alt={title}
                      className="w-full h-48 object-cover rounded-t-lg"
                      loading="lazy"
                    />
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg mb-2">{title}</h3>
                      <p className="text-gray-700 flex-grow">{description}</p>
                      <div className="flex justify-between items-center mt-4">
                        <button
                          type="button"
                          className="border border-green-600 text-green-600 px-4 py-1 rounded hover:bg-green-50 transition"
                        >
                          Read More
                        </button>
                        <span className="text-gray-500 text-sm">{date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </article>
          <aside className="w-full md:w-80 mt-12 md:mt-0 space-y-10">
            <QueriesForm />
            <div className="bg-white p-6">
        
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blog;