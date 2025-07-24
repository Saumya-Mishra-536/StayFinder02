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
        imageUrl:'/assets/cozy downtown.png',
        location: 'Los Angeles',
      },
      {
        id: 2,
        title: 'Modern House',
        price: '$2,000/month',
        imageUrl:'/assets/modern house.png',
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
    <div className="home-page bg-white">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/assets/radiance-the-prime.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white px-4">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: `'Times New Roman', serif` }}
          >
            Find Your Perfect Stay
          </h1>
          <p
            className="text-3xl md:text-4xl mb-8"
            style={{
              fontFamily: `'Dancing Script', cursive`,
              fontWeight: 'bold',
            }}
          >
            Explore thousands of verified listings at your fingertips.
          </p>
          <button
            className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition flex items-center gap-2 mx-auto"
            onClick={() => router.push('/ExplorePage')}
          >
            Start Exploring
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Featured Properties + Testimonials */}
      <div className="bg-blue-100 px-6 py-12">
        <h2
          className="text-4xl font-bold text-center mb-10 text-black"
          style={{ fontFamily: 'Times New Roman, Times, serif' }}
        >
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <Testimonials />
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
