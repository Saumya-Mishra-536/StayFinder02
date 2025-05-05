import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar_/Navbar';
import Footer from '../components/Footer/Footer';

function AboutPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <main className="px-6 md:px-20 py-12 flex-grow">
        <h1 className="text-5xl font-bold text-center mb-10 text-blue-800">About StayFinder</h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16">
          StayFinder is a cutting-edge property search platform committed to simplifying the process of finding your ideal home. Whether you're looking to rent, buy, or explore your next investment opportunity, we provide accurate listings, user-friendly search tools, and data-backed insights to empower your decision-making.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700 mb-20">
          <div className="bg-blue-50 rounded-2xl p-6 shadow hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold mb-3 text-blue-700">Our Mission</h3>
            <p>To revolutionize the way people discover properties by offering an intuitive, trustworthy, and seamless digital experience.</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-6 shadow hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold mb-3 text-blue-700">Our Vision</h3>
            <p>To become the most trusted and innovative real estate platform globally, connecting millions with their perfect home.</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-6 shadow hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold mb-3 text-blue-700">What We Offer</h3>
            <p>Advanced filtering options, real-time availability, expert insights, and customer-first support to guide your property journey.</p>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {[
            { name: 'Saumya Mishra', role: 'Founder & CEO', desc: 'Passionate about using technology to simplify real estate. Leads product vision and strategy.' },
            { name: 'Ankit Verma', role: 'Head of Engineering', desc: 'Drives backend architecture and ensures a smooth, responsive experience for all users.' },
            { name: 'Ritika Shah', role: 'Design Lead', desc: 'Brings elegant and user-friendly design to life with a strong focus on UX/UI.' },
          ].map((member, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-xl p-6 text-center transition-transform transform hover:scale-105 duration-300">
              <Image src="/assets/radiance-the-prime.jpg" alt={`Team Member ${idx + 1}`} width={150} height={150} className="mx-auto rounded-full" />
              <h4 className="text-lg font-semibold mt-4 text-blue-700">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
              <p className="mt-2 text-gray-600">{member.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
