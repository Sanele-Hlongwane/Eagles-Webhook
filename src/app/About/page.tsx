"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const AboutUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleHover = (index: number) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-100">About Eagles Ring</h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-300">
            Connecting aspiring entrepreneurs with investment opportunities.
          </p>
        </div>

        <section className="mb-8 bg-gray-800 py-8 px-4 rounded-lg shadow-md w-full">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-200">Our Mission</h2>
          <p className="text-lg sm:text-xl text-gray-300">
            At Eagles Ring, our mission is to bridge the gap between innovative entrepreneurs and visionary investors. We provide a platform where entrepreneurs can present their groundbreaking ideas to a panel of experienced business moguls, known as the &quot;Eagles.&rdquo; Our goal is to foster entrepreneurship and drive economic growth by facilitating access to capital and mentorship.
          </p>
        </section>

        <section className="mb-8 bg-gray-700 py-8 px-4 rounded-lg shadow-md w-full">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-200">Our Vision</h2>
          <p className="text-lg sm:text-xl text-gray-300">
            We envision a world where every entrepreneur has the resources and support to turn their innovative ideas into reality. Through our platform, we aim to create a thriving community of entrepreneurs and investors who work together to build successful businesses and foster economic growth.
          </p>
        </section>

        <section className="mb-8 bg-gray-800 py-8 px-4 rounded-lg shadow-md w-full">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-200">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            
            <div className="text-center">
              <div
                className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden"
                onMouseEnter={() => handleHover(0)}
                onMouseLeave={handleLeave}
              >
                <Image
                  className={`w-full h-full transform ${hoveredIndex === 0 ? 'scale-110' : 'scale-100'} transition-transform duration-300`}
                  src="/images/EaglesRingLogo.png"
                  alt="John Doe"
                  width={128}
                  height={128}
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-100">John Doe</h3>
              <p className="text-sm sm:text-base text-gray-400">Founder & CEO</p>
              <p className="text-sm sm:text-base text-gray-400 mt-2">
                John is a seasoned entrepreneur with over 20 years of experience in the tech industry. He has founded multiple successful startups and is passionate about helping new entrepreneurs succeed.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden"
                onMouseEnter={() => handleHover(1)}
                onMouseLeave={handleLeave}
              >
                <Image
                  className={`w-full h-full transform ${hoveredIndex === 1 ? 'scale-110' : 'scale-100'} transition-transform duration-300`}
                  src="/images/EaglesRingLogo.png"
                  alt="Jane Smith"
                  width={128}
                  height={128}
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-100">Jane Smith</h3>
              <p className="text-sm sm:text-base text-gray-400">Chief Operating Officer</p>
              <p className="text-sm sm:text-base text-gray-400 mt-2">
                Jane has a strong background in operations and management. She has worked with several Fortune 500 companies and brings a wealth of experience in streamlining business processes.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden"
                onMouseEnter={() => handleHover(2)}
                onMouseLeave={handleLeave}
              >
                <Image
                  className={`w-full h-full transform ${hoveredIndex === 2 ? 'scale-110' : 'scale-100'} transition-transform duration-300`}
                  src="/images/team-member.jpg"
                  alt="Alice Johnson"
                  width={128}
                  height={128}
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-100">Alice Johnson</h3>
              <p className="text-sm sm:text-base text-gray-400">Chief Marketing Officer</p>
              <p className="text-sm sm:text-base text-gray-400 mt-2">
                Alice is an expert in digital marketing and branding. She has led successful marketing campaigns for various global brands and is dedicated to increasing the visibility of Eagles Ring.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-700 py-8 px-4 rounded-lg shadow-md w-full">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-200">Our Values</h2>
          <p className="text-lg sm:text-xl text-gray-300">
            Integrity, innovation, and inclusivity are at the heart of everything we do. We believe in creating a supportive and transparent environment for entrepreneurs and investors alike.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
