import React from 'react';

function TestimonialList() {
  const testimonials = [
    {
      name: 'Jane Doe',
      feedback: 'StayFinder made booking our vacation so easy and stress-free!'
    },
    {
      name: 'John Smith',
      feedback: 'Great options and super helpful customer support. Loved the experience!'
    },
    {
      name: 'Emily Nguyen',
      feedback: 'Clean interface and fast search. I found the perfect place in minutes.'
    }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <p className="text-gray-600 text-lg italic mb-4">&quot;{t.feedback}&quot;</p>
              <p className="text-blue-600 font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialList;
