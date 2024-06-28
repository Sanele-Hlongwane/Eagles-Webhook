// opportunities.tsx

import React from 'react';

const Opportunities = () => {
  // Dummy data for illustration
  const opportunities = [
    {
      id: 1,
      title: 'Tech Startup X',
      description: 'Revolutionary tech startup disrupting the industry.',
      location: 'San Francisco, CA',
      investmentRequired: '$1,000,000',
    },
    {
      id: 2,
      title: 'Green Energy Solutions',
      description: 'Innovative renewable energy solutions provider.',
      location: 'New York, NY',
      investmentRequired: '$500,000',
    },
    {
      id: 3,
      title: 'Healthcare Innovation',
      description: 'Advanced healthcare technology improving patient care.',
      location: 'Boston, MA',
      investmentRequired: '$750,000',
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-navy-900">Investment Opportunities</h1>
        <p className="text-lg lg:text-xl mb-8">
          Explore the latest investment opportunities curated by Eagles Ring.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opportunity) => (
            <div key={opportunity.id} className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">{opportunity.title}</h2>
              <p className="text-lg mb-4">{opportunity.description}</p>
              <p className="text-lg mb-4">Location: {opportunity.location}</p>
              <p className="text-lg mb-4">Investment Required: {opportunity.investmentRequired}</p>
              <button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-2 px-4 rounded-lg">
                Invest Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
