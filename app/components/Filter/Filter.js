'use client';
import React, { useState } from 'react';

function Filters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    propertyType: 'all',
    minPrice: 0,
    maxPrice:50,
    bedrooms: 'any',
    bathrooms: 'any'
  });

  const minAllowed = 0;
  const maxAllowed = 50;

  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = {
      ...filters,
      [name]: Number(value)
    };
    
    if (updatedFilters.minPrice > updatedFilters.maxPrice) {
      if (name === 'minPrice') updatedFilters.maxPrice = updatedFilters.minPrice;
      else updatedFilters.minPrice = updatedFilters.maxPrice;
    }
    
    setFilters(updatedFilters);
    if (onFilterChange) {
      onFilterChange(updatedFilters);
    }
  };

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
    <div className="w-full">
      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">Property Type</label>
          <select
            name="propertyType"
            value={filters.propertyType}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          >
            <option value="all">All Types</option>
            <option value="Cozy Apartments">Cozy Apartments</option>
            <option value="Vacation Homes">Vacation Homes</option>
            <option value="City Rentals">City Rentals</option>
            <option value="Nature Escapes">Nature Escapes</option>
            <option value="Budget Friendly Stays">Budget Friendly Stays</option>
            <option value="Luxury Living">Luxury Living</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Price Range (in Crores)
          </label>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between text-sm font-medium text-gray-700 mb-3">
              <span className="text-blue-600">₹{filters.minPrice} Cr</span>
              <span className="text-indigo-600">₹{filters.maxPrice} Cr</span>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-500">Min Price</label>
                <input
                  type="range"
                  name="minPrice"
                  min={minAllowed}
                  max={filters.maxPrice}
                  value={filters.minPrice}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500">Max Price</label>
                <input
                  type="range"
                  name="maxPrice"
                  min={filters.minPrice}
                  max={maxAllowed}
                  value={filters.maxPrice}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">Bedrooms</label>
          <select
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          >
            <option value="any">Any</option>
            <option value="1">1+ BHK</option>
            <option value="2">2+ BHK</option>
            <option value="3">3+ BHK</option>
            <option value="4">4+ BHK</option>
            <option value="5">5+ BHK</option>
            </select>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">Bathrooms</label>
          <select
            name="bathrooms"
            value={filters.bathrooms}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          >
            <option value="any">Any</option>
            <option value="1">1+ Bathroom</option>
            <option value="2">2+ Bathrooms</option>
            <option value="3">3+ Bathrooms</option>
            <option value="4">4+ Bathrooms</option>
          </select>
        </div>

        <button
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-lg transform hover:scale-[1.02]"
          onClick={handleApplyFilters}
        >
          Apply Filters
        </button>

        <button
          className="w-full py-2 text-gray-600 font-medium rounded-lg hover:text-gray-800 transition duration-300"
          onClick={() => {
            const resetFilters = {
              propertyType: 'all',
              minPrice: 0,
              maxPrice: 50,
              bedrooms: 'any',
              bathrooms: 'any'
            };
            setFilters(resetFilters);
            if (onFilterChange) {
              onFilterChange(resetFilters);
            }
          }}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}

export default Filters;
          