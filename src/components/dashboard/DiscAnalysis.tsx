import React from 'react';
import { Brain } from 'lucide-react';

const DiscAnalysis: React.FC = () => {
  // Mock DISC data
  const discData = {
    dominance: 35,
    influence: 45,
    steadiness: 60,
    conscientiousness: 25
  };

  const discColors = {
    dominance: '#EF4444', // Red
    influence: '#F59E0B', // Yellow
    steadiness: '#10B981', // Green
    conscientiousness: '#3B82F6' // Blue
  };

  const discDescriptions = {
    dominance: "Direct, results-oriented, and decisive in approach.",
    influence: "Enthusiastic, optimistic, and people-focused communicator.",
    steadiness: "Patient, loyal, and prefers stable work environments.",
    conscientiousness: "Analytical, detail-oriented, and quality-focused."
  };

  const total = Object.values(discData).reduce((sum, value) => sum + value, 0);

  return (
    <div className="bg-gradient-to-br from-white/95 via-red-50/30 to-orange-50/30 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-200/40 to-orange-200/40 rounded-full -translate-y-16 translate-x-16 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-200/30 to-amber-200/30 rounded-full translate-y-12 -translate-x-12 blur-xl"></div>
      
      <div className="relative">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl shadow-lg">
            <Brain className="w-6 h-6 text-white" />
          </div>
          DISC Personality Analysis
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Pie Chart Representation */}
          <div className="flex justify-center">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle cx="50" cy="50" r="45" fill="none" stroke="#f1f5f9" strokeWidth="10" />
                
                {/* DISC segments */}
                {Object.entries(discData).map(([key, value], index) => {
                  const percentage = (value / total) * 100;
                  const strokeDasharray = `${percentage * 2.827} 282.7`; // 2.827 = circumference/100
                  const rotation = Object.entries(discData)
                    .slice(0, index)
                    .reduce((acc, [, val]) => acc + (val / total) * 360, 0);
                  
                  return (
                    <circle
                      key={key}
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke={discColors[key as keyof typeof discColors]}
                      strokeWidth="10"
                      strokeDasharray={strokeDasharray}
                      strokeLinecap="round"
                      transform={`rotate(${rotation} 50 50)`}
                      className="transition-all duration-700 hover:stroke-width-12"
                    />
                  );
                })}
              </svg>
              
              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Highest</p>
                  <p className="text-lg font-bold text-gray-800">Steadiness</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* DISC Breakdown */}
          <div className="space-y-4">
            {Object.entries(discData).map(([key, value]) => {
              const keyFormatted = key.charAt(0).toUpperCase() + key.slice(1);
              const color = discColors[key as keyof typeof discColors];
              
              return (
                <div key={key} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-800 flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: color }}
                      ></div>
                      {keyFormatted}
                    </span>
                    <span className="text-sm text-gray-600">{value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-700 ease-out" 
                      style={{ 
                        backgroundColor: color, 
                        width: `${value}%` 
                      }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-600">
                    {discDescriptions[key as keyof typeof discDescriptions]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscAnalysis;