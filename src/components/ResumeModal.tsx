import React, { useEffect } from 'react';
import { X, Printer, Copy, Download, Check, FileText } from 'lucide-react';
import {
  PERSONAL_INFO,
  PROFESSIONAL_SUMMARY,
  PROFESSIONAL_EXPERIENCE,
  EDUCATION_DATA,
  AWARDS_DATA,
  LANGUAGES,
  INTERESTS,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopySuccess: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onCopySuccess,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textContent = `
${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.title} | ${PERSONAL_INFO.subtitles}
${PERSONAL_INFO.location} · ${PERSONAL_INFO.phone} · ${PERSONAL_INFO.email}

PROFESSIONAL SUMMARY
${PROFESSIONAL_SUMMARY}

SKILLS
Counselling & Admissions: Student Counselling, Admission Process Management, Enrolment Coordination, Student ID & Record Management, Lead Follow-up & Conversion
Sales & Communication: Sales & Target Achievement, Customer Communication, Problem Solving, Technical Writing
Data & Reporting: Data Handling, Data Analysis, MIS Reporting, Dashboard & Report Preparation
Tools: MS Excel & PivotTables, SQL, MS Outlook

PROFESSIONAL EXPERIENCE
${PROFESSIONAL_EXPERIENCE.map(
  (exp) => `
${exp.role}, ${exp.company} — ${exp.period}
${exp.responsibilities.map((r) => `• ${r}`).join('\n')}
${exp.achievements.map((a) => `• ${a}`).join('\n')}
`
).join('\n')}

EDUCATION
${EDUCATION_DATA.degree}, ${EDUCATION_DATA.field} — ${EDUCATION_DATA.graduationDate}
${EDUCATION_DATA.institution}, ${EDUCATION_DATA.location} | CGPA: ${EDUCATION_DATA.cgpa}

AWARDS & ACHIEVEMENTS
${AWARDS_DATA.map((a) => `• ${a.title}: ${a.description}`).join('\n')}

LANGUAGES
${LANGUAGES.map((l) => `${l.language}: ${l.proficiency}`).join(' | ')}

INTERESTS
${INTERESTS.map((i) => i.name).join(' | ')}
    `.trim();

    navigator.clipboard.writeText(textContent);
    onCopySuccess('Plain text resume copied to clipboard!');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl neu-raised rounded-3xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Action Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-300/40 dark:border-slate-700/40 no-print">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl neu-inset flex items-center justify-center text-blue-600 dark:text-blue-400">
              <FileText className="w-4 h-4" />
            </div>
            <span id="resume-modal-title" className="text-sm font-bold text-slate-900 dark:text-white">
              Official Resume Preview · Shanmugapriya R
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="neu-button px-3.5 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 rounded-full flex items-center gap-1.5 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400"
              title="Copy plain-text resume"
            >
              <Copy className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Copy Text</span>
            </button>

            <button
              onClick={handlePrint}
              className="neu-accent-button px-4 py-1.5 text-xs font-bold rounded-full flex items-center gap-1.5 cursor-pointer"
              title="Print or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close resume preview"
              className="w-8 h-8 rounded-full neu-button flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-slate-100 dark:bg-slate-950">
          <div className="resume-printable mx-auto max-w-[800px] bg-white text-slate-900 p-8 sm:p-12 shadow-sm rounded border border-slate-200 print:border-none print:shadow-none font-sans leading-[1.62] tracking-[-0.011em]">
            {/* Resume Header */}
            <div className="border-b border-slate-200 pb-5 mb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-[-0.03em] text-slate-900 uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-semibold tracking-[-0.01em] text-slate-700 mt-1">
                {PERSONAL_INFO.title} <span className="text-slate-400">|</span> Admissions & Enrolment <span className="text-slate-400">|</span> Sales & Data Analysis
              </p>
              <p className="text-xs text-slate-600 mt-1.5 flex flex-wrap items-center gap-2 tracking-[-0.01em]">
                <span>{PERSONAL_INFO.location}</span>
                <span>·</span>
                <a href={`tel:${PERSONAL_INFO.phoneClean}`} className="hover:text-blue-700">
                  {PERSONAL_INFO.phone}
                </a>
                <span>·</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-blue-700">
                  {PERSONAL_INFO.email}
                </a>
              </p>
            </div>

            {/* Professional Summary */}
            <section className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-[1.68] tracking-[-0.011em] text-justify">
                {PROFESSIONAL_SUMMARY}
              </p>
            </section>

            {/* Skills */}
            <section className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Skills
              </h2>
              <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <p>
                  <strong className="font-semibold text-slate-900">Counselling & Admissions:</strong> Student Counselling, Admission Process Management, Enrolment Coordination, Student ID & Record Management, Lead Follow-up & Conversion
                </p>
                <p>
                  <strong className="font-semibold text-slate-900">Sales & Communication:</strong> Sales & Target Achievement, Customer Communication, Problem Solving, Technical Writing
                </p>
                <p>
                  <strong className="font-semibold text-slate-900">Data & Reporting:</strong> Data Handling, Data Analysis, MIS Reporting, Dashboard & Report Preparation
                </p>
                <p>
                  <strong className="font-semibold text-slate-900">Tools:</strong> MS Excel & PivotTables, SQL, MS Outlook
                </p>
              </div>
            </section>

            {/* Professional Experience */}
            <section className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
                Professional Experience
              </h2>

              <div className="space-y-5">
                {/* Current Role */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-xs sm:text-sm">
                    <p className="font-bold text-slate-900">
                      Academy Counsellor – Cybersecurity, <span className="font-medium italic">Cybersecurity Training Academy</span>
                    </p>
                    <span className="text-xs text-slate-600 font-mono">04/2026 – Present</span>
                  </div>
                  <ul className="mt-2 list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
                    <li>Counsel prospective students and working professionals on cybersecurity courses, learning paths, and admission options.</li>
                    <li>Manage the end-to-end admission process: enquiry follow-up, registration, documentation, and enrolment coordination.</li>
                    <li>Create and maintain student IDs and admission records accurately and within required timelines.</li>
                    <li>Coordinate with students and internal teams to resolve admission, batch, and onboarding requirements.</li>
                    <li>Keep in regular contact with leads and students through calls, messages, and follow-ups to support conversion and retention.</li>
                    <li>Achieved the assigned target in the first month and have met it consistently since.</li>
                  </ul>
                </div>

                {/* Previous Role */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-xs sm:text-sm">
                    <p className="font-bold text-slate-900">
                      Sales Officer – Data Handling & Analysis, <span className="font-medium italic">HDFC Bank Ltd., Chennai</span>
                    </p>
                    <span className="text-xs text-slate-600 font-mono">08/2024 – 07/2025</span>
                  </div>
                  <ul className="mt-2 list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
                    <li>Wrote and optimised advanced SQL queries for data extraction, reporting, and database management.</li>
                    <li>Prepared and presented MIS reports to the Zonal Head to support data-driven decisions.</li>
                    <li>Analysed recovery performance of Collection Managers using MS Excel and PivotTables.</li>
                    <li>Built automated reports and dashboards to track daily recoveries and key performance indicators.</li>
                    <li>Generated daily Credit Cost Reports showing financial impact and loss exposure.</li>
                    <li>Handled manual debit entries and overnight cash holds while keeping financial records accurate.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Education
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-xs sm:text-sm">
                <p className="font-bold text-slate-900">
                  {EDUCATION_DATA.degree}, {EDUCATION_DATA.field}
                </p>
                <span className="text-xs text-slate-600 font-mono">04/2023</span>
              </div>
              <p className="text-xs text-slate-700 mt-0.5">
                {EDUCATION_DATA.institution}, {EDUCATION_DATA.location} | <span className="font-semibold text-slate-900">CGPA: {EDUCATION_DATA.cgpa}</span>
              </p>
            </section>

            {/* Awards & Achievements */}
            <section className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Awards & Achievements
              </h2>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
                <li><strong className="font-semibold text-slate-900">Silver Star Award</strong> for excellent contribution to the team.</li>
                <li>Achieved the assigned target within the first month as Academy Counsellor and maintained it consistently.</li>
              </ul>
            </section>

            {/* Languages */}
            <section className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Languages
              </h2>
              <p className="text-xs text-slate-700">
                <span className="font-semibold text-slate-900">Tamil:</span> Native/Bilingual <span className="text-slate-400">|</span> <span className="font-semibold text-slate-900">English:</span> Full Professional Proficiency <span className="text-slate-400">|</span> <span className="font-semibold text-slate-900">Hindi:</span> Professional Working Proficiency <span className="text-slate-400">|</span> <span className="font-semibold text-slate-900">Telugu:</span> Professional Working Proficiency
              </p>
            </section>

            {/* Interests */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Interests
              </h2>
              <p className="text-xs text-slate-700">
                Reading books <span className="text-slate-400">|</span> Solving puzzles <span className="text-slate-400">|</span> Learning new skills and experiences
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
