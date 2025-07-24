'use client';
import React, { useState } from 'react';

function Filters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    propertyType: 'all',
    minPrice: '',
    maxPrice: '',
    bedrooms: 'any',
    bathrooms: 'any'
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = {
      ...filters,
      [name]: value
    };
    
    setFilters(updatedFilters);
    if (onFilterChange) {
      onFilterChange(updatedFilters);
    }
  };
  
  const handleApplyFilters = () => {
    if (onFilterChange) {
      onFilterChange(filters);
    }
  };
  
  return (
    <div className="w-full bg-gradient-to-tr from-blue-100 via-white to-blue-50 py-6">
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Properties</h3>
      
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-medium">Property Type</label>
        <select 
          name="propertyType" 
          value={filters.propertyType} 
          onChange={handleChange}
          className="w-full p-3 mt-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Types</option>
          <option value="house">Cozy Apartments</option>
          <option value="apartment">Vacation Homes</option>
          <option value="condo">City Rentals</option>
          <option value="townhouse">Nature Escapes</option>
          <option value="condo">Budget Friendly Stays</option>
          <option value="townhouse">Luxury Living</option>
        </select>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-medium">Price Range</label>
        <div className="flex space-x-2 mt-2">
          <input 
            type="number" 
            name="minPrice" 
            placeholder="Min" 
            value={filters.minPrice} 
            onChange={handleChange}
            className="w-full p-3 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="self-center text-gray-600">to</span>
          <input 
            type="number" 
            name="maxPrice" 
            placeholder="Max" 
            value={filters.maxPrice} 
            onChange={handleChange}
            className="w-full p-3 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-medium">Bedrooms</label>
        <select 
          name="bedrooms" 
          value={filters.bedrooms} 
          onChange={handleChange}
          className="w-full p-3 mt-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="any">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
          <option value="5">5+</option>
        </select>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-medium">Bathrooms</label>
        <select 
          name="bathrooms" 
          value={filters.bathrooms} 
          onChange={handleChange}
          className="w-full p-3 mt-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="any">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>
      
      <button 
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        onClick={handleApplyFilters}
      >
        Apply Filters
      </button>
    </div>
    </div>
  );
}

export default Filters;
