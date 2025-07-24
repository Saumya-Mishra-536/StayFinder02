'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar_/Navbar';
import PropertyCard from '../components/PropertyCard/PropertyCard';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';
function HomePage() {
  const [properties, setProperties] = useState([]);
  const router = useRouter();
  useEffect(() => {
    setProperties([
      {
        id: 1,
        title: 'Cozy Apartment in Downtown',
        price: '$1,200/month',
        imageUrl: '/assets/cozy downtown.png',
        location: 'Los Angeles',
      },
      {
        id: 2,
        title: 'Modern House',
        price: '$2,000/month',
        imageUrl: '/assets/modern house.png',
        location: 'Los Angeles',
      },
      {
        id: 3,
        title: 'Beachside Condo',
        price: '$3,000/month',
        imageUrl: '/assets/Beachside.png',
        location: 'Miami, FL',
      },
      {
        id: 4,
        title: 'City Loft with Skyline View',
        price: '$2,000/month',
        imageUrl: '/assets/City loft.png',
        location: 'Chicago, IL',
      },
    ]);
  }, []);
  return (
    <div className="home-page bg-white min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center h-screen flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%), url('/assets/radiance-the-prime.jpg')`,
          }}
        >
          {/* Animated background overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
          {/* Floating elements for visual interest */}
          <div className="relative z-10 text-white px-6 max-w-4xl mx-auto text-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Find Your Perfect
                <span className="block text-blue-300">Dream Home</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
                Discover exceptional properties with cutting-edge search technology and personalized recommendations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <button
                  className="group bg-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3"
                  onClick={() => router.push('/ExplorePage')}
                >
                  Start Exploring
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10K+', label: 'Properties Listed' },
              { number: '5K+', label: 'Happy Customers' },
              { number: '50+', label: 'Cities Covered' },
              { number: '99%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl md:text-4xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Featured Properties Section */}
      <div className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Featured Properties
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked premium properties that offer the perfect blend of luxury, comfort, and location
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {properties.map((property, index) => (
              <div
                key={property.id}
                className="transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
          {/* CTA Section */}
          <div className="text-center">
            <button
              className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              onClick={() => router.push('/ExplorePage')}
            >
              View All Properties
            </button>
          </div>
        </div>
      </div>
      {/* Testimonials with modern styling */}
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Testimonials />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default HomePage;