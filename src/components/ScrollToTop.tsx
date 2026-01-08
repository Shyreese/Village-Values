import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import svgPaths from '../imports/svg-ty95wsf6gy';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the total scrollable height
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      // Check if user has scrolled halfway down
      const scrolledHalfway = window.scrollY > scrollableHeight / 2;
      setIsVisible(scrolledHalfway);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Check on mount
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50 cursor-pointer"
          onClick={scrollToTop}
        >
          <div className="relative w-16 h-16">
            {/* Decorative Elements */}
            <div className="absolute bg-[#e5795b] left-[55.2px] rounded-full w-[17.596px] h-[17.596px] top-[-12.79px]" />
            <div className="absolute bg-[#f6d33a] left-[-4.22px] rounded-full w-[12.435px] h-[12.435px] top-[56.51px]" />
            <div className="absolute bg-[#149496] left-[-12px] opacity-70 rounded-full w-[8px] h-[8px] top-[4px]" />

            {/* Main Button with Glow Animation */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0px 10px 15px -3px rgba(196,154,58,0.3), 0px 4px 6px -4px rgba(196,154,58,0.2), 0 0 0 0 rgba(196,154,58,0.4)',
                  '0px 10px 15px -3px rgba(196,154,58,0.3), 0px 4px 6px -4px rgba(196,154,58,0.2), 0 0 0 8px rgba(196,154,58,0)',
                  '0px 10px 15px -3px rgba(196,154,58,0.3), 0px 4px 6px -4px rgba(196,154,58,0.2), 0 0 0 0 rgba(196,154,58,0.4)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bg-[rgba(196,154,58,0.9)] border-[0.667px] border-[rgba(196,154,58,0.2)] border-solid left-0 rounded-full w-16 h-16 top-0 flex items-center justify-center hover:bg-[rgba(196,154,58,1)] transition-colors"
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
      )}
    </AnimatePresence>
  );
}
