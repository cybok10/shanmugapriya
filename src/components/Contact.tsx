import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles, FileText, ArrowUpRight } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenResume: () => void;
  onCopySuccess: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({
  onOpenResume,
  onCopySuccess,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [senderName, setSenderName] = useState('');
  const [inquiryType, setInquiryType] = useState('Career Guidance & Counselling');
  const [messageText, setMessageText] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    onCopySuccess('Email copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    onCopySuccess('Phone number copied to clipboard!');
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${inquiryType} - Message from ${senderName || 'Student/Learner'}`);
    const body = encodeURIComponent(
      `Hi ${PERSONAL_INFO.name},\n\n${messageText}\n\nFrom:\n${senderName || 'Interested Learner'}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full neu-inset-sm text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let's Connect
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Have a question about training, learning, communication, or educational guidance? Get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 3D Contact Cards & Direct Buttons */}
          <div className="lg:col-span-5 space-y-6">
            {/* 3D Email Card */}
            <TiltCard
              maxTilt={8}
              depth={16}
              className="neu-raised rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl neu-inset flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Email
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="block text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="w-9 h-9 rounded-xl neu-button flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer shrink-0"
                  title="Copy Email Address"
                  aria-label="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* 3D Email Action Button */}
              <div className="pt-5 mt-5 border-t border-slate-300/40 dark:border-slate-700/40">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="neu-accent-button w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </TiltCard>

            {/* 3D Phone Card */}
            <TiltCard
              maxTilt={8}
              depth={16}
              className="neu-raised rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl neu-inset flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Phone / Mobile
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phoneClean}`}
                      className="block text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-mono"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="w-9 h-9 rounded-xl neu-button flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer shrink-0"
                  title="Copy Phone Number"
                  aria-label="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* 3D Call Action Button */}
              <div className="pt-5 mt-5 border-t border-slate-300/40 dark:border-slate-700/40">
                <a
                  href={`tel:${PERSONAL_INFO.phoneClean}`}
                  className="neu-button w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2 cursor-pointer hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Call on Phone</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </TiltCard>

            {/* Location & Resume Badge */}
            <div className="neu-raised rounded-3xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl neu-inset flex items-center justify-center text-slate-600 dark:text-slate-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    {PERSONAL_INFO.location}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Open for counselling & guidance
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenResume}
                className="neu-button px-3.5 py-2 rounded-xl text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3D Neumorphic Message Composer */}
          <div className="lg:col-span-7">
            <TiltCard
              maxTilt={6}
              depth={14}
              className="neu-raised rounded-3xl p-7 sm:p-8"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                Send an Enquiry Note
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill in the details below to launch your email client with a pre-formatted message addressed to Shanmugapriya.
              </p>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Name / Role
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Student / Parent / Working Professional"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full px-4 py-3 text-sm rounded-xl neu-inset bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none border-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Topic of Interest
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-4 py-3 text-sm rounded-xl neu-inset bg-transparent text-slate-900 dark:text-white focus:outline-none border-none cursor-pointer"
                  >
                    <option value="Cybersecurity Course Counselling" className="dark:bg-slate-900 text-slate-900 dark:text-white">Cybersecurity Course Counselling</option>
                    <option value="English & Communication Skills" className="dark:bg-slate-900 text-slate-900 dark:text-white">English & Communication Skills</option>
                    <option value="Career Mentorship & Guidance" className="dark:bg-slate-900 text-slate-900 dark:text-white">Career Mentorship & Guidance</option>
                    <option value="Student Admissions Enquiry" className="dark:bg-slate-900 text-slate-900 dark:text-white">Student Admissions Enquiry</option>
                    <option value="General Professional Connection" className="dark:bg-slate-900 text-slate-900 dark:text-white">General Professional Connection</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Message / Question
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe what you are looking to learn or any questions you have regarding guidance or counselling..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="w-full px-4 py-3 text-sm rounded-xl neu-inset bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none border-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="neu-accent-button w-full sm:w-auto px-7 py-3 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Open Email Client</span>
                  </button>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                    Directly addresses {PERSONAL_INFO.email} with your note.
                  </p>
                </div>
              </form>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};
