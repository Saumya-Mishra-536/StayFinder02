// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Filters from '../components/Filter/Filter';
// import Navbar from '../components/Navbar_/Navbar';
// import Footer from '../components/Footer/Footer';

// export default function PartnerPage() {
 
//   const industries = [
//     {
//       title: "I'm a Hotel or Resort",
//       image: '/assets/radiance-the-prime.jpg',
//       link: '/partner/hotel'
//     },
//     {
//       title: "I'm a Vacation Rental Owner or Manager",
//       image: '/assets/radiance-the-prime.jpg',
//       link: '/partner/rental'
//     },
//     {
//       title: "I'm a Bed & Breakfast or Inn Owner",
//       image: '/assets/radiance-the-prime.jpg',
//       link: '/partner/inn'
//     },
//     {
//       title: "I'm a Property Management Company",
//       image: '/assets/radiance-the-prime.jpg',
//       link: '/partner/property-management'
//     },
//     {
//       title: "I'm a Local Experience Provider",
//       image: '/assets/radiance-the-prime.jpg',
//       link: '/partner/experience'
//     },
//     {
//       title: "I am a Travel Brand or Local Business",
//       image: '/assets/radiance-the-prime.jpg',
//       link: '/partner/travel-brand'
//     },
//   ];

//   return (
//     <div className="bg-white w-full">
//         <Navbar/>
//       <h1 className="text-4xl font-bold text-center mb-2 mt-8 text-black">Partner with StayFinder to Grow Your Business</h1>
//       <p className="text-center text-black mb-8">
//         Reach millions of travelers and guests on the leading accommodation network online.
//       </p>
//       <Filters/>
//       <h2 className="text-xl font-semibold text-center mb-4 text-black">Select your industry to get started</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {industries.map((industry, index) => (
//           <div key={index} className="border rounded-lg shadow-md overflow-hidden bg-white">
//             <Image src={industry.image} alt={industry.title} width={600} height={400} className="object-cover w-full h-48" />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold mb-2 text-black">{industry.title}</h3>
//               <Link href={industry.link}>
//                 <span className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer">
//                   Get started
//                 </span>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-16 max-w-4xl mx-auto text-center">
//         <h2 className="text-2xl font-bold mb-4 text-black">Why Partner with StayFinder?</h2>
//         <ul className="text-black space-y-2 text-left mx-auto w-fit">
//           <li>• Reach a vast and engaged travel audience.</li>
//           <li>• Showcase your properties or services effectively.</li>
//           <li>• Drive more bookings and inquiries.</li>
//           <li>• Access powerful marketing and analytics tools.</li>
//         </ul>
//       </div>

//       <div className="mt-16 max-w-4xl mx-auto text-center">
//         <h2 className="text-xl font-semibold mb-4 text-black">Learn More or Contact Us</h2>
//         <p className="text-black mb-2">For more details or questions, feel free to <Link href="/Contact" className="text-blue-600 underline">contact us</Link>.</p>
//       </div>
//       <Footer/>
//     </div>
//   );
// }
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Filters from '../components/Filter/Filter';
import Navbar from '../components/Navbar_/Navbar';
import Footer from '../components/Footer/Footer';

export default function PartnerPage() {
  const industries = [
    {
      title: "Cozy Apartments",
      image:'/assets/cozy apartment.png',
      link: '/explore/apartments'
    },
    {
      title: "Vacation Homes",
      image: '/assets/vacation homes.png',
      link: '/explore/vacation-homes'
    },
    {
      title: "City Rentals",
      image: '/assets/rentals.png',
      link: '/explore/city-rentals'
    },
    {
      title: "Nature Escapes",
      image: '/assets/nature escapes.png',
      link: '/explore/nature-escapes'
    },
    {
      title: "Budget Friendly Stays",
      image: '/assets/budget friendly.png',
      link: '/explore/budget-stays'
    },
    {
      title: "Luxury Living",
      image: '/assets/luxury living.png',
      link: '/explore/luxury'
    },
  ];
  

  return (
    <div className="bg-white w-full" style={{ fontFamily: `'Times New Roman', serif` }}>
      <Navbar />
      <h1
  className="text-4xl font-extrabold text-center mb-2 mt-8"
  style={{
    fontFamily: `'Times New Roman', serif`,
    color: '#1A1A1A', // Dark charcoal (almost black)
    letterSpacing: '0.5px',
  }}
>
  Your Journey to the Perfect Home Begins Here
</h1>
<p
  className="text-center mb-8 text-lg"
  style={{
    fontFamily: `'Times New Roman', serif`,
    fontWeight: '500',
    color: '#333333', // Very dark gray for clean contrast
  }}
>
  Explore personalized options tailored to your lifestyle and preferences.
</p>


      {/* Enhanced Filter Section */}
      <div className="max-w-5xl mx-auto mb-10">
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
        <h2
  className="text-3xl font-extrabold text-center mb-4 text-black"
  style={{
    fontFamily: `'Times New Roman', Times, serif`,
    letterSpacing: '0.5px',
  }}
>
  Find Your Perfect Home
</h2>

<p
  className="text-lg text-center text-black mb-6"
  style={{
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
    fontWeight: '600',
    lineHeight: '1.6',
  }}
>
  Start by choosing what matters to you — we’ll show you the best options.
</p>

          <Filters />
        </div>
      </div>

      {/* Industry Cards */}
      <h2 className="text-2xl font-semibold text-center mb-6 text-black">Find Your Right Stay</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {industries.map((industry, index) => (
          <div key={index} className="border rounded-lg shadow-md overflow-hidden bg-white">
            <Image src={industry.image} alt={industry.title} width={600} height={400} className="object-cover w-full h-48" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-black">{industry.title}</h3>
              <p className="text-black text-sm">{industry.description}</p>
              <Link href={industry.link}>
                
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* New Section: What Makes Us Unique */}
      <div className="mt-16 max-w-5xl mx-auto text-center px-4">
  <h2
    className="text-2xl font-bold mb-4"
    style={{
      fontFamily: `'Georgia', serif`,
      color: '#1A1A1A',
    }}
  >
    Why Choose StayFinder?
  </h2>
  <p
    className="mb-6"
    style={{
      fontFamily: `'Georgia', serif`,
      color: '#333333',
      fontSize: '1rem',
    }}
  >
    Simple, smart, and made for you — discover homes tailored to your needs with ease and trust.
  </p>
  <div
    className="grid sm:grid-cols-2 gap-6 text-left"
    style={{
      fontFamily: `'Georgia', serif`,
      color: '#333333',
    }}
  >
    <div>• Personalized home recommendations</div>
    <div>• Verified listings you can trust</div>
    <div>• Easy search filters to narrow down options</div>
    <div>• Friendly support to guide your journey</div>
  </div>
</div>


      {/* Contact Section */}
      <div className="mt-16 max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4 text-black">Learn More or Contact Us</h2>
        <p className="text-black mb-2">
          Have questions? We're here to help. <Link href="/Contact" className="text-blue-600 underline">Reach out to our team.</Link>
        </p>
      </div>

      <Footer />
    </div>
  );
}

