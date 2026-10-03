export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  status: 'current' | 'completed';
  type: string;
  summary: string;
  achievements: string[];
  responsibilities: string[];
  skillsUsed: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  graduationDate: string;
  cgpa: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: string[];
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  level: string;
}

export interface InterestItem {
  name: string;
  description: string;
  iconName: 'BookOpen' | 'Puzzle' | 'Sparkles';
}

export interface CoreExpertiseItem {
  id: string;
  title: string;
  description: string;
  iconName: 'GraduationCap' | 'UserCheck' | 'Target' | 'MessageSquare' | 'BarChart3' | 'Database' | 'FileText' | 'FileSpreadsheet';
  category: 'Counselling & Sales' | 'Data & Technical';
}

export const PERSONAL_INFO = {
  name: 'Shanmugapriya R',
  shortName: 'Shanmugapriya',
  title: 'Academy Counsellor – Cybersecurity',
  subtitles: 'Admissions & Enrolment · Sales & Data Analysis',
  location: 'Avudaiyarkoil, Tamil Nadu, India',
  phone: '+91 93602 24078',
  phoneClean: '+919360224078',
  email: 'shanmugapriyav65@gmail.com',
  currentCompany: 'Cybersecurity Training Academy',
  currentRoleStart: 'April 2, 2026',
  currentEmploymentDisplay: 'April 2, 2026 – Present',
  previousCompany: 'HDFC Bank Ltd., Chennai',
  previousRoleDuration: 'August 2024 – July 2025',
  highestEducation: 'B.E. Computer Science (CGPA: 8.3)',
};

export const PROFESSIONAL_SUMMARY = `Admissions and counselling professional in cybersecurity education, with a background in banking sales operations and data analysis. Guides prospective learners and working professionals through cybersecurity training pathways, from first enquiry to enrolment. Met the assigned target in the first month of the current role and has sustained it since. Brings strong MS Excel, SQL, and MIS reporting skills from a previous role at HDFC Bank.`;

export const EXTENDED_SUMMARY = `Results-oriented Academy Counsellor – Cybersecurity with experience in student counselling, admissions, enrolment coordination, student ID creation, lead follow-up, communication, and target-driven operations. Previously worked as a Sales Officer at HDFC Bank Ltd. with hands-on experience in SQL, data handling, MIS reporting, Excel-based analysis, dashboards, and database management.`;

export const CORE_EXPERTISE: CoreExpertiseItem[] = [
  {
    id: 'cybersecurity-counselling',
    title: 'Cybersecurity Counselling',
    description: 'Guiding prospective learners and working professionals to the most suitable cybersecurity career pathways.',
    iconName: 'GraduationCap',
    category: 'Counselling & Sales',
  },
  {
    id: 'student-admissions',
    title: 'Student Admissions',
    description: 'End-to-end management of registrations, student ID creation, batch onboarding, and documentation.',
    iconName: 'UserCheck',
    category: 'Counselling & Sales',
  },
  {
    id: 'sales-target',
    title: 'Sales & Target Achievement',
    description: 'Target-driven performance achieved in the first month and maintained consistently across cycles.',
    iconName: 'Target',
    category: 'Counselling & Sales',
  },
  {
    id: 'professional-comm',
    title: 'Professional Communication',
    description: 'Regular and empathetic communication via calls, messages, and follow-ups for learner retention.',
    iconName: 'MessageSquare',
    category: 'Counselling & Sales',
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    description: 'Extracting actionable operational insights, performance evaluations, and KPI metrics.',
    iconName: 'BarChart3',
    category: 'Data & Technical',
  },
  {
    id: 'sql-db',
    title: 'SQL & Database Management',
    description: 'Writing and optimizing advanced SQL queries for reliable extraction, reporting, and database integrity.',
    iconName: 'Database',
    category: 'Data & Technical',
  },
  {
    id: 'mis-reporting',
    title: 'MIS Reporting',
    description: 'Preparing and delivering high-level management information system reports for leadership decision-making.',
    iconName: 'FileText',
    category: 'Data & Technical',
  },
  {
    id: 'excel-reporting',
    title: 'MS Excel & Reporting',
    description: 'Building automated dashboards, PivotTables, and daily recovery reports to monitor KPIs.',
    iconName: 'FileSpreadsheet',
    category: 'Data & Technical',
  },
];

