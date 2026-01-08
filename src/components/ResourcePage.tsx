import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import svgPaths from '../imports/svg-cqjhf6dnru';
import svgPathsContact from '../imports/svg-5eq722ur0f';
import logoImage from 'figma:asset/812e68f0e38eb12d17187ac3fd565ef3be28e713.png';
import wellnessImage from 'figma:asset/99280e67b5cc4b9be8bcb3ff8eecacca44d2b7ba.png';

export function ResourcePage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      {/* Parent Resources */}
      <ParentResources />
      
      {/* Childcare Education */}
      <ChildcareEducation />
      
      {/* Local Community Services */}
      <LocalCommunityServices />
      
      {/* Health & Safety Resources */}
      <HealthAndSafety />
      
      {/* Wellness & Balance Resources */}
      <WellnessAndBalance />
      
      {/* Downloads & Forms */}
      <DownloadsAndForms />
      
      {/* Help Form */}
      <NeedHelpFindingResources />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

// ============================================================================
// HEADER
// ============================================================================
function Header() {
  return (
    <header className="bg-[#f5edda] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-5 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/" 
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '';
            window.scrollTo(0, 0);
          }}
          className="cursor-pointer shrink-0"
        >
          <img 
            src={logoImage} 
            alt="Village Values" 
            className="h-12 w-12 rounded-full object-cover hover:opacity-80 transition-opacity" 
          />
        </a>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-['Poppins'] text-[#232e43]">
          <a href="#programs" className="hover:text-[#149496] transition-colors">Programs</a>
          <a href="#about" className="hover:text-[#149496] transition-colors">About</a>
          <a href="#enroll" className="hover:text-[#149496] transition-colors">Enroll</a>
          <a href="#careers" className="hover:text-[#149496] transition-colors">Careers</a>
          <a href="#resources" className="hover:text-[#149496] transition-colors">Resources</a>
          <a href="#contact" className="hover:text-[#149496] transition-colors">Contact</a>
        </nav>

        {/* CTA Button */}
        <motion.a
          href="#book-visit"
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
function HeroSection({ searchQuery, setSearchQuery }: { searchQuery: string; setSearchQuery: (q: string) => void }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f5edda] to-white py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-20 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-[#149496] text-white px-8 py-2 rounded-full mb-6 font-['Poppins']"
        >
          Resources & Support
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-['Poppins'] text-[#232e43] text-5xl lg:text-[56px] lg:leading-[67.2px] mb-6"
        >
          Your Village of Support,<br />
          All in One Place
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-['Poppins'] text-[#1e7872] text-xl leading-[32.5px] mb-8 max-w-3xl mx-auto"
        >
          Resources collected by our Village Values Research & Resource Department to help your family grow, thrive, and feel supported every step of the way.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto mb-4"
        >
          <div className="relative">
            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#1e7872]">
              <SearchIcon />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources..."
              className="w-full bg-white border-2 border-[rgba(20,148,150,0.2)] rounded-full px-16 py-5 font-['Poppins'] text-lg text-[#232e43] placeholder:text-[rgba(35,46,67,0.5)] focus:outline-none focus:ring-2 focus:ring-[#149496] shadow-lg"
            />
          </div>
          <p className="font-['Poppins'] text-[rgba(30,120,114,0.7)] text-sm mt-4 text-center">
            Try searching: &quot;sleep tips&quot;, &quot;safety checklist&quot;, or &quot;local services&quot;
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <DecorativeVectorHouse className="absolute bottom-32 left-36 w-64 h-64 opacity-30" />
      <DecorativeVectorTree className="absolute bottom-24 right-40 w-80 h-80 opacity-30" />
      <DecorativeVectorGrass className="absolute bottom-16 right-56 w-64 h-64 opacity-30" />
    </section>
  );
}

// ============================================================================
// PARENT RESOURCES
// ============================================================================
function ParentResources() {
  const resources = [
    {
      icon: 'child',
      title: 'Child Development',
      description: 'Milestones, growth charts, and developmental stages',
      count: '12 resources'
    },
    {
      icon: 'group',
      title: 'Parenting Tips',
      description: 'Expert advice for everyday parenting challenges',
      count: '18 resources'
    },
    {
      icon: 'health',
      title: 'Daily Routines',
      description: 'Schedules, routines, and nutrition resources',
      count: '15 resources'
    },
    {
      icon: 'safety',
      title: 'Home Safety',
      description: 'Childproofing tips and safety guidelines',
      count: '10 resources'
    },
    {
      icon: 'behavior',
      title: 'Behavior Guidance',
      description: 'Positive discipline strategies and techniques',
      count: '13 resources'
    },
    {
      icon: 'activities',
      title: 'After-School Programs',
      description: 'Extracurricular activities and enrichment options',
      count: '14 resources'
    },
    {
      icon: 'reading',
      title: 'Early Reading Resources',
      description: 'Literacy tools, book lists, and reading activities',
      count: '20 resources'
    },
    {
      icon: 'mental',
      title: 'Mental Health Support',
      description: 'Resources for parent and child well-being',
      count: '11 resources'
    },
    {
      icon: 'special',
      title: 'Special Needs Services',
      description: 'Support for children with unique learning needs',
      count: '9 resources'
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:text-[40px] lg:leading-[52px] mb-4">
            Parent Resources
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-xl">
            Everything you need to support your child&apos;s growth and your family&apos;s well-being
          </p>
        </motion.div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} index={index} />
          ))}
        </div>

        {/* Contact Note */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-['Poppins'] italic text-[#1e7872] text-center mt-12"
        >
          Can&apos;t find what you&apos;re looking for or know a great resource to add to the list? Contact us!
        </motion.p>
      </div>
    </section>
  );
}

function ResourceCard({ icon, title, description, count, index }: {
  icon: string;
  title: string;
  description: string;
  count: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-[#f5edda] rounded-2xl p-8 cursor-pointer transition-shadow hover:shadow-xl"
    >
      {/* Icon */}
      <div className="bg-[rgba(20,148,150,0.1)] w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
        {icon === 'child' && <ChildIcon />}
        {icon === 'group' && <GroupIcon />}
        {icon === 'health' && <HealthIconSmall />}
        {icon === 'safety' && <SafetyIcon />}
        {icon === 'behavior' && <BehaviorIcon />}
        {icon === 'activities' && <ActivitiesIcon />}
        {icon === 'reading' && <ReadingIcon />}
        {icon === 'mental' && <MentalHealthIcon />}
        {icon === 'special' && <SpecialNeedsIcon />}
      </div>

      {/* Title */}
      <h3 className="font-['Poppins'] text-[#232e43] text-2xl lg:text-[28px] lg:leading-[39.2px] mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="font-['Poppins'] text-[#1e7872] text-sm leading-[22.75px] mb-6">
        {description}
      </p>

      {/* Count & Arrow */}
      <div className="flex items-center justify-between">
        <span className="font-['Poppins'] text-[#149496] text-sm">{count}</span>
        <span className="text-[#c49a3a] text-base">→</span>
      </div>
    </motion.div>
  );
}

// ============================================================================
// CHILDCARE EDUCATION
// ============================================================================
function ChildcareEducation() {
  const trainings = [
    {
      title: 'ECE Certification Courses',
      description: 'State-approved training programs',
      icon: 'certificate'
    },
    {
      title: 'Classroom Management',
      description: 'Tools and techniques for educators',
      icon: 'classroom'
    },
    {
      title: 'Child Safety Training',
      description: 'CPR, First Aid, and emergency protocols',
      icon: 'safety'
    },
    {
      title: 'Curriculum Development',
      description: 'Age-appropriate learning materials',
      icon: 'curriculum'
    },
    {
      title: 'Special Education Resources',
      description: 'Inclusive classroom strategies',
      icon: 'special'
    },
    {
      title: 'Professional Development',
      description: 'Workshops, webinars, and conferences',
      icon: 'development'
    },
    {
      title: 'Parent Communication',
      description: 'Building strong family partnerships',
      icon: 'communication'
    },
    {
      title: 'Assessment Tools',
      description: 'Tracking progress and development',
      icon: 'assessment'
    }
  ];

  return (
    <section className="bg-[#f5edda] py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:text-[40px] lg:leading-[52px] mb-4">
            Childcare Education
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-xl mb-2">
            Training resources for our staff and interns
          </p>
          <p className="font-['Poppins'] italic text-[#149496]">
            We invest in our team&apos;s growth and professional development
          </p>
        </motion.div>

        {/* Training Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {trainings.map((training, index) => (
            <TrainingCard key={index} {...training} index={index} />
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-[#149496] to-[#1e7872] rounded-2xl p-8 text-center text-white"
        >
          <h3 className="font-['Poppins'] text-2xl mb-3">Staff Training Portal</h3>
          <p className="font-['Poppins'] mb-6">Access exclusive educational content and certification programs</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#149496] px-8 py-3 rounded-full font-['Poppins'] uppercase tracking-wider hover:bg-gray-100 transition-colors"
          >
            Access Portal
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function TrainingCard({ title, description, icon, index }: {
  title: string;
  description: string;
  icon: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="bg-[rgba(196,154,58,0.1)] w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
        <ChartIcon />
      </div>
      <h3 className="font-['Poppins'] text-[#232e43] text-lg mb-2">
        {title}
      </h3>
      <p className="font-['Poppins'] text-[#1e7872] text-sm">
        {description}
      </p>
    </motion.div>
  );
}

// ============================================================================
// LOCAL COMMUNITY SERVICES
// ============================================================================
function LocalCommunityServices() {
  const services = [
    {
      title: 'Pediatricians',
      description: 'Trusted local doctors',
      count: '8 providers'
    },
    {
      title: 'Family Therapists',
      description: 'Counseling and support',
      count: '5 providers'
    },
    {
      title: 'Speech Therapists',
      description: 'Language development specialists',
      count: '6 providers'
    },
    {
      title: 'Occupational Therapy',
      description: 'Motor skills support',
      count: '4 providers'
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:text-[40px] lg:leading-[52px] mb-4">
            Local Community Services
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-xl">
            Vetted professionals and services in your area
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, count, index }: {
  title: string;
  description: string;
  count: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-[#f5edda] rounded-2xl p-6 text-center"
    >
      <div className="bg-[rgba(20,148,150,0.1)] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
        <LocationIcon />
      </div>
      <h3 className="font-['Poppins'] text-[#232e43] text-lg mb-2">
        {title}
      </h3>
      <p className="font-['Poppins'] text-[#1e7872] text-sm mb-3">
        {description}
      </p>
      <p className="font-['Poppins'] text-[#149496] text-sm">{count}</p>
    </motion.div>
  );
}

// ============================================================================
// HEALTH & SAFETY RESOURCES
// ============================================================================
function HealthAndSafety() {
  const resources = [
    {
      title: 'Vaccination Schedule',
      count: '1 resource'
    },
    {
      title: 'Illness Guidelines',
      count: '3 resources'
    },
    {
      title: 'Emergency Prep',
      count: '5 resources'
    },
    {
      title: 'Nutrition Guides',
      count: '7 resources'
    },
    {
      title: 'Car Seat Safety',
      count: '4 resources'
    },
    {
      title: 'Poison Control',
      count: '2 resources'
    }
  ];

  return (
    <section className="bg-[#f5edda] py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:text-[40px] lg:leading-[52px] mb-4">
            Health & Safety Resources
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-xl">
            Essential health and safety information for families
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-4 text-center hover:shadow-md transition-shadow cursor-pointer"
            >
              <h3 className="font-['Poppins'] text-[#232e43] mb-2">
                {resource.title}
              </h3>
              <p className="font-['Poppins'] text-[#149496] text-sm">{resource.count}</p>
            </motion.div>
          ))}
        </div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-[#e5795b] rounded-2xl p-8 text-center text-white"
        >
          <p className="font-['Poppins'] text-lg">
            🚨 In case of emergency, always call 911 first. These resources are for information only.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// WELLNESS & BALANCE RESOURCES
// ============================================================================
function WellnessAndBalance() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
          >
            <img 
              src={wellnessImage} 
              alt="Wellness & Balance" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:text-[40px] lg:leading-[52px] mb-6">
              Wellness & Balance Resources
            </h2>
            <p className="font-['Poppins'] text-[#1e7872] text-lg leading-relaxed mb-6">
              Parenting is a journey that requires care for yourself, too. We&apos;ve compiled resources to support your mental health, stress management, and overall family wellness.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Self-care strategies for parents',
                'Work-life balance tips',
                'Stress management techniques',
                'Mindfulness and meditation',
                'Family wellness activities',
                'Sleep hygiene for all ages'
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-[#149496] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-['Poppins'] text-[#232e43]">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#149496] text-white px-8 py-3 rounded-full font-['Poppins'] uppercase tracking-wider hover:bg-[#1e7872] transition-colors"
            >
              Explore Wellness Resources
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// DOWNLOADS & FORMS
// ============================================================================
function DownloadsAndForms() {
  const documents = [
    {
      icon: 'document',
      title: 'Parent Handbook',
      description: 'Complete guide to our policies, procedures, and programs',
      size: '2.4 MB'
    },
    {
      icon: 'clipboard',
      title: 'Enrollment Forms',
      description: 'Required paperwork for new family enrollment',
      size: '1.8 MB'
    },
    {
      icon: 'shield',
      title: 'Safety Checklists',
      description: 'Home and outdoor safety guidelines for families',
      size: '850 KB'
    },
    {
      icon: 'calendar',
      title: 'Activity Calendars',
      description: 'Monthly themes, events, and learning activities',
      size: '1.2 MB'
    },
    {
      icon: 'chart',
      title: 'Behavior Charts',
      description: 'Positive behavior tracking tools for home use',
      size: '650 KB'
    },
    {
      icon: 'report',
      title: 'Daily Report Templates',
      description: 'Track meals, naps, activities, and milestones',
      size: '720 KB'
    },
    {
      icon: 'phone',
      title: 'Emergency Contact Sheets',
      description: 'Keep important contact information organized',
      size: '450 KB'
    },
    {
      icon: 'medical',
      title: 'Medical Forms',
      description: 'Medication authorization and health information forms',
      size: '980 KB'
    }
  ];

  return (
    <section className="bg-[#f5edda] py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:text-[40px] lg:leading-[52px] mb-4">
            Downloads & Forms
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-xl">
            Important documents and forms for families and staff
          </p>
        </motion.div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, index) => (
            <DownloadCard key={index} {...doc} index={index} />
          ))}
        </div>

        {/* Help Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-['Poppins'] text-[#1e7872] text-center mt-12"
        >
          All forms are available in PDF format. Need help filling them out?{' '}
          <a href="#contact" className="text-[#149496] underline hover:text-[#1e7872]">
            Contact us
          </a>
        </motion.p>
      </div>

      {/* Decorative Globe Icon */}
      <div className="absolute top-12 left-12 w-32 h-32 opacity-20">
        <GlobeIcon />
      </div>

      {/* Decorative Folder Icon */}
      <div className="absolute bottom-12 right-12 w-32 h-32 opacity-20">
        <FolderIcon />
      </div>
    </section>
  );
}

function DownloadCard({ icon, title, description, size, index }: {
  icon: string;
  title: string;
  description: string;
  size: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="bg-white rounded-2xl p-6 hover:shadow-xl transition-shadow cursor-pointer relative"
    >
      {/* Icon & Download Button */}
      <div className="flex items-start justify-between mb-6">
        <div className="bg-[rgba(20,148,150,0.1)] w-14 h-14 rounded-2xl flex items-center justify-center">
          {icon === 'document' && <DocumentIconDownload />}
          {icon === 'clipboard' && <ClipboardIcon />}
          {icon === 'shield' && <ShieldIcon />}
          {icon === 'calendar' && <CalendarIconDownload />}
          {icon === 'chart' && <ChartIconDownload />}
          {icon === 'report' && <ReportIcon />}
          {icon === 'phone' && <PhoneIconDownload />}
          {icon === 'medical' && <MedicalIconDownload />}
        </div>
        <div className="text-[#c49a3a]">
          <DownloadIconSmall />
        </div>
      </div>

      {/* Title */}
      <h3 className="font-['Poppins'] text-[#232e43] text-xl mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="font-['Poppins'] text-[#1e7872] text-sm leading-[22.75px] mb-4">
        {description}
      </p>

      {/* File Size */}
      <p className="font-['Poppins'] text-[rgba(20,148,150,0.7)] text-xs">
        {size}
      </p>
    </motion.div>
  );
}

// ============================================================================
// NEED HELP FINDING RESOURCES
// ============================================================================
function NeedHelpFindingResources() {
  const [selectedRole, setSelectedRole] = useState('');

  return (
    <section className="bg-white py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:text-[40px] lg:leading-[52px] mb-4">
            Need Help Finding Resources?
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-xl">
            Our team is here to connect you with the information you need
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-[#f5edda] rounded-3xl shadow-xl p-8 lg:p-12 mb-12"
        >
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block font-['Poppins'] text-[#232e43] mb-2">Your Name *</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <UserIconContact />
                </div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-white border-2 border-white rounded-2xl pl-12 pr-4 py-3 font-['Poppins'] text-[#232e43] placeholder:text-[rgba(35,46,67,0.5)] focus:outline-none focus:ring-2 focus:ring-[#149496]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block font-['Poppins'] text-[#232e43] mb-2">Email Address *</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <EmailIconContact />
                </div>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-white border-2 border-white rounded-2xl pl-12 pr-4 py-3 font-['Poppins'] text-[#232e43] placeholder:text-[rgba(35,46,67,0.5)] focus:outline-none focus:ring-2 focus:ring-[#149496]"
                />
              </div>
            </div>

            {/* Role Dropdown */}
            <div>
              <label className="block font-['Poppins'] text-[#232e43] mb-2">Who are you seeking resources for? *</label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full bg-white border-2 border-white rounded-2xl px-4 py-3 font-['Poppins'] text-[#232e43] focus:outline-none focus:ring-2 focus:ring-[#149496] appearance-none cursor-pointer"
                style={{ color: selectedRole ? '#232e43' : 'rgba(35,46,67,0.5)' }}
              >
                <option value="" disabled>Select an option</option>
                <option value="parent">Parent / Guardian</option>
                <option value="educator">Educator / Staff</option>
                <option value="intern">Intern / Student</option>
                <option value="partner">Community Partner</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block font-['Poppins'] text-[#232e43] mb-2">How can we help? *</label>
              <div className="relative">
                <div className="absolute left-4 top-4">
                  <MessageIconContact />
                </div>
                <textarea
                  rows={4}
                  placeholder="Tell us what resources or information you're looking for..."
                  className="w-full bg-white border-2 border-white rounded-2xl pl-12 pr-4 py-3 font-['Poppins'] text-[#232e43] placeholder:text-[rgba(35,46,67,0.5)] focus:outline-none focus:ring-2 focus:ring-[#149496] resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#149496] text-white px-8 py-4 rounded-2xl font-['Poppins'] uppercase text-base tracking-wider shadow-lg hover:bg-[#1e7872] transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto bg-gradient-to-b from-[#c49a3a] to-[#f6d33a] rounded-2xl shadow-xl p-8 text-center"
        >
          <h3 className="font-['Poppins'] text-[#232e43] text-2xl lg:text-[28px] lg:leading-[39.2px] mb-4">
            Get New Resources Every Month
          </h3>
          <p className="font-['Poppins'] text-[rgba(35,46,67,0.8)] mb-6">
            Subscribe to our newsletter for curated resources, parenting tips, and community updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white border-2 border-white rounded-full px-4 py-3 font-['Poppins'] text-[#232e43] placeholder:text-[rgba(35,46,67,0.5)] focus:outline-none focus:ring-2 focus:ring-[#232e43]"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#232e43] text-white px-6 py-3 rounded-full font-['Poppins'] hover:bg-[#1a2332] transition-colors whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Location Pin Icon */}
      <div className="absolute top-12 right-12 w-64 h-64 opacity-30 pointer-events-none hidden lg:block" style={{ transform: 'rotate(350deg)' }}>
        <LocationPinIcon />
      </div>

      {/* Decorative Paper Airplane Icon */}
      <div className="absolute bottom-12 left-12 w-64 h-64 opacity-30 pointer-events-none hidden lg:block" style={{ transform: 'rotate(342deg)' }}>
        <PaperAirplaneIcon />
      </div>
    </section>
  );
}

// ============================================================================
// FOOTER
// ============================================================================
function Footer() {
  return (
    <footer className="bg-[#232e43] py-12 lg:py-16">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logoImage} alt="Village Values" className="h-12 w-auto mb-4" />
            <p className="font-['Poppins'] text-white/70 text-sm">
              Nurturing young minds in a safe and caring environment.
            </p>
          </div>

          <div>
            <h3 className="font-['Poppins'] text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="font-['Poppins'] text-white/70 hover:text-white text-sm transition-colors">Home</a></li>
              <li><a href="#programs" className="font-['Poppins'] text-white/70 hover:text-white text-sm transition-colors">Programs</a></li>
              <li><a href="#about" className="font-['Poppins'] text-white/70 hover:text-white text-sm transition-colors">About</a></li>
              <li><a href="#enroll" className="font-['Poppins'] text-white/70 hover:text-white text-sm transition-colors">Enroll</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-['Poppins'] text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#resources" className="font-['Poppins'] text-white/70 hover:text-white text-sm transition-colors">Parent Resources</a></li>
              <li><a href="#resources" className="font-['Poppins'] text-white/70 hover:text-white text-sm transition-colors">Health & Safety</a></li>
              <li><a href="#resources" className="font-['Poppins'] text-white/70 hover:text-white text-sm transition-colors">Community Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-['Poppins'] text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="font-['Poppins'] text-white/70 text-sm">123 Main Street</li>
              <li className="font-['Poppins'] text-white/70 text-sm">Anytown, ST 12345</li>
              <li className="font-['Poppins'] text-white/70 text-sm">(555) 123-4567</li>
              <li className="font-['Poppins'] text-white/70 text-sm">info@villagevalues.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['Poppins'] text-white/60 text-sm text-center md:text-left">
            © 2024 Village Values Daycare. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <FacebookIconSmall />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <InstagramIconSmall />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <TwitterIconSmall />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// DECORATIVE VECTORS (All at 50% opacity)
// ============================================================================
function DecorativeVectorHouse({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
        <g opacity="0.5">
          <path d={svgPaths.p2f98fdf0} fill="#E5795B" />
          <path d={svgPaths.p14f1c380} fill="#E5795B" />
          <path d={svgPaths.p244d6640} fill="#E5795B" />
          <path d={svgPaths.p327f8e00} fill="#E5795B" />
        </g>
      </svg>
    </div>
  );
}

function DecorativeVectorTree({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 310 303">
        <g opacity="0.5">
          <path d={svgPaths.p3c08cf00} fill="#149496" />
          <path d={svgPaths.p20c6d400} fill="#149496" />
          <path d={svgPaths.pd699f00} fill="#149496" />
          <path d={svgPaths.p1e015c00} fill="#149496" />
          <path d={svgPaths.pb2a9280} fill="#149496" />
        </g>
      </svg>
    </div>
  );
}

function DecorativeVectorGrass({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
        <g opacity="0.5">
          <path d={svgPaths.p15f51900} fill="#1E7872" />
          <path d={svgPaths.p2b360600} fill="#1E7872" />
          <path d={svgPaths.p3b3d4d00} fill="#1E7872" />
          <path d={svgPaths.p2eb2a780} fill="#1E7872" />
          <path d={svgPaths.p171c380} fill="#1E7872" />
          <path d={svgPaths.p1030c600} fill="#1E7872" />
          <path d={svgPaths.p26c23280} fill="#1E7872" />
        </g>
      </svg>
    </div>
  );
}

// ============================================================================
// ICONS
// ============================================================================
function SearchIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <path d="M21 21L16.66 16.66" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p19568f00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function ChildIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.p12922f00} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d="M20 16H20.0133" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p2b75c580} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d="M12 16H12.0133" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function GroupIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.p9921600} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function HealthIconSmall() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.p186c1a00} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function SafetyIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.pae2ff80} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function BehaviorIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.p194b3700} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function ActivitiesIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.p1b4f5d00} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function ReadingIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d="M16 9.33333V28" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p308d0700} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function MentalHealthIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.pbbd9800} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d="M26.6667 2.66667V8" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d="M29.3333 5.33333H24" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.pecb2400} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function SpecialNeedsIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.p13a8aa80} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.pf6f00} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p17d8f380} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p3b88f000} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p3c98a360} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPaths.p184ba090} stroke="#C49A3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p182f3148} stroke="#C49A3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p2f1426c0} stroke="#C49A3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p5d36b00} stroke="#C49A3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
    </svg>
  );
}

function FacebookIconSmall() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIconSmall() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TwitterIconSmall() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
}

function DocumentIconDownload() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d="M17.5 2.33333H7C5.52724 2.33333 4.33333 3.52724 4.33333 5V23C4.33333 24.4728 5.52724 25.6667 7 25.6667H21C22.4728 25.6667 23.6667 24.4728 23.6667 23V8.5M17.5 2.33333L23.6667 8.5M17.5 2.33333V8.5H23.6667M9.33333 10.5H11.6667M18.6667 15.1667H9.33333M18.6667 19.8333H9.33333" stroke="#149496" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d="M18.6667 4.66667H21C22.4728 4.66667 23.6667 5.86057 23.6667 7.33333V23.3333C23.6667 24.8061 22.4728 26 21 26H7C5.52724 26 4.33333 24.8061 4.33333 23.3333V7.33333C4.33333 5.86057 5.52724 4.66667 7 4.66667H9.33333M11.6667 2.33333H16.3333C17.0697 2.33333 17.6667 2.9303 17.6667 3.66667V5.66667C17.6667 6.40305 17.0697 7 16.3333 7H11.6667C10.9303 7 10.3333 6.40305 10.3333 5.66667V3.66667C10.3333 2.9303 10.9303 2.33333 11.6667 2.33333Z" stroke="#149496" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d="M14 25.6667C14 25.6667 23.3333 21 23.3333 14V5.83333L14 2.33333L4.66667 5.83333V14C4.66667 21 14 25.6667 14 25.6667Z" stroke="#149496" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarIconDownload() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d="M9.33333 2.33333V7M18.6667 2.33333V7M3.5 11.6667H24.5M6.33333 4.66667H21.6667C23.1394 4.66667 24.3333 5.86057 24.3333 7.33333V22.6667C24.3333 24.1394 23.1394 25.3333 21.6667 25.3333H6.33333C4.86057 25.3333 3.66667 24.1394 3.66667 22.6667V7.33333C3.66667 5.86057 4.86057 4.66667 6.33333 4.66667Z" stroke="#149496" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChartIconDownload() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d="M14 23.3333V11.6667M21 23.3333V4.66667M7 23.3333V18.6667" stroke="#149496" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ReportIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d="M4.66667 14L11.6667 21L23.3333 7" stroke="#149496" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIconDownload() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d="M25.6667 19.8333V23.3333C25.6667 24.8061 24.4728 26 22.9999 26C10.297 26 0 15.703 0 3C0 1.52724 1.19391 0.333333 2.66667 0.333333H6.16667C7.63943 0.333333 8.83333 1.52724 8.83333 3V6.5C8.83333 7.97276 7.63943 9.16667 6.16667 9.16667H4.66667C4.66667 15.6155 9.88449 20.8333 16.3333 20.8333V19.3333C16.3333 17.8606 17.5272 16.6667 19 16.6667H22.5C23.9728 16.6667 25.1667 17.8606 25.1667 19.3333" stroke="#149496" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MedicalIconDownload() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d="M4.66667 14C4.66667 19.1547 8.8453 23.3333 14 23.3333C19.1547 23.3333 23.3333 19.1547 23.3333 14C23.3333 8.8453 19.1547 4.66667 14 4.66667C8.8453 4.66667 4.66667 8.8453 4.66667 14ZM14 9.33333V18.6667M9.33333 14H18.6667" stroke="#149496" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DownloadIconSmall() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path d="M0.833333 10.8333V0.833333M0.833333 10.8333L4.16667 7.5M0.833333 10.8333L-2.5 7.5" stroke="#C49A3A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" transform="translate(10 4)" />
      <path d="M2.5 13.3333L2.5 14.1667C2.5 15.5474 3.61929 16.6667 5 16.6667L15 16.6667C16.3807 16.6667 17.5 15.5474 17.5 14.1667L17.5 13.3333" stroke="#C49A3A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" stroke="#149496" strokeWidth="3" opacity="0.5" />
      <path d="M50 10 Q70 50 50 90 Q30 50 50 10" stroke="#149496" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M50 10 Q30 50 50 90 Q70 50 50 10" stroke="#149496" strokeWidth="2" fill="none" opacity="0.5" />
      <line x1="10" y1="50" x2="90" y2="50" stroke="#149496" strokeWidth="2" opacity="0.5" />
      <line x1="50" y1="10" x2="50" y2="90" stroke="#149496" strokeWidth="2" opacity="0.5" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 100 100">
      <path d="M10 20 L40 20 L50 30 L90 30 L90 80 L10 80 Z" stroke="#C49A3A" strokeWidth="3" fill="none" opacity="0.5" />
      <path d="M10 30 L90 30" stroke="#C49A3A" strokeWidth="2" opacity="0.5" />
    </svg>
  );
}

function UserIconContact() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path d="M15.8333 17.5V15.8333C15.8333 14.9493 15.4821 14.1014 14.857 13.4763C14.2319 12.8512 13.3841 12.5 12.5 12.5H7.5C6.61594 12.5 5.7681 12.8512 5.14298 13.4763C4.51786 14.1014 4.16667 14.9493 4.16667 15.8333V17.5" stroke="#1E7872" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsContact.p32ab0300} stroke="#1E7872" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EmailIconContact() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path d={svgPathsContact.pd919a80} stroke="#1E7872" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsContact.p24d83580} stroke="#1E7872" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MessageIconContact() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path d={svgPathsContact.p12dcd500} stroke="#1E7872" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LocationPinIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
      <path d={svgPathsContact.p330d0e80} fill="#149496" opacity="0.3" />
      <path d={svgPathsContact.p5247f00} fill="#149496" opacity="0.3" />
    </svg>
  );
}

function PaperAirplaneIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
      <path d={svgPathsContact.p1756200} fill="#C49A3A" opacity="0.3" />
    </svg>
  );
}
