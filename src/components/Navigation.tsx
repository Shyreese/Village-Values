import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface NavigationProps {
  currentPage?: 'home' | 'programs' | 'about' | 'enroll' | 'careers' | 'resources' | 'contact';
}

export function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'programs', label: 'Programs' },
    { id: 'about', label: 'About' },
    { id: 'enroll', label: 'Enroll' },
    { id: 'careers', label: 'Careers' },
    { id: 'resources', label: 'Resources' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);

    if (id === 'home') {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.location.hash = id;
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full"
    >
      <nav className="bg-[#f5edda] fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-3 md:py-4">

          {/* Top bar: logo+title on left, desktop nav+CTA in middle/right, hamburger on right (mobile only) */}
          <div className="flex items-center justify-between">

            {/* Left: Logo & Title */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="cursor-pointer shrink-0 flex items-center gap-3"
            >
              <img
                src="https://res.cloudinary.com/dm4ezpefh/image/upload/v1780335403/Village_Values_Logo_Transparent_Cleaned_20_1_vvtrxx.png"
                alt="Village Values logo"
                className="h-10 w-10 rounded-full object-cover hover:opacity-80 transition-opacity"
              />
              <span className="font-['Poppins'] font-semibold text-[#232e43] text-xl lg:text-2xl">
                Village Values
              </span>
            </a>

            {/* Center/Right: Desktop nav links + CTA (hidden on mobile) */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.id === 'home' ? '/' : `#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                  className={`font-['Poppins'] text-base hover:text-[#149496] transition-colors ${
                    currentPage === link.id ? 'text-[#149496] font-medium' : 'text-[#232e43]'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <motion.button
                type="button"
                onClick={() =>
                  window.open('https://calendly.com/villagevalues-info/30min?month=2026-02', '_blank')
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#149496] text-white px-6 py-2.5 rounded-full font-['Poppins'] text-base tracking-wider uppercase hover:bg-[#1e7872] transition-colors cursor-pointer"
              >
                Book a Visit
              </motion.button>
            </div>

            {/* Right: Hamburger button — hidden on desktop via inline style, shown on mobile via Tailwind */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="md:hidden inline-flex items-center justify-center rounded-full border border-[#232e43] p-2 hover:bg-[#232e43]/10 transition-colors"
            >
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '22px', height: '16px', gap: '5px' }}>
                <span style={{ display: 'block', height: '2px', width: '100%', borderRadius: '9999px', backgroundColor: '#232e43' }} />
                <span style={{ display: 'block', height: '2px', width: '100%', borderRadius: '9999px', backgroundColor: '#232e43' }} />
                <span style={{ display: 'block', height: '2px', width: '100%', borderRadius: '9999px', backgroundColor: '#232e43' }} />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
        {/* Mobile dropdown menu — only rendered in DOM on mobile */}
        {mobileMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden bg-[#f5edda] border-t border-[#d9cfb6]"
        >
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left rounded-2xl border px-4 py-3 font-['Poppins'] text-base transition-colors ${
                  currentPage === link.id
                    ? 'border-[#149496] text-[#149496] bg-white'
                    : 'border-[#d9cfb6] text-[#232e43] bg-white hover:border-[#149496] hover:text-[#149496]'
                }`}
              >
                {link.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() =>
                window.open('https://calendly.com/villagevalues-info/30min?month=2026-02', '_blank')
              }
              className="w-full rounded-2xl bg-[#149496] text-white px-4 py-3 font-['Poppins'] text-base uppercase tracking-wider hover:bg-[#1e7872] transition-colors"
            >
              Book a Visit
            </button>
          </div>
        </motion.div>
        )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
}