export const PROFESSIONAL_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'cybersecurity-counsellor',
    role: 'Academy Counsellor – Cybersecurity',
    company: 'Cybersecurity Training Academy',
    period: '04/2026 – Present (Joined April 2, 2026)',
    status: 'current',
    type: 'Full-time',
    summary: 'Spearheading student and working professional counselling, admissions pipeline management, and student onboarding for specialized cybersecurity curriculums.',
    achievements: [
      'Achieved the assigned target during the first month in the Academy Counsellor role.',
      'Continued to achieve assigned targets consistently after the first month.',
    ],
    responsibilities: [
      'Counsel prospective students and working professionals on cybersecurity courses, learning paths, and admission options.',
      'Manage the end-to-end admission process: enquiry follow-up, registration, documentation, and enrolment coordination.',
      'Create and maintain student IDs and admission records accurately and within required timelines.',
      'Coordinate with students and internal teams to resolve admission, batch scheduling, and onboarding requirements.',
      'Keep in regular contact with leads and students through calls, messages, and follow-ups to support conversion and retention.',
      'Maintain professional communication with students and prospective learners while supporting the overall admission workflow.',
    ],
    skillsUsed: [
      'Student Counselling',
      'Admissions & Enrolment',
      'Student Record Management',
      'Lead Follow-up',
      'Target Achievement',
      'Customer Communication',
      'MS Outlook',
    ],
  },
  {
    id: 'hdfc-sales-officer',
    role: 'Sales Officer – Data Handling & Analysis',
    company: 'HDFC Bank Ltd., Chennai',
    location: 'Chennai, Tamil Nadu',
    period: '08/2024 – 07/2025 (August 2024 – July 2025)',
    status: 'completed',
    type: 'Full-time',
    summary: 'Led data operations, SQL query development, and executive MIS reporting to support zonal leadership and evaluate recovery performance.',
    achievements: [
      'Recipient of the Silver Star Award for excellent contribution to the team.',
      'Designed automated reports and dashboards to visualize daily recoveries and monitor critical KPIs.',
    ],
    responsibilities: [
      'Wrote and optimized advanced SQL queries for data extraction, reporting, and database management.',
      'Prepared and presented MIS reports to the Zonal Head to support data-driven decisions.',
      'Analyzed recovery performance of Collection Managers using MS Excel and PivotTables.',
      'Built automated reports and dashboards to track daily recoveries and key performance indicators.',
      'Generated daily Credit Cost Reports showing financial impact and loss exposure.',
      'Handled manual debit entries and overnight cash holds while keeping financial records accurate.',
    ],
    skillsUsed: [
      'SQL',
      'Data Handling',
      'MIS Reporting',
      'MS Excel & PivotTables',
      'Data Analysis',
      'Database Management',
      'Dashboard Preparation',
    ],
  },
];

export const EDUCATION_DATA: EducationItem = {
  degree: 'Bachelor of Engineering (B.E.)',
  field: 'Computer Science',
  institution: 'M.I.E.T. Engineering College',
  location: 'Tiruchirappalli, Tamil Nadu, India',
  graduationDate: '04/2023 (April 2023)',
  cgpa: '8.3',
};

export const AWARDS_DATA: AchievementItem[] = [
  {
    id: 'silver-star',
    title: 'Silver Star Award',
    subtitle: 'HDFC Bank Ltd., Chennai',
    description: 'Awarded for excellent contribution to the team, recognizing operational excellence and data integrity.',
    badge: 'Honor Award',
  },
  {
    id: 'target-achievement',
    title: 'Consistent Target Achievement',
    subtitle: 'Cybersecurity Training Academy',
    description: 'Achieved the assigned target during the first month in the Academy Counsellor role and continued to achieve assigned targets consistently.',
    badge: 'Performance Milestone',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Counselling & Business',
    description: 'Student advisory, admission administration, and target-driven communication',
    skills: [
      'Student Counselling',
      'Admissions & Enrolment',
      'Lead Follow-up',
      'Sales',
      'Target Achievement',
      'Customer Communication',
    ],
  },
  {
    name: 'Data & Technical',
    description: 'Analytical query design, database handling, and executive reporting',
    skills: [
      'SQL',
      'Data Handling',
      'Database Management',
      'MS Excel',
      'PivotTables',
      'MIS Reporting',
      'Dashboard & Report Preparation',
      'Data Analysis',
    ],
  },
  {
    name: 'Professional & Tools',
    description: 'Workplace coordination, technical documentation, and record systems',
    skills: [
      'Communication',
      'Problem Solving',
      'Technical Writing',
      'MS Outlook',
      'Student Record Management',
    ],
  },
];

export const ALL_SKILLS = [
  'SQL',
  'MS Excel',
  'PivotTables',
  'MS Outlook',
  'Data Handling',
  'Database Management',
  'MIS Reporting',
  'Data Analysis',
  'Dashboard & Report Preparation',
  'Technical Writing',
  'Student Counselling',
  'Admissions & Enrolment',
  'Lead Follow-up',
  'Sales',
  'Target Achievement',
  'Customer Communication',
  'Student Record Management',
  'Communication',
  'Problem Solving',
];

export const LANGUAGES: LanguageItem[] = [
  {
    language: 'Tamil',
    proficiency: 'Native / Bilingual Proficiency',
    level: 'Native',
  },
  {
    language: 'English',
    proficiency: 'Full Professional Proficiency',
    level: 'Professional',
  },
  {
    language: 'Hindi',
    proficiency: 'Professional Working Proficiency',
    level: 'Working',
  },
  {
    language: 'Telugu',
    proficiency: 'Professional Working Proficiency',
    level: 'Working',
  },
];

export const INTERESTS: InterestItem[] = [
  {
    name: 'Reading Books',
    description: 'Exploring literature, professional growth texts, and subject knowledge to continually broaden perspectives.',
    iconName: 'BookOpen',
  },
  {
    name: 'Solving Puzzles',
    description: 'Engaging analytical thinking, pattern recognition, and systematic problem solving through challenging puzzles.',
    iconName: 'Puzzle',
  },
  {
    name: 'Learning New Skills and Experiences',
    description: 'Proactively exploring modern methodologies, analytical tools, and experiential learning opportunities.',
    iconName: 'Sparkles',
  },
];
