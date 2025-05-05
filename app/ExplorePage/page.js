'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar_/Navbar';
import Footer from '../components/Footer/Footer';

export default function PartnerPage() {
  const industries = [
    {
      title: "I'm a Hotel or Resort",
      image: '/assets/radiance-the-prime.jpg',
      link: '/partner/hotel'
    },
    {
      title: "I'm a Vacation Rental Owner or Manager",
      image: '/assets/radiance-the-prime.jpg',
      link: '/partner/rental'
    },
    {
      title: "I'm a Bed & Breakfast or Inn Owner",
      image: '/assets/radiance-the-prime.jpg',
      link: '/partner/inn'
    },
    {
      title: "I'm a Property Management Company",
      image: '/assets/radiance-the-prime.jpg',
      link: '/partner/property-management'
    },
    {
      title: "I'm a Local Experience Provider",
      image: '/assets/radiance-the-prime.jpg',
      link: '/partner/experience'
    },
    {
      title: "I am a Travel Brand or Local Business",
      image: '/assets/radiance-the-prime.jpg',
      link: '/partner/travel-brand'
    },
  ];

  return (
    <div className="bg-white w-full">
        <Navbar/>
      <h1 className="text-4xl font-bold text-center mb-2 mt-8 text-black">Partner with StayFinder to Grow Your Business</h1>
      <p className="text-center text-black mb-8">
        Reach millions of travelers and guests on the leading accommodation network online.
      </p>
      <h2 className="text-xl font-semibold text-center mb-4 text-black">Select your industry to get started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {industries.map((industry, index) => (
          <div key={index} className="border rounded-lg shadow-md overflow-hidden bg-white">
            <Image src={industry.image} alt={industry.title} width={600} height={400} className="object-cover w-full h-48" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-black">{industry.title}</h3>
              <Link href={industry.link}>
                <span className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer">
                  Get started
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 text-black">Why Partner with StayFinder?</h2>
        <ul className="text-black space-y-2 text-left mx-auto w-fit">
          <li>• Reach a vast and engaged travel audience.</li>
          <li>• Showcase your properties or services effectively.</li>
          <li>• Drive more bookings and inquiries.</li>
          <li>• Access powerful marketing and analytics tools.</li>
        </ul>
      </div>

      <div className="mt-16 max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4 text-black">Learn More or Contact Us</h2>
        <p className="text-black mb-2">For more details or questions, feel free to <Link href="/Contact" className="text-blue-600 underline">contact us</Link>.</p>
      </div>
      <Footer/>
    </div>
  );
}
