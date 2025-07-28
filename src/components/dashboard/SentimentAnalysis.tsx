import React from 'react';
import { Heart, Smile, Meh, Frown } from 'lucide-react';

const SentimentAnalysis: React.FC = () => {
  // Mock sentiment data
  const sentimentData = {
    positive: 65,
    neutral: 25,
    negative: 10
  };

  const sentimentDetails = [
    { label: 'Happy', value: 45, icon: Smile, color: '#10B981' },
    { label: 'Neutral', value: 25, icon: Meh, color: '#6B7280' },
    { label: 'Concerned', value: 20, icon: Frown, color: '#F59E0B' },
    { label: 'Frustrated', value: 10, icon: Frown, color: '#EF4444' }
  ];

  return (
    <div className="bg-gradient-to-br from-white/95 via-green-50/30 to-teal-50/30 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-green-200/40 to-teal-200/40 rounded-full translate-y-14 -translate-x-14 blur-2xl"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-200/30 to-cyan-200/30 rounded-full -translate-y-12 translate-x-12 blur-xl"></div>
      
      <div className="relative">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl shadow-lg">
            <Heart className="w-6 h-6 text-white" />
          </div>
          Sentiment Analysis
        </h2>
        
        {/* Overall Sentiment Meter */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-gray-700">Overall Sentiment</span>
            <span className="text-sm text-gray-600">Positive ({sentimentData.positive}%)</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-full"></div>
            <div 
              className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-700 ease-out"
              style={{ width: `${100 - sentimentData.positive}%` }}
            ></div>
            {/* Indicator */}
            <div 
              className="absolute top-1 w-2 h-2 bg-gray-800 rounded-full transition-all duration-700 ease-out"
              style={{ left: `${sentimentData.positive - 1}%` }}
            ></div>
          </div>
        </div>
        
        {/* Detailed Sentiment Breakdown */}
        <div className="grid grid-cols-2 gap-4">
          {sentimentDetails.map((sentiment) => {
            const IconComponent = sentiment.icon;
            return (
              <div key={sentiment.label} className="bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div 
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${sentiment.color}20` }}
                    >
                      <IconComponent 
                        className="w-4 h-4" 
                        style={{ color: sentiment.color }}
                      />
                    </div>
                    <span className="font-medium text-gray-800">{sentiment.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-600">{sentiment.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all duration-700 ease-out" 
                    style={{ 
                      backgroundColor: sentiment.color, 
                      width: `${sentiment.value}%` 
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Sentiment Summary */}
        <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl border border-green-200">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Analysis Summary:</span> The customer shows predominantly positive sentiment with high engagement levels. They express enthusiasm about solutions but may have some concerns about implementation timelines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SentimentAnalysis;