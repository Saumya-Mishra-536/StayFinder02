import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
        <p
  className="text-2xl font-semibold mb-4 sm:mb-0 text-white"
  style={{ fontFamily: 'Times New Roman, Times, serif' }}
>
  StayFinder – Find your perfect stay
</p>


          <div className="flex space-x-6 mb-4 sm:mb-0">
            <Link href="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link>
            <Link href="/ExplorePage" className="text-gray-400 hover:text-white transition duration-300">Explore</Link>
            <Link href="/AboutPage" className="text-gray-400 hover:text-white transition duration-300">About</Link>
            <Link href="/Contact" className="text-gray-400 hover:text-white transition duration-300">Contact</Link>
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
