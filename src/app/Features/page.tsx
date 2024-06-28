// components/Features.js
const Features = () => {
    return (
      <div className="bg-gray-100 py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-4 border border-gray-300 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Pitch Your Idea</h3>
              <p className="text-lg">
                Present your business model to a panel of experienced investors.
              </p>
            </div>
            <div className="p-4 border border-gray-300 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Secure Funding</h3>
              <p className="text-lg">
                Get funding from our network of investors who are ready to back promising ventures.
              </p>
            </div>
            <div className="p-4 border border-gray-300 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
              <p className="text-lg">
                Receive mentorship and strategic advice from successful business moguls.
              </p>
            </div>
            <div className="p-4 border border-gray-300 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Global Reach</h3>
              <p className="text-lg">
                Connect with investors and entrepreneurs from around the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Features;
  