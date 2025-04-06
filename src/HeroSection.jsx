import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
              Predict Your Startup's 
              <span className="block text-cyan-200">Success Potential</span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-lg">
              Our AI-powered model analyzes key factors to help founders and investors make data-driven decisions about startups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md hover:bg-gray-100 transition duration-150 ease-in-out">
                Consult Alchemist
              </button>
              <button className="px-6 py-3 bg-transparent text-white border border-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-150 ease-in-out">
                Learn More
              </button>
            </div>
            <div className="mt-10">
              <p className="text-sm font-medium text-cyan-100 mb-3">Trusted by founders from</p>
              <div className="flex gap-8 opacity-90">
                <div className="h-8 w-auto text-white">
                  <svg className="h-full" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <div className="h-8 w-auto text-white">
                  <svg className="h-full" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.59 7.92L23.75 9.33L19 14.08L16.25 11.08L17.41 9.92L19 11.5L22.59 7.92M6 5H8V7H6V5M10 5H12V7H10V5M6 9H8V11H6V9M10 9H12V11H10V9M6 13H8V15H6V13M10 13H12V15H10V13M6 17H8V19H6V17M10 17H12V19H10V17M2 7H4V17H2V19H4C5.11 19 6 18.11 6 17V7C6 5.89 5.11 5 4 5H2V7M13 7V19H15V17H17V19H19V7H17V9H15V7H13Z" />
                  </svg>
                </div>
                <div className="h-8 w-auto text-white">
                  <svg className="h-full" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Illustration */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Startup Success Prediction</h3>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">AI-Powered</span>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                    <option>SaaS</option>
                    <option>Fintech</option>
                    <option>E-commerce</option>
                    <option>Healthcare</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Founding Team Size</label>
                  <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="2" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Initial Funding ($)</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="100,000" />
                </div>
              </div>
              
              <div className="bg-gray-50 -m-6 lg:-m-8 p-6 lg:p-8 mt-6 rounded-b-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Estimated Success Rate</span>
                  <span className="text-lg font-bold text-indigo-600">76%</span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '76%' }}></div>
                </div>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-150 ease-in-out">
                  Get Full Analysis
                </button>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 h-12 w-12 bg-yellow-400 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 h-8 w-8 bg-purple-500 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="w-full">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 50C840 40 960 20 1080 15C1200 10 1320 20 1380 25L1440 30V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;