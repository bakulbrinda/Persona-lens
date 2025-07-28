import React from 'react';
import { User, Target, Badge } from 'lucide-react';
import { FormData } from '../../types';

interface PersonaOverviewProps {
  formData: FormData;
}

const PersonaOverview: React.FC<PersonaOverviewProps> = ({ formData }) => {
  // Mock data - in real app, this would come from API
  const currentDesignation = "Senior HR Director";
  const suggestedIcp = formData.icp || "CHRO";
  
  // Mock LinkedIn profile photo URL - in real app, this would be fetched from LinkedIn API
  const linkedInPhotoUrl = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop";

  return (
    <div className="bg-gradient-to-br from-white/95 via-indigo-50/50 to-purple-50/50 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-violet-200/40 to-purple-200/40 rounded-full -translate-y-20 translate-x-20 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-200/30 to-rose-200/30 rounded-full translate-y-16 -translate-x-16 blur-xl"></div>
      
      <div className="relative">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
            <User className="w-6 h-6 text-white" />
          </div>
          Persona Overview
        </h2>
        
        {/* Main Customer Profile Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl border-4 border-white relative">
              <img 
                src={linkedInPhotoUrl} 
                alt={`${formData.customerName}'s profile`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Fallback initials */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center" style={{ display: 'none' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform rotate-45 translate-x-full animate-pulse"></div>
                <span className="text-3xl font-bold text-white relative z-10">
                  {formData.customerName.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
            {/* Animated ring around photo */}
            <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-violet-400 to-purple-500 animate-pulse"></div>
          </div>
          
          <h1 className="text-5xl font-black bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 tracking-tight">
            {formData.customerName}
          </h1>
          <p className="text-xl text-gray-600 font-medium">Customer Profile Analysis</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Current Designation */}
          <div className="text-center bg-gradient-to-br from-emerald-50/80 to-teal-50/80 rounded-2xl p-6 border border-emerald-100">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform rotate-45 translate-x-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <Badge className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-gray-800 text-xl mb-2">{currentDesignation}</h3>
            <p className="text-sm text-emerald-600 font-medium">Current Role</p>
          </div>
          
          {/* Suggested ICP */}
          <div className="text-center bg-gradient-to-br from-pink-50/80 to-rose-50/80 rounded-2xl p-6 border border-pink-100">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform rotate-45 translate-x-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-gray-800 text-xl mb-2">{suggestedIcp}</h3>
            <p className="text-sm text-pink-600 font-medium">Suggested ICP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonaOverview;