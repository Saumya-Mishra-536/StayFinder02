'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar_/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import Filters from '../components/Filter/Filter';
import PropertyCard from '../components/PropertyCard/PropertyCard';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';

function HomePage() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties([
      {
        id: 1,
        title: 'Cozy Apartment in Downtown',
        price: '$1,200/month',
        imageUrl: '/assets/radiance-the-prime.jpg',
        location: 'New York, NY'
      },
      {
        id: 2,
        title: 'Modern House with Garden',
        price: '$2,500/month',
        imageUrl: '/assets/radiance-the-prime.jpg',
        location: 'Los Angeles, CA'
      },
      {
        id: 3,
        title: 'Beachside Condo',
        price: '$3,000/month',
        imageUrl: '/assets/radiance-the-prime.jpg',
        location: 'Miami, FL'
      },
      {
        id: 4,
        title: 'Beachside Condo',
        price: '$3,000/month',
        imageUrl: '/assets/radiance-the-prime.jpg',
        location: 'Miami, FL'
      }
    ]);
  }, []);

  return (
    <div className="home-page bg-white">
      <Navbar />
      <HeroSection />
      <Filters />
      <div className="bg-gradient-to-br from-blue-100 via-white to-blue-50 w-full mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomePage;
