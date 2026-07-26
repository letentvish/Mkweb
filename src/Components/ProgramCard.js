import React, { useState, useEffect } from 'react';

const ProgramCard = ({ 
  image, 
  title, 
  description, 
  objective, 
  outcomes = [], 
  duration, 
  format,
  targetAudience 
}) => {
  const [hoveredOutcome, setHoveredOutcome] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full">
      {/* Subtle background particles */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-400/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Responsive Card Container */}
      <div className={`relative bg-gradient-to-br from-gray-900/98 via-gray-800/98 to-gray-900/98 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-yellow-400/20 shadow-xl transition-all duration-700 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        
        {/* Header Section */}
        <div className="relative p-6 border-b border-gray-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-yellow-400/30">
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                  {title}
                </h1>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="flex items-center text-gray-400 text-sm">
                    <svg className="w-4 h-4 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                    {duration}
                  </span>
                  <span className="flex items-center text-gray-400 text-sm">
                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    {format}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Stats Mini Cards */}
            <div className="flex space-x-3">
              <div className="text-center bg-yellow-400/10 rounded-lg px-3 py-2">
                <div className="text-lg font-bold text-yellow-400">95%</div>
                <div className="text-xs text-gray-400">Success</div>
              </div>
              <div className="text-center bg-blue-400/10 rounded-lg px-3 py-2">
                <div className="text-lg font-bold text-blue-400">4.9★</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-6 p-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Description */}
            <div>
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-yellow-400">Overview</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {description}
              </p>
            </div>
            
            {/* Objective */}
            <div>
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-blue-400">Objective</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {objective}
              </p>
            </div>
          </div>
          
          {/* Right Column - Outcomes */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21C9 22.1 9.9 23 11 23H13C14.1 23 15 22.1 15 21V20H9V21M12 2C8.14 2 5 5.14 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.14 15.86 2 12 2Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-purple-400">Key Outcomes</h3>
            </div>
            
            <div className="space-y-3">
              {outcomes.map((outcome, index) => (
                <div 
                  key={index} 
                  className={`group flex items-start p-3 bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-lg border border-gray-600/20 hover:border-yellow-400/40 transition-all duration-300 cursor-pointer ${
                    hoveredOutcome === index ? 'bg-gradient-to-r from-yellow-400/10 to-blue-400/10' : ''
                  }`}
                  onMouseEnter={() => setHoveredOutcome(index)}
                  onMouseLeave={() => setHoveredOutcome(null)}
                >
                  {/* Number Circle */}
                  <div className={`flex-shrink-0 mr-3 mt-0.5 transition-all duration-300 ${
                    hoveredOutcome === index ? 'scale-110' : ''
                  }`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      hoveredOutcome === index 
                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black' 
                        : 'bg-gradient-to-r from-gray-700 to-gray-600 text-yellow-400'
                    }`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Outcome Text */}
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    hoveredOutcome === index ? 'text-white' : 'text-gray-300'
                  }`}>
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="px-6 py-4 bg-gray-800/50 border-t border-gray-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <span className="text-gray-300 text-sm font-medium">{targetAudience}</span>
            </div>
            
            <div className="text-right">
              <div className="text-yellow-400 font-semibold text-sm">Ready to Transform?</div>
              <div className="text-gray-400 text-xs">Join 500+ leaders who've succeeded</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;