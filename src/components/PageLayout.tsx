import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { BottomNavBar } from './BottomNavBar';

interface PageLayoutProps {
  children: ReactNode;
  currentPage: 'home' | 'programs' | 'about' | 'enroll' | 'careers' | 'resources' | 'contact';
  sections?: { id: string; label: string }[];
  bgColor?: string;
}

export function PageLayout({ children, currentPage, sections, bgColor = 'bg-[#f5edda]' }: PageLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`min-h-screen ${bgColor} overflow-x-hidden`}
    >
      <Navigation currentPage={currentPage} />
      <div className="pt-[88px]">
        {children}
      </div>
      <Footer />
      {sections && <BottomNavBar sections={sections} />}
    </motion.div>
  );
}