"use client"
import { useState, useEffect } from 'react';

const Hero = () => {
  const [fontSize, setFontSize] = useState('text-5xl');

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setFontSize('text-3xl'); // Adjust the font size for small screens
    } else {
      setFontSize('text-5xl'); // Reset the font size for larger screens
    }
  };

  useEffect(() => {
    handleResize(); // Set initial font size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white py-24">
      <div className="container mx-auto text-center">
        <h1 className={`${fontSize} lg:text-6xl font-bold mb-4 text-navy-900`}>
          Welcome to <span className="text-gold-500">Eagles Ring</span>
        </h1>
        <p className="text-lg lg:text-xl mb-8">
          Connecting aspiring entrepreneurs with investment opportunities.
        </p>
        <button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-3 px-6 rounded-lg shadow-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
