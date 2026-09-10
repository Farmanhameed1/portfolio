import {
  ExperienceItem,
  CompetencyItem,
  EducationItem,
  CertificationItem,
  LanguageItem
} from '../types';

export const PERSONAL_INFO = {
  name: 'Muhammad Farman',
  headline: 'Senior Digital Marketing Manager',
  subHeadline: 'Performance & Narrative Strategist',
  location: 'Islamabad, Pakistan',
  phone: '+923456240550',
  email: 'farmanhameed10@gmail.com',
  linkedin: 'https://linkedin.com/in/farman-hameed',
  linkedinDisplay: 'linkedin.com/in/farman-hameed',
  portfolioUrl: 'https://muhammad-farman.vercel.app/',
  portfolioDisplay: 'muhammad-farman.vercel.app',
  summary:
    'Performance-driven Senior Digital Marketing Manager with 12+ years of experience leveraging a strong academic foundation in Linguistics and Communication to build high-converting brand narratives. Expert in bridging the gap between complex data analytics and human-centric storytelling. Proven success in managing multimillion-dollar budgets and driving measurable pipeline growth for global organizations including SWAFOO and HYNER Technologies. Specialized in Google Ads, GA4, and Generative Engine Optimization (GEO).',
  stats: [
    { label: 'Years of Experience', value: '12+' },
    { label: 'Avg. Conversion Lift', value: '+30%' },
    { label: 'PPC Revenue Generated', value: '$500K+' },
    { label: 'Managed Project Value', value: '$1M+' },
    { label: 'Organic Traffic Lift', value: '+40%' },
    { label: 'Client Satisfaction', value: '95%' },
  ]
};

