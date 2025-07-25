'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Filters from '../components/Filter/Filter';
import Navbar from '../components/Navbar_/Navbar';
import Footer from '../components/Footer/Footer';
import PropertyCard from '../components/PropertyCard/PropertyCard';
import mockProperties from './mockProperties';

const PROPERTY_TYPES = [
  'Cozy Apartments',
  'Vacation Homes',
  'City Rentals',
  'Nature Escapes',
  'Budget Friendly Stays',
  'Luxury Living',
];

export default function ExplorePage() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    propertyType: 'all',
    minPrice: 0,
    maxPrice: 1500,
    bedrooms: 'any',
    bathrooms: 'any',
  });
  const [filteredProperties, setFilteredProperties] = useState(mockProperties);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let filtered = mockProperties.filter((property) => {
      const typeMatch =
        filters.propertyType === 'all' ||
        property.type === filters.propertyType ||
        property.type.replace(/\s+/g, '').toLowerCase() === filters.propertyType.replace(/\s+/g, '').toLowerCase();
      
      const minPriceMatch =
        !filters.minPrice || property.price >= parseInt(filters.minPrice) * 1000;
      const maxPriceMatch =
        !filters.maxPrice || property.price <= parseInt(filters.maxPrice) * 1000;
      
      const bedroomsMatch =
        filters.bedrooms === 'any' || property.bedrooms >= parseInt(filters.bedrooms);
      
      const bathroomsMatch =
        filters.bathrooms === 'any' || property.bathrooms >= parseInt(filters.bathrooms);
      
      const searchMatch =
        property.title.toLowerCase().includes(search.toLowerCase()) ||
        property.location.toLowerCase().includes(search.toLowerCase()) ||
        property.description.toLowerCase().includes(search.toLowerCase());

      return (
        typeMatch &&
        minPriceMatch &&
        maxPriceMatch &&
        bedroomsMatch &&
        bathroomsMatch &&
        searchMatch
      );
    });
    setFilteredProperties(filtered);
  }, [search, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const groupedProperties = PROPERTY_TYPES.map((type) => ({
    type,
    properties: filteredProperties.filter((p) => p.type === type),
  }));

  const featuredAmenities = [
    {
      icon: '🏊',
      title: 'Premium Amenities',
      description: 'Swimming pools, gyms, and recreational facilities'
    },
    {
      icon: '🚗',
      title: 'Convenient Parking',
      description: 'Dedicated parking spaces for residents and guests'
    },
    {
      icon: '🌳',
      title: 'Green Spaces',
      description: 'Landscaped gardens and outdoor relaxation areas'
    },
    {
      icon: '🔒',
      title: '24/7 Security',
      description: 'Round-the-clock security with CCTV surveillance'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen w-full font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
            Discover Your Dream Property
          </h1>
          <p className="text-xl font-light max-w-2xl mx-auto">
            Explore our exclusive collection of premium properties across India
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        {/* Price Range Display */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Property Price Range</h3>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <p className="text-sm text-gray-500">Starting from</p>
              <p className="text-2xl font-bold text-blue-600">₹0.5 Cr</p>
            </div>
            <div className="text-gray-300">|</div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Up to</p>
              <p className="text-2xl font-bold text-indigo-600">₹50 Cr+</p>
            </div>
          </div>
        </div>

        {/* Responsive Filter/Search Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar/Drawer for Filters */}
          <div className="md:w-1/4 w-full">
            <div className="block md:hidden mb-4">
              <button
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-lg"
                onClick={() => setShowFilters((v) => !v)}
              >
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
            </div>
            <div className={`bg-white rounded-xl shadow-lg p-6 md:block ${showFilters ? 'block' : 'hidden'} md:sticky md:top-24`}>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">🔍</span> Search & Filter
              </h3>
              <input
                type="text"
                placeholder="Search properties..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-3 mb-4 border-2 border-gray-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
              <Filters onFilterChange={handleFilterChange} />
            </div>
          </div>

          {/* Main Content: Grouped Properties */}
          <div className="flex-1">
            {groupedProperties.map(({ type, properties }) => (
              <div key={type} className="mb-12">
                <div className="flex items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-800">{type}</h2>
                  <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {properties.length} properties
                  </span>
                </div>
                
                {properties.length === 0 ? (
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <p className="text-gray-500">No properties found in this category.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {filteredProperties.length === 0 && (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <div className="text-6xl mb-4">🏠</div>
                {/* <h3 className="text-2xl font-bold text-gray-700 mb-2">No properties found</h3> */}
                <p className="text-gray-500">Try adjusting your filters or search criteria</p>
              </div>
            )}
          </div>
        </div>

        {/* Featured Amenities Section */}
        <div className="mt-20 py-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">World-Class Amenities</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Every property comes with premium facilities for modern living
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
            {featuredAmenities.map((amenity, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition duration-300">
                <div className="text-5xl mb-4">{amenity.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{amenity.title}</h3>
                <p className="text-blue-100">{amenity.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/AboutPage">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition duration-300 shadow-lg">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}