'use client';
import React, { useState } from 'react';  // Importing useState
import Navbar from '../components/Navbar_/Navbar';
import Footer from '../components/Footer/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="h-full bg-gradient-to-br from-indigo-200 to-white min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Get in Touch</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="relative h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: '/assets/radiance-the-prime.jpg' }}>
            <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md space-y-4 m-6">
              <div className="flex items-center space-x-3">
                <span className="text-blue-600 text-xl">📍</span>
                <p className="text-gray-800 font-medium">Location: 123 Main Street, Cityville</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-600 text-xl">📞</span>
                <p className="text-gray-800 font-medium">Phone: (123) 456-7890</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-600 text-xl">⏰</span>
                <p className="text-gray-800 font-medium">Hours: Mon-Fri, 9am - 6pm</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-0 right-0 bg-blue-600 rounded-bl-lg px-4 py-2 text-white text-sm">
              <p className="font-bold">StayFinder</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
