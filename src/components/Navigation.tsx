import { motion } from "motion/react";
import logo from "figma:asset/812e68f0e38eb12d17187ac3fd565ef3be28e713.png";

interface NavigationProps {
  currentPage?: 'home' | 'programs' | 'about' | 'enroll' | 'careers' | 'resources' | 'contact';
}

export function Navigation({ currentPage = 'home' }: NavigationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full"
    >
      <nav className="bg-[#f5edda] fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-5 flex items-center justify-between">
          {/* Logo & Title - Clickable to go home */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '';
              window.scrollTo(0, 0);
            }}
            className="cursor-pointer shrink-0 flex items-center gap-5"
          >
            <img
              src={logo}
              alt="Village Values"
              className="h-12 w-12 rounded-full object-cover hover:opacity-80 transition-opacity"
            />
            <h1 className="font-['Poppins'] text-[#232e43] text-2xl lg:text-3xl hidden sm:block">
              Village Values
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="/" onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.scrollTo(0, 0); }} className={`font-['Poppins'] text-base hover:text-[#149496] transition-colors ${currentPage === 'home' ? 'text-[#149496]' : 'text-[#232e43]'}`}>Home</a>
            <a href="#programs" className={`font-['Poppins'] text-base hover:text-[#149496] transition-colors ${currentPage === 'programs' ? 'text-[#149496]' : 'text-[#232e43]'}`}>Programs</a>
            <a href="#about" className={`font-['Poppins'] text-base hover:text-[#149496] transition-colors ${currentPage === 'about' ? 'text-[#149496]' : 'text-[#232e43]'}`}>About</a>
            <a href="#enroll" className={`font-['Poppins'] text-base hover:text-[#149496] transition-colors ${currentPage === 'enroll' ? 'text-[#149496]' : 'text-[#232e43]'}`}>Enroll</a>
            <a href="#careers" className={`font-['Poppins'] text-base hover:text-[#149496] transition-colors ${currentPage === 'careers' ? 'text-[#149496]' : 'text-[#232e43]'}`}>Careers</a>
            <a href="#resources" className={`font-['Poppins'] text-base hover:text-[#149496] transition-colors ${currentPage === 'resources' ? 'text-[#149496]' : 'text-[#232e43]'}`}>Resources</a>
            <a href="#contact" className={`font-['Poppins'] text-base hover:text-[#149496] transition-colors ${currentPage === 'contact' ? 'text-[#149496]' : 'text-[#232e43]'}`}>Contact</a>
          </div>

          {/* Book a Visit Button */}
          <motion.button
            type="button"
            onClick={() => window.open('https://calendly.com/villagevalues-info/30min?month=2026-02', '_blank')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#149496] text-white px-6 py-2.5 rounded-full font-['Poppins'] text-base tracking-wider uppercase hover:bg-[#1e7872] transition-colors cursor-pointer"
          >
            Book a Visit
          </motion.button>
        </div>
      </nav>
    </motion.div>
  );
}