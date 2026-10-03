import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { StudentFocus } from './components/StudentFocus';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 3200);
  };

  return (
    <div className="min-h-screen bg-[#E8ECF3] dark:bg-[#151A24] text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300 selection:bg-blue-600 selection:text-white">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Floating 3D Neumorphic Sticky Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Journey */}
      <main id="main-content" className="flex-grow">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Services />
        <StudentFocus />
        <Interests />
        <Contact
          onOpenResume={() => setIsResumeModalOpen(true)}
          onCopySuccess={showToast}
        />
      </main>

      {/* Minimal 3D Neumorphic Footer */}
      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Official Verified Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onCopySuccess={showToast}
      />

      {/* Action Notification Toast */}
      <Toast message={toastMessage} isVisible={isToastVisible} />
    </div>
  );
}
