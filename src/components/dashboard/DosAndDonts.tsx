import React from 'react';
import { CheckCircle, XCircle, ThumbsUp, ThumbsDown } from 'lucide-react';

const DosAndDonts: React.FC = () => {
  const dos = [
    "Focus on long-term partnership benefits and ROI",
    "Provide detailed case studies and success metrics",
    "Allow time for thorough evaluation and decision-making",
    "Emphasize quality, reliability, and proven track record",
    "Schedule follow-up meetings with structured agendas"
  ];

  const donts = [
    "Don't rush the decision-making process",
    "Avoid high-pressure sales tactics or urgency",
    "Don't overlook their need for detailed documentation",
    "Avoid making promises without concrete evidence",
    "Don't ignore their preference for gradual implementation"
  ];

  return (
    <div className="bg-gradient-to-br from-white/95 via-green-50/20 to-red-50/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 w-40 h-40 bg-gradient-to-br from-green-200/30 to-red-200/30 rounded-full -translate-y-20 -translate-x-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-emerald-200/25 to-rose-200/25 rounded-full translate-y-16 translate-x-16 blur-2xl"></div>
      
      <div className="relative">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent mb-10 text-center flex items-center justify-center gap-3">
          <div className="p-3 bg-gradient-to-br from-green-500 to-red-500 rounded-xl shadow-lg">
            <ThumbsUp className="w-6 h-6 text-white" />
          </div>
          Engagement Guidelines
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Do's Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-700">Do's</h3>
            </div>
            
            <div className="space-y-3">
              {dos.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-100 hover:bg-green-100 transition-colors duration-200 group"
                >
                  <div className="p-1 bg-green-200 rounded-full mt-0.5 group-hover:bg-green-300 transition-colors duration-200">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Don'ts Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-100 rounded-xl">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-red-700">Don'ts</h3>
            </div>
            
            <div className="space-y-3">
              {donts.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100 hover:bg-red-100 transition-colors duration-200 group"
                >
                  <div className="p-1 bg-red-200 rounded-full mt-0.5 group-hover:bg-red-300 transition-colors duration-200">
                    <XCircle className="w-4 h-4 text-red-600" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DosAndDonts;