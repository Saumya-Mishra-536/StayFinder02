import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar_/Navbar';
import Footer from '../components/Footer/Footer';

function AboutPage() {
  const stats = [
    { number: '2M+', label: 'Properties Listed' },
    { number: '500K+', label: 'Happy Customers' },
    { number: '150+', label: 'Cities Covered' },
    { number: '98%', label: 'Customer Satisfaction' },
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Our Mission',
      description: 'To revolutionize property discovery through innovative technology, making the journey of finding your perfect home seamless and enjoyable.',
    },
    {
      icon: '🚀',
      title: 'Our Vision',
      description: 'To be the global leader in real estate technology, connecting millions with their dream properties through trust and innovation.',
    },
    {
      icon: '💡',
      title: 'Our Values',
      description: 'Transparency, innovation, and customer-centricity guide everything we do, ensuring the best experience for our users.',
    },
  ];

  const team = [
    {
      name: 'Saumya Mishra',
      role: 'Founder & CEO',
      desc: 'Visionary leader with 10+ years in proptech, driving innovation and strategic growth.',
      image: '/assets/radiance-the-prime.jpg',
    },
    {
      name: 'Ankit Verma',
      role: 'Chief Technology Officer',
      desc: 'Tech innovator ensuring scalable solutions and exceptional user experiences.',
      image: '/assets/radiance-the-prime.jpg',
    },
    {
      name: 'Ritika Shah',
      role: 'Head of Design',
      desc: 'Creative force behind our intuitive interface and user-centered design approach.',
      image: '/assets/radiance-the-prime.jpg',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/bg.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transforming How You Find
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Your Perfect Home
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light">
            Empowering millions to discover their dream properties with confidence and ease
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose StayFinder</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              StayFinder combines cutting-edge technology with deep real estate expertise to deliver 
              an unparalleled property search experience. We're not just a platform; we're your trusted 
              partner in finding the perfect space to call home.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the visionaries behind StayFinder</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
                    <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join millions who trust StayFinder for their property search journey
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Start Exploring Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;