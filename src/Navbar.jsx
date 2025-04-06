import React, { useState } from 'react';

const StartupPredictorApp = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-indigo-600 font-bold text-xl">StartupPredictor</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    activeTab === 'dashboard'
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Dashboard
                </button>
                
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    activeTab === 'analytics'
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Analytics
                </button>
                <button
                  onClick={() => setActiveTab('resources')}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    activeTab === 'resources'
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Resources
                </button>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button className="bg-indigo-600 px-4 py-2 rounded-md text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Get Started
              </button>
            </div>
            <div className="flex items-center sm:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && <DashboardContent />}
        {activeTab === 'predictor' && <PredictorContent />}
        {activeTab === 'analytics' && <AnalyticsContent />}
        {activeTab === 'resources' && <ResourcesContent />}
      </div>
    </div>
  );
};

// Dashboard Component
const DashboardContent = () => (
  <div>
    <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="ml-5 w-0 flex-1">
              <dt className="text-sm font-medium text-gray-500 truncate">Success Rate</dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">78%</div>
                <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                  </svg>
                  <span className="sr-only">Increased by</span>
                  7%
                </div>
              </dd>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="ml-5 w-0 flex-1">
              <dt className="text-sm font-medium text-gray-500 truncate">Active Users</dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">2,340</div>
                <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                  </svg>
                  <span className="sr-only">Increased by</span>
                  12%
                </div>
              </dd>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="ml-5 w-0 flex-1">
              <dt className="text-sm font-medium text-gray-500 truncate">Predictions Made</dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">14,218</div>
                <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                  </svg>
                  <span className="sr-only">Increased by</span>
                  5%
                </div>
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Predictor Component


// Analytics Component
const AnalyticsContent = () => (
  <div>
    <h1 className="text-2xl font-semibold text-gray-900 mb-6">Analytics</h1>
    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">Success Factors by Industry</h3>
        <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Graph visualization placeholder</p>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">Funding Impact on Success</h3>
        <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Chart visualization placeholder</p>
        </div>
      </div>
    </div>
  </div>
);

// Resources Component
const ResourcesContent = () => (
  <div>
    <h1 className="text-2xl font-semibold text-gray-900 mb-6">Resources</h1>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Startup Guide</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>Learn about the key factors that contribute to startup success.</p>
          </div>
          <div className="mt-5">
            <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Read Guide
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Case Studies</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>Explore real-world examples of successful startups and their strategies.</p>
          </div>
          <div className="mt-5">
            <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Investor Network</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>Connect with potential investors for your startup venture.</p>
          </div>
          <div className="mt-5">
            <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Connect Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StartupPredictorApp;