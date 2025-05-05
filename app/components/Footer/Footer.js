import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-2xl font-semibold mb-4 sm:mb-0">StayFinder &mdash; Find your perfect stay</p>
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <a href="/" className="text-gray-400 hover:text-white transition duration-300">Home</a>
            <a href="/search.html" className="text-gray-400 hover:text-white transition duration-300">Search</a>
            <a href="/about.html" className="text-gray-400 hover:text-white transition duration-300">About</a>
            <a href="/contact.html" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-400 mb-2">info@stayfinder.com &nbsp;|&nbsp; (123) 456-7890</p>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} StayFinder</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
