import React, { useState } from 'react';
import InputForm from './components/InputForm';
import Dashboard from './components/Dashboard';
import { FormData } from './types';

function App() {
  const [currentView, setCurrentView] = useState<'form' | 'dashboard'>('form');
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleAnalyze = (data: FormData) => {
    setFormData(data);
    setCurrentView('dashboard');
  };

  const handleBackToForm = () => {
    setCurrentView('form');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-violet-200/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-rose-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-blue-200/25 to-cyan-300/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-gradient-to-br from-emerald-200/30 to-teal-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {currentView === 'form' ? (
          <InputForm onAnalyze={handleAnalyze} />
        ) : (
          <Dashboard formData={formData!} onBack={handleBackToForm} />
        )}
      </div>
    </div>
  );
}

export default App;