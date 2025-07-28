import React from 'react';
import { ArrowLeft, User, Target, Brain, Heart, CheckCircle, XCircle, BarChart3, TrendingUp } from 'lucide-react';
import { FormData } from '../types';
import PersonaOverview from './dashboard/PersonaOverview';
import DiscAnalysis from './dashboard/DiscAnalysis';
import SentimentAnalysis from './dashboard/SentimentAnalysis';
import DosAndDonts from './dashboard/DosAndDonts';
import OverallScorecard from './dashboard/OverallScorecard';

interface DashboardProps {
  formData: FormData;
  onBack: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ formData, onBack }) => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 text-teal-600 hover:text-teal-700 font-medium rounded-lg hover:bg-teal-50 transition-all duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Form
        </button>
        
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            Persona Analysis Results
          </h1>
          <p className="text-gray-600 mt-2">for {formData.customerName}</p>
        </div>
        
        <div className="w-24"></div> {/* Spacer for alignment */}
      </div>

      {/* Dashboard Grid */}
      <div className="grid gap-8">
        {/* Row 1: Persona Overview */}
        <PersonaOverview formData={formData} />
        
        {/* Row 2: DISC and Sentiment Analysis */}
        <div className="grid lg:grid-cols-2 gap-8">
          <DiscAnalysis />
          <SentimentAnalysis />
        </div>
        
        {/* Row 3: Do's and Don'ts */}
        <DosAndDonts />
        
        {/* Row 4: Overall Scorecard */}
        <OverallScorecard />
      </div>
    </div>
  );
};

export default Dashboard;