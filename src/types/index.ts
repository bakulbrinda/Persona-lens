export interface FormData {
  customerName: string;
  linkedinUrl: string;
  socialMedia: {
    twitter: string;
    facebook: string;
    instagram: string;
    youtube: string;
  };
  callTranscript: string;
  emailChain: string;
  icp: string;
  personalNote: string;
}

export interface PersonaResults {
  designation: string;
  suggestedIcp: string;
  discAnalysis: {
    dominance: number;
    influence: number;
    steadiness: number;
    conscientiousness: number;
  };
  sentimentAnalysis: {
    happy: number;
    neutral: number;
    positive: number;
    negative: number;
  };
  dos: string[];
  donts: string[];
  overallScore: number;
  confidence: number;
}