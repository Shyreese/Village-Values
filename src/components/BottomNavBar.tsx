import { motion } from 'motion/react';
import svgPaths from '../imports/svg-ty95wsf6gy';

interface BottomNavBarProps {
  sections?: Array<{ id: string; label: string }>;
}

export function BottomNavBar({ sections }: BottomNavBarProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Default sections for homepage
  const defaultSections = [
    { id: 'founders-note', label: "Founder's Note" },
    { id: 'our-promise', label: 'Our Promise' },
    { id: 'programs', label: 'Programs' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'booking', label: 'Book a Visit' },
    { id: 'newsletter', label: 'Stay Connected' }
  ];

  const navSections = sections || defaultSections;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-[1000px] px-4"
    >
      <motion.div 
        className="bg-gradient-to-r from-[#C49A3A]/90 via-[#d4aa4a]/90 to-[#C49A3A]/90 backdrop-blur-xl relative rounded-[32px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.3),0px_10px_30px_rgba(245,237,218,0.6)_inset,0px_0px_40px_rgba(196,154,58,0.4)] border-2 border-[#F5EDDA]/50"
        animate={{ 
          boxShadow: [
            '0px_25px_50px_-12px_rgba(0,0,0,0.3),0px_10px_30px_rgba(245,237,218,0.6)_inset,0px_0px_40px_rgba(196,154,58,0.4)',
            '0px_25px_50px_-12px_rgba(0,0,0,0.3),0px_10px_30px_rgba(245,237,218,0.6)_inset,0px_0px_60px_rgba(196,154,58,0.6)',
            '0px_25px_50px_-12px_rgba(0,0,0,0.3),0px_10px_30px_rgba(245,237,218,0.6)_inset,0px_0px_40px_rgba(196,154,58,0.4)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5EDDA]/40 via-transparent to-transparent pointer-events-none rounded-[32px]" />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F5EDDA]/30 to-transparent pointer-events-none rounded-[32px]"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <div className="h-[60px] overflow-hidden relative flex items-center justify-center gap-2 px-6 sm:px-12">
          {navSections.map((section, index) => (
            <NavButton
              key={section.id}
              label={section.label}
              isLast={index === navSections.length - 1}
              onClick={() => scrollToSection(section.id)}
            />
          ))}
          
          {/* Scroll to Top Button - Always Visible */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="h-[48px] w-[48px] rounded-full bg-gradient-to-br from-[#C49A3A] to-[#b8912f] flex items-center justify-center hover:shadow-[0px_8px_20px_rgba(196,154,58,0.6)] transition-all duration-200 border-2 border-[#F5EDDA]/60 ml-2 relative z-20"
            aria-label="Scroll to top"
          >
            {/* Up Arrow Icon */}
            <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
              <path 
                d={svgPaths.p3ab0ee00} 
                stroke="#F5EDDA" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="4.33" 
              />
              <path 
                d="M14 22.1667V5.83333" 
                stroke="#F5EDDA" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="4.33" 
              />
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface NavButtonProps {
  label: string;
  isLast: boolean;
  onClick: () => void;
}

function NavButton({ label, isLast, onClick }: NavButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="h-[36px] px-6 rounded-full bg-[#F5EDDA]/80 backdrop-blur-sm text-[#232e43] hover:bg-[#F5EDDA] hover:shadow-[0px_4px_12px_rgba(35,46,67,0.2)] border-2 border-white/60 font-['Poppins'] text-[14px] leading-[20px] text-nowrap transition-all duration-200"
    >
      {label}
    </motion.button>
  );
}