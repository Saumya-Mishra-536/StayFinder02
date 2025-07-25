'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar_/Navbar';
import PropertyCard from '../components/PropertyCard/PropertyCard';
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

  const services = [
    {
      icon: '🏠',
      title: 'Smart Property Matching',
      description: 'AI-powered recommendations tailored to your lifestyle and preferences',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      icon: '🔍',
      title: 'Advanced Search Filters',
      description: 'Find exactly what you need with our comprehensive filtering system',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      icon: '📱',
      title: 'Virtual Tours',
      description: 'Explore properties from anywhere with immersive 3D walkthroughs',
      gradient: 'from-indigo-400 to-blue-600',
    },
    {
      icon: '💰',
      title: 'Price Analytics',
      description: 'Make informed decisions with real-time market insights and trends',
      gradient: 'from-blue-400 to-cyan-600',
    },
    {
      icon: '🏆',
      title: 'Verified Listings',
      description: 'Every property is verified for authenticity and quality assurance',
      gradient: 'from-cyan-400 to-blue-600',
    },
    {
      icon: '🤝',
      title: '24/7 Support',
      description: 'Expert assistance available round the clock for all your queries',
      gradient: 'from-blue-500 to-blue-700',
    },
  ];

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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
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
                  className="group bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3"
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

      {/* Featured Properties Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Featured Properties
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
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
          <div className="text-center">
            <button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              onClick={() => router.push('/ExplorePage')}
            >
              View All Properties
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose StayFinder
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6 opacity-80"></div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Experience the future of property search with our innovative features and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20"
              >
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-white/80 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <button
              className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25"
              onClick={() => router.push('/AboutPage')}
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;