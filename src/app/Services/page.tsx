// src/pages/services.tsx
import React from 'react';
import Link from 'next/link';

const Services = () => {
  return (
    <div className="bg-gray-900 text-white py-24">
      <div className="container mx-auto text-center">
        {/* Hero Section */}
        <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gray-300">Our Services</h1>
        <p className="text-lg lg:text-xl mb-8">
          Connecting innovative ideas with strategic investments.
        </p>
        <Link href="#investor-section">
          <p className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-3 px-6 rounded-lg shadow-lg">
            Become an Investor
          </p>
        </Link>

        {/* Service Offerings Section */}
        <section id="service-section" className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service Card 1: For Entrepreneurs */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">For Entrepreneurs</h2>
              <p className="text-lg mb-4">
                Pitch your business ideas to experienced investors (Eagles).
              </p>
              <ul className="text-lg mb-4">
                <li>Access to capital investment</li>
                <li>Mentorship and guidance</li>
                <li>Networking opportunities</li>
              </ul>
              <Link href="#apply-section">
                <p className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-2 px-4 rounded-lg">
                  Apply Now
                </p>
              </Link>
            </div>

            {/* Service Card 2: For Investors */}
            <div className="bg-gray-800 p-8 rounded-lg" id="investor-section">
              <h2 className="text-3xl font-bold mb-4">For Investors</h2>
              <p className="text-lg mb-4">
                Invest in promising business ventures curated by Eagles.
              </p>
              <ul className="text-lg mb-4">
                <li>Diverse investment opportunities</li>
                <li>Insights into emerging markets</li>
                <li>Exclusive access to innovative solutions</li>
              </ul>
              <Link href="/Opportunities">
                <p className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-2 px-4 rounded-lg">
                  Explore Opportunities
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section id="apply-section" className="mt-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg lg:text-xl mb-8">
            Join us in transforming ideas into successful ventures.
          </p>
          <Link href="/Contact">
            <p className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-3 px-6 rounded-lg shadow-lg">
              Contact Us
            </p>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Services;
