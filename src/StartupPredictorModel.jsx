import React, { useState } from 'react';

const StartupPredictorModel = () => {
  const [formData, setFormData] = useState({
    industry: 'tech',
    fundingStage: 'seed',
    teamSize: 3,
    monthlyRevenue: 0,
    burnRate: 0,
    growth: 0,
    location: 'us',
    businessModel: 'saas',
    marketSize: 'large',
    competition: 'medium'
  });
  
  const [showResults, setShowResults] = useState(false);
  const [processing, setProcessing] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'teamSize' || name === 'monthlyRevenue' || name === 'burnRate' || name === 'growth' 
        ? parseFloat(value) 
        : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setProcessing(false);
      setShowResults(true);
    }, 1500);
  };
  
  // Calculate a "success score" based on input parameters
  const calculateSuccessScore = () => {
    // This is a simplified model, would be replaced with your actual prediction model
    let score = 0;
    
    // Industry factors
    const industryScores = {
      'tech': 85,
      'healthcare': 80,
      'finance': 75,
      'retail': 70,
      'manufacturing': 65,
      'education': 60
    };
    
    score += industryScores[formData.industry] || 60;
    
    // Funding stage impact
    const fundingScores = {
      'bootstrapped': -5,
      'pre-seed': 0,
      'seed': 5,
      'series-a': 10,
      'series-b': 15,
      'series-c': 20
    };
    
    score += fundingScores[formData.fundingStage] || 0;
    
    // Team size impact - larger teams can be positive up to a point
    if (formData.teamSize >= 2 && formData.teamSize <= 5) {
      score += 10;
    } else if (formData.teamSize > 5 && formData.teamSize <= 10) {
      score += 5;
    } else if (formData.teamSize > 10) {
      score -= 5; // Too large too early can be negative
    }
    
    // Revenue and growth impact
    if (formData.monthlyRevenue > 10000) score += 15;
    if (formData.growth > 10) score += 15;
    
    // Burn rate impact - higher burn rates are riskier
    if (formData.burnRate > formData.monthlyRevenue) {
      score -= 20;
    }
    
    // Business model impact
    const modelScores = {
      'saas': 10,
      'marketplace': 5,
      'ecommerce': 0,
      'hardware': -5
    };
    
    score += modelScores[formData.businessModel] || 0;
    
    // Market size impact
    const marketScores = {
      'small': 0,
      'medium': 5,
      'large': 10
    };
    
    score += marketScores[formData.marketSize] || 0;
    
    // Competition impact
    const competitionScores = {
      'low': 10,
      'medium': 5,
      'high': -5
    };
    
    score += competitionScores[formData.competition] || 0;
    
    // Normalize to 0-100 range
    return Math.max(0, Math.min(100, score));
  };
  
  const successScore = calculateSuccessScore();
  const successCategory = 
    successScore >= 80 ? 'High' : 
    successScore >= 60 ? 'Medium' : 
    'Low';

  const getScoreColor = () => {
    if (successScore >= 80) return 'text-green-600';
    if (successScore >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };
  
  const getProgressColor = () => {
    if (successScore >= 80) return 'bg-green-500';
    if (successScore >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Startup Success Predictor
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Input your startup's details to get an AI-powered prediction of your venture's success probability.
          </p>
        </div>
        
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            {!showResults ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      <option value="tech">Technology</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="retail">Retail</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="education">Education</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="fundingStage" className="block text-sm font-medium text-gray-700">
                      Funding Stage
                    </label>
                    <select
                      id="fundingStage"
                      name="fundingStage"
                      value={formData.fundingStage}
                      onChange={handleChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      <option value="bootstrapped">Bootstrapped</option>
                      <option value="pre-seed">Pre-seed</option>
                      <option value="seed">Seed</option>
                      <option value="series-a">Series A</option>
                      <option value="series-b">Series B</option>
                      <option value="series-c">Series C+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700">
                      Team Size
                    </label>
                    <input
                      type="number"
                      name="teamSize"
                      id="teamSize"
                      min="1"
                      value={formData.teamSize}
                      onChange={handleChange}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="monthlyRevenue" className="block text-sm font-medium text-gray-700">
                      Monthly Revenue ($)
                    </label>
                    <input
                      type="number"
                      name="monthlyRevenue"
                      id="monthlyRevenue"
                      min="0"
                      value={formData.monthlyRevenue}
                      onChange={handleChange}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="burnRate" className="block text-sm font-medium text-gray-700">
                      Monthly Burn Rate ($)
                    </label>
                    <input
                      type="number"
                      name="burnRate"
                      id="burnRate"
                      min="0"
                      value={formData.burnRate}
                      onChange={handleChange}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="growth" className="block text-sm font-medium text-gray-700">
                      Monthly Growth Rate (%)
                    </label>
                    <input
                      type="number"
                      name="growth"
                      id="growth"
                      min="0"
                      max="100"
                      value={formData.growth}
                      onChange={handleChange}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                      Primary Location
                    </label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      <option value="us">United States</option>
                      <option value="europe">Europe</option>
                      <option value="asia">Asia</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="businessModel" className="block text-sm font-medium text-gray-700">
                      Business Model
                    </label>
                    <select
                      id="businessModel"
                      name="businessModel"
                      value={formData.businessModel}
                      onChange={handleChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      <option value="saas">SaaS</option>
                      <option value="marketplace">Marketplace</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="hardware">Hardware</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="marketSize" className="block text-sm font-medium text-gray-700">
                      Target Market Size
                    </label>
                    <select
                      id="marketSize"
                      name="marketSize"
                      value={formData.marketSize}
                      onChange={handleChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      <option value="small">Small (Under $1B)</option>
                      <option value="medium">Medium ($1B - $10B)</option>
                      <option value="large">Large (Over $10B)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="competition" className="block text-sm font-medium text-gray-700">
                      Competition Level
                    </label>
                    <select
                      id="competition"
                      name="competition"
                      value={formData.competition}
                      onChange={handleChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={processing}
                    className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${processing ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {processing ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Analyzing...
                      </>
                    ) : (
                      'Generate Prediction'
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900">Startup Success Analysis</h2>
                  <p className="mt-1 text-sm text-gray-500">Based on your input data and our predictive model</p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex flex-col items-center mb-6">
                    <div className="text-5xl font-bold mb-2 transition-all duration-700 ease-in-out transform scale-100 animate-pulse-once">
                      <span className={getScoreColor()}>{successScore}%</span>
                    </div>
                    <div className="text-xl font-medium text-gray-900">
                      {successCategory} Success Probability
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                      <div 
                        className={`${getProgressColor()} h-2.5 rounded-full`} 
                        style={{ width: `${successScore}%`, transition: 'width 1s ease-out' }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Key Strengths</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                        {formData.industry === 'tech' && (
                          <li>Tech industry has strong growth potential</li>
                        )}
                        {formData.fundingStage === 'series-a' && (
                          <li>Series A funding provides solid financial foundation</li>
                        )}
                        {formData.teamSize >= 3 && formData.teamSize <= 6 && (
                          <li>Optimal team size for early execution</li>
                        )}
                        {formData.monthlyRevenue > formData.burnRate && (
                          <li>Positive cash flow dynamics</li>
                        )}
                        {formData.growth > 10 && (
                          <li>Strong growth trajectory</li>
                        )}
                        {formData.businessModel === 'saas' && (
                          <li>SaaS model offers scalable revenue streams</li>
                        )}
                        {formData.marketSize === 'large' && (
                          <li>Large addressable market</li>
                        )}
                        {formData.competition === 'low' && (
                          <li>Limited competition in the space</li>
                        )}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Potential Risks</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                        {formData.burnRate > formData.monthlyRevenue && (
                          <li>High burn rate relative to revenue</li>
                        )}
                        {formData.teamSize < 2 && (
                          <li>Small team may limit execution capacity</li>
                        )}
                        {formData.teamSize > 10 && formData.monthlyRevenue < 50000 && (
                          <li>Team size may be too large for current stage</li>
                        )}
                        {formData.growth < 5 && (
                          <li>Growth rate below market expectations</li>
                        )}
                        {formData.competition === 'high' && (
                          <li>Highly competitive market landscape</li>
                        )}
                        {formData.businessModel === 'hardware' && (
                          <li>Hardware businesses face scaling challenges</li>
                        )}
                        {formData.fundingStage === 'bootstrapped' && formData.burnRate > 10000 && (
                          <li>Limited funding may constrain growth</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-indigo-50 rounded-lg border border-indigo-100">
                  <h3 className="font-medium text-indigo-900 mb-3">Recommendations</h3>
                  <ul className="space-y-3">
                    {successScore < 70 && formData.burnRate > formData.monthlyRevenue && (
                      <li className="flex">
                        <svg className="h-6 w-6 text-indigo-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Consider optimizing your burn rate to extend runway</span>
                      </li>
                    )}
                    {formData.growth < 10 && (
                      <li className="flex">
                        <svg className="h-6 w-6 text-indigo-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Focus on strategies to accelerate growth rate</span>
                      </li>
                    )}
                    {formData.teamSize < 3 && (
                      <li className="flex">
                        <svg className="h-6 w-6 text-indigo-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Consider expanding your core team to cover key functions</span>
                      </li>
                    )}
                    {formData.competition === 'high' && (
                      <li className="flex">
                        <svg className="h-6 w-6 text-indigo-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Develop a clear differentiation strategy in your competitive market</span>
                      </li>
                    )}
                    <li className="flex">
                      <svg className="h-6 w-6 text-indigo-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Schedule a detailed analysis with our startup advisors</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => setShowResults(false)}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Modify Inputs
                  </button>
                  <button
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Download Full Report
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupPredictorModel;