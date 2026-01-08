import { motion } from 'motion/react';
import { useState } from 'react';
import { Search, BookOpen, Heart, Moon, Users, CalendarDays, School, Book, Brain, Sparkles, Clock, Sun, Coffee, Apple, Utensils, Music, Palette } from 'lucide-react';
import svgPathsHero from '../imports/svg-na88d9mshn';
import svgPathsResources from '../imports/svg-t3ovlu8fzf';
import svgPathsEducation from '../imports/svg-dnxsc6clny';
import logoImage from 'figma:asset/812e68f0e38eb12d17187ac3fd565ef3be28e713.png';
import { Footer } from './Footer';
import { BottomNavBar } from './BottomNavBar';

export function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ParentResourcesSection />
      <DailyScheduleSection />
      <ChildcareEducationSection />
      <Footer />
      <BottomNavBar 
        sections={[
          { id: 'parent-resources', label: 'Parent Resources' },
          { id: 'daily-schedule', label: 'Daily Schedule' },
          { id: 'childcare', label: 'Staff Training' }
        ]}
      />
    </div>
  );
}

// ============================================================================
// HEADER
// ============================================================================
function Header() {
  return (
    <header className="bg-[#f5edda] fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-5 flex items-center justify-between">
        {/* Logo & Title - Clickable to go home */}
        <a 
          href="/" 
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '';
            window.scrollTo(0, 0);
          }}
          className="cursor-pointer shrink-0 flex items-center gap-3"
        >
          <img src={logoImage} alt="Village Values" className="h-12 w-12 rounded-full object-cover hover:opacity-80 transition-opacity" />
          <h1 className="font-['Poppins'] text-[#232e43] text-2xl lg:text-3xl hidden sm:block">
            Village Values
          </h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="/" onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.scrollTo(0, 0); }} className="font-['Poppins'] text-[#232e43] text-base hover:text-[#149496] transition-colors">Home</a>
          <a href="#programs" className="font-['Poppins'] text-[#232e43] text-base hover:text-[#149496] transition-colors">Programs</a>
          <a href="#about" className="font-['Poppins'] text-[#232e43] text-base hover:text-[#149496] transition-colors">About</a>
          <a href="#enroll" className="font-['Poppins'] text-[#232e43] text-base hover:text-[#149496] transition-colors">Enroll</a>
          <a href="#careers" className="font-['Poppins'] text-[#232e43] text-base hover:text-[#149496] transition-colors">Careers</a>
          <a href="#resources" className="font-['Poppins'] text-[#149496] text-base hover:text-[#149496] transition-colors">Resources</a>
          <a href="#contact" className="font-['Poppins'] text-[#232e43] text-base hover:text-[#149496] transition-colors">Contact</a>
        </div>

        {/* Book a Visit Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#149496] text-white px-6 py-2.5 rounded-full font-['Poppins'] text-base tracking-wider uppercase hover:bg-[#1e7872] transition-colors"
        >
          Book a Visit
        </motion.a>
      </div>
    </header>
  );
}

// ============================================================================
// HERO SECTION
// ============================================================================
function HeroSection({ searchQuery, setSearchQuery }: { searchQuery: string; setSearchQuery: (query: string) => void }) {
  return (
    <section className="bg-gradient-to-b from-[#f5edda] to-white py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-12 top-32 w-28 h-28 opacity-30">
        <HouseIcon />
      </div>
      <div className="absolute left-[543px] bottom-20 w-24 h-24 opacity-30">
        <HouseIcon />
      </div>
      <div className="absolute right-10 top-24 w-64 h-64 opacity-30">
        <TreeIcon />
      </div>
      <div className="absolute right-48 bottom-10 w-64 h-64 opacity-30">
        <GrassIcon />
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-block bg-[#149496] rounded-full px-8 py-2.5 mb-8">
            <p className="font-['Poppins'] text-white text-base">Resources & Support</p>
          </div>

          {/* Heading */}
          <h1 className="font-['Poppins'] text-[#232e43] text-4xl lg:text-[56px] lg:leading-[67.2px] mb-6">
            Your Village of Support,
            <br />
            All in One Place
          </h1>

          {/* Paragraph */}
          <p className="font-['Poppins'] text-[#1e7872] text-lg lg:text-xl leading-relaxed mb-10 max-w-[733px] mx-auto">
            Resources collected by our Village Values Research & Resource Department to help your family grow, thrive, and feel supported every step of the way.
          </p>

          {/* Search Bar */}
          <div className="max-w-[672px] mx-auto mb-4">
            <div className="relative">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-[#1e7872]">
                <Search className="w-full h-full" strokeWidth={2} />
              </div>
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[72px] pl-16 pr-6 rounded-full bg-white border-2 border-[rgba(20,148,150,0.2)] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] font-['Poppins'] text-lg text-[#232e43] placeholder:text-[rgba(35,46,67,0.5)] focus:outline-none focus:border-[#149496] transition-colors"
              />
            </div>
          </div>

          {/* Search Suggestions */}
          <p className="font-['Poppins'] text-[rgba(30,120,114,0.7)] text-sm">
            Try searching: &quot;sleep tips&quot;, &quot;safety checklist&quot;, or &quot;local services&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// PARENT RESOURCES SECTION
// ============================================================================
function ParentResourcesSection() {
  const resources = [
    {
      icon: <BookOpenIcon />,
      title: 'Child Development',
      description: 'Milestones, growth charts, and developmental stages',
      count: 12,
      color: '#149496'
    },
    {
      icon: <HeartIcon />,
      title: 'Parenting Tips',
      description: 'Expert advice for everyday parenting challenges',
      count: 18,
      color: '#149496'
    },
    {
      icon: <MoonIcon />,
      title: 'Sleep & Feeding Guides',
      description: 'Schedules, routines, and nutrition resources',
      count: 15,
      color: '#149496'
    },
    {
      icon: <UsersIcon />,
      title: 'Behavior Tools',
      description: 'Positive discipline and emotional regulation strategies',
      count: 16,
      color: '#149496'
    },
    {
      icon: <CalendarIcon />,
      title: 'Local Events',
      description: 'Family-friendly activities and community gatherings',
      count: 8,
      color: '#149496'
    },
    {
      icon: <SchoolIcon />,
      title: 'After-School Programs',
      description: 'Extracurricular activities and enrichment options',
      count: 14,
      color: '#149496'
    },
    {
      icon: <BookIcon />,
      title: 'Early Reading Resources',
      description: 'Literacy tools, book lists, and reading activities',
      count: 25,
      color: '#149496'
    },
    {
      icon: <BrainIcon />,
      title: 'Mental Health Support',
      description: 'Resources for parent and child well-being',
      count: 11,
      color: '#149496'
    },
    {
      icon: <SparklesIcon />,
      title: 'Special Needs Services',
      description: 'Support for children with unique learning needs',
      count: 9,
      color: '#149496'
    }
  ];

  return (
    <section id="parent-resources" className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-3xl lg:text-4xl mb-4">
            Parent Resources
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-lg">
            Everything you need to support your child&apos;s growth and your family&apos;s well-being
          </p>
        </motion.div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#f5edda] rounded-2xl p-6 cursor-pointer transition-shadow hover:shadow-xl"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                {resource.icon}
              </div>

              {/* Title */}
              <h3 className="font-['Poppins'] text-[#232e43] text-xl mb-2">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="font-['Poppins'] text-[#1e7872] text-sm mb-4 leading-relaxed">
                {resource.description}
              </p>

              {/* Resource Count */}
              <p className="font-['Poppins'] text-[#149496] text-sm">
                {resource.count} resources
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-['Poppins'] text-[#1e7872] text-base italic">
            Can&apos;t find what your looking for or know a great resource to add to the list?{' '}
            <a href="#contact" className="text-[#149496] hover:underline">
              Contact us!
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// DAILY SCHEDULE SECTION
// ============================================================================
function DailyScheduleSection() {
  const scheduleItems = [
    { time: '7:00 AM - 8:30 AM', activity: 'Arrival & Free Play', description: 'Children arrive and engage in self-directed activities' },
    { time: '8:30 AM - 9:00 AM', activity: 'Morning Circle Time', description: 'Welcome, songs, and calendar activities' },
    { time: '9:00 AM - 9:30 AM', activity: 'Snack Time', description: 'Healthy snacks and social time' },
    { time: '9:30 AM - 10:30 AM', activity: 'Learning Centers', description: 'Rotating activities: art, science, dramatic play, blocks' },
    { time: '10:30 AM - 11:30 AM', activity: 'Outdoor Play', description: 'Physical activity and nature exploration' },
    { time: '11:30 AM - 12:00 PM', activity: 'Story Time & Music', description: 'Interactive reading and musical activities' },
    { time: '12:00 PM - 12:45 PM', activity: 'Lunch', description: 'Nutritious meals and family-style dining' },
    { time: '12:45 PM - 2:45 PM', activity: 'Quiet Time & Nap', description: 'Rest and rejuvenation for growing bodies' },
    { time: '2:45 PM - 3:15 PM', activity: 'Afternoon Snack', description: 'Light refreshments and table conversation' },
    { time: '3:15 PM - 4:30 PM', activity: 'Afternoon Activities', description: 'Choice time, special projects, or outdoor play' },
    { time: '4:30 PM - 6:00 PM', activity: 'Free Play & Departure', description: 'Open play until families arrive for pickup' }
  ];

  return (
    <section id="daily-schedule" className="bg-[#f5edda] py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-3xl lg:text-4xl mb-4">
            Daily Schedule
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-lg">
            A structured day designed to support learning, growth, and fun
          </p>
        </motion.div>

        {/* Schedule Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-6 ${
                index !== scheduleItems.length - 1 ? 'border-b border-[#f5edda]' : ''
              } hover:bg-[#f5edda] transition-colors`}
            >
              {/* Time */}
              <div className="font-['Poppins'] text-[#149496] md:text-right">
                {item.time}
              </div>
              
              {/* Activity */}
              <div className="font-['Poppins'] text-[#232e43]">
                {item.activity}
              </div>
              
              {/* Description */}
              <div className="font-['Poppins'] text-[#1e7872] text-sm">
                {item.description}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-8"
        >
          <p className="font-['Poppins'] text-[#1e7872] text-sm italic">
            Schedule may vary slightly by age group and classroom. Ask your teacher for specific timing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// CHILDCARE EDUCATION SECTION
// ============================================================================
function ChildcareEducationSection() {
  const trainings = [
    {
      icon: <ClassroomIcon />,
      title: 'Classroom Management',
      description: 'Strategies for creating positive, structured learning environments',
      count: 8
    },
    {
      icon: <EarlyChildhoodIcon />,
      title: 'Early Childhood Development Basics',
      description: 'Core concepts in child development and learning theory',
      count: 12
    },
    {
      icon: <SafetyIcon />,
      title: 'Safety & Mandated Reporting',
      description: 'Critical safety protocols and legal responsibilities',
      count: 6
    },
    {
      icon: <LessonPlanIcon />,
      title: 'Lesson Planning Ideas',
      description: 'Templates, themes, and age-appropriate activity plans',
      count: 15
    },
    {
      icon: <ActivityIcon />,
      title: 'Activity Guides',
      description: 'Creative activities for learning, play, and exploration',
      count: 20
    },
    {
      icon: <BehaviorIcon />,
      title: 'Behavior Strategies',
      description: 'Positive guidance techniques and conflict resolution',
      count: 10
    },
    {
      icon: <ProfessionalGrowthIcon />,
      title: 'Professional Growth',
      description: 'Career development resources and continuing education',
      count: 7
    },
    {
      icon: <LicensingIcon />,
      title: 'Licensing Requirements',
      description: 'State regulations, certification info, and compliance guides',
      count: 5
    }
  ];

  return (
    <section id="childcare" className="bg-[#f5edda] py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-[119px] top-[60.58px] w-[252px] h-[252px] opacity-30">
        <BeeDecorIcon />
      </div>
      <div className="absolute right-[252px] bottom-[80px] w-[180px] h-[197px] opacity-30">
        <AppleDecorIcon />
      </div>
      <div className="absolute right-[115px] top-[562.58px] w-[252px] h-[252px] opacity-30">
        <StarDecorIcon />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-[40px] leading-[52px] mb-4">
            Childcare Education
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-xl mb-2">
            Training resources for our staff and interns
          </p>
          <p className="font-['Poppins'] italic text-[#149496]">
            We invest in our team&apos;s growth and professional development
          </p>
        </motion.div>

        {/* Training Cards Grid - 4 columns first row, 4 columns second row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {trainings.map((training, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 cursor-pointer transition-shadow hover:shadow-xl"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[rgba(196,154,58,0.1)] rounded-[16.4px] flex items-center justify-center mb-6">
                {training.icon}
              </div>

              {/* Title */}
              <h3 className="font-['Poppins'] text-[#232e43] text-xl mb-3 leading-7">
                {training.title}
              </h3>

              {/* Description */}
              <p className="font-['Poppins'] text-[#1e7872] text-sm mb-6 leading-[22.75px]">
                {training.description}
              </p>

              {/* Resource Count */}
              <p className="font-['Poppins'] text-[#c49a3a] text-sm leading-5">
                {training.count} resources
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-b from-[#149496] to-[#1e7872] rounded-2xl shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] p-8 text-center"
        >
          <p className="font-['Poppins'] text-white text-lg leading-7 max-w-[668px] mx-auto">
            All staff members have access to our comprehensive training library. We believe that investing in our educators creates the best experience for children.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// ICON COMPONENTS
// ============================================================================
function HouseIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
      <g opacity="0.3">
        <path d={svgPathsHero.p2f98fdf0} fill="#E5795B" />
        <path d={svgPathsHero.p14f1c380} fill="#E5795B" />
        <path d={svgPathsHero.p244d6640} fill="#E5795B" />
        <path d={svgPathsHero.p327f8e00} fill="#E5795B" />
      </g>
    </svg>
  );
}

function TreeIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 310 303">
      <g opacity="0.3">
        <path d={svgPathsHero.p3c08cf00} fill="#149496" />
        <path d={svgPathsHero.p20c6d400} fill="#149496" />
        <path d={svgPathsHero.pd699f00} fill="#149496" />
        <path d={svgPathsHero.p1e015c00} fill="#149496" />
        <path d={svgPathsHero.pb2a9280} fill="#149496" />
      </g>
    </svg>
  );
}

function GrassIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
      <g>
        <path d={svgPathsHero.p15f51900} fill="#1E7872" opacity="0.3" />
        <path d={svgPathsHero.p2b360600} fill="#1E7872" opacity="0.3" />
        <path d={svgPathsHero.p3b3d4d00} fill="#1E7872" opacity="0.3" />
        <path d={svgPathsHero.p2eb2a780} fill="#1E7872" opacity="0.3" />
        <path d={svgPathsHero.p171c380} fill="#1E7872" opacity="0.3" />
        <path d={svgPathsHero.p1030c600} fill="#1E7872" opacity="0.3" />
        <path d={svgPathsHero.p26c23280} fill="#1E7872" opacity="0.3" />
      </g>
    </svg>
  );
}

function BookOpenIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 32 32">
      <path d={svgPathsResources.p308d0700} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 32 32">
      <path d={svgPathsResources.p9921600} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 32 32">
      <path d={svgPathsResources.p186c1a00} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p10890b00} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p12922f00} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 32 32">
      <path d={svgPathsResources.p2ee517c0} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p27a3200} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p16bbf900} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 32 32">
      <path d={svgPathsResources.p8d31b00} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.6667 2.66667V8" stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.3333 2.66667V8" stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 13.3333H28" stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SchoolIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 32 32">
      <path d={svgPathsResources.p17d8f380} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.66667 18.6667V13.3333L16 8L25.3333 13.3333V18.6667" stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p2b75c580} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 32 32">
      <path d={svgPathsResources.p308d0700} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 32 32">
      <path d={svgPathsResources.p2d575c00} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.pa476500} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p15c192c0} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p13a8aa80} fill="#149496" />
      <path d={svgPathsResources.p3c1b880} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 32 32">
      <path d={svgPathsResources.pbbd9800} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.pecb2400} fill="#149496" />
      <path d={svgPathsResources.pf6f00} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsResources.p186c1a00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p10890b00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p12922f00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsResources.p186c1a00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p10890b00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p12922f00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CoffeeIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsResources.p186c1a00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p10890b00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p12922f00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsResources.p186c1a00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p10890b00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p12922f00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UtensilsIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsResources.p186c1a00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p10890b00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p12922f00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsResources.p186c1a00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p10890b00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p12922f00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsResources.p186c1a00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p10890b00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p12922f00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Education Section Icons
function ClassroomIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsEducation.p184ba090} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.p182f3148} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.p2f1426c0} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.p5d36b00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EarlyChildhoodIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d="M14 21V5.83333" stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.p3536b5c0} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.pf30d500} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.p1baaa40} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.p3fb109e0} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.pcb4cbe0} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.p3edc4ae0} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.p13ba1050} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SafetyIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsEducation.p1a3063b0} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LessonPlanIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsEducation.p35802300} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.p2c7af00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 12.8333H18.6667" stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 18.6667H18.6667" stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.33333 12.8333H9.345" stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.33333 18.6667H9.345" stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsEducation.p294c6200} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 21H17.5" stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.6667 25.6667H16.3333" stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BehaviorIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsEducation.p25e06300} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProfessionalGrowthIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsEducation.p275e0300} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.p3997a780} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LicensingIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsEducation.p38e02680} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.p394f8700} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.6667 10.5H9.33333" stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.6667 15.1667H9.33333" stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.6667 19.8333H9.33333" stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Decorative Icons
function BeeDecorIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
      <path d={svgPathsEducation.p3b491b80} fill="#C49A3A" opacity="0.3" />
    </svg>
  );
}

function AppleDecorIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 180 197">
      <path d={svgPathsEducation.p3c515872} fill="#E5795B" opacity="0.3" />
    </svg>
  );
}

function StarDecorIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
      <path d={svgPathsEducation.p52c5200} fill="#149496" opacity="0.3" />
    </svg>
  );
}