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

  const reviews = [
    {
      name: 'Sarah Johnson',
      location: 'San Francisco, CA',
      rating: 5,
      date: 'January 2025',
      review: 'StayFinder made my home search incredibly easy. The filters helped me find exactly what I was looking for, and I closed on my dream condo within 3 weeks!',
      propertyType: 'Condo Buyer',
      image: '/assets/user1.jpg'
    },
    {
      name: 'Michael Chen',
      location: 'Austin, TX',
      rating: 5,
      date: 'December 2024',
      review: 'As a first-time homebuyer, I was overwhelmed. StayFinder\'s intuitive interface and detailed property information made the process stress-free. Highly recommend!',
      propertyType: 'First-time Buyer',
      image: '/assets/user2.jpg'
    },
    {
      name: 'Emily Rodriguez',
      location: 'Miami, FL',
      rating: 4,
      date: 'January 2025',
      review: 'Great platform with extensive listings. Found my vacation rental property quickly. The only improvement would be more virtual tour options, but overall excellent!',
      propertyType: 'Investment Property',
      image: '/assets/user3.jpg'
    },
    {
      name: 'David Thompson',
      location: 'Seattle, WA',
      rating: 5,
      date: 'November 2024',
      review: 'The neighborhood insights and school ratings were game-changers for our family. We found the perfect home in a great school district thanks to StayFinder.',
      propertyType: 'Family Home',
      image: '/assets/user4.jpg'
    },
    {
      name: 'Lisa Patel',
      location: 'Chicago, IL',
      rating: 5,
      date: 'December 2024',
      review: 'Exceptional service! The saved searches feature kept me updated on new listings. Found my downtown loft in just 2 weeks. The process was seamless.',
      propertyType: 'Urban Living',
      image: '/assets/user5.jpg'
    },
    {
      name: 'Robert Martinez',
      location: 'Denver, CO',
      rating: 4,
      date: 'October 2024',
      review: 'StayFinder helped me relocate across the country. The detailed photos and neighborhood info made it possible to buy confidently without multiple visits.',
      propertyType: 'Relocation',
      image: '/assets/user6.jpg'
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

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
              an unparalleled property search experience. We&apos;re not just a platform; we&apos;re your trusted 
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

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real people finding their perfect homes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  {renderStars(review.rating)}
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                
                <p className="text-gray-700 mb-3 leading-relaxed">{review.review}</p>
                
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-sm font-medium text-indigo-600">{review.propertyType}</span>
                  <span className="text-sm text-gray-500">Verified Buyer</span>
                </div>
              </div>
            ))}
          </div>

          {/* Review Summary */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
              <div className="flex items-center">
                {renderStars(5)}
              </div>
              <span className="font-semibold text-slate-900">4.8 out of 5</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-600">Based on 500K+ reviews</span>
            </div>
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
          
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;