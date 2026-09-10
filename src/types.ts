export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  highlights: string[];
  keyMetrics: { label: string; value: string }[];
  tags: string[];
}

export interface CompetencyItem {
  id: string;
  title: string;
  iconName: string;
  summary: string;
  skills: string[];
  growthMetric?: string;
  color: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  years: string;
  description: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  badgeType: 'google' | 'coursera' | 'data';
}

export interface LanguageItem {
  name: string;
  level: string;
  percent: number;
}

export interface CustomMediaAssets {
  avatarUrl: string | null;
  videoUrl: string | null;
  heroTagline: string;
}
