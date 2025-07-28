import React, { useState } from 'react';
import { Brain, User, Link, Twitter, Facebook, Instagram, Youtube, Mic, Mail, FileText, Sparkles } from 'lucide-react';
import { FormData } from '../types';

interface InputFormProps {
  onAnalyze: (data: FormData) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onAnalyze }) => {
  const [formData, setFormData] = useState<FormData>({
    customerName: '',
    linkedinUrl: '',
    socialMedia: {
      twitter: '',
      facebook: '',
      instagram: '',
      youtube: ''
    },
    callTranscript: '',
    emailChain: '',
    icp: '',
    personalNote: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAnalyze(formData);
  };

  const handleSocialMediaChange = (platform: keyof FormData['socialMedia'], value: string) => {
    setFormData(prev => ({
      ...prev,
      socialMedia: {
        ...prev.socialMedia,
        [platform]: value
      }
    }));
  };

  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Header Section */}
      <div className="text-center mb-12 relative">
        {/* Floating background elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '2s' }}></div>
        
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 rounded-3xl mb-6 shadow-2xl relative overflow-hidden">
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 -translate-x-full animate-pulse"></div>
          <Brain className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-6xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-pulse">
          Persona-lens
        </h1>
        <div className="w-40 h-1.5 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-6 shadow-lg"></div>
        
        {/* Hero Image Placeholder */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-45 translate-x-full animate-pulse"></div>
            <div className="text-4xl">🧠✨</div>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-gradient-to-br from-white/90 via-white/80 to-purple-50/50 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8 relative overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-violet-500 via-purple-500 via-pink-500 to-orange-400 animate-pulse"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-green-200/30 to-teal-200/30 rounded-full blur-lg"></div>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Customer Information Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                <User className="w-6 h-6 text-white" />
              </div>
              Customer Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Customer Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    type="text"
                    value={formData.customerName}
                    onChange={(e) => setFormData(prev => ({ ...prev, customerName: e.target.value }))}
                    placeholder="Enter customer name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-gradient-to-r from-gray-50 to-indigo-50/30 focus:bg-white shadow-sm hover:shadow-md"
                    required
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile URL</label>
                <div className="relative">
                  <Link className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                  <input
                    type="url"
                    value={formData.linkedinUrl}
                    onChange={(e) => setFormData(prev => ({ ...prev, linkedinUrl: e.target.value }))}
                    placeholder="https://linkedin.com/in/..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-gradient-to-r from-gray-50 to-purple-50/30 focus:bg-white shadow-sm hover:shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              Social Media Profiles
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Twitter Profile</label>
                <div className="relative">
                  <Twitter className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-sky-500 transition-colors" />
                  <input
                    type="url"
                    value={formData.socialMedia.twitter}
                    onChange={(e) => handleSocialMediaChange('twitter', e.target.value)}
                    placeholder="https://twitter.com/..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all duration-200 bg-gradient-to-r from-gray-50 to-sky-50/30 focus:bg-white shadow-sm hover:shadow-md"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Facebook Profile</label>
                <div className="relative">
                  <Facebook className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="url"
                    value={formData.socialMedia.facebook}
                    onChange={(e) => handleSocialMediaChange('facebook', e.target.value)}
                    placeholder="https://facebook.com/..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gradient-to-r from-gray-50 to-blue-50/30 focus:bg-white shadow-sm hover:shadow-md"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Instagram Profile</label>
                <div className="relative">
                  <Instagram className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-rose-500 transition-colors" />
                  <input
                    type="url"
                    value={formData.socialMedia.instagram}
                    onChange={(e) => handleSocialMediaChange('instagram', e.target.value)}
                    placeholder="https://instagram.com/..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 bg-gradient-to-r from-gray-50 to-rose-50/30 focus:bg-white shadow-sm hover:shadow-md"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">YouTube Channel</label>
                <div className="relative">
                  <Youtube className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-red-600 transition-colors" />
                  <input
                    type="url"
                    value={formData.socialMedia.youtube}
                    onChange={(e) => handleSocialMediaChange('youtube', e.target.value)}
                    placeholder="https://youtube.com/..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-gradient-to-r from-gray-50 to-red-50/30 focus:bg-white shadow-sm hover:shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Communication Data Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              Communication Data
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Call Transcript</label>
                <div className="relative">
                  <Mic className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                  <textarea
                    value={formData.callTranscript}
                    onChange={(e) => setFormData(prev => ({ ...prev, callTranscript: e.target.value }))}
                    placeholder="Paste call transcript here..."
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-gradient-to-br from-gray-50 to-emerald-50/30 focus:bg-white resize-none shadow-sm hover:shadow-md"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Chain</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-cyan-500 transition-colors" />
                  <textarea
                    value={formData.emailChain}
                    onChange={(e) => setFormData(prev => ({ ...prev, emailChain: e.target.value }))}
                    placeholder="Paste email conversations here..."
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-gradient-to-br from-gray-50 to-cyan-50/30 focus:bg-white resize-none shadow-sm hover:shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              Additional Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">ICP Category</label>
                <select
                  value={formData.icp}
                  onChange={(e) => setFormData(prev => ({ ...prev, icp: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-gradient-to-r from-gray-50 to-amber-50/30 focus:bg-white shadow-sm hover:shadow-md"
                  required
                >
                  <option value="">Select ICP Category</option>
                  <option value="L&D">L&D</option>
                  <option value="CHRO">CHRO</option>
                  <option value="TA">TA</option>
                  <option value="CEO/COO">CEO/COO</option>
                  <option value="Recruiter">Recruiter</option>
                  <option value="HRBP">HRBP</option>
                  <option value="Talent Mobility Lead">Talent Mobility Lead</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Personal Notes</label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                  <textarea
                    value={formData.personalNote}
                    onChange={(e) => setFormData(prev => ({ ...prev, personalNote: e.target.value }))}
                    placeholder="Add any personal observations..."
                    rows={3}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-gradient-to-br from-gray-50 to-orange-50/30 focus:bg-white resize-none shadow-sm hover:shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="group bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 hover:from-violet-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold px-16 py-5 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <Brain className="w-6 h-6 group-hover:animate-pulse" />
              Analyze Persona
              <div className="w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputForm;