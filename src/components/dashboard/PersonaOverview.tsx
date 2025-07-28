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
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Customer Profile */}
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform rotate-45 translate-x-full animate-pulse"></div>
              <span className="text-2xl font-bold text-white">
                {formData.customerName.charAt(0).toUpperCase()}
              </span>
            </div>
            <h3 className="font-semibold text-gray-800 text-lg">{formData.customerName}</h3>
            <p className="text-sm text-gray-600 mt-1">Customer Profile</p>
          </div>
          
          {/* Current Designation */}
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform rotate-45 translate-x-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <Badge className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 text-lg">{currentDesignation}</h3>
            <p className="text-sm text-gray-600 mt-1">Current Role</p>
          </div>
          
          {/* Suggested ICP */}
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform rotate-45 translate-x-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 text-lg">{suggestedIcp}</h3>
            <p className="text-sm text-gray-600 mt-1">Suggested ICP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonaOverview;