"use client"
// src/pages/about.tsx
import React, { useState } from 'react';

const AboutUs = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto pt-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-300">About Eagles Ring</h1>
          <p className="text-lg sm:text-xl mb-8">
            Connecting aspiring entrepreneurs with investment opportunities.
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg sm:text-xl">
            At Eagles Ring, our mission is to bridge the gap between innovative entrepreneurs and visionary investors. We provide a platform where entrepreneurs can present their groundbreaking ideas to a panel of experienced business moguls, known as the &quot;Eagles.&rdquo; Our goal is to foster entrepreneurship and drive economic growth by facilitating access to capital and mentorship.
          </p>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Example Team Member */}
            <div className="text-center">
              <div
                className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                <img
                  className={`w-full h-full transform ${isHovered ? 'scale-110' : 'scale-100'} transition-transform duration-300`}
                  src="../EaglesRingLogo.png"
                  alt="Team Member"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-medium">John Doe</h3>
              <p className="text-sm sm:text-base text-gray-400">Founder &amp; CEO</p>
            </div>
            {/* Add more team members as needed */}
            <div className="text-center">
              <div
                className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                <img
                  className={`w-full h-full transform ${isHovered ? 'scale-110' : 'scale-100'} transition-transform duration-300`}
                  src="../EaglesRingLogo.png"
                  alt="Team Member"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-medium">Jane Smith</h3>
              <p className="text-sm sm:text-base text-gray-400">Chief Operating Officer</p>
            </div>
            <div className="text-center">
              <div
                className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                <img
                  className={`w-full h-full transform ${isHovered ? 'scale-110' : 'scale-100'} transition-transform duration-300`}
                  src="/path/to/team-member.jpg"
                  alt="Team Member"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-medium">Alice Johnson</h3>
              <p className="text-sm sm:text-base text-gray-400">Chief Marketing Officer</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