export const CORE_COMPETENCIES: CompetencyItem[] = [
  {
    id: 'narrative',
    title: 'Narrative Strategy',
    iconName: 'PenTool',
    summary: 'Crafting psychological storytelling frameworks that transform cold audiences into loyal, high-LTV brand advocates.',
    skills: ['Ad-Copy Optimization', 'Consumer Psychology', 'Semantic Search Analysis', 'Tone & Archetype Alignment'],
    growthMetric: '+20% CTR Lift',
    color: 'from-blue-500/20 via-indigo-500/10 to-transparent'
  },
  {
    id: 'performance',
    title: 'Performance Marketing',
    iconName: 'TrendingUp',
    summary: 'Data-driven paid customer acquisition across global competitive verticals with strict ROAS discipline.',
    skills: ['Paid Search (PPC)', 'Performance Max (PMax)', 'YouTube Ads', 'LinkedIn B2B Advertising'],
    growthMetric: '$500K+ Revenue',
    color: 'from-emerald-500/20 via-teal-500/10 to-transparent'
  },
  {
    id: 'demand-gen',
    title: 'Demand Generation',
    iconName: 'Layers',
    summary: 'Architecting full-funnel architectures, account-based segmentation, and high-velocity lead pipelines.',
    skills: ['Funnel Optimization', 'ABM Segmentation', 'Lifecycle Management', 'MQL-to-SQL Velocity'],
    growthMetric: '+30% B2B Leads',
    color: 'from-purple-500/20 via-pink-500/10 to-transparent'
  },
  {
    id: 'seo-geo',
    title: 'Technical SEO & GEO',
    iconName: 'Search',
    summary: 'Pioneering Generative Engine Optimization (GEO) alongside technical crawlability and semantic intent.',
    skills: ['GEO (Generative Engine Optimization)', 'On-Page / Off-Page Audits', 'Site Speed & Core Web Vitals', 'Crawl Budget Architecture'],
    growthMetric: '+35% Organic Traffic',
    color: 'from-amber-500/20 via-orange-500/10 to-transparent'
  },
  {
    id: 'data-intel',
    title: 'Data Intelligence',
    iconName: 'BarChart3',
    summary: 'Unifying multi-channel attribution and transforming raw clicks into boardroom-ready visual intelligence.',
    skills: ['GA4 (Google Analytics 4)', 'Looker Studio', 'Tableau Dashboards', 'Salesforce Datorama'],
    growthMetric: 'Multi-Million Budget Oversight',
    color: 'from-cyan-500/20 via-blue-500/10 to-transparent'
  },
  {
    id: 'marketing-auto',
    title: 'Marketing Automation',
    iconName: 'Cpu',
    summary: 'Building automated nurturing loops and CRM triggers that capture value at every stage of the lifecycle.',
    skills: ['HubSpot Architecture', 'CRM Synchronization', 'Lifecycle Email Marketing', 'Behavioral Drip Sequencing'],
    growthMetric: '25% Timeline Reductions',
    color: 'from-violet-500/20 via-indigo-500/10 to-transparent'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'swafoo',
    role: 'Senior Digital Marketing Manager',
    company: 'SWAFOO',
    location: 'New York, USA (Remote)',
    period: 'September 2022 – Present',
    isCurrent: true,
    highlights: [
      'Directed global digital marketing strategies, boosting conversion rates by 30% through the strategic fusion of AI-driven creatives and linguistic precision.',
      'Increased organic traffic by 35% by aligning technical SEO with high-intent content strategies and semantic topical clusters.',
      'Optimized performance media assets across paid channels, resulting in an immediate 20% improvement in Click-through Rate (CTR).',
      'Partnered closely with Sales and Business Intelligence teams to synchronize account-based marketing (ABM) pipelines with core revenue goals.'
    ],
    keyMetrics: [
      { label: 'Conversion Rate', value: '+30%' },
      { label: 'Organic Traffic', value: '+35%' },
      { label: 'CTR Improvement', value: '+20%' }
    ],
    tags: ['Google Ads', 'GA4', 'GEO', 'ABM', 'Linguistic Strategy', 'AI Creatives']
  },
  {
    id: 'hyner',
    role: 'IT & Digital Marketing Manager',
    company: 'HYNER Technologies',
    location: 'Islamabad / China',
    period: 'June 2021 – August 2022',
    highlights: [
      'Engineered a comprehensive website redesign and technical restructuring that reinforced organic search traffic by 40%.',
      'Generated $500K in verified incremental revenue through targeted paid search (PPC) and automated multi-touch email funnels.',
      'Elevated overall ROI by 25% on annual advertising budgets exceeding $100K.',
      'Spearheaded enterprise lead conversion initiatives, achieving a 30% lift in qualified B2B inquiries.'
    ],
    keyMetrics: [
      { label: 'Additional Revenue', value: '$500K+' },
      { label: 'Search Traffic', value: '+40%' },
      { label: 'ROI Escalation', value: '+25%' },
      { label: 'Qualified Inquiries', value: '+30%' }
    ],
    tags: ['PPC Funnels', 'Web Redesign', 'Email Automation', 'B2B Growth', 'Budget >$100K']
  },
  {
    id: 'concise',
    role: 'Senior Project Manager',
    company: 'Concise Medico Ltd.',
    location: 'Islamabad / UK',
    period: 'January 2018 – May 2021',
    highlights: [
      'Managed a diverse portfolio of international projects worth $1M+, sustaining an outstanding 95% client satisfaction rate.',
      'Championed Agile Scrum methodologies to reduce project completion timelines by 25%.',
      'Streamlined cross-border team collaboration for a group of 10 specialists, enhancing overall operational productivity by 20%.'
    ],
    keyMetrics: [
      { label: 'Portfolio Managed', value: '$1M+' },
      { label: 'Client Satisfaction', value: '95%' },
      { label: 'Timeline Reduction', value: '-25%' },
      { label: 'Team Output', value: '+20%' }
    ],
    tags: ['Agile / Scrum', 'Project Delivery', 'Client Retention', 'Cross-Functional Leadership']
  },
  {
    id: 'cloudwalker',
    role: 'Marketing & Communication Specialist',
    company: 'Cloudwalker Life Science',
    location: 'International Trade (China & Pakistan)',
    period: 'February 2014 – December 2017',
    highlights: [
      'Developed strategic communication frameworks for international pharmaceutical trade negotiations between China and Pakistan.',
      'Optimized digital footprint and multi-channel presence to secure high-value B2B trade partnerships through targeted executive messaging.'
    ],
    keyMetrics: [
      { label: 'Cross-Border Deals', value: 'International' },
      { label: 'Brand Positioning', value: 'B2B Pharma' }
    ],
    tags: ['International Trade', 'Cross-Cultural Comm', 'B2B Partnerships', 'Messaging Strategy']
  },
  {
    id: 'hamariweb',
    role: 'SEO & Search Strategy Specialist',
    company: 'Hamariweb.com',
    location: 'Pakistan',
    period: 'January 2011 – January 2014',
    highlights: [
      'Expanded portal-wide organic visibility by 35% through rigorous technical SEO audits, site taxonomy refinement, and crawl optimization.',
      'Heightened monthly organic traffic by 25% by integrating keyword search strategies with dynamic trending content analysis.'
    ],
    keyMetrics: [
      { label: 'Organic Visibility', value: '+35%' },
      { label: 'Monthly Traffic', value: '+25%' }
    ],
    tags: ['High-Volume Portals', 'Technical Audits', 'Keyword Strategy', 'Trending Content']
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'masters',
    degree: "Master's Degree in English Language and Literature",
    institution: 'University of Malakand',
    years: '2017 – 2019',
    description: 'Focused on Advanced Communication, Narrative Analysis, and Behavioral Studies. Provides the cognitive & psychological bedrock for high-converting marketing copy and consumer perception framing.'
  },
  {
    id: 'bachelors',
    degree: "Bachelor's Degree (Communication Focus)",
    institution: 'University of Malakand',
    years: '2015 – 2017',
    description: 'Undergraduate foundation focused on organizational rhetoric, media communication theories, and public discourse.'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'ga4-ads',
    title: 'Google Analytics Professional (GA4) & Google Ads Certification',
    issuer: 'Google',
    badgeType: 'google'
  },
  {
    id: 'google-ai',
    title: 'Google AI Essentials & Digital Marketing Foundations',
    issuer: 'Coursera / Google',
    badgeType: 'google'
  },
  {
    id: 'pm-foundations',
    title: 'Foundations of Project Management',
    issuer: 'Coursera / Google',
    badgeType: 'coursera'
  },
  {
    id: 'cyber-sql',
    title: 'Cybersecurity Fundamentals & SQL for Data Analysis',
    issuer: 'Industry Standard Credential',
    badgeType: 'data'
  }
];

export const TOOLS_CATEGORIZED = [
  { category: 'Search & Intelligence', tools: ['SEMrush', 'Google Search Console', 'Ahrefs', 'Screaming Frog', 'GEO Prompt Engines'] },
  { category: 'Analytics & Attribution', tools: ['GA4', 'Looker Studio', 'Tableau', 'Salesforce Datorama', 'SQL'] },
  { category: 'CRM & Automation', tools: ['HubSpot', 'Salesforce', 'Mailchimp', 'Klaviyo', 'Zapier'] },
  { category: 'CMS & Experience', tools: ['WordPress', 'Webflow', 'Shopify', 'Unbounce', 'Figma'] }
];

export const LANGUAGES: LanguageItem[] = [
  { name: 'English', level: 'Fluent / Professional Bilingual', percent: 95 },
  { name: 'Urdu', level: 'Native / Bilingual', percent: 100 },
  { name: 'Pashto', level: 'Native / Mother Tongue', percent: 100 },
  { name: 'Punjabi', level: 'Elementary / Conversational', percent: 65 }
];
