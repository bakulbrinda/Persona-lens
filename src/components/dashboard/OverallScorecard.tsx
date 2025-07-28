import React from 'react';
import { BarChart3, TrendingUp, Award, Target } from 'lucide-react';

const OverallScorecard: React.FC = () => {
  const scoreData = [
    { label: 'Engagement Level', score: 85, color: '#10B981', icon: TrendingUp },
    { label: 'Communication Style Match', score: 72, color: '#3B82F6', icon: Target },
    { label: 'Decision-Making Speed', score: 45, color: '#F59E0B', icon: Award },
    { label: 'Sentiment Confidence', score: 91, color: '#8B5CF6', icon: BarChart3 }
  ];

  const overallScore = Math.round(scoreData.reduce((sum, item) => sum + item.score, 0) / scoreData.length);

  return (
    <div className="bg-gradient-to-br from-white/95 via-purple-50/30 to-blue-50/30 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-200/40 to-blue-200/40 rounded-full -translate-y-24 translate-x-24 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-indigo-200/30 to-violet-200/30 rounded-full translate-y-18 -translate-x-18 blur-2xl"></div>
      
      <div className="relative">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-10 flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl shadow-lg">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          Overall Scorecard
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Score Breakdown */}
          <div className="space-y-6">
            {scoreData.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.label} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <div 
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${item.color}20` }}
                      >
                        <IconComponent 
                          className="w-4 h-4" 
                          style={{ color: item.color }}
                        />
                      </div>
                      <span className="font-medium text-gray-800">{item.label}</span>
                    </div>
                    <span className="text-lg font-bold text-gray-700">{item.score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden group-hover:animate-pulse" 
                      style={{ 
                        backgroundColor: item.color, 
                        width: `${item.score}%` 
                      }}
                    >
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Overall Score Circle */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-48 h-48 mb-6">
              {/* Background circle */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none" 
                  stroke="#e5e7eb" 
                  strokeWidth="8"
                />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none" 
                  stroke="url(#gradient)" 
                  strokeWidth="8"
                  strokeDasharray={`${overallScore * 2.827} 282.7`}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-4xl font-bold text-gray-800 mb-1">{overallScore}%</div>
                <div className="text-sm text-gray-600">Overall Score</div>
              </div>
            </div>
            
            {/* Confidence Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full border border-green-200">
              <Award className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">High Confidence Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallScorecard;