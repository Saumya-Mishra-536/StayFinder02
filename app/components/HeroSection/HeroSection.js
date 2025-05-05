'use client';
import React, { useState } from 'react';

function HeroSection() {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Instead of using router, we'll redirect using window.location
    window.location.href = `/search.html?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`;
  };
  
  return (
    <div className="hero-section bg-gradient-to-br from-blue-100 via-white to-blue-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Find Your Perfect Stay</h1>
        <p className="text-lg text-gray-600 mb-8">Discover amazing properties at the best prices</p>
        
        <form className="bg-white shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-end" onSubmit={handleSearch}>
          <div className="flex flex-col text-left">
            <label className="mb-1 text-sm font-semibold text-gray-700">Location</label>
            <input 
              type="text" 
              placeholder="Where are you going?" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          
          <div className="flex flex-col text-left">
            <label className="mb-1 text-sm font-semibold text-gray-700">Check-in</label>
            <input 
              type="date" 
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
              className="border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          
          <div className="flex flex-col text-left">
            <label className="mb-1 text-sm font-semibold text-gray-700">Check-out</label>
            <input 
              type="date" 
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
              className="border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          
          <div className="flex flex-col text-left">
            <label className="mb-1 text-sm font-semibold text-gray-700">Guests</label>
            <select 
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>
          
          <button type="submit" className="w-full md:w-auto mx-auto col-span-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default HeroSection;